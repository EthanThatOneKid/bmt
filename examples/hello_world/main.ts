import { greet } from "./hello_world.ts";

const name = prompt("What is your name?");
if (name) {
  alert(greet(name));
}
