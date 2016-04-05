document.getElementById("aboutMe").onclick = function(){
	document.getElementById("about").classList.remove("hide");
	document.getElementById("myWork").classList.add("hide");
	document.getElementById("homeDiv").classList.add("hide");
	document.getElementById("contactMe").classList.add("hide");
}

document.getElementById("work").onclick = function(){
	document.getElementById("myWork").classList.remove("hide");
	document.getElementById("about").classList.add("hide");
	document.getElementById("homeDiv").classList.add("hide");
	document.getElementById("contactMe").classList.add("hide");
}

document.getElementById("home").onclick = function(){
	document.getElementById("homeDiv").classList.remove("hide");
	document.getElementById("about").classList.add("hide");
	document.getElementById("myWork").classList.add("hide");
	document.getElementById("contactMe").classList.add("hide");
}

document.getElementById("contact").onclick = function(){
	document.getElementById("contactMe").classList.remove("hide");
	document.getElementById("about").classList.add("hide");
	document.getElementById("myWork").classList.add("hide");
	document.getElementById("homeDiv").classList.add("hide");
}
