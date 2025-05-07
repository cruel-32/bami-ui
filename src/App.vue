<script setup lang="ts">
import { ref } from 'vue'
import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'

const parentValue = ref('테스트')
const onChange = (value: string) => {
  console.log('parent value ::::: ', value)
}
const onClick = (event: Event) => {
  console.log('parent onClick ::::: ', event)
}
</script>

<template>
  <header>
    <div>
      <h1>BamiUI Components</h1>
    </div>
  </header>

  <main>
    <div>
      <h1>Input value : {{ parentValue }}</h1>
      <Input v-model:value="parentValue" @change="onChange" />
    </div>
    <div>
      <h1>Button</h1>
      <Button @click="onClick">Button Test</Button>
    </div>
  </main>
</template>
