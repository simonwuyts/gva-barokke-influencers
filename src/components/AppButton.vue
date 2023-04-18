<template>
  <button
    :class="['button', `button--${type}`, { 'button--disabled': disabled }]"
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
  }>(),
  {
    type: 'primary',
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
  justify-content: center;
  line-height: 2.4rem;
  padding: 0.8rem;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
}

.button--primary {
  background-color: $color-red;
}
</style>
