document.querySelector("#help").addEventListener("click", function() {
	document.querySelector(".course-sidebar-appointments").style.bottom = "60px";
})
document.querySelector("#chevron-down").addEventListener("click", function() {
	document.querySelector(".course-sidebar-appointments").style.bottom = "-50%";
})

function checkSolution(bool) {
	if(bool) {
		document.querySelector("#solution").style.display = "block";
		setTimeout(function() {
			document.querySelector("#solution").style.opacity = "1";
		}, 50);
	} else {
		document.querySelector("#solution").style.opacity = '0';
		setTimeout(function() {
			document.querySelector("#solution").style.display = "none";
		}, 350);
	}
}