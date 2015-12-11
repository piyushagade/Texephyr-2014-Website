$(document).ready(function(e) {
	
	var eventname;
	var eventsel;
   
	
	$("#registerrobotica").click(function(){
		$("#roboticapage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Robotica');	
		$("#popup").delay(400).fadeIn(200);
		eventname="robotica";
		
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option><option value='four'>4</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
		});

		
     });
	 
	 $("#registerrobotica1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Robotica');
		$("#popup").delay(400).fadeIn(200);
		eventname="robotica";
				
        $("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option><option value='four'>4</option>");
		
		
		    ("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
		});
        
    });
		
     
	 
/*	 ------------------------------------------------*/
	 
	 
	$("#registerrobowars").click(function(){
		$("#robowarspage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Robowars');
		$("#popup").delay(400).fadeIn(200);
		eventname="robowars";
		$("#nom").html("<option value='default'>Select</option><option value='two'>2</option><option value='three'>3</option><option value='four'>4</option><option value='five'>5</option>");
			
			$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			
		});

		
     });
		
	$("#registerrobowars1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');		
		$("#eventtitle").text('Robowars');
		$("#popup").delay(400).fadeIn(200);
		eventname="robowars";
		$("#nom").html("<option value='default'>Select</option><option value='two'>2</option><option value='three'>3</option><option value='four'>4</option><option value='five'>5</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			
		});
		
		
     });


/*	 ------------------------------------------------*/


	$("#registerlinetracer").click(function(){
		$("#linetracerpage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Linetracer');
		$("#popup").delay(400).fadeIn(200);
		eventname="linetracer";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option>");
		
     });
		
	$("#registerlinetracer1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Linetracer');
		$("#popup").delay(400).fadeIn(200);
		eventname="linetracer";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			
		});
		
     });
	 
	 


/*	 ------------------------------------------------*/


	$("#registerroborace").click(function(){
		$("#roboracepage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Roborace');
		$("#popup").delay(400).fadeIn(200);
		
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option><option value='four'>4</option>");
		
		$("#nom").val("default");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			
		});
		
		$("#nom").change(function(){
		
		if($("#nom").val()=="one"||"two"||"three"){
			eventname="roborace1";
		}
			
		if($("#nom").val()=="four"){
			eventname="roborace2";
		}
		

		
		});
		
     });
		
	$("#registerroborace1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Roborace');
		$("#popup").delay(400).fadeIn(200);
		
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option><option value='four'>4</option>");
		
			$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			
		});
		
		$("#nom").val("default");
		$("#nom").change(function(){
		
		if($("#nom").val()=="one"||"two"||"three"){
			eventname="roborace1";
		}
			
		if($("#nom").val()=="four"){
			eventname="roborace2";
		}
		

		
		});
		
     });
	 
	 
	 
	 

/*	 ------------------------------------------------*/


	$("#registersumowars").click(function(){
		$("#sumowarspage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Sumowars');
		$("#popup").delay(400).fadeIn(200);
		 
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option><option value='four'>4</option><option value='five'>5</option>");
		
			$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		$("#nom").val("default");
		$("#nom").change(function(){
		
		if($("#nom").val()=="one"||"two"||"three"||"four"){
			eventname="sumowars";
		}
			
		if($("#nom").val()=="five"){
			eventname="sumowars2";
		}
		

		
		});
		
     });
		
	$("#registersumowars1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Sumowars');
		$("#popup").delay(400).fadeIn(200);
		
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option><option value='four'>4</option><option value='five'>5</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		$("#nom").val("default");
		$("#nom").change(function(){
		
		if($("#nom").val()=="one"||"two"||"three"||"four"){
			eventname="sumowars";
		}
			
		if($("#nom").val()=="five"){
			eventname="sumowars2";
		}
		
		
		});
		
     });
	 
	 


