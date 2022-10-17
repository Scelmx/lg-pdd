<template>
  <div class="lg-item lg-tabs">
    <el-tabs
      :type="schema.mode"
      :closabl="schema.closabl"
      :addable="schema.addable"
      :editable="schema.editable"
      :tab-position="schema.tabPosition"
      :stretch="schema.stretch"
    >
      <el-tab-pane v-for="(child, index) of schema.children" :key="index" :label="child.itemLabel">
        <DragRenderer :attrs="{ class: 'lg-item' }" :schema="child.children"></DragRenderer>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from "vue";
import { useData } from "../data";

const props = defineProps({
  schema: {
    type: Object,
    default: {},
  },
});

const { schema } = toRefs(props);
const { style, ...attrs } = schema.value;
const $data = useData(schema);
const { value, initData, handleChange } = $data;
initData();
</script>
