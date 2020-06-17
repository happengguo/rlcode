import RlCanvasCode from "./RlCanvasCode.vue";
// 为组件提供 install 安装方法，供按需引入
RlCanvasCode.install = function(Vue) {
  Vue.component(RlCanvasCode.name, RlCanvasCode);
};
export default RlCanvasCode;
