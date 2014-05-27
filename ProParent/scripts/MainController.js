(function (global) {

    function init() {
      
        global.addEventListener('orientationchange', doOnOrientationChange);

      

        $(document).on("pagechange", onPageChange);
    }




    function doOnOrientationChange() {
        
        //alert("device is orientiation is changed");
        var myLatlng = new google.maps.LatLng(51.4547327, 0.147473200000035);
        // Your device orientation code will come here 
    }

 
    function onPageChange (){
    
    
     //   alert("Page is changed " + $.mobile.activePage.attr('id'));

                //your code will come here for 

    }


    $(document).on("deviceready", init);

    


})(window);