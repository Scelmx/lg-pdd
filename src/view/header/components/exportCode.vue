<template>
  <el-drawer
    v-model="props.visible"
    title="导出代码"
    close-on-click-modal="false"
    close-on-press-escape="false"
    @close="closeDraw"
  >
    <div class="draw-content">
      <el-select v-model="exportType" @change="changeExportType">
        <el-option label="html" value="html"></el-option>
        <el-option label="vue" value="vue"></el-option>
        <el-option label="react" value="react"></el-option>
      </el-select>
    </div>
    <CodeEditor :code-str="code" :options="options" @init-editor="initEditor"></CodeEditor>
  </el-drawer>
</template>

<script setup lang="ts" name="export-code">
import { computed, ref } from "vue";
import Design from "../../../utils/analyze";
import CodeEditor from "../../../components/codeEditor/index.vue"

const props = defineProps({
  visible: Boolean,
});
let editor: any = undefined
const schema = computed(() => {
  return {
    type: "Group",
    id: "",
    class: "lg-pdd_page",
    layers: [
      {
        type: "Group",
        id: "",
        class: "lg-pdd_group",
        layers: [{ type: "Text", id: "", class: "lg-pdd_text", text: "" }],
      },
      { type: "Text", id: "", class: "lg-pdd_text", text: "" },
    ],
  }
});
const design = new Design(schema.value);
const exportType = ref("html");
const code = ref(design.analyzeDesign().getCode(exportType.value));
const options = computed(() => {
  return { language: exportType.value }
})
const $emit = defineEmits(["close"]);

const changeExportType = () => {
  const res: string = design.analyzeDesign().getCode(exportType.value)
  code.value = res
}

const initEditor = (codeEditor: any, monaco: any) => {
  editor = codeEditor
  editor.getAction('editor.action.formatDocument').run()
}

const closeDraw = (): void => {
  $emit("close", false);
};
</script>

<style scoped>
.draw-content {
  display: block;
}
.code {
  margin-top: 16px;
}
</style>