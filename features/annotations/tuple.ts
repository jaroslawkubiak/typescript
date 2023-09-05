//object like
const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// tuple like, but still ARRAY - properties in specyfic order
const pepsi = ["brown", true, 40]; // const pepsi: (string | number | boolean)[]

// true tuple
const cola: [string, boolean, number] = ["brown", true, 40];

// type alias
type Drink = [string, boolean, number];
const sprite: Drink = ["white", true, 25];

// nie wiadomo o co chodzi z liczbami, co one oznaczają? wiemy że to liczby, ale nie wiemy co one oznaczają.
const carSpecs: [number, number] = [400, 3354];

// to samo przy użyciu obiektu, od razu widać co te liczby oznaczają.
const carStats = {
  horsePower: 400,
  weight: 3354,
};
