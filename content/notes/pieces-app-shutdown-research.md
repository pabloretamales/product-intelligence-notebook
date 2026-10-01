---
title: "Cierre de Pieces: qué confirman las fuentes públicas"
summary: "Al 28-sep-2026 ninguna fuente pública confirma el cierre de Pieces ni explica sus razones. El sitio y el status seguían operativos; el aviso existe solo como un mensaje de Discord no verificado."
tags:
  - tools
  - changelog
created: "2026-09-28"
updated: "2026-09-28"
agent: "Grok Bot"
sources:
  - title: "Pieces"
    url: "https://pieces.app"
  - title: "Pieces status"
    url: "https://status.pieces.app"
  - title: "Pieces status history"
    url: "https://status.pieces.app/history"
  - title: "Pieces updates"
    url: "https://pieces.app/updates"
  - title: "Product Hunt — Pieces for Developers"
    url: "https://www.producthunt.com/products/pieces-for-developers"
  - title: "Serie A y Live Context"
    url: "https://pieces.app/updates/pieces-announces-series-a-funding-and-launch-of-live-context"
  - title: "Sunset de plugins de IDE"
    url: "https://docs.pieces.app/products/extensions-plugins/state-of-plugins"
  - title: "Política de reembolso"
    url: "https://pieces.app/legal/refund"
  - title: "Pieces en LinkedIn"
    url: "https://www.linkedin.com/company/getpieces"
---

Nota de archivo al 28 de septiembre de 2026 (hora de Chile). Pregunta: si un aviso de Discord sobre el cierre de Pieces tiene respaldo en fuentes públicas.

**Fecha de la investigación:** lunes 28-sep-2026, entre las 14:17 y las 15:00 aprox. (hora de Chile, UTC-3)
**Empresa:** Pieces / Pieces for Developers. Razón social: Mesh Intelligent Technologies, Inc. (Cincinnati y Columbus, Ohio). CEO y cofundador: Tsavo Knott.
**Detonante:** un mensaje de Discord, no contrastado con fuentes públicas: *"I wanted you to hear this from me first, before it hits your inbox. After six years, we're shutting down Pieces. Sunday, September 27 will be our last day of full service."*

---

## 1. Conclusión principal

**No encontré ninguna fuente pública que confirme el cierre ni que explique sus razones.** Al momento de revisar, ninguna fuente oficial (web, blog, página de Updates, docs, status, GitHub, LinkedIn, Bluesky), ningún medio (TechCrunch, HN, prensa local ni de financiamiento) y nada que el índice de búsqueda pueda ver en Product Hunt, Reddit o X menciona que Pieces cierre. Por lo tanto:

- **(a) Razones oficiales:** ninguna encontrada. No hay texto público de la empresa sobre el cierre fuera de ese mensaje de Discord.
- **(b) Prensa:** sin cobertura.
- **(c) Especulación de la comunidad:** no encontré nada indexado. Reddit y X bloquean el acceso automatizado, así que no se pueden descartar hilos recientes que no estén indexados.

Hay algo que no calza: según el mensaje, el domingo 27-sep-2026 (efectivamente domingo) fue el "último día de servicio completo". Sin embargo, el lunes 28-sep:
- **pieces.app** sigue vendiendo el producto con normalidad: sin banner, sin aviso, con descarga y precios activos.
- **status.pieces.app** dice "We're fully operational". Su historial no registra ningún aviso de cierre; el último incidente es "OpenAI models currently unavailable" del 25-sep (hora local de la página).
- No apareció un correo de cierre en las bandejas revisadas, pese a que el mensaje dice "before it hits your inbox".

**Hipótesis (no confirmadas):**
1. El anuncio es real y se hizo primero en Discord. El sitio, el status y el correo aún no se actualizan (la redacción "before it hits your inbox" sugiere que el correo viene después).
2. Es un mensaje falso o de phishing. En Discord son comunes los DMs que se hacen pasar por una empresa. **Conviene verificar que venga del canal #announcements del servidor oficial (discord.gg/getpieces, id 1098986658851999776, ~5.671 miembros) o de un miembro del staff verificado, y no de un DM. No hay que seguir enlaces de "exportación" ni de "reembolso" que vengan en ese mensaje.**

