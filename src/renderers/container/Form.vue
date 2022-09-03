<template>
  <DragRenderer :attrs="attrs" :schema="schema"></DragRenderer>
</template>

<script setup lang="ts">
import { computed, defineProps, reactive, toRefs } from "vue";
import DragRenderer from "../dragRenderer.vue";

interface Component {
  schema: any
}

const props = defineProps<Component>();

const { schema } = toRefs(props)

schema.value.children.map((child: any) => {
  child.isFormItem = true
})

const attrs = reactive({ tag: "el-form", className: "lg-form lg-container" });
</script>

<style scoped>
</style>
