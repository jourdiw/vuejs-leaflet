<template>
  <div>
    <div class="address" v-if="address">
      <ul>
        <li>Road: {{ address.road | capitalize }}</li>
        <li>Complement: {{ address.complement | capitalize }}</li>
        <li>City: {{ address.city | capitalize }}</li>
        <li>State: {{ address.state | capitalize }}</li>
        <li>Zip Code: {{ address.zip_code | capitalize }}</li>
        <li>Country: {{ address.country | capitalize }}</li>
      </ul>
      <v-btn color="success" v-on:click="select">Edit</v-btn>
    </div>
    <div class="address" v-else>
      <ul>
        <li>Road:</li>
        <li>Complement:</li>
        <li>City:</li>
        <li>State:</li>
        <li>Zip Code:</li>
        <li>Country:</li>
      </ul>
      <v-btn color="success">Edit</v-btn>
    </div>
  </div>
</template>
<script>
export default {
  name: "Address",
  props: {
    address: Object
  },
  methods: {
    select() {
      this.$emit("select", this.address);
    }
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>
<style scoped>
.address > button {
  margin-top: 1rem;
}
</style>
