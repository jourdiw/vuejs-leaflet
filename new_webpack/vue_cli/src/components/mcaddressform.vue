<template>
    <div class="mc-address-form">
        <h2>Edit Form:</h2>
        {{ address.road.name }}: <input v-model="address.road.value"><br>
        {{ address.zipCode.name }}: <input v-model="address.zipCode.value"><br>
        {{ address.city.name }}: <input v-model="address.city.value"><br>
        {{ address.complement.name }}: <input v-model="address.complement.value"><br>
        {{ address.country.name }}: <input v-model="address.country.value"><br>
        {{ address.state.name }}: <input v-model="address.state.value"><br>
    </div>
</template>
<script>
export default {
    name: 'mcaddressform',
    props: {
        address: Object
    }
}
</script>
<style>
</style>