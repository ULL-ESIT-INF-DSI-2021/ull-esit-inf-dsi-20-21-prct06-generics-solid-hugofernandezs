import {StreamableObject} from './StreamableObject';

interface IsStreamableCollection {
  collection_: StreamableObject[];

  findByName(name: string): StreamableObject | undefined;
  findByDate(date: string): StreamableObject | undefined;
  findByDirector(director: string): StreamableObject | undefined;
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
  public findByName(name: string): StreamableObject | undefined {
    return this.collection_.find((aux) => aux.getName() === name);
  }

  /**
   * Finds a streamable object that matches the date.
   */
  public findByDate(date: string): StreamableObject | undefined {
    return this.collection_.find((aux) => aux.getDate() === date);
  }

  /**
   * Finds a streamable object that matches the director.
   */
  public findByDirector(director: string): StreamableObject | undefined {
    return this.collection_.find((aux) => aux.getDirector() === director);
  }
}
