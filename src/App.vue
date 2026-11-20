<script setup>
import { computed, ref } from 'vue'
import { categories, dishes } from './data/dishes.js'
import DishCard from './components/DishCard.vue'

const ALL = '全部'
const activeCategory = ref(ALL)

const defaultMeta = { tone: 'plain' }
const metaMap = Object.fromEntries(categories.map((item) => [item.name, item]))

// 分类顺序以 categories 为准；数据里多出来的分类也不会被吞掉
const categoryNames = computed(() => {
  const names = categories.map((item) => item.name)
  for (const dish of dishes) {
    if (dish.category && !names.includes(dish.category)) {
      names.push(dish.category)
    }
  }
  return names.filter((name) => dishes.some((dish) => dish.category === name))
})

const tabs = computed(() => [ALL, ...categoryNames.value])

const visibleDishes = computed(() =>
  activeCategory.value === ALL
    ? dishes
    : dishes.filter((dish) => dish.category === activeCategory.value),
)

const metaOf = (category) => metaMap[category] || defaultMeta
</script>

<template>
  <div class="page">
    <header class="hero">
      <div class="hero__top">
        <span class="hero__stamp">家</span>
        <span class="hero__count">{{ dishes.length }} 道菜</span>
      </div>
      <h1 class="hero__title">我家的菜<span class="hero__dot">。</span></h1>
      <p class="hero__sub">一日三餐，好好吃饭 —— 想吃什么，往下翻。</p>
    </header>

    <div class="cat-bar">
      <van-tabs
        v-model:active="activeCategory"
        class="cat-tabs"
        shrink
        :swipe-threshold="3"
      >
        <van-tab v-for="name in tabs" :key="name" :name="name" :title="name" />
      </van-tabs>
    </div>

    <main class="dishes">
      <DishCard
        v-for="(dish, index) in visibleDishes"
        :key="dish.name"
        :dish="dish"
        :meta="metaOf(dish.category)"
        class="dishes__item"
        :style="{ animationDelay: `${Math.min(index, 8) * 45}ms` }"
      />
    </main>

    <footer class="foot">
      <span class="foot__line"></span>
      <span>好好吃饭 · 慢慢生活</span>
      <span class="foot__line"></span>
    </footer>
  </div>
</template>

<style scoped>
.page {
  width: 100%;
  max-width: 520px;
  min-height: 100vh;
  margin: 0 auto;
}

/* 顶部 */
.hero {
  padding: calc(26px + env(safe-area-inset-top)) 22px 18px;
}

.hero__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.hero__stamp {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: #c4553c;
  color: #fff4e4;
  font-family: 'Songti SC', 'Noto Serif CJK SC', 'Source Han Serif SC', STSong, serif;
  font-size: 22px;
  line-height: 1;
  transform: rotate(-3deg);
  box-shadow:
    inset 0 0 0 1px rgba(255, 240, 220, 0.45),
    0 5px 12px rgba(196, 85, 60, 0.22);
}

.hero__count {
  padding: 5px 11px;
  border: 1px solid #e8dac7;
  border-radius: 999px;
  background: rgba(255, 252, 246, 0.65);
  color: #8d745c;
  font-size: 11px;
  letter-spacing: 0.6px;
}

.hero__title {
  margin-top: 20px;
  color: #3a2a1f;
  font-family: 'Songti SC', 'Noto Serif CJK SC', 'Source Han Serif SC', STSong, serif;
  font-size: clamp(30px, 8.6vw, 34px);
  font-weight: 600;
  letter-spacing: 1.5px;
  line-height: 1.25;
}

.hero__dot {
  color: #c4553c;
}

.hero__sub {
  margin-top: 9px;
  color: #98826d;
  font-size: 12.5px;
  letter-spacing: 0.3px;
  line-height: 1.6;
}

/* 分类栏 */
.cat-bar {
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 6px 0 12px;
  background: rgba(251, 246, 238, 0.9);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.cat-tabs :deep(.van-tabs__wrap) {
  height: auto;
}

.cat-tabs :deep(.van-tabs__nav) {
  gap: 0;
  padding: 0 18px;
  background: transparent;
}

.cat-tabs :deep(.van-tabs__nav--line) {
  height: auto;
  padding-bottom: 0;
}

.cat-tabs :deep(.van-tab) {
  height: 34px;
  padding: 0 4px;
}

.cat-tabs :deep(.van-tab--active) {
  font-weight: 500;
}

.cat-tabs :deep(.van-tab__text) {
  height: 34px;
  padding: 0 14px;
  border: 1px solid #eaddca;
  border-radius: 999px;
  background: #fffcf6;
  color: #806954;
  font-size: 13px;
  line-height: 32px;
  transition:
    color 0.2s ease,
    background 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.cat-tabs :deep(.van-tab--active .van-tab__text) {
  border-color: #c4553c;
  background: #c4553c;
  color: #fff7ec;
  box-shadow: 0 4px 10px rgba(196, 85, 60, 0.24);
}

.cat-tabs :deep(.van-tabs__line) {
  display: none;
}

.cat-tabs :deep(.van-tabs__content) {
  display: none;
}

/* 菜品 */
.dishes {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 13px;
  padding: 4px 16px 0;
}

.dishes__item {
  animation: dish-in 0.5s cubic-bezier(0.22, 0.61, 0.36, 1) both;
}

@keyframes dish-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .dishes__item {
    animation: none;
  }
}

/* 页脚 */
.foot {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin: 28px 22px calc(26px + env(safe-area-inset-bottom));
  color: #b5a18e;
  font-size: 11px;
  letter-spacing: 2px;
}

.foot__line {
  width: 34px;
  height: 1px;
  background: linear-gradient(90deg, transparent, #d8c8b5);
}

.foot__line:last-child {
  transform: scaleX(-1);
}
</style>
