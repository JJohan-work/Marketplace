
let openWindow = "#shop";


function winDraw(curWin) {
  $(".section").hide();
  $(curWin).show();
}

$(document).ready(function() {
  winDraw(openWindow);

  $('#toCart').click(function () {
    openWindow = "#cart";
    console.log(openWindow);
    winDraw(openWindow);
  });
  $('#toShop').click(function () {
    openWindow = "#shop";
    console.log(openWindow);
    winDraw(openWindow);
  });
});