<script setup>
import { computed, ref, watch } from 'vue'

const props = defineProps({
  image: { type: String, default: '' },
  name: { type: String, default: '' },
  tone: { type: String, default: 'plain' },
})

// 没填图片、或者图片加载失败，都会退回到暖色占位卡片，绝不出现破图
const failed = ref(false)
const loaded = ref(false)

const initial = computed(() => props.name.trim().slice(0, 1) || '菜')

watch(
  () => props.image,
  () => {
    failed.value = false
    loaded.value = false
  },
)
</script>

<template>
  <div class="dish-img" :class="`dish-img--${tone}`">
    <div class="dish-img__placeholder" aria-hidden="true">
      <span class="dish-img__seal">{{ initial }}</span>
    </div>
    <img
      v-if="image && !failed"
      class="dish-img__photo"
      :class="{ 'is-loaded': loaded }"
      :src="image"
      :alt="name"
      loading="lazy"
      decoding="async"
      @load="loaded = true"
      @error="failed = true"
    />
  </div>
</template>

<style scoped>
.dish-img {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: #ece0d0;
}

.dish-img--chili {
  background: linear-gradient(140deg, #f8ddcb 0%, #eebda1 100%);
}

.dish-img--soup {
  background: linear-gradient(140deg, #f2e8cd 0%, #dfd0a8 100%);
}

.dish-img--rice {
  background: linear-gradient(140deg, #f7e9c9 0%, #e7cf9e 100%);
}

.dish-img--herb {
  background: linear-gradient(140deg, #e5e9d2 0%, #c9d5ac 100%);
}

.dish-img--plain {
  background: linear-gradient(140deg, #efe6d9 0%, #ddd0bb 100%);
}

.dish-img__placeholder {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: radial-gradient(rgba(255, 255, 255, 0.55) 1px, transparent 1px);
  background-size: 16px 16px;
  background-position: 4px 6px;
}

.dish-img__placeholder::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(120% 90% at 50% 110%, rgba(120, 70, 40, 0.16), transparent 60%);
}

.dish-img__seal {
  position: relative;
  z-index: 1;
  display: grid;
  place-items: center;
  width: 60px;
  height: 60px;
  border: 1px solid rgba(138, 99, 65, 0.28);
  border-radius: 50%;
  background: rgba(255, 251, 243, 0.55);
  color: rgba(94, 62, 40, 0.72);
  font-family: 'Songti SC', 'Noto Serif CJK SC', 'Source Han Serif SC', STSong, serif;
  font-size: 26px;
  line-height: 1;
}

.dish-img__seal::after {
  content: '';
  position: absolute;
  inset: -7px;
  border: 1px solid rgba(255, 255, 255, 0.55);
  border-radius: 50%;
}

.dish-img__photo {
  position: absolute;
  inset: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.45s ease;
}

.dish-img__photo.is-loaded {
  opacity: 1;
}
</style>
