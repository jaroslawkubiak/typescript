@classDecorator
class Boat {
  @testDecorator
  color: string = 'red';

  // accessor
  get formattedColor(): string {
    return `this boats color is ${this.color}`;
  }

  @logError('Ooops, boat was sunk in ocean!')
  pilot(@parameterDecorator speed: string): void {
    if (speed === 'fast') {
      console.log('swish');
    } else {
      console.log('nothing');
    }
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

// another decorator
// target is always be prototype of this class
function testDecorator(target: any, key: string) {
  console.log('Target=', target);
  console.log('key=', key);
}

// decorator
function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (err) {
        console.log(errorMessage);
      }
    };
  };
}
