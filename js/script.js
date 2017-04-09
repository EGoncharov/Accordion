var headings = document.getElementsByTagName("h2");

function showPanel(e) {
	var heading = e.target;
	var panel = heading.nextElementSibling;
	panel.classList.toggle("show");

};

for(var i = 0; i < headings.length; i++) {
	headings[i].onclick = showPanel;
}