var header, navbar, content;                                 // page elements
var progress = 0, headerR = 37, headerG = 39, headerB = 77;  // integers


window.addEventListener("load", function()
{
    // get the variables an dupdate the navbar when the page finishes loading
    update_vars();
    update_navbar();
});


document.addEventListener('scroll', function()
{
	// update nav bar when the user is scrolling
	update_navbar();
});


function update_vars()
{
    // get the elements of the page that are used throughout the script
    header = document.getElementsByTagName("header")[0];
    navbar = document.getElementById("navbar");
    content = document.getElementById("content");
}


function update_navbar()
{
	progress = window.scrollY/(header.clientHeight - navbar.clientHeight);  // (0 to 1) - % of the header scrolled through

	if (progress >= 1)
	{
		// make the header fixed
		navbar.classList.add("sticky-header");
		navbar.style.background = "var(--siteDarkPurple)";
	}
	else
	{
		// make the header scroll with the screen & dynamically blur/color header with scroll pos
		navbar.classList.remove("sticky-header");
		navbar.style.background = "rgba("
		                        + (progress * headerR) + ","  // red
		                        + (progress * headerG) + ","  // green
		                        + (progress * headerB) + ","  // blue
		                        + (progress + .225) + ")";    // opacity
		
		header.style.filter = "blur(" + (progress * 2.5) + "px)";
		header.style.webkitFilter = "blur(" + (progress * 2.5) + "px)";
		//navbar.style.boxShadow = "0 10px 20px rgba(0, 0, 0,"+ (.19 - (scrollPos/(header.clientHeight * 4))) + "), 0 6px 6px rgba(0, 0, 0," + (.23 - (scrollPos/(header.clientHeight * 4))) +")";
	}
}