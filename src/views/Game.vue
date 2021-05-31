<template>
  <section>
    <div v-if="!pronto" class="carregando">
      <code>Carregando Jogo...</code>
    </div>
    <div class="pergunta" v-if="pronto">
      <h1>Qual é a bandeira do contestado?</h1>

      <span class="bandeiras"
        v-bind:key="item.code"
        v-for="item in bandeiras">
          <Bandeira :bandeira=item 
            :class="!selecionada ? '' : item == selecionada ? 'selecionada' : 'outras'" 
            @click="enviar"
            />
      </span>

      <!-- <span class="bandeiras"
        v-bind:key="b.id" 
        v-for="b in bandeiras">
          <Bandeira :bandeira=b 
            :width=100 :height=65
            :class="!selecionada ? '' : b.id == selecionada.id ? 'selecionada' : 'outras'" 
            @click="enviar"
            />
      </span> -->

      <div class="verificar" v-show="selecionada != null && !terminou">
        <hr>
        <button @click="enviar" class="btn" type="button">Tem Certeza?</button>
      </div>
    </div>

    <p>{{resultado}}</p>

    <div v-if="selecionada != null && terminou && acertou">
      <Bandeira :bandeira=selecionada />
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
      bandeiras: [],
      pronto: false,
      selecionada: null,
      resultado: null,
      acertou: false,
      terminou: false,
    }
  },
  beforeMount() {
    this.play()
    
  },
  methods: {
    play() {
      let codes;
    this.bandeiras = []
    fetch('https://flagcdn.com/en/codes.json')
      .then(response => response.json())
      .then(data => codes = Object.keys(data))
      .then(() => {
        codes.sort(() => Math.random() - 0.5)
        codes = codes.slice(0, 19)
        
        codes.forEach(item => {
          this.bandeiras.push(
            {code: item, contestado: false, image: `https://flagcdn.com/108x81/${item}.webp`}
          )
        });
        this.bandeiras.push(
          {code: 'contestado', contestado: true, image: require('@/assets/bandeiras/band_contestado.png')}
        )

        this.bandeiras.sort(() => Math.random() - 0.5)
        // console.log(this.bandeiras);
      }).finally(
        () => {
            setInterval(() => {
            this.pronto = true
          }, 1000);
        }
      )
      
      this.terminou = false
      this.acertou = false;
      this.selecionada = null;
      this.resultado = null
    },
    escolher: function(bandeira) {
      if (this.terminou) {
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