import { Character } from "./character";
import { Logger } from "./logger";

export class Battle {
  constructor(private logger: Logger) {}

  battle(attacker: Character, defender: Character) {
    while (attacker.isAlive() && defender.isAlive()) {
      this.logger.log(`${attacker.name} ataca a: ${defender.name}`);

      attacker.attack(defender);

      if (!defender.isAlive()) {
        this.logger.log(`${defender.name} ha muerto!`);
        break;
      } else {
        this.logger.log(
          `${defender.name} tiene ${defender.health} puntos de vida restantes`
        );
      }
      //necesito colocar mas codigo
      [attacker, defender] = [defender, attacker];
    }
  }
}
