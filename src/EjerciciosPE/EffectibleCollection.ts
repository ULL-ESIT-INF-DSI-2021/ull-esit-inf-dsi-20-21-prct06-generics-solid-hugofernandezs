/**
 * Defines a collection of effectible objects.
 */
export class EffectibleCollection<T> {
  collection_: T[];

  /**
   * Stores the passed collection.
   * @param collection Collection to be stored.
   */
  constructor(collection: T[] = []) {
    this.collection_ = collection;
  }

  /**
   * Adds an effectible object to the collection.
   * @param effectible Effectible object to add.
   */
  addEffectible(effectible: T) {
    this.collection_.push(effectible);
  }

  /**
   * Returns an effectible object.
   * @param index Index of the object in the collection.
   * @returns The object in the passed position.
   */
  getEffectible(index: number): T {
    return this.collection_[index];
  }

  /**
   * Returns the amount of effectible objects in the collection.
   * @returns Number of the amount.
   */
  getNumberOfEffectibles(): number {
    return this.collection_.length;
  }
}
