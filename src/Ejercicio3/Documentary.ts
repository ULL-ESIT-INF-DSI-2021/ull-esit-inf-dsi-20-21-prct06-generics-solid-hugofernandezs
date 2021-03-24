import {StreamableObject} from './StreamableObject';

/**
 * Implements a streamable documentary.
 */
export class Documentary extends StreamableObject {
  animal_: string;

  /**
   * Stores the passed values.
   * @param name Name of the documentary.
   * @param date Date of release.
   * @param director Director of the documentary.
   * @param animal Animal of the documentary.
   */
  constructor(name: string, date: string, director: string, animal: string) {
    super(name, date, director);
    this.animal_ = animal;
  }

  /**
   * Returns the name of the documentary.
   */
  public getName(): string {
    return this.name_;
  }

  /**
   * Returns the release date of the documentary.
   */
  public getDate(): string {
    return this.date_;
  }

  /**
   * Returns the director of the documentary.
   */
  public getDirector(): string {
    return this.director_;
  }

  /**
   * Returns the animal of the documentary.
   */
  public getAnimal(): string {
    return this.animal_;
  }
}
