import { defineConfig } from 'umi';
import { routers } from './src/router';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: routers,
  fastRefresh: {},
});
