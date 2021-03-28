import 'mocha';
import {expect} from 'chai';
import {DragonBallFighter} from '../../src/Ejercicio1/DragonBallFighter';
import {FighterEncyclopedia} from '../../src/Ejercicio1/FighterEncyclopedia';

const goku = new DragonBallFighter("Goku", 100, 1000, 300, 500,
    "Disculpa, vi que bajaste la guardia y simplemente ataque, ¡ja!",
    "Saiyajin");

const vegeta = new DragonBallFighter("Vegeta", 100, 1000, 300, 500,
    "¡Yo soy el príncipe de todos los Saiyajin!",
    "Saiyajin");


const encyclopedia = new FighterEncyclopedia([goku]);

describe('Creación de la enciclopedia y acceso a sus métodos básicos.', () => {
  it('Se puede almacenar un luchador.', () => {
    encyclopedia.store(vegeta);
    expect(encyclopedia.getEncyclopedia).to.be.deep.equal([goku, vegeta]);
  });

  it('Se puede buscar por nombre.', () => {
    expect(encyclopedia.getByName("Goku")).to.be.deep.equal(goku);
  });

  it('Se puede comprobar si un luchador ya está.', () => {
    expect(encyclopedia.find(goku)).to.be.equal(true);
  });
});
