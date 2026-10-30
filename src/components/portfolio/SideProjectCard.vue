<script setup lang="ts">
/**
 * One card in the Side Projects grid: 16:9 media, then kind / title / meta with
 * an optional "watch" link pushed to the right.
 */
import { computed } from 'vue'
import type { Localized, SideProject } from '../../lib/types'
import LangText from './LangText.vue'
import ImageSlot from './ImageSlot.vue'

const props = defineProps<{ item: SideProject }>()

const watchLabel: Localized = { de: 'Ansehen', en: 'Watch' }

// Fall back to a title-derived hint so new entries get a sensible placeholder
// without anyone having to fill in `stillHint`.
const hint = computed(() => props.item.stillHint ?? `Still 16:9 — ${props.item.title}`)
</script>

<template>
  <div class="card">
    <div v-if="item.embed" class="embed">
      <iframe
        :src="item.embed"
        :title="item.title"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
    <div v-else class="still">
      <ImageSlot :src="item.still" :hint="hint" :alt="item.title" />
    </div>

    <div class="meta-row">
      <div>
        <p class="eyebrow kind"><LangText :text="item.kind" /></p>
        <p class="title">{{ item.title }}</p>
        <p class="meta"><LangText :text="item.meta" /></p>
      </div>

      <a v-if="item.url" :href="item.url" target="_blank" rel="noopener" class="watch">
        <LangText :text="watchLabel" /> ↗
      </a>
    </div>
  </div>
</template>

<style scoped>
.embed,
.still {
  aspect-ratio: 16 / 9;
}

.embed {
  background: var(--ink);
  border: 1px solid var(--border);
}

.embed iframe {
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
}

.meta-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  margin-top: 14px;
}

.kind {
  color: var(--text-subtle);
}

.title {
  font: 600 18px/1.2 var(--font-grotesk);
  letter-spacing: -0.01em;
  margin: 6px 0 0;
}

.meta {
  font: 400 13px/1.4 var(--font-grotesk);
  color: var(--text-muted);
  margin: 4px 0 0;
}

.watch {
  font: 600 13px/1 var(--font-grotesk);
  white-space: nowrap;
}
</style>
