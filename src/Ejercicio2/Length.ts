import {isConvertible} from './isConvertible';

export enum LengthUnits {
  Ym = 1000000000000000000000000,
  Zm = 1000000000000000000000,
  Em = 1000000000000000000,
  Pm = 1000000000000000,
  Tm = 1000000000000,
  Gm = 1000000000,
  Mm = 1000000,
  km = 1000,
  hm = 100,
  dam = 10,
  m = 1,
  dm = 0.1,
  cm = 0.01,
  mm = 0.001,
  µm = 0.000001,
  nm = 0.000000001,
  pm = 0.000000000001,
  fm = 0.000000000000001,
  am = 0.000000000000000001,
  zm = 0.000000000000000000001,
  ym = 0.000000000000000000000001,
  mile = 1609.34,
  inche = 0.0254
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
    const meters: number = this.value_ / this.valueUnits_;
    return meters * units;
  }
}
