$(document).ready(function(){
	$("p#btn-menu").click(function(){
		$("section").addClass("animated fadeOutUp");
		$("figure#logo-fondo").addClass("animated tada");
		$("header").show(function(){
			$("figure#logo-fondo").removeClass("animated tada");
			$("li#menu-fix").show().addClass("animated fadeInLeft").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){				
				$("figure#logo-fondo").addClass("animated swing");
				$("li#menu-web").show().addClass("animated fadeInLeft").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
					$("figure#logo-fondo").removeClass("animated swing");
					$("li#menu-projects").show().addClass("animated fadeInLeft").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
						$("footer").show()/*.addClass("animated fadeInUp")*/;
					});
				});
			});			
		});		
	});

	$("li a").click(function(){
		var opcion = $(this).attr("href");
		if (opcion == "#sec-web")
		{
			$("section#web").removeClass("animated fadeOutUp");
			$("header#encabezado").hide();
			$("section#web").show();
			$("footer").show();
		}
	});
	function mostrarFooter(){
		alert("jola");
		$("footer").show().addClass("animated fadeInUp");
	}
});