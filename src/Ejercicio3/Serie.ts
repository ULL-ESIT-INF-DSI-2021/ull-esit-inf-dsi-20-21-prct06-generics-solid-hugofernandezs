import {StreamableObject} from './StreamableObject';

/**
 * Implements a streamable serie.
 */
export class Serie extends StreamableObject {
  seasons_: number;

  /**
   * Stores the passed values.
   * @param name Name of the object.
   * @param date Date of release.
   * @param director Director of the object.
   * @param season Number of seasons
   */
  constructor(name: string, date: string, director: string, seasons: number) {
    super(name, date, director);
    this.seasons_ = seasons;
  }

  /**
   * Returns the name of the serie.
   */
  public getName(): string {
    return this.name_;
  }

  /**
   * Returns the release date of the serie.
   */
  public getDate(): string {
    return this.date_;
  }

  /**
   * Returns the director of the serie.
   */
  public getDirector(): string {
    return this.director_;
  }

  /**
   * Returns the seasons of the serie.
   */
  public getSeasons(): number {
    return this.seasons_;
  }
}
