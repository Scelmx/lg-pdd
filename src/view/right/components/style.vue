<template>
  <el-container class="lg-style">
    <!-- <el-form>
      <template v-for="(attr, index) of Object.keys(details)">
        <el-form-item
          v-if="details[attr]"
          :key="index"
          :label="details[attr].label"
        >
          <el-input v-if="['input', 'textarea'].includes(details[attr].type)" v-model="props.schema[attr]"></el-input>

          <el-input-number v-if="details[attr].type === 'number'" v-model="props.schema[attr]" @change="handleChange" />

          <el-select v-if="details[attr].type === 'select'" v-model="props.schema[attr]">
            <el-option
              v-for="(opt, optIndex) of details[attr].options"
              :key="optIndex"
              :label="opt.label"
              :value="opt.value"
            ></el-option>
          </el-select>

          <el-color-picker v-if="details[attr] === 'color'" v-model="props.schema[attr]"></el-color-picker>

          <Rect v-if="details[attr].type==='rect'" @set-distans="setDistans"></Rect>
        </el-form-item>
      </template>
    </el-form>-->
    <Codemirror
      ref="styleCode"
      :value="getStyleStr"
      :options="codeOptions"
      placeholder="测试 placeholder"
      :height="400"
      @change="codeChange"
      @ready="initCodeEditor"
    />
  </el-container>
</template>

<script setup lang="ts">
import { computed, getCurrentInstance, onMounted, reactive, toRefs } from "vue";
import { getStyle } from "../mixins/viewIterator";
// import CodeEditor from "@/components/codeEditor.vue";
import Rect from "./rect.vue"

const props = defineProps({
  schema: {
    type: Object,
    require: true,
    default: () => ({}),
  },
});

const { schema } = toRefs(props);

const getStyleStr = computed(() => {
  const value: string = JSON.stringify(schema.value.style, null, 2);
  return `.${schema.value.name} ${value?.replaceAll(",", ";") || value}`
})



const details: any = computed(() => {
  return getStyle(schema);
});

const codeOptions = reactive({
  mode: "css", // 语言模式
  theme: "juejin", // 主题
  lineNumbers: false,
  smartIndent: true, // 智能缩进
  indentUnit: 4, // 智能缩进单位为4个空格长度
  // foldGutter: true, // 启用行槽中的代码折叠
  styleActiveLine: true, // 显示选中行的样式
});

const setDistans = (key: string, value: string) => {};

const codeChange = (val: string, codeMirror: any) => {
  try {
    schema.value.style = JSON.parse(val);
  } catch (err: any) {
    // console.warn(err, "右侧样式代码片输入值异常")
  }
};
const initCodeEditor = (cm: any) => {
  console.log(cm, "!23");
  cm.save = function(cm: any) {
    try {
      schema.value.style = JSON.parse(cm.getValue());
      alert(123123);
    } catch (err: any) {
      console.log(err);
    }
  };

};
</script>

<style scoped>
</style>