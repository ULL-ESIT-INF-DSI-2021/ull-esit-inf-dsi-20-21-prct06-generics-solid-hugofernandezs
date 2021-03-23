import {isConvertible} from './isConvertible';

export enum LengthUnits {
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
  value_: number;
  valueUnits_: LengthUnits;

  constructor(newValue: number, newUnit: LengthUnits) {
    this.value_ = newValue;
    this.valueUnits_ = newUnit;
  }

  public convert(units: LengthUnits): number {
    const power: number = units - this.valueUnits_;
    return this.value_ * Math.pow(10, power);
  }
}
