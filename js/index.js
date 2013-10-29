var image = "1.bmp";
$(document).ready(function(){
	$("select.image-picker").imagepicker({
	      hide_select:  true, 
	      clicked:function(){

	        image = $(this).find("option[value='" + $(this).val() + "']").data('img-src').substring(4);

	      }
	});
}) 

function logpick(){
	$("#output-picture").html('<a href="#"><img class="img-responsive img-home-portfolio" src="http://ee371r-project.herokuapp.com/?image='+image+'&op=blur"></a>');
}