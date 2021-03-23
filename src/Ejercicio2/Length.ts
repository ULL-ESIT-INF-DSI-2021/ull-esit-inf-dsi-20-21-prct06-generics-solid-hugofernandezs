import {isConvertible} from './isConvertible';

declare enum LengthUnits {
  Ym = 24,
  Zm = 21,
  Em = 18,
  Pm = 15,
  Tm = 12,
  Gm = 9,
  Mm = 6,
  km = 3,
  hm = 2,
  dam = 1,
  m = 0,
  dm = -1,
  cm = -2,
  mm = -3,
  µm = -6,
  nm = -9,
  pm = -12,
  fm = -15,
  am = -18,
  zm = -21,
  ym = -24
};

export class Length implements isConvertible<LengthUnits> {
  static readonly units = LengthUnits;

  public convert(units: LengthUnits, originalUnits: LengthUnits,
      data: number): number {
    const power: number = units - originalUnits;
    return data * Math.pow(10, power);
  }
}

const aux: Length = new Length();
console.log(`${aux.convert(Length.units.km, Length.units.hm, 1)}`);
