<template>
  <div class="navegacao">
    <b-navbar toggleable="lg" type="light" variant="light" class="fixed-top">
      <b-navbar-brand to="/"> Guerra do Contestado </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="acervo">
            <b-icon icon="card-text"></b-icon>
            Acervo Virtual
          </b-nav-item>
          <b-nav-item to="galeria">
            <b-icon icon="images"></b-icon>
            Galeria Animada
          </b-nav-item>
          <b-nav-item to="jogos">
            <b-icon icon="controller"></b-icon>
            Jogos
          </b-nav-item>
          <b-nav-item to="linhatempo">
            <b-icon icon="hourglass-split"></b-icon>
            Linha Temporal
          </b-nav-item>
          <b-nav-item to="mapa" title="Mapa">
            <b-icon icon="map"></b-icon>
            Mapa
          </b-nav-item>
          <b-nav-item to="referencias">
            <b-icon icon="book"></b-icon>
            Referencias
          </b-nav-item>
          <b-nav-item to="visitas">
            <b-icon icon="journal-bookmark"></b-icon>
            Registrar Visita
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style>
.navegacao {
  border-bottom: solid 1px red;
}
</style>