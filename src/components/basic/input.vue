<template>
    <div class="lg-item lg-input">
        <label v-if="!schema.formItem" :for="schema.name">{{schema.label}}</label>
        <el-input :name="schema.name">{{schema.text}}</el-input>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
    props: {
        schema: {
            type: Object,
            default: {}
        }
    }
})
</script>

<style scoped>

</style>
