import 'mocha';
import {expect} from 'chai';
import {Length} from '../../src/Ejercicio2/Length';


describe('Se puede crear la clase Length y se puede convertir.', () => {
  it('Se puede pasar de m a km.', () => {
    const length = new Length(1, Length.units.m);
    expect(length.convert(Length.units.km)).to.be.deep.equal(1000);
  });

  it('Se puede pasar de km a m.', () => {
    const length = new Length(1, Length.units.km);
    expect(length.convert(Length.units.m)).to.be.deep.equal(0.001);
  });

  it('Se puede pasar de m a nm.', () => {
    const length = new Length(1, Length.units.m);
    expect(length.convert(Length.units.nm)).to.be.deep.equal(1e-9);
  });

  it('Se puede pasar de m a m.', () => {
    const length = new Length(1, Length.units.m);
    expect(length.convert(Length.units.m)).to.be.deep.equal(1);
  });
});
