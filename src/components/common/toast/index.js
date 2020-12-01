import Toast from './Toast'
const ToastPlugin = {

}
ToastPlugin.install = (Vue) => {
  // 1. 创建Toast组件构造器
  const ToastConstructor = Vue.extend(Toast)
  // 2. 创建组件构造器实例对象toast
  const toast = new ToastConstructor()
  // 3. 将该实例对象手动挂载到某个元素
  toast.$mount(document.createElement('div'))
  // 4. toast.$el对应的就是div 
  document.body.appendChild(toast.$el)
  // 5. 将toast挂载到Vue原型
  Vue.prototype.$toast = toast
}
export default ToastPlugin 


