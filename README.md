# MiA Skadarlija — Web Sajt

Tradicionalan-moderan sajt za restoran **MiA Skadarlija** u Beogradu.

## 🚀 Pokretanje

Sajt je statički — samo otvorite **`index.html`** u browseru.

```
mia-skadarlija/
├── index.html              # glavna stranica
├── css/
│   └── style.css           # svi stilovi
├── js/
│   └── script.js           # animacije, loader, navigacija
└── assets/
    ├── images/
    │   ├── logo.png        # logo restorana
    │   └── teletina.jpg    # specijalitet kuće
    └── videos/
        ├── restaurant-1.mp4
        ├── restaurant-2.mp4
        ├── restaurant-3.mp4
        └── restaurant-4.mp4
```

### Lokalno (preporučeno za testiranje video pozadina):

```bash
# Iz foldera mia-skadarlija/
python3 -m http.server 8000
# Onda otvorite http://localhost:8000
```

### Hosting

Bilo koji statički hosting radi: GitHub Pages, Netlify, Vercel, cPanel, hosting kod
domaćeg providera. Samo prebacite ceo folder.

## 🎨 Dizajn

- **Paleta:** duboka tamna pozadina (#0c0907) + topla zlatna (#c9a961) + krem (#f5ecd9) — usklađeno s logom
- **Tipografija:** Cinzel (display), Cormorant Garamond (serif), Dancing Script (skript), Manrope (body) — sve sa Google Fonts
- **SVG ornamenti** kroz ceo sajt (nema kupljenih ikonica)
- **Loading animacija** sa logom pri prvom učitavanju
- **Scroll reveal** animacije
- **Video pozadine** u hero sekciji i atmosferi
- Potpuno **responzivan** — desktop, tablet, mobilni

## 📞 Kontakt podaci u sajtu

- Adresa: Braće Poljaković 21, Beograd
- Pon–Pet: 09:00 — 00:00
- Subota: 09:00 — 01:00
- Nedelja: ne radimo
- Ana: 060 473 8681
- Maja: 069 500 6051

## ✏️ Šta menjati lako

- **Tekstove jela** → `index.html`, sekcija `<section class="specialties">`
- **Boje** → `css/style.css`, vrh fajla, blok `:root { --gold: ...; }`
- **Kontakt** → `index.html`, sekcije `.visit__details` i `.footer`
- **Slike/video** → zameniti fajlove u `assets/` istim imenom

---

Napravljeno s pažnjom — mesto gde svaki zalogaj ima dušu. ✦
