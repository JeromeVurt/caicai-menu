<script setup>
import DishImage from './DishImage.vue'

defineProps({
  dish: { type: Object, required: true },
  meta: { type: Object, required: true },
})
</script>

<template>
  <article class="dish-card">
    <div class="dish-card__media">
      <DishImage :image="dish.image" :name="dish.name" :tone="meta.tone" />
      <span class="dish-card__category">{{ dish.category }}</span>
    </div>
    <div class="dish-card__body">
      <h2 class="dish-card__name">{{ dish.name }}</h2>
      <p class="dish-card__intro">{{ dish.intro }}</p>
    </div>
  </article>
</template>

<style scoped>
.dish-card {
  overflow: hidden;
  border: 1px solid rgba(163, 124, 84, 0.16);
  border-radius: 18px;
  background: #fffdf8;
  box-shadow: 0 8px 20px rgba(122, 84, 52, 0.07);
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}

.dish-card:active {
  transform: scale(0.985);
  box-shadow: 0 3px 10px rgba(122, 84, 52, 0.1);
}

.dish-card__media {
  position: relative;
}

.dish-card__category {
  position: absolute;
  top: 8px;
  left: 8px;
  z-index: 3;
  padding: 3px 8px;
  border-radius: 999px;
  background: rgba(255, 250, 241, 0.9);
  box-shadow: 0 1px 4px rgba(90, 60, 30, 0.12);
  color: #7c5c40;
  font-size: 10px;
  letter-spacing: 0.3px;
  line-height: 1.3;
  backdrop-filter: blur(4px);
}

.dish-card__body {
  padding: 10px 12px 13px;
}

.dish-card__name {
  color: #3b2c21;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.2px;
  line-height: 1.4;
}

.dish-card__intro {
  margin-top: 4px;
  color: #927d69;
  font-size: 11.5px;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>
