<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="light"
      variant="light"
    >
      <b-navbar-brand to="/">
        Guerra do Contestado
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse
        id="nav-collapse"
        is-nav
      >
        <b-navbar-nav>
          <b-nav-item to="referencias">Referencias</b-nav-item>
          <b-nav-item
            to="mapa"
            title="Mapa"
          >
            <b-icon icon="map"></b-icon>
            Mapa
          </b-nav-item>
          <b-nav-item to="linhatempo">Linha Temporal</b-nav-item>
          <b-nav-item to="galeria">Galeria Animada</b-nav-item>
          <b-nav-item to="jogos">Jogos</b-nav-item>
          <b-nav-item to="acervo">Acervo Virtual</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>