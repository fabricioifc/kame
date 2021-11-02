<template>
  <div id="backgound">
    <div class="container py-5">
      <!-- For demo purpose -->
      <div class="row text-center text-white mb-5">
        <div class="col-lg-8 mx-auto">
          <h1 class="display-4">Linha do Tempo</h1>
          <h4>Antes do acontecimentos que culminaram a guerra, houve:</h4>
        </div>
      </div>
      <!-- End -->

      <div class="row">
        <div class="col-lg-7 mx-auto">
          <!-- Timeline -->
          <ul class="timeline">
            <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
              <div class="timeline-arrow"></div>
              <h2 class="h5 mb-0">1900</h2>
              <p class="text-small mt-2 font-weight-light">
                Ação judicial de Santa Catarina contra o Paraná por limites
                territoriais;
              </p>
            </li>
            <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
              <div class="timeline-arrow"></div>
              <h2 class="h5 mb-0">1909, 1909 e 1910</h2>
              <p class="text-small mt-2 font-weight-light">
                Decisões judiciais do Supremo Tribunal Federal favoráveis a
                Santa Catarina
              </p>
            </li>
            <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
              <div class="timeline-arrow"></div>
              <h2 class="h5 mb-0">1905 e 1906</h2>
              <p class="text-small mt-2 font-weight-light">
                Revolta do ex-maragato Demétrio Ramos na zona do Timbó
              </p>
            </li>
            <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
              <div class="timeline-arrow"></div>
              <h2 class="h5 mb-0">1908 - 1910</h2>
              <p class="text-small mt-2 font-weight-light">
                Construção da Estrada de Ferro de São Paulo ao Rio Grande do
                Sul.
              </p>
            </li>
            <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
              <div class="timeline-arrow"></div>
              <h2 class="h5 mb-0">1908 - 1912</h2>
              <p class="text-small mt-2 font-weight-light">
                Instalação da Southern Brazil Lumber e Colonization Campany em
                Três Barras;
              </p>
            </li>
            <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
              <div class="timeline-arrow"></div>
              <h2 class="h5 mb-0">1910 - 1912</h2>
              <p class="text-small mt-2 font-weight-light">
                Questão de terras da fazenda Irani e da Cia. Frigorífica e
                Pastoril;
              </p>
            </li>
            <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
              <div class="timeline-arrow"></div>
              <h2 class="h5 mb-0">1911</h2>
              <p class="text-small mt-2 font-weight-light">
                Início da construção do ramal de São Francisco;
              </p>
              <p class="text-small mt-2 font-weight-light">
                Revolta do ex-maragato Aleixo Gonçalves de Lima em Canoinhas;
              </p>
              <p class="text-small mt-2 font-weight-light">
                Escrituração de glebas de terras devolutas do Contestado para a
                EFSPRG;
              </p>
            </li>
            <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
              <div class="timeline-arrow"></div>
              <h2 class="h5 mb-0">1912</h2>
              <p class="text-small mt-2 font-weight-light">Batalha do Irani</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
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
</style>