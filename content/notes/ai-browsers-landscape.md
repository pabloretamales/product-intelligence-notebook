---
title: "Browsers innovadores y seguros"
summary: "Panorama al 30-sep-2026 de browsers con innovación y seguridad, y sync real entre Mac, iOS y Windows. Vivaldi queda primero; Brave, Zen, Orion y Comet se comparan con sus límites."
tags:
  - browsers
  - tools
  - comparison
created: "2026-09-30"
updated: "2026-09-30"
agent: "Grok Bot"
sources:
  - title: "Carta a miembros de Arc (26 may 2025)"
    url: "https://browsercompany.substack.com/p/letter-to-arc-members-2025"
  - title: "The Verge — Arc deja de desarrollar features"
    url: "https://www.theverge.com/news/674603/arc-browser-development-stopped-dia-browser-company"
  - title: "The Verge — Atlassian adquiere The Browser Company"
    url: "https://www.theverge.com/web/770947/browser-company-arc-dia-acquired-atlassian"
  - title: "SEC filing Atlassian (cierre 20 oct 2025)"
    url: "https://www.sec.gov/Archives/edgar/data/1650372/000165037226000027/team-20260331.htm"
  - title: "Brave Sync"
    url: "https://support.brave.app/hc/en-us/articles/360021218111-How-do-I-set-up-Sync"
  - title: "Vivaldi"
    url: "https://vivaldi.com/"
  - title: "Zen Browser"
    url: "https://zen-browser.app/"
  - title: "Orion"
    url: "https://orionbrowser.com/"
  - title: "Comet (Perplexity)"
    url: "https://www.perplexity.ai/comet/"
  - title: "Trail of Bits — threat modeling Comet"
    url: "https://blog.trailofbits.com/2026/02/20/using-threat-modeling-and-prompt-injection-to-audit-comet/"
  - title: "TechRepublic — best AI browsers 2026"
    url: "https://www.techrepublic.com/article/news-best-ai-browsers-2026/"
---

Nota de archivo al 30 de septiembre de 2026 (America/Santiago). Pregunta: qué browsers combinan innovación y seguridad, con sincronización real entre Mac, iOS/iPadOS y Windows. Punto de partida: Arc, percibido como solo mantenimiento, y Brave, seguro pero poco innovador.

**Fuentes principales consultadas:** The Verge, carta oficial Arc (Substack), SEC/Atlassian filings, sitios oficiales (Dia, Zen, Orion, Helium, SigmaOS, Floorp, Brave, Vivaldi, Perplexity/Comet), Reddit (r/zen_browser, r/ArcBrowser, r/brave_browser, r/browsers), Hacker News, TechTimes, TechRepublic, US Mobile, PiunikaWeb, WindowsForum/Thurrott, Trail of Bits / Zenity (seguridad Comet). Trackers Product Hunt / RankRadar: sin cobertura útil de browsers en esta consulta. X/Twitter: mirrors nitter/xcancel fallaron o suspendidos; citas de X vía prensa secundaria (PiunikaWeb, 29–30 jul 2026).

---

## Resumen ejecutivo — Top recomendaciones

Criterio duro: **macOS + iOS/iPadOS + Windows nativos (o muy buenos) + sync real** de bookmarks/passwords/(tabs)/historial, priorizando innovación de UI/AI **sin** sacrificar seguridad/privacidad razonable.

| Prioridad | Recomendación | Por qué |
|-----------|---------------|--------------------|
| **1** | **Vivaldi** | UI más cercana a Arc (tabs verticales, workspaces, split) **con** apps Mac/Windows/iOS/Android y sync E2E propio. Innovación activa sin depender de IA agentica riesgosa. |
| **2** | **Brave** (mantener como base “segura”) | Ya lo conoce: shields, fingerprinting, Leo AI opcional, sync cross-platform. Menos “wow” de UI; mejor *baseline* de seguridad que los AI-browsers. |
| **3** | **Zen (desktop) + Firefox (iOS)** | Sucesor espiritual de Arc (Gecko, workspaces, vertical tabs, split). Sync Spaces vía cuenta Mozilla (desktop↔desktop); en móvil usa Firefox Sync (no hay Zen iOS). |
| **4** | **Orion (Mac + iOS ahora)** | WebKit nativo, cero telemetría, extensiones Chrome+Firefox, sync Apple-first. **Windows aún no público** (target late 2026). Ideal si el día a día es Apple y Windows puede esperar o ir con Vivaldi/Brave. |
| **5 (condicional)** | **Comet (Perplexity)** | Único AI-browser “grande” con **Mac + Windows + iOS + Android** y sync. Innovación alta; **historial de prompt injection y litigio Amazon** → no usarlo como browser único para banca/email/passwords. |

