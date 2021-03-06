/*
--- Day 1: Report Repair ---
After saving Christmas five years in a row, you've decided to take a vacation at a nice resort on a tropical island. Surely, Christmas will go on without you.

The tropical island has its own currency and is entirely cash-only. The gold coins used there have a little picture of a starfish; the locals just call them stars. None of the currency exchanges seem to have heard of them, but somehow, you'll need to find fifty of these coins by the time you arrive so you can pay the deposit on your room.

To save your vacation, you need to get all fifty stars by December 25th.

Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

Before you leave, the Elves in accounting just need you to fix your expense report (your puzzle input); apparently, something isn't quite adding up.

Specifically, they need you to find the two entries that sum to 2020 and then multiply those two numbers together.

For example, suppose your expense report contained the following:

1721
979
366
299
675
1456
In this list, the two entries that sum to 2020 are 1721 and 299. Multiplying them together produces 1721 * 299 = 514579, so the correct answer is 514579.

Of course, your expense report is much lasrger. Find the two entries that sum to 2020; what do you get if you multiply them together?
*/

export const dayOne = (DEBUG = false, dataPath: string): number[] => {
  const response = Deno.readTextFileSync(dataPath);
  let answer = Infinity;
  const data = JSON.parse(response) as number[];

  const answers = [];

  for (const v of data) {
    const rem = 2020 - v;
    const i = data.findIndex((x) => x === rem);
    if (i !== -1) {
      if (DEBUG) console.log(`${v} + ${data[i]} = ${v + data[i]}`);
      answer = v * data[i];
    }
  }
  if (answer === Infinity) {
    throw new Error(
      "Failed to get an answer for Day 1, part 1. Got Infinity.",
    );
  }
  if (DEBUG) console.log("The answer to Day 1, part 1 is:", answer);
  answers.push(answer);

  /*
          --- Part Two ---
          The Elves in accounting are thankful for your help; one of them even offers you a starfish coin they had left over from a past vacation. They offer you a second one if you can find three numbers in your expense report that meet the same criteria.
      
          Using the above example again, the three entries that sum to 2020 are 979, 366, and 675. Multiplying them together produces the answer, 241861950.
      
          In your expense report, what is the product of the three entries that sum to 2020?
        */

  for (const [i, x] of data.entries()) {
    const rem1 = 2020 - x;
    for (const [j, y] of data.entries()) {
      if (i !== j) {
        const rem2 = rem1 - y;
        const v = data.findIndex((v) => v === rem2);
        if (v !== -1) {
          if (DEBUG) {
            console.log(`${x} + ${y} + ${data[v]} = ${x + y + data[v]}`);
          }
          answer = x * y * data[v];
        }
      }
    }
  }
  if (answer === Infinity) {
    throw new Error(
      "Failed to get an answer for Day 1, part 1. Got Infinity.",
    );
  }
  if (DEBUG) console.log("The answer to Day 1, part 2 is:", answer);
  answers.push(answer);
  return answers;
};
