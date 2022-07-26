<template>
  <div>
    <div>
      <el-input v-model="distansObj.top" type="text" @change="changeDistans('top')"/>
    </div>
    <div>
      <el-input v-model="distansObj.left" type="text" @change="changeDistans('left')"></el-input>
      <div><el-input v-model="distans" @change="association"></el-input></div>
      <el-input v-model="distansObj.right" type="text" @change="changeDistans('right')"></el-input>
    </div>
    <div>
      <el-input v-model="distansObj.bottom" type="text" @change="changeDistans('bottom')"></el-input>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRaw } from "vue"

const props = defineProps({
  key: {
    type: String,
    default: ""
  }
})

const $emit = defineEmits(["set-distans"])


const distansObj = ref({
  left: "",
  top: "",
  right: "",
  bottom: ""
})
const distans: any = ref("")
const association = (value: string) => {
  setDistansObj('all', value)
  setDistans()
}
const setDistansObj = (type: string, value: string) => {
  const obj: any = toRaw(distansObj.value)
  switch(type) {
    case "all": Object.keys(obj).forEach((key) => {
      obj[key] = value
    }); break;
    case "left": distansObj.value.left = value; break;
    case "top": distansObj.value.top = value; break;
    case "right": distansObj.value.right = value; break;
    case "bottom": distansObj.value.bottom = value; break;
  }
}

const changeDistans = (key: string) => {
  const obj: any = toRaw(distansObj.value)
  setDistansObj(key, obj[key])
  distans.value = "自定义"
  setDistans()
}

const setDistans = () => {
  const { left, top, right, bottom } = distansObj.value
  $emit('set-distans', props.key, `${top} ${right} ${bottom} ${left}`)
}
</script>
