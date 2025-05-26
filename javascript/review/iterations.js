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


//
console.log(separator);
//


// The .map() Method
const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbers.map(number => {
  return number / 100
})
const newSmallNumbers = smallNumbers.join('')
console.log(`New small numbers are: ${newSmallNumbers}`);


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


// The .find() Method
const animalsNew = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal = animalsNew.findIndex(animal => {
  return animal === 'elephant';
});

const startsWithS = animalsNew.findIndex(animal =>{
  return animal[0] === 's';
})

console.log(foundAnimal)
console.log(startsWithS)


//
console.log(separator);
//


// reduce Method
const numse = [1, 2, 3, 4, 5];
const sum = numse.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sum);
// Breakdown:
// acc = 0, val = 1 → acc = 0 + 1 = 1

// acc = 1, val = 2 → acc = 1 + 2 = 3

// acc = 3, val = 3 → acc = 3 + 3 = 6

// acc = 6, val = 4 → acc = 6 + 4 = 10

// acc = 10, val = 5 → acc = 10 + 5 = 15


//
console.log(separator);
//


let cb = (n1, n2) => {return n1 + n2};

let hof = (func) => {
  let value = func(3, 5);
  return `this function returned ${value}`;
}

console.log(hof(cb))


//
console.log(separator);
//


const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of the accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue
}, 4);
console.log(newSum)


//
console.log(separator);
//


// iterators
const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Allem', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const theNumber = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = theNumber.map(num => num - 5);
console.log(smallerNums)


const randomNums = [1, 123, 25, 90, 3543, 42];

const foundElement = randomNums.findIndex(num => num > 200);
console.log(foundElement); // 5


//
console.log(separator);
//

const menu = {
  _meal: '',
  _price: 0,
  set mealToCheck {
    if (typeof mealToCheck === 'string') {
      this._meal = mealToCheck;
    }
  }
}