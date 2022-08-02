import { Button, Result } from 'antd';

/*
 * @LastEditors: wangziteng
 * @title:
 * @Description:
 * @MockApi: http://yapi.imeete.com/
 */
export default ({ errorname = '' }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <Result
        status="403"
        title=""
        subTitle={
          <span style={{ fontSize: 16, color: '#333333bb' }}>
            你当前暂无<strong>{errorname}</strong>
            <br />
          </span>
        }
      />
    </div>
  );
};
