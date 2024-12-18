import { Battle } from "./battle";
import { Character } from "./character";
import { Logger } from "./logger";

const logger = new Logger();
const battle = new Battle(logger);

const hero = new Character(1, "Shinta", 100, 25);
const monster = new Character(2, "Golem", 160, 15);

console.log("Iniciando la batalla...");
battle.battle(hero, monster);
console.log("Batalla terminada!");
