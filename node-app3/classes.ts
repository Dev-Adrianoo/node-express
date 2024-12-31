export interface produto {
        nome: string,
        valor: number
}

// class Estabelecimento {
//         private endereco: string
//         private numeroCasa: number
//         private produtosPadaria: produto[];
//         constructor(endereco:string , numero:number, produtos:produto[]) {
//                 this.endereco = endereco,
//                 this.numeroCasa = numero,
//                 this.produtosPadaria = produtos
//         }
// }
class EstabelecimentoBase {
        private _filaDeEspera = 25

        constructor(private endereco: string,
                    private numero: number, 
                    private produtos: produto[],
                    filaDeEspera?: number
                   ) {
                        this.filaDeEspera = filaDeEspera ?? this._filaDeEspera 
                   }

       public ReturnNomeDosProdutos() { 
              return this.produtos.map( produtos => produtos.nome )
        }

        get filaDeEspera() {
            return this._filaDeEspera
        }

        set filaDeEspera(fila: number) {
           if(fila <= 0){
                return
           }else {
                this._filaDeEspera = fila
           }
           
        }

        diminuiFilaDeEspera() {
                if(this._filaDeEspera === 0){
                   return
                }else {
                   this._filaDeEspera -= 1
                }
        }
}

const padaria = {
        endereco: "Rua pica pau",
        numero: 435,
        produtos: [ 
         {nome: "pão", valor:0.8 }, 
         {nome: "arroz", valor: 10 }, 
         {nome: "ovos", valor:3 },
         {nome: "carne Moída", valor: 3}
        ]
}

const padaria2 = {
    endereco: "Rua Waldomiro lobo",
    numero: 1007,
    produtos: [ 
        {nome: "pão", valor:0.8 }, 
        {nome: "arroz", valor: 10 }, 
        {nome: "leite", valor: 3 },
        {nome: "ovos", valor:3 },
        {nome: "carne Moída", valor: 3}
        ],
}

const padaria3 = new EstabelecimentoBase("Rua Tupi", 2007,
        [
        {nome: "café", valor:0.8 }, 
        {nome: "leite", valor: 3 },
        {nome: "pão", valor: 10 }, 
        {nome: "ovos", valor:3 },
        {nome: "bolo", valor: 3}
        ] )
        
const padaria4 = new EstabelecimentoBase("Rua Nelson Capivara", 1007, 
        [
        {nome: "burrata", valor:30},
        {nome: "churros", valor: 10},
        {nome: "sonho Doce", valor:25},
        {nome: "Pão de mel", valor: 15}
        ] )



console.log(padaria4.filaDeEspera)
padaria4.diminuiFilaDeEspera()
padaria4.diminuiFilaDeEspera()
padaria4.diminuiFilaDeEspera()
console.log(padaria4)

module.exports = {
        
}