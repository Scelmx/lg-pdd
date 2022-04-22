<template>
  <el-container class="lg-design">
    <el-header class="lg-header__container"></el-header>
    <section class="lg-center__container">
      <LeftPanel />
      <CenterPanel :schema="schema"/>
      <RightPanel :active-schema="{ name: 'zyx' }"/>
    </section>
  </el-container>
</template>

<script lang="ts">
import LeftPanel from './view/LeftPanel.vue'
import CenterPanel from './view/CenterPanel.vue'
import RightPanel from './view/RightPanel.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    LeftPanel,
    CenterPanel,
    RightPanel
  },
  data() {
    return {
      schema: { type: 'page', name: 'page', children: [] }
    }
  }
})
</script>

<style>
html,body,#app {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}
.lg-design {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.lg-header__container {
  height: 48px;
  border-bottom: 1px solid #000;
}
.lg-center__container {
  flex: 1;
  display: flex;
  justify-content: space-between;
}
ul > li {
  list-style: none;
}
</style>
