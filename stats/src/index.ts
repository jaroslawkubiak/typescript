import fs from "fs";

const matches = fs
  .readFileSync("football.csv", { encoding: "utf-8" })
  .split("\n")
  .map((row: string): string[] => {
    return row.split(",");
  });

let manUnitedWins = 0;

matches.filter((row: string[]): void => {
  if ((row[1] === "Man United" && row[5] === "H") || (row[2] === "Man United" && row[5] === "A"))
    manUnitedWins++;
});

console.log(`Man United won ${manUnitedWins} games`);
