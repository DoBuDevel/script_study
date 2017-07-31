const movies = ["The Wolf of Wall Street", "Zootopia", "Babysitting"];

for(let i = 0; i < movies.length; i++){
  console.log(movies[i]);
}

movies.forEach(movie => {
  console.log(movie);
});

for (const movie of movies) {
  console.log(movie);
}

movies.unshift("Pacific Rim");// <=> movies.push("yout element")
console.log(movies[0]); // "Pacific Rim"

movies.splice(0, 1); // Remove 1 element starting at index 0
console.log(movies.length); // 2
console.log(movies[0]); // "The Wolf of Wall Street"
console.log(movies[1]); // "Zootopia"
