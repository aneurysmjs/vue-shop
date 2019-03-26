import Vue, { CreateElement, Component, AsyncComponent } from 'vue';
import Header from 'core/Header.vue';
import Footer from 'core/Footer.vue';

export default function pageLayout(Component: Component | AsyncComponent) {
  const content = (h: CreateElement) => h('div', {
    class: 'layout__content',
  },
  [
    h(Component),
  ]);
  return Vue.component('pageLayout', {
    render(h) {
      return h('main', {
        class: 'container layout',
      },
      [
        h(Header),
        content(h),
        h(Footer),
      ]);
    },
  });
}
