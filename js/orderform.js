
console.log('the js is working');

/*-------------------------------------------------------------------------
baked goods choice drop down selection
--------------------------------------------------------------------------*/
$('.bakedGoods').change(function() {
	
	//which dropdown choice was made
	var option = " ";
	$('select option:selected').each(function() {
		option = $(this).text() + " ";
	}); 
	//displaying on the screen which choice was made
	$('.bakedGood').html(option);
	

}).change();


/*-------------------------------------------------------------------------
add the new baked good to the invoice
--------------------------------------------------------------------------*/
$('#addInvoiceLine').click(function() {
	console.log('add button clicked')

	//invoice line holder
	var orderLineItem= "";
	
	//add the baked good type from the drop down selection
	orderLineItem 	= 	'<div class="line1">' + $(".bakedGoods").val() +'</div>'+'<br>';

	//create the order line and add the values just chosen
	$('#orderLineItem').after(orderLineItem);
		
});

/*-------------------------------------------------------------------------
add the new baked good quantity to the invoice
--------------------------------------------------------------------------*/

$('#addInvoiceLine').click(function() {
	

	//invoice line holder
	var orderLineQuantity= "";
	
	//add the baked good type from the drop down selection
	orderLineQuantity 	= '<div class="line2">'+ $(".quantity").val()+'</div>'+'<br>';
	//invoice_line_quantity	= 	;


	//create the order line and add the values just chosen
	$('#orderLineQuantity').after(orderLineQuantity);

});

/*-------------------------------------------------------------------------
check that both quantity and baked goods are specified
--------------------------------------------------------------------------*/
$('#addInvoiceLine').click(function() {



});

/* this doesn't appear to be working to count clicks, frustrating 
var count = 0;
$('#addInvoiceLine').click(function() {
    $("button.button").submit(function(){
             count;
        });
    console.log(count);
});


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
 
	var  quantity = $(this).val();
 
	console.log(quantity)
  
	if($.isNumeric(quantity)) {
 		$('#quantityError').html("");
	}
	else {
		$('#quantityError').html("Invalid input, that isn't a number.");
	}

  });


  
 
 /*-------------------------------------------------------------------------
 add quantity to an array
 --------------------------------------------------------------------------*/
 
 //declare the variables
var quantity = [];
var invoiceDisplay  = document.getElementById("orderLineQuantity");
var quantityInput = document.getElementById("quantity");
 
 //clicking the add button will trigger the update/changes
$('#addInvoiceLine').click(function() {
	//debug this call and check that it is out putting info	
	console.log(quantityInput);
	//cast the user input from string to integer
	var input = parseInt(quantityInput.value);
	//push the integer into the array
	quantity.push(input);
	//debug to see what array is doing
	console.log(quantity);

    var total = quantity.reduce(function(a, b) {
     	return a + b;
 	});
 	//debug
    console.log(total);
 	
	//print the total to the invoice screen 
	$('#total').html(total);
	 //clear the input box for the user and push the content into the invoice

	//check that total is not more than 100 and if it is disable the button
	if (total > '99') {
		$('#quantityError').html("You can't order more than 99 items via email. Please contact us by phone to place an order");
		$('#addInvoiceLine').attr('disabled', true);	
	}
	else {
		$('#quantityError').html("");
	}
	//reset the box to zero to give the user a fresh start
	quantityInput.value ="";  
	
});	



 /*-------------------------------------------------------------------------
 validate input from the fields

   
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
 --------------------------------------------------------------------------*/	
	