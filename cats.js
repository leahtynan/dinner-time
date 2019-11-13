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
var random = 99;

function retrieveCan() {
	 var newRandom = Math.floor(Math.random()*bag.flavors.length);
	 while(newRandom == random) {
		 newRandom = Math.floor(Math.random()*bag.flavors.length);
	 }
	 random = newRandom;
	 var flavor = bag.flavors[newRandom];
	 bag.itemsRetrieved++;
	 console.log("-------- CAN #" + bag.itemsRetrieved + " --------");
	 document.getElementById("message").innerHTML = "The flavor is " + flavor;
	 for (i = 0; i < 4; i++) {
		 var imageContainer = document.getElementById(cats[i].name);
		 var imageToUpdate = imageContainer.getElementsByTagName('img')[0];
		 if (cats[i].favoriteFlavors.includes(flavor) == true) {
			 console.log("* " + cats[i].name + " would eat a " + flavor + " can.");
		 	 imageToUpdate.src = "img/" + cats[i].name + "_wants-food.jpg"; 
			 imageToUpdate.alt = cats[i].color + " cat begging for food";
			 imageToUpdate.title = cats[i].color + " cat begging for food";
		 } else {
			 console.log("* " + cats[i].name + " would NOT eat a " + flavor + " can.");
		 	 imageToUpdate.src = "img/" + cats[i].name + "_default.jpg"; 
			 imageToUpdate.alt = cats[i].color + " cat resting";
			 imageToUpdate.title = cats[i].color + " cat resting";
		 }
	 }
}

// -------------------- SETUP ON LOAD --------------------

// Set up the button click trigger in the DOM
var getCatFoodButton = document.getElementById("catFoodTrigger"); 
getCatFoodButton.addEventListener("click", function () { 
  retrieveCan();
});

// Create the cats and add them to the cats array. The colors specified here are used for alt/title text. The names map to the filenames and IDs in the DOM.
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

