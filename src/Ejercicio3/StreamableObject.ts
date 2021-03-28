interface Streamable {
  name_: string;
  date_: string;
  director_: string;

  getName(): string;
  getDate(): string;
  getDirector(): string;
}

/**
 * Implements an abstract class for streamable objects.
 */
export abstract class StreamableObject implements Streamable {
  name_: string;
  date_: string;
  director_: string;

  /**
   * Stores the passed values.
   * @param name Name of the object.
   * @param date Date of release.
   * @param director Director of the object.
   */
  constructor(name: string, date: string, director: string) {
    this.name_ = name;
    this.date_ = date;
    this.director_ = director;
  }

  /**
   * Returns the name of the object.
   */
  public getName(): string {
    return this.name_;
  }

  /**
   * Returns the release date of the object.
   */
  public getDate(): string {
    return this.date_;
  }

  /**
   * Returns the director of the object.
   */
  public getDirector(): string {
    return this.director_;
  }
}
