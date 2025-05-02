import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Input from '@/components/Input.vue'

describe('Input', () => {
  it('renders properly', () => {
    const wrapper = mount(Input)
    expect(wrapper.text()).toContain('Input')
  })
})
