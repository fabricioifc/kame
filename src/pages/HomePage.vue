<template>
  <div>
    <!-- CARD COM IMAGEM -->
    <b-card
      overlay
      :img-src="require('@/assets/images/contestado_1.jpg')"
      img-alt="Card Image"
      text-variant="white"
    >
      <b-card-text>
        <h5>IFC Fraiburgo</h5>
        <h1>Guerra do Contestado</h1>
        <b-button variant="dark">VAMOS LÁ!</b-button>
      </b-card-text>
    </b-card>

    <b-row>
      <b-col>
        <b-img
          :src="require('@/assets/images/home_mapa.png')"
          alt=""
        />
      </b-col>
      <b-col>
        <h3 class="mt-3 mb-5">Mapa interativo</h3>
        <div class="text-center">
          <h1>Sobre o Projeto</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nulla accusantium earum nobis natus magnam cum quidem ipsam sequi. Iure soluta nam doloremque quis totam vero! Officia eligendi quidem atque.</p>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
.card-img-overlay {
  text-align: center;
  top: 30px;
  /* bottom: 30px; */
}
@media only screen and (max-width: 900px) {
  .card-img-overlay {
    text-align: center;
    top: auto;
    bottom: 30px;
  }
}

.card-img {
  opacity: 0.8;
}
</style>