<script setup lang="ts">
/** Broadcasters & clients — a bordered wordmark grid. */
import type { Localized } from '../../lib/types'
import Container from './Container.vue'
import LangText from './LangText.vue'

defineProps<{ broadcasters: string[] }>()

const label: Localized = { de: 'Sender & Auftraggeber', en: 'Broadcasters & Clients' }
</script>

<template>
  <section id="clients" class="section">
    <Container>
      <p class="eyebrow label"><LangText :text="label" /></p>
      <div class="grid">
        <div v-for="name in broadcasters" :key="name" class="cell">
          <span class="mark">{{ name }}</span>
        </div>
      </div>
    </Container>
  </section>
</template>

<style scoped>
.section {
  padding: 80px 0;
}

.label {
  margin: 0 0 24px;
  color: var(--text-subtle);
}

.grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  border-top: 1px solid var(--border);
  border-left: 1px solid var(--border);
}

.cell {
  height: 96px;
  display: grid;
  place-items: center;
  border-right: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.mark {
  font: 700 20px/1 var(--font-grotesk);
  letter-spacing: -0.01em;
  color: var(--text-muted);
}

@media (max-width: 860px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 480px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
