<template>
  <div class="button-wrapper">
    <div v-for="theme in themes">
      <Button  class="theme-btn" @click="changeTheme(theme.name)">{{ theme.name }}</Button>
    </div>
  </div>

  <div class="prime-vue-box">
    <div class="flex-auto">
        <label for="buttondisplay" class="font-bold block mb-2"> Button </label>
        <Calendar v-model="buttondisplay" showIcon :showOnFocus="false" inputId="buttondisplay" />
      </div>

    <div class="card flex justify-content-center">
      <InputSwitch v-model="checked" />
    </div>

    <Card style="width: 25rem; overflow: hidden">
        <template #header>
            <img alt="user header" src="https://primefaces.org/cdn/primevue/images/usercard.png" />
        </template>
        <template #title>Advanced Card</template>
        <template #subtitle>Card subtitle</template>
        <template #content>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                quas!
            </p>
        </template>
        <template #footer>
            <div class="flex gap-3 mt-1">
                <Button label="Cancel" severity="secondary" outlined class="w-full" />
                <Button label="Save" class="w-full" />
            </div>
        </template>
    </Card>
  </div>

</template>

<script setup>
import Button from 'primevue/button';
import Calendar from 'primevue/calendar';
import InputSwitch from 'primevue/inputswitch';
import Card from 'primevue/card';


import { ref } from 'vue';
import { usePrimeVue } from 'primevue/config';

const buttondisplay = ref();
const checked = ref(false);

const PrimeVue = usePrimeVue();
const theme = ref('aura-light-green');

const changeTheme = (newTheme) => {
let currentTheme = theme.value;
console.log(`Changing theme from ${currentTheme} to: ${newTheme}`);
PrimeVue.changeTheme(currentTheme, newTheme, 'theme-link', () => {
  console.log('Theme changed successfully:', theme);
});
theme.value = newTheme;
};

const themes = [
  {name: "aura-dark-amber", color: "#fbbf24"},
  {name: "aura-dark-blue", color: "#60a5fa"},	
  {name: "aura-dark-cyan", color: "#22d3ee"},
  {name: "aura-dark-green", color: "#34d399"},
  {name: "aura-dark-purple", color: "#a78bfa"},
  {name: "aura-dark-indigo", color: "#818cf8"},
  {name: "aura-dark-lime", color: "#a3e635"},
  {name: "aura-light-noir", color: "#fafafa"},
  {name: "aura-light-pink", color: "#f472b6"},
  {name: "aura-light-blue", color: "#60a5fa"},
  {name: "aura-light-purple", color: "#8B5CF6"},
];
console.log(themes);
</script>

<style>
.theme-btn {
  margin: 0 5px;
  padding: 12px 5px;
}
.button-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}
.prime-vue-box{
  display: flex;
  flex-direction: column;
  margin-left: 40%;
}
</style>