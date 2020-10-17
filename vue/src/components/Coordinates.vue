<template>
  <v-card-text>
    <v-card-title>To be filled out later</v-card-title>
    <!-- <table>
            <tr v-for="result in results">
                {{ result.key }}
            </tr>
    </table>-->
  </v-card-text>
</template>
<script>
// var axios = require("axios");

export default {
  name: "NomanatimResult",
  functional: true,
  props: ["results"]
};
</script>
// TODO: make it work -- iterate through the table of results from nomatanim
