<template>
  <div id="app">
    <ul>
      <li>
        <router-link to="/">HomePage</router-link>
      </li>
      <li>
        <router-link to="referencias">Referencias</router-link>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>

</style>
