<template>
  <v-card>
    <v-card-title>EDIT - {{ address.addressName | capitalize }}</v-card-title>
    <v-card-text>
      <div class="address">
        <ul>
          <li>
            Road:
            <input v-model="address.road" />
          </li>
          <li>
            Complement:
            <input v-model="address.complement" />
          </li>
          <li>
            City:
            <input v-model="address.city" />
          </li>
          <li>
            State:
            <input v-model="address.state" />
          </li>
          <li>
            Zip Code:
            <input v-model="address.zip_code" />
          </li>
          <li>
            Country:
            <input v-model="address.country" />
          </li>
        </ul>
        <v-btn v-on:click="select">SUBMIT</v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "AddressForm",
  props: {
    address: Object
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  methods: {
    select() {
      console.log("Submitting address");
    }
  }
};
</script>
<style>
.address > button {
  margin-top: 1rem;
}
</style>
