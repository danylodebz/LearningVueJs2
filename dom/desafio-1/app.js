new Vue({
  el: "#desafio",
  data: {
    nome: "Danylo",
    idade: 20,
    img: 'https://img.freepik.com/fotos-gratis/foto-de-grande-angular-de-uma-unica-arvore-crescendo-sob-um-ceu-nublado-durante-um-por-do-sol-cercado-por-grama_181624-22807.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703808000&semt=ais'
  },
  methods: {
    triplicaIdade() {
      return this.idade * 3;
    },
    numeroAleatorio() {
      return Math.random();
    },
    
  },
});
