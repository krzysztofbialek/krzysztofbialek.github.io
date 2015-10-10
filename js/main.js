$(function() {
	$('img#slide_right').on('click', function(){
		console.log('hodor')
		$('#compare table').addClass('slide');
	})

	$('img#slide_left').on('click', function(){
		$('#compare table').removeClass('slide');
	})

	$(document).on('click',function(){
		$('.collapse').collapse('hide');
	})

});