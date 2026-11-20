# caicai-menu · 我家的菜

一个给家里人用的菜品库手机端网页。想不起来吃什么的时候，打开翻一翻。

纯前端、纯展示：没有后端接口，也没有数据库，所有菜品数据都写在代码里。页面按分类浏览，不涉及日期和每日菜单，就是一个慢慢攒起来的家常菜本子。

> 目前仓库里放的是示例菜品（番茄炒蛋、红烧肉、冬瓜排骨汤……）和自动生成的占位图，等你把 `src/data/dishes.js` 换成自家的菜单。

## 技术栈

- Vue 3
- Vant 4（`van-tabs` 分类切换）
- Vite

入口文件为 `index.html`，源码在 `src/`，构建产物输出到 `dist/`。

## 页面特点

- 移动端优先，最大宽度 520px，桌面浏览器打开也是居中的手机版式
- 顶部「全部 + 各分类」按钮式切换，切换后双列展示菜品卡片
- 卡片显示照片、菜名、一句话简介
- 没填图片时显示暖色占位卡片（带菜名首字的印章），图片加载失败也会自动退回占位，不会出现破图

## 目录结构

```
caicai-menu/
├─ index.html            页面入口
├─ public/
│  └─ images/            放自家菜品照片（没有该目录可自行新建）
├─ src/
│  ├─ main.js            应用入口
│  ├─ App.vue            页面结构与分类切换
│  ├─ components/
│  │  ├─ DishCard.vue    单个菜品卡片
│  │  └─ DishImage.vue   图片与占位处理
│  ├─ data/
│  │  └─ dishes.js       菜品数据与分类定义（改菜单就改这里）
│  └─ styles/
│     └─ main.css        全局样式
├─ vite.config.js
└─ package.json
```

## 本地运行

需要先安装 Node.js，然后在项目根目录执行：

```bash
npm install
npm run dev
```

终端会输出本地访问地址（默认 `http://localhost:5173`）。`npm run dev` 带了 `--host`，同一局域网下的手机也能用电脑的 IP 地址打开，方便在真实手机上看看效果。

## 修改菜单数据

所有菜品都在 `src/data/dishes.js` 里，不需要动任何页面代码。

### 菜品字段

`dishes` 数组中每道菜是四个字段：

| 字段 | 说明 |
| --- | --- |
| `name` | 菜名 |
| `category` | 所属分类，需与 `categories` 中的名字一致 |
| `image` | 图片地址；可写 `/images/xxx.jpg`、完整网络地址，或留空 `''` |
| `intro` | 一句话简介，写给家里人看的 |

### 加一道新菜

在 `dishes` 数组里照着已有条目复制一份，改掉四个字段即可：

```js
{
  name: '可乐鸡翅',
  category: '家常热菜',
  image: '/images/cola-wings.jpg',
  intro: '甜咸入味，小孩最爱。',
},
```

### 图片怎么放

- **本地照片**：把图片放进 `public/images/`，`image` 写 `/images/文件名.jpg`。建议用横图（4:3 左右），卡片会自动裁切填充。
- **网络图片**：直接写完整地址，例如 `https://example.com/xxx.jpg`。
- **不填**：`image: ''`，页面会显示暖色占位卡片，不会破图。图片地址写错、加载失败时也会自动退回占位。

### 分类

分类定义在同一文件的 `categories` 中，每一项包含分类名和配色主题：

```js
export const categories = [
  { name: '家常热菜', tone: 'chili' },
  { name: '汤羹', tone: 'soup' },
  { name: '主食', tone: 'rice' },
  { name: '凉菜小食', tone: 'herb' },
]
```

可用的 `tone` 主题：

| tone | 配色 |
| --- | --- |
| `chili` | 暖红 |
| `soup` | 米黄 |
| `rice` | 麦色 |
| `herb` | 浅绿 |
| `plain` | 中性（未匹配到分类时的默认值） |

新增分类时在 `categories` 里补一行即可，分类按钮会按这里的顺序排列。菜品的 `category` 建议与分类名保持一致；若写了未定义的名字，页面仍会显示该分类，但只使用默认的中性配色。

## 构建与预览

```bash
npm run build     # 产物输出到 dist/
npm run preview   # 本地预览构建结果
```

`dist/` 是纯静态文件，放到任意静态托管上就能访问。
