import VueRouter from "vue-router";
import Vue from "vue";
import HomePage from "../pages/HomePage.vue";
import ReferenciasPage from "../pages/ReferenciasPage.vue";
import MapaPage from "../pages/MapaPage.vue";
import LinhaTempoPage from "../pages/LinhaTempoPage.vue";
import GaleriaPage from "../pages/GaleriaPage.vue";
import JogosPage from "../pages/JogosPage.vue";
import AcervoPage from "../pages/AcervoPage.vue";
import VisitasPage from "../pages/VisitasPage.vue";
import GameVue from "../views/Game.vue";
import GameQuestoesVue from "../views/GameQuestoes.vue";
import GamePersonagemVue from "../views/GamePersonagem.vue";

import { CarouselPlugin } from "bootstrap-vue";
Vue.use(CarouselPlugin);
Vue.use(VueRouter);

const rotas = [
  { path: "/", name: "home", component: HomePage },
  { path: "/referencias", name: "referencias", component: ReferenciasPage },
  { path: "/mapa", name: "mapa", component: MapaPage },
  { path: "/linhatempo", name: "linhatempo", component: LinhaTempoPage },
  { path: "/galeria", name: "galeria", component: GaleriaPage },
  { path: "/jogos", name: "jogos", component: JogosPage },
  { path: "/acervo", name: "acervo", component: AcervoPage },
  { path: "/visitas", name: "visitas", component: VisitasPage },
  { path: "/bandeira", name: "bandeira", component: GameVue },
  { path: "/questoes", name: "questoes", component: GameQuestoesVue },
  { path: "/personagem", name: "personagem", component: GamePersonagemVue },
];

export const router = new VueRouter({
  mode: "history",
  routes: rotas,
});
