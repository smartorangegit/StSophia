var ranges = document.querySelectorAll('.range-init');
var tmas=['rooms','floor','all_room','price'];
var sliders = [];
var flats;
var limit = 15;
var offset = 0;
var count  = 0;
var shows  = [];


ranges.forEach(function(range) {
	$(range).ionRangeSlider({
		type: "double",
		grid: true,
		hide_min_max: true,
		grid: false,
		onChange: function(data){
		 // $('.results').addClass('active');
		 $('.uc_filter__results_box').addClass('blur');
		 $('.fb_filter__results_box').addClass('blur');
		 },
	 	onFinish: function (data){
			// $('.results').removeClass('active');
			$('.uc_filter__results_box').removeClass('blur');
			$('.fb_filter__results_box').removeClass('blur');
			updateInputs ();
			 }
	})
	 sliders.push($(range).data("ionRangeSlider"));
});


$('#reset_button').click(function(){
    sliders.forEach(function(slider) {
        slider.reset();
        slider.update({
            from: slider.old_from,
            to: slider.old_to
        });
    });

    updateInputs();
})

function updateInputs () {
    var vals = [];
    var n = 0;
    var show = [];

    for(i=0; i<tmas.length; i++){
        vals[i] = $("#"+tmas[i]+'Range').data("ionRangeSlider");
    }

    flats.data.forEach(function(flat, i) {

        if (flat.rooms>=vals[0].old_from && flat.rooms<=vals[0].old_to &&
            flat.floor>=vals[1].old_from && flat.floor<=vals[1].old_to &&
            flat.all_room>=vals[2].old_from && flat.all_room<=vals[2].old_to &&
            flat.price_>=vals[3].old_from && flat.price_<=vals[3].old_to
            ) {
            show[flat.id] = flat.id;
            offset = 0;
            n++;
        }
    });

    count = n;
    dragFilter(shows =show);
}

function dragFilter(show){
    var draw = '';
    var n = set_ofset = 0;

    flats.data.forEach(function(flat, i) {

        if (show != undefined) {
            if (show[flat.id] == undefined) return;
        }

        if (n>=limit)  return flat;

        if (set_ofset<offset) {
            set_ofset++;
            return;
        }

        draw+= '<div  class="filter_results__item fadeIn"><div id="flat-'+i+'" class="filter_results__item__inner">'+
            '<div  class="filter_results__img">'+
            '<img src="'+flat.img+'" alt="Планировка квартиры '+flat.number+'">'+
            '</div>'+
            '<div class="filter_results__info">'+
            '<table class="filter_results__table">'+
            '<tr>  <td>Дом</td><td>'+flat.build+'</td></tr>'+
            '<tr>  <td>Секция</td><td>'+flat.sec+'</td></tr>'+
            '<tr>  <td>Этаж</td><td>'+flat.floor+'</td></tr>'+
            '<tr>  <td>Комнат</td><td>'+flat.rooms+'</td></tr>'+
            '<tr>  <td>Площадь, м<sup>2</sup></td><td>'+flat.all_room+'</td></tr>'+
            '<tr>  <td>Тип</td><td>'+flat.type+'</td></tr>'+
            '</table>'+
            '</div>'+
            '</div></div>';
        n++;
    });

    if ((offset+n)<count) {
        $('.filter__few').fadeIn();
    } else {
        $('.filter__few').fadeOut();
    }

    if (offset==0) {
        $('#flats-box').html(draw)
    } else{
        $("#flats-box").append(draw);
    }

    $('#resultsNum').html(count);
}


function getMessages(message) {
    if (sessionStorage.getItem(message) == null) {
        message =  'Not found in json! '+ message;
    } else {
        message = sessionStorage.getItem(message);
    }

    return message;
}



$(function() {
    var urlArray = location.pathname.split( '/' );
    var url = '/project/flats/';
    var id  = urlArray[1];
    var	lang = 'default';

    if (urlArray[1].length == 2) {
        url = '/'+urlArray[1]+url;
        id  = urlArray[2];
        lang = urlArray[1];
    }

    $.getJSON('/languages/'+lang+'.json?v='+Date.now(), function(data) {
        $.each(data, function(key, val) {

            sessionStorage.setItem(key,  val);
            //items[key]=val
        });
    });

    $.ajax({
        url         :  url,
        type        : 'POST',
        data        : {'id':id.replace("project","")},
        success     : function(data){

            flats = JSON.parse(data);
            count = flats.quantity;
            updateInputs();
            console.log(flats);

            infoMap(flats.map);
            consultationMap(flats.map);
        }
    });
});


$('#see_more').bind('click', function() {
    offset+=limit;
    dragFilter(shows);
})

