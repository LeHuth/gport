<script setup lang="ts">
/** Footer: copyright line and back-to-top link. */
import type { Localized } from '../../lib/types'
import Container from './Container.vue'
import LangText from './LangText.vue'

defineProps<{ notice: string }>()

const toTop: Localized = { de: 'Nach oben ↑', en: 'Back to top ↑' }
</script>

<template>
  <footer class="footer">
    <Container>
      <div class="bar">
        <span class="notice">{{ notice }}</span>
        <a href="#top" class="link"><LangText :text="toTop" /></a>
      </div>
    </Container>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  padding: 28px 0;
}

.bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.notice,
.link {
  font: 400 13px/1 var(--font-grotesk);
  color: var(--text-muted);
}
</style>
