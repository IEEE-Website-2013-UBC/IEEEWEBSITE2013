function move_accordion(slide){
	$(".slider1").diyslider();
	$(".slider1").diyslider("move", slide);
}

function changeHeight(){
	
	// USE CSS
	/*
	while($(".slider1").height() != $(".panel").height()){
		$(".slider1").diyslider("updateOptions", {
		    height: $(".panel").height() + "px"
		});
	}*/
	/*
	if ($(".slider1").height() == 122){
		$(".slider1").off('click');
		setTimeout( function(){
			$(".slider1").diyslider("updateOptions", {
			    height: "240px"
			});
			$(".slider1").on('click');
		}, 20);
	}
	else{
		$(".slider1").off('click');
		setTimeout( function(){
				$(".slider1").diyslider("updateOptions", {
			    height: "122px"
			});
				$(".slider1").on('click');
		},20);
	}
	*/
}


$(document).ready(function(){

	$(".slider1").diyslider();
	
	$(".slider1").diyslider("updateOptions", {
		width: "100%",
	    height: "122px",
	    animationDuration: 300,
	    display: 1,
	    loop: false
	});
	
});

