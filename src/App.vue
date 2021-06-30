<template>
  <div id="app">
    <div class="menu">
      <ul>
        <li>
          <router-link to="/">HomePage</router-link>
        </li>
        <li>
          <router-link to="referencias">Referencias</router-link>
        </li>
        <li>
          <router-link to="mapa">Mapa</router-link>
        </li>
        <li>
          <router-link to="linhatempo">Linha Temporal</router-link>
        </li>
        <li>
          <router-link to="galeria">Galeria Animada</router-link>
        </li>
        <li>
          <router-link to="jogos">Jogos</router-link>
        </li>
        <li>
          <router-link to="acervo">Acervo Virtual</router-link>
        </li>
      </ul>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
.menu {
  text-align: center;
  position: absolute;
  display: block;
}
.menu li {
  display: inline-block;
  list-style: none;
  padding: 15px 15px;
  border-radius: 10px;
}
</style>
