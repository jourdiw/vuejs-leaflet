Vue.component ('McAddressForm', {
    props: ['address'],
    filters: {
        capitalize: function(value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    },
    template: `
    <div class="mc-address-form">
            <h2>Edit Form:</h2>
            {{ address.road.name }}: <input v-model="address.road.value"><br>
            {{ address.zipCode.name }}: <input v-model="address.zipCode.value"><br>
            {{ address.city.name }}: <input v-model="address.city.value"><br>
            {{ address.complement.name }}: <input v-model="address.complement.value"><br>
            {{ address.country.name }}: <input v-model="address.country.value"><br>
            {{ address.state.name }}: <input v-model="address.state.value"><br>
    </div>`
})
// transition-group ... each thing must be keyed -- have in a list and then give each an id: https://vuejs.org/v2/api/#transition-group