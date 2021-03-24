import 'mocha';
import {expect} from 'chai';
import {EffectibleCollection} from '../../src/EjercicioPE/EffectibleCollection';
import {Complex} from '../../src/EjercicioPE/Complex';
import {Rational} from '../../src/EjercicioPE/Rational';


const complex = new Complex({real: 4, imaginary: 3});
const rational = new Rational({num: 2, den: 9});

const collection = new EffectibleCollection<Complex | Rational>([complex]);


describe('Creación de una colección y operaciones básicas.', () => {
  it('Se puede crear una colección.', () => {
    expect(collection.collection_).to.be.deep.equal([complex]);
  });

  it('Se puede añadir un objeto a la colección.', () => {
    collection.addEffectible(rational);
    expect(collection.collection_).to.be.deep.equal([complex, rational]);
  });

  it('Se puede obtener un objeto de colección.', () => {
    expect(collection.getEffectible(0)).to.be.deep.equal(complex);
  });

  it('Se puede obtener el número de objetos en la colección.', () => {
    expect(collection.getNumberOfEffectibles()).to.be.equal(2);
  });
});
