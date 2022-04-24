<template>
  <el-breadcrumb :separator="schema.separator">
    <template v-if="schema.controls && schema.controls.length > 0">
      <el-breadcrumb-item
        v-for="(item, index) of schema.controls"
        :key="index"
        :to="item.to"
        :replace="item.replace"
      >{{ item.text }}</el-breadcrumb-item>
    </template>
  </el-breadcrumb>
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