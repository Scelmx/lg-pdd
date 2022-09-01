<template>
  <DragRenderer :attrs="attrs" :schema="schema"></DragRenderer>
</template>

<script setup lang="ts">
import { defineComponent, reactive, toRefs, watch } from "vue";
import DragRenderer from "../dragRenderer.vue";
// import { LgComponent } from "../../interface/index"

interface LgComponent {
    schema: any
}

const props = defineProps<LgComponent>();
const { schema } = toRefs(props)
const attrs = reactive({
  tag: "div",
  className: "lg-page lg-container"
})
</script>

<style scoped>
</style>
