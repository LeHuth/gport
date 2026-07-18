/**
 * Portfolio content store.
 *
 * Holds the profile / projects / broadcasters the UI renders. It starts on the
 * local seed (so the site renders instantly and server-side), and `loadPortfolio()`
 * transparently swaps in PocketBase data when an instance is configured.
 *
 * Components only ever read `portfolio.content` — they don't care about the source.
 */
import { reactive } from 'vue'
import type { PortfolioContent } from '../lib/types'
import { seedContent } from '../data/seed'
import { fetchPortfolioFromPocketBase, isPocketBaseConfigured } from '../lib/pocketbase'

interface PortfolioStore {
  loading: boolean
  error: string | null
  content: PortfolioContent
}

export const portfolio = reactive<PortfolioStore>({
  loading: false,
  error: null,
  content: seedContent,
})

/**
 * Refresh content from PocketBase if configured. No-op (keeps the seed) when
 * PUBLIC_POCKETBASE_URL is unset. Never throws — failures surface on
 * `portfolio.error` and the seed stays visible.
 */
export async function loadPortfolio(): Promise<void> {
  if (!isPocketBaseConfigured()) return

  portfolio.loading = true
  portfolio.error = null
  try {
    portfolio.content = await fetchPortfolioFromPocketBase()
  } catch (err) {
    portfolio.error = err instanceof Error ? err.message : 'Failed to load content'
  } finally {
    portfolio.loading = false
  }
}
