<template>
  <div v-if="html" class="rich-text" v-html="html"></div>
  <div v-else class="rich-text">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  html?: string
}>()
</script>

<style lang="scss">
@import '@/assets/styles/variables';

.rich-text {
  h1 {
    font-size: 2.4rem;
    font-weight: bold;
    margin: 1.2rem 0;

    &:first-child {
      margin-top: 0;
    }
  }

  h2 {
    font-family: $font-family-sans-serif;
    font-size: 2rem;
    font-weight: bold;
    margin: 1.2rem 0;
    text-transform: uppercase;

    &:first-child {
      margin-top: 0;
    }
  }

  p {
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
  }

  strong {
    font-weight: bold;
  }

  em {
    font-style: italic;
  }

  a {
    color: $color-red;
    text-decoration: underline;
    text-underline-offset: 0.3em;
  }
}
</style>
