<template>
  <el-aside class="lg-design__left">
    <div v-for="(config, allIndex) of list" :key="allIndex">
      <draggable
        class="lg-drag__list"
        :list="config.list"
        :group="{ name: 'lgDraggable', pull: 'clone', put: false }"
        :clone="clone"
        draggable=".lg-item"
        :sort="false"
      >
        <el-button v-for="(item, index) of config.list" :key="index" size="small" class="lg-item">{{ item.name }}</el-button>
      </draggable>
    </div>
  </el-aside>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { VueDraggableNext } from 'vue-draggable-next'
import allConfig from "../config/index";
import utils from "../utils/utils"

export default defineComponent({
    components: {
      draggable: VueDraggableNext
    },
    setup(props: any) {
    },
    data() {
      return {
        list: allConfig
      }
    },
    computed: {
    },
    methods: {
      clone(target: any) {
        const data = Object.assign(target.config, { id: utils.createId() })
        return data
      }
    }
})

</script>

<style>
.lg-design__left {
  flex: .2;
} 
</style>
