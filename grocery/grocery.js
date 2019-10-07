$(document).ready(function(){

	$("body").append("<tr><th>Name</th><th>Quantity</th><th>Price in €</th><th>Image</th></tr>");

	for (var i = 0; i < grocery.length; i++) {
		$("body").append("<tr><td>" + grocery[i].name + "</td><td>" + grocery[i].qty + "</td><td>" + grocery[i].price + "</td><td><img src='" + grocery[i].image + "'></td></tr>");
	}


});