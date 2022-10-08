import { defineComponent, Component, h } from 'vue';
import Header from '@/components/core/Header.vue';
import Footer from '@/components/core/Footer.vue';

export default function PageLayout(component: Component) {
  const content = () =>
    h(
      'div',
      {
        class: 'layout__content',
      },
      [h(component)],
    );

  return defineComponent({
    name: 'PageLayout',
    render() {
      return h(
        'main',
        {
          class: 'container layout',
        },
        [h(Header), content(), h(Footer)],
      );
    },
  });
}
