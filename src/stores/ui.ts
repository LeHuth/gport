/**
 * UI store — language and theme.
 *
 * A tiny reactive singleton shared across the portfolio island. It owns the two
 * pieces of global view state (`lang`, `theme`), persists them to localStorage,
 * and mirrors the theme onto the wrapper element via a `theme-dark` class (the
 * design system reads that class to flip its tokens).
 */
import { reactive } from 'vue'
import type { Lang, Theme } from '../lib/types'

const LANG_KEY = 'gb.lang'
const THEME_KEY = 'gb.theme'

interface UiState {
  lang: Lang
  theme: Theme
}

export const ui = reactive<UiState>({
  lang: 'de',
  theme: 'light',
})

export function setLang(lang: Lang): void {
  ui.lang = lang
  persist(LANG_KEY, lang)
}

export function toggleTheme(): void {
  setTheme(ui.theme === 'dark' ? 'light' : 'dark')
}

export function setTheme(theme: Theme): void {
  ui.theme = theme
  persist(THEME_KEY, theme)
  applyTheme(theme)
}

/**
 * Keep <html data-theme> in sync (it's set pre-paint in Layout.astro to avoid a
 * flash). This is the global source of truth the design tokens read; the wrapper
 * `theme-dark` class mirrors it for scoped reactivity.
 */
function applyTheme(theme: Theme): void {
  if (typeof document === 'undefined') return
  if (theme === 'dark') document.documentElement.dataset.theme = 'dark'
  else delete document.documentElement.dataset.theme
}

/**
 * Hydrate state from localStorage / system preference. Call once on mount
 * (client only) so server-render and first client-render stay identical.
 */
export function initUi(): void {
  if (typeof window === 'undefined') return

  const savedLang = localStorage.getItem(LANG_KEY)
  if (savedLang === 'de' || savedLang === 'en') ui.lang = savedLang

  const savedTheme = localStorage.getItem(THEME_KEY)
  if (savedTheme === 'light' || savedTheme === 'dark') {
    ui.theme = savedTheme
  } else if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
    ui.theme = 'dark'
  }
  applyTheme(ui.theme)
}

function persist(key: string, value: string): void {
  if (typeof window !== 'undefined') localStorage.setItem(key, value)
}