**No recomendar como daily driver único hoy:** Dia (solo Mac Apple Silicon; Windows en waitlist “este otoño”; sin iOS), Helium (desktop, sin sync ni móvil), SigmaOS (solo Mac), LibreWolf (sin móvil oficial), Arc (mantenimiento), Atlas (muerto ago-2026), Sidekick (apagado).

---

## Estado de Arc y Brave (pregunta central)

### Arc — The Browser Company / Atlassian

| Aspecto | Estado verificado (sep 2026) |
|---------|------------------------------|
| **Desarrollo de features** | Detenido desde **mayo 2025**. Carta de Josh Miller: mantenimiento = upgrades Chromium + parches de seguridad/bugs, sin features nuevas. |
| **Adquisición** | **Atlassian** compró The Browser Company. The Verge: anuncio ~**4-sep-2025**, ~**USD 610 M** en cash; entidad independiente anunciada. Filing SEC (Atlassian, período hasta 31-mar-2026): cierre **20-oct-2025**, precio ~**USD 488,3 M** (cash + settlement shares). Discrepancia periodística vs filing: usar filing para contabilidad; Verge para narrativa. |
| **Producto sucesor** | **Dia** (AI-first). Homepage de Arc apunta a Dia. |
| **Plataformas Arc** | macOS y Windows siguen recibiendo builds (ej. notas 2024–2026; builds ~ago 2026 con Chromium 152). |
| **Open source / venta** | No: depende de **ADK** (también base de Dia). |
| **¿Solo mantenimiento?** | **Sí.** Seguir usándolo es razonable a corto plazo si los parches Chromium continúan; no es un hogar a largo plazo ni un producto en evolución. |

Fuentes:
- https://browsercompany.substack.com/p/letter-to-arc-members-2025 (26-may-2025)
- https://www.theverge.com/news/674603/arc-browser-development-stopped-dia-browser-company (27-may-2025)
- https://www.theverge.com/web/770947/browser-company-arc-dia-acquired-atlassian (4-sep-2025)
- https://www.sec.gov/Archives/edgar/data/1650372/000165037226000027/team-20260331.htm
- https://resources.arc.net/hc/en-us/articles/20498293324823-Arc-for-macOS-2024-2026-Release-Notes
- https://www.free-codecs.com/news/arc-isn-t-finished-the-people-who-built-it-started-again.htm (~jul 2026)

### Brave

| Aspecto | Estado |
|---------|--------|
| **Estado** | **Activo**, releases frecuentes (Chromium). |
| **Motor** | Chromium (sin Google services típicos; Shields propios). |
| **Plataformas** | macOS, Windows, Linux, iOS, Android. |
| **Sync** | Brave Sync (cadena con código/QR, sin cuenta Google). Bookmarks, passwords, history, open tabs, extensions, etc. en desktop/Android; iOS mejoró respecto a docs viejos (2023 decían “solo bookmarks”) — wiki Sync v2 y comunidad 2025–26 hablan de bookmarks/passwords/history/tabs, con fricciones reportadas. |
| **Innovación** | Vertical tabs (desktop), Leo AI (chat; Premium ~USD 14,99/mes), ad/tracker blocking por defecto, fingerprinting defenses. Comunidad (r/brave_browser, TechRepublic 2026) lo ve **fuerte en privacidad, más “convencional” en UI** vs Arc/Zen. |
| **Lectura** | Encaja como ancla segura y poco innovadora en UI. Buen complemento; no es el que más se siente “Arc 2024”. |

Fuentes:
- https://support.brave.app/hc/en-us/articles/360021218111-How-do-I-set-up-Sync
- https://github.com/brave/brave-browser/wiki/Brave-Sync-v2
- https://brave.com/leo/
- https://www.techrepublic.com/article/news-best-ai-browsers-2026/

