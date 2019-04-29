document.addEventListener('DOMContentLoaded', function () {
var content = document.getElementById("content");
var show = document.getElementById("showContent");
	
	show.addEventListener("click", () => {
		if(content.style.display == "block")
			content.style.display = "none";
		else if(content.style.display == "none")
			content.style.display = "block";
	})
});