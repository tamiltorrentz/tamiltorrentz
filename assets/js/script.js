$(document).ready(function(){

	var ttz_data;

	$.get("assets/js/ttz.json", function(data, status){
		// debugger
		ttz_data = data.reverse();

        for(var ttz = 0; ttz <= ttz_data.length; ttz++){
        	if (ttz_data[ttz].magnetUrl) {
        		$(".ttz-mv-link-container").append("<li><a href="+ttz_data[ttz].magnetUrl+"><h2>"+ttz_data[ttz].movieName+"</h2> - <h4>"+ttz_data[ttz].category+"</h4></a></li>");
        	} 	
        }
    });

});