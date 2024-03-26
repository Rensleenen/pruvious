<template>
    <ul class="articles-wrapper">
      <li v-for="article in articles" :key="article.id">
        <router-link 
        class="articles-article-link"
        :to="`/article${article.path}`">
        
        <div class="article">
          <img :src="'/uploads/' + article.featuredImage.src" :alt="article.featuredImage.alt" class="articles-article-img">
          <h1 class="articles-article-name">{{ article.title }}</h1>
        </div>
      
        </router-link>
      </li>
    </ul>
</template>

<script setup lang="ts">
import { defineBlock } from '#pruvious'
defineBlock({ icon: 'LayoutColumns' })

import { useArticlesStore } from '@/stores/articles';
const articlesStore = useArticlesStore();
import { useUploadsStore } from '@/stores/uploads';
const uploadsStore = useUploadsStore();


let articles = ref([] as Article[])

onMounted(async () => {
  await articlesStore.fetchArticles();
  articles.value = articlesStore.data?.records || [];
  
  articles.value = await Promise.all(articles.value.map(async article => {
    article.featuredImage.src = ((await useFetch(`/api/uploads?id=${article.featuredImage.uploadId}`)).data.value as any as UploadResponse).filename
    return article;
  }));

  console.log(articles.value);
});
</script>

<style>
.articles-wrapper li{
  width: 50%;
  padding: 50px
}
.articles-article-link {
  text-decoration: none;
  color: black;
}

.articles-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  padding: 0 100px;
}
.article {
  position: relative;
  padding-bottom: 40%;
  overflow: hidden;
}
.articles-article-name {
  font-size: 1.5rem;
  width: 100%;
  position: absolute;
  color: white;
  bottom: 0px;
  left: 0px;
  padding: 60px 10px 10px 10px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
}
.articles-article-img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.articles-article-link:hover .articles-article-img {
  transform: scale(1.05);
  transition: transform 0.5s;
}
</style>