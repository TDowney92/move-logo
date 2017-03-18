// set up DOM
$(document).ready(function(){
	$('#white').on("click", function() {
		$('h2, #white>div').toggleClass('on');
		console.log('working');
	});
});
