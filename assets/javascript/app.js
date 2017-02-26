$(document).ready(function(){

var time=30;
var correctans = 0;
var wrongans = 0;
var notanswer = 0;
$("#main").hide();
$("#end").hide();

$("#startbtn").click(function(){
$("#start").hide();
$("#main").show();
count();

function count (){

	var timer = setInterval (function(){
		if (time === 0) {
			clearInterval(timer);
			$("#main").hide();
			$("#end").show();
			check();
			$("#correct").html (correctans);
			$("#wrong").html (wrongans);
			$("#unanswered").html(notanswer);
		}
		else{
			time--;
			$("#time").html(time);

		}

		},1000);
}

function check (){

	if ($("#2").is(":checked")){

		correctans++;
	}
	else{
		wrongans++;
	}

		if ($("#7").is(":checked")){

		correctans++;
	}
	else{
		wrongans++;
	}

		if ($("#12").is(":checked")){

		correctans++;
	}
	else{
		wrongans++;
	}

		if ($("#16").is(":checked")){

		correctans++;
	}
	else{
		wrongans++;
	}
}

		if ($("input").not(":checked")){

		notanswer++;
	}
});






});