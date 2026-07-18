<script setup lang="ts">
/**
 * Image with a Swiss placeholder fallback.
 * Renders the image when `src` is set, otherwise a bordered box labelled with
 * `hint` — the stand-in for stills/portraits until real assets are supplied.
 */
defineProps<{
  src?: string | null
  alt?: string
  hint?: string
}>()
</script>

<template>
  <img v-if="src" :src="src" :alt="alt ?? ''" class="slot-img" />
  <div v-else class="slot-placeholder">
    <span class="eyebrow">{{ hint ?? 'Bild' }}</span>
  </div>
</template>

<style scoped>
.slot-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.slot-placeholder {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background: var(--surface-2);
  border: 1px solid var(--border);
  padding: 16px;
  text-align: center;
}

.slot-placeholder .eyebrow {
  color: var(--text-subtle);
}
</style>
