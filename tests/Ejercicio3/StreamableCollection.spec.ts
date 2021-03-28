import 'mocha';
import {expect} from 'chai';
import {StreamableCollection} from '../../src/Ejercicio3/StreamableCollection';
import {Documentary} from '../../src/Ejercicio3/Documentary';

const doc = new Documentary("Leones en la sabana", "12 octubre 2019",
    "Hugo Fernández", "Leones");

const collection = new StreamableCollection([doc]);

describe('Creación de una colección y acceso a sus atributos.', () => {
  it('Se puede encontrar por sus atributos.', () => {
    expect(collection.findByName("Leones en la sabana")).to.be.deep.equal(doc);
    expect(collection.findByDirector("Hugo Fernández")).to.be.deep.equal(doc);
    expect(collection.findByDate("12 octubre 2019")).to.be.deep.equal(doc);
  });
});
