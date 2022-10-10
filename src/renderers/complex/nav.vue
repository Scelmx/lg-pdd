<template>
  <div class="lg-item lg-menu">
    <el-menu
      :default-active="schema.defaultActive"
      :active-text-color="schema.activeTextColor"
      :mode="schema.mode"
    >
      <el-menu-item v-for="(child, index) of schema.children" :key="index">
        <a v-if="child.url !== ''" :href="child.url">{{ child.itemLabel }}</a>
        <template v-else>{{ child.itemLabel }}</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from "vue";
const props = defineProps({
  schema: {
    type: Object,
    default: {},
  }
});
const { schema } = toRefs(props);
</script>

<style scoped>

</style>