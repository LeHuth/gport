<script setup lang="ts">
/** About: portrait, bio paragraphs and a two-column skills grid. */
import type { AboutContent, Localized } from '../../lib/types'
import Container from './Container.vue'
import LangText from './LangText.vue'
import ImageSlot from './ImageSlot.vue'

defineProps<{ about: AboutContent; portrait?: string | null }>()

const label: Localized = { de: 'Über', en: 'About' }
</script>

<template>
  <section id="about" class="section">
    <Container>
      <div class="grid">
        <div class="portrait">
          <ImageSlot :src="portrait" hint="Porträt 3:4" alt="Portrait" />
        </div>

        <div>
          <p class="eyebrow"><LangText :text="label" /></p>
          <h2 class="title"><LangText :text="about.heading" /></h2>

          <div class="body">
            <p v-for="(para, i) in about.paragraphs" :key="i" class="para">
              <LangText :text="para" />
            </p>
          </div>

          <div class="skills">
            <div v-for="(skill, i) in about.skills" :key="i" class="skill">
              <p><LangText :text="skill" /></p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<style scoped>
.section {
  padding: 96px 0;
  border-top: 1px solid var(--border);
  background: var(--bg-inset);
}

.grid {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 64px;
  align-items: start;
}

.portrait {
  aspect-ratio: 3 / 4;
}

.title {
  font: 700 30px/1.1 var(--font-grotesk);
  letter-spacing: -0.02em;
  margin: 14px 0 0;
  max-width: 22ch;
}

.body {
  max-width: 58ch;
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.para {
  font: 400 16px/1.6 var(--font-grotesk);
  color: var(--text-muted);
}

.skills {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px 40px;
  margin-top: 32px;
  max-width: 520px;
}

.skill {
  border-top: 2px solid var(--border-strong);
  padding-top: 12px;
}

.skill p {
  font: 600 14px/1.3 var(--font-grotesk);
  margin: 0;
}

@media (max-width: 860px) {
  .grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .portrait {
    max-width: 320px;
  }
}
</style>
