import {isConvertible} from './isConvertible';

declare enum TimeUnits {
  millennium = 21,
  century = 18,
  decade = 15,
  year = 12,
  month = 9,
  week = 6,
  day = 3,
  hour = 2,
  min = 1,
  s = 0,
  ms = -3,
  µs = -6,
  ns = -9,
  ps = -12,
  fs = -15,
  as = -18,
  zs = -21,
  ys = -24
};

export class Time implements isConvertible<TimeUnits> {
  static readonly units = TimeUnits;
  value_: number;
  valueUnits_: TimeUnits;

  constructor(newValue: number, newUnit: TimeUnits) {
    this.value_ = newValue;
    this.valueUnits_ = newUnit;
  }

  public convert(units: TimeUnits): number {
    const power: number = units - this.valueUnits_;
    return this.value_ * Math.pow(10, power);
  }
}
