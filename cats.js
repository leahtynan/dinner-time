// Cat Feeding Simulation by Leah Tynan 🐈
// A bag of cat food contains several flavors of food: chicken, beef, salmon, cod, and turkey. 
// Pressing the "Get Cat Food" button retrieves a random flavor can from the bag. There is a mysteriously infinite supply, but we want to keep track of how many items have been retrieved.
// When the can is withdrawn, cats meow and animate if it is a food they like. If it is a food they do not like, they do nothing.

// -------------------- OBJECTS --------------------

// Object literal https://www.dyn-web.com/tutorials/object-literal/#targetText=JavaScript%20Object%20Literal,cause%20problems%20when%20combining%20code.
var bag = {              
    flavors: ["chicken", "beef", "salmon", "cod", "turkey"],
	itemsRetrieved: 0
}; 

// Class, template that we want to create instances of
function Cat(name, color, favoriteFlavors) {
  this.name = name;
  this.color = color;
  this.favoriteFlavors = favoriteFlavors;
  // Meow function;
  // Animate function;
}

// -------------------- MAIN FEEDING FUNCTION --------------------

function retrieveCan() {
	 var flavor = bag.flavors[Math.floor(Math.random()*bag.flavors.length)];
	 bag.itemsRetrieved++;
	 console.log("-------- CAN #" + bag.itemsRetrieved + " --------");
	 console.log("The flavor is: " + flavor + "! ");
	 // TODO: Update can graphic with "flavor.png".
	 // TODO: Cats respond
	 for (i = 0; i < 4; i++) {
		 if (cats[i].favoriteFlavors.includes(flavor) == true) {
			 console.log("* " + cats[i].name + " would eat a " + flavor + " can.");
		 } else {
			 console.log("* " + cats[i].name + " would NOT eat a " + flavor + " can.");
		 }
	 }
}

// -------------------- SETUP ON LOAD --------------------

// Identify the trigger in the DOM
var getCatFoodButton = document.getElementById("catFoodTrigger"); 
getCatFoodButton.addEventListener("click", function () { 
  retrieveCan();
});

// Create the cats and add them to the cats array
var cats = new Array();
var smoky = new Cat('Smoky', "gray", ["chicken", "cod", "beef"]);
var amber = new Cat("Amber", "orange", ["beef", "turkey"]);
var midnight = new Cat("Midnight", "black", ["salmon", "turkey"]);
var sunshine = new Cat("Sunshine", "yellow", ["cod", "chicken"]);
cats.push(smoky);
cats.push(amber);
cats.push(midnight);
cats.push(sunshine);
console.log("Number of cats: " + cats.length);

// Give the cats the correct colors
// TODO: Use the hex colors in the objects to add a color overlay on plain graphic https://css-tricks.com/tinted-images-multiple-backgrounds/