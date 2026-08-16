# MASTER BUILD PROMPT
### Paste this whole document into LM Arena (Code Mode) / Antigravity as your build brief.

---

## PART 0 — BRAND IDENTITY (created for you — feel free to tweak before you lock it in)

Since you hadn't picked a name yet, here's a full identity built around your positioning: **"a premium boutique AI studio that builds websites and ad creatives for SMBs at an affordable price."** I researched how current AI/creative agencies position themselves in 2026 (Clay, Baunfire, Webstacks, Disruptive Advertising, etc.) — the winners all lead with a strong point of view, a tight visual identity, and outcome-driven case studies rather than generic "we do everything" messaging. This identity is built to compete on that level while still feeling approachable to a salon owner or a contractor, not just VC-funded startups.

### Brand Name: **Amplifai**
*(Amplify + AI — signals "we make your business louder, faster, smarter." Short, easy to pronounce in any market, easy to say out loud on a sales call, and reads as a proper studio name rather than a freelancer handle.)*

> Before locking it in, quickly check domain/social handle availability (amplifai.com/.ai/.co) and that it isn't trademarked in your region — I can't verify live availability for you.

**Tagline options** (pick one, or A/B test both on the hero):
- "Boutique AI craft. Enterprise-grade results. SMB-friendly price."
- "We build the websites and ads your business deserves — powered by AI, priced for SMBs."

### Brand Story (use as the About page narrative spine)
Amplifai was born from a simple frustration: small businesses — salons, med spas, contractors, furniture showrooms, local e-commerce brands — were stuck choosing between two bad options. Cheap freelancers who deliver generic, slow, forgettable work, or traditional agencies that charge enterprise prices for a website and a few ad creatives. Meanwhile, the AI tools that let studios build faster and better than ever were only being used by people charging *more*, not less. Amplifai exists to close that gap: senior-level design taste and strategy, executed at AI speed, priced so a local business — not just a funded startup — can actually afford to look world-class online.

### Visual Identity

**Color System** (deliberately avoids the generic "blue/purple gradient AI agency" cliché):
| Role | Color | Hex | Notes |
|---|---|---|---|
| Base / Background | Warm Ivory | `#FAF7F1` | Not stark white — feels boutique, premium, warm |
| Ink / Text & Dark Sections | Deep Ink Navy | `#12111F` | Near-black with a navy undertone, used for dark-mode hero/footer |
| Primary Brand | Signal Indigo | `#3B2FD4` | Confident, techy, premium — used for headlines, brand marks |
| Conversion Accent (CTAs) | Ember Coral | `#FF5A3C` | The ONE color used only for buttons/CTAs/highlights — high contrast, unmistakable, never used decoratively so it always signals "click here" |
| Supporting Accent | Electric Lime | `#C6FF3D` | Used sparingly for badges/tags ("New," "Results," metrics) |
| Neutral Grays | `#6B6875` / `#E7E3DC` | Borders, secondary text, dividers |

Dark mode is not optional — build the homepage hero and footer in Deep Ink Navy by default; it's what makes AI-agency sites feel premium rather than templated, and it makes the Ember Coral CTA pop.

**Typography:**
- **Display/Headline font:** A distinctive geometric sans with personality — use `Clash Display`, `General Sans`, or `Satoshi` (all free, self-hostable, available via Fontshare). Avoid Inter/Poppins for headlines — too generic for a "boutique" claim.
- **Body font:** `Inter` or `Satoshi` at 16–18px base, generous line-height (1.6+) for readability.
- Big, confident type scale on the homepage hero (clamp 48px–96px), tight tracking on headlines, loose tracking on eyebrow/label text (uppercase, small, letter-spaced).

**Logo direction:**
An abstract mark — not a literal robot/circuit-board cliché. Combine a **soundwave/amplitude spike** with a **forward-pointing arrow or an "A" negative-space monogram**, built from 3–5 simple geometric bars of increasing height (like an equalizer) that also reads as an upward growth chart. Must work as:
- A standalone icon/favicon at 16px (simplify to 3 bars max at that size)
- Monochrome (pure Ink Navy or pure white) for use on photos/dark sections
- A wordmark lockup: icon + "Amplifai" in the display font, tight kerning

