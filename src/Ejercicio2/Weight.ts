import {isConvertible} from './isConvertible';

declare enum WeightUnits {
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

  public convert(units: WeightUnits, originalUnits: WeightUnits,
      data: number): number {
    const power: number = units - originalUnits;
    return data * Math.pow(10, power);
  }
}
