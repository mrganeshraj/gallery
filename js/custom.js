// $(document).ready(function(){	
// 	$('.gallery ul li:first-child').css('display','block');

// 	$('.btn-tab ul li').hover(function(){
// 		// alert('btn-tab');
// 		var current_status = $(this).index();	
// 		$('.gallery ul li').css('display','none');		
// 		$('.gallery ul li').eq(current_status).css('display','block');
// 	});
// });


$(document).ready(function(){	
	
	$('.gallery ul li:first-child').addClass('active');
	$('.btn-tab ul li:first-child').addClass('act');

	$('.btn-tab ul li').hover(function(){		
		var current_status = $(this).index();
		$('.gallery ul li').addClass('disable').removeClass('active');
		$('.btn-tab ul li').removeClass('act');
		$('.gallery ul li').eq(current_status).addClass('active').removeClass('disable');
		$('.btn-tab ul li').eq(current_status).addClass('act');		
	});
});