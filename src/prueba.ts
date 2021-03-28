abstract class Persona {
  abstract name: string;
  abstract imprimir(): void;
}
class Individuo extends Persona {
  name: string;
  constructor(name: string) {
      super();
      this.name = name;
  }
  imprimir(): void{
      console.log(this.name);
  }
}
let p: Individuo;
p = new Individuo('Antonio');
p.imprimir();
