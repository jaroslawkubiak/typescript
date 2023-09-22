const carMakers: string[] = ['Ford', 'Honda', 'Porsche'];

// gdy deklarujemy pustą tabelę, zawsze podawajmy typ jej zmiennych
// const carMakers:string[] = [];

const dates = [new Date(), new Date()];

// dwuwymiarowa tabela
const carsByMake: string[][] = [['Focus', 'Fusion'], ['Civic', 'Accord'], ['911']];

// help with inference when extracting values
const car = carMakers[0]; // value type is string
const myCar = carMakers.pop(); // value type is string

//prevent incompatible values
// carMakers.push(999); // error : Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)

// help with 'map';
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('1982-12-03');
