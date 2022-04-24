<template>
  <el-table
    :stripe="schema.stripe"
    :border="schema.border"
    :size="schema.size"
    :fit="schema.fit"
    :show-header="schema.showHeader"
    :highlight-current-row="schema.highlightCurrentRow"
    :empty-text="schema.emptyText"
  >
    <template v-if="schema.columns && schema.columns.length > 0">
      <el-table-column
        v-for="(column, index) of schema.columns"
        :key="index"
        :prop="column.value"
        :label="column.label"
        :width="column.width"
      ></el-table-column>
    </template>
  </el-table>
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