import { mount } from 'enzyme';
import React from 'react';
import { act } from 'react-dom/test-utils';
import ProTable from '@ant-design/pro-table';
import { columns } from './demo';
import { waitForComponentToPaint } from '../util';

describe('Table ColumnSetting', () => {
  it('🎏 columnSetting', async () => {
    const html = mount(
      <ProTable
        size="small"
        columns={columns}
        request={async () => {
          return {
            data: [
              {
                key: 1,
                name: `TradeCode ${1}`,
                createdAt: 1602572994055,
              },
            ],
            success: true,
          };
        }}
        rowKey="key"
      />,
    );
    await waitForComponentToPaint(html);

    act(() => {
      const icon = html.find('.ant-pro-table-list-toolbar-setting-item .anticon-setting');
      icon.simulate('click');
    });
    await waitForComponentToPaint(html);
    const overlay = html.find('.ant-pro-table-column-setting-overlay');
    expect(overlay.exists()).toBeTruthy();

    act(() => {
      const item = html.find('span.ant-pro-table-column-setting-list-item').first();
      item
        .find('.ant-pro-table-column-setting-list-item-option .anticon-vertical-align-top')
        .simulate('click');
    });
    await waitForComponentToPaint(html);
    const titleList = html.find(
      '.ant-pro-table-column-setting-overlay .ant-pro-table-column-setting-list-title',
    );
    expect(titleList.length).toBe(2);
  });

  it('🎏 columnSetting columnsStateMap props', async () => {
    const html = mount(
      <ProTable
        size="small"
        columnsStateMap={{
          index: { fixed: 'left' },
          Age: { show: false },
          option: { fixed: 'right' },
        }}
        columns={columns}
        request={async () => {
          return {
            data: [
              {
                key: 1,
                name: `TradeCode ${1}`,
                createdAt: 1602572994055,
              },
            ],
            success: true,
          };
        }}
        rowKey="key"
      />,
    );
    await waitForComponentToPaint(html);

    act(() => {
      const icon = html.find('.ant-pro-table-list-toolbar-setting-item .anticon-setting');
      icon.simulate('click');
    });
    await waitForComponentToPaint(html);
    let overlay = html.find(
      '.ant-pro-table-column-setting-overlay .ant-pro-table-column-setting-list-title',
    );
    expect(overlay.length).toBe(3);

    act(() => {
      html.setProps({
        columnsStateMap: {
          index: { fixed: 'left' },
        },
      });
    });
    await waitForComponentToPaint(html);
    overlay = html.find(
      '.ant-pro-table-column-setting-overlay .ant-pro-table-column-setting-list-title',
    );
    expect(overlay.length).toBe(2);
  });

  it('🎏 columnSetting columnsStateMap onChange', async () => {
    const callBack = jest.fn();
    const html = mount(
      <ProTable
        size="small"
        columnsStateMap={{
          index: { fixed: 'left' },
          Age: { show: false },
          option: { fixed: 'right' },
        }}
        onColumnsStateChange={callBack}
        columns={columns}
        request={async () => {
          return {
            data: [
              {
                key: 1,
                name: `TradeCode ${1}`,
                createdAt: 1602572994055,
              },
            ],
            success: true,
          };
        }}
        rowKey="key"
      />,
    );

    await waitForComponentToPaint(html, 200);
    act(() => {
      const icon = html.find('.ant-pro-table-list-toolbar-setting-item .anticon-setting');
      icon.simulate('click');
    });
    await waitForComponentToPaint(html);

    const reset = html.find('.ant-pro-table-column-setting-title a');
    act(() => {
      reset.simulate('click');
    });
    await waitForComponentToPaint(html);

    expect(callBack).toBeCalled();
  });

  it('🎏 columnSetting select all', async () => {
    const callBack = jest.fn();
    const html = mount(
      <ProTable
        size="small"
        onColumnsStateChange={() => {
          callBack();
        }}
        columns={[
          {
            title: 'Name',
            key: 'name',
            dataIndex: 'name',
            copyable: true,
          },
        ]}
        request={async () => {
          return {
            data: [
              {
                key: 1,
                name: `TradeCode ${1}`,
                createdAt: 1602572994055,
              },
            ],
            success: true,
          };
        }}
        rowKey="key"
      />,
    );

    await waitForComponentToPaint(html, 200);
    act(() => {
      const icon = html.find('.ant-pro-table-list-toolbar-setting-item .anticon-setting');
      icon.simulate('click');
    });

    await waitForComponentToPaint(html, 200);

    act(() => {
      html
        .find('.ant-pro-table-column-setting-title .ant-checkbox-wrapper')
        .find('.ant-checkbox-input')
        .simulate('change', {
          target: {
            checked: false,
          },
        });
    });

    await waitForComponentToPaint(html, 200);

    expect(html.find('span.ant-checkbox.ant-checkbox-checked').length).toBe(0);

    act(() => {
      html
        .find('.ant-pro-table-column-setting-title .ant-checkbox-wrapper')
        .find('.ant-checkbox-input')
        .simulate('change', {
          target: {
            checked: true,
          },
        });
    });
    await waitForComponentToPaint(html);

    expect(html.find('span.ant-checkbox.ant-checkbox-checked').length).toBe(2);

    expect(callBack).toBeCalled();
  });

  it('🎏 columnSetting select one', async () => {
    const callBack = jest.fn();
    const html = mount(
      <ProTable
        size="small"
        onColumnsStateChange={() => {
          callBack();
        }}
        columns={[
          {
            title: 'Name',
            key: 'name',
            dataIndex: 'name',
            copyable: true,
          },
        ]}
        request={async () => {
          return {
            data: [
              {
                key: 1,
                name: `TradeCode ${1}`,
                createdAt: 1602572994055,
              },
            ],
            success: true,
          };
        }}
        rowKey="key"
      />,
    );

    await waitForComponentToPaint(html, 200);
    act(() => {
      const icon = html.find('.ant-pro-table-list-toolbar-setting-item .anticon-setting');
      icon.simulate('click');
    });

    await waitForComponentToPaint(html, 200);

    act(() => {
      html
        .find('.ant-pro-table-column-setting-list .ant-checkbox-wrapper')
        .find('.ant-checkbox-input')
        .simulate('change', {
          target: {
            checked: false,
          },
        });
    });

    await waitForComponentToPaint(html, 200);

    expect(html.find('span.ant-checkbox.ant-checkbox-checked').length).toBe(0);

    act(() => {
      html
        .find('.ant-pro-table-column-setting-list .ant-checkbox-wrapper')
        .find('.ant-checkbox-input')
        .simulate('change', {
          target: {
            checked: true,
          },
        });
    });
    await waitForComponentToPaint(html);

    expect(html.find('span.ant-checkbox.ant-checkbox-checked').length).toBe(2);

    expect(callBack).toBeCalled();
  });
});
