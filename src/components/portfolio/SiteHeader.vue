<script setup lang="ts">
/** Sticky top bar: wordmark, section nav, DE/EN switch, light/dark toggle. */
import { Icon } from '@iconify/vue'
import type { Localized } from '../../lib/types'
import { ui, setLang, toggleTheme } from '../../stores/ui'
import Container from './Container.vue'
import LangText from './LangText.vue'

defineProps<{ name: string }>()

const nav: { href: string; label: Localized }[] = [
  { href: '#work', label: { de: 'Referenzen', en: 'Work' } },
  { href: '#reel', label: { de: 'Showreel', en: 'Showreel' } },
  { href: '#about', label: { de: 'Über', en: 'About' } },
  { href: '#contact', label: { de: 'Kontakt', en: 'Contact' } },
]
</script>

<template>
  <header class="header">
    <Container>
      <div class="bar">
        <a href="#top" class="wordmark">{{ name }}</a>

        <nav class="nav">
          <a v-for="item in nav" :key="item.href" :href="item.href" class="nav-link">
            <LangText :text="item.label" />
          </a>

          <div class="divider" />

          <div class="lang">
            <button
              type="button"
              class="lang-btn"
              :class="{ active: ui.lang === 'de' }"
              @click="setLang('de')"
            >
              DE
            </button>
            <span class="lang-sep">/</span>
            <button
              type="button"
              class="lang-btn"
              :class="{ active: ui.lang === 'en' }"
              @click="setLang('en')"
            >
              EN
            </button>
          </div>

          <button type="button" class="theme-btn" aria-label="Theme" @click="toggleTheme">
            <Icon :icon="ui.theme === 'dark' ? 'lucide:moon' : 'lucide:sun'" width="16" height="16" />
          </button>
        </nav>
      </div>
    </Container>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--bg);
  border-bottom: 2px solid var(--border-strong);
}

.bar {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.wordmark {
  font: 800 16px/1 var(--font-grotesk);
  letter-spacing: -0.01em;
  text-transform: uppercase;
}

.nav {
  display: flex;
  align-items: center;
  gap: 28px;
}

.nav-link {
  font: 500 14px/1 var(--font-grotesk);
}

.divider {
  width: 1px;
  height: 20px;
  background: var(--border);
}

.lang {
  display: flex;
  align-items: center;
  gap: 6px;
  font: 600 13px/1 var(--font-grotesk);
}

.lang-btn {
  background: none;
  border: 0;
  cursor: pointer;
  color: var(--text);
  padding: 2px;
  font: inherit;
  opacity: 0.35;
  transition: opacity var(--dur-fast) var(--ease-standard);
}

.lang-btn.active {
  opacity: 1;
}

.lang-sep {
  color: var(--text-subtle);
}

.theme-btn {
  background: none;
  border: 1px solid var(--border);
  cursor: pointer;
  color: var(--text);
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  transition: border-color var(--dur-fast) var(--ease-standard);
}

.theme-btn:hover {
  border-color: var(--border-strong);
}

@media (max-width: 720px) {
  .nav {
    gap: 16px;
  }
  /* Collapse section anchors on small screens; keep controls reachable. */
  .nav-link,
  .divider {
    display: none;
  }
}
</style>
