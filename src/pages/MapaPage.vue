<template>

  <div style="height: 100vh;">

    <div>
      <span v-if="loading">Loading...</span>
    </div>
    <l-map
      :zoom="zoom"
      :center="center"
      style=" width: 100%"
    >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />
      <l-geo-json
        v-if="show"
        :geojson="geojson"
        :options="options"
        :options-style="styleFunction"
      />
      <l-marker :lat-lng="marker" />
    </l-map>
  </div>
</template>

<script>
import { cidades } from "../lib/cidades";
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LGeoJson } from "vue2-leaflet";

export default {
  name: "Example",
  components: {
    LMap,
    LTileLayer,
    LGeoJson,
    LMarker,
  },
  data() {
    return {
      loading: false,
      show: true,
      enableTooltip: true,
      zoom: 8,
      center: [-27.219848635249775, -50.98155375471085],
      geojson: null,
      fillColor: "#808080",
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: latLng(-83.93048541708406, -104.52937891578529),
    };
  },
  computed: {
    options() {
      return {
        onEachFeature: this.onEachFeatureFunction,
      };
    },
    styleFunction() {
      const fillColor = this.fillColor; // important! need touch fillColor in computed for re-calculate when change fillColor
      return () => {
        return {
          weight: 2,
          color: "#696969",
          opacity: 2,
          fillColor: fillColor,
          fillOpacity: 1,
        };
      };
    },
  },

  async created() {
    this.loading = true;
    const data = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            id: "4204806",
            name: "Curitibanos",
            description: "Curitibanos",
          },
          geometry: {
            type: "Polygon",
            coordinates: [cidades.curitibanos],
          },
        },
        {
          type: "Feature",
          properties: {
            id: "4205506",
            name: "Fraiburgo",
            description: "Fraiburgo",
          },
          geometry: {
            type: "Polygon",
            coordinates: [cidades.fraiburgo],
          },
        },
        {
          type: "Feature",
          properties: {
            id: "4205555",
            name: "Frei Rogério",
            description: "Frei Rogério",
          },
          geometry: {
            type: "Polygon",
            coordinates: [cidades.frei_rogedio],
          },
        },
        {
          type: "Feature",
          properties: { id: "4209300", name: "Lages", description: "Lages" },
          geometry: {
            type: "Polygon",
            coordinates: [cidades.lages],
          },
        },
        {
          type: "Feature",
          properties: {
            id: "4209706",
            name: "Lebon Régis",
            description: "Lebon Régis",
          },
          geometry: {
            type: "Polygon",
             coordinates: [cidades.lebon_regis],
          },
        },
        {
          type: "Feature",
          properties: { id: "4210100", name: "Mafra", description: "Mafra" },
          geometry: {
            type: "Polygon",
            coordinates: [cidades.mafra],
          },
        },
        {
          type: "Feature",
          properties: {
            id: "4215505",
            name: "Santa Cecília",
            description: "Santa Cecília",
          },
          geometry: {
            type: "Polygon",
            coordinates:[cidades.santa_cecilia]
          },
        },
        {
          type: "Feature",
          properties: {
            id: "4219309",
            name: "Videira",
            description: "Videira",
          },
          geometry: {
            type: "Polygon",
            coordinates: [cidades.videira],
          },
        },
        {
          type: "Feature",
          properties: {
            id: "4213609",
            name: "Porto União",
            description: "Porto União",
          },
          geometry: {
            type: "Polygon",
            coordinates: [cidades.porto_uniao],
          },
        },
        {
          type: "Feature",
          properties: {
            id: "4203006",
            name: "Caçador",
            description: "Caçador",
          },
          geometry: {
            type: "Polygon",
            coordinates: [
              cidades.cacador
            ],
          },
        },
        {
          type: "Feature",
          properties: {
            id: "4203600",
            name: "Campos Novos",
            description: "Campos Novos",
          },
          geometry: {
            type: "Polygon",
            coordinates: [cidades.campos_novos],
          },
        },
        {
          type: "Feature",
          properties: {
            id: "4203808",
            name: "Canoinhas",
            description: "Canoinhas",
          },
          geometry: {
            type: "Polygon",
            coordinates: [cidades.canoinhas],
          },
        },
        {
          type: "Feature",
          properties: {
            id: "4213005",
            name: "Pinheiro Preto",
            description: "Pinheiro Preto",
          },
          geometry: {
            type: "Polygon",
            coordinates: [cidades.pinheiro_preto],
          },
        },
        {
          type: "Feature",
          properties: {
            id: "4204152",
            name: "Celso Ramos",
            description: "Celso Ramos",
          },
          geometry: {
            type: "Polygon",
            coordinates: [cidades.celso_ramos],
          },
        },
        {
          type: "Feature",
          properties: {
            id: "4200051",
            name: "Abdon Batista",
            description: "Abdon Batista",
          },
          geometry: {
            type: "Polygon",
            coordinates: [cidades.abdon_batista],
          },
        },
        {
          type: "Feature",
          properties: { id: "4219150", name: "Vargem", description: "Vargem" },
          geometry: {
            type: "Polygon",
            coordinates: [cidades.vargem],
          },
        },
        {
          type: "Feature",
          properties: {
            id: "4201000",
            name: "Anita Garibaldi",
            description: "Anita Garibaldi",
          },
          geometry: {
            type: "Polygon",
            coordinates: [cidades.anita_garibaldi],
          },
        },
        {
          type: "Feature",
          properties: {
            id: "4202875",
            name: "Brunópolis",
            description: "Brunópolis",
          },
          geometry: {
            type: "Polygon",
            coordinates: [cidades.brunopolis],
          },
        },
        {
          type: "Feature",
          properties: {
            id: "4213351",
            name: "Ponte Alta do Norte",
            description: "Ponte Alta do Norte",
          },
          geometry: {
            type: "Polygon",
            coordinates: [cidades.ponte_alta_norte],
          },
        },
        {
          type: "Feature",
          properties: {
            id: "4212205",
            name: "Papanduva",
            description: "Papanduva",
          },
          geometry: {
            type: "Polygon",
            coordinates: [cidades.papanduva],
          },
        },
        {
          type: "Feature",
          properties: {
            id: "4211108",
            name: "Monte Castelo",
            description: "Monte Castelo",
          },
          geometry: {
            type: "Polygon",
            coordinates: [cidades.monte_castelo],
          },
        },
        {
          type: "Feature",
          properties: {
            id: "4205209",
            name: "Erval Velho",
            description: "Erval Velho",
          },
          geometry: {
            type: "Polygon",
            coordinates: [cidades.erval_velho],
          },
        },
        {
          type: "Feature",
          properties: { id: "4203154", name: "Calmon", description: "Calmon" },
          geometry: {
            type: "Polygon",
            coordinates: [cidades.calmon],
          },
        },
        {
          type: "Feature",
          properties: {
            id: "4207908",
            name: "Irineópolis",
            description: "Irineópolis",
          },
          geometry: {
            type: "Polygon",
            coordinates: [cidades.irineopolis],
          },
        },
        {
          type: "Feature",
          properties: {
            id: "4218301",
            name: "Três Barras",
            description: "Três Barras",
          },
          geometry: {
            type: "Polygon",
            coordinates: [cidades.tres_barras],
          },
        },
        {
          type: "Feature",
          properties: {
            id: "4218251",
            name: "Timbó Grande",
            description: "Timbó Grande",
          },
          geometry: {
            type: "Polygon",
            coordinates: [cidades.timbo_grande],
          },
        },
        {
          type: "Feature",
          properties: {
            id: "4210308",
            name: "Major Vieira",
            description: "Major Vieira",
          },
          geometry: {
            type: "Polygon",
            coordinates: [cidades.major_vieira],
          },
        },
        {
          type: "Feature",
          properties: {
            id: "4202131",
            name: "Bela Vista do Toldo",
            description: "Bela Vista do Toldo",
          },
          geometry: {
            type: "Polygon",
            coordinates: [cidades.belavista_toldo],
          },
        },
        {
          type: "Feature",
          properties: {
            id: "4217907",
            name: "Tangará",
            description: "Tangará",
          },
          geometry: {
            type: "Polygon",
            coordinates: [cidades.tangara],
          },
        },
        {
          type: "Feature",
          properties: {
            id: "4214409",
            name: "Rio das Antas",
            description: "Rio das Antas",
          },
          geometry: {
            type: "Polygon",
            coordinates: [cidades.rio_antas],
          },
        },
        {
          type: "Feature",
          properties: {
            id: "4211058",
            name: "Monte Carlo",
            description: "Monte Carlo",
          },
          geometry: {
            type: "Polygon",
            coordinates: [cidades.monte_carlo],
          },
        },
        {
          type: "Feature",
          properties: { id: "4206751", name: "Ibiam", description: "Ibiam" },
          geometry: {
            type: "Polygon",
            coordinates: [cidades.ibiam],
          },
        },
      ],
    };
    this.geojson = data;
    this.loading = false;
  },
};
</script>
