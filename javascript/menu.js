const menu = {
  _meal: "hamburger",
  _price: 8.99,

  set meal(mealToCheck) {
    if (typeof mealToCheck === "string") {
      this._meal = mealToCheck;
    } else {
      console.log("Please provide a valid string");
    }
  },
  set price(priceToCheck) {
    if (typeof priceToCheck === "number") {
      this._price = priceToCheck;
    } else {
      console.log("Please provide a valid price");
    }
  },
  get todaysSpecial() {
    if (typeof this._meal === "string" && typeof this._price === "number") {
      return `Todays Special is ${this._meal} for $${this._price}`;
    } else if (
      typeof this._meal !== "string" &&
      typeof this._price !== "number"
    ) {
      return "Meal and price are not set correctly.";
    } else if (typeof this.price !== "number") {
      return "Price must be a number.";
    } else {
      console.log("Meal must be a string");
    }
  },
};
console.log(menu.todaysSpecial);
