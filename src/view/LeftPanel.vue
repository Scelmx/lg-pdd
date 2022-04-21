<template>
  <el-aside class="lg-design__left">
    <draggable
      class="lg-drag__list"
      v-model="list"
      :group="{ name: 'lgDraggable', pull: 'clone', put: false }"
      draggable=".lg-item"
    >
      <transition-group>
        <div v-for="(config, allIndex) of list" :key="allIndex">
          <ul v-for="(item, index) of config" :key="index">
            <li class="lg-item">
              <el-button size="small" class="lg-item">{{ item.name }}</el-button>
            </li>
          </ul>
        </div>
      </transition-group>
    </draggable>
  </el-aside>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import allConfig from "../config/index";

export default defineComponent({
    setup(props: any) {
    },
    data() {
      return {
        list: allConfig
      }
    },
    computed: {
    }
})

</script>

<style>
.lg-design__left {
  flex: .2;
} 
</style>
