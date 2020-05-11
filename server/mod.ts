import { run } from "./server.ts";
import { delay } from "https://deno.land/std/async/delay.ts";

const port: number = Number(Deno.args[0]) || 8080;
while (true) {
  try {
    await run(port);
  } catch (error) {
    await delay(1000);
    console.error(error);
  }
}