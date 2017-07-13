// Making the image lightbox.

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img id='wow'>");

$overlay.append($image);

$("body").append($overlay);

//1. Capture the click event on a link to an image
  $("#second-content-wrapper figure a").click(function(event) {
    event.preventDefault();
    var imageLocation = $(this).attr("href");
    $image.attr("src", imageLocation);
    
	$overlay.show();
    //1.2 Update overlay with the image linked in the link
    //1.3 Get child's alt attribute and set caption
  });
  
//2. Add overlay
  //2.1 An image
  //2.2 A caption
//3. When overlay is clicked
  //3.1 Hide the overlay