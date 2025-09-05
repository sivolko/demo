
(function() {
		// Back to Top Button & Dark Mode Toggle Functionality
		document.addEventListener('DOMContentLoaded', function() {
			var backToTopBtn = document.getElementById('backToTop');
			window.addEventListener('scroll', function() {
				if (window.scrollY > 300) {
					backToTopBtn.style.display = 'block';
				} else {
					backToTopBtn.style.display = 'none';
				}
			});
			backToTopBtn.addEventListener('click', function() {
				window.scrollTo({ top: 0, behavior: 'smooth' });
			});

				// Dark Mode Toggle
				var darkModeToggle = document.getElementById('darkModeToggle');
				var darkModeIcon = document.getElementById('darkModeIcon');
				function setDarkModeIcon() {
					if (document.body.classList.contains('dark-mode')) {
						darkModeIcon.classList.remove('fa-moon');
						darkModeIcon.classList.add('fa-sun');
					} else {
						darkModeIcon.classList.remove('fa-sun');
						darkModeIcon.classList.add('fa-moon');
					}
				}
				if (darkModeToggle && darkModeIcon) {
					// Load preference
					if (localStorage.getItem('darkMode') === 'enabled') {
						document.body.classList.add('dark-mode');
					}
					setDarkModeIcon();
					darkModeToggle.addEventListener('click', function() {
						document.body.classList.toggle('dark-mode');
						setDarkModeIcon();
						if (document.body.classList.contains('dark-mode')) {
							localStorage.setItem('darkMode', 'enabled');
						} else {
							localStorage.setItem('darkMode', 'disabled');
						}
					});
				}
		});
	'use strict';

	var tinyslider = function() {
		var el = document.querySelectorAll('.testimonial-slider');

		if (el.length > 0) {
			var slider = tns({
				container: '.testimonial-slider',
				items: 1,
				axis: "horizontal",
				controlsContainer: "#testimonial-nav",
				swipeAngle: false,
				speed: 700,
				nav: true,
				controls: true,
				autoplay: true,
				autoplayHoverPause: true,
				autoplayTimeout: 3500,
				autoplayButtonOutput: false
			});
		}
	};
	tinyslider();

	


	var sitePlusMinus = function() {

		var value,
    		quantity = document.getElementsByClassName('quantity-container');

		function createBindings(quantityContainer) {
	      var quantityAmount = quantityContainer.getElementsByClassName('quantity-amount')[0];
	      var increase = quantityContainer.getElementsByClassName('increase')[0];
	      var decrease = quantityContainer.getElementsByClassName('decrease')[0];
	      increase.addEventListener('click', function (e) { increaseValue(e, quantityAmount); });
	      decrease.addEventListener('click', function (e) { decreaseValue(e, quantityAmount); });
	    }

	    function init() {
	        for (var i = 0; i < quantity.length; i++ ) {
						createBindings(quantity[i]);
	        }
	    };

	    function increaseValue(event, quantityAmount) {
	        value = parseInt(quantityAmount.value, 10);

	        console.log(quantityAmount, quantityAmount.value);

	        value = isNaN(value) ? 0 : value;
	        value++;
	        quantityAmount.value = value;
	    }

	    function decreaseValue(event, quantityAmount) {
	        value = parseInt(quantityAmount.value, 10);

	        value = isNaN(value) ? 0 : value;
	        if (value > 0) value--;

	        quantityAmount.value = value;
	    }
	    
	    init();
		
	};
	sitePlusMinus();


})()