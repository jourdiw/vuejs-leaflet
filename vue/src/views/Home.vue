<template>
  <v-container>
    <div id="address-to">
      <h1>TO</h1>
      <Address v-bind:address="to" @select="updateAddressToEdit"></Address
      ><br />
    </div>
    <div id="address-from">
      <h1>FROM</h1>
      <Address :address="from" @select="updateAddressToEdit"></Address><br />
    </div>
    <AddressForm
      v-if="addressToEdit"
      v-bind:address="addressToEdit"
    ></AddressForm>
    <div>
      <h2>A tale of loops...</h2>
      <li>{{ from.city.name }}: {{ from.city.value }}</li>
      <form v-for="attr in from">
        <div v-if="attr.value === ''">
          <input v-model="attr.value" placeholder="yello" />
          <p>The attribute {{ attr.name }} is now: {{ attr.value }}</p>
        </div>
      </form>
    </div>
    <!-- </div> -->
    <div id="leafletMap">
      <Map></Map>
    </div>
  </v-container>
</template>

<script>
import Address from "../components/Address";
import AddressForm from "../components/AddressForm";
import Map from "../components/Leaf";
import axios from "axios";

var from = {
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
    value: "England"
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