---

## Tabla comparativa (candidatos relevantes)

Leyenda plataformas: ✅ nativo/GA · 🟡 beta/waitlist/limitado · ❌ no · ≈ workaround

| Browser | Sitio | Motor | Mac | iOS | Win | Sync (qué) | Seguridad/privacidad | Innovación reciente | Estado |
|---------|-------|-------|-----|-----|-----|------------|----------------------|---------------------|--------|
| **Vivaldi** | vivaldi.com | Chromium | ✅ | ✅ | ✅ | E2E: bookmarks, passwords, history, tabs, notes, extensions… | Chromium + sync cifrado propio (Islandia); menos “hard privacy” que Brave/Orion | Tabs verticales, workspaces, split, mail/calendar opc. | **Activo** |
| **Brave** | brave.com | Chromium | ✅ | ✅ | ✅ | Sync chain: BM/PW/hist/tabs/ext… | Shields, fingerprinting, HTTPS; Leo opcional | Leo, vertical tabs, rewards (opcional) | **Activo** |
| **Zen** | zen-browser.app | Gecko (Firefox) | ✅ | ❌ | ✅ | Mozilla Sync + Spaces/folders/tabs (desktop; Twilight→stable) | FOSS, privacy-oriented; telemetría Mozilla reducible | Workspaces, compact, glance, split (Arc-like) | **Activo (beta)** |
| **Orion** | orionbrowser.com | WebKit | ✅ | ✅ | 🟡 late 2026 | Sync Orion: BM, PW, tabs (Apple hoy) | Zero telemetry, ad/tracker block | Containers (2026), ext. Chrome+FF, vertical tabs | **Activo** (Win pending) |
| **Dia** | diabrowser.com / www.diabrowser.com | Chromium | ✅ (Apple Silicon, macOS 14+) | ❌ | 🟡 fall 2026 beta | Sync E2E (tabs/profiles/settings, abr 2026+) | Enfoque arquitectónico AI; SOC 2 Type II reportado | Skills, chat con tabs, Spaces en rollout | **Activo** (Mac) |
| **Comet** | perplexity.ai/comet | Chromium | ✅ | ✅ | ✅ | Cuenta Perplexity + passphrase | **Incidentes** prompt injection; demanda Amazon | Agentic AI + research | **Activo** (riesgo) |
| **Firefox + containers** | mozilla.org | Gecko | ✅ | ✅ | ✅ | Firefox Sync excelente | Containers nativos (aislamiento cuentas); Strong privacy opts | Menos UI “Arc”; containers ahora nativos | **Activo** |
| **Safari** | Apple | WebKit | ✅ | ✅ | ❌ | iCloud Keychain/BM/tabs Continuity | ITP, on-device Apple Intelligence | Profiles, Reader AI local | **Activo** (sin Win) |
| **Chrome** | google.com/chrome | Chromium | ✅ | ✅ | ✅ | Google account (completo) | Modelo ads; Gemini/Auto Browse | Gemini 3, Auto Browse | **Activo** |
| **Edge** | microsoft.com/edge | Chromium | ✅ | ✅ | ✅ | Microsoft account | Copilot; telemetría MS | Copilot / Browse with Copilot | **Activo** |
| **Opera** | opera.com | Chromium | ✅ | ✅ | ✅ | Opera Sync | Historial ownership/privacidad debatido | Aria AI, sidebar | **Activo** |
| **DuckDuckGo** | duckduckgo.com | WebKit (Apple) / Chromium (desktop) | ✅ | ✅ | ✅ | Sync & Backup E2E sin cuenta (BM/PW; **no tabs** aún) | Tracker blocking fuerte | UI sobria; Duck.ai | **Activo** |
| **Helium** | helium.computer | Chromium (de-Googled) | ✅ | ❌ | ✅ | ❌ “Not yet” | Ads/trackers/fingerprinting off by default; FOSS | Vertical tabs, split, bangs | **Beta desktop** |
| **Floorp** | floorp.app | Gecko | ✅ | 🟡 TestFlight (ago 2026) | ✅ | Mozilla Sync; workspaces iOS “próximo” | FOSS, customizable | Sidebar, notes, workspaces | **Activo** + iOS beta |
| **LibreWolf** | librewolf.net | Gecko | ✅ | ❌ | ✅ | Firefox Sync off by default | Hardened privacy | Poco UI innovadora | **Activo** |
| **SigmaOS** | sigmaos.com | WebKit | ✅ | ❌ | ❌ | Autosync Mac↔Mac | Keychain, ITP-like | Workspaces, Airis AI | **Activo Mac-only** |
| **Arc** | arc.net | Chromium+ADK | ✅ | ≈ Arc Search | ✅ | Arc sync (legacy) | Chromium patches only | Congelado | **Mantenimiento** |
| **Atlas** | (OpenAI) | Chromium | — | — | — | — | — | — | **Descontinuado 9-ago-2026** |
| **Sidekick** | — | — | — | — | — | — | — | — | **Muerto** (~ago 2025; redirect Comet) |

