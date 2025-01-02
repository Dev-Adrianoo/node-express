import { produto } from "../node-app3/classes"

interface EstabelecimentoInterface {
  endereco: string
  numero: number
  filaDeEspera: number
  ReturnNomeDosProdutos: () => string[]
  diminuiFilaDeEspera(): void
}

interface tamanhoRoupa {
  Tamanho: number
  motivo: string
}

interface LojaoDo10Interface extends EstabelecimentoInterface {
  TrocarRoupa: (tamanhoMaior: boolean) => void;
}

class Estabelecimento implements EstabelecimentoInterface{
  protected _filaDeEspera = 25

  constructor(
      public endereco: string,
      public numero: number,
      protected produtos: produto[],
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

  public diminuiFilaDeEspera() {
          if(this._filaDeEspera === 0){
             return
          }else {
             this._filaDeEspera -= 1
          }
  }
}

class LojaoDo10 extends Estabelecimento  implements LojaoDo10Interface{

  constructor(
      public endereco: string,
      public numero: number,
      protected produtos: produto[],
      filaDeEspera?: number
      ) {
        super(endereco, numero, produtos, filaDeEspera)
      }
          
      public TrocarRoupa(tamanhoMaior: boolean): void {
        const roupasTamanho = 
        [
          {tamanho: "M", valor: 42 },
          {tamanho: "G", valor: 44 },
          {tamanho: "GG", valor: 48 }
        ]
        if(roupasTamanho){
          roupasTamanho.forEach(roupa => {
            console.log(roupa.valor)
          })
        }
      }; 
}

const RonaldoLojaoDo10 = new LojaoDo10 ("Rua dos Curupiras", 417,
  [
    {nome: "Tamanho M", valor: 20},
    {nome: "Tamanho G", valor: 30},
    {nome: "Tamanho GG", valor: 70}
  ],
  20
)

const atacadao = new Estabelecimento ( 
        "Rua Titanic",
        225,
        [ 
        {nome: "pão", valor:0.8 }, 
        {nome: "arroz", valor: 10 }, 
        {nome: "ovos", valor:3 },
        {nome: "Frango", valor: 25 },
        {nome: "Macarrão", valor: 6 },
        {nome: "Sucrilhos", valor: 17 }
        ])