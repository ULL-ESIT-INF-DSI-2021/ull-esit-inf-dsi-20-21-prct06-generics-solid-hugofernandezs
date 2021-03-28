import 'mocha';
import {expect} from 'chai';
import {Film} from '../../src/Ejercicio3/Film';

const film = new Film("Superman", "12 octubre 2019",
    "Hugo Fernández", "Acción");

describe('Creación de una película y acceso a sus atributos.', () => {
  it('Se puede acceder a sus atributos básicos.', () => {
    expect(film.getName()).to.be.deep.equal("Superman");
    expect(film.getDate()).to.be.deep.equal("12 octubre 2019");
    expect(film.getDirector()).to.be.deep.equal("Hugo Fernández");
    expect(film.getGenre()).to.be.deep.equal("Acción");
  });
});
