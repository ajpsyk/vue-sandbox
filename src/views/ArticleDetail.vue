<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const article = ref<any>(null);
const loading = ref(true);

onMounted(async () => {
  const articleId = route.params.id;
  try {
    const response = await fetch(`/jsonapi/node/article/${articleId}`);
    const result = await response.json();
    article.value = result.data;
  } catch (error) {
    console.error("Fetch failed:", error);
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div v-if="loading">Loading article...</div>
  <div v-else-if="article">
    <h1>{{ article.attributes.title }}</h1>
    <div v-html="article.attributes.body?.value"></div>
  </div>
  <div v-else>Article not found.</div>
</template>