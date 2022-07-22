<template>
  <el-container class="lg-attrs">
    <el-form>
      <el-form-item
        v-for="(attr, index) of Object.keys(details)"
        :key="index"
        :label="details[attr].label"
      >
        <el-input v-if="['input', 'textarea'].includes(details[attr].type)"></el-input>

        <el-input-number v-if="details[attr].type === 'number'" @change="handleChange" />

        <el-select v-if="details[attr].type === 'select'">
          <el-option
            v-for="(opt, optIndex) of details[attr].options"
            :key="optIndex"
            :label="opt.label"
            :value="opt.value"
          ></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </el-container>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  schema: {
    type: Object,
    require: true,
  },
});
const details = computed(() => {
  return {
    name: {
      label: "xxx",
      type: "number",
    },
  };
});
console.log(Object.keys(details.value), "====");
</script>

<style scoped>
.lg-attrs {
  height: 100px;
}
</style>