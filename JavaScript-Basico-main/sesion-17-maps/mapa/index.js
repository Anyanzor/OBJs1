let markers, map;

function initMap() {
  const posicion = {
    lat: -25.363,
    lng: 131.044,
  };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: posicion,
  });

  markers.push(
    new google.maps.Marker({
      position: {
        lat: 51.5072,
        lng: -0.1275,
      },
      map,
      title: "London",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: 52.4831,
        lng: 52.4831,
      },
      map,
      title: "Birmingham",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: -54.8064,
        lng: -68.305,
      },
      map,
      title: "Usuahia",
    })
  );
}