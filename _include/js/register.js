/*Register*/

$(window).bind("scroll", function() {
	    if (($(this).scrollTop() > 1350) && ($(this).scrollTop() < 1930)) {
		$("#register").fadeIn(500);
		
		
    } else {
		$("#register").stop().fadeOut(900);
		
		
    }
});

$(window).bind("scroll", function() {
	    if (($(this).scrollTop() > 650) && ($(this).scrollTop() < 2530)) {
		
		
		
    } else {
		$("#registerpage").stop().fadeOut(900);
		
		
    }
});

$("#register").click(function(){
    	$("#registerpage").show(400);
		$("#event").val("default");
		$("#toptitle").text(" an event");
});

$("#registerclose").click(function(){
    	$("#registerpage").hide(300);
});



/*Register from event pages*/

$("#registerrobotica").click(function(){
		$("#roboticapage").fadeOut(200);
		$("#registerpage").delay(200).show(400);	
		$("#event").val("default");
		
});

$("#registerrobowars").click(function(){
		$("#robowarspage").fadeOut(200);
		$("#registerpage").delay(200).show(400);	
		$("#event").val("default");
		
});

$("#registerlinetracer").click(function(){
		$("#linetracerpage").fadeOut(200);
		$("#registerpage").delay(200).show(400);	
		$("#event").val("default");
		
});
	 


/*Dynamic Number Of Participants*/

$("#event").change(function() {
   var val = $(this).val();
    if (val == "robotica") {
			
            $("#participants").html("<option value='one'>One</option><option value='two'>Two</option><option value='three'>Three</option><option value='four'>Four</option>");
        } else if (val == "robowars") {
            $("#participants").html("<option value='one'>One</option><option value='two'>Two</option>");

        } else if (val == "linetracer") {
            $("#participants").html("<option value='one'>One</option><option value='two'>Two</option><option value='three'>Three</option>");

        }
    });



$( document ).click(function() {
  
});



$(document).ready(function(){
	$("#register").fadeOut(0);
	$("#registerpage").fadeOut(0);
});
