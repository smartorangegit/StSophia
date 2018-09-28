function mapMaker(id, longt, lat) {
	var id = id;
	flag_item = 1;
	var
		// contentString1 = '<div class="map__info-marker">' +
		// '<h3 style="font-size: 30px;text-align: center;">Happy House</h3>' +
		// '<p>Київ, вул.Предславинська, 35 </p>' +
		// '</div>',
		contentString2 = '<div class="map__info-marker">RRYC</div>',
		contentString3 = '<div class="map__info-marker">Riviera</div>', //ул. Раисы Окипной, 18,
		contentString4 = '<div class="map__info-marker">Hilton</div>',
		contentString5 = '<div class="map__info-marker">Cristal Park</div>',
		contentString6 = '<div class="map__info-marker">Arsenal</div>',
		contentString7 = '<div class="map__info-marker">The Lakes</div>', //11, Ясинуватський провулок,
		contentString8 = '<div class="map__info-marker">Ambassador</div>';// вул.І Франка, 4В
		contentString9 = '<div class="map__info-marker">Alpina</div>';
		contentString10 = '<div class="map__info-marker">StSophia</div>';

	var locations = [
				// [contentString1, 50.439367, 30.544927, "/img/map/pin/bank.png"],
					[contentString2, 50.447289, 30.587986, "/img/main/pin/rryc.png"],
					[contentString3, 50.447866, 30.588796, "/img/main/pin/Riviera.png"],
					[contentString4, 50.445337, 30.504948, "/img/main/pin/hilton.png"],
					[contentString5, 50.455815, 30.452238, "/img/main/pin/Crystal.png"],
					[contentString6, 50.438094, 30.557961, "/img/main/pin/Arsenal-logo.png"],
					[contentString7, 50.409298, 30.507014, "/img/main/pin/Lakes.png"],
					[contentString8, 50.450471, 30.509204, "/img/main/pin/Ambassador.png"],
					[contentString9, 50.425056, 30.500760, "/img/main/pin/alpina.png"],
					[contentString10, 50.433256, 30.551712, "/img/main/pin/sophia.png"],
      ];
			// 50.438000, 30.520200
	var centerX = 50.438000;
	var centerY = 30.520200;

	if($(window).width() < 748) {
		centerY = locations[0][2];
	}
	var map = new google.maps.Map(document.getElementById(id), {
			zoom: 13,
			scrollwheel: false,
			mapTypeControl: false,
			streetViewControl: false,
			// rotateControl: boolean,
			fullscreenControl: false,
			center: new google.maps.LatLng( centerX, centerY),
			mapTypeId: google.maps.MapTypeId.ROADMAP
		});

	var infowindow = new google.maps.InfoWindow();
	var marker, i;

	for (i = 0; i < locations.length; i++) {
	    marker = new google.maps.Marker({
	        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
	        map: map,
	        icon: {
	            url: locations[i][3],
	            // scaledSize: new google.maps.Size(30, 40)
	        }
	    });
	    infowindow.setContent(locations[i][0]);
	    // infowindow.open(map, marker);
	    google.maps.event.addListener(marker, 'click', (function(marker, i) {
	        return function() {
	            infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
	        }
	    })(marker, i));
	}

	$.getJSON("/js/mapStyle.json", function(data) {
         map.setOptions({styles: data});
     });

}
if (document.getElementById('map')) {
	mapMaker('map', 50.423854);
}

// if (document.getElementById('map')) {
// 	mapMaker('map');
// }
