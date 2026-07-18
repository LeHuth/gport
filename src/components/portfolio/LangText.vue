<script setup lang="ts">
/**
 * Renders a Localized value in the current site language.
 * Inline element so it drops into headings, paragraphs and spans alike.
 */
import { computed } from 'vue'
import type { Localized } from '../../lib/types'
import { ui } from '../../stores/ui'

const props = defineProps<{ text: Localized }>()

const value = computed(() => (ui.lang === 'en' ? props.text.en : props.text.de))
</script>

<template>
  <span>{{ value }}</span>
</template>
