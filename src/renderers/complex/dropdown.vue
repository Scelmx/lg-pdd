<template>
  <div class="lg-item lg-dropdown">
    <el-dropdown>
      <span class="el-dropdown-link">
        {{ schema.context }}
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item v-for="(child, index) of schema.children" :key="index" :disabled="child.disabled" :divided="child.divided">
            {{ child.itemLabel }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
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