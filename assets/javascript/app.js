$(document).ready(function(){

var time=10;
var correctans = 0;
var wrongans = 0;
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

})






})