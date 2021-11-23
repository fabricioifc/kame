<template>
  <div class="bg-dark text-light">
    <b-row class="fundo-landing">
      <b-col class="col-xs-12 col-md-6" cols="6">
        <b-img
          :src="require('@/assets/images/logo_inicio.png')"
          class="landing-page-logo"
          alt=""
          fluid
        />
      </b-col>
      <b-col class="col-xs-12 col-md-6" cols="6">
        <!-- a marca dágua do if lá, aquela que tem que colocar no topo direito -->
        <!-- <b-img :src="require('@/assets/images/marca-dagua-if')" class="marca-dagua-if" alt="" />-->
        <b-container>
          <h1 class="titulo-homepage">
            VAMOS <br />
            NAVEGAR?
          </h1>
          <b-button class="next-page" @click="scrollToElement">
            <b-icon-arrow-down></b-icon-arrow-down> Vamos Lá!
          </b-button>
          <p class="escrita-homepage">
            Aproveite essa experiência e saiba <br />
            mais sobre a história do Contestado.
          </p>
        </b-container>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="6">
        <b-link to="galeria">
          <b-img
            ref="scrollToMe"
            :src="require('@/assets/images/home_mapa.png')"
            alt=""
            fluid
          />
        </b-link>
      </b-col>
      <b-col cols="6">
        <h3 class="mt-3 mb-5">Mapa interativo</h3>
        <div class="text-center">
          <h1>Sobre o Projeto</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nulla
            accusantium earum nobis natus magnam cum quidem ipsam sequi. Iure
            soluta nam doloremque quis totam vero! Officia eligendi quidem
            atque.
          </p>
        </div>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="4">
        <b-link to="acervo">
          <b-img
            :src="require('@/assets/images/home_nav_1.png')"
            alt="Conteúdo"
            fluid
          ></b-img>
        </b-link>
      </b-col>
      <b-col cols="4">
        <b-link to="jogos">
          <b-img
            :src="require('@/assets/images/home_nav_2.png')"
            alt="Jogos"
            fluid
          ></b-img>
        </b-link>
      </b-col>
      <b-col cols="4">
        <b-link to="acervo">
          <b-img
            :src="require('@/assets/images/home_nav_3.png')"
            alt="Acervo Virtual"
            fluid
          ></b-img>
        </b-link>
      </b-col>
      <b-col cols="12">
        <b-img
          :src="require('@/assets/images/home_nav_4.png')"
          alt="Pessoas"
          fluid
        ></b-img>
      </b-col>
    </b-row>

    <b-row class="align-items-center">
      <b-col cols="6" class="text-center mt-3">
        <p class="">Espaço Físico</p>
        <p class="museu-text font-weight-bold">O Museu</p>
      </b-col>
      <b-col class="">
        <p class="text-center font-weight-bold contato">E-MAIL</p>
        <p class="text-center small">alo@sitebacana.com.br</p>
      </b-col>
      <b-col>
        <p class="text-center font-weight-bold contato">TELEFONE</p>
        <p class="text-center small">(12) 3456-7890</p>
      </b-col>
      <b-col>
        <p class="text-center font-weight-bold contato">ENDEREÇO</p>
        <p class="text-center small">Rua Qualquer, 123 - Cidade, SP</p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  methods: {
    scrollToElement() {
      const el = this.$refs.scrollToMe;

      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style scoped>
.museu-text {
  font-size: 6rem;
}

.contato {
  margin-bottom: 0.2rem;
}

.fundo-landing {
  margin-top: 5%;
  /* background-color: #011401; */
  padding-bottom: 20px;
}

.card-img-overlay {
  text-align: center;
  top: 30px;
  /* bottom: 30px; */
}

.teste {
  overflow-x: hidden;
}

.landing-page-logo {
  width: 80%;
  height: 90%;
  margin-top: 6%;
  margin-left: 23%;
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
.titulo-homepage {
  font-family: "Antonio", sans-serif;
  color: white;
  font-size: 100px;
  text-align: left;
  margin-top: 15%;
  font-weight: 700;
}

.escrita-homepage {
  font-family: "Anonymous Pro", monospace;
  color: white;
  margin-top: 5%;
}

.next-page {
  height: 48px;
  border: none;
  border-radius: 0px;
  background-color: rgba(255, 255, 255, 0.096);
  font-family: "Anonymous Pro", monospace;
  margin-top: 3%;
  /* margin-left: 10%; */
  font-weight: bold;
}
</style>