---

## Fichas detalladas de recomendables

### 1. Vivaldi — prioridad #1 para el trio Mac+iOS+Windows

- **Sitio:** https://vivaldi.com/ · Sync help: https://help.vivaldi.com/desktop/tools/sync/ · iOS sync: https://help.vivaldi.com/ios/ios-tools/sync-browser-data-on-ios/
- **Motor:** Chromium  
- **Plataformas:** macOS, Windows, Linux, **iOS**, Android  
- **Sync:** Cuenta Vivaldi + **contraseña de cifrado local** (E2E; datos en Islandia). Sincroniza bookmarks/Speed Dials, passwords, autofill, history, extensions, web apps, reading list, **open tabs**, notes (parcial). Workspaces: sync de *estado* de workspaces entre dispositivos ha sido frágil/discutido en foros (no asumir paridad perfecta tipo Arc Spaces).  
- **Seguridad/privacidad:** Sin el marketing “hard privacy” de Brave/Orion; sync E2E es sólido. Depende de Chromium updates (Vivaldi suele ir un poco detrás de Chrome en versión).  
- **Innovación:** Tabs verticales, tab stacking, workspaces, split view, gestos, paneles, mail/calendar opcionales — el paquete más “productivo/Arc-adjacent” con móvil real.  
- **Estado:** Activo (ej. Vivaldi 7.9 mobile: import Safari, etc., 2026).  
- **Pros vs Arc:** Sigue evolucionando; cross-platform completo; extensiones Chrome.  
- **Contras vs Arc:** Menos “diseño emocional”; workspaces sync imperfecto; UI densa (curva de aprendizaje).  
- **Pros vs Brave:** Mucho más customizable/innovador en layout.  
- **Contras vs Brave:** Privacidad por defecto más débil (hay que endurecer); no es FOSS completo.  
- **Comunidad:** En r/vivaldibrowser y r/ArcBrowser suele aparecer como destino Chromium post-Arc (“My Journey from Arc to Vivaldi”). Foros Vivaldi documentan dolores de sync de workspaces: https://forum.vivaldi.net/topic/111026/workspaces-not-syncing-between-devices

### 2. Brave — prioridad #2 (ancla segura)

- **Sitio:** https://brave.com/  
- **Motor:** Chromium modificado  
- **Plataformas:** Mac, Windows, Linux, iOS, Android  
- **Sync:** Cadena con QR/código; sin login Google. Tipos: bookmarks, passwords, history, open tabs, extensions, themes, apps (según help center / wiki). Usuarios reportan inconsistencias (settings, favoritos NTP, iOS).  
- **Seguridad:** Shields (ads/trackers), fingerprinting randomization, HTTPS Everywhere-like, actualizaciones Chromium agresivas. Leo: chat AI opcional (no agentic profundo como Comet).  
- **Innovación:** Vertical tabs desktop; Leo; Brave Wallet/Rewards (desactivables).  
- **Estado:** Activo.  
- **Vs Arc:** Menos Spaces/Command Bar; más “Chrome privado”.  
- **Lectura:** Encaja como base segura; complementar con Vivaldi o Zen si se quiere más UI.  
- **Comunidad:** r/brave_browser activo; TechRepublic 2026 lo lista como best privacy AI-light.

### 3. Zen Browser (+ Firefox iOS) — prioridad #3 estilo Arc

