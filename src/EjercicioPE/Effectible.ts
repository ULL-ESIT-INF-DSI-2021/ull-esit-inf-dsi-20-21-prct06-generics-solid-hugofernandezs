/**
 * Interface to implement effectible objects.
 */
export interface Effectible<T> {
  value_: T;
  add(operand: T): T;
  substract(operand: T): T;
  multiply(operand: T): T;
  divide(operand: T): T;
}

