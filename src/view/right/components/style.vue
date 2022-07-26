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
        </el-form-item>
      </template>
    </el-form>
  </el-container>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { getAttr } from "../mixins/viewIterator";

const props = defineProps({
  schema: {
    type: Object,
    require: true,
  },
});
const details: any = computed(() => {
  return getAttr(props.schema)
});
</script>

<style scoped>
</style>