
$( document ).ready(function() {
  

  /** Video */
	$(function(){
		$('.moviecleae').popup({
			content		: $('#inline'),
		    afterOpen : function(){
		        var popup = this;
		        setTimeout(function(){
		            popup.close();
		        }, 28000);
		    }
		});


	})


	/* popup */

	$('li.cursos.gerenteEcomerce a img').popup({
		  content : $('#gerente')
		})


});