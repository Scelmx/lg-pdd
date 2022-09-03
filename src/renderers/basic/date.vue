<template>
  <div class="lg-item lg-date">
    <el-date-picker
      v-model="value"
      :type="attrs.dateType"
      :placeholder="attrs.placeholder"
      :format="attrs.format"
      :editable="attrs.editable"
      :clearable="attrs.clearable"
      :size="attrs.size"
      :readonly="attrs.readonly"
      :disabled="attrs.disabled"
      @change="handleChange"
    ></el-date-picker>
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
