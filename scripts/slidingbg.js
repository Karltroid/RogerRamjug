window.addEventListener("load", function()
{
    var i = 0;
    var bgPosQuery = document.querySelector('#section-break-slideshow').style;

    var updateBgPos = setInterval(function(){
		i += 1;
		bgPosQuery.setProperty('--slideShowBGPos', (i + 'px'));	
	}, 25);
});


