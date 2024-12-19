import { Car } from "./car";
import { Logger } from "./logger";

export class Race {
  //constructor hacer DI del logger
  constructor(private logger: Logger) {}

  startRace(car1: Car, car2: Car, finishLine: number) {
    this.logger.log("¡Comienza la carrera!");

    while (car1.distance < finishLine && car2.distance < finishLine) {
      const car1Advance = car1.advance();
      const car2Advance = car2.advance();

      this.logger.log(
        `${car1.name} avanza ${car1Advance} metros (total: ${car1.distance} metros).`
      );
      this.logger.log(
        `${car2.name} avanza ${car2Advance} metros (total: ${car2.distance} metros).`
      );
    }

    const winner = car1.distance >= finishLine ? car1 : car2;
    this.logger.log(
      `¡${winner.name} ha ganado la carrera con ${winner.distance} metros!`
    );
  }
}
