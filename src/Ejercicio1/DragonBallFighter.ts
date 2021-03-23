import {Fighter} from './Fighter';


/**
 * Implements a fighter of the dragon ball's universe.
 */
export class DragonBallFighter extends Fighter {
  private readonly universe_: string = "Dragon Ball";
  private readonly race_: string;


  /**
   * Stores all the basic atributes of the fighter.
   * @param name_ Name of the fighter.
   * @param speed_ Speed of the fighter.
   * @param health_ Health of the fighter.
   * @param attack_ Attack multiplier of the fighter.
   * @param defense_ Defense multiplier of the fighter.
   * @param sentence_ Combat sentence of the fighter.
   */
  constructor(name: string, speed: number, health: number, attack: number,
      defense: number, sentence: string, race: string) {
    super(name, speed, health, attack, defense, sentence);
    this.race_ = race;
  }


  /**
   * Returns the race of the fighter.
   */
  public get race(): string {
    return this.race_;
  }


  /**
   * Returns the universe of the fighter.
   */
  public get universe(): string {
    return this.universe_;
  }


  /**
   * Returns the damage multiplier dealt to the enemy.
   * Dragon Ball > Marvel.
   * Dragon Ball < Pokemon.
   */
  public damageMultiplier(enemy: Fighter): number {
    let effectiveness: number;

    switch (enemy.universe) {
      case 'Marvel': {
        effectiveness = 2;
        break;
      }
      case 'Pokemon': {
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
