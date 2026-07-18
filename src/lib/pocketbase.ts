/**
 * PocketBase data source — the plug-in point for real content.
 *
 * This is a dependency-free client that talks to the PocketBase REST API with
 * `fetch`, so nothing needs installing to wire your instance up. To go live:
 *
 *   1. Set PUBLIC_POCKETBASE_URL in `.env` (e.g. https://pb.example.com).
 *   2. Create the collections described in EXPECTED_SCHEMA below.
 *   3. That's it — `loadPortfolio()` (src/stores/portfolio.ts) will pull from
 *      PocketBase instead of the local seed automatically.
 *
 * If PUBLIC_POCKETBASE_URL is unset the app just uses `src/data/seed.ts`.
 *
 * ── EXPECTED_SCHEMA ────────────────────────────────────────────────────────
 * collection `profile` (single record is enough):
 *   name (text), role_de, role_en, headline_de, headline_en, intro_de, intro_en,
 *   based (text), formats_de, formats_en, languages (text),
 *   about_heading_de, about_heading_en,
 *   about_paragraphs (json: [{de,en}, ...]),
 *   skills (json: [{de,en}, ...]),
 *   email (text), socials (json: [{label,handle,url}, ...]),
 *   location (text), cv (file, single), reel_year (text), reel_embed (url|text)
 *
 * collection `projects` (one record per project), with an `order` number field:
 *   title, sender, year, format_de, format_en, description_de, description_en,
 *   role_de, role_en, embed (url|text), still (file, single),
 *   still_hint (text), links (json: [{label,url}, ...])
 *
 * collection `broadcasters` (one record per logo), with an `order` number field:
 *   name (text)
 * ───────────────────────────────────────────────────────────────────────────
 */
import type {
  AboutContent,
  Localized,
  PortfolioContent,
  Profile,
  Project,
  SocialLink,
} from './types'

const PB_URL = (import.meta.env.PUBLIC_POCKETBASE_URL as string | undefined)?.replace(/\/$/, '')

/** True when a PocketBase URL is configured; otherwise the seed data is used. */
export function isPocketBaseConfigured(): boolean {
  return Boolean(PB_URL)
}

/** Any PocketBase record carries at least these system fields. */
type PbRecord = Record<string, unknown> & {
  id: string
  collectionId: string
  collectionName: string
}

/** Build the public URL for a file stored on a record. */
export function pbFileUrl(record: PbRecord, filename: string): string {
  return `${PB_URL}/api/files/${record.collectionId}/${record.id}/${filename}`
}

async function pbList(collection: string, sort?: string): Promise<PbRecord[]> {
  const url = new URL(`${PB_URL}/api/collections/${collection}/records`)
  url.searchParams.set('perPage', '200')
  if (sort) url.searchParams.set('sort', sort)

  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(`PocketBase ${collection}: ${res.status} ${res.statusText}`)
  }
  const body = (await res.json()) as { items: PbRecord[] }
  return body.items
}

/** Fetch and map the full portfolio from PocketBase into the UI view model. */
export async function fetchPortfolioFromPocketBase(): Promise<PortfolioContent> {
  const [profiles, projects, broadcasters] = await Promise.all([
    pbList('profile'),
    pbList('projects', 'order'),
    pbList('broadcasters', 'order'),
  ])

  const profileRec = profiles[0]
  if (!profileRec) throw new Error('PocketBase: `profile` collection is empty')

  return {
    profile: mapProfile(profileRec),
    projects: projects.map(mapProject),
    broadcasters: broadcasters.map((r) => str(r.name)),
  }
}

// ── mappers ─────────────────────────────────────────────────────────────────

function mapProfile(r: PbRecord): Profile {
  const cvFile = str(r.cv)
  return {
    name: str(r.name),
    role: localized(r, 'role'),
    headline: localized(r, 'headline'),
    intro: localized(r, 'intro'),
    based: str(r.based),
    formats: localized(r, 'formats'),
    languages: str(r.languages),
    about: mapAbout(r),
    email: str(r.email),
    socials: asArray<SocialLink>(r.socials),
    location: str(r.location),
    cvUrl: cvFile ? pbFileUrl(r, cvFile) : '#',
    reel: { year: str(r.reel_year), embed: strOrNull(r.reel_embed) },
  }
}

function mapAbout(r: PbRecord): AboutContent {
  return {
    heading: localized(r, 'about_heading'),
    paragraphs: asArray<Localized>(r.about_paragraphs),
    skills: asArray<Localized>(r.skills),
  }
}

function mapProject(r: PbRecord): Project {
  const stillFile = str(r.still)
  return {
    id: r.id,
    title: str(r.title),
    sender: str(r.sender),
    year: str(r.year),
    format: localized(r, 'format'),
    description: localized(r, 'description'),
    role: localized(r, 'role'),
    embed: strOrNull(r.embed),
    still: stillFile ? pbFileUrl(r, stillFile) : null,
    stillHint: str(r.still_hint) || undefined,
    links: asArray<{ label: string; url: string }>(r.links),
  }
}

// ── field helpers ─────────────────────────────────────────────────────────────

/** Read `<base>_de` / `<base>_en` fields into a Localized pair. */
function localized(r: PbRecord, base: string): Localized {
  return { de: str(r[`${base}_de`]), en: str(r[`${base}_en`]) }
}

function str(value: unknown): string {
  return typeof value === 'string' ? value : value == null ? '' : String(value)
}

function strOrNull(value: unknown): string | null {
  const s = str(value)
  return s === '' ? null : s
}

/** PocketBase json fields arrive already parsed; coerce defensively. */
function asArray<T>(value: unknown): T[] {
  if (Array.isArray(value)) return value as T[]
  if (typeof value === 'string' && value.trim()) {
    try {
      const parsed = JSON.parse(value)
      return Array.isArray(parsed) ? (parsed as T[]) : []
    } catch {
      return []
    }
  }
  return []
}
