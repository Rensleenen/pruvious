<template>
    <div class="usp-wrapper">
        <div v-for="{ uspIcon, uspHead, uspText } of uspBoxes" class="usp-box">
            <PruviousIcon
                :icon="uspIcon"
            />
            <h3>{{ uspHead }}</h3>
            <p>{{ uspText }}</p>
        </div>
    </div>

</template>
  
<script lang="ts" setup>
import { checkboxField, defineBlock, iconField, textAreaField, textSubfield, textField, repeaterField, iconSubfield, textAreaSubfield } from '#pruvious'

defineBlock({ icon: 'LayoutColumns' })

defineProps({
  uspBoxes: repeaterField({
    min: 2,
    max: 4,
    subfields: {
      uspIcon: iconSubfield(),
      uspHead: textSubfield({ placeholder: 'Enter headline' }),
      uspText: textAreaSubfield({ placeholder: 'Enter text' }),
    },
    addLabel: 'Add USP Box',
  }),
})
</script>

<style>
.usp-box{
    display: flex;
    flex-direction: column;
    width: 30%;
    padding: 10px;
    margin: 10px;
    border: 1px solid #000;
}
.usp-wrapper{
    display: flex;
    width: 100%;
    padding: 50px 0;
    justify-content: center;
}
</style>