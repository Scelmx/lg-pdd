<template>
  <div class="lg-item lg-checkboxes">
    <el-checkbox-group v-model="value" @change="handleChange">
      <el-checkbox
        v-for="(option, index) of getOptions"
        :key="index"
        :label="option.label"
        :value="option.value"
      ></el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script setup lang="ts" name="checkboxes">
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
