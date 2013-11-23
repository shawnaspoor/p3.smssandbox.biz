
console.log('the js is working')
/*-------------------------------------------------------------------------
check for local storage to allow for key/name value pair grouping. Good info available at diveintohtml5.info
--------------------------------------------------------------------------*/
/*-$(document).ready(function() {
	if (Modernizr.localstorage) {
 	 // window.localStorage is available!
	} else {
	 // no native support for HTML5 storage :(
 	alert("You appear to be working on an older browser. This webpage is optimized to work on IE 8.0+, Firefox3.5+, Safari 4.0+ and Chromw 4.0+.");
}
});
*/
/*-------------------------------------------------------------------------
baked goods choice drop down selection
--------------------------------------------------------------------------*/
$('.bakedGoods').change(function() {
	
	//which dropdown choice was made
	var option = " ";
	$('select option:selected').each(function() {
		option += $(this).text() + " ";
	}); 
	//displaying on the screen which choice was made
	$('.bakedGood').html(option);
	

}).change();

/*-------------------------------------------------------------------------
quantity of baked goods text area

$('.quantity').keyup(function() {
	//get the quantity type
	var quantity = $(this).val();

	//check they didn't try and order more than 99 items
	var quantity_wanted = quantity.length;

	if(quantity_wanted == 2) {
		$('#quantityError').html("You cannot order more than 99 items online. If you wish to order more than that please contact us directly via phone or email.");
	}
	else {
		$('#quantityError').html("");
	}
	
	//put the quantity onto the invoice
	$('.quantityNeeded').html(quantity);
});
--------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------
add the new baked good to the invoice
--------------------------------------------------------------------------*/
$('#addInvoiceLine').click(function() {
	console.log('add button clicked')

	//invoice line holder
	var orderLineItem= "";
	
	//add the baked good type from the drop down selection
	orderLineItem 	= 	'<div class="line1">'+ $(".bakedGoods").val()+'</div>'+'<br>';


	//create the order line and add the values just chosen

	//$('#updatedInvoiceLineNumber').append(invoice_line_numnber);
	$('#orderLineItem').append(orderLineItem);
	//$('#orderLineQuantity').after(invoice_line_quantity);



	
	//reset the invoiceLine so the user can add another fresh one
	$('#orderLineItem').val('');

});

/*-------------------------------------------------------------------------
add the new baked good quantity to the invoice
--------------------------------------------------------------------------*/

$('#addInvoiceLine').click(function() {
	

	//invoice line holder
	var orderLineQuantity= "";
	
	//add the baked good type from the drop down selection
	orderLineQuantity 	= '<div class="line2">'+$(".quantity").val()+'</div>'+'<br>';
	//invoice_line_quantity	= 	;


	//create the order line and add the values just chosen
	$('#orderLineQuantity').after(orderLineQuantity);
	
	//reset the invoiceLine so the user can add another fresh one
	$('#orderLineQuantity').val('');

});
/* this doesn't appear to be working to count clicks, frustrating 
var count = 0;
$('#addInvoiceLine').click(function() {
    $("button.button").submit(function(){
             count++;
        });
    console.log(count);
});
*/

/*-------------------------------------------------------------------------
sum all the quantities ordered to stop more than 100 being ordered.

var total=0;
for (var i=0; i < quantity.length; i++){
	 total += quantity[i];
}
console.log(total)
--------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------
add the recipient name
--------------------------------------------------------------------------*/
$('#name').keyup(function() {
	//find out what they entered as their name
	var name = $(this).val();

	$('#nameOut').html(name);

	console.log(name);
});

/*-------------------------------------------------------------------------
add the recipient billing address
--------------------------------------------------------------------------*/
$('#billingAddress').keyup(function() {
	//find out what they entered as their address
	var billingAddress = $(this).val();

	$('#billingAddressOut').html(billingAddress);

	console.log(name);
});

$('#state').keyup(function() {
	//find out what they entered as their address
	var state = $(this).val();

	$('#stateOut').html(state);

	console.log(name);
});

/*-------------------------------------------------------------------------
add the recipient email address
--------------------------------------------------------------------------*/
$('#email').blur(function() {
	//find out what they entered as their email
	var email = $(this).val();

	$('#emailOut').html(email);

    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
    alert('Please provide a valid email address');
    email.focus;
    return false;
 	
};

	console.log(name);
});



/*-------------------------------------------------------------------------
check quantity input is a number and not too large
--------------------------------------------------------------------------*/
$('#quantity').change(function(){

	var	quantity = $(this).val();

	console.log(quantity)

	if($.isNumeric(quantity)) {

	}
	else {
		$('#quantityError').html("Invalid input, that isn't a number.");
	}

	//check they didn't try and order more than 99 items
	var quantity_wanted = quantity.length;

	if(quantity_wanted == 2) {
		$('#quantityError').html("You cannot order more than 99 items online. If you wish to order more than that please contact us directly via phone or email.");
	}
	else {
		$('#quantityError').html("");
	}
   
	});


});


/*-------------------------------------------------------------------------
add quantity to an array
--------------------------------------------------------------------------*/
	var quantity = [];


    $('.addInvoiceLine').click(function() {


 	console.log(quantityInput);

	var quantityInput = document.getElementById("quantity");

	function insert() {

		var input = parseInt(quantityInput.value);

		quantity.push(input);

		var total = quantity.reduce(function( a, b ) {
		return a + b;

		console.log(total)
		});

		$('#total').html(total);

		clearAndShow();
	}
	
	

	var invoiceDisplay  = document.getElementById("orderLineQuantity");

	function clearAndShow() {
		quantityInput.value ="";

		invoiceDisplay.innerHTML = "";

		invoiceDisplay.innerHTML += quantity.join("<br /> <br />") ;
		
	}



	var total = quantity.reduce(function(a, b) {
		return a + b;

		console.log(total)
	});

	$('#total').html(total);
		

/*-------------------------------------------------------------------------
validate input from the fields
--------------------------------------------------------------------------*/
	
$("#name").validate({
	rules: {
		name: {
			required: true,
			minlength: 2
		},
		billingAddress: {
			required: true,
			minlength: 10
		},
		state: {
			required: true,
			minlength:2
		},
		email: {
			required: true,
			minlength:5
		}
	},
	messages: {
		name: "Please enter your name",
		billingAddress: "Please enter a billing address.",
		state: "We need your city, state, and zipcode as well.",
		email: "Definitely required, we need to know how to contact you to take payment."
	},
	onfocusout: true
	//console.log("validate")
});
