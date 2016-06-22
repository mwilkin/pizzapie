// Business Logic
// Objects
 function Pizza (size, protein, vegetable, price) {
  this.pizzaSize = size;
  this.pizzaProtein = protein;
  this.pizzaVegetable = vegetable;
  this.pizzaPrice = 0;
}

// function Address (street, city, state) {
//   this.street = street;
//   this.city = city;
//   this.state = state;
// }

// Delivery

// Prototypes
Pizza.prototype.sizeCost = function () {
  if (this.pizzaSize === "Large") {
    return this.pizzaPrice = 22;
  } else if (this.pizzaSize === "Medium") {
    return this.pizzaPrice = 18;
  } else {
    return this.pizzaPrice = 14;
  }
}

Pizza.prototype.meatTopCost = function() {
  if (this.pizzaSize === "Large") {
    for(var i=0; i<this.pizzaProtein.length; i++) {
      this.pizzaPrice += 3;
    }
  }
  if (this.pizzaSize === "Medium") {
    for(var i=0; i<this.pizzaProtein.length; i++) {
    this.pizzaPrice += 2;
    }
  }
  if (this.pizzaSize === "Small") {
    for(var i=0; i<this.pizzaProtein.length; i++) {
    this.pizzaPrice += 1;
    }
  }
}

Pizza.prototype.VegTopCost = function() {
  if (this.pizzaSize === "Large") {
    for(var i=0; i<this.pizzaVegetable.length; i++) {
      this.pizzaPrice += 3;
    }
  }
   if (this.pizzaSize === "Medium") {
    for(var i=0; i<this.pizzaVegetable.length; i++) {
      this.pizzaPrice += 2;
    }
  }
    if (this.pizzaSize === "Small") {
    for(var i=0; i<this.pizzaVegetable.length; i++) {
      this.pizzaPrice += 1;
    }
  }
}

// User Interface
$(document).ready(function() {
  $("#calculatePrice").submit(function(event) {
    event.preventDefault();
    // $("#display-order").show();
    // $("#newOrder").show();
    // $("#placeOrder").hide();
    var totalPrice = 0;
    var size = $("select#pizza-size").val();
    proteins =[];
    $("input[name='protein']:checked").each(function() {
      (protein).push(this.value);
      });
    vegetables = [];
    $("input[name='vegetable']:checked").each(function() {
      (vegetable).push(this.value);
      });
    var newPizza = new Pizza (size, protein, vegetable, price);

    newPizza.sizeCost();
    newPizza.meatTopCost();
    newPizza.VegTopCost();

    $(".pizza-size").text(newPizza.pizzaSize);
    $(".pizza-protein").text(newPizza.pizzaProtein);
    $(".pizza-vegetable").text(newPizza.pizzaVegetable);
    $(".order-total").text(newPizza.pizzaPrice);

    // $("#newOrder").click(function(event){
    // // $("#placeOrder").show();
    // // $("#display-order").hide();
    // });
  });
});
