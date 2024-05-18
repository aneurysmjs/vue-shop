import { render } from '@testing-library/vue'

import FeaturedSection from './FeaturedSection.vue'

describe('featuredSection', () => {
  it('renders "text" abd "button" slots', () => {
    const { getByLabelText } = render(FeaturedSection, {
      props: {
        heading: 'yeah',
        bgImage: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-03.jpg',
      },
      slots: {
        text: '<span aria-label="text element">lorem ipsum</span>',
        button: '<button aria-label="button element">click me</button>',
      },
    })

    expect(getByLabelText('text element')).toBeInTheDocument()
    expect(getByLabelText('button element')).toBeInTheDocument()
  })
})
