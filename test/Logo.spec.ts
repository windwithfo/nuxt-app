import { describe, test, expect } from 'bun:test'
import { mount } from '@vue/test-utils'
import Logo from '@/components/Logo.vue'

describe('Logo', () => {
  test('is a Vue instance', () => {
    console.log(Logo)
    const wrapper = mount(Logo)
    // expect(wrapper.vm).toBeTruthy()
  })
})
