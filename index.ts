import { parse } from "https://deno.land/std/flags/mod.ts";
import { dayOne } from "./d1/d1.ts";
import { dayTwo } from "./d2/d2.ts";
import { dayThree } from "./d3/d3.ts";
import { dayFour } from "./d4/d4.ts";
import { dayFive } from "./d5/d5.ts";

const DEBUG = parse(Deno.args).d || Boolean(parse(Deno.args).debug);

const DAY = Number(parse(Deno.args).day);

switch (DAY) {
  case 1:
    dayOne(DEBUG, "./d1/data.json");
    break;
  case 2:
    dayTwo(DEBUG, "./d2/data.txt");
    break;
  case 3:
    dayThree(DEBUG, "./d3/data.txt");
    break;
  case 4:
    dayFour(DEBUG, "./d4/data.txt");
    break;
  case 5:
    dayFive(DEBUG, "./d5/data.txt");
    break;
}
