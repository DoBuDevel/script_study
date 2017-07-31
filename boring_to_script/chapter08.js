const song = "Honky Tonk Women";
console.log(song.indexOf("onk")); // 1
console.log(song.indexOf("Onk")); // -1 because of case mismatch

console.log(song.startsWith("Honk")); // true
console.log(song.startsWith("Tonk")); // false because of case sensitivity

console.log(song.endsWith("men")); // true
console.log(song.endsWith("Men")); // false because of case sensitivity
