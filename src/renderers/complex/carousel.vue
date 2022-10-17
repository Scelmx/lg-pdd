<template>
  <el-carousel
    :height="schema.height"
    :arrow="schema.arrow"
    :trigger="schema.trigger"
    :interval="schema.interval"
    :initial-index="schema.initialIndex"
    :type="schema.mode"
    :direction="schema.direction"
    :loop="schema.loop"
    :pause-on-hover="schema.pauseOnHover"
    :indicator-position="schema.indicatorPosition">
    <el-carousel-item
      v-for="(item, index) of schema.children"
      :key="index"
      :text="item.context"
      >
        <img v-if="item.tagType !== 'text'" :src="item.context" />
        <span v-else>{{ item.context }}</span>   
    </el-carousel-item>
  </el-carousel>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from "vue";

const props = defineProps({
  schema: {
    type: Object,
    default: {},
  },
});

const { schema } = toRefs(props)
</script>

<style lang="scss" scoped>

</style>
