import 'reflect-metadata';

// const plane = {
//   color: 'blue',
// };

// // adding invisible property to plane obj.
// Reflect.defineMetadata('note', 'hi there', plane);

// // getting back information from metadata
// const note = Reflect.getMetadata('note', plane);
// console.log(note);

// // associate metadata with color property
// Reflect.defineMetadata('note2', 'hi there!', plane, 'color');
// const note2 = Reflect.getMetadata('note2', plane, 'color');
// console.log(note2);
@printMetadata
class Plane {
  color: string = 'red';

  @markFunction('555')
  fly(): void {
    console.log('Vrrrrrrr');
  }
}

// factory decorater
function markFunction(secretInfo: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('secret', secretInfo, target, key);
  };
}

// decorator to get all metadata from class Plane
function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata('secret', target.prototype, key);
    console.log('secret=', secret);
  }
}
