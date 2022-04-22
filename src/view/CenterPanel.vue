<template>
  <div class="lg-design__center">
    <LgRender :schema="schema" :actions="[]" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import LgRender from "../components/LgRender.vue";
export default defineComponent({
  props: {
    schema: {
      type: Object,
      default: {
        type: "page",
        name: "lg-page",
        children: [
          {
            type: "form",
            name: "form",
            children: [],
          },
          {
            type: "text",
            name: "text",
            text: "按钮",
            label: "xx",
            href: "",
          },
          {
            type: "button",
            name: "button",
            text: "按钮",
            label: "xx",
          },
          {
            type: "input",
            name: "input",
            text: "输入框",
            label: "xx",
          },
        ],
      },
    },
  },
  components: {
    LgRender,
  },
  computed: {},
  setup(props: any) {
    console.log("center-panel", props.schema);
  },
});
const dragOptions = computed(() => {
  return { group: { name: "lg-draggable" } };
});
</script>

<style scoped>
.lg-design__center {
  border: 1px solid #000;
  flex: 1;
  height: 100%;
  background: #ccc;
}
</style>
