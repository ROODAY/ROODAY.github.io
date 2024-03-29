$(window).load(function () {
	$("#top").height($(window).height - $("#navbar").height());

	// $('body').mousemove(function (e) {
	// 	var x = -(e.pageX + this.offsetLeft) / 20;
	// 	var y = -(e.pageY + this.offsetTop) / 20;
	// 	$(".jumbotron").css('background-position', x + 'px ' + y + 'px');
	// });

	$("#loading-blue").css({
		"margin-left": "-54px",
		"background-color": "#FFF"
	});
	$("#loading-purple").css({
		"margin-left": "-53px",
		"background-color": "#FFF"
	});
	$("#loading-red").css({
		"margin-left": "-52px",
		"background-color": "#FFF"
	});
	$("#loading-yellow").css({
		"margin-left": "-51px",
		"background-color": "#FFF"

	});

	setTimeout(function () {
		$("#circle-container").css({
			"z-index": "9999",
			"display": "none"
		});
		$("#grower").css({
			"background": 'url("../assets/images/space.jpg")',
			"background-size": "cover",
			"background-position": "fixed",
			"border-radius": "0",
			"width": "100vw",
			"height": "100vh"
		});
		setTimeout(function () {
			$("#loading-container").css("opacity", "0");
			setTimeout(function () {
				$("#loading-container").css("display", "none");
				$(".jumbotron *, .stars").css({
					"box-shadow": "0px 0px 0px rgba(0,0,0,0.23)",
					"opacity": "1"
				});
				$("#scrolldown").css("opacity", "1");
			}, 1);
		}, 1);
	}, 1);
});

$(document).ready(function () {
	var sp = new Space(1000);
	var navbarheight = $("#navbar").height();
	var listener = new window.keypress.Listener();
	$('#rss-icon').tooltip({ placement: 'right' });

	if (!window.jXHR) {
		var jxhr = document.createElement('script');
		jxhr.type = 'text/javascript';
		jxhr.src = 'js/vendor/jXHR.js';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(jxhr, s);
	}


	$('.nav a').on('click', function () {
		if ($(window).width() <= 767) {
			$(".navbar-toggle").click();
		}
	});


	listener.sequence_combo("up up down down left right left right b a enter", function () {
		var s = document.createElement('script');
		s.setAttribute('src', 'js/tdfw.js');
		document.body.appendChild(s);
	}, true);
	listener.sequence_combo("a b a c a b b", function () {
		var i, s, ss = ['http://kathack.com/js/kh.js', 'http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js'];
		for (i = 0; i != ss.length; i++) {
			s = document.createElement('script');
			s.src = ss[i];
			document.body.appendChild(s);
		} void (0);
	}, true);
	listener.sequence_combo("l u d i c r o u s", function () {
		var audio = new Audio('assets/audio/hyperspace.mp3');
		audio.play();
		var starSpeedInterval = setInterval(function () {
			if (starSpeed > 500) {
				starSpeed -= 50;
			} else {
				clearInterval(starSpeedInterval);
			}
		}, 1);
		setTimeout(function () {
			clearInterval(starSpeedInterval);
			starSpeed = 50000;
		}, 10000);

	}, true);
	listener.sequence_combo("n i c e", function () {
		var url = window.location.href + "nice";
		$("#transition").css({
			"margin-top": "0",
			"background": "#fff"
		});
		setTimeout(function () {
			window.location.href = url;
		}, 1000);
	}, true);
	listener.sequence_combo("b l e u", function () {
		window.bleu = true;
	}, true);

	var projects = $('[data-project-image]');
	for (var i = 0; i < projects.length; i++) {
		var url = $(projects[i]).attr("data-project-image")
		$(projects[i]).css("background", 'linear-gradient(rgba(0, 0, 0, 0.45),rgba(0, 0, 0, 0.45)), url("' + url + '")');
	}

	$(".schoolworklink").click(function () {
		var link = $(this).data("link");
		var color = $(this).data("color");
		$("#transition").css({
			"margin-top": "0",
			"background": color
		});
		setTimeout(function () {
			window.location.href = link;
		}, 1000);
	});

	$(function () {
		$('a[href*=#]:not([href=#])').click(function () {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top - navbarheight
					}, 1000);
					return false;
				}
			}
		});
	});

	$(window).scroll(function () {
		if ($(window).scrollTop() > $(window).height()) {
			$(".navbar").addClass("nav-fixed");
			$("#spacer").css("display", "block");
		} else {
			$(".navbar").removeClass("nav-fixed");
			$("#spacer").css("display", "none");
		}
		if ($(window).scrollTop() > 30) {
			$("#scrolldown").css("opacity", "0.0");
		} else {
			$("#scrolldown").css("opacity", "1.0");
		}
	});

	$(window).resize(function () {
		$("#top").height($(window).height - $("#navbar").height());
	});
});