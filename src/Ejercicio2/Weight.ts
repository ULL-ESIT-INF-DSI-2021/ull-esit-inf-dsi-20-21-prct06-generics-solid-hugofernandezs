import {isConvertible} from './isConvertible';

export enum WeightUnits {
  Gt = 15,
  Mt = 12,
  T = 6,
  kg = 3,
  g = 0,
  mg = -3,
  µg = -6,
  ng = -9,
  pg = -12,
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
    const power: number = units - this.valueUnits_;
    return this.value_ * Math.pow(10, power);
  }
}
