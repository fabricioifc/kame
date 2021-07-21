<template>
  <div id="app">
<<<<<<< HEAD
    <app-header />
    <router-view/>
=======
    <Navbar />
    <router-view />
>>>>>>> main
  </div>
</template>

<script>
<<<<<<< HEAD
import AppHeader from './components/AppHeader.vue'

export default {
  name: 'app',
  components:{AppHeader}
}
</script>

<style>

=======
import Navbar from "@/components/Navbar";
export default {
  name: "App",
  components: { Navbar },
};
</script>

<style>
/* .menu {
  text-align: center;
  position: absolute;
  display: block;
}
.menu li {
  display: inline-block;
  list-style: none;
  padding: 15px 15px;
  border-radius: 10px;
} */
>>>>>>> main
</style>
