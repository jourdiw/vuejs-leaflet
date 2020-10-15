<template>
  <div>
    <div id="mapid"></div>
  </div>
</template>
<script>
import L from "leaflet";
// import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
// import "leaflet/dist/leaflet.css";
import NomanatimResult from "./Coordinates.vue";
import axios from "axios";

export default {
  name: "mymap",
  data() {
    return {
      results: []
    };
  },
  mounted() {
    var mymap = L.map("mapid").setView([51.505, -0.09], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);
    L.marker([51.5, -0.09])
      .addTo(mymap)
      .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
      .openPopup();
  },
  components: {
    coordinates: NomanatimResult
  }
};
</script>
<style>
#mapid {
  height: 400px;
  width: 600px;
}
</style>
