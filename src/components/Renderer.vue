<template>
  <draggable :tag="attrs.tag" :list="schema.children" group="lgDraggable" :class="className">
    <component
      v-for="(item, index) of schema.children"
      :key="index"
      :is="item.type"
      :schema="item.children ? [item] : item"
      :class="['page', 'form'].includes(this.schema.type) ? '' : 'lg-item'"
      :data-id="item.id"
    />
  </draggable>
</template>

<script setup lang="ts">
import { defineComponent, ref, toRef, toRefs, watch } from "vue";
import { VueDraggableNext as draggable } from "vue-draggable-next";

interface Component {
  schema: any,
  attrs: any
}
const props = defineProps<Component>()
const { attrs, schema } = toRefs(props);
const className = ref(`${attrs.value.className || ""} ${schema.value.className || ""}`)
</script>

<style scoped>
.lg-container {
  border: 1px dashed #000;
  display: block;
}
.lg-container:empty {
  min-height: 80px;
}
</style>