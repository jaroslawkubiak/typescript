"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollections = void 0;
const Sorter_1 = require("./Sorter");
class NumbersCollections extends Sorter_1.Sorter {
    //   //long way
    //   data: number[];
    //   constructor(data: number[]) {
    //     this.data = data;
    //   }
    //short way
    constructor(data) {
        super();
        this.data = data;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    }
    swap(leftIndex, rightIndex) {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }
    //słowo get pozwala użyć metody length() jak właściwości, np collection.length; zamiast collection.length();
    get length() {
        return this.data.length;
    }
}
exports.NumbersCollections = NumbersCollections;
