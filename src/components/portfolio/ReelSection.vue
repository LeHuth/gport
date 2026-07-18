<script setup lang="ts">
/** Showreel band: an embedded reel, or a placeholder until the link arrives. */
import type { Localized, Reel } from '../../lib/types'
import Container from './Container.vue'
import LangText from './LangText.vue'
import PlayBadge from './PlayBadge.vue'

defineProps<{ reel: Reel }>()

const placeholder: Localized = {
  de: 'Platzhalter — Reel-Link folgt',
  en: 'Placeholder — reel link to follow',
}
</script>

<template>
  <section id="reel" class="section">
    <Container>
      <div class="head">
        <h2 class="title">Showreel</h2>
        <span class="eyebrow year">{{ reel.year }}</span>
      </div>

      <div v-if="reel.embed" class="frame embed">
        <iframe
          :src="reel.embed"
          title="Showreel"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
      <div v-else class="frame placeholder">
        <PlayBadge :size="88" />
        <span class="eyebrow note"><LangText :text="placeholder" /></span>
      </div>
    </Container>
  </section>
</template>

<style scoped>
.section {
  padding: 0 0 96px;
}

.head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 20px;
}

.title {
  font: 700 24px/1 var(--font-grotesk);
  letter-spacing: -0.02em;
  margin: 0;
}

.year {
  color: var(--text-subtle);
}

.frame {
  position: relative;
  aspect-ratio: 16 / 9;
  background: var(--ink);
  border: 1px solid var(--border);
}

.placeholder {
  display: grid;
  place-items: center;
}

.embed iframe {
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
}

.note {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: rgba(255, 255, 255, 0.55);
}
</style>
