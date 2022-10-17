<template>
  <el-drawer
    v-model="props.visible"
    title="导出代码"
    close-on-click-modal="false"
    close-on-press-escape="false"
    @close="closeDraw"
  >
    <div class="draw-content">
      <el-form label-width="40px">
        <el-form-item label="框架">
          <el-select v-model="exportType" @change="languageChange">
            <el-option label="html" value="html"></el-option>
            <el-option label="vue" value="vue"></el-option>
            <el-option label="react" value="react"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="UI">
          <el-select v-model="exportUi" @change="UIChange">
            <el-option v-if="exportType === 'html'" label="无" value="default"></el-option>
            <el-option v-if="exportType === 'vue'" label="ElementUI" value="elementUI"></el-option>
            <el-option v-if="exportType === 'vue'" label="Vant" value="Vant"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="generateCode">确定</el-button>
          <el-button type="text" @click="download"></el-button>
        </el-form-item>
      </el-form>
    </div>
    <CodeEditor :code-str="code" :options="options" @init-editor="initEditor"></CodeEditor>
  </el-drawer>
</template>

<script setup lang="ts" name="export-code">
import { computed, ref, toRaw } from "vue";
import Design from "../../../utils/analyze";
import CodeEditor from "../../../renderers/codeEditor/index.vue"
import { useStore } from "vuex";

const props = defineProps({
  visible: Boolean,
});
let editor: any = undefined
const $store = useStore()
const $schemaStore = $store.state.schemaStore
const schema = computed(() => {
  const res: string = toRaw($schemaStore.schema)
  return res || {}
});
const design = new Design(schema.value);
const exportType = ref("html");
const exportUi = ref("default");
const code = ref(design.analyzeDesign(exportType.value).getCode());
const options = computed(() => {
  return { language: exportType.value }
})
const $emit = defineEmits(["close"]);

const generateCode = () => {
  const res: string = design.analyzeDesign(exportType.value).getCode()
  code.value = res
}

const download = () => {
  // 请求接口
}

const languageChange = (val: string) => {
  exportType.value = val;
  if (val === 'vue') {
    exportUi.value = 'elementUI';
  }
  if (val === 'html') {
    exportUi.value = 'default';
  }
  design.setUI(exportUi.value);
  generateCode();
}

const UIChange = (val: string) => {
  exportUi.value = val;
  design.setUI(val);
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
