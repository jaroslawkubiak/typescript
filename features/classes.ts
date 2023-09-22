class Vehicle {
  constructor(public color: string) {}
  protected honk(): void {
    console.log('honk');
  }
}

const vehicle = new Vehicle('white pearl');
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('drive drive');
  }

  startDrivingProcess(): void {
    this.drive();
  }
}

const car = new Car(5, 'miami blue');
car.startDrivingProcess();
console.log(car.color);
