import {StreamableObject} from './StreamableObject';

interface IsStreamableCollection {
  collection_: StreamableObject[];

  findByName(name: string): StreamableCollection | number;
  findByDate(date: string): StreamableCollection | number;
  findByDirector(director: string): StreamableCollection | number;
}

/**
 * Implements a collection of streamable objects.
 */
export class StreamableCollection implements IsStreamableCollection {
  collection_: StreamableObject[];

  /**
   * Stores the passed values.
   * @param collection Collection to store.
   */
  constructor(collection: StreamableObject[]) {
    this.collection_ = collection;
  }

  /**
   * Finds a streamable object that matches the name.
   */
  public findByName(name: string): StreamableCollection | undefined {
    this.collection_.forEach((object) => {
      if (object.getName() === name) {
        return object;
      }
    });
    return -1;
  }

  /**
   * Finds a streamable object that matches the date.
   */
  public findByDate(date: string): StreamableCollection | number {
    this.collection_.forEach((object) => {
      if (object.getName() === date) {
        return object;
      }
    });
    return -1;
  }

  /**
   * Finds a streamable object that matches the director.
   */
  public findByDirector(director: string): StreamableCollection | number {
    this.collection_.forEach((object) => {
      if (object.getName() === director) {
        return object;
      }
    });
    return -1;
  }
}