/*	 ------------------------------------------------*/


	$("#registerballwars").click(function(){
		$("#ballwarspage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Ballwars');
		$("#popup").delay(400).fadeIn(200);
		
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option><option value='four'>4</option><option value='five'>5</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		$("#nom").val("default");
		$("#nom").change(function(){
		
		if($("#nom").val()=="one"||"two"||"three"||"four"){
			eventname="ballwars1";
		}
			
		if($("#nom").val()=="five"){
			eventname="ballwars2";
		}

		
		});
		
     });
		
	$("#registerballwars1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Ballwars');
		$("#popup").delay(400).fadeIn(200);
		
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option><option value='four'>4</option><option value='five'>5</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		$("#nom").val("default");
		$("#nom").change(function(){
		
		if($("#nom").val()=="one"||"two"||"three"||"four"){
			eventname="ballwars1";
		}
			
		if($("#nom").val()=="five"){
			eventname="ballwars2";
		}
		

		
		});
		
     });
	 
	 


/*	 ------------------------------------------------*/


	$("#registerrallymania").click(function(){
		$("#rallymaniapage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Rallymania');
		$("#popup").delay(400).fadeIn(200);
		eventname="rallymania";
		$("#nom").html("<option value='default'>Select</option><option value='two'>2</option><option value='three'>3</option><option value='four'>4</option><option value='five'>5</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
     });
		
	$("#registerrallymania1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Rallymania');
		$("#popup").delay(400).fadeIn(200);
		eventname="rallymania";
		$("#nom").html("<option value='default'>Select</option><option value='two'>2</option><option value='three'>3</option><option value='four'>4</option><option value='five'>5</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
     });	 
	 


/*	 ------------------------------------------------*/


	$("#registermrmechanix").click(function(){
		$("#mrmechanixpage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Mr. Mechanix');
		$("#popup").delay(400).fadeIn(200);
		eventname="mrmechanix";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
     });
		
	$("#registermrmechanix1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Mr. Mechanix');
		$("#popup").delay(400).fadeIn(200);
		eventname="mrmechanix";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
     });	 
	 


/*	 ------------------------------------------------*/


	$("#registerreincarnation").click(function(){
		$("#reincarnationpage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Reincarnation');
		$("#popup").delay(400).fadeIn(200);
		eventname="reincarnation";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
     });
		
	$("#registerreincarnation1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Reincarnation');
		$("#popup").delay(400).fadeIn(200);
		eventname="reincarnation";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
     });	 
	 


/*	 ------------------------------------------------*/


	$("#registertechquiz").click(function(){
		$("#techquizpage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Techquiz');
		$("#popup").delay(400).fadeIn(200);
		eventname="techquiz";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
     });
		
	$("#registertechquiz1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Techquiz');
		$("#popup").delay(400).fadeIn(200);
		eventname="techquiz";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
     });	 
	 


/*	 ------------------------------------------------*/


	$("#registergeekothon").click(function(){
		$("#geekothonpage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Geek-o-thon');
		$("#popup").delay(400).fadeIn(200);
		eventname="geekothon";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
     });
		
	$("#registergeekothon1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Geek-o-thon');
		$("#popup").delay(400).fadeIn(200);
		eventname="geekothon";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
     });	 
	 


/*	 ------------------------------------------------*/


	$("#registerprezenta").click(function(){
		$("#prezentapage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Prezenta');
		$("#popup").delay(400).fadeIn(200);
		
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		$("#nom").val("default");
		$("#nom").change(function(){
		
		if($("#nom").val()=="one"||"two"){
			eventname="prezenta";
		}
			
		if($("#nom").val()=="three"){
			eventname="prezenta2";
		}
		

		
		});
		
     });
		
	$("#registerprezenta1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Prezenta');
		$("#popup").delay(400).fadeIn(200);
		
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		$("#nom").val("default");
		$("#nom").change(function(){
		
		if($("#nom").val()=="one"||"two"){
			eventname="prezenta";
		}
			
		if($("#nom").val()=="three"){
			eventname="prezenta2";
		}
		

		
		});
		
     });	 
	 


/*	 ------------------------------------------------*/


	$("#registerautoquiz").click(function(){
		$("#autoquizpage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Autoquiz');
		$("#popup").delay(400).fadeIn(200);
		eventname="autoquiz";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
     });
		
	$("#registerautoquiz1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Autoquiz');
		$("#popup").delay(400).fadeIn(200);
		eventname="autoquiz";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
     });	 
	 


/*	 ------------------------------------------------*/


	$("#registermathlab").click(function(){
		$("#matlabmaniapage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Mathlab Mania');
		$("#popup").delay(400).fadeIn(200);
		eventname="mathlabmania";
		
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
     });
		
	$("#registermathlab1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Mathlab Mania');
		$("#popup").delay(400).fadeIn(200);
		eventname="mathlabmania";
		
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		
		
     });	 
	 


/*	 ------------------------------------------------*/


	$("#register8051utechie").click(function(){
		$("#8051utechiepage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('8051 uTechie');
		$("#popup").delay(400).fadeIn(200);
		eventname="8051utechie";
		
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
     });
		
	$("#register8051utechie1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('8051 uTechie');
		$("#popup").delay(400).fadeIn(200);
		eventname="8051utechie";
		
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
     });	 
	 


/*	 ------------------------------------------------*/


	$("#registercircuitrix").click(function(){
		$("#circuitrixpage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Circuitrix');
		$("#popup").delay(400).fadeIn(200);
		eventname="circuitrix";
		
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option>");
	
	$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
     });
		
	$("#registercircuitrix1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Circuitrix');
		$("#popup").delay(400).fadeIn(200);
		eventname="circuitrix";
		
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option>");

		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
     });	 
	 


/*	 ------------------------------------------------*/


	$("#registerbeproject").click(function(){
		$("#beprojectpage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('BE Project');
		$("#popup").delay(400).fadeIn(200);
		
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option><option value='four'>4</option><option value='five'>5</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		$("#nom").val("default");
		$("#nom").change(function(){
		
		if($("#nom").val()=="one"||"two"||"three"||"four"){
			eventname="beproject";
		}
			
		if($("#nom").val()=="five"){
			eventname="beproject2";
		}
		
		
		});
		
     });
		
	$("#registerbeproject1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('BE Project');
		$("#popup").delay(400).fadeIn(200);
		
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option><option value='four'>4</option><option value='five'>5</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		$("#nom").val("default");
		$("#nom").change(function(){
		
		if($("#nom").val()=="one"||"two"||"three"||"four"){
			eventname="beproject";
		}
			
		if($("#nom").val()=="five"){
			eventname="beproject2";
		}
		
				
		});
		
     });	 
	 


/*	 ------------------------------------------------*/


	$("#registerteproject").click(function(){
		$("#teprojectpage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('TE Project');
		$("#popup").delay(400).fadeIn(200);
		
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option><option value='four'>4</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		$("#nom").val("default");
		$("#nom").change(function(){
		
		if($("#nom").val()=="one"||"two"||"three"){
			eventname="teproject";
		}
			
		if($("#nom").val()=="four"){
			eventname="teproject2";
		}
		
		
		
		});
		
     });
		
	$("#registerteproject1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('TE Project');
		$("#popup").delay(400).fadeIn(200);
		
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option><option value='four'>4</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		$("#nom").val("default");
		$("#nom").change(function(){
		
		if($("#nom").val()=="one"||"two"||"three"){
			eventname="teproject";
		}
			
		if($("#nom").val()=="four"){
			eventname="teproject2";
		}
		
		
		
		});
		
     });
	 

/*	 ------------------------------------------------*/


	$("#registerappsworld").click(function(){
		$("#appsworldpage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Apps World');
		$("#popup").delay(400).fadeIn(200);
		eventname="appsworld";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		
     });
		
	$("#registerappsworld1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Apps World');
		$("#popup").delay(400).fadeIn(200);
		eventname="appsworld";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
     });	 
	 


/*	 ------------------------------------------------*/


	$("#registergweblink").click(function(){
		$("#goldenweblinkpage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('G Web Link');
		$("#popup").delay(400).fadeIn(200);
		eventname="gweblink";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
     });
		
	$("#registergweblink1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('G Web Link');
		$("#popup").delay(400).fadeIn(200);
		eventname="gweblink";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
     });	 
	 


/*	 ------------------------------------------------*/


	$("#registeralgoholics").click(function(){
		$("#algoholicspage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Algoholics');
		$("#popup").delay(400).fadeIn(200);
		
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		$("#nom").val("default");
		$("#nom").change(function(){
		
		if($("#nom").val()=="one"){
			eventname="algoholics";
		}
			
		if($("#nom").val()=="two"){
			eventname="algoholics2";
		}
		
		
		
		});
		
     });
		
	$("#registeralgoholics1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Algoholics');
		$("#popup").delay(400).fadeIn(200);
		
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		$("#nom").val("default");
		$("#nom").change(function(){
		
		if($("#nom").val()=="one"){
			eventname="algoholics";
		}
			
		if($("#nom").val()=="two"){
			eventname="algoholics2";
		}
		
	
		
		});
		
     });	 
	 


/*	 ------------------------------------------------*/


	$("#registercodestorm").click(function(){
		$("#codestormpage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Code Storm');
		$("#popup").delay(400).fadeIn(200);
		
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		$("#nom").val("default");
		$("#nom").change(function(){
		
		if($("#nom").val()=="one"){
			eventname="codestorm";
		}
			
		if($("#nom").val()=="two"){
			eventname="codestorm2";
		}
		
	
		
		});
		
     });
		
	$("#registercodestorm1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Code Storm');
		$("#popup").delay(400).fadeIn(200);
		
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		$("#nom").val("default");
		$("#nom").change(function(){
		
		if($("#nom").val()=="one"){
			eventname="codestorm";
		}
			
		if($("#nom").val()=="two"){
			eventname="codestorm2";
		}
		
	
		
		});
		
     });	 
	 


/*	 ------------------------------------------------*/


	$("#registerletsc").click(function(){
		$("#letscpage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('If You Can');
		$("#popup").delay(400).fadeIn(200);
		
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		$("#nom").val("default");
		$("#nom").change(function(){
		
		if($("#nom").val()=="one"){
			eventname="ifyoucan";
		}
			
		if($("#nom").val()=="two"){
			eventname="ifyoucan2";
		}

		
		});
		
     });
		
	$("#registerletsc1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('If You Can');
		$("#popup").delay(400).fadeIn(200);
		
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		$("#nom").val("default");
		$("#nom").change(function(){
		
		if($("#nom").val()=="one"){
			eventname="ifyoucan";
		}
			
		if($("#nom").val()=="two"){
			eventname="ifyoucan2";
		}
		

		
		});
		
     });	 
	 


/*	 ------------------------------------------------*/


	$("#registertexpresso").click(function(){
		$("#texpressopage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Texpresso');
		$("#popup").delay(400).fadeIn(200);
		eventname="texpresso";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option>");
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
     });
		
	$("#registertexpresso1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Texpresso');
		$("#popup").delay(400).fadeIn(200);
		eventname="texpresso";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option>");
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
     });	 
	 


/*	 ------------------------------------------------*/


	$("#registerguimaniac").click(function(){
		$("#guimaniacpage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('GUI maniac');
		$("#popup").delay(400).fadeIn(200);
		eventname="guimaniac";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option>");
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
     });
		
	$("#registerguimaniac1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('GUI Maniac');
		$("#popup").delay(400).fadeIn(200);
		eventname="guimaniac";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option>");
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
     });	 
	 


/*	 ------------------------------------------------*/


	$("#registerdesignerpro").click(function(){
		$("#designerpropage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Designer Pro');
		$("#popup").delay(400).fadeIn(200);
		$("#nomdiv").text('Select category:');
		
		$("#nom").html("<option value='default'>Select</option><option value='one'>AutoCAD</option><option value='two'>ProE</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		$("#nom").val("default");
		$("#nom").change(function(){
		
		if($("#nom").val()=="one"){
			eventname="designerpro";
		}
			
		if($("#nom").val()=="two"){
			eventname="designerpro2";
		}
		

		
		});
		
     });
		

		
	$("#registerdesignerpro1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Designer Pro');
		$("#popup").delay(400).fadeIn(200);
		$("#nomdiv").text('Select category:');
		
		$("#nom").html("<option value='default'>Select</option><option value='one'>AutoCAD</option><option value='two'>ProE</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		$("#nom").val("default");
		$("#nom").change(function(){
		
		if($("#nom").val()=="one"){
			eventname="designerpro";
		}
			
		if($("#nom").val()=="two"){
			eventname="designerpro2";
		}

		
		});
		
     });	 
	 


/*	 ------------------------------------------------*/


	$("#registerlohnw").click(function(){
		$("#legendspage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('LOHNW');
		$("#popup").delay(400).fadeIn(200);
		eventname="lohnw";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
     });
		
	$("#registerlohnw1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('LOHNW');
		$("#popup").delay(400).fadeIn(200);
		eventname="lohnw";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
     });
	 

/*Non Technical*/

	 
	 


/*	 ------------------------------------------------*/


	$("#registertechnodumbs").click(function(){
		$("#technodumbspage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Technodumbs');
		$("#popup").delay(400).fadeIn(200);
		eventname="technodumbs";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
     });
		
	$("#registertechnodumbs1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Technodumbs');
		$("#popup").delay(400).fadeIn(200);
		eventname="technodumbs";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		
     });	 
	 


/*	 ------------------------------------------------*/


	$("#registerallianze").click(function(){
		$("#allianzepage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Allianze');
		$("#popup").delay(400).fadeIn(200);
		eventname="allianze";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		
     });
		
	$("#registerallianze1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Allianze');
		$("#popup").delay(400).fadeIn(200);
		eventname="allianze";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		
     });	 
	 


/*	 ------------------------------------------------*/


	$("#registeraxlography").click(function(){
		$("#axlographypage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Axlography');
		$("#popup").delay(400).fadeIn(200);
		
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		
		$("#nom").val("default");
		$("#nom").change(function(){
		
		if($("#nom").val()=="one"){
			eventname="axlography";
		}
			
		if($("#nom").val()=="two"){
			eventname="axlography2";
		}

		
		});
		
     });
		
	$("#registeraxlography1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Axlography');
		$("#popup").delay(400).fadeIn(200);
		
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		
		$("#nom").val("default");
		$("#nom").change(function(){
		
		if($("#nom").val()=="one"){
			eventname="axlography";
		}
			
		if($("#nom").val()=="two"){
			eventname="axlography2";
		}

		
		});
		
     });	 
	 


/*	 ------------------------------------------------*/


	$("#registerinquizzitive").click(function(){
		$("#inquizzitivepage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Inquizzitive');
		$("#popup").delay(400).fadeIn(200);
		eventname="inquizzitive";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		
     });
		
	$("#registerinquizzitive1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Inquizzitive');
		$("#popup").delay(400).fadeIn(200);
		eventname="inquizzitive";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		
     });	 
	 


/*	 ------------------------------------------------*/


	$("#registerbrainbooster").click(function(){
		$("#brainboosterpage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Brain Booster');
		$("#popup").delay(400).fadeIn(200);
		eventname="brainbooster";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		
     });
		
	$("#registerbrainbooster1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Brain Booster');
		$("#popup").delay(400).fadeIn(200);
		eventname="brainbooster";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		
     });	 
	 


/*	 ------------------------------------------------*/


	$("#registermyob").click(function(){
		$("#myobpage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('MYOB');
		$("#popup").delay(400).fadeIn(200);
		eventname="myob";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		
     });
		
	$("#registermyob1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('MYOB');
		$("#popup").delay(400).fadeIn(200);
		eventname="myob";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		
     });	 
	 


/*	 ------------------------------------------------*/


	$("#registerrobotsav").click(function(){
		$("#robotsavpage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Robotsav');
		$("#popup").delay(400).fadeIn(200);
		eventname="Robotsav";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option><option value='four'>4</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		
     });
		
	$("#registerrobotsav1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Robotsav');
		$("#popup").delay(400).fadeIn(200);
		eventname="robotsav";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option><option value='four'>4</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		
     });	 
	 


/*	 ------------------------------------------------*/


	$("#registercc").click(function(){
		$("#cloudpage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Cloud Computing');
		$("#popup").delay(400).fadeIn(200);
		eventname="cc";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		
     });
		
	$("#registercc1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Cloud Computing');
		$("#popup").delay(400).fadeIn(200);
		eventname="cc";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		
     });	 
	 


/*	 ------------------------------------------------*/


	$("#registerlinuxication").click(function(){
		$("#linuxicationpage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Linuxication');
		$("#popup").delay(400).fadeIn(200);
		eventname="linuxication";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		
     });
		
	$("#registerlinuxication1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Linuxication');
		$("#popup").delay(400).fadeIn(200);
		eventname="linuxication";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		
     });	 
	 


/*	 ------------------------------------------------*/


	$("#registerethicalhacking").click(function(){
		$("#ethicalhackingpage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Ethical Hacking');
		$("#popup").delay(400).fadeIn(200);
		eventname="etchicalhacking";  /*Wrong Spelling, still, dont change*/
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		
     });
		
	$("#registerethicalhacking1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Ethical Hacking');
		$("#popup").delay(400).fadeIn(200);
		eventname="etchicalhacking";	/*Wrong Spelling, still, dont change*/
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		
     });	 
	 


/*	 ------------------------------------------------*/


	$("#registeravd").click(function(){
		$("#avdpage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('AVD');
		$("#popup").delay(400).fadeIn(200);
		eventname="avd";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		
     });
		
	$("#registeravd1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('AVD');
		$("#popup").delay(400).fadeIn(200);
		eventname="avd";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		
     });	 
	 


/*	 ------------------------------------------------*/


	$("#registerboxc").click(function(){
		$("#boxcpage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Box Cricket');
		$("#popup").delay(400).fadeIn(200);
		eventname="boxc";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		
     });
		
	$("#registerboxc1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Box Cricket');
		$("#popup").delay(400).fadeIn(200);
		eventname="boxc";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		
     });	 
	 


/*	 ------------------------------------------------*/


	$("#registerboxs").click(function(){
		$("#boxspage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Box Soccer');
		$("#popup").delay(400).fadeIn(200);
		eventname="boxs";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		
     });
		
	$("#registerboxs1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Box Soccer');
		$("#popup").delay(400).fadeIn(200);
		eventname="boxs";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		
     });	 
	 


/*	 ------------------------------------------------*/


	$("#registercs").click(function(){
		$("#cspage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Counter Strike');
		$("#popup").delay(400).fadeIn(200);
		eventname="cs";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		
     });
		
	$("#registercs1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Counter Strike');
		$("#popup").delay(400).fadeIn(200);
		eventname="cs";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		
     });	 
	 


/*	 ------------------------------------------------*/


	$("#registerfifa").click(function(){
		$("#fifapage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('FIFA');
		$("#popup").delay(400).fadeIn(200);
		eventname="fifa";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		
     });
		
	$("#registerfifa1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('FIFA');
		$("#popup").delay(400).fadeIn(200);
		eventname="fifa";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		
     });	 
	 


/*	 ------------------------------------------------*/


	$("#registernfs").click(function(){
		$("#nfspage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('NFS');
		$("#popup").delay(400).fadeIn(200);
		eventname="nfs";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		
     });
		
	$("#registernfs1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('NFS');
		$("#popup").delay(400).fadeIn(200);
		eventname="nfs";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		
     });	 
	 


/*	 ------------------------------------------------*/


	$("#registerdota").click(function(){
		$("#dotapage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Dota');
		$("#popup").delay(400).fadeIn(200);
		eventname="dota";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		
     });
		
	$("#registerdota1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Dota');
		$("#popup").delay(400).fadeIn(200);
		eventname="dota";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		
     });	 
	 


/*	 ------------------------------------------------*/


	$("#registerblitzchess").click(function(){
		$("#blitzchesspage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Blitz Chess');
		$("#popup").delay(400).fadeIn(200);
		eventname="blitzchess";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		
     });
		
	$("#registerblitzchess1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Blitz Chess');
		$("#popup").delay(400).fadeIn(200);
		eventname="blitzchess";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		
     });	 
	 


/*	 ------------------------------------------------*/


	$("#registerlasertag").click(function(){
		$("#lasertagpage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Laser Tag');
		$("#popup").delay(400).fadeIn(200);
		eventname="lasertag";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		
     });
		
	$("#registerlasertag1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Laser Tag');
		$("#popup").delay(400).fadeIn(200);
		eventname="lasertag";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		
     });	 
	 


/*	 ------------------------------------------------*/


	$("#registereyebotics").click(function(){
		$("#eyeboticspage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Eyebotics');
		$("#popup").delay(400).fadeIn(200);
		eventname="eyebotics";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option><option value='four'>4</option><option value='five'>5</option");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		
     });
		
	$("#registereyebotics1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Eyebotics');
		$("#popup").delay(400).fadeIn(200);
		eventname="eyebotics";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option><option value='four'>4</option><option value='five'>5</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		
     });
		
     
	 
/*	 ------------------------------------------------*/
	 
	 
	$("#registertechroadies").click(function(){
		$("#techroadiespage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Techroadies');
		$("#popup").delay(400).fadeIn(200);
		eventname="techroadies";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		
     });
		
	$("#registertechroadies1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');		
		$("#eventtitle").text('Techroadies');
		$("#popup").delay(400).fadeIn(200);
		eventname="techroadies";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
     });
		
     
	 
/*	 ------------------------------------------------*/
	 
	 
	$("#registercontraption").click(function(){
		$("#contraptionpage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Contraption');
		$("#popup").delay(400).fadeIn(200);
		eventname="contraption";
		$("#nom").html("<option value='default'>Select</option><option value='two'>2</option><option value='three'>3</option><option value='four'>4</option><option value='five'>5</option><option value='six'>6</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		
     });
		
	$("#registercontraption1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');		
		$("#eventtitle").text('Contraption');
		$("#popup").delay(400).fadeIn(200);
		eventname="contraption";
		$("#nom").html("<option value='default'>Select</option><option value='two'>2</option><option value='three'>3</option><option value='four'>4</option><option value='five'>5</option><option value='six'>6</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
     });
		
     
	 
		
     
	 
/*	 ------------------------------------------------*/
	 
	 
	$("#registerbrainbooster").click(function(){
		$("#brainboosterpage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('brainbooster');
		$("#popup").delay(400).fadeIn(200);
		eventname="brainbooster";
		$("#nom").html("<option value='default'>Select</option><option value='two'>2</option><option value='three'>3</option><option value='four'>4</option><option value='five'>5</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		
     });
		
	$("#registerbrainbooster1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');		
		$("#eventtitle").text('brainbooster');
		$("#popup").delay(400).fadeIn(200);
		eventname="brainbooster";
		$("#nom").html("<option value='default'>Select</option><option value='two'>2</option><option value='three'>3</option><option value='four'>4</option><option value='five'>5</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
     });
		
     
	 
/*	 ------------------------------------------------*/
	 
	 
	$("#registerhotkeys").click(function(){
		$("#hotkeyspage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Hotkeys');
		$("#popup").delay(400).fadeIn(200);
		eventname="hotkeys";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		
     });
		
	$("#registerhotkeys1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');		
		$("#eventtitle").text('Hotkeys');
		$("#popup").delay(400).fadeIn(200);
		eventname="hotkeys";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
     });
		
     
	 
/*	 ------------------------------------------------*/
	 
	 
	$("#registergoogleit").click(function(){
		$("#googleitpage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('GoogleIT');
		$("#popup").delay(400).fadeIn(200);
		eventname="googleit";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		
     });
		
	$("#registergoogleit1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');		
		$("#eventtitle").text('GoogleIT');
		$("#popup").delay(400).fadeIn(200);
		eventname="googleit";
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
     });	 
	 


/*	 ------------------------------------------------*/


	$("#registerosca").click(function(){
		$("#oscapage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('OSCA');
		$("#popup").delay(400).fadeIn(200);
		
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option><option value='four'>4</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		
		
		
		eventsel='0';
		
		$("#nom").val("default");
		$("#nom").change(function(){
		
		if($("#nom").val()=="one"||"two"||"three"){
			eventname="osca1";
			eventsel='1';
		}
			
		if($("#nom").val()=="four"){
			eventname="osca2";
		}
		

		
		});
		
     });
		
	$("#registerosca1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('OSCA');
		$("#popup").delay(400).fadeIn(200);
		
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option><option value='two'>2</option><option value='three'>3</option><option value='four'>4</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		
		eventsel='0';
		
		$("#nom").val("default");
		$("#nom").change(function(){
		
		if($("#nom").val()=="one"||"two"||"three"){
			eventname="osca1";
			eventsel='1';
		}
			
		if($("#nom").val()=="four"){
			eventname="osca2";
		}
		

		
		});
		
     });	 
	 
	 
	 	 
	 


/*	 ------------------------------------------------*/


	$("#registerethical").click(function(){
		$("#ethicalpage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Ethical Hacking');
		$("#popup").delay(400).fadeIn(200);
		
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		
			eventname="etchicalhacking";  /*Wrong Spelling, still, dont change*/
		
     });
		
	$("#registerethical1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Ethical Hacking');
		$("#popup").delay(400).fadeIn(200);
		
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		
			eventname="etchicalhacking";  /*Wrong Spelling, still, dont change*/
		
		

		
     });
	 	 
	 


/*	 ------------------------------------------------*/


	$("#registerlinuxication").click(function(){
		$("#linuxicationpage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Linuxication');
		$("#popup").delay(400).fadeIn(200);
		
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		
			eventname="linuxification";
		
     });
		
	$("#registerlinuxication1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('Linuxication');
		$("#popup").delay(400).fadeIn(200);
		
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		
			eventname="linuxification";
		
		

		
     });
	 	 
	 


/*	 ------------------------------------------------*/


	$("#registerscoreplus").click(function(){
		$("#scorepluspage").fadeOut(200);
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('GRE Test Fest');
		$("#popup").delay(400).fadeIn(200);
		
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		
			eventname="scoreplus";
		
     });
		
	$("#registerscoreplus1").click(function(){
		$("#registerpage").fadeOut(200);	
		$("#popup").removeClass('hidden');
		$("#eventtitle").text('GRE Test Fest');
		$("#popup").delay(400).fadeIn(200);
		
		$("#nom").html("<option value='default'>Select</option><option value='one'>1</option>");
		
		$("#nom").change(function(){
			if($("#nom").val()=="default"){
			$("#reggo").addClass('hidden');
			}
			else{
			$("#reggo").removeClass('hidden');
			}
			});
		
		
			eventname="scoreplus";
		
		

		
     });	 	 
	 


/*	 ------------------------------------------------*/

 
	/*Link Script*/ 
	 
	 
	if(eventname=="designerpro1" || "designerpro2"){
	 	$("#reggo").click(function(){
		$("#reggo").addClass('hidden');	 
	  	$("#popup").fadeOut(200);
		window.open("http://townscript.com/event/"+eventname+	 "_texephyr",'_new');
		
     }); 
	 
	 $("#regclose").click(function(){
	  	$("#popup").fadeOut(200);
		$("#reggo").addClass('hidden');	 
		$("#nomdiv").text('Select number of members:');
		$("#registerpage").delay(500).fadeIn(300);
		
     });  
	 }
	 
	 if(eventname!="designerpro1" || "designerpro2"){ 
	    
		$("#reggo").click(function(){
	  	$("#popup").fadeOut(200);
		window.open("http://townscript.com/event/"+eventname+"_texephyr",'_new');
		
     }); 
	 
	 
	 $("#regclose").click(function(){
	  	$("#popup").fadeOut(200);
		$("#reggo").addClass('hidden');	 
		$("#registerpage").delay(500).fadeIn(300);
		
     });  
	 }
	
	 	 if($("#nom").val()=="default"){
		$("#reggo").addClass('hidden');	 
	 }
	 
	 
});


	 
	 
	 
	 
	 

