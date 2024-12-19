// import { Battle } from "./battle";
// import { Character } from "./character";
// import { Logger } from "./logger";

import { Car } from "./car";
import { Logger } from "./logger";
import { Race } from "./race";

// const logger = new Logger();
// const battle = new Battle(logger);

// const hero = new Character(1, "Shinta", 100, 25);
// const monster = new Character(2, "Golem", 160, 15);

// console.log("Iniciando la batalla...");
// battle.battle(hero, monster);
// console.log("Batalla terminada!!!");

const logger = new Logger();
const race = new Race(logger);

const car1 = new Car(1, "Rayo McQueen");
const car2 = new Car(2, "Mate");

const finishLine = 50;

race.startRace(car1, car2, finishLine);
