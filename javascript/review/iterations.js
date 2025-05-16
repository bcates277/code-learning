// https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-iterators/cheatsheet

// Iterating over arrays

const separator = '-------------------';
console.log(separator);


// Using forEach
const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);


//
console.log(separator);
//


// forEach Method
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(fruits => console.log('I want to eat a ' + fruits));


//
console.log(separator);
//


// The .map() Method
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(word => {
  return word[0]
})

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbers.map(number => {
  return number / 100
})
console.log(smallNumbers.join(''))


//
console.log(separator);
//


// The .filter() Method
const randomNumbers = [375, 200, 3.14, 7, 13, 852];
const smallerNumbers = randomNumbers.filter(number => {
  return number < 250;
})
console.log(smallerNumbers)

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7;
  
})
console.log(longFavoriteWords)


//
console.log(separator);
//


const animalsNew = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal = animalsNew.findIndex(animal => {
  return animal === 'elephant';
});

const startsWithS = animalsNew.findIndex(animal =>{
  return animal[0] === 's';
})

console.log(foundAnimal)

console.log(startsWithS)


