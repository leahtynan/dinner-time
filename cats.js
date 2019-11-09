// Cat Feeding Simulation by Leah Tynan 🐈
// A bag of cat food contains several flavors of food: chicken, beef, salmon, cod, and turkey. 
// Pressing the "Get Cat Food" button retrieves a random flavor can from the bag. There is a mysteriously infinite supply, but we want to keep track of how many items have been retrieved.
// When the can is withdrawn, cats meow and animate if it is a food they like. If it is a food they do not like, they do nothing.

// -------------------- OBJECTS --------------------

// Object literal 
var bag = {              
    flavors: ["chicken", "beef", "salmon", "cod", "turkey"],
	itemsRetrieved: 0
}; 

// Constructor
function Cat(name, color, favoriteFlavors) {
  this.name = name;
  this.color = color;
  this.favoriteFlavors = favoriteFlavors;
}

// -------------------- MAIN FEEDING FUNCTION --------------------

function retrieveCan() {
	 var flavor = bag.flavors[Math.floor(Math.random()*bag.flavors.length)];
	 bag.itemsRetrieved++;
	 console.log("-------- CAN #" + bag.itemsRetrieved + " --------");
	 console.log("The flavor is: " + flavor + "! ");
	 // TODO: Update can graphic with "flavor.png".
	 for (i = 0; i < 4; i++) {
		 if (cats[i].favoriteFlavors.includes(flavor) == true) {
			 console.log("* " + cats[i].name + " would eat a " + flavor + " can.");
			 document.getElementById(cats[i].name).innerHTML = "Wants food"; // TODO: Replace this with changing background image, filename cats[i].name_wants-food
			 // TODO: Add alt text and title for accessibility
		 } else {
			 console.log("* " + cats[i].name + " would NOT eat a " + flavor + " can.");
		  	 document.getElementById(cats[i].name).innerHTML = "Default"; // TODO: Replace this with changing background image, filename cats[i].name_default
			 // TODO: Add alt text and title for accessibility
		 }
	 }
}

// -------------------- SETUP ON LOAD --------------------

// Identify the trigger in the DOM
var getCatFoodButton = document.getElementById("catFoodTrigger"); 
getCatFoodButton.addEventListener("click", function () { 
  retrieveCan();
});

// Create the cats and add them to the cats array. The color specified her will map to the filename.
// Cat names must match name in the DOM
var cats = new Array();
var smoky = new Cat('smoky', "gray", ["chicken", "cod", "beef"]);
var amber = new Cat("amber", "orange", ["beef", "turkey"]);
var midnight = new Cat("midnight", "black", ["salmon", "turkey"]);
var sunshine = new Cat("sunshine", "yellow", ["cod", "chicken"]);
cats.push(smoky);
cats.push(amber);
cats.push(midnight);
cats.push(sunshine);
console.log("Number of cats: " + cats.length);

// TODO: Load the default cat graphics
for (i = 0; i < 4; i++) {
	document.getElementById(cats[i].name).style.backgroundImage = "url('http://leahbrunetto.com/images/patterns/luxe.jpg')"; // TODO: Replace this with changing background image, filename cats[i].name_default
	// TODO: Add alt text and title for accessibility
}
