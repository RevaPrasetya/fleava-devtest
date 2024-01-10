
<script>
export default {
  props: {
    primary: Boolean,
    white: Boolean,
    black: Boolean,
    href: String,
  }
};
</script>

<template>
    <a
      :class="[
        primary ? 'btn-primary' : 'btn-secondary',
        white ? 'white' : '',
        black ? 'black' : ''
      ]"
      :href="href"
      class="btn"
    >
      <slot></slot>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M1.46753 1H13V12.5325" stroke="black" stroke-width="1.5" />
        <path d="M13 1L1 13" stroke="black" stroke-width="1.5" />
      </svg>
    </a>
  </template>
  