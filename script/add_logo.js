function rlogo(){
	var sq = window.matchMedia( "(max-width: 768px)" );
	if (sq.matches) {
		var a = document.getElementById('headl').childNodes;
		if (a.length<=3)
		{
			var header = document.getElementsByClassName('navbar-header')[0];
			var logo = document.createElement("img");
			logo.src = "images/sunpy_icon.svg";
			logo.height = "48";
			logo.width = "45";
			header.appendChild(logo);
		}
	}
	else{
		var b = document.getElementById('headl');
		console.log(b.childNodes[3]);
		b.removeChild(b.childNodes[3]);
	}
}
