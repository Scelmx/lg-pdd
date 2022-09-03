<template>
  <div class="lg-item lg-input">
    <el-input
      v-if="schema.category !== 'number'"
      v-model="value"
      :name="schema.name"
      :type="schema.category"
      :style="style"
      :maxlength="schema.maxlength"
      :minlength="schema.minlength"
      :placeholder="schema.placeholder"
      :rows="schema.rows"
      :size="schema.size"
      :prefixIcon="schema.prefixIcon"
      :suffixIcon="schema.suffixIcon"
      :resize="schema.resize"
      :clearable="schema.clearable"
      :showWordLimit="schema.showWordLimit"
      :validateEvent="schema.validateEvent"
      @input="handleChange"></el-input>
    <el-input-number
      v-else
      v-model="value"
      :name="schema.name"
      :style="style"
      :placeholder="schema.placeholder"
      :max="schema.max"
      :min="schema.min"
      :step="schema.step"
      :precision="schema.precision"
      :controls="schema.controls"
      :size="schema.size"
      @input="handleChange"
    >
    </el-input-number>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, getCurrentInstance, onMounted, toRefs, watch } from "vue";
import { useData } from "../data";

const props = defineProps({
  schema: {
    type: Object,
    default: {},
  },
});
const { schema } = toRefs(props)

const { style, ...attrs } = schema.value;
const $data = useData(schema);
const { value, initData, handleChange } = $data;
initData();
</script>
