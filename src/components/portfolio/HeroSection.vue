<script setup lang="ts">
/** Type-led hero: role eyebrow, display headline, intro, red showreel tile. */
import type { Profile } from '../../lib/types'
import Container from './Container.vue'
import LangText from './LangText.vue'
import PlayBadge from './PlayBadge.vue'

defineProps<{ profile: Profile; reelYear: string }>()
</script>

<template>
  <section class="hero">
    <Container>
      <div class="grid">
        <div>
          <p class="eyebrow role">Editor — <LangText :text="profile.role" /></p>
          <h1 class="headline"><LangText :text="profile.headline" /></h1>
          <p class="intro"><LangText :text="profile.intro" /></p>
        </div>

        <a href="#reel" class="reel-tile">
          <PlayBadge :size="64" />
          <span class="eyebrow tag tag-bottom">Showreel · {{ reelYear }}</span>
          <span class="eyebrow tag tag-top">↓</span>
        </a>
      </div>
    </Container>
  </section>
</template>

<style scoped>
.hero {
  padding: 96px 0 72px;
}

.grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 360px;
  gap: 56px;
  align-items: stretch;
}

.role {
  color: var(--red);
}

.headline {
  font: 900 68px/0.95 var(--font-grotesk);
  letter-spacing: -0.03em;
  margin: 20px 0 0;
  max-width: 15ch;
  text-transform: uppercase;
}

.intro {
  font: 400 18px/1.55 var(--font-grotesk);
  color: var(--text-muted);
  max-width: 46ch;
  margin: 28px 0 0;
}

.reel-tile {
  background: var(--red);
  display: grid;
  place-items: center;
  position: relative;
  min-height: 300px;
  transition: background var(--dur-fast) var(--ease-standard);
}

.reel-tile:hover {
  background: var(--accent-hover);
}

.tag {
  position: absolute;
  color: rgba(255, 255, 255, 0.8);
}

.tag-bottom {
  bottom: 16px;
  left: 16px;
}

.tag-top {
  top: 16px;
  right: 16px;
}

@media (max-width: 860px) {
  .grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .headline {
    font-size: 48px;
  }
}
</style>
