<template>
  <div class="lg-item lg-button">
    <el-button
      :type="schema.category"
      :size="schema.size"
      :plain="schema.plain"
      :round="schema.round"
      :circle="schema.circle"
      :loading="schema.loading"
      :loading-icon="schema.loadingIcon"
      :disabled="schema.disabled"
      :icon="schema.icon">
      {{schema.value}}
    </el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
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
