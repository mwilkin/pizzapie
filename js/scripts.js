// Business Logic
// Objects
 function Pizza (size, protein, vegetable, price) {
  this.pizzaSize = size;
  this.pizzaProtein = protein;
  this.pizzaVegetable = vegetable;
  this.pizzaPrice = price;
}

// function Address (street, city, state) {
//   this.street = street;
//   this.city = city;
//   this.state = state;
// }

// Delivery

// Prototypes
Pizza.prototype.sizeCost = function () {
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

Pizza.prototype.meatTop = function() {
  for(var i=0; i<this.pizzaProtein.length; i++) {
    this.pizzaPrice += 1.5;
  }
}

Pizza.prototype.vegetableTop = function() {
  for(var i=0; i<this.pizzaVegetable.length; i++) {
    this.pizzaPrice += 3;
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
    $("#calculatePrice").each(function(){
      var proteins = [];
      var vegetables = [];
      var size = $("select#pizza-size").val();
      console.log(size);
      $.each($("input[name='meat']:checked"), function() {
      newPizza.pizzaProtein.push($(this).val());
      });
      $.each($("input[name='vegetable']:checked"), function() {
      newPizza.pizzaVegetable.push($(this).val());
      });
    var newPizza = new Pizza (size, protein, vegetable, price);
    });
    $(".pizza-size").text(newPizza.pizzaSize);
    $(".pizza-protein").text(newPizza.pizzaProtein);
    $(".pizza-vegetable").text(newPizza.pizzaVegetable);
    $(".order-total").text(newPizza.pizzaPrice);
  });

  $("#newOrder").click(function(event){
    // $("#placeOrder").show();
    // $("#display-order").hide();
  });
});
