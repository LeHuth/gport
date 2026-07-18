<script setup lang="ts">
/** Contact: big email CTA, social links, location and CV download. */
import { Icon } from '@iconify/vue'
import type { Localized, SocialLink } from '../../lib/types'
import Container from './Container.vue'
import LangText from './LangText.vue'

defineProps<{
  email: string
  socials: SocialLink[]
  location: string
  cvUrl: string
}>()

const kicker: Localized = { de: 'Kontakt', en: 'Contact' }
const heading: Localized = { de: 'Zusammenarbeiten?', en: 'Work together?' }
const locationLabel: Localized = { de: 'Standort', en: 'Location' }
const cvLabel: Localized = { de: 'Lebenslauf (PDF)', en: 'Download CV (PDF)' }
</script>

<template>
  <section id="contact" class="section">
    <Container>
      <div class="grid">
        <div>
          <p class="eyebrow"><LangText :text="kicker" /></p>
          <h2 class="title"><LangText :text="heading" /></h2>
          <a :href="`mailto:${email}`" class="email">{{ email }}</a>
        </div>

        <div class="links">
          <a
            v-for="social in socials"
            :key="social.url"
            :href="social.url"
            target="_blank"
            rel="noopener"
            class="row"
          >
            <span class="eyebrow">{{ social.label }}</span>
            <span class="value">{{ social.handle }} ↗</span>
          </a>

          <div class="row static">
            <span class="eyebrow"><LangText :text="locationLabel" /></span>
            <span class="value">{{ location }}</span>
          </div>

          <a :href="cvUrl" class="cv">
            <Icon icon="lucide:download" width="16" height="16" />
            <LangText :text="cvLabel" />
          </a>
        </div>
      </div>
    </Container>
  </section>
</template>

<style scoped>
.section {
  padding: 96px 0;
  border-top: 2px solid var(--border-strong);
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: start;
}

.title {
  font: 900 48px/1 var(--font-grotesk);
  letter-spacing: -0.03em;
  margin: 14px 0 0;
  text-transform: uppercase;
}

.email {
  display: inline-block;
  font: 600 24px/1.2 var(--font-grotesk);
  margin-top: 24px;
  color: var(--red);
}

.links {
  display: flex;
  flex-direction: column;
}

.row {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 0;
  border-top: 1px solid var(--border);
}

.row.static:last-of-type {
  border-bottom: 1px solid var(--border);
}

.value {
  font: 500 15px/1.3 var(--font-grotesk);
}

.cv {
  margin-top: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 22px;
  background: var(--red);
  color: #fff;
  font: 600 15px/1 var(--font-grotesk);
  transition: opacity var(--dur-fast) var(--ease-standard);
}

.cv:hover {
  opacity: 0.9;
  color: #fff;
}

@media (max-width: 860px) {
  .grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .title {
    font-size: 36px;
  }
}
</style>
