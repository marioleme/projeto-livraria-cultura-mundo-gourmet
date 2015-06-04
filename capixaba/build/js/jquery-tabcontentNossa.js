$(document).ready(function() {



	$(".contenLineTime").hide();
	$(".contenLineTime:first").show(); 

	$("ul.menuInstitucional li").click(function() {
		$(".menuInstitucional li").removeClass("active");
		$(this).addClass("active");
		$(".contenLineTime").hide();
		var activeTab = $(this).attr("rel"); 
		$("#"+activeTab).fadeIn(); 
	});


});
