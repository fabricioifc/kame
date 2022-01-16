<template>
  <div>
    <div class="home">
      <b-row class="bg-dark text-light">
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
    </div>
    <b-row>
      <div ref="scrollToMe" class="box-home">
        <b-col cols="4">
          <h1 class="titulo-homepage-mapa">
            VOCÊ SABIA <br />QUE TEMOS <br />
            UM MAPA <br />
            INTERATIVO?
          </h1>
        </b-col>
        <b-col cols="4">
          <b-link class="smarthphone-home" to="mapa">
            <b-img :src="require('@/assets/images/celular.png')" alt="" fluid />
          </b-link>
        </b-col>
        <b-col cols="4">
          <div class="list-conflicts" cols="3">
            <h4 class="subtitle-home-mapa">Áreas de conflito</h4>
            <p class="paragraph-home">
              No mapa você encontra as principais localizações onde ocorreu a
              guerra do contestado
            </p>
            <ul class="list-home">
              <li class="paragraph-home">Santa Catarina</li>

              <li class="paragraph-home">Paraná</li>

              <li class="paragraph-home">Rio Grande do Sul</li>
            </ul>
          </div>
        </b-col>
      </div>
      <div class="box-home2">
        <b-row>
          <b-col cols="4">
            <b-link to="galeria">
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
        </b-row>
      </div>
      <div class="box-home-sobre">
        <b-col cols="4">
          <h1 class="titulo-homepage-sobre">Entre em contato</h1>
          <hr class="linha-titulo" />
          <ul class="list-sobre">
            <li class="paragraph-home contato-sobre">(49) 3202-8810</li>

            <li class="paragraph-home contato-sobre">brasilkame@gmail.com</li>

            <li class="paragraph-home contato-sobre">
              www.fraiburgo.ifc.edu.br
            </li>
          </ul>
          <hr class="linha-titulo" />
        </b-col>
        <b-col cols="4">
          <div class="time">
            <h4 class="subtitle-home-sobre">O Time</h4>
            <div class="time-item">
              <b-col cols="8" class="item-time">
                <h6 class="nome-time">Marilia Garces</h6>
                <span class="span-time">Aluna IFC Fraiburgo</span>
              </b-col>
              <b-col cols="4">
                <b-img
                  :src="require('@/assets/images/marilia.png')"
                  alt="Conteúdo"
                  fluid
                ></b-img>
              </b-col>
            </div>

            <div class="time-item">
              <b-col cols="8" class="item-time">
                <h6 class="nome-time">João Eduardo</h6>
                <span class="span-time">Aluno IFC Fraiburgo</span>
              </b-col>
              <b-col cols="4">
                <b-img
                  :src="require('@/assets/images/joao.png')"
                  alt="Conteúdo"
                  fluid
                ></b-img>
              </b-col>
            </div>

            <div class="time-item">
              <b-col cols="8" class="item-time">
                <h6 class="nome-time">Vitor Fantinel</h6>
                <span class="span-time">Aluno IFC Fraiburgo</span>
              </b-col>
              <b-col cols="4">
                <b-img
                  :src="require('@/assets/images/vitor.png')"
                  alt="Conteúdo"
                  fluid
                ></b-img>
              </b-col>
            </div>

            <div class="time-item">
              <b-col cols="8" class="item-time">
                <h6 class="nome-time">Wesllen Felipe</h6>
                <span class="span-time">Aluno IFC Fraiburgo</span>
              </b-col>
              <b-col cols="4">
                <b-img
                  :src="require('@/assets/images/wesllen.png')"
                  alt="Conteúdo"
                  fluid
                ></b-img>
              </b-col>
            </div>
          </div>
        </b-col>
        <b-col cols="4">
          <div class="orientadores" cols="3">
            <h1 class="titulo-homepage-sobre orientadores-title">
              Orientadores
            </h1>
            <p class="paragraph-sobre">
              Professores responsáveis pela orientação do projeto:
            </p>
            <hr class="linha-titulo" />
            <ul class="list-sobre orientadores-list">
              <li class="orientador-nome">Rodrigo Espinosa Cabral</li>
              <p class="paragraph-sobre">
                Possui graduação em Letras Português e Inglês e Mestrado em
                Letras Inglês. Professor do Instituto Federal Catarinense,
                Campus Fraiburgo SC.
              </p>

              <li class="orientador-nome">Fabricio Bizotto</li>
              <p class="paragraph-sobre">
                Professor de Informática do IFC, especializado em programação
                web, mestrando em ciência da computação.
              </p>
            </ul>
          </div>
        </b-col>
      </div>
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
  width: 90%;
  height: 80%;
  margin: 6%;
  margin-left: 20%;
  margin-bottom: 10%;
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
.home {
  height: 100vh;
  padding-top: 10%;
  background-color: #011401;
}
.box-home {
  display: flex;
  padding: 50px 50px 0px 50px;
  align-items: center;
  justify-content: center;
  background-image: url("../assets/images/fundohomemapa.png");
}
.box-home-sobre {
  display: flex;
  width: 100%;
  height: 100%;
  padding: 50px 50px 0px 50px;
  align-items: center;
  justify-content: center;
  background-image: url("../assets/images/fundohomemapa.png");
}

.box-home2 {
  display: flex;
  padding: 50px;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-image: url("../assets/images/fundo3itens.png");
}

.titulo-homepage-mapa {
  font-family: "Antonio", sans-serif;
  color: white;
  font-size: 80px;
  font-weight: 700;
  text-transform: uppercase;
  margin-left: 30px;
}
.titulo-homepage-sobre {
  font-family: "Antonio", sans-serif;
  color: white;
  font-size: 50px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
}

.orientadores {
  text-align: left;
}

.subtitle-home {
  color: #fff;
}

.subtitle-home-mapa {
  font-family: "Anonymous Pro", monospace;
  color: white;
}

.subtitle-home-sobre {
  font-family: "Anonymous Pro", monospace;
  color: white;
}

.paragraph-home {
  font-family: "Anonymous Pro", monospace;
  color: white;
}

.paragraph-sobre {
  font-size: 14px;
  font-family: "Anonymous Pro", monospace;
  color: white;
}

.smarthphone-home {
  width: 30%;
}

.list-conflicts {
  display: flex;
  flex-direction: column;
}

.list-home {
  margin-top: 20px;
  height: 32vh;
  color: #fff;
  border-left: 1px solid #fff;
  justify-content: center;
}
.list-sobre {
  color: #fff;
  justify-content: center;
}

.list-home li {
  margin-top: 40px;
  margin-bottom: 40px;
}

.contato-sobre {
  margin-top: 40px;
  margin-bottom: 40px;
}
.time {
  text-align: center;
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;
}

.nome-time {
  font-weight: 600;
  font-size: 18px;
  font-family: "Anonymous Pro", monospace;
  color: white;
}

.span-time {
  font-size: 14px;
  font-family: "Anonymous Pro", monospace;
  color: white;
}
.time-item {
  display: flex;
  margin-top: 40px;
}
.item-time {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.orientadores {
  text-align: left;
}
.orientador-nome {
  font-weight: 600;
  font-size: 18px;
  font-family: "Anonymous Pro", monospace;
}
.orientadores-title {
  text-align: left;
}
.orientadores-list {
  margin-left: -20px;
}
</style>
