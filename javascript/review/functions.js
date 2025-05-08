// Function Declaration
function getReminger() {
  console.log("Water the plants");
}
function greetInSpanish() {
  console.log("Hola");
}
greetInSpanish();

// Parameters and Arguments
function sayThanks(name) {
  console.log(`Thank you ${name}`);
}
sayThanks("Jorge");

// Default Parameters
function makeShoppingList(item1 = "milk", item2 = "bread", item3 = "eggs") {
  console.log(`You need to buy ${item1}, ${item2}, and ${item3}.`);
}
makeShoppingList("apples", "bananas", "oranges");

// Returning Values
function rectangleArea(width, height) {
  if (width < 0 || height < 0) {
    return "You need positive integers to calculate area!";
  }
  return width * height;
}
console.log(rectangleArea(5, 10));

// Helper Functions
function multiplyByNineFifths(number) {
  return number * (9 / 5);
}

function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
}

getFahrenheit(15);

// Arrow Functions
const plantsNeedsWater = (day) => {
  if (day === "Wednesday") {
    return true;
  } else {
    return false;
  }
};
console.log(plantsNeedsWater("Tuesday"));

// Concise Body Arrow Functions
const plantNeedsWater = (day) => (day === "Wednesday" ? true : false);
console.log(plantNeedsWater("Tuesday"));
