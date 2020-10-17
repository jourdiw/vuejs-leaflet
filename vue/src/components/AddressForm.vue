<template>
  <v-card>
    <v-card-title>EDIT - {{ address.addressName | capitalize }}</v-card-title>
    <v-card-text>
      <div class="address">
        <ul>
          <li>
            {{ address.road.name }}:
            <input v-model="address.road.value" />
          </li>
          <li>
            {{ address.zipCode.name }}:
            <input v-model="address.zipCode.value" />
          </li>
          <li>
            {{ address.city.name }}:
            <input v-model="address.city.value" />
          </li>
          <li>
            {{ address.complement.name }}:
            <input v-model="address.complement.value" />
          </li>
          <li>
            {{ address.country.name }}:
            <input v-model="address.country.value" />
          </li>
          <li>
            {{ address.state.name }}:
            <input v-model="address.state.value" />
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
<style></style>
