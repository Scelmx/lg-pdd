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
  display: block;
  height: calc(100% - 60px);
  padding: 8px;
  overflow: hidden;
  .lg-container {
    display: block;
    width: 100%;
    &:empty {
      min-height: 50px;
    }
  }
  .lg-item {
    display: inline-block;
    width: 274px;
  }
  .lg-page {
    min-height: 100% !important;
  }
}
</style>
