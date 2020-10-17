<template>
  <div>
    <!-- <div id="mapid" style="height: 400px;width: 600px;"></div> -->
    <div id="mapid"></div>
  </div>
</template>
<script>
import L from "leaflet";
// TODO: Have webpack be able to search the css in node_module
import "leaflet/dist/leaflet.css";
import NomanatimResult from "./Coordinates.vue";
import axios from "axios";

export default {
  name: "Map",
  data() {
    return {
      results: []
    };
  },
  mounted() {
    var map = L.map("mapid").setView([51.505, -0.09], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker([51.5, -0.09])
      .addTo(map)
      .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
      .openPopup();
  },
  components: {
    coordinates: NomanatimResult
  }
};
</script>
<style>
/* TODO: Activate this part of the vue 
         and remove the inline */
#mapid {
  height: 400px;
  width: 600px;
}
</style>
