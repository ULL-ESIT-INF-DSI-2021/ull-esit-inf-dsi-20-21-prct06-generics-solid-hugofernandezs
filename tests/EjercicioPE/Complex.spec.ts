import 'mocha';
import {expect} from 'chai';
import {Complex} from '../../src/EjercicioPE/Complex';

const complex = new Complex({real: 4, imaginary: 3});

describe('Creación de un número complejo y operaciones básicas.', () => {
  it('Se puede crear un complejo.', () => {
    expect(complex);
  });

  it('Se puede sumar dos complejos.', () => {
    expect(complex.add({real: 2, imaginary: 9})).to.be.deep.equal(
        {real: 6, imaginary: 12},
    );
  });

  it('Se puede restar dos complejos.', () => {
    expect(complex.substract({real: 2, imaginary: 9})).to.be.deep.equal(
        {real: 2, imaginary: -6},
    );
  });

  it('Se puede multiplicar dos complejos.', () => {
    expect(complex.multiply({real: 2, imaginary: 9})).to.be.deep.equal(
        {real: 8, imaginary: 27},
    );
  });

  it('Se puede dividir dos complejos.', () => {
    expect(complex.divide({real: 2, imaginary: 9})).to.be.deep.equal(
        {real: 2, imaginary: 0.3333333333333333},
    );
  });
});
