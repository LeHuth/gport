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

/**
 * One card in the Side Projects grid.
 *
 * Deliberately looser than `Project`: no accordion, no per-item link list —
 * just a still or embed, a kind, a title and one optional "watch" link. The
 * grid takes any number of these, so entries can be added or removed freely.
 */
export interface SideProject {
  /** Stable id — used as the list key. */
  id: string
  title: string
  /** What sort of piece it is, e.g. "Musikvideo" / "Music video". */
  kind: Localized
  /** Secondary line, e.g. "Artist · Jahr". */
  meta: Localized
  /** Embeddable player URL. Null → show a still instead. */
  embed?: string | null
  /** Still image URL shown when there is no embed. Null → placeholder box. */
  still?: string | null
  /** Placeholder hint shown when neither embed nor still is set. */
  stillHint?: string
  /** Optional external link rendered as "Ansehen ↗". */
  url?: string | null
}

/**
 * The Side Projects section as a whole. Both the heading and the tagline that
 * names what the side work actually is ("Musikvideos · Studentenfilme") are
 * content, not markup, so they can be edited without touching the component.
 */
export interface SideProjectsContent {
  heading: Localized
  /** Eyebrow beside the heading describing the kinds of work shown. */
  tagline: Localized
  items: SideProject[]
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
  /** Section is hidden entirely when `items` is empty. */
  sideProjects: SideProjectsContent
  broadcasters: string[]
}
