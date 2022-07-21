<template>
  <div ref="codeEditor" class="lg-pdd_code"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import * as monaco from 'monaco-editor'

export default defineComponent({
  data() {
    return {
      editor: {}
    }
  },
  computed: {
    options() {
      return {
        theme: 'vs-dark'
      }
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const codeNode = <HTMLElement>this.$refs.codeEditor
      this.editor = monaco.editor.create(codeNode, {
        ...this.options,
        model: null,
      })
    }
  }

})
</script>

<style scoped>
.lg-pdd_code {
  min-height: 180px;
}
</style>