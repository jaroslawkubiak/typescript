"use strict";
// we don't need this anymore when we use abstract class
// interface Sortable {
//   length: number;
//   compare(leftIndex: number, rigthIndex: number): boolean;
//   swap(leftIndex: number, rigthIndex: number): void;
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    sort() {
        const { length } = this;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++)
                if (this.compare(j, j + 1))
                    this.swap(j, j + 1);
        }
    }
}
exports.Sorter = Sorter;
