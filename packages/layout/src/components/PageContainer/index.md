---
title: PageContainer - 页容器
group:
  path: /
nav:
  title: 组件
  path: /components
---

# PageContainer

PageContainer 是为了减少繁杂的面包屑配置和标题，很多页面都需要面包屑和标题的配置。当然也可以关掉自动生成的，而使用自己的配置。

PageContainer 封装了 antd 的 PageHeader 组件，增加了 tabList 和 content。 根据当前的路由填入 title 和 breadcrumb。它依赖 Layout 的 route 属性。当然你可以传入参数来复写默认值。 PageContainer 支持 Tabs 和 PageHeader 的所有属性。

为了方便进行表单等操作我们增加了一个 footer 属性，可以获得一个一直悬浮在底部的操作栏。如果觉得不方便也可以直接使用 FooterToolbar 来承载操作，两者表现基本相同，但是 FooterToolbar 拥有更多自定义的配置。

```tsx | pure
<PageContainer
  content="欢迎使用 ProLayout 组件"
  tabList={[
    {
      tab: '基本信息',
      key: 'base',
    },
    {
      tab: '详细信息',
      key: 'info',
    },
  ]}
  extra={[
    <Button key="3">操作</Button>,
    <Button key="2">操作</Button>,
    <Button key="1" type="primary">
      主操作
    </Button>,
  ]}
  footer={[
    <Button key="rest">重置</Button>,
    <Button key="submit" type="primary">
      提交
    </Button>,
  ]}
>
  {children}
</PageContainer>
```

## 代码演示

### 基本使用

<code src="./demos/basic.tsx" />

### 固定表头

<code src="./demos/fixHeader.tsx" />

### 隐藏面包屑

<code src="./demos/hideBreadMenu.tsx">

### 页面加载中

<code src="./demos/loading.tsx" />

## API

PageContainer 封装了 ant design 的 PageHeader 组件，增加了 tabList 和 content。 根据当前的路由填入 title 和 breadcrumb。它依赖 Layout 的 route 属性。当然你可以传入参数来复写默认值。 PageContainer 支持 [Tabs](https://ant.design/components/tabs-cn/) 和 [PageHeader](https://ant.design/components/page-header-cn/) 的所有属性。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 内容区 | ReactNode | - |
| extraContent | 额外内容区，位于 content 的右侧 | ReactNode | - |
| tabList | tab 标题列表 | `{key: string, tab: ReactNode}[]` | - |
| tabActiveKey | 当前高亮的 tab 项 | string | - |
| onTabChange | 切换面板的回调 | `(key) => void` | - |
| tabBarExtraContent | tab bar 上额外的元素 | `React.ReactNode` | - |
| header | [PageHeader](https://ant.design/components/page-header-cn/) 的所有属性。 | `PageHeaderProps` | - |
| fixedHeader | 固定 pageHeader 的内容到顶部，如果页面内容较少，最好不要使用，会有严重的遮挡问题 | `boolean` | - |
| affixProps | 固钉的配置，与 antd 完全相同 | `AffixProps` | - |
| footer | 悬浮在底部的操作栏，传入一个数组，会自动加空格 | `ReactNode[]` | - |

> fixedHeader 使用了 antd 的 Affix 实现，默认监听 body，如果你的滚动条不在 body 上需要人肉[设置](https://ant.design/components/affix-cn/)一下。
