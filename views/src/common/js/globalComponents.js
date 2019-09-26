import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'

function plugin (Vue) {
  if (plugin.installed) {
    return
  }
  Vue.component('Footer', Footer)
  Vue.component('Header', Header)
}

export default plugin
