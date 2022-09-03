<template>
  <div class="lg-item lg-text">
    <a v-if="schema.href && schema.href !== ''" :href="schema.href" :style="schema.style">{{schema.value}}</a>
    <text v-else :style="schema.style">{{schema.value}}</text>
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

<style scoped>
</style>
