$(function() {
    filterMarkers = function (category) {
        for (i = 0; i < markers1.length; i++) {
            marker = gmarkers1[i];
            if (marker.category == category || category == 'all') {
                marker.setMap(map);
                // marker.setAnimation(google.maps.Animation.DROP);
            }
            else {
                marker.setMap(null)
            }
        }
    }
    var gmarkers1 = [];
    var markers1 = [];
    var infowindow = new google.maps.InfoWindow({
        content: ''
    });
    markers1 = [
                ['0', '', 50.451456, 30.597852, 'apteka', '/img/pin/apteka.png', 'Аптека Низких Цен'],
                ['1', '', 50.456821, 30.623900, 'medicine', '/img/pin/medicine.png', 'КГКБ №2'],
                ['2', '', 50.456937, 30.586023, 'univer', '/img/pin/univer.png', 'Колледж им.Сухомлинского'],
                ['3', '', 50.451685, 30.611413, 'school', '/img/pin/school.png', 'Школа #148'],
                ['4', '', 50.448469, 30.614083, 'garden', '/img/pin/garden.png', ' Marmalade ЯСЛИ'],
                ['5', '', 50.438122, 30.615120, 'sport', '/img/pin/sport.png', 'FreeStyle'],
                ['6', '', 50.453349, 30.598362, 'mall', '/img/pin/mall.png', 'Торговый центр'],
                ['7', '', 50.453605, 30.594232, 'market', '/img/pin/market.png', 'Novus'],
                ['8', '', 50.458501, 30.595862, 'school', '/img/pin/school.png', 'Школа №65'],
                ['9', '', 50.447925, 30.594761, 'main', '/img/pin/Crystal.png', 'CRYSTAL PARK; <br> ул.Р.Окипной , 7'],
                                ];
    function addMarker(marker) {
        var category = marker[4];
        var title = marker[1];
        var pos = new google.maps.LatLng(marker[2], marker[3]);
        var content = marker[6];
        var markerIcon = {
            url : marker[5]
        };
        marker1 = new google.maps.Marker({
            title: title,
            position: pos,
            category: category,
            map: map,
            icon: markerIcon,
            // animation: google.maps.Animation.DROP,
        });
        gmarkers1.push(marker1);
        // Marker click listener
        google.maps.event.addListener(marker1, 'click', (function (marker1, content) {
            return function () {
                infowindow.setContent(content);
                infowindow.open(map, marker1);
                map.panTo(this.getPosition());
            }
        })(marker1, content));
    }
      // Create the map
    var map = new google.maps.Map($('#mapCrystal')[0], {
        zoom: 14,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        scrollwheel: true,
        fullscreenControl: false,
        center: new google.maps.LatLng(50.449325, 30.591628)
    });

    for (i = 0; i < markers1.length; i++) {
        addMarker(markers1[i]);
    }
		$.getJSON("/js/mapStyle.json", function(data) {
	         map.setOptions({styles: data});
	     });

});




/* init map for Sales*/
$(function() {
    var gmarkers1 = [];
    var markers1 = [];
    var infowindow = new google.maps.InfoWindow({
        content: ''
    });
    markers1 = [
                ['0', '', 50.447925, 30.594761, 'main', '/img/pin/Crystal.png', 'CRYSTAL PARK; <br> ул.Р.Окипной , 7'],
                ['1', '', 50.433256, 30.551712, 'main', '/img/pin/sales.png', 'StSophia; <br> ул. Лаврская, 16 лит «В»'],
                                ];
    function addMarker(marker) {
        var category = marker[4];
        var title = marker[1];
        var pos = new google.maps.LatLng(marker[2], marker[3]);
        var content = marker[6];
        var markerIcon = {
            url : marker[5]
        };
        marker1 = new google.maps.Marker({
            title: title,
            position: pos,
            category: category,
            map: map,
            icon: markerIcon,
            // animation: google.maps.Animation.DROP,
        });
        gmarkers1.push(marker1);
        // Marker click listener
        google.maps.event.addListener(marker1, 'click', (function (marker1, content) {
            return function () {
                infowindow.setContent(content);
                infowindow.open(map, marker1);
                // map.panTo(this.getPosition());
            }
        })(marker1, content));
    }
    var centerX = 50.452379;
  	var centerY = 30.49924;

    if($(window).width() < 748) {
      var centerX = 50.433256;
    	var centerY = 30.551712;

  	}
      // Create the map
    var map = new google.maps.Map($('#uc_sales__inner')[0], {
        zoom: 12,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        scrollwheel: true,
        fullscreenControl: false,
        center: new google.maps.LatLng(centerX, centerY)
    });

    for (i = 0; i < markers1.length; i++) {
        addMarker(markers1[i]);
    }
		$.getJSON("/js/mapStyle.json", function(data) {
	         map.setOptions({styles: data});
	     });

});
