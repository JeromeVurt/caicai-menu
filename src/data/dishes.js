/**
 * 家庭菜品库 · 数据文件
 * ------------------------------------------------------------
 * 想加一道新菜：照着下面 dishes 里任意一条，复制一份改四个字段即可。
 *
 *   name     菜名
 *   category 分类（要和上面 categories 里的名字保持一致，否则会单独多出一个分类）
 *   image    图片地址。可以写 '/images/xxx.jpg'（把照片放进 public/images 目录），
 *            也可以写完整的网络地址；留空 '' 时会显示暖色占位卡片，不会破图。
 *   intro    一句话简介，写给家里人看的即可。
 *
 * 分类想加新的，在 categories 里补一行（名字、配色主题）。
 * 主题可选：chili（暖红）、soup（米黄）、rice（麦色）、herb（浅绿）、plain（中性）。
 */

// 示例用的远程占位图，之后换成自家实拍照片时直接替换 image 字段就行
const placeholder = (prompt) =>
  `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=landscape_4_3`

export const categories = [
  { name: '家常热菜', tone: 'chili' },
  { name: '汤羹', tone: 'soup' },
  { name: '主食', tone: 'rice' },
  { name: '凉菜小食', tone: 'herb' },
]

export const dishes = [
  {
    name: '番茄炒蛋',
    category: '家常热菜',
    image: placeholder(
      'Chinese home-style tomato and scrambled egg stir-fry, red tomato wedges and fluffy golden eggs on a rustic white ceramic plate, glossy sauce, chopped scallion, warm window light, wooden table, overhead 45 degree angle, appetizing food photography, shallow depth of field',
    ),
    intro: '酸甜下饭，每次都是第一个光盘。',
  },
  {
    name: '红烧肉',
    category: '家常热菜',
    image: placeholder(
      'Chinese braised pork belly hong shao rou, glossy caramel colored pork cubes in a small clay pot, scallion garnish, rich dark sauce, warm soft light, rustic wooden table, close-up Chinese home cooking photography',
    ),
    intro: '炖到软糯发亮，配米饭能吃两碗。',
  },
  {
    name: '青椒土豆丝',
    category: '家常热菜',
    image: placeholder(
      'Chinese stir-fried shredded potato with green pepper, thin pale potato strips and green pepper slices on a white enamel plate, simple home cooking, warm natural light, wooden table, overhead food photography',
    ),
    intro: '脆爽带着一点醋香，切丝是门手艺。',
  },
  {
    name: '番茄鸡蛋汤',
    category: '汤羹',
    image: placeholder(
      'Chinese tomato egg drop soup in a white ceramic bowl, red tomato slices and silky egg ribbons, chopped scallion, clear red orange broth, warm light, rustic wooden table, close-up home cooking photography',
    ),
    intro: '酸香开胃，饭前先喝一小碗。',
  },
  {
    name: '冬瓜排骨汤',
    category: '汤羹',
    image: placeholder(
      'Chinese winter melon and pork rib soup, clear light broth, translucent winter melon chunks and pork ribs in a pale ceramic bowl, gentle steam, warm natural light, rustic table, home cooking photography',
    ),
    intro: '清甜不油，慢炖一下午的温柔。',
  },
  {
    name: '紫菜蛋花汤',
    category: '汤羹',
    image: placeholder(
      'Chinese seaweed egg drop soup in a small white bowl, dark green seaweed, silky egg ribbons, tiny dried shrimp, sesame oil sheen, warm light, simple home cooking photography',
    ),
    intro: '三分钟出锅，撒一把虾皮更鲜。',
  },
  {
    name: '红烧牛肉面',
    category: '主食',
    image: placeholder(
      'Chinese braised beef noodle soup, dark rich broth, tender beef chunks, wheat noodles, bok choy and scallion in a large ceramic bowl, chopsticks, steam, warm moody light, close-up food photography',
    ),
    intro: '汤浓肉烂，冬天里最热乎的一碗。',
  },
  {
    name: '葱油拌面',
    category: '主食',
    image: placeholder(
      'Chinese scallion oil noodles, glossy brown sauce coating thin noodles, crispy fried scallions on top, chopsticks lifting noodles, small white bowl, warm light, wooden table, close-up food photography',
    ),
    intro: '葱香扑鼻，拌开的那一下最馋人。',
  },
  {
    name: '蛋炒饭',
    category: '主食',
    image: placeholder(
      'Chinese egg fried rice, golden grainy rice with egg and scallion bits in a blue and white porcelain bowl, spoon, warm natural light, rustic wooden table, appetizing food photography',
    ),
    intro: '粒粒分明，剩饭的第二次生命。',
  },
  {
    name: '拍黄瓜',
    category: '凉菜小食',
    image: placeholder(
      'Chinese smashed cucumber salad, irregular green cucumber chunks with garlic, vinegar, chili and cilantro on a small white plate, glossy dressing, warm light, overhead home cooking photography',
    ),
    intro: '蒜香醋香，夏天餐桌的常驻客。',
  },
  {
    name: '凉拌木耳',
    category: '凉菜小食',
    image: placeholder(
      'Chinese cold black fungus salad, glossy dark wood ear mushrooms with red chili, cilantro and sesame, on a small white ceramic plate, warm light, overhead food photography',
    ),
    intro: '酸辣爽脆，一筷子接一筷子。',
  },
  {
    name: '糖拌番茄',
    category: '凉菜小食',
    image: '',
    intro: '冰冰凉凉，小时候的甜品。',
  },
]
