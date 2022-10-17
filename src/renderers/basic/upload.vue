<template>
  <div class="lg-item lg-upload">
    <el-upload
      :action="schema.action"
      :multiple="schema.multiple"
      :limit="schema.limit">
      <el-button type="primary">{{ schema.value }}</el-button>
      <template v-if="schema.tip !== ''" #tip>
        <div class="el-upload__tip">
          {{ schema.tip }}
        </div>
      </template>
    </el-upload>
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
const { value, initData, handleChange } = $data;
initData();
</script>
