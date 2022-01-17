<template>

  <b-row class="mt-5 bg-secondary">
    <b-col>
      <div class="p-3">
        <!-- For demo purpose -->
        <div class="row text-white mb-5">
          <div class="col-md-3 coluna-titulo">
            <b-img
              :src="require('../assets/images/timeline/timeline.jpg')"
              class="imagem-timeline"
              alt="soldados deitados"
            />
            <h1 class="display-5 titulo-timeline">LINHA DO TEMPO</h1>
            <h4 class="timeline-escrita">
              A imagem mostra Infantaria do Exército Brasileiro em combate
              contra rebeldes messiânicos.
            </h4>
            <hr class="linha-titulo" />
            <h3 class="subtitulo-timeline">Contextualizando...</h3>
            <h4 class="timeline-escrita">
              As informações e imagens presentes nessa linha do tempo servem
              para abordar a história do Contestado de maneira simples e
              resumida.
            </h4>
          </div>
          <!-- End -->
          <div class="col-md-9">
            <div class="row timeline-container">
              <div class="col-lg-4">
                <b-img
                  :src="require('../assets/images/timeline/hereditario.jpg')"
                  class="imagem-timeline-direita"
                  alt="soldados com armas"
                />
                <b-img
                  :src="require('../assets/images/timeline/paranagua.jpg')"
                  class="imagem-timeline-direita"
                  alt="soldados com armas"
                />
                <b-img
                  :src="require('../assets/images/timeline/desterro.jpg')"
                  class="imagem-timeline-direita"
                  alt="soldados com armas"
                />
                <b-img
                  :src="require('../assets/images/timeline/curitiba.jpg')"
                  class="imagem-timeline-direita"
                  alt="soldados com armas"
                />
                <b-img
                  :src="require('../assets/images/timeline/lages.jpg')"
                  class="imagem-timeline-direita"
                  alt="soldados com armas"
                />
                <b-img
                  :src="require('../assets/images/timeline/tratado.jpg')"
                  class="imagem-timeline-direita"
                  alt="soldados com armas"
                />
                <b-img
                  :src="require('../assets/images/timeline/independencia.jpg')"
                  class="imagem-timeline-direita"
                  alt="soldados com armas"
                />
                <b-img
                  :src="require('../assets/images/timeline/farroupilha.jpg')"
                  class="imagem-timeline-direita"
                  alt="soldados com armas"
                />
                <b-img
                  :src="require('../assets/images/timeline/paraguai.jpg')"
                  class="imagem-timeline-direita"
                  alt="soldados com armas"
                />
                <b-img
                  :src="require('../assets/images/timeline/proclamacao.jpg')"
                  class="imagem-timeline-direita"
                  alt="soldados com armas"
                />
                <b-img
                  :src="require('../assets/images/timeline/contestado.jpg')"
                  class="imagem-timeline-direita"
                  alt="soldados com armas"
                />
                <b-img
                  :src="require('../assets/images/timeline/contestado2.jpg')"
                  class="imagem-timeline-direita"
                  alt="soldados com armas"
                />
              </div>

              <div class="col-lg-8 mx-auto">
                <!-- Timeline -->
                <ul class="timeline">
                  <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                    <div class="timeline-arrow"></div>
                    <h2 class="h5 mb-0 escrita-timeline-item">1532</h2>
                    <p
                      class="
                        text-small
                        mt-2
                        font-weight-light
                        escrita-timeline-item
                      "
                    >
                      Implantação do sistema capitanias hereditários.
                    </p>
                  </li>
                  <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                    <div class="timeline-arrow"></div>
                    <h2 class="h5 mb-0 escrita-timeline-item">1648</h2>
                    <p
                      class="
                        text-small
                        mt-2
                        font-weight-light
                        escrita-timeline-item
                      "
                    >
                      Fundação de Paranaguá.
                    </p>
                  </li>
                  <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                    <div class="timeline-arrow"></div>
                    <h2 class="h5 mb-0 escrita-timeline-item">1658</h2>
                    <p
                      class="
                        text-small
                        mt-2
                        font-weight-light
                        escrita-timeline-item
                      "
                    >
                      Fundação de São Francisco do Sul.
                    </p>
                  </li>
                  <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                    <div class="timeline-arrow"></div>
                    <h2 class="h5 mb-0 escrita-timeline-item">1675</h2>
                    <p
                      class="
                        text-small
                        mt-2
                        font-weight-light
                        escrita-timeline-item
                      "
                    >
                      Fundação de Desterro (atual Florianópolis).
                    </p>
                  </li>
                  <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                    <div class="timeline-arrow escrita-timeline-item"></div>
                    <h2 class="h5 mb-0 escrita-timeline-item">1676</h2>
                    <p
                      class="
                        text-small
                        mt-2
                        font-weight-light
                        escrita-timeline-item
                      "
                    >
                      Fundação de Laguna.
                    </p>
                  </li>
                  <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                    <div class="timeline-arrow"></div>
                    <h2 class="h5 mb-0 escrita-timeline-item">1690</h2>
                    <p
                      class="
                        text-small
                        mt-2
                        font-weight-light
                        escrita-timeline-item
                      "
                    >
                      Fundação de São José dos Pinhais.
                    </p>
                  </li>
                  <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                    <div class="timeline-arrow"></div>
                    <h2 class="h5 mb-0 escrita-timeline-item">1693</h2>
                    <p
                      class="
                        text-small
                        mt-2
                        font-weight-light
                        escrita-timeline-item
                      "
                    >
                      Fundação de Curitiba
                    </p>
                  </li>
                  <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                    <div class="timeline-arrow"></div>
                    <h2 class="h5 mb-0 escrita-timeline-item">1728</h2>
                    <p
                      class="
                        text-small
                        mt-2
                        font-weight-light
                        escrita-timeline-item
                      "
                    >
                      Criação da ouvidoria de Paranaguá.
                    </p>
                  </li>
                  <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                    <div class="timeline-arrow"></div>
                    <h2 class="h5 mb-0 escrita-timeline-item">1733</h2>
                    <p
                      class="
                        text-small
                        mt-2
                        font-weight-light
                        escrita-timeline-item
                      "
                    >
                      O Caminho Real do Viamão começa a funcionar.
                    </p>
                  </li>
                  <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                    <div class="timeline-arrow"></div>
                    <h2 class="h5 mb-0 escrita-timeline-item">1738</h2>
                    <p
                      class="
                        text-small
                        mt-2
                        font-weight-light
                        escrita-timeline-item
                      "
                    >
                      Criação da Capitania de Santa Catarina e da Comandância
                      Militar do Rio Grande de São Pedro.
                    </p>
                  </li>
                  <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                    <div class="timeline-arrow"></div>
                    <h2 class="h5 mb-0 escrita-timeline-item">1747</h2>
                    <p
                      class="
                        text-small
                        mt-2
                        font-weight-light
                        escrita-timeline-item
                      "
                    >
                      Carta régia que determina as regras para a colonização
                      açoriana em Santa Catarina, para estabelecer o limite do
                      oeste da Capitania de Santa Catarina até os territórios
                      espanhóis fronteiriços.
                    </p>
                  </li>
                  <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                    <div class="timeline-arrow"></div>
                    <h2 class="h5 mb-0 escrita-timeline-item">1749</h2>
                    <p
                      class="
                        text-small
                        mt-2
                        font-weight-light
                        escrita-timeline-item
                      "
                    >
                      Criação da Ouvidoria de Santa Catarina. Esta carta régia
                      define o Rio Negro como limite com a Ouvidoria de
                      Paranaguá.
                    </p>
                  </li>
                  <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                    <div class="timeline-arrow"></div>
                    <h2 class="h5 mb-0 escrita-timeline-item">1750</h2>
                    <p
                      class="
                        text-small
                        mt-2
                        font-weight-light
                        escrita-timeline-item
                      "
                    >
                      Tratado de Madri.
                    </p>
                  </li>
                  <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                    <div class="timeline-arrow"></div>
                    <h2 class="h5 mb-0 escrita-timeline-item">1766</h2>
                    <p
                      class="
                        text-small
                        mt-2
                        font-weight-light
                        escrita-timeline-item
                      "
                    >
                      Fundação de Lages. O Morgado de Matheus, capitão-general
                      da Capitania de São Paulo, decide ampliar o seu território
                      e se instala no sertão de Santa Catarina, ocupação
                      contestada desde de seu início pelos catarinenses.
                    </p>
                  </li>
                  <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                    <div class="timeline-arrow"></div>
                    <h2 class="h5 mb-0 escrita-timeline-item">1777</h2>
                    <p
                      class="
                        text-small
                        mt-2
                        font-weight-light
                        escrita-timeline-item
                      "
                    >
                      Tratado de Santo Ildefonso.
                    </p>
                  </li>
                  <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                    <div class="timeline-arrow"></div>
                    <h2 class="h5 mb-0 escrita-timeline-item">1801</h2>
                    <p
                      class="
                        text-small
                        mt-2
                        font-weight-light
                        escrita-timeline-item
                      "
                    >
                      Tratado de Badajós.
                    </p>
                  </li>
                  <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                    <div class="timeline-arrow"></div>
                    <h2 class="h5 mb-0 escrita-timeline-item">1807</h2>
                    <p
                      class="
                        text-small
                        mt-2
                        font-weight-light
                        escrita-timeline-item
                      "
                    >
                      Criação da Capitania do Rio Grande do Sul.
                    </p>
                  </li>
                  <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                    <div class="timeline-arrow"></div>
                    <h2 class="h5 mb-0 escrita-timeline-item">1812</h2>
                    <p
                      class="
                        text-small
                        mt-2
                        font-weight-light
                        escrita-timeline-item
                      "
                    >
                      Criação da Comarca de Curitiba
                    </p>
                  </li>
                  <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                    <div class="timeline-arrow"></div>
                    <h2 class="h5 mb-0 escrita-timeline-item">1820</h2>
                    <p
                      class="
                        text-small
                        mt-2
                        font-weight-light
                        escrita-timeline-item
                      "
                    >
                      Criação da Comarca da Ilha de Santa Catarina, incluindo
                      Lages dentro do seu território, devolvendo a posse
                      assegurada oficialmente desde a carta régia de 1749, que
                      criou a Ouvidoria de Santa Catarina.
                    </p>
                  </li>
                  <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                    <div class="timeline-arrow"></div>
                    <h2 class="h5 mb-0 escrita-timeline-item">1821</h2>
                    <p
                      class="
                        text-small
                        mt-2
                        font-weight-light
                        escrita-timeline-item
                      "
                    >
                      Mudança do sistema administrativo, e todas as capitanias
                      tornaram-se províncias.
                    </p>
                  </li>
                  <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                    <div class="timeline-arrow"></div>
                    <h2 class="h5 mb-0 escrita-timeline-item">1822</h2>
                    <p
                      class="
                        text-small
                        mt-2
                        font-weight-light
                        escrita-timeline-item
                      "
                    >
                      Independência do Brasil.
                    </p>
                  </li>
                  <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                    <div class="timeline-arrow"></div>
                    <h2 class="h5 mb-0 escrita-timeline-item">1835-1845</h2>
                    <p
                      class="
                        text-small
                        mt-2
                        font-weight-light
                        escrita-timeline-item
                      "
                    >
                      Revolução Farroupilha.
                    </p>
                  </li>
                  <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                    <div class="timeline-arrow"></div>
                    <h2 class="h5 mb-0 escrita-timeline-item">1841</h2>
                    <p
                      class="
                        text-small
                        mt-2
                        font-weight-light
                        escrita-timeline-item
                      "
                    >
                      O presidente da Província de São Paulo, Raphael Tobias,
                      envia expedições a partir de Curitiba para os campos de
                      Palmas. O presidente de Santa Catarina, general Antero
                      José Ferreira de Brito, contesta a ocupação.
                    </p>
                  </li>
                  <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                    <div class="timeline-arrow"></div>
                    <h2 class="h5 mb-0 escrita-timeline-item">1853</h2>
                    <p
                      class="
                        text-small
                        mt-2
                        font-weight-light
                        escrita-timeline-item
                      "
                    >
                      Criação da Província do Paraná, desmembrada de São Paulo
                      com os seus territórios com a Comarca de Curitiba. A
                      disputa de Santa Catarina deixa de ser contra São Paulo, e
                      passa a ser contra o Paraná.
                    </p>
                  </li>
                  <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                    <div class="timeline-arrow"></div>
                    <h2 class="h5 mb-0 escrita-timeline-item">1865</h2>
                    <p
                      class="
                        text-small
                        mt-2
                        font-weight-light
                        escrita-timeline-item
                      "
                    >
                      Decisão do Supremo Tribunal Federal em janeiro dá ganho de
                      causo do Paraná na questão dos limites, porém, a decisão é
                      suspensa em outubro do mesmo ano.
                    </p>
                  </li>
                  <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                    <div class="timeline-arrow"></div>
                    <h2 class="h5 mb-0 escrita-timeline-item">1865-1870</h2>
                    <p
                      class="
                        text-small
                        mt-2
                        font-weight-light
                        escrita-timeline-item
                      "
                    >
                      Guerra do Paraguai.
                    </p>
                  </li>
                  <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                    <div class="timeline-arrow"></div>
                    <h2 class="h5 mb-0 escrita-timeline-item">1889</h2>
                    <p
                      class="
                        text-small
                        mt-2
                        font-weight-light
                        escrita-timeline-item
                      "
                    >
                      PROCLAMAÇÃO DA REPÚBLICA.
                    </p>
                  </li>
                  <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                    <div class="timeline-arrow"></div>
                    <h2 class="h5 mb-0 escrita-timeline-item">1893-1895</h2>
                    <p
                      class="
                        text-small
                        mt-2
                        font-weight-light
                        escrita-timeline-item
                      "
                    >
                      Revolução Federalista.
                    </p>
                  </li>
                  <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                    <div class="timeline-arrow"></div>
                    <h2 class="h5 mb-0 escrita-timeline-item">1900</h2>
                    <p
                      class="
                        text-small
                        mt-2
                        font-weight-light
                        escrita-timeline-item
                      "
                    >
                      Santa Catarina entra com uma ação no Supremo Tribunal
                      Federal, exigindo a posse do território, entre os rios
                      Iguaçu e Uruguai.
                    </p>
                  </li>
                  <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                    <div class="timeline-arrow"></div>
                    <h2 class="h5 mb-0 escrita-timeline-item">1904</h2>
                    <p
                      class="
                        text-small
                        mt-2
                        font-weight-light
                        escrita-timeline-item
                      "
                    >
                      Decisão do Supremo Tribunal Federal dá ganho de causa para
                      Santa Catarina na questão dos limites territoriais entre
                      os dois estados. A Decisão é ratificada em 1909 e 1910.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-col>
  </b-row>

