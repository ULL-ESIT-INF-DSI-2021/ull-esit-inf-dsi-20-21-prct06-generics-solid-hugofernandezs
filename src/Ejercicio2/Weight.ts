import {isConvertible} from './isConvertible';

export enum WeightUnits {
  Gt = 1000000000000000,
  Mt = 1000000000000,
  T = 1000000,
  kg = 1000,
  hg = 100,
  dag = 10,
  g = 1,
  dg = 0.1,
  cg = 0.01,
  mg = 0.001,
  µg = 0.000001,
  ng = 0.000000001,
  pg = 0.000000000001,
  pound = 0.00220462,
  ounce = 0.035274
};

export class Weight implements isConvertible<WeightUnits> {
  static readonly units = WeightUnits;
  value_: number;
  valueUnits_: WeightUnits;

  constructor(newValue: number, newUnit: WeightUnits) {
    this.value_ = newValue;
    this.valueUnits_ = newUnit;
  }

  public convert(units: WeightUnits): number {
    const grams: number = this.value_ / this.valueUnits_;
    return grams * units;
  }
}
