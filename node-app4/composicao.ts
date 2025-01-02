// class animal {
//   public nome: string
//   public idadeEmMeses: number
//   constructor(nome: string, idadeEmMeses: number) {
//     this.nome = nome
//     this.idadeEmMeses = idadeEmMeses
//   }
// }

interface AnimalInterface {
  nome: string
  idadeEmMeses: number
  comer: () => void
}

interface AnimalVoadorInterface extends AnimalInterface {
  voar: () => void;
}

class animal {
  constructor(public nome: string, public idadeEmMeses: number) {}

  comer(): void{
    console.log(`${this.nome} comeu:\nNHAM NHAM`)
  }
}

class animalVoador extends animal implements AnimalVoadorInterface {

  constructor(public nome: string, public idadeEmMeses: number, public penas?: boolean) 
  {
    super(nome, idadeEmMeses)
  }
  comer(): void {
    console.log(`${this.nome} bateu o bico e comeu:\ncrock crock`)
  }
  voar () {
    console.log(`${this.nome} voou`)
  }
  andar() {
    throw Error('Animal Não pode andar')
  }
}

const cat  = new animal ("eros", 36)
const arara = new animalVoador ("blu", 48, true)
const pato = new animalVoador ("Jose", 60, true)

cat.comer()
arara.comer();
arara.voar()

export {}