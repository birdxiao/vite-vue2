<template>
  <h1>{{ msg }}</h1>
</template>

<script setup>
import { ref } from '@vue/composition-api';

defineProps({
  msg: String,
});

const count = ref(0);
</script>
