import { type Plugin, createApp } from 'vue'
import { VueQueryPlugin } from '@tanstack/vue-query'

interface WithSetupOptions {
  plugins: Plugin[]
}

type WithSetup = <C extends (...args: any) => any>(
  composable: C,
  options?: WithSetupOptions,
) => { result: ReturnType<C> }

/**
 * @see https://dev.to/alexanderop/how-to-test-vue-composables-2550
 *
 * is designed to simulate a Vue component's setup function, enabling us to test
 * composables in an environment that closely mimics their real-world use.
 */
export const withSetup: WithSetup = (composable, options) => {
  let result

  const app = createApp({
    setup() {
      result = composable()

      return () => {}
    },
  })

  options?.plugins.forEach((plugin) => {
    app.use(plugin)
  })

  app.mount(document.createElement('div'))

  return {
    result: result as ReturnType<typeof composable>,
  }
}

export const withQuery: WithSetup = (composable, options) => {
  const withQueryOptions = {
    ...options,
    plugins: [VueQueryPlugin, ...(options?.plugins || [])],
  }

  return withSetup(composable, withQueryOptions)
}
