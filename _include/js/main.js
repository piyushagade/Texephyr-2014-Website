jQuery(function($){

var BRUSHED = window.BRUSHED || {};

/* ==================================================
   Mobile Navigation
================================================== */
var mobileMenuClone = $('#menu').clone().attr('id', 'navigation-mobile');

BRUSHED.mobileNav = function(){
	var windowWidth = $(window).width();
	
	if( windowWidth <= 979 ) {
		if( $('#mobile-nav').length > 0 ) {
			mobileMenuClone.insertAfter('#menu');
			$('#navigation-mobile #menu-nav').attr('id', 'menu-nav-mobile');
		}
	} else {
		$('#navigation-mobile').css('display', 'none');
		if ($('#mobile-nav').hasClass('open')) {te
			$('#mobile-nav').removeClass('open');	
		}
	}
}

BRUSHED.listenerMenu = function(){
	$('#mobile-nav').on('click', function(e){
		$(this).toggleClass('open');
		
		if ($('#mobile-nav').hasClass('open')) {
			$('#navigation-mobile').slideDown(500, 'easeOutExpo');
		} else {
			$('#navigation-mobile').slideUp(500, 'easeOutExpo');
		}
		e.preventDefault();
	});
	
	$('#menu-nav-mobile a').on('click', function(){
		$('#mobile-nav').removeClass('open');
		$('#navigation-mobile').slideUp(350, 'easeOutExpo');
	});
}


/* ==================================================
   Slider Options
================================================== */

BRUSHED.slider = function(){
	$.supersized({
		// Functionality
		slideshow               :   1,			// Slideshow on/off
		autoplay				:	1,			// Slideshow starts playing automatically
		start_slide             :   1,			// Start slide (0 is random)
		stop_loop				:	0,			// Pauses slideshow on last slide
		random					: 	0,			// Randomize slide order (Ignores start slide)
		slide_interval          :   12000,		// Length between transitions
		transition              :   1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
		transition_speed		:	300,		// Speed of transition
		new_window				:	1,			// Image links open in new window/tab
		pause_hover             :   0,			// Pause slideshow on hover
		keyboard_nav            :   1,			// Keyboard navigation on/off
		performance				:	1,			// 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)
		image_protect			:	1,			// Disables image dragging and right click with Javascript
												   
		// Size & Position						   
		min_width		        :   0,			// Min width allowed (in pixels)
		min_height		        :   0,			// Min height allowed (in pixels)
		vertical_center         :   1,			// Vertically center background
		horizontal_center       :   1,			// Horizontally center background
		fit_always				:	0,			// Image will never exceed browser width or height (Ignores min. dimensions)
		fit_portrait         	:   1,			// Portrait images will not exceed browser height
		fit_landscape			:   0,			// Landscape images will not exceed browser width
												   
		// Components							
		slide_links				:	'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
		thumb_links				:	0,			// Individual thumb links for each slide
		thumbnail_navigation    :   0,			// Thumbnail navigation
		slides 					:  	[			// Slideshow Images
											{image : '_include/img/slider-images/image01.jpg', title : '<div class="slide-content"><img src="_include/img/fac1.png" width="90%" height="95%"><div class="slide-details"> </div></div>', thumb : '', url : ''},
											{image : '_include/img/slider-images/image02.jpg', title : '<div class="slide-content"><img src="_include/img/fac2.png" width="90%" height="95%"></div>', thumb : '', url : ''},
											{image : '_include/img/slider-images/image03.jpg', title : '<div class="slide-content"><img src="_include/img/fac3.png" width="90%" height="95%"></div>', thumb : '', url : ''},
											{image : '_include/img/slider-images/image04.jpg', title : '<div class="slide-content"><img src="_include/img/fac4.png" width="90%" height="95%"></div>', thumb : '', url : ''}  
									],
									
		// Theme Options			   
		progress_bar			:	0,			// Timer for each slide							
		mouse_scrub				:	0
		
	});

}


/* ==================================================
   Navigation Fix
================================================== */

BRUSHED.nav = function(){
	$('.sticky-nav').waypoint('sticky');
}


/* ==================================================
   Filter Works
================================================== */

BRUSHED.filter = function (){
	if($('#projects').length > 0){		
		var $container = $('#projects');
		
		$container.isotope({
		  // options
		  animationEngine: 'best-available',
		  itemSelector : '.item-thumbs',
		  layoutMode : 'fitRows'
		});
	
		
		// filter items when filter link is clicked
		var $optionSets = $('#options .option-set'),
			$optionLinks = $optionSets.find('a');
	
		  $optionLinks.click(function(){
			var $this = $(this);
			// don't proceed if already selected
			if ( $this.hasClass('selected') ) {
			  return false;
			}
			var $optionSet = $this.parents('.option-set');
			$optionSet.find('.selected').removeClass('selected');
			$this.addClass('selected');
	  
			// make option object dynamically, i.e. { filter: '.my-filter-class' }
			var options = {},
				key = $optionSet.attr('data-option-key'),
				value = $this.attr('data-option-value');
			// parse 'false' as false boolean
			value = value === 'false' ? false : value;
			options[ key ] = value;
			if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
			  // changes in layout modes need extra logic
			  changeLayoutMode( $this, options )
			} else {
			  // otherwise, apply new options
			  $container.isotope( options );
			}
			
			return false;
		});
	}
}


/* ==================================================
   FancyBox
================================================== */

BRUSHED.fancyBox = function(){
	if($('.fancybox').length > 0 || $('.fancybox-media').length > 0 || $('.fancybox-various').length > 0){
		
		$(".fancybox").fancybox({				
				padding : 0,
				beforeShow: function () {
					this.title = $(this.element).attr('title');
					this.title = '<h4>' + this.title + '</h4>' + '<p>' + $(this.element).parent().find('img').attr('alt') + '</p>';
				},
				helpers : {
					title : { type: 'inside' },
				}
			});
			
		$('.fancybox-media').fancybox({
			openEffect  : 'none',
			closeEffect : 'none',
			helpers : {
				media : {}
			}
		});
	}
}


/* ==================================================
   Contact Form
================================================== */

BRUSHED.contactForm = function(){
	$("#contact-submit").on('click',function() {
		$contact_form = $('#contact-form');
		
		var fields = $contact_form.serialize();
		
		$.ajax({
			type: "POST",
			url: "_include/php/contact.php",
			data: fields,
			dataType: 'json',
			success: function(response) {
				
				if(response.status){
					$('#contact-form input').val('');
					$('#contact-form textarea').val('');
				}
				
				$('#response').empty().html(response.html);
			}
		});
		return false;
	});
}


/* ==================================================
   Twitter Feed
================================================== */

BRUSHED.tweetFeed = function(){
	var valueTop = -64;
	
    $("#ticker").tweet({
          username: "Bluxart",
          page: 1,
          avatar_size: 0,
          count: 10,
		  template: "{text}{time}",
		  filter: function(t){ return ! /^@\w+/.test(t.tweet_raw_text); },
          loading_text: "loading ..."
	}).bind("loaded", function() {
	  var ul = $(this).find(".tweet_list");
	  var ticker = function() {
		setTimeout(function() {
			ul.find('li:first').animate( {marginTop: valueTop + 'px'}, 500, 'linear', function() {
				$(this).detach().appendTo(ul).removeAttr('style');
			});	
		  ticker();
		}, 5000);
	  };
	  ticker();
	});
	
}


/* ==================================================
   Menu Highlight
================================================== */

BRUSHED.menu = function(){
	$('#menu-nav, #menu-nav-mobile').onePageNav({
		currentClass: 'current',
    	changeHash: false,
    	scrollSpeed: 750,
    	scrollOffset: 30,
    	scrollThreshold: 0.5,
		easing: 'easeOutExpo',
		filter: ':not(.external)'
	});
}

/* ==================================================
   Next Section
================================================== */

BRUSHED.goSection = function(){
	$('#nextsection').on('click', function(){
		$target = $($(this).attr('href')).offset().top-30;
		
		$('body, html').animate({scrollTop : $target}, 750, 'easeOutExpo');
		return false;
	});
}

/* ==================================================
   GoUp
================================================== */

BRUSHED.goUp = function(){
	$('#goUp').on('click', function(){
		$target = $($(this).attr('href')).offset().top-30;
		
		$('body, html').animate({scrollTop : $target}, 750, 'easeOutExpo');
		return false;
	});
}


/* ==================================================
	Scroll to Top
================================================== */

BRUSHED.scrollToTop = function(){
	var windowWidth = $(window).width(),
		didScroll = false;

	var $arrow = $('#back-to-top');

	$arrow.click(function(e) {
		$('body,html').animate({ scrollTop: "0" }, 750, 'easeOutExpo' );
		e.preventDefault();
	})

	$(window).scroll(function() {
		didScroll = true;
	});

	setInterval(function() {
		if( didScroll ) {
			didScroll = false;

			if( $(window).scrollTop() > 740 ) {
				$arrow.css('display', 'block');
			} else {
				$arrow.css('display', 'none');
			}
		}
	}, 250);
}

/* ==================================================
   Thumbs / Social Effects
================================================== */

BRUSHED.utils = function(){
	
	$('.item-thumbs').bind('touchstart', function(){
		$(".active").removeClass("active");
      	$(this).addClass('active');
    });
	
	$('.image-wrap').bind('touchstart', function(){
		$(".active").removeClass("active");
      	$(this).addClass('active');
    });
	
	$('#social ul li').bind('touchstart', function(){
		$(".active").removeClass("active");
      	$(this).addClass('active');
    });
	
}

/* ==================================================
   Accordion
================================================== */

BRUSHED.accordion = function(){
	var accordion_trigger = $('.accordion-heading.accordionize');
	
	accordion_trigger.delegate('.accordion-toggle','click', function(event){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
		   	$(this).addClass('inactive');
		}
		else{
		  	accordion_trigger.find('.active').addClass('inactive');          
		  	accordion_trigger.find('.active').removeClass('active');   
		  	$(this).removeClass('inactive');
		  	$(this).addClass('active');
	 	}
		event.preventDefault();
	});
}

