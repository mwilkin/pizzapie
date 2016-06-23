// Business Logic
// Objects
var newPizza;
var toppings;

 function Pizza (size, toppings, price) {
  this.pizzaSize = size;
  this.pizzaToppings = toppings;
  this.pizzaPrice = 0;
}
// Clear fields
// function resetFields() {
//   $("#display-order").hide();
//   $("input#ckbox:checkbox").removeAttr("checked");
// }

// function Address (street, city, state) {
//   this.street = street;
//   this.city = city;
//   this.state = state;
// }

// Delivery

// Prototypes
Pizza.prototype.sizeCost = function () {
  if (this.pizzaSize === "large") {
    return this.pizzaPrice = 22;
  } else if (this.pizzaSize === "medium") {
    return this.pizzaPrice = 18;
  } else {
    return this.pizzaPrice = 14;
  }
}

Pizza.prototype.toppingsCost = function() {
  if (this.pizzaSize === "Large") {
    for(var i=0; i<this.pizzaToppings.length; i++) {
      this.pizzaPrice += 3;
    }
  }
  if (this.pizzaSize === "Medium") {
    for(var i=0; i<this.pizzaToppings.length; i++) {
    this.pizzaPrice += 2;
    }
  }
  if (this.pizzaSize === "Small") {
    for(var i=0; i<this.pizzaToppings.length; i++) {
    this.pizzaPrice += 1;
    }
  }
}

// User Interface
$(document).ready(function() {
  $("form.pizzaOrderform").submit(function(event){
    event.preventDefault();

    var size = $("input:radio[name=size]:checked").val();
    toppings =[];
    $("input:checkbox[name=toppings]:checked").each(function() {
      (toppings).push(this.value);
    });
    newPizza = new Pizza(size, toppings)

    newPizza.sizeCost();
    newPizza.toppingsCost();

    $("#pizza-size").text(newPizza.pizzaSize);
    $("#pizza-toppings").text(toppings);
    $("#pizza-cost").text(newPizza.pizzaPrice);

    $("#placeOrder").hide();
    $("#display-order").show();
    $("#newOrder").show();
  });
    $("#newOrder").click(function(event){
      $("input:checkbox").removeAttr("checked");
      $("#display-order").hide();
  });
});
