<template>
  <div class="lg-item lg-pagination">
    <el-pagination
      :current-page="attrs.currentPage"
      :page-size="attrs.pageSize"
      :default-page-size="attrs.defaultPageSize"
      :total="attrs.total"
      :page-sizes="attrs.pageSizes"
      :layout="attrs.layout"
      @size-change="sizeChange"
      @current-change="currentChange"
      @prev-click="prev"
      @next-click="next"
    ></el-pagination>
  </div>
</template>

<script lang="ts">
import { defineProps } from "vue";
import { useData } from "../data";

const props = defineProps({
  schema: {
    type: Object,
    default: {},
  },
});

const { style, ...attrs } = props.schema;
const $data = useData(attrs);
const { value, initData, handleChange } = $data;
initData();
</script>

<style scoped>
</style>
