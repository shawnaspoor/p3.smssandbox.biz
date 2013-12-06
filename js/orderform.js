
console.log('the js is working');

$(document).ready(function(){
    $('.submit').attr('disabled',true);
    $('#button').attr('disabled', true);


    //check that the quantity box has input
    $('.quantity').keyup(function () {
		var input = $(this).val();
		console.log(input);
		if (input ==0) {
			$('#quantityError').html("It appears you didn't specify how many you would like.");
			$('#addInvoiceLine').attr('disabled', true);
		}
		//checking that it's a number
		else if (!$.isNumeric(input))  {
			$('#quantityError').html("Invalid input, that isn't a number.");
			$('#addInvoiceLine').attr('disabled', true);

		}	
		//everything good? go on, press the button then
		else {
			$('#quantityError').html("");
			$('#addInvoiceLine').attr('disabled', false);
		}
	});
	$('#bakedGoods').blur(function() {
			var item = $('.bakedGoods').val();
			console.log(item);

			if (item != "") {
				$('#quantityError').html("");
			}
			else {
				$('#quantityError').html("It appears you didn't specify what you would like.");
				$('#addInvoiceLine').attr('disabled', true);
			}
	});
	
});


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
	

});


/*-------------------------------------------------------------------------
add the new baked good to the invoice
--------------------------------------------------------------------------*/
$('#addInvoiceLine').click(function() {
	console.log('add button clicked')

	//invoice line holder
	var orderLineItem = "";
	var orderLineQuantity= "";
	
	//add the baked good & quantity to the invoice
	orderLineItem =	'<div class="line1">' + $(".bakedGoods").val() +'</div>'+'<br>';
	orderLineQuantity 	= '<div class="line2">'+ $(".quantity").val()+'</div>'+'<br>';
	
	//create the order line and add the values just chosen
	$('#orderLineItem').after(orderLineItem);
	$('#orderLineQuantity').after(orderLineQuantity);

});

/*-------------------------------------------------------------------------
count clicks and stop it at 10 
--------------------------------------------------------------------------*/
var count = 0;
$(".submit").click(function(){
    count++;

    if (count>9) {
    	alert("You can only include 10 invoice lines.");
    	$('#addInvoiceLine').attr('disabled', true);
    }
    else {
    	$('#quantityError').html("");
    	$('#addInvoiceLine').attr('disabled', false);
    }
    console.log(count);
});

/*-------------------------------------------------------------------------
add the recipient name
--------------------------------------------------------------------------*/
$('#name').change(function() {
	//find out what they entered as their name
	var name = $(this).val();

	$('#nameOut').html(name);

	console.log(name);
});

/*-------------------------------------------------------------------------
add the recipient billing address
--------------------------------------------------------------------------*/
$('#billingAddress').change(function() {
	//find out what they entered as their address
	var billingAddress = $(this).val();

	$('#billingAddressOut').html(billingAddress);

	console.log(name);
});

$('#state').change(function() {
	//find out what they entered as their address
	var state = $(this).val();

	$('#stateOut').html(state);

	console.log(name);
});

/*-------------------------------------------------------------------------
add the recipient email address
--------------------------------------------------------------------------*/

$('#email').change(function() {
    //find out what they entered as their email
    var email = $(this).val();
  
    $('#emailOut').html(email);
 
    console.log(name);
  });


 /*-------------------------------------------------------------------------
 add quantity to an array
 --------------------------------------------------------------------------*/
 
 //declare the variables and arrays
var quantity = [];
var quantityInput = document.getElementById("quantity");
var bakedArray = [];

 //clicking the add button will trigger the update/changes
$('#addInvoiceLine').click(function() {
	//cast the user input from string to integer
	var input = parseInt(quantityInput.value);
	//pull the baked good info out
	var bakedGood = $('.bakedGoods').val();

	//put the baked good info into an array
	bakedArray.push(bakedGood);

	//push the integer into the array
	quantity.push(input);

	//debug to see what array is doing
	console.log(quantity);
	console.log(bakedArray);

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
	
});	





 /*-------------------------------------------------------------------------
 validate input from the fields
  --------------------------------------------------------------------------*/ 
  //this is done using the jquery validation plugin, available at http://jqueryvalidation.org/
 $('#left-side').keyup(function() {
	$('form').validate({

	   rules: {
	     name: {
	       required: true,
	       minlength: 2,

	     },
	     billingAddress: {
	       required: true,
	       minlength: 10
	     },
	     state: {
	       required: true,
	       minlength:10
	     },
	     email: {
	       required: true,
	       minlength:5,
	       email: true
	     }
	   },
	   messages: {
	     name: "<br> Please enter your name",
	     billingAddress: "<br> Please enter a billing address.",
	     state: "<br> We need your city, state, and zipcode as well.",
	     email: "<br> Definitely required, we need to know how to contact you to take payment."
	   }
	
	 });

	$('#name, #billingAddress, #state, #email').on('change', checkForm);

});
	
/*-------------------------------------------------------------------------
Print the page
--------------------------------------------------------------------------*/ 
$('#print').click(function () {
	window.print();
});



/*-------------------------------------------------------------------------
disable the submit button if there is no content/invalid content in the
text fields
--------------------------------------------------------------------------*/ 

function checkForm() {

	console.log("checkform is working");
	
	$('#button').attr('disabled', !$('form').valid());

	if (!$('form').valid()) {
		
		$('.requiredinput').hide();
	}
	else {
		$('.requiredinput').html("");
	};
	
};


/*-------------------------------------------------------------------------
submit the form for download
--------------------------------------------------------------------------*/ 

$(".button").click(submitVariables);
          
function submitVariables() {
    $("#link").html("");
	$.ajax({
		method: "POST",
		url: "process.php",
		data: { name: $("#name").val(), billingAddress: $("#billingAddress").val(), state: $("#state").val(), email: $("#email").val(), item_quantity: JSON.stringify(quantity), Baked_Good: JSON.stringify(bakedArray) }
		}).done(function(returned_data) {
			$("#link").html("Thank You! Your invoice has been received.");
		    $("#filename").html(returned_data);
		});


    };

/*-------------------------------------------------------------------------
clear button
--------------------------------------------------------------------------*/ 
$('#removeInvoiceLines').click(function() {
	console.log("removeInvoiceLines is working");
    location.reload();

});