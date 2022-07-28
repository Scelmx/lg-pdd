<template>
  <class class="lg-item lg-result">
    <el-result :icon="schema.icon" :title="schema.title" :sub-title="schema.subTitle"></el-result>
  </class>
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