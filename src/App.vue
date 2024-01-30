<template>
  <div>
    <HelloWorld ref="componentRef" msg="Vite + Vue" />
    <p>HelloWorld component width: {{ width }}</p>
  </div>
</template>

<script setup>
import { useElementSize } from '@vueuse/core';
import { ref } from '@vue/composition-api';
import HelloWorld from './components/HelloWorld.vue';

const componentRef = ref();

const {
  width
} = useElementSize(componentRef);
</script>
