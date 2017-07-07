$(document).ready(function(){
	//function for Next button 
	function nextBtnClicked(){
		var currentActiveImg = $(".img-shown"); //active image
		var nextActiveImg = currentActiveImg.next(); //next image to shown

		//back to the first image
		if(nextActiveImg.length == 0){
			nextActiveImg = $(".carousel-inner li").first();
		}

		currentActiveImg.removeClass("img-shown").addClass("img-hidden").css("z-index", -10); //back
		nextActiveImg.addClass("img-shown").removeClass("img-hidden").css("z-index", 20); //front

		$(".carousel-inner li").not([currentActiveImg, nextActiveImg]).css("z-index", 1); //reset
	}

	//Next button
	$("#next-btn").on("click", function(event){
		event.preventDefault();
		nextBtnClicked();
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

	//Set the interval to be 5 seconds
	setInterval(nextBtnClicked, 5000);
	
	/*
	var time = setInterval (function(){
		$("#carousel ul").animate({marginLeft: -720}, 1000, function(){
			$(this).find("li:last").after($(this).find("li:first"));
			$(this).css({marginLeft:0});
		})
	}, 5000);
	*/
});