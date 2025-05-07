<script setup lang="ts">
import { ref } from 'vue'
defineOptions({
  name: 'BInput',
})
const props = withDefaults(
  defineProps<{
    type?: 'submit' | 'reset' | 'button'
  }>(),
  {
    type: 'submit', // 기본값
    // messages: () => [], // array는 함수 형태
  },
)
const emits = defineEmits<{
  (event: 'click', payload: Event): void
}>()

const onClick = (event: Event) => {
  console.log('onClick ::::: ', event)
  emits('click', event)
}
</script>

<template>
  <button :type="props.type" @click="onClick"><slot></slot></button>
</template>
