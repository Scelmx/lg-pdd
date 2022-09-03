<template>
  <el-steps
    :active="schema.active"
    :direction="schema.direction"
    :process-status="schema.processStatus"
    :finish-status="schema.finishStatus"
    :align-center="schema.alignCenter"
    :simple="schema.simple"
  >
    <template v-if="schema.controls && schema.controls.length > 0">  
      <el-step
        v-for="(item, index) of schema.controls"
        :key="index"
        :title="item.title"
        :description="item.description"
        :icon="item.icon"
        :status="item.status">
      </el-step>
    </template>
  </el-steps>
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