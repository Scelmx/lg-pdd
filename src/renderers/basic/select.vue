<template>
  <div class="lg-item lg-select">
    <el-select v-model="value">
      <el-option
        v-for="(option, index) of getOptions"
        :key="index"
        :label="option.label"
        :value="option.value"
      ></el-option>
    </el-select>
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
const { value, getOptions, initData, handleChange } = $data;
initData();
</script>
