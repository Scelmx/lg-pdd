<template>
  <div class="lg-item lg-tag">
    <el-tag></el-tag>  
  </div>  
</template>

<script setup lang="ts">
import { toRefs } from "vue";
import { useData } from "../data";

const props = defineProps({
  schema: {
    type: Object,
    default: {},
  },
});
const { schema } = toRefs(props)

const { style, ...attrs } = schema.value;
const $data = useData(schema);
const { value, initData, handleChange } = $data;
initData();
</script>