<template>
    <el-form class="lg-form">
        <el-form-item v-for="(item, index) of schema.children" :key="index" :label="item.label">
            <component :is="item.type" :schema="Object.assign(item, { formItem: true })"/>
        </el-form-item>
    </el-form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import button from '../basic/button.vue'
import input from '../basic/input.vue'
import text from '../basic/text.vue'

export default defineComponent({
    components: {
        button,
        input,
        text
    },
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
