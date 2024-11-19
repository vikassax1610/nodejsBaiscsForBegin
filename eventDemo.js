import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

function greetingHandler(name) {
  console.log(`hello world ${name}`);
}
function goodbyehandler(name) {
  console.log(`Goodbye world ${name}`);
}

// 1st way
myEmitter.emit(greetingHandler("vikas"));
myEmitter.emit(goodbyehandler("vikas"));

//2nd way
// myEmitter.on("greet", greetingHandler);
// myEmitter.on("goodbye", goodbyehandler);
// myEmitter.emit("greet", "vikas");
// myEmitter.emit("goodbye", "vikas");
