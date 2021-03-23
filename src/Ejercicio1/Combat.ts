import {Fighter} from './Fighter';


/**
 * Implements a combat between two fighters.
 */
export class Combat {
  private readonly fighter1_: Fighter;
  private readonly fighter2_: Fighter;


  /**
   * Stores the two fighters that will combat.
   * @param fighter1 First fighter.
   * @param fighter2 Second fighter.
   */
  constructor(fighter1: Fighter, fighter2: Fighter) {
    this.fighter1_ = fighter1;
    this.fighter2_ = fighter2;
  }


  /**
   * Returns the fighter 1.
   */
  public get fighter1(): Fighter {
    return this.fighter1_;
  }


  /**
   * Returns the fighter 2.
   */
  public get fighter2(): Fighter {
    return this.fighter2_;
  }

  /**
   * Starts the combat between the two fighters. The first to attack will be
   * the one with the highest speed. If both have the same speed, the fighter 1
   * wil start the combat.
   */
  public start() {
    let fighter1Health: number = this.fighter1_.health;
    let fighter2Health: number = this.fighter2_.health;
    console.log(
        `Starting combat between ${this.fighter1.name} and `,
        `${this.fighter2.name}\n`,
        `${this.fighter1.name}: ${this.fighter1.sentence}\n`,
        `${this.fighter2.name}: ${this.fighter2.sentence}\n`,
    );
    while ((fighter1Health > 0) && (fighter2Health > 0)) {
      let attackResult: number = Math.floor(
          this.attackDamage(this.fighter1, this.fighter2));
      fighter2Health -= attackResult;
      console.log(
          `${this.fighter1.name} attacked ${this.fighter2.name} and dealt `,
          `${attackResult} of damage!\n${this.fighter2.name} hp reduced to `,
          `${fighter2Health}\n`,
      );
      if (fighter2Health <= 0) {
        break;
      }

      attackResult = Math.floor(
          this.attackDamage(this.fighter2, this.fighter1));
      fighter1Health -= attackResult;
      console.log(
          `${this.fighter2.name} attacked ${this.fighter1.name} and dealt `,
          `${attackResult} of damage!\n${this.fighter1.name} hp reduced to `,
          `${fighter1Health}\n`,
      );
    }
    console.log(
        `Combat ended!`,
    );
  }


  /**
   * Compares all the possible universes to calculate the damage multiplier.
   * Dragon Ball > Marvel.
   * Marvel > Pokemon.
   * Pokemon > Dragon Ball.
   */
  private attackDamage(fighter1: Fighter, fighter2: Fighter) {
    let effectiveness: number;

    if (fighter1.universe === fighter2. universe) {
      effectiveness = 1;
    } else {
      effectiveness = fighter1.damageMultiplier(fighter2);
    }

    return (50 * (fighter1.attack / fighter2.defense) * effectiveness);
  }
}
