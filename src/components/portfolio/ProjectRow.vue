<script setup lang="ts">
/**
 * One row of the Selected Work accordion.
 *
 * Reka's Accordion primitives carry all the open/close state, ARIA wiring and
 * keyboard support, so this component is just markup + Swiss styling. The number
 * colour and +/- marker are driven purely by the `data-state` Reka sets on the
 * trigger — no local state needed.
 */
import { computed } from 'vue'
import { AccordionContent, AccordionHeader, AccordionItem, AccordionTrigger } from 'reka-ui'
import type { Project } from '../../lib/types'
import LangText from './LangText.vue'
import ImageSlot from './ImageSlot.vue'

const props = defineProps<{ project: Project; index: number }>()

const num = computed(() => String(props.index + 1).padStart(2, '0'))
</script>

<template>
  <AccordionItem :value="project.id" class="item">
    <AccordionHeader class="head">
      <AccordionTrigger class="trigger">
        <span class="num">{{ num }}</span>
        <span class="title">{{ project.title }}</span>
        <span class="format"><LangText :text="project.format" /></span>
        <span class="meta">{{ project.sender }} · {{ project.year }}</span>
        <span class="mark" aria-hidden="true" />
      </AccordionTrigger>
    </AccordionHeader>

    <AccordionContent class="content">
      <div class="detail">
        <div class="media">
          <div v-if="project.embed" class="embed">
            <iframe
              :src="project.embed"
              :title="project.title"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
          <div v-else class="still">
            <ImageSlot :src="project.still" :hint="project.stillHint" :alt="project.title" />
          </div>
        </div>

        <div class="info">
          <p class="eyebrow sender">
            {{ project.sender }} · <LangText :text="project.format" />
          </p>
          <p class="desc"><LangText :text="project.description" /></p>
          <p class="role"><LangText :text="project.role" /></p>

          <div v-if="project.links.length" class="links">
            <a
              v-for="link in project.links"
              :key="link.url"
              :href="link.url"
              target="_blank"
              rel="noopener"
              class="link"
            >
              <span>{{ link.label }}</span>
              <span class="arrow">↗</span>
            </a>
          </div>
        </div>
      </div>
    </AccordionContent>
  </AccordionItem>
</template>

<style scoped>
.head {
  margin: 0;
}

.trigger {
  width: 100%;
  background: none;
  border: 0;
  border-bottom: 1px solid var(--border);
  cursor: pointer;
  text-align: left;
  color: inherit;
  display: grid;
  grid-template-columns: 52px 1fr 1fr 130px 32px;
  gap: 20px;
  padding: 18px 4px;
  align-items: baseline;
  transition: background var(--dur-fast) var(--ease-standard);
}

.trigger:hover {
  background: var(--surface-2);
}

.num {
  font: 500 14px/1 var(--font-mono);
  color: var(--text-muted);
}

.title {
  font: 600 19px/1.15 var(--font-grotesk);
  letter-spacing: -0.01em;
}

.format {
  font: 400 14px/1.3 var(--font-grotesk);
  color: var(--text-muted);
}

.meta {
  font: 400 14px/1 var(--font-grotesk);
  color: var(--text-muted);
}

.mark {
  font: 400 18px/1 var(--font-grotesk);
  color: var(--text-muted);
  text-align: right;
}

.mark::after {
  content: '+';
}

/* Open state — Reka sets data-state="open" on the trigger. */
.trigger[data-state='open'] .num,
.trigger[data-state='open'] .mark {
  color: var(--red);
}

.trigger[data-state='open'] .mark::after {
  content: '−';
}

/* Reka exposes the natural height for a smooth expand/collapse. */
.content {
  overflow: hidden;
}

.content[data-state='open'] {
  animation: slide-down var(--dur-base) var(--ease-standard);
}

.content[data-state='closed'] {
  animation: slide-up var(--dur-base) var(--ease-standard);
}

@keyframes slide-down {
  from {
    height: 0;
  }
  to {
    height: var(--reka-accordion-content-height);
  }
}

@keyframes slide-up {
  from {
    height: var(--reka-accordion-content-height);
  }
  to {
    height: 0;
  }
}

.detail {
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  gap: 32px;
  padding: 28px 4px 40px;
  border-bottom: 1px solid var(--border);
}

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

.sender {
  color: var(--red);
}

.desc {
  font: 400 15px/1.6 var(--font-grotesk);
  color: var(--text-muted);
  margin: 14px 0 0;
  max-width: 48ch;
}

.role {
  font: 600 13px/1 var(--font-grotesk);
  margin: 20px 0 0;
}

.links {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  border-top: 1px solid var(--border);
}

.link {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 10px 0;
  border-bottom: 1px solid var(--border);
  font: 500 13px/1.3 var(--font-grotesk);
}

.arrow {
  color: var(--text-subtle);
}

@media (max-width: 860px) {
  .trigger {
    grid-template-columns: 36px 1fr 28px;
  }
  /* Secondary columns fold away on narrow screens. */
  .format,
  .meta {
    display: none;
  }
  .detail {
    grid-template-columns: 1fr;
  }
}
</style>
