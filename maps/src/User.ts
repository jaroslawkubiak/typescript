import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.person.firstName();
    this.location = {
      lat: Number(faker.location.latitude()),
      lng: Number(faker.location.longitude()),
    };
  }
  markerContent(): string {
    return `User name: ${this.name}`;
  }
}
