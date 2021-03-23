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

  it('Se puede pasar de m a milla.', () => {
    const length = new Length(1, Length.units.m);
    expect(length.convert(Length.units.mile)).to.be.deep.equal(1609.34);
  });

  it('Se puede pasar de km a milla.', () => {
    const length = new Length(1, Length.units.km);
    expect(length.convert(Length.units.mile)).to.be.deep.equal(1.60934);
  });

  it('Se puede pasar de m a pulgadas.', () => {
    const length = new Length(1, Length.units.m);
    expect(length.convert(Length.units.inche)).to.be.deep.equal(0.0254);
  });

  it('Se puede pasar de pulgada a milla.', () => {
    const length = new Length(1, Length.units.inche);
    expect(length.convert(Length.units.mile)).to.be.equal(63359.84251968504);
  });
});
