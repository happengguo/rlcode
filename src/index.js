/* eslint-disable no-unused-vars */
import RlCanvasCode from "./components/RlCanvasCode";

const components = {
  RlCanvasCode
};

const install = function(Vue, opts = {}) {
  // 判断是否安装
  if (install.installed) return;
  install.installed = true;
  // 遍历注册全局组件
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key]);
  });
};

// 判断是否是直接引入文件
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install
};
export { RlCanvasCode };
