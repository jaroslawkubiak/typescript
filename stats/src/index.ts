import { CvsFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";

const reader = new CvsFileReader("football.csv");
reader.read();

// import fs from "fs";
// const matches = fs
//   .readFileSync("football.csv", { encoding: "utf-8" })
//   .split("\n")
//   .map((row: string): string[] => {
//     return row.split(",");
//   });

// better than comparison with plain string "H", but not so good
// const HOME_WIN = "H";
// const AWAY_WIN = "A";

// almost good, but why it is an object?
// const MatchResult = {
//   HomeWin: "H",
//   AwayWin: "A",
//   Draw: "D",
// };

let manUnitedWins = 0;

for (let match of reader.data) {
  if (
    (match[1] === "Man United" && match[5] === MatchResult.HomeWin) ||
    (match[2] === "Man United" && match[5] === MatchResult.AwayWin)
  )
    manUnitedWins++;
}

console.log(`Man United won ${manUnitedWins} games`);

const test = reader.data[0][1];
