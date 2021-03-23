import {Fighter} from './Fighter';


/**
 * Implements a fighter of the marvel's universe.
 */
export class MarvelFighter extends Fighter {
  private readonly universe_: string = "Marvel";
  private readonly ability_: string ;


  /**
   * Stores all the basic atributes of the avenger.
   * @param name_ Name of the avenger.
   * @param speed_ Speed of the avenger.
   * @param health_ Health of the avenger.
   * @param attack_ Attack multiplier of the avenger.
   * @param defense_ Defense multiplier of the avenger.
   * @param sentence_ Combat sentence of the avenger.
   */
  constructor(name: string, speed: number, health: number, attack: number,
      defense: number, sentence: string, ability: string) {
    super(name, speed, health, attack, defense, sentence);
    this.ability_ = ability;
  }


  /**
   * Returns the ability of the fighter.
   */
  public get ability(): string {
    return this.ability_;
  }


  /**
   * Returns the universe of the avenger.
   */
  public get universe(): string {
    return this.universe_;
  }


  /**
   * Returns the damage multiplier dealt to the enemy.
   * Marvel > Pokemon.
   * Marvel < Dragon Ball.
   */
  public damageMultiplier(enemy: Fighter): number {
    let effectiveness: number;

    switch (enemy.universe) {
      case 'Pokemon': {
        effectiveness = 2;
        break;
      }
      case 'Dragon Ball': {
        effectiveness = 0.5;
        break;
      }
      default: {
        effectiveness = 1;
        break;
      }
    }

    return effectiveness;
  }
}
