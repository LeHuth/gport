<script setup lang="ts">
/**
 * Side Projects — a two-column grid of cards.
 *
 * Everything here is data: the heading, the tagline naming the kinds of work,
 * and the cards themselves. The grid takes an arbitrary number of items, so
 * entries can be added or removed in the content source alone.
 */
import type { SideProjectsContent } from '../../lib/types'
import Container from './Container.vue'
import LangText from './LangText.vue'
import SideProjectCard from './SideProjectCard.vue'

defineProps<{ content: SideProjectsContent }>()
</script>

<template>
  <section id="side" class="section">
    <Container>
      <div class="head">
        <h2 class="title"><LangText :text="content.heading" /></h2>
        <span class="eyebrow tagline"><LangText :text="content.tagline" /></span>
      </div>

      <div class="grid">
        <SideProjectCard v-for="item in content.items" :key="item.id" :item="item" />
      </div>
    </Container>
  </section>
</template>

<style scoped>
.section {
  padding: 96px 0;
  border-top: 1px solid var(--border);
}

.head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 24px;
}

.title {
  font: 700 32px/1 var(--font-grotesk);
  letter-spacing: -0.02em;
  margin: 0;
}

.tagline {
  color: var(--text-subtle);
}

.grid {
  margin-top: 28px;
  border-top: 2px solid var(--border-strong);
  padding-top: 32px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}

@media (max-width: 860px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
