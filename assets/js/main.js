$(document).ready(function(){
	//Next button
	$("#next-btn").on("click", function(event){
		event.preventDefault();

		var currentActiveImg = $(".img-shown"); //active image
		var nextActiveImg = currentActiveImg.next(); //next image to shown

		//back to the first image
		if(nextActiveImg.length == 0){
			nextActiveImg = $(".carousel-inner li").first();
		}

		currentActiveImg.removeClass("img-shown").addClass("img-hidden").css("z-index", -10); //back
		nextActiveImg.addClass("img-shown").removeClass("img-hidden").css("z-index", 20); //front

		$(".carousel-inner li").not([currentActiveImg, nextActiveImg]).css("z-index", 1); //reset
	});

	//Previous button
	$("#previous-btn").on("click", function(event){
		event.preventDefault();

		var currentActiveImg = $(".img-shown"); //active image
		var nextActiveImg = currentActiveImg.prev(); //previous image to shown

		//back to the last image
		if(nextActiveImg.length == 0){
			nextActiveImg = $(".carousel-inner li").last();
		}

		currentActiveImg.removeClass("img-shown").addClass("img-hidden").css("z-index", -10); //back
		nextActiveImg.addClass("img-shown").removeClass("img-hidden").css("z-index", 20); //front
		
		$(".carousel-inner li").not([currentActiveImg, nextActiveImg]).css("z-index", 1); //reset
	});
});