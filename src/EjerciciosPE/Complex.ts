import {Effectible} from './Effectible';


/**
 * Defines the parts of a complex number.
 */
export type complexParts = {real: number, imaginary: number};


/**
 * Describes a complex number with real and imaginary parts.
 */
export class Complex implements Effectible<complexParts> {
  value_: complexParts;

  /**
   * Stores the passed value;
   * @param newValue Value to be stored.
   */
  constructor(newValue: complexParts) {
    this.value_ = newValue;
  }

  /**
   * Adds the passed operand to the stored one.
   * @param operator1 Operand to add.
   */
  add(operand: complexParts): complexParts {
    return {real: this.value_.real + operand.real,
      imaginary: this.value_.imaginary + operand.imaginary};
  }

  /**
   * Substracts the passed operand to the stored one.
   * @param operator1 Operand to substract.
   */
  substract(operand: complexParts): complexParts {
    return {real: this.value_.real - operand.real,
      imaginary: this.value_.imaginary - operand.imaginary};
  }

  /**
   * Multiplies the passed operand to the stored one.
   * @param operator1 Operand to multiply.
   */
  multiply(operand: complexParts): complexParts {
    return {real: this.value_.real * operand.real,
      imaginary: this.value_.imaginary * operand.imaginary};
  }

  /**
   * Divides the passed operand to the stored one.
   * @param operator1 Operand to divide.
   */
  divide(operand: complexParts): complexParts {
    return {real: this.value_.real / operand.real,
      imaginary: this.value_.imaginary / operand.imaginary};
  }
}
