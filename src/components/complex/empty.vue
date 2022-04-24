<template>
  <el-empty :image="schema.image" :image-size="schema.imageSize" :description="schema.description"></el-empty>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    schema: {
      type: Object,
      default: {},
    },
  },
});
</script>

<style scoped>
</style>