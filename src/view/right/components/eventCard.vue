<template>
  <el-container class="lg-event">
    <div>
      <el-input v-model="event.name"></el-input>
    </div>
    <div>
      触发条件：
      <el-select v-model="event.trigger"></el-select>
    </div>
    <div>
      事件动作:
      <el-textarea name="" id="" cols="30" rows="10" v-model="event.content"></el-textarea>
    </div>
  </el-container>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from 'vue';

interface Props {
  event: LgEvent
}

interface LgEvent {
  name: string,
  trigger: string,
  content?: string | object
}

const props = defineProps<Props>();
const { event } = toRefs(props);
</script>

<style scoped>

</style>