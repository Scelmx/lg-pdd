<template>
  <el-container class="lg-style">
    <el-form>
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

          <Rect v-if="details[attr].type==='rect'" @set-distans="setDistans"></Rect>
        </el-form-item>
      </template>
    </el-form>
  </el-container>
</template>

<script setup lang="ts">
import { computed } from "vue";
import schema from "../../../store/modules/schema";
import { getStyle } from "../mixins/viewIterator";
import Rect from "./rect.vue"

const props = defineProps({
  schema: {
    type: Object,
    require: true,
  },
});
const details: any = computed(() => {
  return getStyle(props.schema)
});

const setDistans = (key: string, value: string) => {
  
}
</script>

<style scoped>
</style>