function mapMaker(id, longt, lat) {
	var id = id;
	flag_item = 1;
	var
		contentString2 = '<div class="map__info-marker">' + '<p class="content_name">Riviera Riverside Yacht Club</p>'+'<p class="content_text">г.Киев, ул.Раисы Окипной, 26</p>'+'<a class="grey_button" href="https://goo.gl/maps/iwma2zWcxLL2" target="_blank">Открыть в Google Maps</a></div>';
		contentString3 = '<div class="map__info-marker">' + '<p class="content_name">Riviera Riverside</p>'+'<p class="content_text">г.Киев, ул.Раисы Окипной, 26</p>'+'<a class="grey_button" href="https://goo.gl/maps/1nfAkHnCaxj" target="_blank">Открыть в Google Maps</a></div>';
		contentString4 = '<div class="map__info-marker">' + '<p class="content_name">Hilton</p>'+'<p class="content_text">г.Киев, бул.Т.Шевченко, 30</p>'+'<a class="grey_button" href="https://goo.gl/maps/vP8WdzaBrxT2" target="_blank">Открыть в Google Maps</a></div>';
		contentString5 = '<div class="map__info-marker">' + '<p class="content_name">Crystal Park</p>'+'<p class="content_text">г.Киев, проспект Победы, 42</p>'+'<a class="grey_button" href="https://goo.gl/maps/wt5h6mniZHH2" target="_blank">Открыть в Google Maps</a></div>';
		contentString6 = '<div class="map__info-marker">' + '<p class="content_name">Arsenal</p>'+'<p class="content_text">г.Киев</p>'+'<a class="grey_button" href="" target="_blank">Открыть в Google Maps</a></div>';
		contentString7 = '<div class="map__info-marker">' + '<p class="content_name">The Lakes</p>'+'<p class="content_text">г.Киев, Ясиноватский переулок, 11</p>'+'<a class="grey_button" href="https://goo.gl/maps/c2m7B8C2Pwx" target="_blank">Открыть в Google Maps</a></div>';
		contentString8 = '<div class="map__info-marker">' + '<p class="content_name">Ambassador</p>'+'<p class="content_text">г.Киев, ул.Франка, 4В</p>'+'<a class="grey_button" href="https://goo.gl/maps/K13Tm9irzS12" target="_blank">Открыть в Google Maps</a></div>';
		contentString9 = '<div class="map__info-marker">' + '<p class="content_name">Alpina</p>'+'<p class="content_text">г.Киев</p>'+'<a class="grey_button" href="">Открыть в Google Maps</a></div>';
		contentString10 = '<div class="map__info-marker">' + '<p class="content_name">StSophia</p>'+'<p class="content_text">офис продаж</p>'+'<a class="grey_button" href="https://goo.gl/maps/F72Hw3kXcQq">Открыть в Google Maps</a></div>';

		// contentString10 = '<div class="map__info-marker">StSophia</div>';

	var locations = [
		// [contentString1, 50.439367, 30.544927, "/img/pin/bank.png"],
			[contentString2, 50.447289, 30.586, "/img/pin/RRYC1.png"],
			[contentString3, 50.447866, 30.590, "/img/pin/RR.png"],
			[contentString4, 50.445337, 30.504948, "/img/pin/hilton.png"],
			[contentString5, 50.455815, 30.452238, "/img/pin/crystalPark.png"],
			[contentString6, 50.438094, 30.557961, "/img/pin/arsenal.png"],
			[contentString7, 50.409298, 30.507014, "/img/pin/Lakes.png"],
			[contentString8, 50.450471, 30.509204, "/img/pin/ambassador.png"],
			[contentString9, 50.425056, 30.500760, "/img/pin/alpina.png"],
			[contentString10, 50.433177, 30.550730, "/img/pin/sophia.png"],
      ];
			// 50.438000, 30.520200
	var centerX = 50.438000;
	var centerY = 30.520200;
	var zoomPos = 13;

	if($(window).width() < 748) {
		// centerY = locations[0][2];
		zoomPos = 12;

	}
	var map = new google.maps.Map(document.getElementById(id), {
			zoom: zoomPos,
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
	            scaledSize: new google.maps.Size(70, 90)
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
if (document.getElementById('sophia')) {
	mapMaker('sophia', 50.423854);

}

// if (document.getElementById('map')) {
// 	mapMaker('map');
// }
