/**
 * SINGURUL FIȘIER DE CONȚINUT.
 *
 * Tot textul site-ului este aici. Ca să schimbi ceva pe site, editezi aici.
 * Nu e nevoie să umbli în `index.astro`.
 *
 * Pentru varianta EN: copiază acest fișier ca `en.ts`, tradu valorile,
 * apoi creează `src/pages/en/index.astro` care importă `en.ts` în loc de
 * `ro.ts`. Structura este deja pregătită pentru asta (vezi tipul `Content`).
 *
 * REGULI DE CONȚINUT, stabilite pentru v1:
 *  - Proiectul este în pre-lansare. Mașina nu este încă achiziționată.
 *  - Nu adăuga testimoniale, logouri de clienți, statistici sau numere de
 *    evenimente. Nu există încă activări realizate.
 *  - Nu folosi însemne Formula 1 sau ale echipelor. Sunt mărci protejate.
 */

export type Content = typeof ro;

export const ro = {
  lang: "ro",

  meta: {
    title: "FRQ, show car monopost pentru activări de brand",
    description:
      "FRQ pune la dispoziție un show car monopost 1:1, colantabil integral cu grafica sponsorului, pentru activări publice, activări private și închiriere.",
    siteUrl: "https://www.frqshowcar.com",
  },

  brand: {
    name: "FRQ",
    logo: "/frq-logo.png",
  },

  nav: [
    { label: "Ce oferim", href: "#oferta" },
    { label: "Pentru cine", href: "#pentru-cine" },
    { label: "Cum funcționează", href: "#proces" },
    { label: "Sezonul 2027", href: "#sezon" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    status: "Proiect în pre-lansare",
    title: "Un show car monopost, colantabil integral cu grafica ta.",
    intro:
      "FRQ este un proiect de brand activation din București, construit în jurul unui monopost 1:1 de tip formulă, replică de expunere, nerulantă. Îl ducem acolo unde publicul tău se află deja: în mall-uri, în campusuri de birouri, la festivaluri sau la sediul tău.",
    // Diferențierea centrală. Formulată ca fapt, fără superlative.
    differentiator:
      "Monoposturile de expunere disponibile în România se închiriază de regulă de la echipe, cu livery-ul lor. Al nostru este liber pentru branding, pe toată suprafața.",
    ctaPrimary: { label: "Discutăm un proiect", href: "#contact" },
    ctaSecondary: { label: "Vezi ce oferim", href: "#oferta" },
  },

  offer: {
    kicker: "Ce oferim",
    title: "Trei moduri în care lucrăm.",
    items: [
      {
        number: "01",
        title: "Activări publice",
        body: "Ducem mașina în locuri cu trafic: mall-uri, campusuri de birouri, festivaluri. Setup, operare pe durata evenimentului, demontare.",
      },
      {
        number: "02",
        title: "Activări private",
        body: "Aceeași instalație, la sediul tău sau într-un eveniment închis: lansare internă, zi a companiei, întâlnire cu clienții sau cu partenerii.",
      },
      {
        number: "03",
        title: "Închiriere",
        body: "Închiriere seacă a mașinii, fără echipă de activare, pentru producții TV, filmări publicitare, lansări auto și evenimente corporate.",
      },
    ],
    footnote:
      "Peste toate trei producem material video la fiecare activare, pe care îl primești pentru canalele tale.",
  },

  audiences: {
    kicker: "Pentru cine",
    title: "Doi cumpărători, două motive diferite.",
    columns: [
      {
        title: "Locații",
        subtitle: "Mall-uri, campusuri de birouri, destinații de divertisment",
        points: [
          "O atracție care aduce oameni în incintă și îi ține pe loc.",
          "Element de program pentru un weekend sau pentru o campanie sezonieră.",
          "Setup controlat, în interior sau în exterior, cu suprafață și durată stabilite dinainte.",
        ],
      },
      {
        title: "Branduri",
        subtitle: "Companii care cumpără prezență și atenție",
        points: [
          "Prezență fizică într-un context în care oamenii se opresc din drum.",
          "Suprafață de branding pe toată mașina, nu un logo pe un panou.",
          "Material video din fiecare activare, pentru social și pentru comunicarea internă.",
        ],
      },
    ],
  },

  process: {
    kicker: "Cum funcționează",
    title: "De la brief la livrare.",
    steps: [
      {
        number: "01",
        title: "Brief",
        body: "Stabilim obiectivul, publicul, perioada și locația. Verificăm fezabilitatea spațiului.",
      },
      {
        number: "02",
        title: "Propunere",
        body: "Primești formatul activării, macheta de colantare pe mașină și devizul.",
      },
      {
        number: "03",
        title: "Producție",
        body: "Colantăm mașina cu grafica ta, organizăm transportul și montajul la fața locului.",
      },
      {
        number: "04",
        title: "Activare și livrare",
        body: "Operăm pe durata evenimentului, apoi îți livrăm materialul video.",
      },
    ],
  },

  season: {
    kicker: "Sezonul 2027",
    title: "Formăm acum primul lot de parteneri.",
    body: [
      "FRQ este în pre-lansare. Mașina este în curs de achiziție, iar primele activări sunt planificate pentru sezonul 2027. Nu avem încă activări realizate și nu prezentăm rezultate pe care nu le-am produs.",
      "Căutăm un număr mic de parteneri fondatori care intră înainte de primul sezon. Pentru ei, condițiile se stabilesc acum și rămân valabile pe durata primului an, iar prioritatea la calendar și la suprafața de branding se dă în ordinea semnării.",
    ],
    cta: { label: "Cere condițiile de partener fondator", href: "#contact" },
  },

  contact: {
    kicker: "Contact",
    title: "Hai să vorbim.",
    intro:
      "Scrie-ne ce ai în minte: locație, perioadă, obiectiv. Răspundem cu o propunere concretă sau cu un telefon, dacă e mai simplu.",
    person: "Alex Frîncu",
    role: "Fondator",
    email: "alex.frincu@frqshowcar.com",
    phone: "+40 729 247 366",
    phoneHref: "+40729247366",
    city: "București, România",

    /**
     * Formular fără backend.
     *
     * Lasă gol ("") și butonul devine un link mailto, care funcționează
     * imediat. Ca să primești mesajele într-un inbox de formular:
     *   1. cont gratuit pe https://formspree.io
     *   2. creezi un formular și copiezi endpointul
     *   3. îl pui aici, de forma "https://formspree.io/f/xxxxxxxx"
     */
    formspreeEndpoint: "",

    form: {
      name: "Nume",
      company: "Companie",
      email: "E-mail",
      message: "Mesaj",
      messagePlaceholder: "Locație, perioadă estimată, ce vrei să obții.",
      submit: "Trimite mesajul",
      mailtoSubject: "Cerere FRQ",
      note: "Datele din formular le folosim doar ca să îți răspundem.",
    },
  },

  /**
   * Sloturi pentru fotografii reale.
   *
   * Deocamdată nu avem fotografii proprii, iar pe site nu punem imagini de
   * stock cu mașini de curse. Fiecare slot de mai jos apare vizibil în
   * pagină, cu raportul lui. Când ai poza, pui fișierul în `public/` și
   * completezi `src` aici. Slotul devine automat imagine.
   */
  photoSlots: {
    hero: {
      src: "",
      alt: "Monopostul FRQ, colantat cu grafica partenerului",
      label: "Foto monopost, colantat",
      ratio: "3 / 2",
    },
    activation: {
      src: "",
      alt: "Activare FRQ într-o locație cu trafic",
      label: "Foto activare în locație",
      ratio: "4 / 3",
    },
  },

  footer: {
    legal: "FRQ nu este afiliat cu Formula 1 sau cu echipele din campionat.",
    rights: "Toate drepturile rezervate.",
  },
} as const;
