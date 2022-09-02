<template>
  <el-container class="lg-attrs">
    <el-form label-width="80px">
      <template v-for="(key, index) of Object.keys(details)">
        <el-form-item
          v-if="details[key]"
          :key="index"
          :label="details[key].label"
        >
          <el-input v-if="['input', 'textarea'].includes(details[key].type)" :type="details[key].type" :rows="2" v-model="schema[key]" ></el-input>

          <el-input-number v-if="details[key].type === 'number'" v-model="schema[key]" @change="handleChange" />

          <el-select v-if="details[key].type === 'select'" v-model="schema[key]">
            <el-option
              v-for="(opt, optIndex) of details[key].options"
              :key="optIndex"
              :label="opt.label"
              :value="opt.value"
            ></el-option>
          </el-select>
          
          <el-switch v-if="details[key].type === 'switch'" v-model="schema[key]"></el-switch>
        </el-form-item>
      </template>
    </el-form>
  </el-container>
</template>

<script setup lang="ts">
import { computed, defineProps, toRefs } from "vue";
import { getAttr } from "../mixins/viewIterator"

const props = defineProps({
  schema: {
    type: Object,
    require: true,
  },
});

const { schema } = toRefs(props)
const details: any = computed(() => {
  console.log(details, "123");
  return getAttr(schema.value)
});
</script>

<style scoped>
.lg-attrs {
  height: 100%;
}
.el-form-item__label {
  font-size: 12px;
}
</style>