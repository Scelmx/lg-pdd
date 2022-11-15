<template>
  <el-drawer v-model="visible" :title="title" :width="width">
    <el-form>
      <el-form-item label="">
        <el-input v-model="action.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="action.type"></el-input>
      </el-form-item>
    </el-form>
  </el-drawer>
</template>

<script setup type="ts">
const baseAction = defineProps<DrawerAction>();
const { visible, title, width, action } = toRefs(baseAction);
</script>

<style>
</style>