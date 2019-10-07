$(document).ready(function(){
      
// 1. Change the href attribute to "www.codefactory.wien" for all links
$("a").attr("href", "https://www.codefactory.wien");
// 2. Change the text color to red for the <code> tags
$("code").css("color","red");
// 3. Change the background color to "#2a7b90" for all <li> elements which are direct child of an <ol> element
$("ol>li").css("background-color","#2a7b90");
// 4. Within the form, change the placeholder text to "Express your opinion"
$("textarea").text("Express your opinion");
// 5. Replace all images on the page with this one "https://www.codefactory.wien/wp-content/uploads/2018/03/codefactory-vienna-footer-h.png"
$("img").attr("src","https://www.codefactory.wien/wp-content/uploads/2018/03/codefactory-vienna-footer-h.png");
// 6. Change the background color to orange for all blockquote elements and the font-style to italic
$("blockquote").css({"background-color":"orange", "font-style":"italic"});
// 7. At the top of the page, change the logo color "Simple" to black and "Blog" to white
$("#logo").css("color","black");
$("#logo span").removeClass("gray").css("color","white");
// 8. Remove the "Oct 01, 2006" Date from the page
$(".date").text("");
// 9. Extend the Sidebar Menu with 3 additional items "New Templates", "Order Template" and "Contact Us"
$(".sidemenu:first").append("<li><a>Premium Templates</a></li><li><a>Order Template</a></li><li><a>Contact Us</a></li>");
  
// // 10. Change the sentence "Be not afraid of life. Believe that life is worth living, and your belief will help create the fact." into "When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop."
$("#sidebar p:first").text("'When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop.'");


});