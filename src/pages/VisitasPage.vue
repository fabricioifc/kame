<template>
  <b-container fluid>
    <b-row class="h-100 bg-light p-5">
      <b-col
        md="12"
        lg="5"
        align-self="center"
      >
        <b-card
          title="Registro de Visita"
          border-variant="dark"
        >
          <b-card-body>
            <b-form
              @submit="onSubmit"
              @reset="onReset"
            >

              <b-form-group
                id="input-group-2"
                label="Seu Nome:"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="form.name"
                  ref="name"
                  placeholder="Seu Nome"
                  required
                  autofocus
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-3"
                label="Sua Cidade:"
                label-for="input-3"
              >
                <b-form-input
                  id="input-3"
                  v-model="form.cidade"
                  placeholder="Sua Cidade"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-1"
                label="Sua Idade:"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="form.idade"
                  placeholder="Sua Idade"
                  type="number"
                ></b-form-input>
              </b-form-group>

              <b-button
                type="submit"
                variant="primary"
              >Registrar Presença</b-button>
            </b-form>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col
        md="6"
        lg="6"
        offset-lg="1"
        align-self="center"
        class="d-none d-lg-block"
      >
        <b-card
          class="text-center"
          title="Visitas "
        >
          <b-card-body v-if="quantidade">
            <h2>{{quantidade}}</h2>
          </b-card-body>
        </b-card>
        <!-- <b-img
          fluid-grow
          rounded
          thumbnail
          src="https://cdn.pixabay.com/photo/2017/07/25/22/54/lego-2539844_960_720.jpg"
        ></b-img> -->
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "VisitasPage",
  data() {
    return {
      form: {
        name: "",
        cidade: "",
        idade: null,
      },
      quantidade: null,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      // alert(JSON.stringify(this.form));
      this.addVisitante({
        name: this.form.name,
        cidade: this.form.cidade,
        idade: this.form.idade,
      });

      this.onReset(event);
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.name = "";
      this.form.cidade = "";
      this.form.idade = null;
      this.$nextTick(() => {
        // this.show = true;
        this.$refs.name.focus();
      });
    },
    getVisitantes() {
      return JSON.parse(localStorage.getItem("visitantes")) || [];
    },
    setVisitantes(lista) {
      return localStorage.setItem("visitantes", JSON.stringify(lista));
    },

    addVisitante(visitante) {
      let visitantes = [...this.getVisitantes(), visitante];
      this.setVisitantes(visitantes);
      this.quantidade = visitantes.length;

      console.log(this.getVisitantes());
    },
  },
  mounted() {
    // localStorage.removeItem("visitantes");
    console.log(this.getVisitantes());
    this.quantidade = this.getVisitantes().length;
  },
};
</script>

<style>
</style>