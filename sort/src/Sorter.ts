// we don't need this anymore when we use abstract class
// interface Sortable {
//   length: number;
//   compare(leftIndex: number, rigthIndex: number): boolean;
//   swap(leftIndex: number, rigthIndex: number): void;
// }

export abstract class Sorter {
  //   one way to do this
  //   collection: number[];
  //   constructor(collection: number[]) {
  //     this.collection = collection;
  //   }

  // second way to do this
  // constructor(public collection: Sortable) {}

  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) if (this.compare(j, j + 1)) this.swap(j, j + 1);
    }
  }
}
