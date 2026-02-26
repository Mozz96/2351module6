let favoriteMeals = ["Mac And Cheese", "Chili Cheese Hotdog", "Chicken Fried Steak", "Cheese Enchiladas"]
let favoriteDrinks = ["Big Red", "Sweet Tea", "Water (Very Important!)", "Dr. Pepper"]
let myFavorites = favoriteMeals.concat(favoriteDrinks)

let pie = {
    crust: "crumbly",
    flavor: "cherry",
    topping: "whipped cream",
    
    pieTime: function(){
        console.log("My perfect pie would be "+ this.crust + ", the flavor would have to be " + this.flavor + ", and there would have to be " + this.topping + " on top!");
    }
}

console.log(favoriteMeals);

console.log(pie);

console.log(myFavorites);

console.log(pie.pieTime());