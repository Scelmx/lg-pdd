<template>
  <section class="lg-design">
    <TopPanel @save="saveSchema"></TopPanel>
    <section class="lg-center__container">
      <LeftPanel />
      <CenterPanel :schema="schema" @active-change="activeTargetChange"/>
      <RightPanel :active-schema="{ name: 'zyx' }"/>
    </section>
  </section>
</template>

<script lang="ts">
import TopPanel from './view/header/TopPanel.vue'
import LeftPanel from './view/LeftPanel.vue'
import CenterPanel from './view/CenterPanel.vue'
import RightPanel from './view/right/RightPanel.vue'
import { defineComponent, toRaw } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  components: {
    TopPanel,
    LeftPanel,
    CenterPanel,
    RightPanel
  },
  data() {
    return {
      schema: { type: 'page', name: 'page', children: [] },
    }
  },
  computed: {
    rootStore() {
      return useStore()
    }
  },
  methods: {
    saveSchema() {
      const config = toRaw(this.schema)
      window.localStorage.setItem("schema", JSON.stringify(config))
    },
    activeTargetChange(id: string) {
      // 直接存入store处理
      this.rootStore.dispatch('setActiveId', id)
      console.log(this.rootStore.state.schemaStore.state, '----')
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
