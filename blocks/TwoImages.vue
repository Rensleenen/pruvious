<template>
    <div class="two-img-wrapper">
        <div class="two-img-box">
            <PruviousPicture
                :image="imgleft"
                :imgAttrs="{ class: 'twoImages-Image' }"
                :lazy="true"
                name="Left Image"
            />
            <h1>Rusland en China spreken veto uit over Gaza-resolutie VS in Veiligheidsraad</h1>
        </div>

        <div class="two-img-box">
            <PruviousPicture
                :image="imgright"
                :imgAttrs="{ class: 'twoImages-Image' }"
                :lazy="true"
                name="Right Image"
            />
            <h1>Belofte goedkopere stadswarmte wordt niet waargemaakt, minister komt met spoedwet</h1>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineBlock, imageField, textAreaField } from '#pruvious'

defineBlock({ icon: 'LayoutColumns' })

defineProps({
    imgleft: imageField({ required: true }),
    imgright: imageField({ required: true }),
})
</script>

<style>
.two-img-box {
    width: 40%;
    position: relative;
    padding-bottom: 20%;
    overflow: hidden;
}
.two-img-box img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.two-img-wrapper {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    padding: 50px
}
.two-img-box h1 {
    font-size: 1.5rem;
    width: 100%;
    position: absolute;
    color: white;
    bottom: 0px;
    left: 0px;
    padding: 60px 10px 10px 10px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
}

</style>
