<template>
  <section class="no-touch">
    <div class="wrap">
      <div class="box">
        <div class="boxInner">
          <img
            height="100%"
            width="100%"
            src="../assets/images/galeria/artilharia.png"
          />
          <div class="titleBox">
            Artilharia das forças paranaenses que seria usada nos ataques contra
            os sertanejos
          </div>
        </div>
      </div>

      <div class="box">
        <div class="boxInner">
          <img
            height="100%"
            width="100%"
            src="../assets/images/galeria/aviacao.png"
          />
          <div class="titleBox">Aviação na guerra do contestado</div>
        </div>
      </div>
      <div class="box">
        <div class="boxInner">
          <img
            height="100%"
            width="100%"
            src="../assets/images/galeria/barricada.png"
          />
          <div class="titleBox">
            Barricada de madeira protege serraria dos ataques rebeldes em Três
            Barras (SC)
          </div>
        </div>
      </div>
      <div class="box">
        <div class="boxInner">
          <img
            height="100%"
            width="100%"
            src="../assets/images/galeria/chefes.png"
          />
          <div class="titleBox">
            Em janeiro de 1915, um dos chefes rebeldes, Bonifácio Papudo, se
            rende às forças policiais
          </div>
        </div>
      </div>
      <div class="box">
        <div class="boxInner">
          <img
            height="100%"
            width="100%"
            src="../assets/images/galeria/comandante.png"
          />
          <div class="titleBox">
            Comandante João Gualberto (montado) a caminho da batalha, pouco
            antes de morrer em combate
          </div>
        </div>
      </div>
      <div class="box">
        <div class="boxInner">
          <img
            height="100%"
            width="100%"
            src="../assets/images/galeria/genaral.png"
          />
          <div class="titleBox">
            General Setembrino de Carvalho (de quepe branco) em estação em União
            da Vitória (PR)
          </div>
        </div>
      </div>
      <div class="box">
        <div class="boxInner">
          <img
            height="100%"
            width="100%"
            src="../assets/images/galeria/imigrantes.png"
          />
          <div class="titleBox">
            Carroções de imigrantes europeus chegando ao sul do país atravessam
            União da Vitória (PR)
          </div>
        </div>
      </div>
      <div class="box">
        <div class="boxInner">
          <img
            height="100%"
            width="100%"
            src="../assets/images/galeria/josemaria.png"
          />
          <div class="titleBox">José Maria, Monge do contestado</div>
        </div>
      </div>
      <div class="box">
        <div class="boxInner">
          <img
            height="100%"
            width="100%"
            src="../assets/images/galeria/milicia.png"
          />
          <div class="titleBox">
            Milícia armada (vaqueanos) protege serraria de ataques, em Três
            Barras (SC)
          </div>
        </div>
      </div>
      <div class="box">
        <div class="boxInner">
          <img
            height="100%"
            width="100%"
            src="../assets/images/galeria/milicia2.png"
          />
          <div class="titleBox">
            Milícia armada de um coronel em Canoinhas (SC), em 1914
          </div>
        </div>
      </div>

      <div class="box">
        <div class="boxInner">
          <img
            height="100%"
            width="100%"
            src="../assets/images/galeria/militares.png"
          />
          <!--footer -->
          <div class="titleBox">
            Militares convocados para enfrentar os rebeldes na guerra do
            Contestado_
          </div>
        </div>
      </div>
      <div class="box">
        <div class="boxInner">
          <img
            height="100%"
            width="100%"
            src="../assets/images/galeria/resistenciasertaneja.png"
          />
          <!--footer -->
          <div class="titleBox">
            Família de sertanejos se rende às forças oficiais em Canoinhas (SC),
            em 1915
          </div>
        </div>
      </div>
      <div class="box">
        <div class="boxInner">
          <img
            height="100%"
            width="100%"
            src="../assets/images/galeria/serraria.png"
          />
          <!--footer -->
          <div class="titleBox">
            serraria Lumber do empresário americano Percival Farquhar
          </div>
        </div>
      </div>
      <div class="box">
        <div class="boxInner">
          <img
            height="100%"
            width="100%"
            src="../assets/images/galeria/sertanejos.png"
          />
          <!--footer -->
          <div class="titleBox">
            Família de sertanejos se rende às forças oficiais em Canoinhas (SC),
            em 1915
          </div>
        </div>
      </div>
      <div class="box">
        <div class="boxInner">
          <img
            height="100%"
            width="100%"
            src="../assets/images/galeria/trem.png"
          />
          <!--footer -->
          <div class="titleBox">
            Trem carregado de toras enfrenta enchente do Rio Negro, em Três
            Barras (SC)
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      sliding: null,
    };
  },
};
</script>

<script>
export default {
  name: "Galeria",
};
</script>

<style>
.wrap {
  overflow: hidden;
  margin: 10px;
}
.box {
  float: left;
  position: relative;
  width: 20%;
  padding-bottom: 20%;
}
.boxInner {
  position: absolute;
  left: 10px;
  right: 10px;
  top: 10px;
  bottom: 10px;
  overflow: hidden;
}
.boxInner img {
  width: 100%;
}
.boxInner .titleBox {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin-bottom: -130px;
  background: #fff;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 10px;
  text-align: center;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}
section.no-touch .boxInner:hover .titleBox,
section.touch .boxInner.touchFocus .titleBox {
  margin-bottom: 0;
}
@media only screen and (max-width: 480px) {
  /* Smartphone view: 1 tile */
  .box {
    width: 100%;
    padding-bottom: 100%;
  }
}
@media only screen and (max-width: 650px) and (min-width: 481px) {
  /* Tablet view: 2 tiles */
  .box {
    width: 50%;
    padding-bottom: 50%;
  }
}
@media only screen and (max-width: 1050px) and (min-width: 651px) {
  /* Small desktop / ipad view: 3 tiles */
  .box {
    width: 33.3%;
    padding-bottom: 33.3%;
  }
}
@media only screen and (max-width: 1290px) and (min-width: 1051px) {
  /* Medium desktop: 4 tiles */
  .box {
    width: 25%;
    padding-bottom: 25%;
  }
}
</style>
