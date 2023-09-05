// const add: (a: number, b: number) => number = (a: number, b: number) => {
//   return a + b;
// };

const add = (a: number, b: number): number => {
  return a + b;
};

// arrow function
const subtract = (a: number, b: number): number => {
  return a - b;
};

// function declaration
function divide(a: number, b: number): number {
  return a / b;
}

// function expression
const multiply = function (a: number, b: number): number {
  return a * b;
};

// funkcja która nie zwraca nic - void
const logger = (message: string): void => {
  console.log(message);
};

// never - nigdy nie wykonamy całej funkcji - funkcja zakończy się wcześniej, bardzo skrajny przypadek
const throwError = (message: string): never => {
  throw new Error(message);
};

const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

//          najpierw destrukturyzacja a potem annotations
const logWeather = ({ date, weather }: { date: Date; weather: string }): void => {
  console.log(date);
  console.log(weather);
};
logWeather(todaysWeather);
