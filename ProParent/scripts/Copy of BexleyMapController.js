(function (global) {

    var map,
        isLoading = true;

    var addresses = [
       {type:0, coords: "51.484957, 0.06622900000002119", onClickHTML:"<div> Brookhill Children's Centre</br>130 Brookhill Road, Woolwich</br>SE18 6UZ.</br>0208 319 5320</div> ",markerImageURL:"http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|FE7569 "}
,{type:0, coords: "51.486466, 0.11291000000005624", onClickHTML:"<div> Abbey Wood Nursery School Children's Centre </br>Dahlia Road, Abbey Wood</br>SE2 0SX.</br>0208 311 0619 ext 4</div> ",markerImageURL:"http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|FE7569 "}
,{type:0, coords: "51.448811, 0.08557599999994636", onClickHTML:"<div> Alderwood Primary School and Children's Centre</br>Rainham Close, Eltham</br>SE9 2JH.</br>0208 850 5927</div> ",markerImageURL:"http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|FE7569 "}
,{type:0, coords: "51.484957, 0.06622900000002119", onClickHTML:"<div> Brookhill Children's Centre</br>130 Brookhill Road, Woolwich</br>SE18 6UZ.</br>0208 319 5320</div> ",markerImageURL:"http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|FE7569 "}
,{type:0, coords: "51.490801, 0.05277699999999186", onClickHTML:"<div> Cardwell Children's Centre</br>Frances Street, Woolwich</br>SE18 5LP.</br>0208 854 7342</div> ",markerImageURL:"http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|FE7569 "}
,{type:0, coords: "51.451103, 0.05721399999993082", onClickHTML:"<div> Children's Centre Services at Eltham Centre</br>2 Archery Road, Eltham</br>SE9 1HA.</br>07904917409</div> ",markerImageURL:"http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|FE7569 "}
,{type:0, coords: "51.486192, 0.07811800000001767", onClickHTML:"<div> Children's Centre Services at Glyndon</br>75 Raglan Road, Plumstead</br>SE18 7JD.</br> 020 8855 9981</div> ",markerImageURL:"http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|FE7569 "}
,{type:0, coords: "51.47879, 0.08505089999994197", onClickHTML:"<div> Children's Centre Services at The Slade and Plumstead Common</br>Pendrell Street, Plumstaed</br>SE18 2PJ.</br>0208 836 9252</div> ",markerImageURL:"http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|FE7569 "}
,{type:0, coords: "51.500382, 0.09556299999997009", onClickHTML:"<div> Discovery Primary School and Children's Centre</br>Battery Road, West Thamesmead</br>SE28 0JN.</br>0208 855 2470</div> ",markerImageURL:"http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|FE7569 "}
,{type:0, coords: "51.478431, 0.06467399999996814", onClickHTML:"<div> Eglinton Primary School and Children's Centre</br>Paget Rise, Plumstead</br>SE18 3PY.</br>0208 854 6917</div> ",markerImageURL:"http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|FE7569 "}
,{type:0, coords: "51.434064, 0.057264000000031956", onClickHTML:"<div> Greenacres Primary School and Children's Centre</br>Witherston Way, Eltham</br>SE9 1QG.</br>0208 860 0186</div> ",markerImageURL:"http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|FE7569 "}
,{type:0, coords: "51.47877, 0.021003000000064276", onClickHTML:"<div> Invicta Primary School and Children's Centre</br>Invicta Road, Charlton</br>SE3 7HE.</br>0208 293 5037</div> ",markerImageURL:"http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|FE7569 "}
,{type:0, coords: "51.493806, 0.11661500000002434", onClickHTML:"<div> Mulberry Park Children's Centre</br>Boxgrove Road, Abbey Wood</br>SE2 9JP.</br>0208 310 0040  Ext 2</div> ",markerImageURL:"http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|FE7569 "}
,{type:0, coords: "51.488555, 0.061457000000018525", onClickHTML:"<div> Mulgrave Primary School and Children Centre</br>Rectory Place, Woolwich</br>SE18 5DA.</br>0208 319 5727</div> ",markerImageURL:"http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|FE7569 "}
,{type:0, coords: "51.485705, 0.09847999999999501", onClickHTML:"<div> Plumstaed Children's centre</br>6 Purrett Road, Plumstead</br>SE18 1JW.</br>0208 836 9252</div> ",markerImageURL:"http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|FE7569 "}
,{type:0, coords: "51.488482, 0.04013399999996636", onClickHTML:"<div> Pound Park Nursery School and Children's Centre</br>Pound Park Road, Charlton</br>SE7 8AF.</br>0208 858 1791</div> ",markerImageURL:"http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|FE7569 "}
,{type:0, coords: "51.470861, -0.01575300000001789", onClickHTML:"<div> Quaggy Children's Centre</br>Orchard Hill, Lewisham</br>SE13 7QZ.</br>0208 465 9785</div> ",markerImageURL:"http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|FE7569 "}
,{type:0, coords: "51.481473, -0.023365000000012514", onClickHTML:"<div> Rachel McMillan Nursery School and Children's Centre</br>McMillan Street, Deptford</br>SE8 3EH.</br>0208 692 4041</div> ",markerImageURL:"http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|FE7569 "}
,{type:0, coords: "51.4874, 0.006608000000028369", onClickHTML:"<div> Robert Owen Early Years Centre</br>43 Commerell Street, Greenwich</br>SE10 0EA.</br>0208 858 0529</div> ",markerImageURL:"http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|FE7569 "}
,{type:0, coords: "51.480919, 0.025374000000056185", onClickHTML:"<div>  Sherington Primary School and Children's Centre</br>Sherington Road, Charlton</br>SE7 7JW.</br>0208 853 0900</div> ",markerImageURL:"http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|FE7569 "}
,{type:0, coords: "51.472541, 0.04776600000002418", onClickHTML:"<div> Shooters Hill Children's Centre</br>398A Shooters Hill Road</br>SE18 4LP.</br>0208 856 9388</div> ",markerImageURL:"http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|FE7569 "}
,{type:0, coords: "51.46317, 0.03592700000001514", onClickHTML:"<div> Storkway Children's Centre</br>Ridgebrook Road, Kidbrooke</br>SE3 9QX.</br>0208 331 1970</div> ",markerImageURL:"http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|FE7569 "}
,{type:0, coords: "51.44405, 0.041513000000009015", onClickHTML:"<div> Vista Field Children's Centre</br>Middle Park Avenue, Eltham</br>SE9 5SD.</br>0208 859 1110</div> ",markerImageURL:"http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|FE7569 "}
,{type:0, coords: "51.501896, 0.11343399999998382", onClickHTML:"<div> Waterways Community Children's Centre</br>Southwood Road, Thamesmead</br>SE28 8EZ.</br>0208 311 5491</div> ",markerImageURL:"http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|FE7569 "}
,{type:0, coords: "51.493704, 0.11131699999998545", onClickHTML:"<div> Abbey Wood Health Visitors</br>138 Eynsham Drive, Abbey Wood</br>SE2 9PT.</br>020 8310 8536 (Abbey Wood Clinic)</div> ",markerImageURL:"http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|00C3FE "}
,{type:0, coords: "51.484855, 0.06621599999994032", onClickHTML:"<div> Brookhill Health Centre</br>130 Brookhill Road, Woolwich, London</br>SE18 6UZ.</br>020 8319 5348 </div> ",markerImageURL:"http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|00C3FE "}
,{type:0, coords: "51.483567, 0.0388030000000299", onClickHTML:"<div> Fairfield Health Centre</br>Fairfield Grove, Charlton, London</br>SE7 8TX.</br>020 8305 3044 </div> ",markerImageURL:"http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|00C3FE "}
,{type:0, coords: "51.505693, 0.10919990000002144", onClickHTML:"<div> Gallions Reach Health Centre</br>Bentham Road, Thamesmead, London</br>SE28 8BE.</br>020 8320 5718 </div> ",markerImageURL:"http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|00C3FE "}
,{type:0, coords: "51.478784, 0.0862650000000258", onClickHTML:"<div> Garland Road Health Centre</br>2 Garland Road, Plumstead, London</br>SE18 2AE.</br>020 8305 7639 </div> ",markerImageURL:"http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|00C3FE "}
,{type:0, coords: "51.460552, 0.02830800000003819", onClickHTML:"<div> Kidbrooke Village Centre</br>7 Elford Close, Kidbrooke</br>SE3 7FA.</br>0208 319 9970 (Kidbrooke Clinic, Kidbrooke)</div> ",markerImageURL:"http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|00C3FE "}
,{type:0, coords: "51.469345, 0.025361999999972795", onClickHTML:"<div> Manor Brook Health Centre</br>117 Brook Lane, London</br> SE3 0EN.</br>020 8856 3073 </div> ",markerImageURL:"http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|00C3FE "}
,{type:0, coords: "51.492999, 0.012228000000050087", onClickHTML:"<div> Millennium Village Health Centre</br>School Bank Road, Greenwich, London</br>SE10 0QN.</br>020 8312 8700</div> ",markerImageURL:"http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|00C3FE "}
,{type:0, coords: "51.485189, 0.09336099999995895", onClickHTML:"<div> Plumstead Health Centre</br>Tewson Road, Plumstead, London</br>SE18 1BH.</br>020 8317 6300</div> ",markerImageURL:"http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|00C3FE "}
,{type:0, coords: "51.484419, 0.008303999999952793", onClickHTML:"<div> Vanbrugh Hill Health Centre</br>Vanbrugh Hill, Greenwich, London</br>SE10 9HQ.</br>020 8312 8999</div> ",markerImageURL:"http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|00C3FE "}
,{type:0, coords: "51.4816665065702, -0.018833987172001798", onClickHTML:"<div> Wallace Health Centre</br>Clarence Road, London</br>SE8 3BX.</br></div> ",markerImageURL:"http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|00C3FE "}
];

    var blueImage = {
        url: 'styles/images/bluemarker.png',

        size: new google.maps.Size(20, 32),

        origin: new google.maps.Point(0, 0),

        anchor: new google.maps.Point(0, 32)
    };


    var redImage = {
        url: 'styles/images/redmarker.png',

        size: new google.maps.Size(20, 32),

        origin: new google.maps.Point(0, 0),

        anchor: new google.maps.Point(0, 32)
    };



    function init() {

        var networkState = navigator.connection.type;

        console.log("Connection state :" + networkState);

        if (networkState !== "none") {
            $("#page-location").on("pageshow", showPage);

            $("#page-location").on("pagehide", hidePage);


            initLocation();
        }
        else {
            alert("Maps Require an Active Internet connection!")
            $.mobile.back();
        }
    }

    function initLocation() {


        var myLatlng = new google.maps.LatLng(51.4547327, 0.147473200000035);


        var mapOptions = {
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            center: myLatlng,
            zoomControl: true,
            zoomControlOptions: {
                position: google.maps.ControlPosition.RIGHT_BOTTOM
            },
            mapTypeControl: false,
            streetViewControl: false,
            draggable: true,

        };



        map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
        showPage();
        addMarkers(myLatlng);



    }



    function centerTheMap() {
        
    }

    function showPage() {

        if (isLoading) {
            $.mobile.loading("show");
        }

        google.maps.event.trigger(map, "resize");
    }

    function hidePage() {
        $.mobile.loading("hide");
    }

    function showInfo(text, marker) {
        var info = new google.maps.InfoWindow(
        {
            content: text,
            size: new google.maps.Size(150, 150)
        });

        info.open(map, marker)

    }

    function addMarkers(position) {

        $.each(addresses, function (index, address) {

            var lm = new google.maps.Marker({ map: map, position: new google.maps.LatLng(address.lat, address.long), icon: address.markerImage=="red"?redImage:blueImage});

            google.maps.event.addListener(lm, 'click', function () {

                showInfo(address.content, lm);

            });

        });

        hidePage();
    }
    $(document).on("deviceready", init);
})(window);


