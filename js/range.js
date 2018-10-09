var ranges = document.querySelectorAll('.range-init');
var sliders = [];

ranges.forEach(function(range) {
	$(range).ionRangeSlider({
		type: "double",
		grid: true,
		min: range.value.split('/')[0],
		max: range.value.split('/')[1],
		from: range.value.split('/')[0],
		to: range.value.split('/')[1],
		hide_min_max: true,
		grid: false,
		onChange: function(data){
		 $('.results').addClass('active');
		 },
	 	onFinish: function (data){
			$('.results').removeClass('active');
			updateInputs ();
			 }
	})
	// sliders.push($(range).data("ionRangeSlider"));
});


tmas=['rooms','floor','square','price'];


function updateInputs (data) {
		var vals=[];
		for(i=0; i<tmas.length; i++){
				vals[i]=$(".range-init."+tmas[i]+'-slider').data("ionRangeSlider");
}
		data = $('.results tbody tr');
		var n=0;


		for(i=0; i<data.length; i++){

		if( data[i].dataset.rooms>=vals[0].old_from && data[i].dataset.rooms<=vals[0].old_to &&
				data[i].dataset.floor>=vals[1].old_from && data[i].dataset.floor<=vals[1].old_to &&
				data[i].dataset.square>=vals[2].old_from && data[i].dataset.square<=vals[2].old_to&&
				data[i].dataset.price>=vals[3].old_from && data[i].dataset.price<=vals[3].old_to

				){
		data[i].style.display='';
		}else{
		data[i].style.display='none';
		n++;
		}

		}
		 if (n==data.length) { $('.not_found').css("display", "block");    }
		 else { $('.not_found').css("display", "none");}

				}

 $('.sort').click( function() {
	 window.location = $(this).attr('data-href');
 });