- **Sitio:** https://zen-browser.app/ · Releases: https://zen-browser.app/release-notes/ · Download: https://zen-browser.app/download/  
- **Motor:** Gecko (fork Firefox)  
- **Plataformas:** **macOS, Windows, Linux**. **No hay app Zen iOS/Android** (Reddit r/zen_browser 2026: comunidad asume “no pronto / nunca”). Workaround: **Firefox iOS/Android** + Firefox Sync para BM/PW/history/tabs básicos.  
- **Sync:** Mozilla account; feature reciente de **sync Spaces/Folders/tabs** entre escritorios (Twilight → rolling a stable; posts Reddit “Device Sync is coming” / “Update on Device Sync”).  
- **Seguridad:** FOSS; hereda modelo Firefox (containers vía Firefox ecosystem). DRM/Widevine a veces problemático en forks.  
- **Innovación:** Workspaces, compact mode, glance, split view — el clon Arc más citado.  
- **Estado:** Beta activa, releases frecuentes.  
- **Pros vs Arc:** Open source, desarrollo vivo, Win+Mac.  
- **Contras vs Arc:** RAM más alta reportada en reviews 2026; sin móvil nativo; Gecko ≠ Chromium (compat extensiones distinta).  
- **Comunidad HN (may 2025):** *“Zen browser is very promising as a hopefully long-lived alternative to Arc with essentially the same design… performs more smoothly than Arc on windows.”* — https://news.ycombinator.com/item?id=44134399  
- **Reddit:** https://www.reddit.com/r/zen_browser/comments/1vwj7nl/when_zen_browser_on_mobile/ · https://www.reddit.com/r/zen_browser/comments/1vwhbc0/update_on_device_sync/

### 4. Orion (Kagi) — prioridad #4 ecosistema Apple (+ Win futuro)

- **Sitio:** https://orionbrowser.com/ · macOS: https://orionbrowser.com/platforms/macos  
- **Motor:** **WebKit** (nativo)  
- **Plataformas:** macOS, **iOS/iPadOS** (claim ~4 M users), Linux beta; **Windows: alpha interna, target late 2026, sin installer público** (Thurrott / WindowsForum ago 2026).  
- **Sync:** Bookmarks, passwords, tabs entre Mac↔iPhone (mejoras release notes 2026; containers multi-account en macOS 2026).  
- **Seguridad:** Zero telemetry; ad/tracker blocking; sin AI on-by-default. Monetización vía Orion+ / Kagi Search (suscripción), no ads.  
- **Innovación:** Único consumer con **extensiones Chrome + Firefox + Safari**; vertical tabs; Focus Mode; containers 2026.  
- **Estado:** Activo (Orion 1.0 macOS nov 2025+).  
- **Pros vs Arc:** Privacidad + batería WebKit + móvil Apple excelente.  
- **Contras:** **Sin Windows usable hoy**, así que no cubre el requisito triple hasta que exista un build de Windows.  
- **Comunidad:** ZDNet/Mac Observer quotes en sitio; HN mixto (compat extensiones, bugs sync históricos). Thurrott: https://www.thurrott.com/cloud/web-browsers/340205/the-orion-web-browser-is-coming-to-windows

### 5. Comet (Perplexity) — prioridad #5 solo si IA agentica vale el riesgo

- **Sitio:** https://www.perplexity.ai/comet/ · Sync: https://www.perplexity.ai/help-center/comet/en/articles/12569908-sync-between-devices  
- **Motor:** Chromium  
- **Plataformas:** **Windows, macOS, iOS (mar 2026), Android (nov 2025)** — mejor cobertura AI-browser.  
- **Sync:** Cuenta Perplexity + cadena con passphrase 4 palabras (E2E claimed); BM, passwords, history, extensions, tabs.  
- **Seguridad (crítico):**  
  - Brave (ago 2025): exfiltración vía prompt injection (Reddit spoiler).  
  - Zenity Labs (mar 2026): familia “PleaseFix” / zero-click.  
  - Trail of Bits: threat modeling Comet (feb 2026).  
  - Amazon v. Perplexity (CFAA); preliminary injunction mar 2026; Ninth Circuit jun 2026.  
  - TechTimes (16-jun-2026): ranking seguridad Atlas/Comet/Dia — Comet “most documented vulnerabilities”.  
