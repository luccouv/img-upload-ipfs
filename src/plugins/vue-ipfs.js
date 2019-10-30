import IPFS from 'ipfs'
//Creates our IPFS node
const plugin = {
  install(Vue, opts = {}) {
    Vue.prototype.$ipfs = IPFS.create(opts)
  },
}

// Auto-install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}
//Imported in main.js
export default plugin
