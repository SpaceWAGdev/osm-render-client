function preparePrint() {
    document.querySelector(".right").classList.toggle("hidden");
    document.querySelector(".left").classList.toggle("full-width");
    print();
    document.querySelector(".right").classList.toggle("hidden");
    document.querySelector(".left").classList.toggle("full-width");
}

console.log(maplibregl);
        var map = new maplibregl.Map({
          container: 'map',
          style: 'https://demotiles.maplibre.org/style.json', // stylesheet location
          center: [-74.5, 40], // starting position [lng, lat]
          zoom: 3, // starting zoom
          preserveDrawingBuffer : true
        });