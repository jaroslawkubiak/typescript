// type annotations - po nazwie zmiennej jest : i typ zmiennej.
let apples: number = 5;

let speed: string = 'fast';
// ts sprawdzi typ i nie pozwoli przypisać number do zmiennej typu string
// speed = 120;

let hasName: boolean = true;

let nothingMuch: null = null;

let nothing: undefined = undefined;

// built in obj
let now: Date = new Date();

// Array: string[] mówi że to będzie tablica zawierająca zmienne typu string
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [5, 6, 7];
let truths: boolean[] = [true, true, false];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// function - przy funkcjach podajemy jakie typy argumentów funkcja ma otrzymać oraz jakie typy ma zwrócić
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// when to use annotations
// 1) function that returns the 'any' type
const json = '{"x":10, "y":20}';
const cords: { x: number; y: number } = JSON.parse(json);

// 2)  when we declare variable on one line and initalizate it later
let words = ['red', 'green', 'blue'];

let foundWord: boolean;
// albo tak, w jednej linii deklaracja i inicjowanie, TS wywnioskuje typ
// let foundWord = false;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') foundWord = true;
}

// 3) when variable whose type cannot by inferred correctly
// np gdy zmienna może być boolean albo stringiem
let numbers = [-10, -1, 12];
let numbersAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) numbersAboveZero = numbers[i];
}
