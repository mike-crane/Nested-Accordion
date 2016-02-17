$(document).ready(function(){


  $(".slidingDiv").hide();
	$(".alphaMain").show();

	$('.alphaMain').click(function(){
	$(".slidingDiv").toggle();
	});

});

$(function(){
  $('.material-icons').hover(
    function () {
      $(this).css('transform', 'rotate(45deg)');
    },
    function () {
      $(this).css('transform', 'rotate(0deg)');
    }
  );
});
