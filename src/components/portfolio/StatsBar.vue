<script setup lang="ts">
/** Three-column facts strip under the hero: Based · Formats · Languages. */
import type { Localized } from '../../lib/types'
import Container from './Container.vue'
import LangText from './LangText.vue'

defineProps<{
  based: string
  formats: Localized
  languages: string
}>()

const labels = {
  based: { de: 'Sitz', en: 'Based' } as Localized,
  formats: { de: 'Formate', en: 'Formats' } as Localized,
  languages: { de: 'Sprachen', en: 'Languages' } as Localized,
}
</script>

<template>
  <section>
    <Container>
      <div class="stats">
        <div class="cell">
          <p class="eyebrow"><LangText :text="labels.based" /></p>
          <p class="value">{{ based }}</p>
        </div>
        <div class="cell divided">
          <p class="eyebrow"><LangText :text="labels.formats" /></p>
          <p class="value"><LangText :text="formats" /></p>
        </div>
        <div class="cell divided">
          <p class="eyebrow"><LangText :text="labels.languages" /></p>
          <p class="value">{{ languages }}</p>
        </div>
      </div>
    </Container>
  </section>
</template>

<style scoped>
.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 2px solid var(--border-strong);
  border-bottom: 1px solid var(--border);
}

.cell {
  padding: 18px 0;
}

.divided {
  padding-left: 24px;
  border-left: 1px solid var(--border);
}

.eyebrow {
  color: var(--text-subtle);
}

.value {
  font: 500 15px/1.3 var(--font-grotesk);
  margin: 6px 0 0;
}
</style>
