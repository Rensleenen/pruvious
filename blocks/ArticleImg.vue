<template>
    <div class="article-img-box">
        <PruviousPicture
            :image="img"
            :imgAttrs="{ class: 'article-img' }"
            :lazy="true"
            name="Left Image"
        />
    </div>
</template>

<script lang="ts" setup>
import { defineBlock, imageField } from '#pruvious'

defineBlock({ icon: 'LayoutColumns' })

defineProps({
    img: imageField({ required: true }),
})
</script>

<style>
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
    align-items: center;
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

</style>
