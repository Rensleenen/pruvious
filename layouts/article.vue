<template>
  <Header />
  <div class="pageWrapper">

    <div class="article-img-box">
      <img :src="page?.fields.featuredImage != null ? page.fields.featuredImage.src : 'https://placehold.co/600x400'"
        class="article-img">
    </div>
    <div class="article-head-wrapper">
        <h1 class="article-head">{{ page?.fields.articleTitle }}</h1>
    </div>
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

.article-img {
  width: 100%;
  max-width: 52.125rem;
  max-height: 30rem;
  position: relative;
  overflow: hidden;
  object-position: center center;
  object-fit: cover;
}

.article-img-box {
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
}

.article-img-box picture {
  width: 100%;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.article-head{
    font-size: 2rem;
    width: 100%;
    max-width: 50rem;
}
.article-head-wrapper{
    display: flex;
    justify-content: center;
    padding: 50px;
    width: 100%;
}
</style>

<script setup lang="ts">
import { usePage } from '#pruvious/client'

const page = usePage()
</script>