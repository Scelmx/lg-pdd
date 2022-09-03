<template>
  <div class="lg-item lg-upload">
    <el-upload></el-upload>
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
const { value, initData, handleChange } = $data;
initData();
</script>
