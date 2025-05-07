<script setup lang="ts">
import { ref } from 'vue'
defineOptions({
  name: 'BInput',
})
const props = withDefaults(
  defineProps<{
    value: string
  }>(),
  {
    // messages: () => [], // array는 함수 형태
  },
)
const emits = defineEmits<{
  (event: 'change', payload: string): void
  (event: 'update:value', payload: string): void
}>()

const onChange = (event: Event) => {
  console.log('onChange ::::: ', event)
  emits('change', event.target?.value || '')
}

const onInput = (event: Event) => {
  console.log('onInput ::::: ', event)
  emits('update:value', event.target?.value || '')
}
</script>

<template><input :value="props.value" @input="onInput" @change="onChange" /></template>
