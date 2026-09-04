# FRQ, site vitrină

Pagină unică pentru frqshowcar.com. Obiectivul v1: să confirme că proiectul e
real și serios pentru cine primește un e-mail de la `@frqshowcar.com`.

## Unde editezi textul

**Un singur fișier: `src/content/ro.ts`.** Tot textul e acolo. Nu trebuie să
umbli în componente.

## Cum rulezi

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # rezultatul static în dist/
```

## De ce Astro și nu HTML + Tailwind într-un singur fișier

Trei motive practice, în ordinea importanței:

1. **Varianta EN.** Brieful cere structura pregătită pentru engleză. Cu Astro,
   asta înseamnă: copiezi `ro.ts` în `en.ts`, traduci valorile, adaugi
   `src/pages/en/index.astro`. Fără duplicat de markup. Într-un singur fișier
   HTML ar fi însemnat două copii ale paginii, care se desincronizează.
2. **Separarea conținut / prezentare.** Cerința de „un singur fișier de
   conținut editabil ușor" se rezolvă curat cu un obiect tipat. Poți schimba
   texte fără să atingi HTML.
3. **Performanță fără efort.** Astro livrează HTML static, cu zero JavaScript
   pe client în cazul acestei pagini. Tailwind e compilat la build, deci intră
   doar clasele folosite. Nu am folosit Tailwind prin CDN, care ar fi încărcat
   un CSS mare și ar fi stricat scorul Lighthouse.

Costul e un pas de build. Merită, pentru că fără el varianta EN devine o
problemă de întreținere.

## Ce mai trebuie completat

### 1. Formularul de contact

Momentan butonul deschide un e-mail (`mailto`), care funcționează imediat.
Ca să primești mesajele într-un inbox de formular:

1. cont gratuit pe [formspree.io](https://formspree.io)
2. creezi un formular, copiezi endpointul
3. îl pui în `src/content/ro.ts`, la `contact.formspreeEndpoint`

Formularul complet apare automat în locul butonului de mailto.

### 2. Fotografiile

Nu am pus imagini de stock cu mașini de curse și nici imagini cu monoposturi
reale de Formula 1, pentru că sunt mărci protejate. În pagină sunt două
sloturi marcate vizibil, cu raportul lor:

| Slot         | Ce intră acolo                    | Raport |
| ------------ | --------------------------------- | ------ |
| `hero`       | monopostul colantat               | 3:2    |
| `activation` | o activare reală, într-o locație  | 4:3    |

Când ai poza: o pui în `public/`, apoi completezi `src` în
`content.photoSlots` din `ro.ts`. Slotul devine automat imagine.

## Deploy

### Cloudflare Pages

- Build command: `npm run build`
- Output directory: `dist`
- Node version: 20 sau mai nou

### Vercel

Detectează Astro automat. Output `dist`, fără configurare suplimentară.

## Reguli de conținut

Proiectul e în pre-lansare, iar textul reflectă asta onest. De evitat la
actualizări:

- testimoniale, logouri de clienți, statistici sau număr de evenimente, cât
  timp nu există activări realizate
- însemne Formula 1 sau ale echipelor din campionat
- superlative și limbaj de startup

## Analytics

Nu există în v1, deci nu e nevoie de cookie banner. Dacă adaugi mai târziu,
alege o soluție fără cookie-uri (de exemplu Plausible sau Cloudflare Web
Analytics) ca să nu fii obligat să pui banner.
