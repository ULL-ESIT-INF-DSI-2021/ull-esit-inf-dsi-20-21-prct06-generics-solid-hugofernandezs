export interface isConvertible<T> {
  value_: number;
  valueUnits_: T;
  convert(measure: T, oirginalMeasure: T,
    data: number): number;
}
