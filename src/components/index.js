import layoutAside from './home/layout-aside'
import layoutHeader from './home/layout-header'
import breadCrumb from './common/bread-crumb'
import { quillEditor } from 'vue-quill-editor'
import CoverImage from './publishs/cover-image'
import SelectImage from './publishs/select-image'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
export default {
  install (Vue) {
    Vue.component('layout-aside', layoutAside)// 注册全局组件
    Vue.component('layout-header', layoutHeader)// 注册全局组件
    Vue.component('bread-crumb', breadCrumb)// 全局注册面包屑
    Vue.component('quill-editor', quillEditor)
    Vue.component('cover-image', CoverImage)
    Vue.component('select-image', SelectImage)
  }
}
