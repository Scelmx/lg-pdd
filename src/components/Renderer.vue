<template>
  <draggable :tag="attrs.tag" :list="schema.children" group="lgDraggable" :class="className">
    {{schema}}
    <component
      v-for="(item, index) of schema.children"
      :key="index"
      :is="item.type"
      :schema="JSON.parse(JSON.stringify(item))"
      :class="['page', 'form'].includes(this.schema.type) ? '' : 'lg-item'"
      :data-id="item.id"
    />
  </draggable>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { VueDraggableNext } from "vue-draggable-next";

export default defineComponent({
  components: {
    draggable: VueDraggableNext,
  },
  props: {
    attrs: { type: Object, default: () => {} },
    schema: { type: Object, default: () => {} },
  },
  computed: {
    className() {
      return `${this.attrs.className || ""} ${this.schema.className || ""}`;
    },
  },
  methods: {},
});
</script>

<style scoped>
.lg-container {
  border: 1px dashed #000;
  display: block;
}
.lg-container:empty {
  min-height: 80px;
}
</style>