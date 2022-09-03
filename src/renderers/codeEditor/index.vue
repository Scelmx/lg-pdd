<template>
  <div ref="codeEditor" class="lg-pdd_code"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import * as monaco from "monaco-editor";

let codeEditor: any = undefined
export default defineComponent({
  props: {
    codeStr: {
      type: String,
    },
    options: {
      type: Object
    }
  },
  data() {
    return {
      
    };
  },
  computed: {
    config() {
      return {
        language: "json",
        automaticLayout: true,
        tabSize: 2,
        overviewRulerBorder: false,
        scrollBeyondLastLine: false,
        minimap: {
          enabled: false, // 不要小地图
        },
        theme: "vs",
      };
    },
  },
  watch: {
    codeStr(oldStr: string, newStr: string) {
      if (oldStr !== newStr) {
        codeEditor.setValue(this.codeStr)
      }
    }
  },
  mounted() {
    this.init();
    // codeEditor.getAction('editor.action.formatDocument').run()
  },
  methods: {
    init() {
      const codeNode = <HTMLElement>this.$refs.codeEditor;
      codeEditor = monaco.editor.create(codeNode, {
        ...Object.assign(this.config, this.options),
        value: this.codeStr,
      });
      this.$emit("init-editor", codeEditor, monaco);
    },
  },
});
</script>

<style scoped>
.lg-pdd_code {
  min-height: 180px;
}
</style>