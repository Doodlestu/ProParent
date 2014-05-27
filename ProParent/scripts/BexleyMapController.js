(function (global) {

    var map,
        isLoading = true;

    var addresses = [
       { lat: "51.4794806", long: "0.134135199999946", content: "<div> Bedonwell Children's Centre</br>Bedonwell Road, Belvedere, Kent</br>DA17 5PF</br>020 8311 0938</div> ", markerImage: "red" }
    , { lat: "51.4555695929876", long: "0.193510741104546", content: "<div> Crayford Children's Centre</br> Iron Mill Lane, Crayford</br> DA1 4RS</br>020 7652 9500 Option 8</div> ", markerImage: "red" }
    , { lat: "51.4689049", long: "0.129979600000069", content: "<div> Danson Children's Centre</br>Danson Youth Centre, Brampton Road, Bexleyheath</br>DA7 4EZ</br>020 8303 6052</div> ", markerImage: "red" }
    , { lat: "51.4572083", long: "0.093063900000061", content: "<div> Falconwood Children's Centre</br>Falconwood Parade, The Green, Welling, Kent </br>DA16 2PG</br>07854 522533</div> ", markerImage: "red" }
    , { lat: "51.4934315", long: "0.138907000000017", content: "<div> Greenmead Children's Centre</br>Lime Row, Off Yarnton Way, Erith</br>DA18 4HW</br>020 8320 1618</div> ", markerImage: "red" }
    , { lat: "51.468914", long: "0.171253999999976", content: "<div> Normandy Primary Children's Centre</br>Fairford Avenue, Barnehurst, Kent</br>DA7 6QP</br>01322 359475</div> ", markerImage: "red" }
    , { lat: "51.4172632999999", long: "0.128431200000022", content: "<div> North Cray Children's Centre</br>North Cray Neighbourbood Centre, 1 Davis Way, Sidcup, Kent</br>DA14 5JR</br></div> ", markerImage: "red" }
    , { lat: "51.4656815", long: "0.182702299999959", content: "<div> Northend Children's Centre</br>4a Lincoln Close, Erith</br>DA8 2EB</br>020 3045 4724</div> ", markerImage: "red" }
    , { lat: "51.474484", long: "0.157506000000012", content: "<div> Northumberland Heath Children's Centre</br>141 Brook Street, Erith</br>DA8 1JD</br>01322 448441</div> ", markerImage: "red" }
    , { lat: "51.4902461", long: "0.14403859999993", content: "<div> St Augustine's Children's Centre</br> St Augustine's Road, Belvedere</br>DA17 5HP</br>020 3045 4710</div> ", markerImage: "red" }
    , { lat: "51.4693593999999", long: "0.121481499999958", content: "<div> St Michael's Children's Centre</br>activities from Wrotham Road Clinic</br>Welling & Hillsgrove Primary School </br>020 8306 2764</div> ", markerImage: "red" }
    , { lat: "51.4319348", long: "0.10580630000004", content: "<div> Sidcup Children's Centre</br>(rear of Alma Road Adult Education Centre, Alma Road, Sidcup) </br></br>0208 300 6909</div> ", markerImage: "red" }
    , { lat: "51.4458345", long: "0.106992600000012", content: "<div> The Oval and Queen Mary's (QMS) C Centre</br> The Oval Clinic, Sherwood Park Avenue, Sidcup, Kent </br> DA15 9H </br>020 8308 3881</div> ", markerImage: "red" }
    , { lat: "51.4508394", long: "0.136167699999987", content: "<div> Upton Children's Centre</br>Upton Road, Bexleyheath Kent </br>DA6 8LZ</br>020 8303 6557</div> ", markerImage: "red" }
    , { lat: "51.4857814999999", long: "0.173953799999935", content: "<div> West Street Children's Centre</br> 174 Chandler's Drive, Erith, Kent </br></br>020 3045 5480</div> ", markerImage: "red" }
    , { lat: "51.4547327", long: "0.147473200000035", content: "<div> Albion Surgery</br>6 Pincott Road, Bexleyheath, Kent</br>DA6 7LP.</br>020 8304 8352</div> ", markerImage: "blue" }
    , { lat: "51.4278106", long: "0.105745899999988", content: "<div> Barnard Health Clinic</br>43 Granville Road, Sidcup, Kent</br>DA14 4TA.</br>020 8302 7811</div> ", markerImage: "blue" }
    , { lat: "51.4788374", long: "0.139776600000004", content: "<div> Bedonwell Clinic</br>Bedonwell Road, Belvedere, Kent</br>DA17 5PF.</br>020 8310 6014</div> ", markerImage: "blue" }
    , { lat: "51.4715982", long: "0.170457899999973", content: "<div> Colyers Lane Baby Clinic</br>154 Colyers Lane, Erith, Kent</br>DA8 3PS.</br>01322 338839</div> ", markerImage: "blue" }
    , { lat: "51.4554931", long: "0.185406899999975", content: "<div> Haberdashers' Aske's Crayford Academy</br>Iron Mill Lane, Crayford, Kent</br>DA1 4RS.</br>020 7652 9528</div> ", markerImage: "blue" }
    , { lat: "51.4795666", long: "0.180772899999965", content: "<div> Erith Health Centre</br>50 Pier Road, Erith, Kent</br>DA8 1RQ.</br>01322 357 953</div> ", markerImage: "blue" }
    , { lat: "51.4962862", long: "0.125206899999966", content: "<div> Lakeside Health Centre</br>Yarnton Way, Thamesmead, London</br>SE2 9LH.</br>020 8320 7357</div> ", markerImage: "blue" }
    , { lat: "51.4583175", long: "0.106444600000031", content: "<div> Little Danson Clinic</br>Dansington Road, Welling, Kent</br>DA16 2EA.</br>020 8319 7015</div> ", markerImage: "blue" }
    , { lat: "51.461044", long: "0.158528299999943", content: "<div> Lyndhurst Medical Centre</br>41 Lyndhurst Road, Bexleyheath, Kent</br>DA7 6DL.</br>01322 558611</div> ", markerImage: "blue" }
    , { lat: "51.4397971", long: "0.127579299999979", content: "<div> Murchison Clinic</br>Thisilefield Close, Murchison Avenue, Bexleyheath, Kent</br>DA5 3LJ.</br>01322 521 526 (Health Visiting Team)</div> ", markerImage: "blue" }
    , { lat: "51.4190537", long: "0.129015799999933", content: "<div> North Cray Children's Centre</br>Bedens Road, North Cray, Kent</br>DA14 5LS.</br>020 8308 3886</div> ", markerImage: "blue" }
    , { lat: "51.4656815", long: "0.182702299999959", content: "<div> Northend Children's Centre</br>4a Lincoln Close, Slade Green, Kent</br>DA8 2EB.</br>01322 332 559</div> ", markerImage: "blue" }
    , { lat: "51.4476352999999", long: "0.117431099999976", content: "<div> Oval Clinic</br>Sherwood Park Avenue, Sidcup, Kent</br>DA15 9HN.</br>020 8300 4918</div> ", markerImage: "blue" }
    , { lat: "51.4862259999999", long: "0.174678500000027", content: "<div> West Street Children's Centre</br>174 Chandlers Drive, Erith, Kent</br>DA8 1LW.</br>01322 446 725</div> ", markerImage: "blue" }
    , { lat: "51.4574961", long: "0.0995758999999907", content: "<div> Westwood Surgery</br>24 Westwood Lane, Welling, Kent</br> DA16 2HE.</br>020 8303 0703</div> ", markerImage: "blue" }
    , { lat: "51.4690891", long: "0.120823100000052", content: "<div> Wrotham Road</br>Welling, Kent</br>DA16 1LS.</br>020 8301 6710/4670</div> ", markerImage: "blue" }


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


