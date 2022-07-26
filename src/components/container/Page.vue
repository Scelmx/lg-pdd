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
    created() {
    },
    computed: {
        attrs() {
            return { tag: 'div', className: 'lg-page lg-container' }
        }
    }
})
</script>

<style scoped>
</style>
