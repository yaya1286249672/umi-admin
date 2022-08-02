import {
  PageContainer,
  ProLayout,
  SettingDrawer,
} from '@ant-design/pro-layout';
import {
  AntDesignOutlined,
  CrownOutlined,
  SmileOutlined,
  TabletOutlined,
} from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { history } from 'umi';

const defaultProps = {
  route: {
    path: '/',
    routes: [
      {
        path: '/welcome',
        name: '欢迎',
        icon: <SmileOutlined />,
        component: '@/pages/user-manage',
      },
      {
        path: '/admin',
        name: '管理页',
        icon: <CrownOutlined />,
        access: 'canAdmin',
        component: './Admin',
        routes: [
          {
            path: '/admin/sub-page1',
            name: '一级页面',
            icon: <CrownOutlined />,
            component: './Welcome',
          },
          {
            path: '/admin/sub-page2',
            name: '二级页面',
            icon: <CrownOutlined />,
            component: './Welcome',
          },
          {
            path: '/admin/sub-page3',
            name: '三级页面',
            icon: <CrownOutlined />,
            component: './Welcome',
          },
        ],
      },
      {
        name: '列表页',
        icon: <TabletOutlined />,
        path: '/list',
        component: './ListTableList',
        routes: [
          {
            path: '/list/sub-page',
            name: '一级列表页面',
            icon: <CrownOutlined />,
            routes: [
              {
                path: 'sub-sub-page1',
                name: '一一级列表页面',
                icon: <CrownOutlined />,
                component: './Welcome',
              },
              {
                path: 'sub-sub-page2',
                name: '一二级列表页面',
                icon: <CrownOutlined />,
                component: './Welcome',
              },
              {
                path: 'sub-sub-page3',
                name: '一三级列表页面',
                icon: <CrownOutlined />,
                component: './Welcome',
              },
            ],
          },
          {
            path: '/list/sub-page2',
            name: '二级列表页面',
            icon: <CrownOutlined />,
            component: './Welcome',
          },
          {
            path: '/list/sub-page3',
            name: '三级列表页面',
            icon: <CrownOutlined />,
            component: './Welcome',
          },
        ],
      },
      {
        path: 'https://ant.design',
        name: 'Ant Design 官网外链',
        icon: <AntDesignOutlined />,
      },
    ],
  },
  fixSiderbar: true,
  layout: 'top',
  navTheme: 'light',
  // location: {
  //   pathname: '/',
  // },
};
const Layout = ({ children }: any) => {
  console.log('children=======>', children);
  const [pathname, setPathname] = useState('/welcome');
  // 当前 history 跳转的 action，有 PUSH、REPLACE 和 POP 三种类型
  const { action } = history;
  // location 对象，包含 pathname、search 和 hash
  const { pathname: currentPathname } = history.location;

  useEffect(() => {
    setPathname(currentPathname);
  }, [currentPathname]);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ProLayout
        {...defaultProps}
        onMenuHeaderClick={(e) => console.log(e)}
        location={{
          // ...location,
          pathname,
        }}
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              setPathname(item.path || '/welcome');
              history.push(item?.path);
            }}
          >
            {dom}
          </a>
        )}
      >
        {children}
      </ProLayout>
    </div>
  );
};

export default Layout;