$("body").on('click','.filter_results__item__inner',function(){
    $('.overlay').fadeIn(300)
    $('.popup_flatplan').fadeIn(800)
    var id = this.id;
        id = id.replace("flat-","");
    var flat = flats.data[id];

    var properties = '<div class="popup_img">'+
                       '<img src="'+flat.img+'" alt="План помещения '+flat.type+'">'+
                     '</div>'+
                     '<div class="popup_info">'+
                       '<table class="filter_results__table">'+
                           '<tr><td>Площадь</td><td class="bold">М<sup>2</sup></td></tr>'+
                           '<tr><td>Общая</td><td>'+flat.all_room+'</td></tr>'+
                           '<tr><td>Жилая</td><td>'+flat.life_room+'</td></tr>'+
                           '<tr><td>Комнат</td><td>'+flat.rooms+'</td></tr>';

    Object.values(flat.properties).forEach(function(property, i) {
        properties+= '<tr><td>'+property.property_name+'</td><td>'+property.property_flat+'</td></tr>';
    })

        properties+= '</table></div>';

    var popup_bottom = '<div data-id="'+flat.id+'"   class="grey_button favorite">Добавить в избранное</div>'+
                       '<div data-id="'+flat.id+'"  class="grey_button reservation">Заявка на бронирование</div>'+
                       '<a class="grey_button" href="#">Скачать PDF квартиры</a>';

    $('.popup__content ').html(properties);
    $('.popup_bottom').html(popup_bottom);
});

$('.popup_flatplan__close').click(function(){
    $('.popup_flatplan').fadeOut(300)
    $('.overlay').fadeOut(800)
});

$("body").on('click','.reservation',function(){
    $('#reservation-popup').fadeIn(300)
    $('.popup_flatplan').css("z-index", "59");

   $('#reservation input[name="callback_text"]').val(this.dataset.id);
});

$('#close_reservation').click(function(){
    $('#reservation-popup').fadeOut(300)
    $('.popup_flatplan').css("z-index", "61");
});


function consultationMap(marker) {
    var gmarkers1 = [];
    var markers1 = [];
    var infowindow = new google.maps.InfoWindow({
        content: ''
    });
    var centerX = 50.452379;
    var centerY = 30.49924;
    // if($(window).width() < 748) {
    //     var centerX = 50.433256;
    //     var centerY = 30.551712;
    // }

    if (marker.projects_coor.length) {
        markers1.push(['0', '', marker.projects_coor[0][0], marker.projects_coor[0][1], 'main', marker.marker, marker.projects_coor[1]])
        centerX = marker.projects_coor[0][0];
        centerY = marker.projects_coor[0][1];

        // if($(window).width() < 748) {
        //     centerX = marker.projects_coor[0][0]-0,0192;
        //     centerY = marker.projects_coor[0][1]+0,052;
        // }
    }
    if ( marker.project_coor_sales!= undefined) {
        markers1.push(['1', '', marker.project_coor_sales[0][0], marker.project_coor_sales[0][1], 'main', '/img/pin/sales.png', marker.project_coor_sales[1]])
    }

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
    // Create the map
    var map = new google.maps.Map($('#map_sales__inner')[0], {
        zoom: 12,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        scrollwheel: false,
        fullscreenControl: false,
        center: new google.maps.LatLng(centerX, centerY)
    });

    for (i = 0; i < markers1.length; i++) {
        addMarker(markers1[i]);
    }
    $.getJSON("/js/mapStyle.json", function(data) {
        map.setOptions({styles: data});
    });
}

function infoMap(marker) {
    filterMarkers = function (category) {
        for (i = 0; i < markers1.length; i++) {
            marker = gmarkers1[i];
						var markerMain = gmarkers1.find(item => item.category === 'main');

            if (marker.category == category || category == 'all') {
                marker.setMap(map);
								markerMain.setMap(map);
                // marker.setAnimation(google.maps.Animation.DROP);
            }
            else {
                marker.setMap(null);
								markerMain.setMap(map);
            }
        }
    }
    var gmarkers1 = [];
    var markers1 = [];
    var infowindow = new google.maps.InfoWindow({
        content: ''
    });
    var centerX = 50.452379;
    var centerY = 30.49924;

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
    ];


    if (marker.projects_coor.length) {
        markers1.push([markers1.length, '', marker.projects_coor[0][0], marker.projects_coor[0][1], 'main', marker.marker, marker.projects_coor[1]])
        centerX = marker.projects_coor[0][0];
        centerY = marker.projects_coor[0][1];
    }

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
        scrollwheel: false,
        fullscreenControl: false,
        center: new google.maps.LatLng(centerX, centerY)
    });

    for (i = 0; i < markers1.length; i++) {
        addMarker(markers1[i]);
    }
    $.getJSON("/js/mapStyle.json", function(data) {
        map.setOptions({styles: data});
    });
}
