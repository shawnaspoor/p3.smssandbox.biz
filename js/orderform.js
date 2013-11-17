
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
	var invoice_line = "";

	//add the baked good type from the drop down selection
	invoice_line_item = '<div class="line">'+ $(".bakedGoods").val() +'</div>';
	invoice_line_quantity = '<div class="line2">'+$(".quantity").val()+'</div>';

	//create the order line and add the values just chosen
	$('#orderLine').append(invoice_line_item, invoice_line_quantity);
	$('#orderLine').append(invoice_line_item, invoice_line_quantity);

	//reset the invoiceLine so the user can add another fresh one
	$('#invoice_line').val('');

	//+'<div class="line2">'+'$(".quantity").val()'+'</div>'





});