- **Innovación:** Agente de investigación + Perplexity search in-browser.  
- **Estado:** Activo, free since oct 2025.  
- **Recomendación de uso:** Perfil **aislado** sin banca/email/1Password; no reemplazo único de Brave.  
- Fuentes: https://www.techtimes.com/articles/318528/20260616/ai-browser-comparison-2026-atlas-vs-comet-vs-dia-ranked-security-use-case.htm · https://blog.trailofbits.com/2026/02/20/using-threat-modeling-and-prompt-injection-to-audit-comet/ · https://www.techrepublic.com/article/news-best-ai-browsers-2026/

### Menciones honoríficas útiles

#### Dia (The Browser Company / Atlassian)
- Mac Apple Silicon only; Windows “this fall” (posts X Josh Miller / @diabrowser **29-jul-2026**, vía PiunikaWeb); **sin iOS**.  
- Sync E2E; postura seguridad AI más cuidadosa que Comet (TechTimes).  
- Candidato futuro cuando Windows esté en GA, aceptando que no hay Dia en iPhone (Brave, Orion o Vivaldi en el móvil).  
- https://www.diabrowser.com/ · https://piunikaweb.com/2026/07/30/dia-windows-slated-officially-launch-fall-2026/

#### Firefox + Multi-Account Containers
- Sync de primera clase Mac/Win/iOS. Containers nativos (Firefox ~153+, blog Mozilla).  
- Innovación UI baja; **seguridad de aislamiento de cuentas** alta. Combinar: Zen desktop + Firefox móvil.

#### Safari
- Mejor batería/Apple Intelligence on-device (US Mobile 2026). **Sin Windows** → no cubre el trio.

#### Helium
- https://helium.computer/ — Chromium privacy FOSS, vertical tabs, split; **sin sync, sin móvil**, beta. Descartado para requisito sync/iOS.

#### Floorp
- https://floorp.app/ — Win/Mac/Linux; iOS TestFlight **28-ago-2026**; sync workspaces desktop↔iOS aún “coming”. Prometedor pero inmaduro en móvil.

#### DuckDuckGo Browser
- Mac/Win/iOS/Android; Sync & Backup E2E sin cuenta (BM/PW; **sin open tabs**). Muy seguro/simple; poca innovación tipo Arc.

---

## Descartados y por qué

| Producto | Motivo de descarte |
|----------|-----------------------------------------------|
| **Arc** | Solo mantenimiento desde may-2025; futuro bajo Atlassian/Dia incierto a largo plazo. OK temporal, no destino. |
| **Atlas (OpenAI)** | Descontinuado **9-ago-2026**; capacidades → ChatGPT app/Codex. |
| **Sidekick** | Sunset ~3-ago-2025; sitio redirige a Comet. |
| **SigmaOS** | Solo macOS; iOS/Windows “coming soon” sin GA. Sync solo Mac↔Mac. |
| **Helium** | Sin sync ni móvil (FAQ oficial). |
| **LibreWolf** | Sin iOS/Android oficial; sync Firefox off by default; UI no innovadora. |
| **Dia (hoy)** | Sin Windows GA ni iOS → no cumple trio. Vigilar otoño 2026. |
| **Orion Windows (hoy)** | No hay build pública; late-2026 target. |
| **Zen solo** | Sin iOS nativo → incompleto sin Firefox móvil. |
| **Chrome / Edge** | Sync excelente e innovación AI, pero modelo de datos/ads o telemetría corporativa choca con una prioridad de seguridad y privacidad (salvo uso laboral). |
| **Opera** | Cross-platform sí; percepción de privacidad/ownership mixta; menos fit “seguro+innovador limpio”. |
| **“Sigma”** | Confusión de nombre con SigmaOS; no hay browser “Sigma” separado relevante en 2026. |

---

## Estrategias prácticas sugeridas (sin inventar features)

### Estrategia A — “Un browser para todos los dispositivos” (recomendada)
1. **Vivaldi** como daily en Mac, Windows e iPhone (sync E2E).  
2. Mantener **Brave** en paralelo para sitios sensibles / comparación Shields, o endurecer Vivaldi (uBlock, HTTPS-only, etc.).  
3. Migrar bookmarks/passwords desde Arc con export/import; passwords preferible en gestor dedicado (1Password/Bitwarden) ya usado en extensiones.

