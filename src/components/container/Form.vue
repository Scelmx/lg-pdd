<template>
    <Renderer :attrs="attrs" :schema="schema"></Renderer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Renderer from '../Renderer.vue'

export default defineComponent({
    components: {
        Renderer
    },
    props: {
        schema: {
            type: Object,
            default: {}
        }
    },
    computed: {
        attrs() {
            return { tag: 'el-form' }
        }
    },
    created() {
        console.log(123456)
    }
})
</script>

<style scoped>
.lg-page {
    min-height: 300px;
    height: 100%;
}
</style>
