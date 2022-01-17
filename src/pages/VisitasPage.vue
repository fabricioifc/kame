<template>
  <b-container fluid>
    <b-row class="h-100 bg-light mt-5 p-5">
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
              >Registrar Visita</b-button>
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
        <b-card class="text-center">

          <b-row>
            <b-col>
              <h4>Visitas no Mês</h4>
              <b-button
                variant="primary"
                disabled
              >
                <h3>
                  <b-badge variant="light">{{quantidade_mes}}</b-badge>
                </h3>
                Visitas no Mês
              </b-button>
            </b-col>
            <b-col>
              <h4>Total de Visitas</h4>
              <b-button
                variant="dark"
                disabled
              >
                <h3>
                  <b-badge variant="light">{{quantidade}}</b-badge>
                </h3>
                Visitas Totais
              </b-button>
            </b-col>
          </b-row>
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
import { supabase } from "../lib/database";
export default {
  name: "VisitasPage",
  data() {
    return {
      form: {
        name: "",
        cidade: "",
        idade: null,
      },
      quantidade: 0,
      quantidade_mes: 0,
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
    async addVisitante(visitante) {
      const { data, error } = await supabase
        .from("visitas")
        .insert([visitante]);

      this.quantidade += 1;
      this.quantidade_mes += 1;
    },
  },
  async mounted() {
    let { data, error, count } = await supabase
      .from("visitas")
      .select("*", { count: "exact" });

    let { data: visitas_mes } = await supabase
      .from("w_visitas_mes")
      .select("count");

    this.quantidade = count;
    this.quantidade_mes = visitas_mes[0].count;
  },
};
</script>

<style>
</style>