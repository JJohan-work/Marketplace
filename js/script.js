let openWindow = "#shop";
cart = [];

function winDraw(curWin) {
  $(".section").hide();
  $(curWin).show();
}

function generateCart(cartList) {
  for (let i=0; i < cartList.length;i++) {
    $("#cartList").append('<li id='+cartList[i]+'>'+cartList[i]+'</li>');
  }
}

function clearCart() {
  $("#cartList").empty();
}

$(document).ready(function() {
  winDraw(openWindow);

  $('#toCart').click(function () {
    openWindow = "#cart";
    winDraw(openWindow);
    clearCart();
    generateCart(cart);
  });
  $('#toShop').click(function () {
    openWindow = "#shop";
    winDraw(openWindow);
  });
  $("#shop .col").click(function () {
    cart.push(this.id);
    console.log(cart);
  });
});