/* ==================================================
   Toggle
================================================== */

BRUSHED.toggle = function(){
	var accordion_trigger_toggle = $('.accordion-heading.togglize');
	
	accordion_trigger_toggle.delegate('.accordion-toggle','click', function(event){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
		   	$(this).addClass('inactive');
		}
		else{
		  	$(this).removeClass('inactive');
		  	$(this).addClass('active');
	 	}
		event.preventDefault();
	});
}

/* ==================================================
   Tooltip
================================================== */

BRUSHED.toolTip = function(){ 
    $('a[data-toggle=tooltip]').tooltip();
}


/* ==================================================
	Init
================================================== */

BRUSHED.slider();

$(document).ready(function(){
	Modernizr.load([
	{
		test: Modernizr.placeholder,
		nope: '_include/js/placeholder.js', 
		complete : function() {
				if (!Modernizr.placeholder) {
						Placeholders.init({
						live: true,
						hideOnFocus: false,
						className: "yourClass",
						textColor: "#999"
						});    
				}
		}
	}
	]);
	
	// Preload the page with jPreLoader
	$('body').jpreLoader({
		splashID: "#jSplash",
		showSplash: true,
		showPercentage: true,
		autoClose: true,
		splashFunction: function() {
			$('#circle').delay(250).animate({'opacity' : 1}, 500, 'linear');
		}
	});
	
	BRUSHED.nav();
	BRUSHED.mobileNav();
	BRUSHED.listenerMenu();
	BRUSHED.menu();
	BRUSHED.goSection();
	BRUSHED.goUp();
	BRUSHED.filter();
	BRUSHED.fancyBox();
	BRUSHED.contactForm();
	BRUSHED.tweetFeed();
	BRUSHED.scrollToTop();
	BRUSHED.utils();
	BRUSHED.accordion();
	BRUSHED.toggle();
	BRUSHED.toolTip();
});

