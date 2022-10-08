<template>
  <component
    v-if="!schema.isFormItem"
    :key="index"
    :is="schema.type"
    :schema="schema"
    :class="['page', 'form'].includes(schema.type) ? '' : 'lg-item'"
    :data-id="schema.id"
  />
  <el-form-item v-else :label="schema.label" :label-width="schema.labelWidth">
    <component
      :key="index"
      :is="schema.type"
      :schema="schema"
      :class="['page', 'form'].includes(schema.type) ? '' : 'lg-item'"
      :data-id="schema.id"
    />
  </el-form-item>
</template>

<script setup lang="ts">
import { toRefs } from "vue";

interface Component {
  schema: any;
}

const props = defineProps<Component>();

const { schema } = toRefs(props);

defineExpose();
</script>
