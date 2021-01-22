var header, navbar, content, scrollPos = 0;

window.addEventListener("load", function()
{
    header = document.getElementsByTagName("header")[0];
    navbar = document.getElementById("navbar");
    content = document.getElementById("content");

	update_navbar();
});

document.addEventListener('scroll', function(e)
{
	update_navbar();
});

function update_navbar()
{
	scrollPos = window.scrollY;
	header.style.filter = "blur(" + scrollPos / 125 + "px)";
	navbar.style.background = "rgba(41, 100, 138," + (1 - (scrollPos/header.clientHeight)) + ")";
	//navbar.style.boxShadow = "0 10px 20px rgba(0, 0, 0,"+ (.19 - (scrollPos/(header.clientHeight * 4))) + "), 0 6px 6px rgba(0, 0, 0," + (.23 - (scrollPos/(header.clientHeight * 4))) +")";

	if (scrollPos > header.clientHeight)
	{
		navbar.classList.add("sticky-header");
		content.classList.add("sticky-header-spacing");
		navbar.style.background = "var(--siteDarkPurple)";
	}
	else
	{
		navbar.classList.remove("sticky-header");
		content.classList.remove("sticky-header-spacing");
	}
}