$(window).resize(function(){
	BRUSHED.mobileNav();
});

});

/*  Timed Fadeout of notifications
*
**/


/* Fade Out Script */
 $("#timed1").delay(8000).fadeOut(800);
 $( "#floatdown" ).hide();  /* Fade Out Updates Button */
 $( "#floatdown" ).delay(10500).show();

/* Fade In Script */
 $("#button").click(function(){
    	$("#timed1").delay(700).fadeIn(400);		
		$("#timed1").delay(8000).fadeOut(800);
     });

$(window).bind("scroll", function() {
    if ($(this).scrollTop() < 60) {
        $("#floatdown").fadeIn();
		
    } else {
        $("#floatdown").stop().fadeOut();
		
    }
});

$(window).bind("scroll", function() {
    if ($(this).scrollTop() < 400) {

		
		
    } else {
		$("#timed1").stop().fadeOut();
		
    }
});


/*Register*/

$(window).bind("scroll", function() {
	    if (($(this).scrollTop() > 1350) && ($(this).scrollTop() < 1930)) {
		$("#register").fadeIn(500);
		$("#uc").removeClass('hidden');
		$("#uc").fadeIn(500);
		
		
    } else {
		$("#register").stop().fadeOut(900);
		$("#uc").stop().fadeOut(900);
		
		
    }
});

