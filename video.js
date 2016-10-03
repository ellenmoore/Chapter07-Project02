window.onload = function(){
	//declare variable for video
	var vid = document.getElementById("video");
	
	//declare variables for control buttons
	var beginBtn = document.getElementById("begin");
	var rewindBtn=document.getElementById("rewind");
	var playBtn = document.getElementById("play-pause");
	var endBtn = document.getElementById("end");
	
	//event listener for play-pause button
	playBtn.addEventListener("click", function () {
		if (video.paused == true){
			//play the video
			video.play();
			//display pause symbol on button
			playBtn.innerHTML = "&#10072;&#10072;";
		} else {
			//pause the video
			video.pause();
			//display play symbol on button
			playBtn.innerHTML = "&#10095;";
			
		}
	});
	
	//event listener for begin button
	beginBtn.addEventListener("click", function(){
		video.currentTime = 0;
	}
	);
	
	//event listener for end button
	endBtn.addEventListener("click", function(){
		video.currentTime = 30;
	}
	);
	
	//event listener for rewind button
	rewindBtn.addEventListener("click", function(){
		video.currentTime -= 2;
	}
	);
}
