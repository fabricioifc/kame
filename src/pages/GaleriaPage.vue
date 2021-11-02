<template>
  <div>
    <b-row> </b-row>
    <b-col cols="12" class="text-center mt-3">
      <p class="museu-text font-weight-bold">Personagens Importanates:</p>
    </b-col>

    <b-row>
      <b-col cols="6" class="text-center mt-3">
        <p class="museu-text font-weight-bold">Exercito do Brasil:</p>
        <b-carousel
          id="carousel-1"
          :interval="4000"
          controls
          indicators
          background="#ababab"
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Text slides with image -->
          <b-carousel-slide
            caption="João Gualberto Gomes de Sá Filho"
            text="Militar brasileiro bem sucessedido, graduado como Bacharel em Ciências Físicas e Matemáticas, foi prefeito de Curitiba, mas morreu na batalha do Irani."
            :img-src="require('@/assets/images/gualberto.png')"
          ></b-carousel-slide>

          <b-carousel-slide
            caption="Carlos Frederico de Mesquita Tertuliano Potiguara"
            text="Militar que havia lutado na guerra dos canudos pelos brasileiros, que tentou um acordo sem êxito, depois atacou Santo Antonio que forçou os rebeldes fugirem."
            :img-src="require('@/assets/images/tertuliano.jpg')"
          ></b-carousel-slide>

          <b-carousel-slide
            caption="Hermes da fonseca contestado"
            text="Hermes Rodrigues da Fonseca foi um militar e político brasileiro, presidente do Brasil entre 1910 e 1914. Foi o primeiro gaúcho a ser eleito presidente da República"
            :img-src="require('@/assets/images/fonseca.jpg')"
          ></b-carousel-slide>
        </b-carousel>

        <p class="mt-4">{{ sliding }}</p>
      </b-col>

      <b-col class="text-center mt-3">
        <p class="museu-text font-weight-bold">Rebeldes:</p>
        <b-carousel
          id="carousel-1"
          :interval="4000"
          controls
          indicators
          background="#ababab"
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Text slides with image -->
          <b-carousel-slide
            caption="José Maria de Santo Agostinho"
            text="José Maria de Santo Agostinho, era um místico brasileiro do Estado de Santa Catarina."
            :img-src="require('@/assets/images/imagem1.jpg')"
          ></b-carousel-slide>

          <!-- Slides with custom text -->
          <b-carousel-slide
            caption="Maria Rosa"
            text="Maria Rosa, conhecida como “menina santa” foi uma das seguidoras mais fiéis e fervorosas do monge José Maria"
            :img-src="require('@/assets/images/imagem2.jpeg')"
          ></b-carousel-slide>

          <b-carousel-slide
            caption="Deodato Manoel Ramos"
            text="Deodato Manuel Ramos, considerado pelos historiadores como o último líder dos contestadores. Adeodato transferiu o núcleo dos revoltosos para o vale de Santa Maria, que contava ainda com cerca de 50 mil homens."
            :img-src="require('@/assets/images/adeodato.jpg')"
          ></b-carousel-slide>
        </b-carousel>

        <p class="mt-4">{{ sliding }}</p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>


<script>
export default {
  name: "Galeria",
};
</script>

<style>
</style>