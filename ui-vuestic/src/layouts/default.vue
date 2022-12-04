<template>
    <h1> {{ title }} </h1>
    <router-view></router-view>
</template>

<script setup>
const title = ref('Vuestic UI')
</script>