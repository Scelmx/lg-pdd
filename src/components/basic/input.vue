<template>
  <div class="lg-item lg-input">
    <label v-if="!config.formItem" :for="config.name">{{config.label}}</label>
    <el-input :name="config.name" v-model="value" :style="style" @input="handleChange" ></el-input>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";
import { useData } from "../data";

const props = defineProps({
  schema: {
    type: Object,
    default: {},
  },
});
const config = computed(() => {
    return props.schema
})

const { style, ...attrs } = config.value;
const $data = useData(attrs);
const { value, initData, handleChange } = $data;
initData();
</script>
