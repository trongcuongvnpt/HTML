
var greeting = 'Howdy';
var name = 'Molly';
var message = ', please check your order:';

var welcome = greeting + name + message;


var sign = 'Montague House';
var title = sign.length;
var subtotal = title * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;


var el = document.getElementById( element: 'greeting');

el.textContent = welcome;


var elSign = document.getElementById( element:'userSign');
elSign.text = sign;


var elTitles = document.getElementById( element: 'title');
elTitle.textContent = title;


var elSubtotal = documnet.getElementById( element: 'subtotal');
elSubtotal.textContent = '$' + subTotal;






var elGrandTotal = document.getElementById( element: 'grandTotal');
elGrandTotal.textContent = '$' + grandTotal;




