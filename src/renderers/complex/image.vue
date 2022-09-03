<template>
    <div class="lg-item lg-image">
      <img :src="schema.src" :style="schema.style" :id="schema.id" alt="">
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

const { schema } = toRefs(props)
const { style, ...attrs } = schema.value;
const $data = useData(schema);
const { value, initData, handleChange } = $data;
initData();
</script>
