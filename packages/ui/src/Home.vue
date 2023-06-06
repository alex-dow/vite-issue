<template>
    <h1>Home Page</h1>
    <my-component>grr</my-component>
</template>

<script lang="ts" setup>

import { MyComponent } from '@mytest/lib';
import { onMounted } from 'vue';

onMounted(() => {
    console.log('I had to remount!');
})

</script>