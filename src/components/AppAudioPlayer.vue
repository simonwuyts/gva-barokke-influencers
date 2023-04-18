<template>
  <div v-if="src" class="audio-player">
    <audio :src="src" ref="player" />
    <button class="audio-player__button" type="button" @click="toggle">
      <AppIcon :name="playing ? 'pause' : 'play_arrow'" />
    </button>
    <input
      type="range"
      class="audio-player__progress"
      v-model="currentTime"
      min="0"
      :max="duration"
      step="0.1"
      :disabled="waiting"
    />
    <div class="audio-player__time">{{ formattedDuration }}</div>
  </div>
</template>

<script setup lang="ts">
import { useMediaControls } from '@vueuse/core'
import { computed, ref } from 'vue'
import AppIcon from './AppIcon.vue'

const props = defineProps<{
  src?: string
}>()

const player = ref()

const { duration, currentTime, playing, waiting } = useMediaControls(player, {
  src: props.src,
})

const formattedDuration = computed(() => {
  return new Date(1000 * duration.value).toISOString().slice(14, 19)
})

const percentage = computed(() => {
  return `${(currentTime.value / duration.value) * 100}%`
})

function toggle() {
  playing.value = !playing.value
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

.audio-player {
  align-items: center;
  display: flex;
  font-family: $font-family-sans-serif;
  gap: 0.8rem;
  line-height: 1.6rem;
  text-transform: uppercase;
}

.audio-player__button {
  cursor: pointer;
  display: block;
  padding: 0.8rem;
}

.audio-player__progress {
  flex: 1 1 0;
  width: 100%;
  height: 1rem;
  background: linear-gradient(
    to right,
    $color-red,
    $color-red v-bind(percentage),
    rgba($color-blue, 20%) v-bind(percentage)
  );
  outline: none;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 2.4rem;
    height: 2.4rem;
    background: $color-red;
    cursor: pointer;
    border-radius: 50%;
  }

  &::-moz-range-thumb {
    width: 2.4rem;
    height: 2.4rem;
    background: $color-red;
    cursor: pointer;
    border-radius: 50%;
  }
}

.audio-player__time {
  padding: 0.8rem;
}
</style>
