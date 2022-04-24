<template>
    <Renderer :attrs="attrs" :schema="schema"></Renderer>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Renderer from "../Renderer.vue"

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
            return { tag: "el-form", className: "lg-form" }
        }
    },
    created() {
        console.log(123456)
    }
})
</script>

<style scoped>
.lg-form {
    height: auto;
    width: 100%;
    display: inline-block;
}
</style>
