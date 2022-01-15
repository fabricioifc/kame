<template class="teste">
  <div class=" referencias">
    <h1 class="titulo-ref">
      REFERÊNCIAS
    </h1>

    <div class="col-xl-12 col-md-6 col-6 list-ref">
      <p class="link">
        https://www12.senado.leg.br/noticias/materias/2016/07/01/ha-100-anos-o-fim-da-sangrenta-guerra-do-contestado
      </p>
      <p class="link">
        https://www.behance.net/gallery/16144751/Infograficos-e-mapas-Guerra-do-Contestado
      </p>
      <p class="link">
        https://portouniao.webnode.com.br/contestado/cronologia-da-guerra-do-contestado/
      </p>
      <p class="link">
        http://www.tudosobrefloripa.com.br/index.php/desc_noticias/decreto_imperial_que_cria_cidade_de_desterro_completa_192_anos
      </p>
      <p class="link">https://pt.wikipedia.org/wiki/História_de_Paranaguá</p>
      <p class="link">
        https://www.gazetadopovo.com.br/vida-e-cidadania/colunistas/nostalgia/curitiba-a-historia-e-as-lendas-1mdalw8rnc1v9atvhao5b6s7i/
      </p>
      <p class="link">
        https://pt.wikipedia.org/wiki/Capitania_de_Santa_Catarina#/media/Ficheiro:1771_Bonne_Map_of_Paraguay,_Uruguay,_and_Brazil_-_Geographicus_-_Paraguay-bonne-1771.jpg
      </p>
      <p class="link">
        https://amures.org.br/noticias/index/ver/codMapaItem/41771/codNoticia/116912
      </p>
      <p class="link">
        https://pt.wikipedia.org/wiki/Tratado_de_Santo_Ildefonso_(1796)#/media/Ficheiro:Tratado_de_San_Ildefonso..Fragata_Mercedes,_exposición_2015._MARQ.jpg
      </p>
      <p class="link">https://pt.wikipedia.org/wiki/Independência_do_Brasil</p>
      <p class="link">
        https://revistagalileu.globo.com/Sociedade/Historia/noticia/2019/07/o-que-voce-precisa-saber-sobre-guerra-dos-farrapos.html
      </p>
      <p class="link">
        https://revistagalileu.globo.com/Sociedade/Historia/noticia/2019/08/o-que-voce-precisa-saber-sobre-guerra-do-paraguai-o-maior-conflito-sul-americano.html
      </p>
      <p class="link">
        https://pt.wikipedia.org/wiki/Proclamação_da_República_do_Brasil
      </p>
      <p class="link">
        http://memoriapolitica.alesc.sc.gov.br/momentos-historicos/1-Primeira_Republica/7-A_Guerra_do_Contestado
      </p>
      <p class="link">
        https://history.uol.com.br/biografias/percival-farquhar
      </p>
      <p class="link">
        https://www2.senado.leg.br/bdsf/bitstream/handle/id/528238/Arquivo_S_04_julho_2016.pdf?sequence=1&isAllowed=y
      </p>
      <p class="link">
        https://www.youtube.com/watch?v=6l4wNt_6pL4&ab_channel=ValeAgrícola
      </p>
      <p class="link">https://www.wikiwand.com/pt/Guerra_do_Contestado</p>
      <p class="link">
        http://fragmentos-do-tempo.blogspot.com/2009/02/lumber-e-o-contestado-segundo-valentini.html
      </p>
      <p class="link">
        https://pt.wikipedia.org/wiki/José_Maria_de_Santo_Agostinho
      </p>
      <p class="link">
        https://pt.slideshare.net/sluizalves/contestado-revolta-sertaneja
      </p>
      <p class="link">
        http://guerradocontestado0.blogspot.com/2014_09_01_archive.html
      </p>
      <p class="link">
        http://progressonocontestado.blogspot.com/2011/04/jose-maria-uma-farsa.html
      </p>
      <p class="link">
        https://guerradocontestado0.blogspot.com/2014/09/o-exercito.html
      </p>
      <p class="link">
        https://commons.wikimedia.org/wiki/File:Coronel_Jo%C3%A3o_Gualberto.png
      </p>
      <p class="link">https://br.pinterest.com/pin/24066179238787614/</p>
      <p class="link">
        https://idents.paginas.ufsc.br/2020/06/25/caboclo-women-in-the-contested-war/?lang=pb
      </p>
      <p class="link">
        https://memoriapolitica.alesc.sc.gov.br/momentos-historicos/1-Primeira_Republica/7-A_Guerra_do_Contestado
      </p>
      <p class="link">
        https://en.wikipedia.org/wiki/Contestado_War
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Referencias",
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

<style>
.titulo-ref {
  font-family: "Antonio", sans-serif;
  color: white;
  font-size: 60px;
  font-weight: 700;
  padding: 100px 0 20px 0;
}

.referencias {
  text-align: center;
  background-color: #000;
  justify-content: center;
  align-items: center;
}

.link {
  font-family: "Anonymous Pro", monospace;
  color: #fff;
}

.list-ref {
  flex-wrap: wrap;
  width: 400px;
  display: flex;
  flex-direction: column;
}
</style>
