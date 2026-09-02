<script setup lang="ts">
/**
 * Portfolio root — the single hydrated island.
 *
 * Owns the app lifecycle: hydrates UI prefs (lang/theme) and refreshes content
 * from PocketBase on mount, applies the theme class to the wrapper, and lays out
 * the page sections. All content comes from the reactive `portfolio` store, so
 * swapping the data source is invisible here.
 */
import { computed, onMounted } from 'vue'
import { ui, initUi } from '../../stores/ui'
import { portfolio, loadPortfolio } from '../../stores/portfolio'

import SiteHeader from './SiteHeader.vue'
import HeroSection from './HeroSection.vue'
import StatsBar from './StatsBar.vue'
import WorkSection from './WorkSection.vue'
import ReelSection from './ReelSection.vue'
import SideProjectsSection from './SideProjectsSection.vue'
import AboutSection from './AboutSection.vue'
import ClientsSection from './ClientsSection.vue'
import ContactSection from './ContactSection.vue'
import SiteFooter from './SiteFooter.vue'

const content = computed(() => portfolio.content)
const profile = computed(() => content.value.profile)
const footerNotice = computed(() => `© 2026 ${profile.value.name} — Editor, Berlin`)

// Side projects are optional content — no entries means no section and no nav link.
const sideProjects = computed(() => content.value.sideProjects)
const hasSideProjects = computed(() => sideProjects.value.items.length > 0)

onMounted(() => {
  initUi()
  loadPortfolio()
})
</script>

<template>
  <div id="gb" class="gb" :class="{ 'theme-dark': ui.theme === 'dark' }">
    <SiteHeader
      :name="profile.name"
      :side-projects-label="hasSideProjects ? sideProjects.heading : null"
    />

    <a id="top" />

    <HeroSection :profile="profile" :reel-year="profile.reel.year" />
    <StatsBar
      :based="profile.based"
      :formats="profile.formats"
      :languages="profile.languages"
    />
    <WorkSection :projects="content.projects" />
    <ReelSection :reel="profile.reel" />
    <SideProjectsSection v-if="hasSideProjects" :content="sideProjects" />
    <AboutSection :about="profile.about" />
    <ClientsSection :broadcasters="content.broadcasters" />
    <ContactSection
      :email="profile.email"
      :socials="profile.socials"
      :location="profile.location"
      :cv-url="profile.cvUrl"
    />
    <SiteFooter :notice="footerNotice" />
  </div>
</template>

<style scoped>
.gb {
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
  font-family: var(--font-grotesk);
}

/* Offset in-page anchors for the sticky header. */
.gb :deep(section[id]) {
  scroll-margin-top: 80px;
}

.gb :deep(a) {
  color: var(--text);
  text-decoration: none;
}

.gb :deep(a:hover) {
  color: var(--red);
}
</style>
