<template>
  <section class="lg-canvas">
    <component v-for="(item, index) of [schema]" :key="index" :is="item.type" :schema="item" />
  </section>
</template>

<script setup lang="ts">
import { defineComponent, toRefs, watch } from "vue";

interface LgComponent {
    schema: any
}

const props = defineProps<LgComponent>()
const { schema } = toRefs(props)

</script>

<style scoped lang="scss">
.lg-canvas {
  min-height: 300px;
  .lg-container {
    width: 100%;
    &:empty {
      min-height: 50px;
    }
  }
  .lg-item {
    display: inline-block;
    width: 274px;
  }
}
</style>
