<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
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
</style>
