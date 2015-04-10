var timeDistance = 1000;
var interval;
var isMinute = false;
jQuery(document).ready(function(){
	if($("#time").is('span')) {
		Cufon.now();
		changDate();
		interval = setInterval(function(){
			changDate();	
		},timeDistance);
	}
}); 
function changDate() {
	var month = {"0" : "january",
				"1" : "february",
				"2" : "March",
				"3" : "April",
				"4" : "May",
				"5" : "June",
				"6" : "July",
				"7" : "August",
				"8" : "September",
				"9" : "October",
				"10" : "November",
				"11" : "December"},
	weekDay = {"1" : "Monday",
				"2" : "Tuesday",
				"3" : "Wednesday",
				"4" : "Thursday",
				"5" : "Friday",
				"6" : "Saturday",
				"7" : "Sunday"},
	date = new Date();
	$("#time").text(date.toTimeString().substr(0,5));
	if(!isMinute || (date.getMinutes()==0 && date.getHours()== 0)){
		$("#month").text(month[date.getMonth()]);
		$("#weekDay").text(weekDay[date.getDay()]);
		$("#day").text(date.getDate());
		$("#year").text(date.getFullYear());
	}
	Cufon.refresh("#mobile section span");
	if (date.getSeconds()==0 && !isMinute){
		timeDistance = 60000;
		isMinute = true;
		clearInterval(interval);
		setInterval(function(){
				changDate();	
			},timeDistance);
	}
}