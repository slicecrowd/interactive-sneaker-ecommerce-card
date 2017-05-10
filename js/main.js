$(document).ready(function () {
  $('.el-wrapper').each(function(){
    $(this).find(".shoe-img").clone().removeClass('shoe-img').addClass('shadow').appendTo($(this).find(".shoe-box"));
    $(this).find(".shoe-img").not('.blur').clone().addClass('blur').appendTo($(this).find(".inner-box"));
  });

  var boxWrapper = $(".el-wrapper");
  boxWrapper.on('mouseleave', function(event) {
  	$(this).addClass('leave');

  	setTimeout(function(){
		  boxWrapper.removeClass('leave');
		}, 200); 
  });
});