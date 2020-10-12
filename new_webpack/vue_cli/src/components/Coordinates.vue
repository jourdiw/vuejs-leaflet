<template>
    <table>
        <tr v-for="result in results">
            {{ result.key }}
        </tr>
    </table>
</template>
<script>
var axios = require('axios')

export default {
    name: "NomanatimResult",
    functional: true,
    props: ['results'],
}
</script>
// TODO: make it work -- iterate through the table of results from nomatanim