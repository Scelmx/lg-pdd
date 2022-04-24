<template>
  <draggable :tag="attrs.tag" :list="schema.children" group="lgDraggable" :class="className">
    <component
      v-for="(item, index) of schema.children"
      :key="index"
      :is="item.type"
      :schema="item"
      class="lg-item"
      :data-id="item.id"
    />
  </draggable>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { VueDraggableNext } from "vue-draggable-next";
import button from "./basic/button.vue";
import input from "./basic/input.vue";
import text from "./basic/text.vue";
import empty from "./complex/empty.vue";
import table from "./complex/table.vue";
import result from "./complex/result.vue";
import steps from "./complex/steps.vue";
import breadcrumb from "./complex/breadcrumb.vue";

export default defineComponent({
  components: {
    draggable: VueDraggableNext,
    button,
    input,
    empty,
    text,
    table,
    result,
    steps,
    breadcrumb
  },
  props: {
    attrs: { type: Object, default: () => {} },
    schema: { type: Object, default: () => {} },
  },
  computed: {
    className() {
      return `${this.attrs.className || ""} ${
        this.schema.className || ""
      } lg-container lg-item`;
    },
  },
  methods: {},
});
</script>

<style scoped>
.lg-container {
  border: 1px dashed #000;
}
.lg-container:empty {
  min-height: 80px;
}
</style>