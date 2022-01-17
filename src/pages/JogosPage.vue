<template>
  <div>
    <div class="home">
      <h1 class="titulo-homepage">
        JOGOS
      </h1>
      <div class="list-quizes">
        <b-link class="rows" to="bandeira">
          <button to="bandeira" class="btn-quiz">Adivinhar a bandeira</button>
        </b-link>
        <b-link class="rows" to="questoes">
          <button class="btn-quiz">Questões de vestibular</button>
        </b-link>
        <b-link class="rows" to="personagem">
          <button class="btn-quiz">Adivinhar o personagem</button>
        </b-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Jogos",
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
.titulo-homepage {
  font-family: "Antonio", sans-serif;
  color: white;
  font-size: 100px;
  margin-top: 15%;
  font-weight: 700;
}

.home {
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;

  text-align: center;
  background-color: #011401;
}

.list-quizes {
  display: flex;
  flex-direction: column;
  width: 20%;
}

button {
  width: 100%;
  height: 50px;
  background-color: #fff8;
  border: none;
  border-radius: 8px;
  font-family: "Anonymous Pro", monospace;
}

.btn-quiz {
  background-color: rgba(255, 255, 255, 0.349);
  border: none;
  border-radius: 8px;
  font-family: "Anonymous Pro", monospace;
}

.rows {
  justify-content: center;
  margin-top: 20px;
}
</style>
