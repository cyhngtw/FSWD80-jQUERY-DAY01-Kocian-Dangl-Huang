/*
 * My jQuery selectors
 *
 * Apply a style such as a yellow background to the following elements.
 * Test your selectors one at a time.
 */

// all elements
$("*").css("background-color", "yellow");

// all p elements
$("p").css("color","black");


// the p element with an ID of "intro"

$("p#intro").css("color","orange");
// all elements with a class of "note"

$(".note").css("color","blue");

// all DIV elements with a class of note
$("div.note").css("color","red");

// all p elements in the article element
$("article p").css("font-size","30px");

// the last element in any section which is a p tag

$("p:nth-last-of-type(1)").css("color","gray");

// the first paragraph on the page
$("p").first().css("color","pink");

// all p elements which have a link
$("p").has("a").css("background-color","brown");

// the second li within nested ul element
//$("ul ul li:nth-of-type(2)").css("background-color","blue");
$("ul ul li:eq(1)").css("background-color","blue");
// every second and third p element
$("p:nth-of-type(2),p:nth-of-type(3)").css("background-color","green");
