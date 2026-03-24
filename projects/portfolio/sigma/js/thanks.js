$(document).ready(function(){
	$.urlParam = function(name){
		var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
		if (results==null){
			return null;
		} else {
			return results[1] || 0;
		}
	}
	let nameVal = $.urlParam("firstName");
	let linkVal = "Thank you";
	if (nameVal!=null){
		linkVal += ", "+nameVal+"!";
		console.log($.urlParam("firstName"));
		$("#linkMessage").empty().append(linkVal);
	} else {
		linkVal += "!";
		$("#linkMessage").empty().append(linkVal);
	}
});