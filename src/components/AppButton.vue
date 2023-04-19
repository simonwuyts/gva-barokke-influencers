<template>
  <button
    :class="[
      'button',
      `button--${type}`,
      { 'button--disabled': disabled, 'button--inline': inline },
    ]"
    type="button"
    v-bind="$attrs"
  >
    <AppIcon v-if="icon" :name="icon" class="button__icon" />
    <div class="button__label">
      <slot />
    </div>
    <AppIcon v-if="iconRight" :name="iconRight" class="button__icon" />
  </button>
</template>

<script setup lang="ts">
import AppIcon from './AppIcon.vue'

withDefaults(
  defineProps<{
    disabled?: boolean
    type?: 'default' | 'primary'
    icon?: string
    iconRight?: string
    inline?: boolean
  }>(),
  {
    type: 'primary',
    inline: false,
  }
)
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

.button {
  align-items: center;
  background-color: $color-blue;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-family: $font-family-sans-serif;
  font-size: 1.8rem;
  font-weight: 600;
  gap: 0.8rem;
  justify-content: center;
  line-height: 2.4rem;
  padding: 0.8rem 1.2rem;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
}

.button--inline {
  width: auto;
}

.button--primary {
  background-color: $color-red;
}

.button__icon {
  font-size: 1.6rem;
}
</style>
