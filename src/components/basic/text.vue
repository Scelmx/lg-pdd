<template>
  <div class="lg-item lg-text">
    <label v-if="!schema.formItem" :for="schema.name">{{schema.label}}</label>
    <a v-if="isA" :href="schema.href">{{schema.value}}</a>
    <text v-else>{{schema.text}}</text>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
  props: {
    schema: {
      type: Object,
      default: {},
    },
  },
  computed: {
    isA() {
      return this.schema.href !== "";
    },
  },
});
</script>

<style scoped>
</style>
