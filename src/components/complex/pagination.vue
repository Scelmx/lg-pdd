<template>
  <div class="lg-item lg-pagination">
    <el-pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :default-page-size="attrs.defaultPageSize"
      :total="total"
      :page-sizes="attrs.pageSizes"
      :layout="attrs.layout"
      @size-change="sizeChange"
      @current-change="currentChange"
      @prev-click="prev"
      @next-click="next"
    ></el-pagination>
  </div>
</template>

<script setup lang="ts">
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
const { value, toTargetType, initData, handleChange } = $data;
initData();
const currentPage = toTargetType(attrs.currentPage, Number);
const pageSize = toTargetType(attrs.pageSize, Number);
const total = toTargetType(attrs.total, Number);
</script>
