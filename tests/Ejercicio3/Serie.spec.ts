import 'mocha';
import {expect} from 'chai';
import {Serie} from '../../src/Ejercicio3/Serie';

const serie = new Serie("Superman", "12 octubre 2019",
    "Hugo Fernández", 8);

describe('Creación de una serie y acceso a sus atributos.', () => {
  it('Se puede acceder a sus atributos básicos.', () => {
    expect(serie.getName()).to.be.deep.equal("Superman");
    expect(serie.getDate()).to.be.deep.equal("12 octubre 2019");
    expect(serie.getDirector()).to.be.deep.equal("Hugo Fernández");
    expect(serie.getSeasons()).to.be.deep.equal(8);
  });
});
