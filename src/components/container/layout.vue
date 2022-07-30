<template>
  <div class="lg-item lg-layout">
    <div v-for="(item, index) of getScale" :key="index" :style="getItemStyle[index]" class="lg-container lg-container-item lg-item">
        {{item}}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";

const props = defineProps({
  schema: {
    type: Object,
    default: {},
  },
});
const getScale = computed(() => {
    return (props.schema.scale || "4:4:4").split(":")
})

const getItemStyle = computed(() => {
    let itemStyle = []
    getScale.value.forEach(item => {
        const style = {
           width: Number(item) / 12 * 100 + "%"
        }
        itemStyle.push(style)
    });
    return itemStyle
})

const attrs = computed(() => {
  return { tag: "el-form", className: "lg-form lg-container" };
});
</script>

<style scoped></style>
