import DefaultTheme from 'vitepress/theme'
import NewsBanner from '../components/NewsBanner.vue'
import { h } from 'vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h(NewsBanner)
    })
  }
}