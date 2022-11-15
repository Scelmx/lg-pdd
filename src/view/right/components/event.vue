<template>
  <el-container>
    <el-button type="primary" @click="addEvent">新建事件</el-button>
    <div>
      <EventCard v-for="(action, index) of actions" :key="index" :event="action"></EventCard>
    </div>
  </el-container>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import EventCard from './eventCard.vue';
function addEvent() {

}
const actions = reactive([{
  name: '11',
  trigger: '11',
  action: {

  }
}, {
  name: '22',
  trigger: '22',
  action: {

  }
}])
</script>

<style scoped>

</style>