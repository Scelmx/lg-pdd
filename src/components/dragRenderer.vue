<template>
  <draggable
    :tag="attrs.tag"
    :list="schema.children"
    group="lgDraggable"
    :class="className"
  >
    <BaseRenderer
      v-for="(item, index) of schema.children"
      :key="index"
      :schema="item"
    ></BaseRenderer>
  </draggable>
</template>

<script setup lang="ts">
import { defineComponent, ref, toRef, toRefs, watch } from "vue";
import { VueDraggableNext as draggable } from "vue-draggable-next";
import BaseRenderer from "./baseRenderer.vue";

interface Component {
  schema: any;
  attrs: any;
}
const props = defineProps<Component>();
const { attrs, schema } = toRefs(props);
const className = ref(
  `${attrs.value.className || ""} ${schema.value.className || ""}`
);
</script>

<style scoped>
.lg-canvas {
  display: inline-block;
  min-height: 100%;
  width: 100%;
  padding: 12px;
  overflow: hidden;
  border: 1px solid #000;
}
.lg-container {
  border: 1px dashed #000;
  display: block;
  width: auto;
  padding: 8px;
  box-sizing: border-box;
}
.lg-container:empty {
  min-height: 80px;
}
</style>
