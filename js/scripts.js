<<<<<<< HEAD
var toggler = "toggler";
var toggled = "togglee";
var toggle_button = document.getElementById(toggler);
var toggle_element = document.getElementById(toggled);
toggle_element.style.display = 'none';
function toggleElement(id){ 
	var e = document.getElementById(id); 
	if (e.style.display == 'inline') {
		e.style.display = 'none'
	} else {
		e.style.display = 'inline'
	}
}; 
toggle_button.addEventListener("click", function(){
	toggleElement(toggled)
=======
var toggler = "toggler";
var toggled = "togglee";
var toggle_button = document.getElementById(toggler);
var toggle_element = document.getElementById(toggled);
toggle_element.style.display = 'none';
function toggleElement(id){ 
	var e = document.getElementById(id); 
	if (e.style.display == 'inline') {
		e.style.display = 'none'
	} else {
		e.style.display = 'inline'
	}
}; 
toggle_button.addEventListener("click", function(){
	toggleElement(toggled)
>>>>>>> 1d575edacb70412d340a1cd0210d36e3a7018d77
}, false);