$(window).bind("scroll", function() {
	    if (($(this).scrollTop() > 650) && ($(this).scrollTop() < 2530)) {
		
		
		
    } else {
		$("#registerpage").stop().fadeOut(900);
		
		
    }
});

$("#register").click(function(){
    	$('#registerpage').removeClass('hidden');   /* unhide */
		$("#registerback").addClass('hidden');
		$("#registerhelp").fadeIn(200);
		$("#registerpage").show(400);
		$("#page1").show(400);
		$("#page2").fadeOut(0);
		
});

$("#registerclose").click(function(){
    	$("#registerpage").hide(300);
		$("#registerback").addClass('hidden');
		$("#registerhelp").fadeIn(200);
		
});

$("#registerhelp").click(function(){
    	$("#page1").fadeOut(300);
		$("#page2").delay(200).fadeIn(300);
		$("#registerhelp").hide(300);
		$("#registerback").delay(100).removeClass('hidden');
		$("#registerback").fadeIn(300);
		
});

$("#registerback").click(function(){
    	$("#page2").fadeOut(300);
		$("#page1").delay(200).fadeIn(300);
		$("#registerhelp").show(300);
		$("#registerback").hide(200);
		$("#registerback").fadeOut(200);
		
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




$(document).ready(function(){
	$("#register").fadeOut(0);
	$("#registerpage").fadeOut(0);
});


/* 
**
**Pages
**
** */

/*Robotics*/

$(document).ready(function(){
	$("#roboticapage").fadeOut(0);	
	
	$("#robotica").click(function(){
		$('#roboticapage').removeClass('hidden');   
    	$("#roboticapage").fadeIn(800);
     });
	 
	 $("#roboticaclose").click(function(){
    	$("#roboticapage").hide(300);	
     });
	
});

$(document).ready(function(){
	$("#robowarspage").fadeOut(0);	
	
	$("#robowars").click(function(){
		$('#robowarspage').removeClass('hidden');   
    	$("#robowarspage").fadeIn(800);	
     });
	 
	 $("#robowarsclose").click(function(){
    	$("#robowarspage").hide(300);	
     });
	
});

$(document).ready(function(){
	$("#linetracerpage").fadeOut(0);	
	
	$("#linetracer").click(function(){
		$('#linetracerpage').removeClass('hidden');
    	$("#linetracerpage").fadeIn(800);	
     });
	 
	 $("#linetracerclose").click(function(){
    	$("#linetracerpage").hide(300);	
     });
	
});

$(document).ready(function(){
	$("#roboracepage").fadeOut(0);	
	
	$("#roborace").click(function(){
		$('#roboracepage').removeClass('hidden');
    	$("#roboracepage").fadeIn(800);	
     });
	 
	 $("#roboraceclose").click(function(){
    	$("#roboracepage").hide(300);	
     });
	
});

$(document).ready(function(){
	$("#sumowarspage").fadeOut(0);	
	
	$("#sumowars").click(function(){
		$('#sumowarspage').removeClass('hidden');
    	$("#sumowarspage").fadeIn(800);	
     });
	 
	 $("#sumowarsclose").click(function(){
    	$("#sumowarspage").hide(300);	
     });
	
});

$(document).ready(function(){
	$("#ballwarspage").fadeOut(0);	
	
	$("#ballwars").click(function(){
		$('#ballwarspage').removeClass('hidden');
    	$("#ballwarspage").fadeIn(800);	
     });
	 
	 $("#ballwarsclose").click(function(){
    	$("#ballwarspage").hide(300);	
     });
	
});

$(document).ready(function(){
	$("#ballwarspage").fadeOut(0);	
	
	$("#ballwars").click(function(){
		$('#ballwarspage').removeClass('hidden');
    	$("#ballwarspage").fadeIn(800);	
     });
	 
	 $("#ballwarsclose").click(function(){
    	$("#ballwarspage").hide(300);	
     });
	
});

/*Technical*/

$(document).ready(function(){
		
	
	$("#rallymania").click(function(){
		$('#rallymaniapage').removeClass('hidden');
    	$("#rallymaniapage").fadeIn(800);	
     });
	 
	 $("#rallymaniaclose").click(function(){
    	$("#rallymaniapage").hide(300);	
     });
	
});

$(document).ready(function(){
		
	
	$("#texpresso").click(function(){
		$('#texpressopage').removeClass('hidden');
    	$("#texpressopage").fadeIn(800);	
     });
	 
	 $("#texpressoclose").click(function(){
    	$("#texpressopage").hide(300);	
     });
	
});

$(document).ready(function(){
		
	
	$("#mrmechanix").click(function(){
		$('#mrmechanixpage').removeClass('hidden');
    	$("#mrmechanixpage").fadeIn(800);	
     });
	 
	 $("#mrmechanixclose").click(function(){
    	$("#mrmechanixpage").hide(300);	
     });
	
});

$(document).ready(function(){
		
	
	$("#reincarnation").click(function(){
		$('#reincarnationpage').removeClass('hidden');
    	$("#reincarnationpage").fadeIn(800);	
     });
	 
	 $("#reincarnationclose").click(function(){
    	$("#reincarnationpage").hide(300);	
     });
	
});


$(document).ready(function(){
		
	
	$("#techquiz").click(function(){
		$('#geekothonpage').removeClass('hidden');
    	$("#geekothonpage").fadeIn(800);	
     });
	 
	 $("#geekothonclose").click(function(){
    	$("#geekothonpage").hide(300);	
     });
	
});

$(document).ready(function(){
		
	
	$("#autoquiz").click(function(){
		$('#autoquizpage').removeClass('hidden');
    	$("#autoquizpage").fadeIn(800);	
     });
	 
	 $("#autoquizclose").click(function(){
    	$("#autoquizpage").hide(300);	
     });
	
});


$(document).ready(function(){
		
	
	$("#prezenta").click(function(){
		$('#prezentapage').removeClass('hidden');
    	$("#prezentapage").fadeIn(800);	
     });
	 
	 $("#prezentaclose").click(function(){
    	$("#prezentapage").hide(300);	
     });
	
});

$(document).ready(function(){
		
	
	$("#letsc").click(function(){
		$('#letscpage').removeClass('hidden');
    	$("#letscpage").fadeIn(800);	
     });
	 
	 $("#letscclose").click(function(){
    	$("#letscpage").hide(300);	
     });
	
});


$(document).ready(function(){
		
	
	$("#designerpro").click(function(){
		$('#designerpropage').removeClass('hidden');
    	$("#designerpropage").fadeIn(800);	
     });
	 
	 $("#designerproclose").click(function(){
    	$("#designerpropage").hide(300);	
     });
	
});

$(document).ready(function(){
		
	
	$("#legends").click(function(){
		$('#legendspage').removeClass('hidden');
    	$("#legendspage").fadeIn(800);	
     });
	 
	 $("#legendsclose").click(function(){
    	$("#legendspage").hide(300);	
     });
	
});

$(document).ready(function(){
	
	$("#matlabmania").click(function(){
		
		$('#matlabmaniapage').removeClass('hidden');
    	$("#matlabmaniapage").fadeIn(800);	
     });
	 
	 $("#matlabmaniaclose").click(function(){
    	$("#matlabmaniapage").hide(300);	
     });
	
});


$(document).ready(function(){
		
	
	$("#circuitrix").click(function(){
		$('#circuitrixpage').removeClass('hidden');
    	$("#circuitrixpage").fadeIn(800);	
     });
	 
	 $("#circuitrixclose").click(function(){
    	$("#circuitrixpage").hide(300);	
     });
	
});


$(document).ready(function(){
		
	
	$("#8051utechie").click(function(){
		$('#8051utechiepage').removeClass('hidden');
    	$("#8051utechiepage").fadeIn(800);	
     });
	 
	 $("#8051utechieclose").click(function(){
    	$("#8051utechiepage").hide(300);	
     });
	
});


$(document).ready(function(){
		
	
	$("#beproject").click(function(){
		$('#beprojectpage').removeClass('hidden');
    	$("#beprojectpage").fadeIn(800);	
     });
	 
	 $("#beprojectclose").click(function(){
    	$("#beprojectpage").hide(300);	
     });
	
});


$(document).ready(function(){
		
	
	$("#teproject").click(function(){
		$('#teprojectpage').removeClass('hidden');
    	$("#teprojectpage").fadeIn(800);	
     });
	 
	 $("#teprojectclose").click(function(){
    	$("#teprojectpage").hide(300);	
     });
	
});


$(document).ready(function(){
		
	
	$("#papyrus").click(function(){
		$('#papyruspage').removeClass('hidden');
    	$("#papyruspage").fadeIn(800);	
     });
	 
	 $("#papyrusclose").click(function(){
    	$("#papyruspage").hide(300);	
     });
	
});

$(document).ready(function(){
		
	
	$("#appsworld").click(function(){
		$('#appsworldpage').removeClass('hidden');
    	$("#appsworldpage").fadeIn(800);	
     });
	 
	 $("#appsworldclose").click(function(){
    	$("#appsworldpage").hide(300);	
     });
	
});

$(document).ready(function(){
		
	
	$("#goldenweblink").click(function(){
		$('#goldenweblinkpage').removeClass('hidden');
    	$("#goldenweblinkpage").fadeIn(800);	
     });
	 
	 $("#goldenweblinkclose").click(function(){
    	$("#goldenweblinkpage").hide(300);	
     });
	
});

$(document).ready(function(){
		
	
	$("#algoholics").click(function(){
		$('#algoholicspage').removeClass('hidden');
    	$("#algoholicspage").fadeIn(800);	
     });
	 
	 $("#algoholicsclose").click(function(){
    	$("#algoholicspage").hide(300);	
     });
	
});


$(document).ready(function(){
		
	
	$("#codestorm").click(function(){
		$('#codestormpage').removeClass('hidden');
    	$("#codestormpage").fadeIn(800);	
     });
	 
	 $("#codestormclose").click(function(){
    	$("#codestormpage").hide(300);	
     });
	
});


$(document).ready(function(){
		
	
	$("#ifyoucan").click(function(){
		$('#ifyoucanpage').removeClass('hidden');
    	$("#ifyoucanpage").fadeIn(800);	
     });
	 
	 $("#ifyoucanclose").click(function(){
    	$("#ifyoucanpage").hide(300);	
     });
	
});

$(document).ready(function(){
		
	
	$("#texpresso").click(function(){
		$('#texpressopage').removeClass('hidden');
    	$("#texpressopage").fadeIn(800);	
     });
	 
	 $("#texpressoclose").click(function(){
    	$("#texpressopage").hide(300);	
     });
	
});
$(document).ready(function(){
		
	
	$("#guimaniac").click(function(){
		$('#guimaniacpage').removeClass('hidden');
    	$("#guimaniacpage").fadeIn(800);	
     });
	 
	 $("#guimaniacclose").click(function(){
    	$("#guimaniacpage").hide(300);	
     });
	
});





/*Non Technical*/

$(document).ready(function(){
		
	
	$("#brainbooster").click(function(){
		$('#brainboosterpage').removeClass('hidden');
    	$("#brainboosterpage").fadeIn(800);	
     });
	 
	 $("#brainboosterclose").click(function(){
    	$("#brainboosterpage").hide(300);	
     });
	
});

$(document).ready(function(){
		
	
	$("#technodumbs").click(function(){
		$('#technodumbspage').removeClass('hidden');
    	$("#technodumbspage").fadeIn(800);	
     });
	 
	 $("#technodumbsclose").click(function(){
    	$("#technodumbspage").hide(300);	
     });
	
});

$(document).ready(function(){
		
	
	$("#myob").click(function(){
		$('#myobpage').removeClass('hidden');
    	$("#myobpage").fadeIn(800);	
     });
	 
	 $("#myobclose").click(function(){
    	$("#myobpage").hide(300);	
     });
	
});

$(document).ready(function(){
		
	
	$("#allianze").click(function(){
		$('#allianzepage').removeClass('hidden');
    	$("#allianzepage").fadeIn(800);	
     });
	 
	 $("#allianzeclose").click(function(){
    	$("#allianzepage").hide(300);	
     });
	
});

$(document).ready(function(){
		
	
	$("#axlography").click(function(){
		$('#axlographypage').removeClass('hidden');
    	$("#axlographypage").fadeIn(800);	
     });
	 
	 $("#axlographyclose").click(function(){
    	$("#axlographypage").hide(300);	
     });
	
});

$(document).ready(function(){
		
	
	$("#inquizzitive").click(function(){
		$('#inquizzitivepage').removeClass('hidden');
    	$("#inquizzitivepage").fadeIn(800);	
     });
	 
	 $("#inquizzitiveclose").click(function(){
    	$("#inquizzitivepage").hide(300);
     });
	
});

$(document).ready(function(){
		
	
	$("#admad").click(function(){
		$('#admadpage').removeClass('hidden');
    	$("#admadpage").fadeIn(800);	
     });
	 
	 $("#admadclose").click(function(){
    	$("#admadpage").hide(300);	
     });
	
});


/*IT Events*/

$(document).ready(function(){
		
	
	$("#googleit").click(function(){
		$('#googleitpage').removeClass('hidden');
    	$("#googleitpage").fadeIn(800);	
     });
	 
	 $("#googleitclose").click(function(){
    	$("#googleitpage").hide(300);	
     });
	
});

$(document).ready(function(){
		
	
	$("#hotkeys").click(function(){
		$('#hotkeyspage').removeClass('hidden');
    	$("#hotkeyspage").fadeIn(800);	
     });
	 
	 $("#hotkeysclose").click(function(){
    	$("#hotkeyspage").hide(300);	
     });
	
});


$(document).ready(function(){
		
	
	$("#techroadies").click(function(){
		$('#techroadiespage').removeClass('hidden');
    	$("#techroadiespage").fadeIn(800);	
     });
	 
	 $("#techroadiesclose").click(function(){
    	$("#techroadiespage").hide(300);	
     });
	
});

$(document).ready(function(){
		
	
	$("#brainbooster").click(function(){
		$('#brainboosterpage').removeClass('hidden');
    	$("#brainboosterpage").fadeIn(800);	
     });
	 
	 $("#brainboosterclose").click(function(){
    	$("#brainboosterpage").hide(300);	
     });
	
});




/*Workshops*/


$(document).ready(function(){
		
	
	$("#avd").click(function(){
		$('#avdpage').removeClass('hidden');
    	$("#avdpage").fadeIn(800);	
     });
	 
	 $("#avdclose").click(function(){
    	$("#avdpage").hide(300);	
     });
	
});

$(document).ready(function(){
		
	
	$("#robotsav").click(function(){
		$('#robotsavpage').removeClass('hidden');
    	$("#robotsavpage").fadeIn(800);	
     });
	 
	 $("#robotsavclose").click(function(){
    	$("#robotsavpage").hide(300);	
     });
	
});


$(document).ready(function(){
		
	
	$("#cc").click(function(){
		$('#cloudpage').removeClass('hidden');
    	$("#cloudpage").fadeIn(800);	
     });
	 
	 $("#cloudclose").click(function(){
    	$("#cloudpage").hide(300);	
     });
	
});

$(document).ready(function(){
		
	
	$("#eyebotics").click(function(){
		$('#eyeboticspage').removeClass('hidden');
    	$("#eyeboticspage").fadeIn(800);	
     });
	 
	 $("#eyeboticsclose").click(function(){
    	$("#eyeboticspage").hide(300);	
     });
	
});

$(document).ready(function(){
		
	
	$("#osca").click(function(){
		$('#oscapage').removeClass('hidden');
    	$("#oscapage").fadeIn(800);	
     });
	 
	 $("#oscaclose").click(function(){
    	$("#oscapage").hide(300);	
     });
	
});


$(document).ready(function(){
		
	
	$("#funzonelink").click(function(){
		$('#funzonepage').removeClass('hidden');
    	$("#funzonepage").fadeIn(800);	
     });
	 
	 $("#funzoneclose").click(function(){
    	$("#funzonepage").hide(300);	
     });
	
});


$(document).ready(function(){
		
	
	$("#ethical").click(function(){
		$('#ethicalpage').removeClass('hidden');
    	$("#ethicalpage").fadeIn(800);	
     });
	 
	 $("#ethicalclose").click(function(){
    	$("#ethicalpage").hide(300);	
     });
	
});

$(document).ready(function(){
		
	
	$("#linuxication").click(function(){
		$('#linuxicationpage').removeClass('hidden');
    	$("#linuxicationpage").fadeIn(800);	
     });
	 
	 $("#linuxicationclose").click(function(){
    	$("#linuxicationpage").hide(300);	
     });
	
});

$(document).ready(function(){
		
	
	$("#contraption").click(function(){
		$('#contraptionpage').removeClass('hidden');
    	$("#contraptionpage").fadeIn(800);	
     });
	 
	 $("#contraptionclose").click(function(){
    	$("#contraptionpage").hide(300);	
     });
	
});


$(document).ready(function(){
		
	
	$("#scoreplus").click(function(){
		$('#scorepluspage').removeClass('hidden');
    	$("#scorepluspage").fadeIn(800);	
     });
	 
	 $("#scoreplusclose").click(function(){
    	$("#scorepluspage").hide(300);	
     });
	
});






	
	$("img.lazy").show().lazyload();
	
    
	/* 
**
** Page close on up scroll
**
** */

$(window).bind("scroll", function() {
	    if (($(this).scrollTop() < 900) && ($(this).scrollTop() < 1730)) {
		
		$("#robowarspage").stop().fadeOut(1200);
		$("#roboticapage").stop().fadeOut(1200);
		$("#linetracerpage").stop().fadeOut(1200);
	
		
		
		
    }
});


/*Register from event pages*/





(function($) {
	$(function() {
		$("#scroller").simplyScroll({
			pauseOnTouch: true,
			pauseOnHover: false
		});
	});
})(jQuery);