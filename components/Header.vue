<template>
  <div 
  class="app-header"
  :style="{ backgroundColor: primaryColor, color: textColor }"
  >
      <PruviousPicture
          :image="websiteLogo"
          :imgAttrs="{ class: 'company-logo' }"
          :lazy="true"
      />
    <ul class="nav">
      <li v-for="{ link, label } of headerMenu">
          <NuxtLink 
          :to="link"
          :style="{ color: textColor }"
          >
              {{ label }}
          </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { getCollectionData } from '#pruvious/client'

const { websiteLogo, headerMenu } = await getCollectionData('settings');
const { primaryColor, textColor } = await getCollectionData('admin')
</script>

<style>
  .app-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 80px;
    width: 100%;
    height: 120px;
    position: absolute;
    top: 0;
  }
  .nav{ 
    display: flex;
    gap: 20px;
    list-style: none;
  }
  #nav li{
    cursor: pointer;
  }
  .nav li:hover{
    text-decoration: underline;
  }
  .nav li a{
    text-decoration: none;
  }
  .company-logo{
    height: 80px;
    width: 100px;
    object-fit: contain;
  }
</style>