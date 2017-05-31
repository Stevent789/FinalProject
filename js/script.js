function initMap() {
        var campus = {lat: 42.3317, lng: -83.0466};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: campus
        });
        var marker1 = new google.maps.Marker({
          position: campus,
          map: map
        });
      }
