<template>
  <div class="lg-design__center" @click="setActive">
    <LgRender :schema="schema" :actions="[]" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import LgRender from "../renderers/LgRender.vue";
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
            children: [
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
        ],
      },
    },
  },
  components: {
    LgRender,
  },
  computed: {
    getSchema() {
      return this.schema || {};
    },
  },
  methods: {
    componentNode() {
      const renderNode = this.$el.querySelector(
        ".lg-design__center .lg-canvas"
      );
      if (renderNode) {
        return renderNode.querySelectorAll(".lg-item") || [];
      }
      return [];
    },
    setActive(e: any) {
      const activeClass = "lg-item--active";
      const node: any = e.target;
      this.clearActive(activeClass);
      node.classList.add(activeClass);
      const active = node.getAttribute("data-id");
      this.$emit("activeChange", active);
    },
    clearActive(className: string) {
      const nodeList = this.componentNode();
      for (let node of nodeList) {
        node.classList.remove(className);
      }
    },
  },
});
const dragOptions = computed(() => {
  return { group: { name: "lg-draggable" } };
});
</script>

<style>
.lg-design__center {
  flex: 1;
  height: 100%;
  background: #ccc;
}
/* .lg-page .lg-item */
.lg-canvas .lg-item {
  cursor: pointer;
  /* display: inline-block; */
}
/* .lg-page .lg-item > * */
.lg-canvas .lg-item > * {
  pointer-events: none;
}
.lg-canvas .lg-item.lg-item--active {
  border: 1px #ac1bc4 solid;
}
.lg-design__center > .lg-canvas .lg-page {
  min-height: 100%;
  height: 100%;
}
</style>
