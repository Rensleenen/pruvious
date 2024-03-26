<template>
    <div class="article-paragraph-wrapper">
        <PruviousHTML class="article-paragraph" :html="text" />
    </div>
</template>
  
<script lang="ts" setup>
import { defineBlock, editorField } from '#pruvious'

defineBlock({ icon: 'LayoutColumns' })

defineProps({
    text: editorField({ 
        required: true ,
        label: 'Paragraph Text',
        toolbar: ['bold', 'italic', 'heading2', 'heading3', 'paragraph', 'link', 'blockFormats', 'inlineFormats', 'clear'],
    }),
})
</script>

<style>
.article-paragraph{
    font-size: 1.2rem;
    width: 100%;
    max-width: 50rem;
}
.article-paragraph-wrapper{
    display: flex;
    justify-content: center;
    padding: 16px;
    width: 100%;
}
</style>