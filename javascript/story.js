let story = 'It was literally freaking beautifull and cold. And so awesome and breathtaking and nice. Last weekend, I took literally the worst bus trip of my life. I had to wait for the bus for over an hour, and when it finally arrived, it was completely packed. I ended up sitting next to'
let storyWords = story.split(' ');
let unnecessaryWords = ['literally', 'really', 'very', 'totally'];
let misspelledWord = 'beautifull';
let badWord = 'freaking';
let greater = 'breathtaking'

let count = 0;
storyWords.forEach(word => {
  count++;
});

console.log(`The number of words in the story is: ${count}`);

let betterWords = storyWords.filter(word => {
  return !unnecessaryWords.includes(word);
}); 

let noMisspells = betterWords.map(word => {
  if (word === misspelledWord) {
    return 'beautiful';
  } else 
    return word;
  }
);

let badWordIndex = noMisspells.findIndex(word => {
  return word == badWord;
});

noMisspells[badWordIndex] = 'really';


let tenGreater = noMisspells.filter(word => {
  return word.length > 10;
});

console.log(tenGreater)


let finalWords = storyWords
  .filter((word) => !unnecessaryWords.includes(word))
  .map((word) => (word === misspelledWord ? "beautiful" : word))
  .map((word) => (word === badWord ? "really" : word))
  .map((word) => (word === greater ? "dazzling" : word));


console.log(finalWords.join(' '));