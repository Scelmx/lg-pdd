<template>
  <Renderer :attrs="attrs" :schema="schema"></Renderer>
</template>

<script lang="ts">
import { computed, defineProps } from "vue";
import Renderer from "../Renderer.vue";

const props = defineProps({
  schema: {
    type: Object,
    default: {},
  },
});

const attrs = computed(() => {
  return { tag: "el-form", className: "lg-form lg-container" };
});
</script>

<style scoped>
</style>
