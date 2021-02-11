var body; // where the html will be loaded


window.addEventListener("load", function()
{
    // get the page elements and update the nav bar when the page loads
    body = document.getElementsByTagName("body")[0];
});


function open_overlay(pdf)
{
	// append the overlay to the end of the body and disable scrolling of the webpage
	body.innerHTML = body.innerHTML + "<div class='overlay' onclick='close_overlay();'><button class='overlay-close-btn' onclick='close_overlay();'>&#9664; Exit</button><iframe class='overlay-content' src='" + pdf + "'></iframe></div>";
	body.style.overflow = "hidden";
}

function close_overlay()
{
	// find the overlay element, remove it, and allow scrolling of the webpage again
	document.getElementsByClassName("overlay")[0].remove();
	body.style.overflow = "visible";

	update_vars(); // update the variables for the scrollfx script
}