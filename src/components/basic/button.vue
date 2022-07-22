<template>
    <div class="lg-item lg-button">
        <el-button>{{schema.text}}</el-button>
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
