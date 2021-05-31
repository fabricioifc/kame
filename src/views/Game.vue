<template>
  <section>
    
    <div v-if="!status.pronto" class="carregando">
      <code>Carregando Jogo...</code>
    </div>
    <div v-if="status.pronto && !status.iniciar" class="carregando">
      <code><button @click="status.iniciar = true">Jogar</button></code>
    </div>

    <div class="pergunta" v-show="status.pronto && status.iniciar">
      <h1>Qual é a bandeira do contestado?</h1>

      <span class="bandeiras"
        v-bind:key="item.code"
        v-for="item in bandeiras">
          <Bandeira :bandeira=item 
            :class="!selecionada ? '' : item == selecionada ? 'selecionada' : 'outras'" 
            @click="enviar"
            />
      </span>

      <div class="verificar" v-show="selecionada != null && !status.terminou">
        <hr>
        <button @click="enviar" class="btn" type="button">Tem Certeza?</button>
      </div>
    </div>

    <p>{{resultado}}</p>

    <div v-if="selecionada != null && status.terminou && status.acertou">
      <Bandeira :bandeira=selecionada />
    </div>

    <div v-show="status.terminou">
      <button @click="play" class="btn btn-primary" type="button">
        {{status.acertou ? 'Jogar' : 'Tentar Novamente'}}
      </button>
    </div>
      
  </section>
</template>

<script>
import Bandeira from '../components/Bandeira.vue'
import getBandeirasRemote from '../services/bandeiras'
export default {
  props: [],
  components: { Bandeira },
  name: 'Game',
  data() {
    return {
      bandeiras: [],
      selecionada: null,
      resultado: null,

      status: {
        acertou: false,
        iniciar: false,
        pronto: false,
        terminou: false,
      }
      
    }
  },
  created() {
    this.play()
  },
  methods: {
    async play() {
      this.bandeiras = await getBandeirasRemote(10).finally(() => {
        this.status.terminou = false
        this.status.acertou = false;
        this.selecionada = null;
        this.resultado = null
        this.status.pronto = true
      })
    },
    escolher: function(bandeira) {
      if (this.status.terminou) {
        return false
      }

      const mesmaEscolha = this.selecionada && this.selecionada == bandeira
      if (mesmaEscolha) {
        this.selecionada = null
        return false
      }
      this.selecionada = bandeira
      console.log(this.selecionada)
    },

    enviar: function() {
      
      if (!this.selecionada){
        alert('Escolha uma bandeira')
        return false;
      }
      console.log(this.selecionada);
      this.status.acertou = this.selecionada.contestado

      if (this.status.acertou) {
        this.resultado = 'Parabéns! Essa é a bandeira do contestado!'
      } else {
        this.resultado = 'Que pena! Tente novamente!'
      }
      this.status.terminou = true
    }
  },
  
}
</script>

<style lang="scss" scoped>

  section {
    margin: 0 auto;
    width: 50%;
    text-align: center;
  }

  div.carregando {
    margin: 2rem;
    font-size: 2rem;
  }

  span.bandeiras {
    margin-right: 10px;
  }

  span.bandeiras.active {
    background-color: red;
  }

  button.btn {
    margin: 0 auto;
    display: block;
    margin-top: 10px;
  }

</style>