try {
  throw new exception("fake exception");
} catch (err) {
  var test = "can you see me";
  console.log(err instanceof ReferenceError);  // true
}
console.log(test === "can you see me");     // true
console.log(typeof err === "undefined");    // true
