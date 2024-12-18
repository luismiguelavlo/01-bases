class Carro {
  constructor(
    public color: string,
    public llantas: number,
    public estaEncendido: boolean,
    public motor: string,
    public gasolina: number = 10
  ) {}

  encender() {
    this.estaEncendido = true;
  }

  acelerar() {
    console.log("Acelerando Carro");
  }

  frenar() {
    console.log("Frenando el carro");
  }

  apagar() {
    this.frenar();
    this.estaEncendido = false;
  }

  tanquear(montoATanquear: number) {
    this.gasolina = this.gasolina + montoATanquear;
  }
}

//¿que es instanciar?

const carro = new Carro("Verde", 4, false, "v8");

console.log("1 ETAPA: ", carro);

carro.encender();

console.log("2 ETAPA: ", carro);

carro.apagar();

console.log("3 ETAPA: ", carro);

carro.tanquear(30);

console.log(carro.gasolina);
