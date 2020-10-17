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
import Address from "../components/Address";
import AddressForm from "../components/AddressForm";
import Map from "../components/Leaf";
import axios from "axios";

var from = {
  addressName: "from",
  road: {
    name: "Road",
    value: "Abbey Rd"
  },
  zipCode: {
    name: "Zip code",
    value: "LA78 9009"
  },
  city: {
    name: "City",
    value: "london"
  },
  complement: {
    name: "Complement",
    value: ""
  },

  country: {
    name: "Country",
    value: "England"
  },
  state: {
    name: "State",
    value: "Middleton"
  },
  message: {
    name: "Message",
    value: "Starting message..."
  }
};

var address2 = {
  addressName: "to",
  road: {
    name: "Road",
    value: "Partridge St"
  },
  zipCode: {
    name: "Zip code",
    value: "MA39 4556"
  },
  city: {
    name: "City",
    value: "Manchester"
  },
  complement: {
    name: "Complement",
    value: "bis"
  },
  country: {
    name: "Country",
    value: "england"
  },
  state: {
    name: "State",
    value: "Middletown"
  },
  message: {
    name: "Message",
    value: "Another message..."
  }
};

export default {
  name: "Home",
  data() {
    return {
      from: from,
      to: address2,
      addressToEdit: "",
      results: null
    };
  },
  methods: {
    updateAddressToEdit(address) {
      this.addressToEdit = address;
    }
  },
  created() {
    axios
      .get("http://nominatim.openstreetmap.org/search/toulouse?format=json")
      .then(response => {
        this.results = response.data;
      });
    console.log(this.results);
  },
  components: {
    Address,
    AddressForm,
    Map
    // TODO: NomanatimResult
  }
};
</script>
