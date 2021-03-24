import {StreamableObject} from './StreamableObject';

/**
 * Implements a streamable film.
 */
export class Film extends StreamableObject {
  genre_: string;

  /**
   * Stores the passed values.
   * @param name Name of the film.
   * @param date Date of release.
   * @param director Director of the film.
   * @param genre Genre of the film.
   */
  constructor(name: string, date: string, director: string, genre: string) {
    super(name, date, director);
    this.genre_ = genre;
  }

  /**
   * Returns the name of the film.
   */
  public getName(): string {
    return this.name_;
  }

  /**
   * Returns the release date of the film.
   */
  public getDate(): string {
    return this.date_;
  }

  /**
   * Returns the director of the film.
   */
  public getDirector(): string {
    return this.director_;
  }

  /**
   * Returns the genre of the film.
   */
  public getGenre(): string {
    return this.genre_;
  }
}
