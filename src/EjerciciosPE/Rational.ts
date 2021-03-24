import {Effectible} from './Effectible';


/**
 * Defines the parts of a rational number.
 */
export type rationalParts = {num: number, den: number};


/**
 * Describes a Rational number with real and imaginary parts.
 */
export class Rational implements Effectible<rationalParts> {
  value_: rationalParts;

  /**
   * Stores the passed value;
   * @param newValue Value to be stored.
   */
  constructor(newValue: rationalParts) {
    this.value_ = newValue;
  }

  /**
   * Adds the passed operand to the stored one.
   * @param operator1 Operand to add.
   */
  add(operand: rationalParts): rationalParts {
    return {
      num: (this.value_.num * operand.den) + (operand.num * this.value_.den),
      den: this.value_.den * operand.den,
    };
  }

  /**
   * Substracts the passed operand to the stored one.
   * @param operator1 Operand to substract.
   */
  substract(operand: rationalParts): rationalParts {
    return {
      num: (this.value_.num * operand.den) - (operand.num * this.value_.den),
      den: this.value_.den * operand.den,
    };
  }

  /**
   * Multiplies the passed operand to the stored one.
   * @param operator1 Operand to multiply.
   */
  multiply(operand: rationalParts): rationalParts {
    return {
      num: (this.value_.num * operand.num),
      den: this.value_.den * operand.den,
    };
  }

  /**
   * Divides the passed operand to the stored one.
   * @param operator1 Operand to divide.
   */
  divide(operand: rationalParts): rationalParts {
    return {
      num: (this.value_.num * operand.den),
      den: this.value_.den * operand.num,
    };
  }
}
