<template>
  <el-pagination></el-pagination>
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
