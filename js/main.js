jQuery(function(){
	var headerSlider = $('#headerSlider');
	headerSlider.owlCarousel({
		items: 1,
  		margin: 200,
  		dots: false,
  		smartSpeed: 1000,
  		onInitialized : counter,
  		onTranslated : counter
	});

		$('#headerSliderLeft').click(function() {
		    headerSlider.trigger('prev.owl.carousel');
		})
		
		$('#headerSliderRight').click(function() {
		    headerSlider.trigger('next.owl.carousel');
		})

		function counter(event) {
   		var element   = event.target;
    	var items     = event.item.count;
    	var item      = event.item.index + 1;
    		if(item > items) {
    		item = item - items
  			}
		$('.slide-controls-number__active').text(item)
		$('.slide-controls-number__total').text(items)
  		}

	const shopSlider = $('#shopSlider');
	shopSlider.owlCarousel({
  		loop: true,
  		margin: 2,
  		dots: false,
  		smartSpeed: 1000,
  		responsive: {
  			0:{
  				items: 1,
  			},
  			1254:{
  				items: 3,
  			}
  		}
	});

	$('#shopSliderLeft').click(function() {
		    shopSlider.trigger('prev.owl.carousel');
		})
		
	$('#shopSliderRight').click(function() {
	    shopSlider.trigger('next.owl.carousel');
	})
});