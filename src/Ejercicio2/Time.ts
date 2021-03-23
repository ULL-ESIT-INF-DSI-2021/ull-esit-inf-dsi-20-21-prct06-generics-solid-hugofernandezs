import {isConvertible} from './isConvertible';

export enum TimeUnits {
  year = 6622560000,
  month = 18144000,
  week = 604800,
  day = 86400,
  hour = 3600,
  min = 60,
  sec = 1,
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
    const seconds: number = this.value_ * this.valueUnits_;
    return seconds / units;
  }
}
