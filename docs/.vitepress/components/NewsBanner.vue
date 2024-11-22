<script setup>
import { ref } from 'vue'

const news = ref([
  'New feature release: Advanced developer tools now available! 🚀',
  'Join our upcoming webinar on modern web development - Register now',
  'Security update: Latest patch released for all users'
])

const currentNewsIndex = ref(0)

const nextNews = () => {
  currentNewsIndex.value = (currentNewsIndex.value + 1) % news.value.length
}

setInterval(nextNews, 5000)
</script>

<template>
  <div class="news-banner">
    <div class="news-content">
      <span class="news-label">NEWS</span>
      <span class="news-text">{{ news[currentNewsIndex] }}</span>
    </div>
  </div>
</template>

<style scoped>
.news-banner {
  background: var(--vp-c-brand);
  color: white;
  padding: 8px 24px;
  text-align: center;
  position: relative;
  z-index: 100;
}

.news-content {
  max-width: 1152px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;
}

.news-label {
  background: rgba(255, 255, 255, 0.2);
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.8em;
  font-weight: 600;
}

.news-text {
  font-size: 0.9em;
}

@media (max-width: 640px) {
  .news-content {
    flex-direction: column;
    gap: 4px;
  }
}
</style>