// tworzymy nowy typ zmiennej
interface Reportable {
  // name: string;
  // year: Date;
  // broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: false,
  summary(): string {
    return `Name : ${this.name} \nYear: ${this.year} \nBroken? ${this.broken}`;
  },
};

const drink = {
  color: "brow",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
