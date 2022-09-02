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
import { defineProps, toRefs } from "vue";
import { useData } from "../data";

const props = defineProps({
  schema: {
    type: Object,
    default: {},
  },
});

const { schema } = toRefs(props);
const { style, ...attrs } = schema.value;
const $data = useData(schema);
const { value, getOptions, initData, handleChange } = $data;
initData();
</script>
