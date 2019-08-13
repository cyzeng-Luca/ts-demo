###项目背景： 
设计稿IOS尺寸 375px 制作 （iphone x，响应式需要使postcss-px-to-viewport）最佳效果请在iphone x下查看

### 项目技术栈
- React(渲染框架)
- Typescript (保证类型安全)
- Immer(不可变数据)
- Redux(状态管理)
- eslint(代码规范)

### 如何使用？
``` node
	yarn start
```

### 项目结构
#### ROOT目录
| 文件结构 | 功能 | 说明 |
| :-------- | --------:| :--: |
| src      |    项目代码 | - |
| .eslintrc      |    eslint|  -|
| .tsconfig.      |   typescript|  -|
| ...      |  ...  | ... |

#### src目录
| 文件结构 | 功能 | 说明 |
| :-------- | --------:| :--: |
| assets  | 资源文件 |  目前没有文件  |
| page     |   项目代码| -   |
| reduxs     |    状态管理 | - |
| utils     |    公共方法|  - |
| index      |  入口文件  | ... |
| configureStore     |  redux配置 | ... |
| reducers     | redux配置  | ... |

### 易用性优化
- Icon的加减号增加padding，扩大触摸面积
- 在点击header时候，增加cart-modal input 自动聚焦

### 待完善
- tsconfig - alias 暂时无法设置
- 组件Less 是否可以同React-native 以内联样式表书写且有css提示（解耦.jsx and .less）
- createReducer方法中Action类型定义不对，目前为any
- 使用webpack插件postcss-px-to-viewport将PX转为VW、VH实现响应式布局
- componentShouldUpdate 还可以完善，减少不必要渲染
