<template>
  <section>
    <div class="pergunta">
      <h1>Qual é a bandeira do contestado?</h1>

      <span class="bandeiras"
        v-bind:key="b.id" 
        v-for="b in bandeiras">
          <Bandeira :bandeira=b 
            :width=100 :height=65
            :class="!selecionada ? '' : b.id == selecionada.id ? 'selecionada' : 'outras'" 
            @click="enviar"
            />
      </span>

      <div class="verificar" v-show="selecionada != null && !terminou">
        <hr>
        <button @click="enviar" class="btn" type="button">Tem Certeza?</button>
      </div>
    </div>

    <p>{{resultado}}</p>

    <div v-if="selecionada != null && terminou && acertou">
      <Bandeira :bandeira=selecionada :width=200 :height=130 />
    </div>

    <div v-show="terminou">
      <button @click="play" class="btn btn-primary" type="button">
        {{acertou ? 'Jogar' : 'Tentar Novamente'}}
      </button>
    </div>
      
  </section>
</template>

<script>
import Bandeira from '../components/Bandeira.vue'
export default {
  props: [],
  components: { Bandeira },
  name: 'Game',
  data() {
    return {
      bandeiras: [
        {id: 1, name: 'Brazil', contestado: false, image: 'bandeiras/band_brasil.jpg'},
        {id: 2, name: 'País de Gales', contestado: false, image: 'bandeiras/band_gales.png'},
        {id: 3, name: 'Contestado', contestado: true, image: 'bandeiras/band_contestado.png'},
        {id: 4, name: 'Paraguái', contestado: false, image: 'bandeiras/band_paraguai.png'},
      ],
      selecionada: null,
      resultado: null,
      acertou: false,
      terminou: false
    }
  },
  // created() {
  //   // this.bandeiras.sort()
  //   console.log(this.bandeiras);
  // },
  methods: {
    play() {
      this.terminou = false
      this.acertou = false;
      this.selecionada = null;
      this.resultado = null
    },
    escolher: function(bandeira) {
      if (this.terminou) {
        return false
      }

      const mesmaEscolha = this.selecionada && this.selecionada.id == bandeira.id
      if (mesmaEscolha) {
        this.selecionada = null
        return false
      }
      this.selecionada = bandeira
      console.log(this.selecionada.name)
    },
    enviar: function() {
      
      if (!this.selecionada){
        alert('Escolha uma bandeira')
        return false;
      }
      console.log(this.selecionada);
      this.acertou = this.selecionada.contestado

      if (this.acertou) {
        this.resultado = 'Parabéns! Essa é a bandeira do contestado!'
      } else {
        this.resultado = 'Que pena! Tente novamente!'
      }
      this.terminou = true
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