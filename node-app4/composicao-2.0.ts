type constructor = new (...args: any[]) => {};
type GConstructor<T = {}> = new (...args: any[]) => T;
type animalProps = GConstructor<[nome: string, idadeEmMeses: number]>

function MixingVoa<TBase extends constructor>(superClasse: TBase) {
  return class extends superClasse {
    constructor(...args: any){
      super(args)
    }
    voar () {
      console.log(`${this} voou`)
    }
  }
}


interface AnimalInterface {
  nome: string
  idadeEmMeses: number
  comer: () => void
}




class animal implements AnimalInterface {
  constructor(public nome: string, public idadeEmMeses: number) {}

  comer(): void{
    console.log(`${this.nome} comeu:\nNHAM NHAM`)
  }
}


const cat  = new animal ("eros", 36)
// const arara = new (MixingVoa(animal))
// const pato = new animalVoador ("Jose", 60, true)

cat.comer()
// arara.comer();
// arara.voar()
