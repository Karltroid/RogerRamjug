var navBtn;          // mobile navigation button
var navMenu;         // mobile navigation menu
var navOpen = false; // whether the mobile nav menu is open or not

window.addEventListener("load", function()
{
    // get the page elements and update the nav bar when the page loads
    body = document.getElementsByTagName("body")[0];
    navBtn = document.getElementById("mobile-nav-btn");
    navMenu = document.getElementById("mobile-nav");
});

window.addEventListener('scroll', function()
{
	if (body != undefined)
		pausestart_bodyscroll();
});

window.addEventListener('resize', function()
{
	if (body != undefined)
		pausestart_bodyscroll();
});

function pausestart_bodyscroll()
{
	if (window.innerWidth >= 990)
	{
		body.style.overflow = "visible";
		update_navbar();
	}
	else if (progress >= 1 && navOpen)
		body.style.overflow = "hidden";
	else
		body.style.overflow = "visible";
}

function openclose_menu(subpage)
{
	if (!navOpen)
	{
		// display the menu
		navMenu.style.visibility = "visible";
		navBtn.src = (subpage + "images/buttons/close.png");
		navBtn.alt = "Close";
		navOpen = true;
		pausestart_bodyscroll();
	}
	else
	{
		// close the menu
		navMenu.style.visibility = "hidden";
		navBtn.src = (subpage + "images/buttons/menu.png");
		navBtn.alt = "Menu";
		navOpen = false;
		pausestart_bodyscroll();
	}
}