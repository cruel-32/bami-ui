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
  const target = event.currentTarget as HTMLInputElement
  emits('change', target.value || '')
}

const onInput = (event: Event) => {
  console.log('onInput ::::: ', event)
  const target = event.currentTarget as HTMLInputElement
  emits('update:value', target.value || '')
}
</script>

<template><input :value="props.value" @input="onInput" @change="onChange" /></template>
