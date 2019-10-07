$("form").submit(function(e) {

	e.preventDefault();
});

$(document).ready(function(){

// Remove the form from the page
//$("form").remove();
// Create 5 new DIVs in the article element

for (var i = 0; i < 5; i++) {
	$("article").append("<div>hello</div>"); 
}

// Within the input field change the value to "Search for..."
$("input").attr("value","Search for...");

// Add a class name of "box" to each new DIV
$("div").addClass("box");

// Change the link to "www.codefactory.wien"
$("p a").attr("href","www.codefactory.wien");
});