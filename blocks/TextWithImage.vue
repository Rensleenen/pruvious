<template>
    <div 
    :class="{
        'textWithImage': !flip,
        'textWithImage Flipped': flip,
    }">
        <PruviousPicture
            :image="image"
            :imgAttrs="{ class: 'textWithImage-Image' }"
            :lazy="true"
        />
        <p class="textWithImage-Text">{{ text }}</p>
    </div>
</template>
  
<script lang="ts" setup>
import { checkboxField, defineBlock, imageField, textAreaField } from '#pruvious'

defineBlock({ icon: 'LayoutColumns' })

defineProps({
    image: imageField({ required: true }),
    text: textAreaField({ required: true }),
    flip: checkboxField({ 
        default: false, 
        label: 'Flip Image and Text',
    }),
})
</script>

<style>
.textWithImage{
    display: flex;
    width: 100%;
}
.textWithImage.Flipped{
    flex-direction: row-reverse;
}
.textWithImage picture{
    width: 50%;
    padding: 50px 0;
}
.textWithImage-Image{
    width: 100%;
    height: auto;
}
.textWithImage-Text{
    width: 50%;
    padding: 50px;
    font-size: 1.5rem;
}
</style>