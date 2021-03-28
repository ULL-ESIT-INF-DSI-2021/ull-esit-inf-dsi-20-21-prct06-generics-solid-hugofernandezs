import 'mocha';
import {expect} from 'chai';
import {Documentary} from '../../src/Ejercicio3/Documentary';

const documentary = new Documentary("Leones en la sabana", "12 octubre 2019",
    "Hugo Fernández", "Leones");

describe('Creación de un documental y acceso a sus atributos.', () => {
  it('Se puede acceder a sus atributos básicos.', () => {
    expect(documentary.getName()).to.be.deep.equal("Leones en la sabana");
    expect(documentary.getDate()).to.be.deep.equal("12 octubre 2019");
    expect(documentary.getDirector()).to.be.deep.equal("Hugo Fernández");
    expect(documentary.getAnimal()).to.be.deep.equal("Leones");
  });
});
