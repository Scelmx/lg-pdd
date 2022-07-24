<template>
  <section class="lg-design">
    <TopPanel></TopPanel>
    <section class="lg-center__container">
      <LeftPanel />
      <CenterPanel :schema="schema"/>
      <RightPanel :active-schema="{ name: 'zyx' }"/>
    </section>
  </section>
</template>

<script lang="ts">
import TopPanel from './view/TopPanel.vue'
import LeftPanel from './view/LeftPanel.vue'
import CenterPanel from './view/CenterPanel.vue'
import RightPanel from './view/RightPanel.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    TopPanel,
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
</style>
