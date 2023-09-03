<script>
  import Map from "ol/Map";
  import View from "ol/View";
  import TileLayer from "ol/layer/Tile";
  import OSM from "ol/source/OSM";
  import GeoJSON from "ol/format/GeoJSON";
  import VectorLayer from "ol/layer/Vector";
  import VectorSource from "ol/source/Vector";
  import { Style, Fill, Stroke } from "ol/style";
  import { onMount } from "svelte";

  let map;

  onMount(() => {
    const vectorSource = new VectorSource({
      url: "https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson",
      format: new GeoJSON(),
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
      style: new Style({
        fill: new Fill({
          color: "#006a4e",
        }),
        stroke: new Stroke({
          color: "#006a4e",
          width: 1,
        }),
      }),
      opacity: 0.75,
    });

    map = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        vectorLayer,
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });
  });
</script>

<div id="map"></div>

<style>
  #map {
    width: 100%;
    height: 100vh;
  }
</style>
