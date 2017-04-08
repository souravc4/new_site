/* hover script */
function mOver(ele) {
	ele.className += " activeX";
}

function mOut(ele) {
	ele.className = ele.className.replace( /(?:^|\s)activeX(?!\S)/g , '' );
	currentNav(); 
}
/*navbar active class script*/
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