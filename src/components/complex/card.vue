<template>
  <el-card :body-style="schema.bodyStyle" :shadow="schema.shadow"></el-card>
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