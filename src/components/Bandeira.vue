<template>
  <span class="bandeira">
    <img @click="escolher(bandeira)"
      :src="bandeira.image"
      width="108" height="81">
  </span>
</template>

<script>
export default {
  props: ['bandeira'],
  methods: {
    escolher: function(bandeira) {
      this.$parent.escolher(bandeira);
    },
  }

}
</script>

<style scoped>
  span.bandeira {
    cursor: pointer;
  }

  span.bandeira img {
    border: 4px dashed #444;
    padding: 2.5px;
  }
  span.bandeira.selecionada img {
    border: 4px solid deeppink;

  }
  span.bandeira.outras {
    opacity: 0.6;
  }
</style>