<template>
  <div class="lg-item lg-card">
    <el-card :body-style="schema.bodyStyle" :shadow="schema.shadow"></el-card>
  </div>
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