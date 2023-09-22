const profile = {
  imie: 'Alex',
  age: 40,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// destrukturyzacja zmiennej profile, aby użyć annotation musimy podać cały obiekt który wyciągamy czyli age: number

const { age, imie }: { age: number; imie: string } = profile;
// to NIE działa
// const { age }:nunmber = profile;

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
