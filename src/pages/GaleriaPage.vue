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
          <b-carousel-slide :img-src="require('@/assets/images/gualberto.png')">
            <h1>João Gualberto Gomes de Sá Filho</h1>
          </b-carousel-slide>

          <b-carousel-slide
            :img-src="require('@/assets/images/tertuliano.jpg')"
          >
            <h1>Carlos Frederico de Mesquita Tertuliano Potiguara</h1>
          </b-carousel-slide>

          <b-carousel-slide :img-src="require('@/assets/images/fonseca.jpg')">
            <h1>Hermes Rodrigues da Fonseca</h1>
          </b-carousel-slide>
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
          <b-carousel-slide :img-src="require('@/assets/images/imagem1.jpg')">
            <h1>José Maria de Santo Agostinho</h1>
          </b-carousel-slide>

          <!-- Slides with custom text -->
          <b-carousel-slide :img-src="require('@/assets/images/imagem2.jpeg')">
            <h1>Maria Rosa</h1>
          </b-carousel-slide>

          <b-carousel-slide :img-src="require('@/assets/images/adeodato.jpg')">
            <h1>Deodato Manoel Ramos</h1>
          </b-carousel-slide>
        </b-carousel>

        <p class="mt-4">{{ sliding }}</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="6" class="text-center mt-3">
        <p class="museu-text font-weight-bold">
          João Gualberto Gomes de Sá Filho Militar brasileiro bem sucessedido,
          graduado como Bacharel em Ciências Físicas e Matemáticas, foi prefeito
          de Curitiba, mas morreu na batalha do Irani.
        </p>
        <p class="museu-text font-weight-bold">
          Frederico de Mesquita Tertuliano Potiguara Militar que havia lutado na
          guerra dos canudos pelos brasileiros, que tentou um acordo sem êxito,
          depois atacou Santo Antonio que forçou os rebeldes fugirem.
        </p>
        <p class="museu-text font-weight-bold">
          Hermes Rodrigues da Fonseca foi um militar e político brasileiro,
          presidente do Brasil entre 1910 e 1914. Foi o primeiro gaúcho a ser
          eleito presidente da República.
        </p>
      </b-col>
      <b-col cols="6" class="text-center mt-3">
        <p class="museu-text font-weight-bold">
          José Maria de Santo Agostinho, era um místico brasileiro do Estado de
          Santa Catarina.
        </p>
        <p class="museu-text font-weight-bold">
          Maria Rosa, conhecida como “menina santa” foi uma das seguidoras mais
          fiéis e fervorosas do monge José Maria
        </p>
        <p class="museu-text font-weight-bold">
          Deodato Manuel Ramos, considerado pelos historiadores como o último
          líder dos contestadores. Adeodato transferiu o núcleo dos revoltosos
          para o vale de Santa Maria, que contava ainda com cerca de 50 mil
          homens
        </p>
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