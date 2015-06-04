$(document).ready(function() {


      $('#dates li').click(function(){
        var tabtimeline = $(this).attr('rel');
        $('.timeline').attr('rel', tabtimeline);
        return false;
      });
  


	$(".tab_content").hide();
	$(".tab_content:first").show(); 

	$("ul.tabs li").click(function() {
		$("ul.tabs li").removeClass("active");
		$(this).addClass("active");
		$(".tab_content").hide();
		var activeTab = $(this).attr("rel"); 
		$("#"+activeTab).fadeIn(); 
	});


	$(".tab_content_prem").hide();
	$(".tab_content_prem:first").show(); 

	$("ul.tabsPr li").click(function() {
		$("ul.tabsPr li").removeClass("active");
		$(this).addClass("active");
		$(".tab_content_prem").hide();
		var activeTab = $(this).attr("rel"); 
		$("#"+activeTab).fadeIn(); 
	});





	$(".tab_content").hide();
	$(".tab_content:first").show(); 

	$("ul.tabs li").click(function() {
		$("ul.tabs li").removeClass("active");
		$(this).addClass("active");
		$(".tab_content").hide();
		var activeTab = $(this).attr("rel"); 
		$("#"+activeTab).fadeIn(); 
	});





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