Ask the AI builder to generate this as a clean SVG (geometric bars + optional arrow) rather than an AI-generated bitmap logo — SVG scales perfectly and looks more professional.

**Visual motifs to use throughout the site:**
- Subtle animated gradient mesh or particle/grid background in the hero (signals "AI-powered" without being cliché)
- Before/after or "problem → solution" visual framing on every case study
- Real metrics displayed as bold oversized numbers with small labels (e.g., "+38%" huge, "conversion rate" small) — numbers convert better than adjectives
- Micro-interactions on hover (cards lift slightly, video thumbnails auto-preview on hover, cursor-follow effects on the hero) — tasteful, not excessive

---

## PART 1 — POSITIONING BRIEF (give this to the AI builder as context, not literal copy)

- **Who we serve:** International local SMBs across every vertical — salons, med spas, contractors, furniture/retail showrooms, e-commerce brands, and similar service/product businesses that need a credible online presence but can't afford (or don't need) a traditional agency retainer.
- **What we sell:** (1) AI-accelerated, professionally designed & coded websites ("vibe-coded" but delivered as polished, fast, production-grade sites), and (2) AI-made ad creative — video ads, UGC-style ads, educational ads, carousels — for Meta, TikTok, Google, etc.
- **Why we win:** Boutique-studio design taste + AI-accelerated production speed = enterprise-quality output at SMB-friendly pricing and turnaround.
- **Pricing model on this site:** Custom quote only. No public pricing tables — every CTA leads to a qualifying contact form, not a checkout. (You already have fixed Fiverr packages — do NOT reuse that pricing model here.)
- **Tone of voice:** Confident, plain-spoken, outcome-focused. Avoid jargon-heavy "AI hype" language. Speak the way you'd speak to a salon owner, not a VC — clear benefits, real numbers, no fluff. Every section should answer "so what does this mean for my business" in one line.

---

## PART 2 — SITE ARCHITECTURE

```
/                      → Home
/work                  → Portfolio index (filterable: Websites | Ad Creatives | All)
/work/[slug]           → Individual case study (website or ad campaign)
/services              → What we do (Websites, Ad Creative, Full AI Bundle) — no pricing, all CTA
/about                 → Brand story, process, founder
/testimonials          → (can also be a homepage section + its own page for SEO)
/contact               → Qualifying intake form
/admin                 → Private, unindexed, auth-gated dashboard (see Part 5)
/privacy, /terms       → Footer legal pages (needed for ad platform compliance & trust)
```

Every public page must be crawlable, server-rendered (not client-side-only rendered), and fast — this matters as much for SEO as it does for AEO/GEO (see Part 7).

---

## PART 3 — PAGE-BY-PAGE UX SPEC

### 3.1 Home Page
Build this as a **conversion funnel**, not a brochure — every section should move the visitor one step closer to the contact form.

1. **Hero (dark navy, full viewport height)**
   - Eyebrow label: "AI-Powered Website & Ad Studio for SMBs"
   - Headline (huge, display font): outcome-led, not feature-led — e.g. "Websites and ad creatives that make your business look like it belongs on the internet's front page."
   - Subheadline: one sentence on the affordable-boutique promise
   - Primary CTA (Ember Coral button): "Get a Free Quote" → scrolls to / links to contact
   - Secondary CTA (ghost button): "See Our Work" → /work
   - Trust row directly under the fold: small logos/industry icons (Salon, Med Spa, Contractor, Furniture, E-commerce) OR a rotating strip of real result metrics from your case studies ("+38% bookings," "2.1M ad views," etc.)
   - Subtle animated background (gradient mesh/particles), performance-optimized (CSS/SVG, not a heavy video loop)

