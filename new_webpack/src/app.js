Vue.use(Vuetify, {
    theme: {
        primary: '#009688',
        secondary: '#03a9f4',
        accent: '#ffeb3b',
        error: '#f44336',
        warning: '#ff5722',
        info: '#4caf50',
        success: '#ffc107'
    },
})

var booboo = {
    hello: "Hello Vue.js!",
    message: "A message",
    form: {
        login: "",
        password: ""
    },
}

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

var app = new Vue({
    el: '#app',
    data: {
        from: from,
        to: address2,
        addressToEdit: '',
    },
    methods: {
        updateAddressToEdit(address) {
            this.addressToEdit = address
        }
    },
    computed: {
        // emptyAttr: function() {
        //     this.from.filter(function(a) {
        //         return a === ''
        //     })
        // }
    },
    template: `
    <v-app id="keep">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      clipped
      class="grey lighten-4"
      app
    >
      <v-list
        dense
        class="grey lighten-4"
      >
        
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="amber" app absolute clipped-left>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <span class="title ml-3 mr-5">Google&nbsp;<span class="font-weight-light">Keep</span></span>
      <v-text-field
        solo-inverted
        flat
        hide-details
        label="Search"
        prepend-inner-icon="search"
      ></v-text-field>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
        <h1>Addresses</h1>
            <v-container fluid fill-height class="grey lighten-4">
                <div class="mcaddress">
                <h1>TO</h1>
                <mcaddress v-bind:address="to" @select="updateAddressToEdit"></mcaddress><br>
                </div>
                <div class="mcaddress">
                <h1>FROM</h1>
                <mcaddress :address="from" @select="updateAddressToEdit"></mcaddress><br>
                </div>
                <mc-address-form v-if="addressToEdit" v-bind:address="addressToEdit"></mc-address-form>
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
                <v-layout justify-center align-center>
                    <v-flex shrink>
                        <v-tooltip right>
                        //   <v-btn
                        //     slot="activator"
                        //     :href="source"
                        //     icon
                        //     large
                        //     target="_blank"
                        //   >
                        //     <v-icon large>code</v-icon>
                        //   </v-btn>
                        //   <span>Source</span>
                        </v-tooltip>
                        <v-tooltip right>
                        <v-btn slot="activator" icon large href="https://codepen.io/johnjleider/pen/jZQNbd" target="_blank">
                            <v-icon large>mdi-codepen</v-icon>
                        </v-btn>
                        <span>Codepen</span>
                        </v-tooltip>
                    </v-flex>
                </v-layout>
      </v-container>
    </v-content>
</v-app>`,
})

var app2 = new Vue({
    el: "#toto",
    data: booboo
})

