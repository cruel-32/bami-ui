import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Button from '@/components/Button.vue'

describe('Button', () => {
  it('renders properly', () => {
    const wrapper = mount(Button)
    expect(wrapper.text()).toContain('Button')
  })
})