</template>

<script>
export default {
  name: "LinhaTempo",
};
</script>

<style>

ul.timeline {
  list-style-type: none;
  position: relative;
  padding-left: 1.5rem;
}

/* Timeline vertical line */
ul.timeline:before {
  content: " ";
  background: #fff;
  display: inline-block;
  position: absolute;
  left: 16px;
  width: 4px;
  height: 100%;
  z-index: 400;
  border-radius: 1rem;
}

li.timeline-item {
  margin: 20px 0;
}

/* Timeline item arrow */
.timeline-arrow {
  border-top: 0.5rem solid transparent;
  border-right: 0.5rem solid #fff;
  border-bottom: 0.5rem solid transparent;
  display: block;
  position: absolute;
  left: 2rem;
}

/* Timeline item circle marker */
li.timeline-item::before {
  content: " ";
  background: #ddd;
  display: inline-block;
  position: absolute;
  border-radius: 50%;
  border: 3px solid #fff;
  left: 11px;
  width: 14px;
  height: 14px;
  z-index: 400;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.text-gray {
  color: #999;
}

.timeline-container {
  height: 550px;
  overflow: auto;
  /* background: #e8cbc0;
  background: -webkit-linear-gradient(to right, #a09999, #101011);
  background: linear-gradient(to right, #a09999, #101011); */
  border-radius: 4px;
}
::-webkit-scrollbar {
  width: 12px;
  direction: rtl;
}

::-webkit-scrollbar-thumb {
  -webkit-border-radius: 10px;
  border-radius: 4px;
  background: #fff;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}

.escrita-timeline-item {
  color: black;
  text-align: left;
}

.imagem-timeline {
  width: 100%;
  height: 40%;
  border-radius: 10px;
}

.imagem-timeline-direita {
  width: 100%;
  height: 4.5%;
  padding-top: 5%;
  display: block;
}
.titulo-timeline {
  font-family: Andale Mono, monospace;
  font-size: 55px;
  font-family: "Antonio", sans-serif;
}

.timeline-escrita {
  font-size: 17px;
  font-family: "Anonymous Pro", monospace;
}

.subtitulo-timeline {
  font-family: "Anonymous Pro", monospace;
}
.linha-titulo {
  border: 0;
  border-top: 1px solid white;
}
</style>