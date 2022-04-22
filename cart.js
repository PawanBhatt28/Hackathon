//navbar
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header-2');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if (window.scrollY > 150) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }

}

// for cart
$(document).ready(function(){
    update_amounts();
    $('.qty, .price').on('keyup keypress blur change', function(e) {
        update_amounts();
    });
});
function update_amounts(){
  var sum = 0.0;
        $('#myTable > tbody  > tr').each(function() {
          var qty = $(this).find('.qty').val();
            var price = $(this).find('.price').val();
            var amount = (qty*price)
            sum+=amount;
            $(this).find('.amount').text(''+amount);
        });
  $('.total').text(sum);
}



//----------------for quantity-increment-or-decrement-------
var incrementQty;
var decrementQty;
var plusBtn  = $(".cart-qty-plus");
var minusBtn = $(".cart-qty-minus");
var incrementQty = plusBtn.click(function() {
  var $n = $(this)
      .parent(".button-container")
      .find(".qty");
  $n.val(Number($n.val())+1 );
  update_amounts();
});

var decrementQty = minusBtn.click(function() {
      var $n = $(this)
      .parent(".button-container")
      .find(".qty");
  var QtyVal = Number($n.val());
  if (QtyVal > 0) {
      $n.val(QtyVal-1);
  }
  update_amounts();
});























