function initMap(id) {
  const element = document.getElementById(id);
  let options = {
    zoom: 14,
    center: {lat: 50.511127, lng:30.781253}
  };

  let myMap = new google.maps.Map(element, options);

  let markers = [
    {
      coordinates: {lat: 50.517639, lng:30.783297},
      image: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      info: '<h1>Home</h1>'
    },
    {
      coordinates: {lat: 50.506415, lng:30.778972},
      info:'<h1>Restorane</h1>'
    }
  ];

  function addMarker(properties) {
    let marker = new google.maps.Marker({
      position: properties.coordinates,
      map: myMap,
      icon: properties.image
    });

    if(properties.image) {
      marker.setIcon(properties.image);
    }

    if(properties.info) {
      let InfoWindow = new google.maps.InfoWindow({
        content: properties.info
      });

      marker.addListener('click', function () {
        InfoWindow.open(myMap, marker);
      });
    }

  }

  for(let i = 0; i < markers.length; i++) {
    addMarker(markers[i]);
  }

}

export default initMap;