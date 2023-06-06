<template>
    <h1 class="ot-my-component">
        <slot/>
    </h1>
    <p>{{ props.foo }}</p>
</template>

<style lang="scss">
.ot-my-component {
    font-size: 72px;
}
</style>
<script lang="ts" setup>

import { MyComponentProps } from './lib/myComponentTypes';


const props = withDefaults(defineProps<MyComponentProps>(), {
    bar: 'hello'
});

</script>