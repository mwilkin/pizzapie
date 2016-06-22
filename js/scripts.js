// Business Logic
 function Pizza (size, toppings, price) {
  this.pizzaSize = size;
  this.pizzaProtein = protein;
  this.pizzaVegetable = vegetable;
  this.pizzaPrice = price;
}
  // this.pizzaCrust
  // this.pizzaSauce

// function Address (street, city, state) {
//   this.street = street;
//   this.city = city;
//   this.state = state;
// }

// Delivery Method

Pizza.prototype.size = function () {
    if (this.pizzaSize === "Extra Large") {
    this.pizzaPrice = 26;
  } else if (this.pizzaSize === "Large") {
    this.pizzaPrice = 22;
  } else if (this.pizzaSize === "Medium") {
    this.pizzaPrice = 18;
  } else {
    this.pizzaPrice = 14;
  }
};

// Protein
Pizza.prototype.protein = function () {
  if (this.pizzaSize === "Small") {
    for (j=0; j<this.pizzaProtein.length; j++) {
      this.pizzaPrice +=1;
     }
   } else if (this.pizzaSize === "Medium") {
     for (j=0; j<this.pizzaProtein.length; j++) {
       this.pizzaPrice +=2;
     }
   } else if (this.pizzaSize === "Large") {
     for (j=0; j<this.pizzaProtein.length; j++) {
       this.pizzaPrice +=3;
     }
   } else {
     for (j=0; j<this.pizzaProtein.length; j++) {
       this.pizzaPrice +=4;
   }
  }
}

// Vegetable
Pizza.prototype.vegetable = function () {
  if (this.pizzasize === "Small") {
    for (j=0; j<this.pizzaVegetable.length; j++) {
      this.pizzaPrice +=1;
     }
   } else if (this.pizzasize === "Medium") {
     for (j=0; j<this.pizzaVegetable.length; j++) {
       this.pizzaPrice +=2;
     }
   } else if (this.pizzasize === "Large") {
     for (j=0; j<this.pizzaVegetable.length; j++) {
       this.pizzaPrice +=3;
     }
   } else {
     for (j=0; j<this.pizzaVegetable.length; j++) {
       this.pizzaPrice +=4;
   }
  }
}


// User Interface
$(document).ready(function() {
  $("#newOrder").submit(function(event) {
    event.preventDefault();
    var total = 0;
    var proteins = [];
    var vegetables = [];
    var delivery = $("#deliver").val();
    v
  })
})
