Vue.component ('mcaddress', {
    props: ['address'],
    methods: {
        select() {
            this.$emit('select', this.address)
        }
    },
    filters: {
        capitalize: function(value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    },
    template: `
    <div>
        <ul>
            <li>{{ address.road.name }}: {{ address.road.value | capitalize }}</li>
            <li>{{ address.zipCode.name }}: {{ address.zipCode.value | capitalize }}</li>
            <li>{{ address.city.name }}: {{ address.city.value | capitalize }}</li>
            <li>{{ address.complement.name }}: {{ address.complement.value | capitalize }}</li>
            <li>{{ address.country.name }}: {{ address.country.value | capitalize }}</li>
            <li>{{ address.state.name }}: {{ address.state.value | capitalize }}</li>
        </ul>
        <v-btn color="success" v-on:click="select">Success</v-btn>
    </div>`,
})