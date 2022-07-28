<template>
  <div class="lg-item lg-radio">
    <el-radio-group v-model="value" @change="handleChange">
      <el-radio
        v-for="(option, index) of getOptions"
        :key="index"
        :label="option.label"
        :value="option.value"
      ></el-radio>
    </el-radio-group>
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
