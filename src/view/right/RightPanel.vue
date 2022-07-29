

<template>
  <el-aside class="lg-design__right">
    <div>{{ activeSchema.type }}</div>
    <el-tabs v-model="tabName" class="lg-tabs">
      <el-tab-pane label="属性" value="attr">
        <Attr :schema="activeSchema"></Attr>
      </el-tab-pane>
      <el-tab-pane label="样式" value="style">
        <Style :schema="activeSchema"></Style>
      </el-tab-pane>
      <el-tab-pane label="事件" value="event">
        <Events></Events>
      </el-tab-pane>
    </el-tabs>
  </el-aside>
</template>

<script setup lang="ts">
import { computed, ref, toRaw, watch } from "vue";
import Attr from "./components/attr.vue";
import Style from "./components/style.vue";
import Events from "./components/event.vue";
import { useStore } from "vuex";

const $store = useStore();
const $schemaStore = $store.state.schemaStore;
const activeId = computed(() => $schemaStore.activeId)
const activeSchema: any = ref($schemaStore.activeSchema || {});

watch(activeId, (oldVal, newVal) => {
  activeSchema.value = $schemaStore.activeSchema;
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
