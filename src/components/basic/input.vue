<template>
  <div class="lg-item lg-input">
    <label v-if="!schema.formItem" :for="schema.name">{{schema.label}}</label>
    <el-input :name="schema.name" v-model="value" :style="style" @input="handleChange" ></el-input>
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
