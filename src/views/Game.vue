<template>
  <section class="pt-5">

    <div
      v-if="!status.pronto"
      class="carregando"
    >
      <code>Carregando Jogo...</code>
    </div>
    <div
      v-if="status.pronto && !status.iniciar"
      class="carregando"
    >
      <code><button @click="status.iniciar = true">Jogar</button></code>
    </div>

    <div
      class="pergunta"
      v-show="status.pronto && status.iniciar"
    >
      <h1>Qual é a bandeira do contestado?</h1>
      <p><code>{{status.tentativas}} tentativas</code></p>

      <span
        class="bandeiras"
        v-bind:key="item.code"
        v-for="item in bandeiras"
      >
        <Bandeira
          :bandeira=item
          :class="!selecionada ? '' : item == selecionada ? 'selecionada' : 'outras'"
          @click="enviar"
        />
      </span>

      <div
        class="verificar"
        v-show="selecionada != null && (!status.errou && !status.terminou)"
      >
        <hr>
        <button
          @click="enviar"
          class="btn"
          type="button"
        >Tem Certeza?</button>
      </div>
    </div>

    <p>{{resultado}}</p>

    <button
      v-show="status.errou"
      @click="play"
      class="btn btn-primary"
      type="button"
    >
      {{status.acertou ? 'Reiniciar o Jogo' : 'Tentar Novamente'}}
    </button>

    <button
      v-show="status.terminou"
      @click="play"
      class="btn btn-primary"
      type="button"
    >
      Reiniciar o Jogo
    </button>

  </section>
</template>

<script>
import Bandeira from "../components/Bandeira.vue";
import getBandeirasRemote from "../services/bandeiras";
export default {
  props: [],
  components: { Bandeira },
  name: "Game",
  data() {
    return {
      bandeiras: [],
      selecionada: null,
      resultado: null,

      status: {
        acertou: false,
        iniciar: false,
        pronto: false,
        errou: false,
        tentativas: null,
        terminou: false,
      },
    };
  },
  created() {
    this.status.pronto = false;
    this.play();
  },
  methods: {
    async play() {
      this.status.errou = false;
      this.status.acertou = false;
      this.selecionada = null;
      this.resultado = null;

      if (!this.status.pronto || this.status.acertou || this.status.terminou) {
        this.bandeiras = await getBandeirasRemote(10);
        this.status.pronto = true;
        this.status.tentativas = 3;
        this.status.terminou = false;
      }
    },
    escolher: function (bandeira) {
      if (this.status.errou) {
        return false;
      }

      const mesmaEscolha = this.selecionada && this.selecionada == bandeira;
      if (mesmaEscolha) {
        this.selecionada = null;
        return false;
      }
      this.selecionada = bandeira;
      console.log(this.selecionada);
    },

    enviar: function () {
      if (this.selecionada) {
        this.status.acertou = this.selecionada.contestado;

        if (!this.status.acertou) {
          this.status.tentativas -= 1;
        }

        if (this.status.acertou) {
          this.resultado = "Parabéns! Essa é a bandeira do contestado!";
          this.status.terminou = true;
        } else if (this.status.tentativas == 0) {
          this.resultado = "Game Over!";
          this.status.terminou = true;
        } else {
          this.resultado = "Que pena! Tente novamente!";
          this.status.errou = true;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  margin: 0 auto;
  text-align: center;
}

div.carregando {
  margin: 2rem;
  font-size: 2rem;
}

.bandeiras {
  margin-right: 10px;
}

.bandeiras.active {
  background-color: red;
}

button.btn {
  margin: 0 auto;
  display: block;
  margin-top: 10px;
}
</style>