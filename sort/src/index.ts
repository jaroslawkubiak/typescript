import { Sorter } from './Sorter';
import { NumbersCollections } from './NumbersCollections';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// const stringCollections = new CharactersCollection("toJakisString");
// const sortuj = new Sorter(stringCollections);
// sortuj.sort();
// console.log(stringCollections.data);

// const linkedList = new LinkedList();
// linkedList.add(500);
// linkedList.add(12);
// linkedList.add(-54);
// linkedList.add(34);

// const sorter = new Sorter(linkedList);
// sorter.sort();
// linkedList.print();

//############## code after changing Sorter class to be abstract class
const numbersCollection = new NumbersCollections([102, -5, 0, 41, -8]);
numbersCollection.sort();
console.log(numbersCollection.data);

const stringCollections = new CharactersCollection('toJakisString');
stringCollections.sort();
console.log(stringCollections.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(12);
linkedList.add(-54);
linkedList.add(34);

linkedList.sort();
linkedList.print();
