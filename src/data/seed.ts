/**
 * Static portfolio content — the default data source.
 *
 * This is a faithful port of the content in the Claude Design handoff
 * ("Giacomo Boehlke Portfolio.dc.html"). It is used as-is until a PocketBase
 * instance is configured (see `src/lib/pocketbase.ts`), and also serves as the
 * canonical example of the shape PocketBase records must map to.
 */
import type { PortfolioContent } from '../lib/types'

export const seedContent: PortfolioContent = {
  profile: {
    name: 'Giacomo Boehlke',
    role: { de: 'Dokumentarfilm & Reportage', en: 'Documentary & Reportage' },
    headline: {
      de: 'Schnitt für Dokumentarfilm.',
      en: 'Editing documentary film.',
    },
    intro: {
      de: 'Editor in Berlin, spezialisiert auf Dokumentarfilm und Reportage. Von der ersten Sichtung bis zum fertigen Schnitt — für Sender wie Arte, ZDF und 3sat und für unabhängige Produktionen.',
      en: 'Editor based in Berlin, focused on documentary and reportage. From first viewing to final cut — for broadcasters like Arte, ZDF and 3sat and for independent productions.',
    },
    based: 'Berlin, DE',
    formats: {
      de: 'Doku · Reportage · Kultur',
      en: 'Documentary · Reportage · Culture',
    },
    languages: 'Deutsch · English',
    about: {
      heading: { de: 'Der Schnitt macht den Film.', en: 'The edit makes the film.' },
      paragraphs: [
        {
          de: 'Ich bin Giacomo, Editor in Berlin. Ich schneide Dokumentationen, Reportagen und Kulturformate für Arte, ZDF, Terra X und 3sat — dazu Imagefilme und Eventproduktionen.',
          en: "I'm Giacomo, an editor based in Berlin. I cut documentaries, reportage and culture formats for Arte, ZDF, Terra X and 3sat — plus image films and event coverage.",
        },
        {
          de: 'Neben dem Schnittplatz stehe ich bei Live-Produktionen und Konzerten hinter der Kamera. Ich arbeite mit der Adobe Creative Suite und DaVinci Resolve für Farbkorrektur und Grading — mit solidem Verständnis für Tonmischung und Motion Design.',
          en: 'Beyond the edit suite I work behind the camera at live productions and concerts. I work with the Adobe Creative Suite and DaVinci Resolve for colour correction and grading — with a solid grounding in sound mixing and motion design.',
        },
      ],
      skills: [
        { de: 'Schnitt — Doku & Reportage', en: 'Editing — documentary & reportage' },
        { de: 'Kamera — Live & Konzert', en: 'Camera — live & concerts' },
        { de: 'Premiere Pro · After Effects', en: 'Premiere Pro · After Effects' },
        { de: 'DaVinci Resolve — Color', en: 'DaVinci Resolve — Color' },
      ],
    },
    email: 'gboehlke@gmail.com',
    socials: [
      {
        label: 'LinkedIn',
        handle: 'giacomo-boehlke',
        url: 'http://www.linkedin.com/in/giacomo-boehlke-577262272',
      },
      {
        label: 'Instagram',
        handle: 'giacomo.clstn',
        url: 'https://www.instagram.com/giacomo.clstn',
      },
    ],
    location: 'Berlin · Deutschland',
    cvUrl: '#',
    reel: { year: '2025', embed: null },
  },

  projects: [
    {
      id: 'arte-tracks-east',
      title: 'Arte Tracks East',
      sender: 'Arte',
      year: 'seit 2023',
      format: { de: 'Kulturmagazin', en: 'Culture magazine' },
      description: {
        de: 'Kulturschaffende aus Osteuropa und die Geschichten hinter ihrer Arbeit.',
        en: 'Cultural figures from Eastern Europe, and the stories behind their work.',
      },
      role: { de: 'Schnitt — seit Staffel 1', en: 'Editor — since season 1' },
      embed: 'https://www.youtube.com/embed/videoseries?list=PLlQWnS27jXh_O9XIbC2r60w3ZPk2XO6_m',
      links: [
        {
          label: 'Playlist — YouTube',
          url: 'https://www.youtube.com/playlist?list=PLlQWnS27jXh_O9XIbC2r60w3ZPk2XO6_m',
        },
      ],
    },
    {
      id: 'arte-tracks',
      title: 'Arte Tracks',
      sender: 'Arte',
      year: '2025',
      format: { de: 'Reportage · Musik', en: 'Reportage · Music' },
      description: {
        de: 'Reportagen über aktuelle Musik, Subkultur und Politik.',
        en: 'Reportage on current music, subculture and politics.',
      },
      role: { de: 'Schnitt', en: 'Editor' },
      embed: 'https://www.youtube.com/embed/vbvonzeKQYg',
      links: [
        { label: 'Beitrag 02 — YouTube', url: 'https://www.youtube.com/watch?v=ZzSFVK4JhWg' },
        { label: 'Beitrag 03 — YouTube', url: 'https://www.youtube.com/watch?v=Cwa6vSg7mnw' },
        { label: 'Beitrag 04 — YouTube', url: 'https://www.youtube.com/watch?v=pkbfhdgsKrw' },
      ],
    },
    {
      id: 'arte-re',
      title: 'Arte Re:',
      sender: 'Arte',
      year: '2025',
      format: { de: 'Reportage', en: 'Reportage' },
      description: {
        de: 'Aktuelles und Gesellschaft. Reportagen aus Europa.',
        en: 'Current affairs and society. Reportage from across Europe.',
      },
      role: { de: 'Schnitt', en: 'Editor' },
      embed: 'https://www.youtube.com/embed/Ht49iODcV5w',
      links: [
        { label: 'Beitrag 02 — YouTube', url: 'https://www.youtube.com/watch?v=bsTXc1DFSuM' },
        { label: 'Beitrag 03 — YouTube', url: 'https://www.youtube.com/watch?v=JgaFZplJ_sI' },
        { label: 'Beitrag 04 — YouTube', url: 'https://www.youtube.com/watch?v=O-BKD8IJXJ0' },
      ],
    },
    {
      id: 'terra-x',
      title: 'Terra X',
      sender: 'ZDF',
      year: '2025',
      format: { de: 'Dokumentation', en: 'Documentary' },
      description: {
        de: 'Filme über Geschichte, Abenteuer, Natur und Expeditionen — Wissensdokumentation für das ZDF.',
        en: 'Films on history, adventure, nature and expeditions — factual documentary for ZDF.',
      },
      role: { de: 'Schnitt', en: 'Editor' },
      embed: 'https://www.youtube.com/embed/rDO5x2qsHiY',
      links: [{ label: 'Beitrag — YouTube', url: 'https://www.youtube.com/watch?v=rDO5x2qsHiY' }],
    },
    {
      id: 'zdf-aspekte',
      title: 'ZDF Aspekte',
      sender: 'ZDF',
      year: '2025',
      format: { de: 'Kulturmagazin', en: 'Culture magazine' },
      description: {
        de: 'Aktuelle Debatten aus Literatur, Kunst, Musik, Theater und Film.',
        en: 'Current debates across literature, art, music, theatre and film.',
      },
      role: { de: 'Schnitt', en: 'Editor' },
      embed: null,
      stillHint: 'Still 16:9 — ZDF Aspekte',
      links: [
        {
          label: 'Haare als Widerstandssymbol — zdf.de',
          url: 'https://www.zdf.de/kultur/aspekte/haare-widerstand-symbol-debatte-100.html',
        },
        {
          label: 'Kitsch, Kunst, Trump — zdf.de',
          url: 'https://www.zdf.de/video/reportagen/aspekte-106/kitsch-kunst-trump-100',
        },
        {
          label: 'Russland: Kunst im Exil — zdf.de',
          url: 'https://www.zdf.de/kultur/aspekte/russland-putin-exil-100.html',
        },
      ],
    },
    {
      id: '3sat-kulturdoku',
      title: '3sat Kulturdoku',
      sender: '3sat',
      year: '2025',
      format: { de: 'Kulturdokumentation', en: 'Culture documentary' },
      description: {
        de: 'Kulturdokumentationen zwischen Musik, Kunst, Literatur und Politik.',
        en: 'Culture documentaries spanning music, art, literature and politics.',
      },
      role: { de: 'Schnitt', en: 'Editor' },
      embed: null,
      stillHint: 'Still 16:9 — 3sat',
      links: [
        {
          label: 'Kultur — ein Elitending? — 3sat.de',
          url: 'https://www.3sat.de/kultur/kulturdoku/kultur-ein-elitending-100.html',
        },
        {
          label: 'Russland verlassen — 3sat.de',
          url: 'https://www.3sat.de/kultur/kulturdoku/russland-verlassen-100.html',
        },
        {
          label: 'Die Emojikalypse — 3sat.de',
          url: 'https://www.3sat.de/kultur/kulturdoku/die-emojikalypse-100.html',
        },
      ],
    },
    {
      id: 'mercedes-benz',
      title: 'Mercedes-Benz',
      sender: 'Corporate',
      year: '2022–25',
      format: { de: 'Imagefilm · Event', en: 'Image film · Events' },
      description: {
        de: 'Imagefilme und Eventberichterstattung — Servicegipfel, Bauma, RoadStars-Touren.',
        en: 'Image films and event coverage — Service Summit, Bauma, RoadStars tours.',
      },
      role: { de: 'Schnitt & Kamera', en: 'Editor & camera' },
      embed: null,
      stillHint: 'Still 16:9 — Mercedes',
      links: [
        {
          label: 'Servicegipfel 2025',
          url: 'https://www.mercedes-benz-consulting.de/news/servicegipfel-2025/',
        },
        {
          label: 'Rest-Stop-Tour 2022 — RoadStars',
          url: 'https://roadstars.mercedes-benz-trucks.com/de_DE/events/2022/november/roadstars-rest-stop-tour-2022.html',
        },
        {
          label: 'Bauma 2022',
          url: 'https://www.mercedes-benz-trucks.com/de_DE/brand/actions-and-events/bauma-2022.html',
        },
      ],
    },
  ],

  broadcasters: ['Arte', 'ZDF', 'Terra X', '3sat', 'Tracks', 'Mercedes'],
}
