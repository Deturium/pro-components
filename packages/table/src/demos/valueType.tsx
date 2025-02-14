import React from 'react';
import moment from 'moment';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Space } from 'antd';

const valueEnum = {
  0: 'close',
  1: 'running',
  2: 'online',
  3: 'error',
};

export type TableListItem = {
  key: number;
  name: string;
  status: string | number;
  updatedAt: number;
  createdAt: number;
  progress: number;
  money: number;
  percent: number | string;
  createdAtRange: number[];
  code: string;
  avatar: string;
};
const tableListDataSource: TableListItem[] = [];

for (let i = 0; i < 2; i += 1) {
  tableListDataSource.push({
    key: i,
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    name: `TradeCode ${i}`,
    status: valueEnum[Math.floor(Math.random() * 10) % 4],
    updatedAt: moment('2019-11-16 12:50:26').valueOf() - Math.floor(Math.random() * 1000),
    createdAt: moment('2019-11-16 12:50:26').valueOf() - Math.floor(Math.random() * 2000),
    createdAtRange: [
      moment('2019-11-16 12:50:26').valueOf() - Math.floor(Math.random() * 2000),
      moment('2019-11-16 12:50:26').valueOf() - Math.floor(Math.random() * 2000),
    ],
    money: Math.floor(Math.random() * 2000) * i,
    progress: Math.ceil(Math.random() * 100) + 1,
    percent:
      Math.random() > 0.5
        ? ((i + 1) * 10 + Math.random()).toFixed(3)
        : -((i + 1) * 10 + Math.random()).toFixed(2),
    code: `const getData = async params => {
  const data = await getData(params);
  return { list: data.data, ...data };
};`,
  });
}

tableListDataSource.push({
  key: 3,
  avatar: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
  name: `TradeCode ${3}`,
  status: 0,
  updatedAt: Date.now() - Math.floor(Math.random() * 1000),
  createdAt: Date.now() - Math.floor(Math.random() * 2000),
  createdAtRange: [
    Date.now() - Math.floor(Math.random() * 2000),
    Date.now() - Math.floor(Math.random() * 2000),
  ],
  money: Math.floor(Math.random() * 2000) * 3,
  progress: Math.ceil(Math.random() * 100) + 1,
  percent:
    Math.random() > 0.5
      ? ((3 + 1) * 10 + Math.random()).toFixed(3)
      : -((3 + 1) * 10 + Math.random()).toFixed(2),
  code: `const getData = async params => {
const data = await getData(params);
return { list: data.data, ...data };
};`,
});

const columns: ProColumns<TableListItem>[] = [
  {
    title: '序号',
    dataIndex: 'index',
    valueType: 'index',
  },
  {
    title: 'border 序号',
    dataIndex: 'index',
    key: 'indexBorder',
    valueType: 'indexBorder',
  },
  {
    title: '代码',
    key: 'code',
    width: 120,
    dataIndex: 'code',
    valueType: 'code',
  },
  {
    title: '头像',
    dataIndex: 'avatar',
    key: 'avatar',
    valueType: 'avatar',
    width: 150,
    render: (dom) => (
      <Space>
        <span>{dom}</span>
        <a href="https://github.com/chenshuai2144" target="_blank" rel="noopener noreferrer">
          chenshuai2144
        </a>
      </Space>
    ),
  },
  {
    title: '操作',
    key: 'option',
    width: 120,
    valueType: 'option',
    render: (_, row, index, action) => [
      <a
        key="a"
        onClick={() => {
          action.startEditable(row.key);
        }}
      >
        编辑
      </a>,
    ],
  },
];

export default () => (
  <>
    <ProTable<TableListItem>
      columns={columns}
      request={() => {
        return Promise.resolve({
          total: 200,
          data: tableListDataSource,
          success: true,
        });
      }}
      rowKey="key"
      headerTitle="样式类"
    />
  </>
);
