

<template>
    <el-aside class="lg-design__right">
        
    </el-aside>
</template>

<script lang="ts">
import { defineComponent } from "vue"
const active = undefined
export default defineComponent({
    props: {
        activeSchema: {
            type: Object,
            default: undefined
        }
    },
    setup(props: any) {
        console.log('right-panel', props.activeSchema);
    }
})
    

</script>

<style scoped>
.lg-design__right {
    flex: .2;
}
</style>
