<template>
  <div :class="['stack', { 'stack--vertical': direction === 'vertical' }]">
    <slot />
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    direction?: 'horizontal' | 'vertical'
  }>(),
  {
    direction: 'horizontal',
  }
)
</script>

<style lang="scss" scoped>
.stack {
  display: flex;
  gap: 2.4rem;
}

.stack--vertical {
  flex-direction: column;
}
</style>
