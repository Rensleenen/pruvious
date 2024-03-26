<template>
  <Header />

  <div class="pageWrapper">
    <slot />
    
  </div>
  

  <Footer />
  

</template>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.pageWrapper {
  width: calc(100% - 40px);
  margin: 0 auto;
  margin-top: 120px;
}
</style>

<script setup lang="ts">
// import { useArticlesStore } from '@/stores/articles';
// const articlesStore = useArticlesStore();
// import { useUploadsStore } from '@/stores/uploads';
// const uploadsStore = useUploadsStore();


// let articles = ref([] as Article[])

// onMounted(async () => {
//   await articlesStore.fetchArticles();
//   articles.value = articlesStore.data?.records || [];
  
//   articles.value = await Promise.all(articles.value.map(async article => {
//     article.featuredImage.src = ((await useFetch(`/api/uploads?id=${article.featuredImage.uploadId}`)).data.value as any as UploadResponse).filename
//     return article;
//   }));

//   console.log(articles.value);
// });
</script>