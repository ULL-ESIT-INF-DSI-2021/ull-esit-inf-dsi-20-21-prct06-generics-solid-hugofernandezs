import 'mocha';
import {expect} from 'chai';
import {PokemonFighter} from '../../src/Ejercicio1/PokemonFighter';

const pikachu = new PokemonFighter("Pikachu", 100, 1000, 300, 500,
    "Pika pika, pikachuuu!!!", "electrico");

describe('Creación de un luchador pokemon y acceso a sus atributos.', () => {
  it('Se puede acceder a su nombre.', () => {
    expect(pikachu.name).to.be.deep.equal("Pikachu");
  });

  it('Se puede acceder a su velocidad.', () => {
    expect(pikachu.speed).to.be.deep.equal(100);
  });
  it('Se puede acceder a su vida.', () => {
    expect(pikachu.health).to.be.deep.equal(1000);
  });

  it('Se puede acceder a su ataque.', () => {
    expect(pikachu.attack).to.be.deep.equal(300);
  });

  it('Se puede acceder a su defensa.', () => {
    expect(pikachu.defense).to.be.deep.equal(500);
  });

  it('Se puede acceder a su frase.', () => {
    expect(pikachu.sentence).to.be.deep.equal(
        "Pika pika, pikachuuu!!!");
  });

  it('Se puede acceder a su tipo.', () => {
    expect(pikachu.type).to.be.deep.equal("electrico");
  });
});