No puedo confirmar ninguna de las dos. El servidor de Discord solo se puede leer con sesión iniciada.

---

## 2. Fuentes obligatorias

### 2.1 TechCrunch
- **Sin cobertura.** La búsqueda `site:techcrunch.com Pieces for Developers` solo devuelve artículos que no tienen relación (Pieceable 2011/2012, Speakeasy, Solo.io, un artículo de opinión sobre developer experience). No hay nota sobre Pieces ni sobre su cierre, y tampoco sobre sus rondas.

### 2.2 Product Hunt
- Página del producto: https://www.producthunt.com/products/pieces-for-developers. Nota 4,7 con 35 reseñas y 2,5K seguidores. Tiene 4 lanzamientos: "Pieces for Developers" (23-jun-2023), "Pieces Copilot" (19-dic-2023), "Pieces Copilot+" (10-jul-2024) y "Pieces Long-Term Memory Agent" (04-mar-2025). Fuente: https://www.producthunt.com/products/pieces-for-developers/launches
- Foro: https://www.producthunt.com/p/pieces-for-developers. Solo hay hilos de lanzamiento de hace 1 a 3 años. **Nada sobre el cierre.**
- Reseñas: https://www.producthunt.com/products/pieces-for-developers/reviews. El resumen con IA de PH menciona como puntos débiles el alto uso de CPU, bugs después de las actualizaciones, límites de uso y problemas detrás de firewalls. **Nada sobre el cierre.**
- Ojo: https://www.producthunt.com/products/pieces es otro producto (una red social para compartir, "piecesof.me") que no tiene relación.

### 2.3 Reddit
- **Acceso directo bloqueado.** `https://www.reddit.com/search.json?q=pieces%20shutting%20down&sort=new` respondió 403 con curl y timeout con WebFetch. old.reddit redirige al login. Con Chrome headless aparece la página "Prove your humanity" (CAPTCHA). No intenté saltar el bloqueo.
- **Búsqueda web** (site:reddit.com, r/PiecesForDevelopers, r/programming, r/ChatGPTCoding, r/LocalLLaMA): **ningún hilo indexado sobre el cierre.** Solo aparecen hilos anteriores de r/PiecesForDevelopers, por ejemplo:
  - "Pieces.app does not respond to data deletion requests": https://www.reddit.com/r/PiecesForDevelopers/comments/1rcslpi/piecesapp_does_not_respond_to_data_deletion/
  - "Great Software Based off Website But...": https://www.reddit.com/r/PiecesForDevelopers/comments/1r27ow2/great_software_based_off_website_but/
- **Limitación:** puede haber hilos de las últimas 24 a 48 h que todavía no estén indexados.

### 2.4 X/Twitter (@getpieces, @KnottTsavo)
- **Acceso directo bloqueado:** x.com responde 403, xcancel responde 451, nitter no responde y el endpoint de syndication de Twitter respondió 429 (rate limit).
- La búsqueda web `site:x.com getpieces` no dio resultados. Tampoco encontré posts indexados del CEO sobre el cierre.
- Wayback Machine: el último snapshot de twitter.com/getpieces es del 17-jul-2026 y no sirve para esto.
- **Sin evidencia pública en X**, aunque no pude revisar el timeline actual.
- Bluesky (se revisó como extra): la cuenta getpieces.bsky.social no publica desde julio de 2025.

---

## 3. Otros canales oficiales

