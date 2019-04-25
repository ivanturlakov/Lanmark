$(document).ready(function(){
	
	
	//Inside-Choose
	var insideChooseToggle = $(".solutions, .culture");
	insideChooseToggle.click(function(){
		$('.solutions, .culture').removeClass('open');
		$(this).toggleClass('open');
		return false;
	});

	
	
});

