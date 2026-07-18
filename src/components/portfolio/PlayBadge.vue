<script setup lang="ts">
/** Circular outlined play control (filled triangle). Used on the hero + reel. */
withDefaults(defineProps<{ size?: number }>(), { size: 64 })
</script>

<template>
  <div class="play" :style="{ width: `${size}px`, height: `${size}px` }">
    <svg :width="size * 0.31" :height="size * 0.31" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  </div>
</template>

<style scoped>
.play {
  border-radius: var(--radius-pill);
  border: 2px solid rgba(255, 255, 255, 0.9);
  display: grid;
  place-items: center;
}
</style>