2. **Social proof strip** — logos or anonymized industry badges + a 1–2 line aggregate stat ("Trusted by SMBs across 3 industries and counting")

3. **Services overview** (3 cards) — Websites / Ad Creatives / Full AI Solution Bundle — each card: icon, 2-line benefit description, "Learn more" link to /services. No prices.

4. **Featured Work** — 4–6 best case studies as rich cards (thumbnail/video preview, industry + country tag, one-line result, "View Case Study" link). This is the most important section on the page — treat it like a highlight reel.

5. **Process/How it works** — 3–4 step horizontal timeline (Discover → Design & Build with AI → Launch → Results), builds trust that there's a real process behind "vibe coding," not randomness.

6. **Testimonials carousel** — real client quotes (pull from CMS), star rating if available, industry tag.

7. **Why Amplifai / differentiators** — 3–4 short value props with icons (Speed, Affordability, Senior design taste, Data-backed creative).

8. **Final CTA band** (Ember Coral or Ink Navy full-width band) — restated headline + contact form CTA. This is the last thing before the footer — make it impossible to miss.

9. **Footer** — nav links, service links, social/contact links, legal pages, small "Built with AI, crafted by humans" line reinforcing brand story.

### 3.2 /work — Portfolio Index
- Filter/tab bar: **All / Websites / Ad Creatives** (client-side filter, instant, no page reload)
- Optional secondary filter by industry (Salon, Med Spa, Contractor, Retail, E-commerce, Other) — pulled dynamically from whatever tags exist in the CMS, so it grows automatically as you add work
- Grid of cards:
  - **Website project card:** screenshot/mockup (device frame), project title (or "Industry — Country" if client name is hidden), one-line result, tags
  - **Ad creative card:** video thumbnail in 9:16 aspect ratio with a play icon overlay, hover = auto-play muted preview, industry + platform tag (Meta/TikTok/etc.), format tag (Educational/UGC/Carousel)