| Canal | URL | Resultado (28-sep-2026) |
|---|---|---|
| Sitio web | https://pieces.app | Operativo y vendiendo. Sin aviso de cierre. |
| Blog | https://pieces.app/blog | Sin post de cierre. El último post listado es del 27-mar-2026. |
| Updates / News | https://pieces.app/updates (news.pieces.app redirige aquí) | La última entrada es "Agentic Long-Term Memory and Meeting Prep" del 1-may-2026. Sin anuncio de cierre. |
| URLs probables | /shutdown, /farewell, /sunset, /goodbye, /announcement | Todas dan 404. |
| Sitemap | https://pieces.app/sitemap.xml | No hay URLs de cierre. |
| Docs | https://docs.pieces.app | Sin aviso de cierre. Solo está el "Sunset Notice" de los plugins de IDE (ver más abajo). |
| Status | https://status.pieces.app | "We're fully operational". Historial en https://status.pieces.app/history |
| GitHub (soporte) | https://github.com/pieces-app/support/issues | Issues normales hasta el 20/21-sep-2026. No hay aviso de cierre. |
| LinkedIn (empresa) | https://www.linkedin.com/company/getpieces | 8.287 seguidores, "11-50 employees". El último post visible es "Your memory shouldn't have a landlord..." (hace ~3 semanas, 31-ago-2026). Sin aviso. |
| LinkedIn (CEO) | https://www.linkedin.com/in/tsavoknott | Solo actividad de reposts. Sin aviso. |
| Discord | discord.gg/getpieces | El servidor existe (5.671 miembros, 333 en línea). Leer sus canales exige iniciar sesión. |
| Correo | bandejas revisadas | No llegó correo de cierre. El último marketing de tsavo.knott@mail.pieces.app es del 20-jul-2026. |

### Anuncios oficiales previos que sí existen (no son el cierre)
- **Sunset de los plugins de IDE:** https://docs.pieces.app/products/extensions-plugins/state-of-plugins. Cita: *"Pieces is no longer developing or supporting individual IDE plugins and extensions. Most existing plugins have stopped working and will not receive further updates. All integration support is moving to the Model Context Protocol (MCP)."* La página no tiene fecha visible.
- **Deprecación del cloud para versiones viejas:** "[Action Required] Cloud services for PiecesOS versions older than 12.4.0 will be deprecated on Thursday, June 4th 2026". Fuente: https://github.com/pieces-app/support/issues/1078
- **Cambio de modelo comercial:** hoy el onboarding exige tarjeta para el trial de 7 días. Hay una queja de un usuario en https://github.com/pieces-app/support/issues/1101 (7-sep-2026). Un directorio de terceros (recatools.com) dice que "there is no longer a free plan".

Estas señales (recorte de superficies, paso a pago obligatorio, foco en MCP y enterprise) son **contexto**, no razones confirmadas del cierre.

---

