import { mount } from '@vue/test-utils';

import BaseButton from './BaseButton.vue';

describe('displays message', () => {
  it('renders empty content via slot', () => {
    const wrapper = mount(BaseButton);

    expect(wrapper.text()).toContain('');
  });

  it('renders given content via slot', () => {
    const wrapper = mount(BaseButton, {
      slots: {
        default: 'lorem ipsum',
      },
    });

    expect(wrapper.text()).toContain('lorem ipsum');
  });

  it('emits a click event when clicked', async () => {
    const wrapper = mount(BaseButton);
    const button = wrapper.find('button');

    button.trigger('click');
    /**
     * Since Vue.js updates the component asynchronously,
     * we wait for the next tick using `await wrapper.vm.$nextTick()`
     * before checking the component's emitted events.
     */
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().click).toBeTruthy();
  });
});
