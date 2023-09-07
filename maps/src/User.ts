import { faker } from "@faker-js/faker";
//npm install @faker-js/faker

export class User {
  constructor() {
    this.name = faker.person.firstName();
    this.location = {
      lat: Number(faker.location.latitude()),
      lng: Number(faker.location.longitude()),
    };
  }
  name: string;
  location: {
    lat: number;
    lng: number;
  };
}
