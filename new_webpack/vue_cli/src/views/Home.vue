<template>
  <v-app>
    <v-content>
      <v-container>
        <!-- <div> -->
        <div class="mcaddress">
          <h1>TO</h1>
          <mcaddress v-bind:address="to" @select="updateAddressToEdit"></mcaddress><br>
        </div>
        <div class="mcaddress">
          <h1>FROM</h1>
          <mcaddress :address="from" @select="updateAddressToEdit"></mcaddress><br>
        </div>
        <mcaddressform v-if="addressToEdit" v-bind:address="addressToEdit"></mcaddressform>
        <div>
            <h2>A tale of loops...</h2>
            <li>{{ from.city.name }}: {{ from.city.value }}</li>
            <form v-for="attr in from">
                <div v-if="attr.value === ''">
                    <input v-model="attr.value" placeholder="yello">
                    <p>The attribute {{ attr.name }} is now: {{ attr.value }} </p>
                </div>
            </form>
        </div>
        <!-- </div> -->
        <div class="mymap">
          <mymap></mymap>
        </div>
        <!-- <div id="mymap">{{ mymap }}</div> -->
      </v-container>  
    </v-content> 
  </v-app>
</template>
<script>
import mcaddressform from '../components/mcaddressform.vue'
import mcaddress from '../components/mcaddress.vue'
import mymap from '../components/Leaf'
import NomanatimResult from '../components/Coordinates'
import axios from 'axios'
// import L from 'leaflet'

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
      },
}

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
      },
}

export default {
  name: 'home',
  data() {
    return {
      from: from,
      to: address2,
      addressToEdit: '',
      results: null,
      // mymap: ''
    }
  },
  methods: {
    updateAddressToEdit (address) {
      this.addressToEdit = address
    },
  },
  created () {
    axios.get('http://nominatim.openstreetmap.org/search/toulouse?format=json').then(response => {
        this.results = response.data
    })
    console.log(this.results)    
  },
  components: {
    'mcaddress': mcaddress,
    'mcaddressform': mcaddressform,
    'mymap': mymap,
    NomanatimResult
  }
}

</script>
<style lang="stylus">

</style>
