function preparePrint() {
  document.querySelector(".right").classList.toggle("hidden");
  document.querySelector(".left").classList.toggle("full-width");

  let map_png = map.getCanvas().toDataURL();
  let img = new Image;
  img.src = map_png;
  document.querySelector(".left").appendChild(img);
  document.querySelector("#map").classList.toggle("hidden");

  print();
  document.querySelector(".left").removeChild(img);
  document.querySelector(".left").classList.toggle("full-width");
  document.querySelector(".right").classList.toggle("hidden");
  document.querySelector("#map").classList.toggle("hidden");
}

console.log(maplibregl);
var map = new maplibregl.Map({
  container: 'map',
  style: 'https://api.maptiler.com/maps/basic-v2/style.json?key=yH0zK1xSaQ1U4Zu8y0wL', // stylesheet location
  // center: [-74.5, 40], // starting position [lng, lat]
  // zoom: 3, // starting zoom
  preserveDrawingBuffer: true
});

function updateMapStyle(element) {
  console.log(element.dataset.maptype)
  switch (element.dataset.maptype) {
    case "default":
      map.setStyle("https://api.maptiler.com/maps/basic-v2/style.json?key=yH0zK1xSaQ1U4Zu8y0wL")
      break;
    case "toner":
      map.setStyle("https://api.maptiler.com/maps/toner-v2/style.json?key=yH0zK1xSaQ1U4Zu8y0wL")
      break;
    case "satellite":
      map.setStyle("https://api.maptiler.com/maps/satellite/style.json?key=yH0zK1xSaQ1U4Zu8y0wL")
      break;
    case "detailed":
      map.setStyle("https://api.maptiler.com/maps/streets-v2/style.json?key=yH0zK1xSaQ1U4Zu8y0wL")
    default:
      map.setStyle("https://api.maptiler.com/maps/basic-v2/style.json?key=yH0zK1xSaQ1U4Zu8y0wL")
  }
}