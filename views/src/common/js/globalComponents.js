import Footer from '@/components/common/Footer'

function plugin (Vue) {
    if (plugin.installed) {
      	return
    }
    Vue.component('Footer', Footer)
}

export default plugin
