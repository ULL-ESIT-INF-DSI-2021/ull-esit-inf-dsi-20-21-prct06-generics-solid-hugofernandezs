import 'mocha';
import {expect} from 'chai';
import {Time} from '../../src/Ejercicio2/Time';


describe('Se puede crear la clase Time y se puede convertir.', () => {
  it('Se puede pasar de segundos a horas.', () => {
    const time = new Time(1000, Time.units.sec);
    expect(time.convert(Time.units.hour)).to.be.deep.equal(0.2777777777777778);
  });

  it('Se puede pasar de segundos a años.', () => {
    const time = new Time(6622560000, Time.units.sec);
    expect(time.convert(Time.units.year)).to.be.deep.equal(1);
  });

  it('Se puede pasar de años a segundos.', () => {
    const time = new Time(1, Time.units.year);
    expect(time.convert(Time.units.sec)).to.be.deep.equal(6622560000);
  });

  it('Se puede pasar de horas a minutos.', () => {
    const time = new Time(1, Time.units.hour);
    expect(time.convert(Time.units.min)).to.be.deep.equal(60);
  });
});