- Empty/low-inventory states should still look intentional (since you're starting with only 4–5 sites + 3–4 ads) — use larger cards, more whitespace, and a "More work added regularly" note rather than a sparse grid that looks unfinished.

### 3.3 /work/[slug] — Case Study Template
This is the page that actually closes leads — treat it like a mini sales page, not just a gallery.

**For website projects:**
- Hero: large screenshot/mockup + title = "[Industry] website for a [Country]-based [Industry] business" (or real client name if the admin panel has made it public)
- Quick-facts bar: Industry · Country · Services Used (e.g., "Website Design & Build, Copywriting") · Live link button (if permitted)
- **The Challenge** — 2–4 sentences on the client's problem before Amplifai
- **The Approach** — what was built/changed, tools/AI used, key design or technical decisions
- **The Result** — bold metrics if available (bookings up X%, load time under Xs, etc.); if no hard metrics yet, use qualitative outcomes ("Client reported a noticeably higher volume of consultation requests within the first month")
- Full-page screenshots/scroll-through mockup gallery
- "Interested in something similar?" CTA band at the bottom → /contact pre-filled with this service type if feasible

**For ad creative projects:**
- Hero: the video itself, native player, 9:16 embedded nicely (don't stretch to full width awkwardly — center it in a phone-frame-style container on desktop)
- Quick-facts bar: Industry · Country · Platform (Meta/TikTok/etc.) · Format (Educational / UGC / Carousel) · Aspect Ratio
- **The Brief** — what the client needed
- **The Creative Approach** — concept, script/hook strategy, AI tools used to produce it
- **The Result** — views, CTR, engagement, or qualitative feedback if metrics aren't available yet
- If you have 2–3 ads for the same client, group them as a "Campaign" with a small gallery of all variants on one page rather than 3 separate thin pages (better for SEO — thin/duplicate-feeling pages hurt more than they help)
- CTA band at bottom, same as above

### 3.4 /services
Three sections (Websites / Ad Creatives / Full Bundle), each with: what's included (general terms, not itemized pricing), who it's best for (by business type), and a "Get a Custom Quote" CTA. Add an FAQ block here (great for AEO — see Part 7) answering things like "How much does a website cost?" with an honest range-free answer that funnels to the contact form, "How long does it take?", "Do you work with businesses outside [your country]?", "Can I see examples in my industry?"

### 3.5 /about
Brand story (use Part 0's story as the base, personalize with your real background), your process, a short founder section (photo + bio — even solo-founder agencies benefit hugely from a real human face on this page, it builds trust fast for SMB buyers), and a CTA.

### 3.6 /contact — Qualifying Intake Form
Fields:
- Name (required)
- Business name (required)
- Email (required)
- Phone/WhatsApp (optional but encouraged — many SMB owners prefer it)
- Country/location (required — helps you gauge time zones and ad platform relevance)
- Industry (dropdown: Salon & Beauty, Medical/Wellness, Contractor & Home Services, Furniture & Retail, E-commerce, Restaurant/Hospitality, Other)
- Service interested in (checkbox/multi-select: Website, Ad Creative, Both/Full Bundle, Not sure yet)
- Budget range (dropdown, soft ranges e.g. "Under $500," "$500–$1,500," "$1,500–$5,000," "$5,000+," "Not sure yet") — filters serious leads without needing rigid pricing
- Project details / message (textarea, required)
- Consent checkbox for contact (good practice, also needed for ad platform compliance later)
- Submit button: "Request My Free Quote" (Ember Coral)

Below the form: reassurance microcopy ("We reply within 24 hours" / "No spam, no obligation — just a real conversation about your project") and a short trust element (a testimonial quote or your process timeline repeated briefly).

**Email delivery requirement:** On submit, the form must send the full submission directly to your inbox in real time, formatted readably (not raw JSON) — see Part 6 for the exact implementation approach given you're on a free Vercel subdomain with no custom domain yet.

---

## PART 4 — PORTFOLIO DATA MODEL

Give the AI builder this schema directly — it's the backbone of both the public portfolio and the admin panel.

```
PortfolioItem {
  id
  type: "website" | "ad_creative"
  title
  clientNameVisible: boolean       // toggle — if false, display "Industry — Country" instead
  clientName: string (optional, only shown if clientNameVisible = true)
  industry: enum [Salon & Beauty, Medical/Wellness, Contractor & Home Services,
                  Furniture & Retail, E-commerce, Restaurant/Hospitality, Other]
  country
  serviceType: string[] (e.g. ["Website Design", "Copywriting"] or ["Meta Ads", "UGC Video"])
  platform: string (for ads: Meta, TikTok, Google, YouTube — optional for websites)
  format: string (for ads: Educational, UGC, Carousel, Static — optional for websites)
  aspectRatio: string (for ads, e.g. "9:16")
  challenge: rich text
  approach: rich text
  result: rich text
  metrics: [{ label: string, value: string }]   // e.g. { label: "Bookings increase", value: "+38%" }
  liveUrl: string (optional)
  media: {
     coverImage / coverVideoThumbnail: file
     gallery: file[] (images for websites)
     videoFile or videoEmbedUrl: string (for ads)
  }
  featured: boolean          // controls homepage "Featured Work" section
  published: boolean          // draft vs live — lets you prep entries before they go public
  order: number               // manual sort order
  createdAt / updatedAt
}

Testimonial {
  id, clientName (or "Anonymous — [Industry]"), industry, quote, rating (optional), relatedPortfolioItem (optional link), published: boolean
}

SiteCopy {
  key-value editable fields for hero headline, subheadline, about text, FAQ entries, etc. —
  so you can tweak copy without touching code
}
```

---

## PART 5 — ADMIN PANEL SPEC

- **Access:** A single hidden, unindexed route (e.g. `/studio` or `/admin`, not linked anywhere in the public nav or sitemap; add `noindex` + block it in robots.txt), protected by proper authentication (email+password or magic link) — not just a hidden URL, since "hidden but unauthenticated" is not real security.
- **Who uses it:** Just you — single-admin, no roles/permissions system needed.
- **What you should be able to manage:**
  - Portfolio items — full CRUD (create/edit/delete/reorder/publish-toggle) using the schema above, including drag-and-drop or simple upload for images/videos
  - Testimonials — add/edit/delete/publish-toggle
  - Site copy — key homepage/about/FAQ text fields, editable without redeploying code
  - Contact submissions — a simple log/inbox view inside the admin (in addition to email delivery) so you have a backup record even if an email gets missed
- **Interaction style:** You asked for something between "techy dashboard" and "Notion-style simple form" — the cleanest way to hit both is to use a headless CMS with a built-in studio UI (see tech recommendation in Part 6): you get real structured forms (Notion-like ease) with a proper dashboard shell (sidebar navigation, content list views, publish states) without building a custom admin UI from scratch.
- New portfolio items should be **draft by default** until you toggle "Published" — so you can prep content without it going live prematurely.

---

## PART 6 — TECHNICAL IMPLEMENTATION GUIDANCE

You said to leave stack choice to the AI builder, but since bot/LLM-readability (AEO/GEO) is a hard requirement, give it these constraints — they rule out anything that renders content only client-side:

- **Framework:** Next.js (App Router), TypeScript, deployed on Vercel (matches your free-subdomain hosting plan). Next.js server-renders pages by default, which is essential for both traditional SEO crawlers and AI/LLM crawlers to actually read your content.
- **Styling:** Tailwind CSS + a component layer like shadcn/ui for consistent, accessible, fast-to-build UI primitives (buttons, dialogs, tabs, forms).
- **Content/Admin layer:** Use a headless CMS with a hosted studio UI — e.g. **Sanity** (generous free tier, structured content, image/video asset handling, and a customizable studio that can be embedded at your private `/studio` route with your own auth). This gives you the "techy dashboard + simple form" hybrid you asked for without custom-building an admin UI. Portfolio items, testimonials, and site copy all live here; your Next.js frontend fetches from it at build/request time.
- **Contact form delivery (no custom domain yet — important constraint):** Standard transactional email services (like Resend) require a verified domain to reliably deliver mail, which you don't have yet on a free Vercel subdomain. Use a form-backend service instead that forwards submissions straight to your inbox without needing your own domain — **Web3Forms** or **Formspree** (both have generous free tiers, simple API-key setup, and spam filtering). Also log every submission into the CMS/database as a backup (per Part 5) so nothing is lost even if an email is missed. When you eventually buy a custom domain, migrate to Resend + your domain for more reliable, better-branded delivery, and add the CRM/spreadsheet sync you mentioned as a later upgrade.
- **Video handling for ads:** Store/serve 9:16 vertical video efficiently — use a video-optimized host/CDN (Sanity's asset CDN, Cloudinary free tier, or Mux) rather than raw file uploads to Vercel, so playback is fast and doesn't bloat page load.
- **Performance targets:** Core Web Vitals in the "Good" range (LCP < 2.5s, CLS < 0.1, INP < 200ms), image optimization via `next/image`, lazy-loaded video previews, minimal JS on first paint.
- **Responsiveness:** Fully responsive from 320px mobile up through large desktop — assume a large share of SMB owners will first view this on a phone. Mobile nav, mobile-optimized forms (large tap targets), and the vertical ad videos should feel *native* on mobile, not like an afterthought.
- **Accessibility:** Semantic HTML throughout (proper heading hierarchy, alt text on all images, labeled form fields, sufficient color contrast — check Ember Coral on Ivory and White-on-Navy combinations meet WCAG AA), keyboard-navigable.

---

## PART 7 — SEO + AEO + GEO REQUIREMENTS

Based on current (2026) best practice: traditional SEO fundamentals still do most of the work, and the "AI visibility" layer is mostly about structure and machine-readability rather than a separate content strategy. Implement all of the following:

**Traditional SEO (foundation — do not skip):**
- Clean, descriptive URLs (`/work/salon-website-redesign-uae`, not `/work/1234`)
- Unique, keyword-considered `<title>` and meta description per page, editable per-page from the CMS (don't hardcode)
- Proper heading hierarchy — one H1 per page, logical H2/H3 nesting, one topic per section
- `sitemap.xml` and `robots.txt` generated automatically and kept current as portfolio items are added (block `/studio` or `/admin`)
- Open Graph + Twitter Card meta tags on every page (especially case studies — they'll get shared)
- Fast load times and mobile usability (see Part 6 performance targets) — Google explicitly weighs Core Web Vitals and clean indexation over any AI-specific markup
- Internal linking: every case study links back to /services and /work; homepage links to top case studies

**AEO/AI Answer readiness:**
- FAQ sections (on /services and /contact at minimum) written so each question is directly answered in the first sentence of its answer, then expanded — this format is what AI answer engines and Google AI Overviews prefer to extract and cite
- Add `FAQPage` JSON-LD schema markup wherever FAQs appear
- Add `Organization` and `LocalBusiness`/`ProfessionalService` JSON-LD schema on the homepage (name, logo, description, service area, contact) — and `Review`/`AggregateRating` schema on the testimonials section if/when you have enough reviews
- Add `CreativeWork`/`Article`-style structured data on case study pages summarizing the challenge/approach/result

**GEO (Generative Engine Optimization) essentials:**
- Ensure content is server-rendered and never hidden behind client-side-only rendering, logins, or interaction (AI crawlers largely can't execute complex JS or click through gated content)
- Do not block AI crawlers in `robots.txt` (many sites accidentally do this by default) — explicitly allow common AI user-agents unless you have a specific reason not to
- Create an `llms.txt` file at the site root summarizing what Amplifai does, key pages, and a short structured description of services and portfolio — an emerging convention specifically meant to help AI systems understand site structure quickly
- Write content in scannable, structured formats — short paragraphs, bullet points, bolded key terms, clear section headers — since AI systems extract and cite well-structured fragments more readily than dense prose
- If/when you get a Google Business Profile for the studio, keep it complete and current — Google has specifically named Business Profile data as a key input to its AI-generated answers for local/service businesses, so this matters more than any on-site trick once you're targeting local SMB clients in your own operating region

---

## PART 8 — CONVERSION MECHANICS CHECKLIST

- Every page has a clear next action — never let a visitor reach the bottom of a page with no CTA in sight
- Sticky/persistent "Get a Free Quote" button in the header on scroll (subtle, not obstructive)
- Real numbers over adjectives everywhere possible ("+38% bookings" beats "great results")
- Case studies structured as mini sales pages (Part 3.3), not just galleries
- Testimonials placed near decision points (bottom of homepage, bottom of services page, inside the contact page)
- Qualifying intake form (Part 3.6) to pre-filter serious leads and let you tailor your reply
- Trust signals throughout: founder photo/bio, process transparency, "reply within 24 hours" promise, privacy/terms pages
- No pricing tables anywhere on the public site — every price conversation happens after the form, by design

---

## PART 9 — FINAL INSTRUCTION TO THE AI BUILDER

> Act as a senior full-stack developer and UI/UX designer. Build a production-grade, fully responsive marketing + portfolio website for **Amplifai**, a boutique AI studio that builds websites and ad creatives for international SMBs, using the brand identity, sitemap, page specs, data model, admin panel spec, tech stack, and SEO/AEO/GEO requirements defined above. Prioritize: (1) a highly polished, distinctive visual design that avoids generic AI-agency templates, (2) genuine conversion-focused UX on every page, (3) full server-side rendering and semantic HTML for search/AI crawlability, and (4) a working, authenticated admin/CMS flow so portfolio items, testimonials, and site copy can be added or edited after launch without touching code. Start by scaffolding the project structure, design tokens (colors/type from Part 0), and the homepage, then build out the remaining pages in the order listed in Part 2.

---

*End of build prompt. Copy everything above into your vibe-coding tool as a single brief, or paste it section by section if the tool has context limits.*