### Estrategia B — “Máximo vibe Arc + sync pragmático”
1. **Zen** en Mac y Windows (Spaces sync Mozilla).  
2. **Firefox** en iOS con la misma cuenta Mozilla.  
3. Aceptar que Spaces “bonitos” no existen en el teléfono.

### Estrategia C — “Apple-first + Windows puente”
1. **Orion** en Mac + iPhone (privacidad WebKit).  
2. **Vivaldi o Brave** en Windows hasta Orion Win.  
3. Sync cross-engine vía gestor de BM/PW externo (Raindrop, Bitwarden) — no sync nativo único.

### Estrategia D — “Probar IA con contención”
1. **Comet** o **Dia** (Mac) solo para research.  
2. Perfil limpio; cero banca/correo.  
3. Brave/Vivaldi como browser “de verdad”.

---

## Opinión de comunidad (citas / URLs)

- **The Verge (27-may-2025):** Arc deja de desarrollar features; mantenimiento Chromium/seguridad. https://www.theverge.com/news/674603/arc-browser-development-stopped-dia-browser-company  
- **The Verge (4-sep-2025):** Atlassian adquiere Browser Company (~610 M); foco Dia; Arc sigue en mantenimiento. https://www.theverge.com/web/770947/browser-company-arc-dia-acquired-atlassian  
- **HN (30-may-2025):** Zen como alternativa long-lived a Arc; Dia visto como AI-chat no “real work”. https://news.ycombinator.com/item?id=44134399  
- **Reddit r/zen_browser:** Sin móvil nativo; sync Spaces en Twilight; usuarios usan Firefox móvil. https://www.reddit.com/r/zen_browser/comments/1vwj7nl/when_zen_browser_on_mobile/  
- **Reddit r/ArcBrowser:** Megathreads de migración; Zen / Vivaldi / Orion / Brave recurrentes (threads 2025–2026: “I need an Arc alternative”, “Moving Out Megathread”).  
- **TechTimes (16-jun-2026):** Dia mejor arquitectura seguridad AI; Comet más alcance y más vulnerabilidades documentadas; Atlas mac-only (luego muerto).  
- **US Mobile (2026):** Arc mantenimiento; Dia polished AI; Orion dark horse privacy+extensiones; Safari batería. https://www.usmobile.com/blog/best-browser-mac-2026/  
- **X (vía PiunikaWeb, 29-jul-2026):** Josh Miller / @diabrowser — Dia Windows beta y “this fall”. Mirrors X directos no recuperables en esta sesión.

---

## Limitaciones de esta búsqueda

1. **X/Twitter:** `site:x.com` sin resultados útiles; nitter sin contenido; **xcancel suspendido**. Citas X solo vía prensa (PiunikaWeb).  
2. **Reddit:** Varios threads exigen JS/bloqueo al fetch; se usaron snippets de WebSearch + HN como proxy.  
3. **Product Hunt AI Tracker** (product-hunt-ai-tracker.vercel.app): 0 productos en DB al consultar — no aportó rankings de browsers.  
4. **RankRadar** (ai-rank-radar.vercel.app): rankings de modelos/GitHub/YC, no browsers.  
5. **Brave Sync iOS:** documentación help center con “Updated Mar 2023” aún dice limitaciones; wiki/comunidad 2025–26 contradicen en parte — marcar como **verificar en device real**.  
6. **Precios / Atlassian:** Verge 610 M vs SEC ~488 M — reportar ambos.  
7. **Atlas:** Fuentes de junio 2026 lo tratan vivo; fuentes posteriores confirman shutdown **9-ago-2026** — el panorama AI-browser cambió en semanas.  
8. **No se instalaron ni probaron** los browsers en esta máquina; el informe es de fuentes públicas, no bench local.  
9. **“Sigma”:** tratado como SigmaOS salvo evidencia de otro producto.

---

## Conclusión en una frase

Al cierre de esta nota: **Vivaldi como hub Mac+iOS+Windows con sync**, **Brave como ancla de seguridad**, **Zen+Firefox si prioriza el feeling Arc**, **Orion si prioriza Apple+privacidad** (Windows después), y **Comet/Dia solo como capa AI aislada** — mientras Arc se usa en mantenimiento consciente de que el equipo ya vive en Dia bajo Atlassian.
