<script setup lang="ts">
/** Centered content column shared by every section (max 1280px, 32px gutters). */
</script>

<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped>
.container {
  max-width: var(--content-max);
  margin: 0 auto;
  padding: 0 32px;
}
</style>
