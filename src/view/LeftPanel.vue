<template>
  <el-aside class="lg-design__left">
    <template v-if="true">
      <div v-for="(config, allIndex) of list" :key="allIndex">
        <draggable
          class="lg-drag__list"
          :list="config.list"
          :group="{ name: 'lgDraggable', pull: 'clone', put: false }"
          :clone="clone"
          draggable=".lg-component"
          :sort="false"
        >
          <el-button v-for="(item, index) of config.list" :key="index" size="small" class="lg-component">{{ item.name }}</el-button>
        </draggable>
      </div>
    </template>
    <template v-if="false">
    </template>
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
.lg-design__left.el-aside {
  width: 240px;
  padding: 20px 16px;
  padding-left: 56px;
}
.lg-drag__list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.lg-drag__list > .lg-component {
  width: 80px;
  margin-top: 8px;
}
.lg-drag__list > .lg-component + .lg-component,
.el-button+.el-button {
  margin-left: 0px;
}
</style>
