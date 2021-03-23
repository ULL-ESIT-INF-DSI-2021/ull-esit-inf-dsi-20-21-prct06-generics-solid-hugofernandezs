import 'mocha';
import {expect} from 'chai';
import {MarvelFighter} from '../../src/Ejercicio1/MarvelFighter';

const thor = new MarvelFighter("Thor", 100, 1000, 300, 500,
    "¡Yo soy Thor, hijo de Odín! ¡Dios del trueno y heredero de Asgard!",
    "Dios del trueno");

describe('Creación de un luchador de marvel y acceso a sus atributos.', () => {
  it('Se puede acceder a su nombre.', () => {
    expect(thor.name).to.be.deep.equal("Thor");
  });

  it('Se puede acceder a su velocidad.', () => {
    expect(thor.speed).to.be.deep.equal(100);
  });
  it('Se puede acceder a su vida.', () => {
    expect(thor.health).to.be.deep.equal(1000);
  });

  it('Se puede acceder a su ataque.', () => {
    expect(thor.attack).to.be.deep.equal(300);
  });

  it('Se puede acceder a su defensa.', () => {
    expect(thor.defense).to.be.deep.equal(500);
  });

  it('Se puede acceder a su frase.', () => {
    expect(thor.sentence).to.be.deep.equal(
        "¡Yo soy Thor, hijo de Odín! ¡Dios del trueno y heredero de Asgard!");
  });

  it('Se puede acceder a su habilidad.', () => {
    expect(thor.ability).to.be.deep.equal("Dios del trueno");
  });
});
