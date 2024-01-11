
<script setup>
import { NuxtLink } from '#components';


const btn = defineProps({
  primary: Boolean,
  white: Boolean,
  black: Boolean,
  link: String
})
const {primary, white, black, link} = btn;

onMounted(() => {
  console.log(btn.link)
})

</script>

<template>
    <a
      v-if="!btn.link"
      :class="[
        btn.primary ? 'btn-primary' : 'btn-secondary',
        btn.white ? 'white' : '',
        btn.black ? 'black' : ''
      ]"
      class="btn"
    >
      <slot></slot>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M1.46753 1H13V12.5325" stroke="black" stroke-width="1.5" />
        <path d="M13 1L1 13" stroke="black" stroke-width="1.5" />
      </svg>
    </a>

    
    <NuxtLink 
    v-else
    :to="btn.link"
    :class="[
        btn.primary ? 'btn-primary' : 'btn-secondary',
        btn.white ? 'white' : '',
        btn.black ? 'black' : ''
      ]"
      class="btn nuxtlink"
    >
    <slot></slot>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M1.46753 1H13V12.5325" stroke="black" stroke-width="1.5" />
        <path d="M13 1L1 13" stroke="black" stroke-width="1.5" />
      </svg>
    </NuxtLink>
  </template>
  