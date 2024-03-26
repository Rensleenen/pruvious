<template>
    <div 
    class="app-footer"
    :style="{ backgroundColor: primaryColor, color: textColor }"
    >
      <p>{{ copyrightText }}</p>

      <ul class="flex gap-3">
        <li v-for="{ icon, link } of socialMedia">
          <NuxtLink :to="link" rel="noopener noreferrer nofollow" target="_blank" class="flex h-6 w-6">
            <PruviousIcon :icon="icon" class="m-auto h-3.5 w-3.5" />
          </NuxtLink>
        </li>
      </ul>
    </div>
</template>

<script lang="ts" setup>
import { getCollectionData } from '#pruvious/client'

const { copyrightText, socialMedia } = await getCollectionData('settings');
const { primaryColor, textColor } = await getCollectionData('admin');
</script>

<style>
.app-footer{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
  height: 120px;
}
li{
  list-style-type: none;
}
a{
  text-decoration: none;
  color: white;
}
</style>