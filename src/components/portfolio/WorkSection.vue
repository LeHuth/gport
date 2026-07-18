<script setup lang="ts">
/** Selected Work — a single-open accordion of project rows (Reka Accordion). */
import { ref } from 'vue'
import { AccordionRoot } from 'reka-ui'
import type { Localized, Project } from '../../lib/types'
import Container from './Container.vue'
import LangText from './LangText.vue'
import ProjectRow from './ProjectRow.vue'

const props = defineProps<{ projects: Project[] }>()

// First project open by default, mirroring the handoff design.
const openId = ref<string>(props.projects[0]?.id ?? '')

const heading: Localized = { de: 'Referenzen', en: 'Selected Work' }
const formatsLabel: Localized = { de: 'Formate', en: 'Formats' }

const count = () => String(props.projects.length).padStart(2, '0')
</script>

<template>
  <section id="work" class="section">
    <Container>
      <div class="head">
        <h2 class="title"><LangText :text="heading" /></h2>
        <span class="eyebrow count">{{ count() }} <LangText :text="formatsLabel" /></span>
      </div>

      <AccordionRoot v-model="openId" type="single" collapsible class="list">
        <ProjectRow
          v-for="(project, i) in projects"
          :key="project.id"
          :project="project"
          :index="i"
        />
      </AccordionRoot>
    </Container>
  </section>
</template>

<style scoped>
.section {
  padding: 96px 0;
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

.count {
  color: var(--text-subtle);
}

.list {
  margin-top: 28px;
  border-top: 2px solid var(--border-strong);
  display: block;
}
</style>
