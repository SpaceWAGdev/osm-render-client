function preparePrint() {
  document.querySelector(".right").classList.toggle("hidden");
  document.querySelector(".left").classList.toggle("full-width");

  let map_png = map.getCanvas().toDataURL();
  let img = new Image;
  img.src = map_png;
  document.querySelector(".left").appendChild(img);
  document.querySelector("#map").classList.toggle("hidden");

  print();
  document.querySelector("#")
  document.querySelector(".right").classList.toggle("hidden");
  document.querySelector(".left").classList.toggle("full-width");
}

console.log(maplibregl);
var map = new maplibregl.Map({
  container: 'map',
  style: 'https://api.maptiler.com/maps/https://api.maptiler.com/maps/streets-v2/style.json?key=yH0zK1xSaQ1U4Zu8y0wL-5469-4495-9aad-6807a62ccb18/style.json?key=yH0zK1xSaQ1U4Zu8y0wL', // stylesheet location
  // center: [-74.5, 40], // starting position [lng, lat]
  // zoom: 3, // starting zoom
  preserveDrawingBuffer: true
});

function addBuildings(map) {

  console.log("here")
  const layers = map.getStyle().layers;

  let labelLayerId;
  for (let i = 0; i < layers.length; i++) {
    if (layers[i].type === "symbol" && layers[i].layout["text-field"]) {
      labelLayerId = layers[i].id;
      break;
    }
  }

  map.addLayer(
    {
      "id": "3d-buildings",
      'source': 'openmaptiles',
      'source-layer': 'building',
      'filter': ['==', 'extrude', 'true'],
      'type': 'fill-extrusion',
      'minzoom': 15,
      'paint': {
        "fill-extrusion-color": "#aaa",
        'fill-extrusion-height': [
          'interpolate',
          ['linear'],
          ['zoom'],
          15,
          0,
          15.05,
          ['get', 'height']
        ],
        'fill-extrusion-base': [
          'interpolate',
          ['linear'],
          ['zoom'],
          15,
          0,
          15.05,
          ['get', 'min_height']
        ],
        'fill-extrusion-opacity': 0.6
      }
    }
  )
}
// map.on("load"), () => {

//   console.log(map)
//   addBuildings(map);
// }
// document.querySelector("#map-type-select").addEventListener("onchange", ()=>{addBuildings(map)}) 
