
new Vue({
    el: '#desafio',
    data: {
        nome: 'Danylo',
        idade: 20
    },
    methods:{
        triplicaIdade(){
            return this.idade * 3
        },
        numeroAleatorio(){
            return Math.random()
        }
    }
})