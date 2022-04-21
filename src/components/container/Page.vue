<template>
    <draggable group="lgDraggable" class="lg-page">
        <component v-for="(item, index) of schema.children" :key="index" :is="item.type" :schema="item"/>
    </draggable>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import button from '../basic/button.vue'
import input from '../basic/input.vue'
import text from '../basic/text.vue'
import form from './Form.vue'

export default defineComponent({
    components: {
        button,
        input,
        text,
        form
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
