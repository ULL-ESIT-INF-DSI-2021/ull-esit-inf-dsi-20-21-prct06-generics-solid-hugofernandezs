import 'mocha';
import {expect} from 'chai';
import {Rational} from '../../src/EjercicioPE/Rational';

const rational = new Rational({num: 4, den: 3});

describe('Creación de un número racional y operaciones básicas.', () => {
  it('Se puede crear un número racional.', () => {
    expect(rational);
  });

  it('Se puede sumar dos números racionales.', () => {
    expect(rational.add({num: 2, den: 9})).to.be.deep.equal(
        {num: 42, den: 27},
    );
  });

  it('Se puede restar dos números racionales.', () => {
    expect(rational.substract({num: 2, den: 9})).to.be.deep.equal(
        {num: 30, den: 27},
    );
  });

  it('Se puede multiplicar dos números racionales.', () => {
    expect(rational.multiply({num: 2, den: 9})).to.be.deep.equal(
        {num: 8, den: 27},
    );
  });

  it('Se puede dividir dos números racionales.', () => {
    expect(rational.divide({num: 2, den: 9})).to.be.deep.equal(
        {num: 36, den: 6},
    );
  });
});
