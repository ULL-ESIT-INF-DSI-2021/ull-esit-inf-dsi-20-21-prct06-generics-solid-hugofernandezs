export interface isConvertible<T> {
  convert(measure: T, oirginalMeasure: T,
    data: number): number;
}
