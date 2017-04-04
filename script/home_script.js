function highlight(el){
	el.style.backgroundColor = 'rgba(242, 128, 50, 0.95)';
}
function light(el){
	el.style.backgroundColor = 'rgba(193, 56, 50, 0.80)';
}
function highlighti(el){
	el.style.backgroundColor = 'rgba(242, 128, 50, 0.95)';
}
function lighti(el){
	el.style.backgroundColor = 'rgba(241, 241, 241, 0.6)';
}


/*navbar scripts*/
function mOver(ele) {
	ele.className += " activeX";
}

function mOut(ele) {
	ele.className = ele.className.replace( /(?:^|\s)activeX(?!\S)/g , '' );
	currentNav(); 
}

function currentNav(){
	var title = document.getElementsByTagName("title")[0].innerHTML;
	var liarray = document.getElementsByClassName("headmenu");
	var l = liarray.length;
	var i,x;
	for(i=0 ; i<l ; i++)
	{
		if ((liarray[i].firstChild.innerHTML)==title) {
			x = liarray[i].parentNode;
			x.className += " activeX";
			break;
		}
	} 
}


