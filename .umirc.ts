import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'H前端本营',
  mode: 'site',
  // more config: https://d.umijs.org/config
  navs: [
    null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: 'GitHub',
      path: 'https://github.com/h-sina',
    }
  ],
});
