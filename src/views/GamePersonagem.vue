<script>
    console.log('euqijo')
</script>

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
      <code><button @click="status.iniciar = true" class="btn-jogar">Jogar</button></code>
    </div>
    <div
      class="pergunta"
      v-show="status.pronto && status.iniciar"
    >
    <div class="fundo">
      <h1>Qual desses é o João Maria?</h1>
      <p><code>{{status.tentativas}} tentativas</code></p>

      <span
        class="personagens"
        v-bind:key="item.code"
        v-for="item in personagens"
      >
        <Personagem
          :personagem=item
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
      class="btn-reiniciar"
      type="button"
    >
      {{status.acertou ? 'Reiniciar o Jogo' : 'Tentar Novamente'}}
    </button>

    <button
      v-show="status.terminou"
      @click="play"
      class="btn-reiniciar"
      type="button"
    >
      Reiniciar o Jogo
    </button>
</div>
  </section>
</template>

<script>
import Personagem from "../components/Personagem.vue";
import getPersonagensRemote from "../services/personagens.js";
export default {
  props: [],
  components: { Personagem },
  name: "GamePersonagem",
  data() {
    return {
      personagens: [],
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
        this.personagens = await getPersonagensRemote(7);
        this.status.pronto = true;
        this.status.tentativas = 3;
        this.status.terminou = false;
      }
    },
    escolher: function (personagem) {
      if (this.status.errou) {
        return false;
      }

      const mesmaEscolha = this.selecionada && this.selecionada == personagem;
      if (mesmaEscolha) {
        this.selecionada = null;
        return false;
      }
      this.selecionada = personagem;
      console.log(this.selecionada);
    },

    enviar: function () {
      if (this.selecionada) {
        this.status.acertou = this.selecionada.contestado;

        if (!this.status.acertou) {
          this.status.tentativas -= 1;
        }

        if (this.status.acertou) {
          this.resultado = "Parabéns! Esse é João Maria!";
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

.fundo{
    padding-bottom: 5%;
}

section {
  margin: 0 auto;
  text-align: center;       
}
h1{
    padding-top:2%; 
    font-family: "Antonio", sans-serif;
    color: black;
}
p{
    font-family: "Anonymous Pro", monospace;
    color: black;
}
div.carregando {
  margin: 2rem;
  font-size: 2rem;
}

.personagens {
  margin-right: 10px;
}

.personagens.active {
  background-color: red;
}

button.btn { 
  margin: 0 auto;
  display: block;
  margin-top: 10px;
  border-color: black;
  width: 20%;
  background-color: rgba(0, 0, 0, 0.13);
  color: black;
}
.btn-jogar{
  border-radius: 8px;
  margin: 0 auto;
  display: block;
  margin-top: 20%;
  border-color: white;
  width: 20%;
  background-color: #022c02;
  color: white;
}

.btn-reinicar{
  display: block;
  border-color: black;
  width: 20%;
  background-color: rgba(247, 247, 247, 0.13);
  color: white;
}
</style>