

<template>
  <el-aside class="lg-design__right">
    <el-tabs v-model="tabName" class="lg-tabs">
      <el-tab-pane label="属性" value="attr">
        <Attr></Attr>
      </el-tab-pane>
      <el-tab-pane label="样式" value="style">
        <Style></Style>
      </el-tab-pane>
      <el-tab-pane label="事件" value="event">
        <Events></Events>
      </el-tab-pane>
    </el-tabs>
  </el-aside>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import Attr from "./components/attr.vue";
import Style from "./components/style.vue";
import Events from "./components/event.vue";

const active = undefined;
const props = defineProps({
  activeSchema: {
    type: Object,
    default: undefined,
  },
});
</script>

<style scoped>
.lg-design__right {
  flex: 0.2;
}
.lg-tabs .el-tabs__nav-scroll {
    display: flex;
    flex-direction: row;
    justify-content: center;
}
</style>
