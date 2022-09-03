<template>
  <div class="lg-item lg-switch">
    <el-switch :name="schema.name" v-model="val" :style="style" @input="handleChange" ></el-switch>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { useData } from "../data";

const props = defineProps({
  schema: {
    type: Object,
    default: {},
  },
});

const { style, ...attrs } = props.schema;
const $data = useData(attrs);
const { value, toTargetType, initData, handleChange } = $data;
initData();
const val = toTargetType(value, Boolean)
</script>
