$(document).ready(function(){

	$('project-details').hide();

	$('div.language-slider').mouseenter(function(){
		$(this).css("background-color", "#CACFD2");
	}).mouseleave(function(){
		$(this).css("background-color", "#D7DBDD");
	});

	$('div.details-button').click(function(){
		$(this).closest('div.project-details')show();
	});








});


