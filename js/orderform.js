
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
--------------------------------------------------------------------------*/
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
$('#email').keyup(function() {
	//find out what they entered as their email
	var email = $(this).val();

	$('#emailOut').html(email);

	console.log(name);
});

/*-------------------------------------------------------------------------
sum all the quantities ordered to stop more than 100 being ordered.
--------------------------------------------------------------------------*/


