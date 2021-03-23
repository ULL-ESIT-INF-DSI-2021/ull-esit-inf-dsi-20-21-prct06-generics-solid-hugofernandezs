/**
 * Fighters interface. Implements the basic atributes that a fighter must have.
 * @param name_ Name of the fighter.
 * @param speed_ Speed of the fighter.
 * @param health_ Health of the fighter.
 * @param attack_ Attack multiplier of the fighter.
 * @param defense_ Defense multiplier of the fighter.
 * @param sentence_ Combat sentence of the fighter.
 */
export interface FighterInterface {
  name_: string;
  speed_: number;
  health_: number;
  attack_: number;
  defense_: number;
  sentence_: string;
}


/**
 * Fighters parent class. This class will define the basic atributes a fighter
 * must inherit.
 */
export abstract class Fighter {
  private name_: string;
  private speed_: number;
  private health_: number;
  private attack_: number;
  private defense_: number;
  private sentence_: string;

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
      defense: number, sentence: string) {
    this.name_ = name;
    this.speed_ = speed;
    this.health_ = health;
    this.attack_ = attack;
    this.defense_ = defense;
    this.sentence_ = sentence;
  }

  /**
   * Returns the name of the fighter.
   */
  public get name(): string {
    return this.name_;
  }

  /**
   * Returns the speed of the fighter.
   */
  public get speed(): number {
    return this.speed_;
  }

  /**
   * Returns the health of the fighter.
   */
  public get health(): number {
    return this.health_;
  }

  /**
   * Returns the attack of the fighter.
   */
  public get attack(): number {
    return this.attack_;
  }

  /**
   * Returns the defense of the fighter.
   */
  public get defense(): number {
    return this.defense_;
  }

  /**
   * Returns the sentence of the fighter.
   */
  public get sentence(): string {
    return this.sentence_;
  }

  /**
   * Returns the universe of the fighter.
   */
  public abstract get universe(): string;

  /**
   * Returns the damage multiplier dealt to the enemy.
   */
   public abstract damageMultiplier(enemy: Fighter): number;
}
