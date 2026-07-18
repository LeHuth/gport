/**
 * Domain types for the portfolio content.
 *
 * These are the *view models* the UI consumes. Any data source (the local seed
 * in `src/data/seed.ts` or PocketBase in `src/lib/pocketbase.ts`) is responsible
 * for mapping its raw records into these shapes, so the components never need to
 * know where the data came from.
 */

export type Lang = 'de' | 'en'
export type Theme = 'light' | 'dark'

/** A string that exists in both site languages. */
export interface Localized {
  de: string
  en: string
}

export interface ProjectLink {
  label: string
  url: string
}

export interface Project {
  /** Stable id — used as the accordion key. */
  id: string
  title: string
  /** Broadcaster / client, e.g. "Arte", "ZDF", "Corporate". */
  sender: string
  /** Free-form, e.g. "2025", "seit 2023", "2022–25". */
  year: string
  format: Localized
  description: Localized
  role: Localized
  /** Embeddable player URL (YouTube embed etc). Null → show a still instead. */
  embed?: string | null
  /** Still image URL shown when there is no embed. Null → placeholder box. */
  still?: string | null
  /** Placeholder hint shown when neither embed nor still is set. */
  stillHint?: string
  links: ProjectLink[]
}

export interface SocialLink {
  label: string
  handle: string
  url: string
}

export interface AboutContent {
  heading: Localized
  paragraphs: Localized[]
  /** Skill lines; language-neutral ones just repeat the same value. */
  skills: Localized[]
}

export interface Reel {
  year: string
  embed?: string | null
}

export interface Profile {
  name: string
  /** Eyebrow role label, rendered after the literal "Editor —". */
  role: Localized
  headline: Localized
  intro: Localized
  based: string
  formats: Localized
  languages: string
  about: AboutContent
  email: string
  socials: SocialLink[]
  location: string
  /** URL to the CV PDF ("#" until provided). */
  cvUrl: string
  reel: Reel
}

export interface PortfolioContent {
  profile: Profile
  projects: Project[]
  broadcasters: string[]
}
