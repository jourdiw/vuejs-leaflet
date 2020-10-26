<template>
  <v-container>
    <div id="leafletMap">
      <Map></Map>
    </div>
    <v-row>
      <v-col>
        <v-card>
          <div id="address-to" class="address-card">
            <v-card-title>
              <v-icon>fas fa-map-marker</v-icon>
              <span>TO</span>
            </v-card-title>
            <v-card-text>
              <Address v-bind:address="to" @select="updateAddressToEdit"></Address>
            </v-card-text>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <div id="address-from" class="address-card">
            <v-card-title>
              <v-icon>fas fa-map-marker</v-icon>
              <span>FROM</span>
            </v-card-title>
            <v-card-text>
              <Address :address="from" @select="updateAddressToEdit"></Address>
            </v-card-text>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card v-if="!addressToEdit" class="address-card">
          <v-card-title>EDIT</v-card-title>
          <v-card-text>
            <div class="address">
              <ul>
                <li>Road:</li>
                <li>Zip code:</li>
                <li>City:</li>
                <li>Complement:</li>
                <li>Country:</li>
                <li>State:</li>
              </ul>
            </div>
          </v-card-text>
        </v-card>
        <AddressForm v-if="addressToEdit" v-bind:address="addressToEdit"></AddressForm>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Address from "@/components/Address";
import AddressForm from "@/components/AddressForm";
import Map from "@/components/Leaf";
import axios from "axios";

var backend = "http://localhost:8000/api/";

export default {
  name: "Home",
  data() {
    return {
      from: null,
      to: null,
      addressToEdit: ""
    };
  },
  methods: {
    updateAddressToEdit(address) {
      this.addressToEdit = address;
    }
  },
  created() {
    axios.get(backend + "address/1").then(response => {
      var to = response.data;
      to["addressName"] = "to";
      this.to = to;
    });
    axios.get(backend + "address/2").then(response => {
      var from = response.data;
      from["addressName"] = "from";
      this.from = from;
    });
  },
  components: {
    Address,
    AddressForm,
    Map
  }
};

// TODO: Add NomanatimResult to components: {} and add the fetching of results from openstreetmap
//   axios
//     .get("http://nominatim.openstreetmap.org/search/toulouse?format=json")
//     .then(response => {
//       this.results = response.data;
//     });
</script>
<style scoped>
.address-card > div > .v-icon {
  padding-right: 0.5rem;
}

#address-to > div > .v-icon {
  color: green;
}

#address-from > div > .v-icon {
  color: red;
}
</style>
