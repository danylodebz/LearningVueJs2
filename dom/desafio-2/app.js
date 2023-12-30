new Vue({
  el: "#desafio2",
  data: {
    valor: "",
    value: ''
  },
  methods: {
    alerta() {
      alert("teste");
    },
    escutaTecla(event) {
      this.valor = event.target.value;
    },
    escutaEnter(event) {
      this.value = event.target.value;
    },
  },
});
