export class Car {
  //constructor
  constructor(
    public id: number,
    public name: string,
    public distance: number = 0
  ) {}

  //advance
  advance() {
    const randomDistance = Math.floor(Math.random() * 10) + 1;
    this.distance += randomDistance;
    return randomDistance;
  }
}
