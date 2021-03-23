import {Fighter} from './Fighter';


/**
 * Implements a fighter of the pokemon's universe.
 */
export class PokemonFighter extends Fighter {
  private readonly universe_: string = "Pokemon";
  private readonly type_: string;


  /**
   * Stores all the basic atributes of the pokemon.
   * @param name_ Name of the pokemon.
   * @param speed_ Speed of the pokemon.
   * @param health_ Health of the pokemon.
   * @param attack_ Attack multiplier of the pokemon.
   * @param defense_ Defense multiplier of the pokemon.
   * @param sentence_ Combat sentence of the pokemon.
   * @param type_ Returns the type of the pokemon.
   */
  constructor(name: string, speed: number, health: number, attack: number,
      defense: number, sentence: string, type: string) {
    super(name, speed, health, attack, defense, sentence);
    this.type_ = type;
  }


  /**
   * Returns the type of the pokemon.
   */
  public get type(): string {
    return this.type_;
  }


  /**
   * Returns the universe of the fighter.
   */
  public get universe(): string {
    return this.universe_;
  }


  /**
   * Returns the damage multiplier dealt to the enemy.
   * Pokemon > Dragon Ball.
   * Pokemon < Marvel.
   */
  public damageMultiplier(enemy: Fighter): number {
    let effectiveness: number;

    switch (enemy.universe) {
      case 'Dragon Ball': {
        effectiveness = 2;
        break;
      }
      case 'Marvel': {
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
