<template>
  <span class="personagem">
    <img @click="escolher(personagem)"
      :src="personagem.image"
      width="200" height="200">
  </span>
</template>

<script>
export default {
  props: ['personagem'],
  methods: {
    escolher: function(personagem) {
      this.$parent.escolher(personagem);
    },
  }

}
</script>

<style scoped>
  .personagem {
    cursor: pointer;
  }

  .personagem img {
    border: 4px dashed #444;
    padding: 2.5px;
  }
  .personagem.selecionada img {
    border: 4px solid deeppink;
  }
  .personagem.outras {
    opacity: 0.6;
  }
</style>