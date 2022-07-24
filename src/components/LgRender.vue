<template>
    <section class="lg-canvas">
        <component v-for="(item, index) of [schema]" :key="index" :is="item.type" :schema="item"/>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import page from './container/page.vue'

export default defineComponent({
    components: {
        page
    },
    props: {
        schema: {
            type: Object,
            default: {}
        }
    },
    setup(props: any) {
        console.log(props.schema)
    },
    computed: {
        
    }
})
</script>

<style scoped>
.lg-canvas {
    min-height: 300px;
}
</style>