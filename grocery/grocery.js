$(document).ready(function(){

	$("body").append("<tr><th>Name</th><th>Quantity</th><th>Price in €</th><th>Image</th></tr>");

	for (var i = 0; i < grocery.length; i++) {
		$("body").append("<tr id='row-"+ [i] +"'><td>" + grocery[i].name + "</td><td>" + grocery[i].qty + "</td><td>" + grocery[i].price + "</td><td><img src='" + grocery[i].image + "'></td></tr>");

		var rowId = "row-" + [i];
		
		if (grocery[i].qty < 10) {
			$("#" + rowId + " :nth-child(2)").css({"color":"blue","font-size":"40px"});
		}
	}
});