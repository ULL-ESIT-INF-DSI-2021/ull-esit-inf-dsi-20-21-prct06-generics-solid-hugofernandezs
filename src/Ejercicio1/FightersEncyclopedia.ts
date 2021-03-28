import {Fighter} from './Fighter';


/**
 * Implements a combat between two fighters.
 */
export class FighterEncyclopedia {
  private readonly encyclopedia: Fighter[];


  /**
   * Stores the fighters.
   * @param fighters Fighters to store.
   */
  constructor(fighters: Fighter[]) {
    this.encyclopedia = fighters;
  }

  /**
   * Stores a fighter in the encyclopedia.
   * @param fighter Fighter to be stored.
   */
  public store(fighter: Fighter) {
    this.encyclopedia.push(fighter);
  }

  /**
   * Searchs a fighter in the encyclopedia by his name.
   * @param fighterName Fighter to be found.
   * @returns The fighter with the stats. If no fighter is found it will return
   * a fighter with default stats, that's 0 in all stats and no name.
   */
  public getByName(fighterName: string): Fighter | number {
    /* this.encyclopedia.forEach((fighter) => {
      if (fighter.name === fighterName) {
        return fighter;
      }
    });
    */
    return -1;
  }

  /**
   * Searchs for a fighter in the encyclopedia.
   * @param fighter2find Fighter looking for.
   * @returns True if the fighter is stored. False otherwise.
   */
  public find(fighter2find: Fighter): boolean {
    let returnValue: boolean = false;
    this.encyclopedia.forEach((fighter) => {
      if (fighter === fighter2find) {
        returnValue = true;
      }
    });
    return returnValue;
  }
}
