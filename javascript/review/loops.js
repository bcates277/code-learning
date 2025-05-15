// Loops
// for loop to iterate over an array
const vacationSpots = ['Bali', 'Paris', 'Tulum'];
for (let i = 0; i < vacationSpots.length; i++){
  console.log('I would love to visit ' + vacationSpots[i]);
}

// nested loop to compare two arrays
const bobsFollowers = ['betsy', 'tracy', 'casey', 'stella', 'john'];
const tinasFollowers = ['tracy', 'betsy', 'harry', 'stella'];
const mutualFollowers = [];
for (let i = 0; i < bobsFollowers.length; i++){
for (let j = 0; j < tinasFollowers.length; j++){

if (bobsFollowers[i] === tinasFollowers[j]) {
 mutualFollowers.push(tinasFollowers[i]);
}
}
}
console.log(mutualFollowers)

// while loop to iterate over an array
// Math.floor(Math.random() * 4) will give us a random number from 0 to 3. 
// We’ll use this number to index the cards array, 
// and assign the value of currentCard to a random element from that array.
// We’ll continue to loop until currentCard is equal to 'spade'.
const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard
while (currentCard !== 'spade') {
currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard)
}

// do while loop to iterate over an array
let cupsOfSugarNeeded = 5;
let cupsAdded = 0;

do {
cupsAdded++
console.log(cupsAdded + ' cups was added')}
while ( cupsAdded < cupsOfSugarNeeded);


// break statement to exit a loop
// The break statement is used to exit a loop early.
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);

  
  if (rapperArray[i] === 'Notorious B.I.G.'){
    break;
  }
  }
  
console.log("And if you don't know, now you know.");