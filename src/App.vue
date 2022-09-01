<template>
  <section class="lg-design">
    <TopPanel @save="saveSchema"></TopPanel>
    <section class="lg-center__container">
      <LeftPanel />
      <CenterPanel :schema="schema" @active-change="activeTargetChange" />
      <RightPanel />
    </section>
  </section>
</template>

<script setup lang="ts">
import TopPanel from "./view/header/TopPanel.vue";
import LeftPanel from "./view/LeftPanel.vue";
import CenterPanel from "./view/CenterPanel.vue";
import RightPanel from "./view/right/RightPanel.vue";
import { ref, toRaw, watch } from "vue";
import { useStore } from "vuex";

const rootStore = useStore();
const schemaStore = toRaw(rootStore.state.schemaStore);
const schema = ref(schemaStore.schema || { type: "page", name: "page", children: [] });

watch(schema.value, (oldVal, newVal) => {
  rootStore.dispatch("setSchema", newVal)
})

const saveSchema = () => {
  const config = toRaw(schema.value);
  window.localStorage.setItem("schema", JSON.stringify(config));
};

const activeTargetChange = (id: string) => {
  // 直接存入store处理
  rootStore.dispatch("setActiveId", id);
};
</script>

<style>
html,
body,
#app {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
}
.lg-design {
  height: 100%;
  width: 100%;
  display: block;
}
.lg-center__container {
  height: 100%;
  display: flex;
  justify-content: space-between;
}
ul > li {
  list-style: none;
}
.el-aside::-webkit-scrollbar {
  display: none;
}
</style>
