<template>
  <div :class="['overlay', { 'overlay--visible': visible }]">
    <div class="overlay__cover" @click="close"></div>
    <div class="overlay__sheet">
      <slot v-bind="{ close }" />
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    visible?: boolean
  }>(),
  {
    visible: false,
  }
)

const emit = defineEmits<{
  (e: 'update:visible', value: boolean): void
  (e: 'close'): void
}>()

function close() {
  emit('close')
  emit('update:visible', false)
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

.overlay {
  inset: 0;
  pointer-events: none;
  position: fixed;
  z-index: 10;
}

.overlay__cover {
  background-color: rgba($color-gray, 40%);
  inset: 0;
  opacity: 0;
  position: absolute;
  transition: all 0.15s ease-in-out;
  z-index: 20;
}

.overlay__sheet {
  background-color: #fff;
  border-radius: 1.2rem 1.2rem 0 0;
  box-shadow: 0 -2rem 8rem rgba(#000, 0.1), 0 -1rem 2rem rgba(#000, 0.1),
    0 -0.5rem 1rem rgba(#000, 0.1);
  bottom: 0;
  left: 50%;
  max-height: calc(100% - 1.6rem);
  max-width: 50rem;
  opacity: 0;
  -webkit-overflow-scrolling: touch;
  overflow-y: auto;
  padding: 2.4rem;
  position: absolute;
  transform: translateX(-50%) translateY(50%);
  transition: all 0.15s ease-in-out;
  width: 100%;
  z-index: 30;
}

.overlay--visible {
  pointer-events: auto;

  .overlay__cover {
    opacity: 1;
  }

  .overlay__sheet {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}
</style>
