let openWindow = "#shop";
cart = [];


// functions

// handles changing between shop and cart
function winDraw(curWin) {
  $(".section").hide();
  $(curWin).show();
}

// generates the cart and starts the removeItem handler
function generateCart(cartList) {
  $("#cartList").empty();
  for (let i=0; i < cartList.length;i++) {
    $("#cartList").append('<li id="'+cartList[i]+'">'+cartList[i]+'<button class="remove" value="'+i+'">Remove</button></li>');
  }
  removeItem(cart);
}

// removes items from cart
function removeItem(cart1) {
  $("button.remove").on("click", function () {
    let index = parseInt(this.value);
    cart1.splice(index,1);
    generateCart(cart1);
  });
}


// Code to execute after document is ready
$(document).ready(function() {
  winDraw(openWindow);

  $('#toCart').click(function () {
    openWindow = "#cart";
    winDraw(openWindow);
    generateCart(cart);
  });
  
  $('#toShop').click(function () {
    openWindow = "#shop";
    winDraw(openWindow);
  });
  
  $("#shop .col").click(function () {
    cart.push(this.id);
  });
});