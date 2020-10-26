<template>
  <div>
    <div id="mapid"></div>
  </div>
</template>
<script>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import NomanatimResult from "./Coordinates.vue";
import axios from "axios";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

export default {
  name: "Map",
  data() {
    return {
      results: []
    };
  },
  mounted() {
    var map = L.map("mapid").setView([51.505, -0.09], 13);
    let DefaultIcon = L.icon({
      iconUrl: icon,
      shadowUrl: iconShadow
    });
    L.Marker.prototype.options.icon = DefaultIcon;
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
#mapid {
  height: 500px;
  width: 100%;
}
</style>
