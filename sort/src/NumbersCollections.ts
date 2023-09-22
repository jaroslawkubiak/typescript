import { Sorter } from './Sorter';

export class NumbersCollections extends Sorter {
  //   //long way
  //   data: number[];
  //   constructor(data: number[]) {
  //     this.data = data;
  //   }

  //short way
  constructor(public data: number[]) {
    super();
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }

  //słowo get pozwala użyć metody length() jak właściwości, np collection.length; zamiast collection.length();
  get length(): number {
    return this.data.length;
  }
}
