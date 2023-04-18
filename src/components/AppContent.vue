<template>
  <div
    :class="[
      'content',
      {
        'content--center-y': alignY === 'center',
        'content--bottom-y': alignY === 'bottom',
      },
    ]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  alignY?: 'top' | 'center' | 'bottom'
}>()
</script>

<style lang="scss" scoped>
.content {
  background: #fff url('/page-bg.jpg') no-repeat center bottom / cover;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  overflow-y: auto;
  padding: 2.4rem;
  position: relative;
  -webkit-overflow-scrolling: touch;
}

.content--center-y {
  justify-content: center;
}

.content--bottom-y {
  justify-content: flex-end;
}
</style>