## 4. Otros medios
- **Hacker News:** en Algolia no hay historias ni comentarios sobre el cierre (búsquedas "pieces shutting down", "pieces.app" y "Tsavo" en los últimos 14 días). Solo aparecen Show HN y posts del blog de la empresa de 2025-2026 (p. ej. https://news.ycombinator.com/item?id=47598547, abril de 2026).
- **VentureBeat / The Information / Axios Columbus / Columbus Business First / Cincinnati Business Courier:** sin resultados en la búsqueda web. Algunas búsquedas dieron error en el buscador.
- **Posible confusión:** "Pieces Interactive" es un estudio de videojuegos de Embracer que cerró en junio de 2024 y no tiene relación.

---

## 5. Contexto de la empresa (con fuentes)

**Financiamiento**
- Seed de US$8M en 2021 liderado por Drive Capital. Lo citan los resultados de búsqueda desde una URL antigua de pieces.app (https://pieces.app/news/pieces-for-developers-raises-8m-in-series-seed-funding-round), que **hoy da 404**, así que no pude verificar el texto original.
- Serie A de US$13,5M (10-jul-2024), liderada por Drive Capital con Cintrifuse Capital, RedHawk Ventures y otros. Fuente oficial: https://pieces.app/updates/pieces-announces-series-a-funding-and-launch-of-live-context. También en LinkedIn: https://www.linkedin.com/posts/getpieces_seriesa-ai-developertools-activity-7216773168512856064-25y3
- Inversión de Flat Capital (Estocolmo, fundada por Sebastian y Nina Siemiatkowski de Klarna), anunciada el 12-ago-2025. No se informó el monto. Fuente: https://pieces.app/updates/flat-capital
- Un agregador que aparece en LinkedIn habla de "$14.5M in total funding". Es una cifra de terceros sin verificar.

**Equipo**
- LinkedIn dice "11-50 employees". Un agregador de terceros dice "30-40 employees (-10% YoY)", con presencia en 7 países (EE.UU., Reino Unido, India, Nigeria, Egipto, entre otros).
- CTO y cofundador: Mark Widman. CPO y cofundador: Mack Myers.
- Sede legal según la política de reembolso: 1311 Vine St., Unit 301, Cincinnati, OH. LinkedIn también lista 629 N High St, Columbus.

**Producto**
- Empezó en 2020 como gestor de snippets. Luego vinieron el copiloto, "Long-Term Memory" (LTM-2, 2.5, 2.7), el servidor MCP y la versión 6.x (2026), que se posiciona como "memory layer for modern work" para cualquier trabajador y no solo para desarrolladores.
- Pro cuesta US$18,99 al mes según recatools.

**Competencia (contexto, sin fuente de la empresa que la vincule al cierre)**
- Asistentes de código con memoria o contexto propio: Cursor, GitHub Copilot, Claude Code, Codex.
- Memoria nativa en ChatGPT y Claude, y alternativas de "memoria" como Rewind/Limitless, Mem0, Zep y Cognee.
- La propia página de PH lista como similares a Claude, Augment Code, Cortex y ContextPool.

**Adquisición o acqui-hire:** no encontré ninguna información.
**Liberación como open source:** no encontré ninguna información. Algunos SDKs y CLI ya están en github.com/pieces-app.

**Datos de usuarios:** no hay información oficial sobre exportación ni borrado ligada al cierre. Lo que sí se sabe:
- La empresa dice que los datos viven en el dispositivo ("Your data lives on-device from day one", https://pieces.app/about), así que la memoria local de PiecesOS debería seguir en el equipo del usuario.
- Existen quejas previas de que no respondían solicitudes de borrado de datos (Reddit citado arriba; GitHub https://github.com/pieces-app/support/issues/1003).

**Reembolsos:** la política vigente desde el 1-jul-2026 da reembolso completo si se pide dentro de 14 días desde el cobro, y cada renovación se evalúa por separado. Fuente: https://pieces.app/legal/refund
- En el correo revisado había un recibo de Paddle del 15-ago-2026 por US$15,46 (Pro mensual, 19:46 hora de Chile). No apareció un recibo de renovación de septiembre.

---

## 6. Fechas clave (hora de Chile cuando aplica)
- 2020: fundación (según LinkedIn del CEO, "Sep 2020 - Present").
- 2021: seed de US$8M (Drive Capital), sin verificar directamente.
- 23-jun-2023: primer lanzamiento en Product Hunt.
- 10-jul-2024: Serie A de US$13,5M.
- 12-ago-2025: entra Flat Capital.
- 1-may-2026: última entrada en Updates.
- 4-jun-2026: se depreca el cloud para PiecesOS < 12.4.0.
- 31-ago-2026: último post visible en LinkedIn de la empresa.
- 25-sep-2026 20:56 (Chile): último incidente en el status page.
- 27-sep-2026 (domingo): "último día de servicio completo" según el mensaje de Discord, sin confirmación pública.
- 28-sep-2026: el sitio y el status siguen operativos, sin aviso.

---

## 7. Limitaciones
- No pude leer Discord (exige login), X (403/451/429) ni Reddit (403/CAPTCHA) directamente. Me basé en el índice de búsqueda, que puede atrasarse horas o días frente a un anuncio del 27-28 de septiembre.
- El buscador web respondió varias veces "Pieces is not shutting down". Eso es una síntesis automática basada en páginas indexadas antes del anuncio, **no una desmentida**, y no la tomo como evidencia.
- No hay cita oficial de las razones del cierre. No inventé ninguna.
- Para cerrar la duda haría falta el texto completo o una captura del mensaje de Discord (quién lo envió y en qué canal) y el correo de las horas siguientes. Si ese aviso llega, ahí estarían la explicación oficial y los detalles de exportación y reembolso.
