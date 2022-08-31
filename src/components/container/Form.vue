<template>
  <Renderer :attrs="attrs" :schema="schema"></Renderer>
</template>

<script setup lang="ts">
import { computed, defineProps, reactive, toRefs } from "vue";
import Renderer from "../Renderer.vue";

interface Component {
  schema: any
}

const props = defineProps<Component>();

const { schema } = toRefs(props)

const attrs = reactive({ tag: "el-form", className: "lg-form lg-container" });
</script>

<style scoped>
</style>
