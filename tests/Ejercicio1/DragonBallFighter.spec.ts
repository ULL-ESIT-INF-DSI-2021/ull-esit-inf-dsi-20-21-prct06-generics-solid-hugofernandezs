import 'mocha';
import {expect} from 'chai';
import {DragonBallFighter} from '../../src/Ejercicio1/DragonBallFighter';

const goku = new DragonBallFighter("Goku", 100, 1000, 300, 500,
    "Disculpa, vi que bajaste la guardia y simplemente ataque, ¡ja!",
    "Sayayin");

describe('Creación de un luchador de marvel y acceso a sus atributos.', () => {
  it('Se puede acceder a su nombre.', () => {
    expect(goku.name).to.be.deep.equal("Goku");
  });

  it('Se puede acceder a su velocidad.', () => {
    expect(goku.speed).to.be.deep.equal(100);
  });
  it('Se puede acceder a su vida.', () => {
    expect(goku.health).to.be.deep.equal(1000);
  });

  it('Se puede acceder a su ataque.', () => {
    expect(goku.attack).to.be.deep.equal(300);
  });

  it('Se puede acceder a su defensa.', () => {
    expect(goku.defense).to.be.deep.equal(500);
  });

  it('Se puede acceder a su frase.', () => {
    expect(goku.sentence).to.be.deep.equal(
        "Disculpa, vi que bajaste la guardia y simplemente ataque, ¡ja!");
  });

  it('Se puede acceder a su raza.', () => {
    expect(goku.race).to.be.deep.equal("Sayayin");
  });
});
