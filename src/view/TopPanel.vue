<template>
  <el-header class="lg-pdd_header">
    <div class="lg-pdd_header-left">
      <el-button type="text" icon="" @click="backOff">x</el-button>
      <el-button type="text" icon="" @click="forward">√</el-button>
      <el-button type="text" icon="" @click="save">保存</el-button>
    </div>
    <div class="lg-pdd_header-right">
      <el-button type="primary" @click="preview">预览</el-button>
    </div>
  </el-header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    // 后退
    backOff() {

    },
    // 前进
    forward() {

    },
    // 保存
    save() {

    },
    // 预览
    preview() {
      
    }
  }
});
</script>

<style scoped>
.lg-pdd_header {
  height: 48px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 16px #6c6b6b;
}
.lg-pdd_header-left, .lg-pdd_header-right {
  display: inline-block;
  line-height: 48px;
}
</style>
