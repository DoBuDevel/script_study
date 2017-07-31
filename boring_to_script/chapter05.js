const hello = function(name) {
  const message = `Hello, ${name}`;
  return message
}

console.log(hello("hihi"));


const hello2 = name => `Hello2 ${name}!!`;
console.log(hello2("hello2"));

console.log(Math.min(4.5, 5)); // 4.5
console.log(Math.min(19, 9));  // 9
console.log(Math.min(1, 1));   // 1
console.log(Math.random());    // A random number between 0 and 1
