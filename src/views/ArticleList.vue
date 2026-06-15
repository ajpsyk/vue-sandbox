<template>
  <div class="article-list">
    <h1>Articles</h1>
    <div v-if="loading">Loading...</div>
    <ul v-else>
      <li v-for="article in articles" :key="article.id">
        <router-link :to="{ name: 'article-detail', params: { id: article.id }}">
          {{ article.attributes.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const articles = ref([]);
const loading = ref(true);

onMounted(async () => {
    const response = await fetch('/jsonapi/node/article');  const result = await response.json();
  articles.value = result.data;
  loading.value = false;
});
</script>