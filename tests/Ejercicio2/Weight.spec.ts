import 'mocha';
import {expect} from 'chai';
import {Weight} from '../../src/Ejercicio2/Weight';


describe('Se puede crear la clase Weight y se puede convertir.', () => {
  it('Se puede pasar de kg a g.', () => {
    const weight = new Weight(1, Weight.units.kg);
    expect(weight.convert(Weight.units.g)).to.be.deep.equal(0.001);
  });

  it('Se puede pasar de kg a Mt.', () => {
    const weight = new Weight(1, Weight.units.kg);
    expect(weight.convert(Weight.units.Mt)).to.be.deep.equal(1000000000);
  });

  it('Se puede pasar de g a mg.', () => {
    const weight = new Weight(1, Weight.units.g);
    expect(weight.convert(Weight.units.ng)).to.be.deep.equal(1e-9);
  });

  it('Se puede pasar de g a g.', () => {
    const weight = new Weight(1, Weight.units.g);
    expect(weight.convert(Weight.units.g)).to.be.deep.equal(1);
  });

  it('Se puede pasar de g a libras.', () => {
    const weight = new Weight(1, Weight.units.g);
    expect(weight.convert(Weight.units.pound)).to.be.deep.equal(0.00220462);
  });

  it('Se puede pasar de g a onzas.', () => {
    const weight = new Weight(1, Weight.units.g);
    expect(weight.convert(Weight.units.ounce)).to.be.deep.equal(0.035274);
  });
});
