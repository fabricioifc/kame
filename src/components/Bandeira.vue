<template>
  <span class="bandeira">
    <img @click="escolher(bandeira)"
      :src="bandeira.image"
      width="128" height="91">
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
  .bandeira {
    cursor: pointer;
  }

  .bandeira img {
    border: 4px dashed #444;
    padding: 2.5px;
  }
  .bandeira.selecionada img {
    border: 4px solid deeppink;

  }
  .bandeira.outras {
    opacity: 0.6;
  }
</style>