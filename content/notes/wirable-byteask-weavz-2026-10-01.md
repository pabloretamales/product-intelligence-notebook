---
title: "Wirable, ByteAsk y Weavz.io (Product Hunt, junio 2026)"
summary: "Ficha al 1-oct-2026 de tres lanzamientos de Product Hunt de finales de junio: Wirable (agent-readiness), ByteAsk Embedded MCP y Weavz.io (pasarela MCP). El dominio declarado de Wirable no servía el producto; ByteAsk es de nicho; Weavz publica precios y un sitio operativo."
tags:
  - tools
  - comparison
  - mcp
created: "2026-10-01"
updated: "2026-10-02"
agent: "Joan Jett"
sources:
  - title: "Wirable en hunted.space"
    url: "https://hunted.space/product/wirable"
  - title: "Wirable en aipure.ai"
    url: "https://aipure.ai/products/wirable"
  - title: "Wirable en aistart.ai"
    url: "https://aistart.ai/tool/wirable"
  - title: "ByteAsk Embedded — docs"
    url: "https://docs.byteask.ai/embedded"
  - title: "ByteAsk Embedded MCP"
    url: "https://github.com/ByteAsk/ByteAsk-Embedded-MCP"
  - title: "C-CppBench"
    url: "https://github.com/ByteAsk/C-CppBench"
  - title: "ByteAsk en hunted.space"
    url: "https://hunted.space/product/byteask-embedded-mcp"
  - title: "Weavz.io"
    url: "https://weavz.io/"
  - title: "Weavz.io — pricing"
    url: "https://weavz.io/pricing"
  - title: "Weavz.io — MCP"
    url: "https://weavz.io/docs/concepts/mcp-servers"
  - title: "Weavz en GitHub"
    url: "https://github.com/weavz"
---

Nota de archivo al 1 de octubre de 2026 (America/Santiago, UTC-3). Tres productos que aparecieron en Product Hunt a finales de junio de 2026: un auditor de agent-readiness (Wirable), un servidor MCP de documentación embebida (ByteAsk) y una pasarela MCP con aprobaciones humanas (Weavz.io).

**Método.** Sitios, documentación, GitHub y agregadores públicos, leídos el 1-oct-2026. No se corrieron auditorías ni pruebas de pago. Las cifras de Product Hunt salen de [hunted.space](https://hunted.space/product/wirable) y de digests públicos, no de la API oficial de Product Hunt. Cuando un precio no está en el sitio del producto, se marca como secundario.

El pipeline de ingesta y RAG (Crawl4AI, Marker, Qdrant, DSPy) está en otra nota: [Marker, Qdrant, DSPy y Crawl4AI](/notes/marker-qdrant-dspy-crawl4ai-2026-10-01).

## 1. Wirable

### Qué es

Plataforma de **agent-readiness**. Según los directorios que todavía describen el producto, se pega una URL, unos agentes recorren flujos reales en un navegador (autenticación, acción principal, errores, reintentos) y el resultado es un **score de 0 a 100** con evidencia por dimensión. Si los agentes se atascan, el producto puede **generar y hospedar un proxy MCP** delante de la app, más pull requests en GitHub (`llms.txt`, `AGENTS.md`, manifiesto MCP) y, en el plan Pro, monitoreo de drift por commit.

Una rúbrica citada por directorios de terceros pondera seis dimensiones: superficie de API (20), auth (20), MCP (20), errores (15), idempotencia (15) y docs (10). El consenso sale de tres agentes (N=3). Esa rúbrica no se pudo leer en un sitio primario el 1-oct-2026.

### Sitio y código

| Recurso | URL | Estado el 1-oct-2026 |
|---|---|---|
| Dominio declarado | https://wirable.dev/ | Responde 200, pero el HTML es de un sitio de apuestas ajeno, no de la app Wirable |
| Agregadores | [hunted.space](https://hunted.space/product/wirable), [aipure.ai](https://aipure.ai/products/wirable) (ficha actualizada el 8-jul-2026), [aistart.ai](https://aistart.ai/tool/wirable) | Describen el producto |
| GitHub público | No encontrado | Sin estrellas ni licencia de código verificables |

### Licencia y precio

SaaS cerrado. No hay una licencia open source pública identificada.

Precios tomados de aistart.ai y aipure.ai, **no verificados en wirable.dev** porque ese dominio no servía el producto:

| Plan | Precio publicado en directorios | Qué incluyen |
|---|---|---|
| Free | US$0 | Hasta 3 auditorías completas (N=3), score compartible |
| Pro | US$29/mes | Auditorías ilimitadas con fair use, proxy MCP hospedado, drift por commit, fix PRs en GitHub |

### Madurez

| Señal | Dato | Fuente |
|---|---|---|
| Lanzamiento | ~29-jun-2026 | Product Hunt Daily 2026-06-29; hunted.space |
| Puesto del día | **#6** | hunted.space |
| Upvotes / comentarios | **60** / **13** | hunted.space |
| Featured | hunted.space indica que no fue featured, así que no entra al Product of the Day formal | hunted.space |
| Sitio vivo | El dominio declarado no entrega el producto | Observación del 1-oct-2026 |

### MCP

Usa agentes para auditar en el navegador y ofrece un **proxy MCP hospedado** como remediación, junto con artefactos pensados para agentes (`/llms.txt`, `AGENTS.md`, manifiesto MCP).

Un comentario en Product Hunt señala un riesgo concreto: poder levantar ese proxy sobre un sitio **sin acreditar que se controla**. A eso se suma la superficie del propio proxy (datos en tránsito, cumplimiento, un intermediario más).

### A favor y en contra

A favor: la pregunta es medible (¿un agente puede usar el producto?), el loop va de diagnóstico a remediación y a una nueva auditoría, y el Pro de directorio es barato.

En contra: el 1-oct-2026 el dominio oficial no sirve la app (abandono, DNS o marca rota quedan como hipótesis abiertas, no como un diagnóstico). No hay repositorio ni documentación primaria verificable. El lanzamiento es de junio de 2026, con unos 60 upvotes.

## 2. ByteAsk Embedded MCP

### Qué es

Servidor **MCP open source** para agentes de código (Claude Code, Codex, Cursor y otros) que necesitan un dato exacto de hardware o firmware: mapas de registros, códigos Modbus, SCPI, umbrales, datasheets. Devuelve un fragmento textual con cita de página, o un *"no confident match"*. El diseño declarado es no inventar el valor.

Herramientas del repo: `search_docs`, `get_context`, `request_document`. Transportes: stdio y Streamable HTTP.

El README separa dos capas. El repositorio trae el servidor MCP, una interfaz `SearchBackend` y un `SampleBackend` de demostración. El motor de retrieval y el corpus licenciado **no están en el open source**; alimentan el endpoint hospedado.

### Sitio y código

| Recurso | URL |
|---|---|
| Docs | https://docs.byteask.ai/embedded |
| MCP hospedado | `https://mcp.byteask.ai/mcp` (las docs dicen que no pide API key ni signup) |
| GitHub | https://github.com/ByteAsk/ByteAsk-Embedded-MCP |
| Benchmark citado en PH | https://github.com/ByteAsk/C-CppBench |
| Ficha | https://hunted.space/product/byteask-embedded-mcp |

### Licencia y precio

**MIT** en el servidor (badge y `LICENSE`). El README lo marca como **beta**.

El MCP público hospedado está documentado como usable sin API key. Bibliotecas privadas (datasheets bajo NDA) quedan en "contact us", sin lista de precios. Auto-hospedar el servidor es gratis; el corpus completo no viaja con el código.

### Madurez

| Señal | Dato | Fuente |
|---|---|---|
| Estrellas | **24** | GitHub, 1-oct-2026 |
| Forks | **3** | api.github.com |
| Creado / último push | 19-jun-2026 / 20-jun-2026 | API de GitHub |
| Lanzamiento PH | ~30-jun-2026 | Digests NG Tech / agents-radar |
| Puesto del día | **#16** | hunted.space |
| Upvotes / comentarios | **13** / **4** | hunted.space |
| Registry MCP | Namespace `ai.byteask/embedded-docs` | README |

### MCP

El producto es un servidor MCP. Las docs muestran instalación en Claude, Cursor, VS Code, Codex y Windsurf, entre otros. En Product Hunt el maker afirma que modelos frontier pasan de 47–61% a **89%** con un modelo más chico más la herramienta. Esa cifra no se reprodujo para esta ficha.

### A favor y en contra

A favor: el fallo que ataca es real (un registro alucinado que igual compila), la salida cita o admite que no hay match, y el endpoint público se puede probar sin clave.

En contra: el nicho es firmware, embebido y protocolos industriales. El valor está en el corpus cerrado, no en el cascarón MIT. La actividad pública se concentra en junio de 2026 (24 estrellas, último push el 20-jun-2026). No hay precio público para bibliotecas privadas.

## 3. Weavz.io

### Qué es

Pasarela de acceso a aplicaciones para agentes, por MCP y también por CLI, API y SDK. El sitio declara **más de 1.000 integraciones** y **más de 12.000 tools** de agente, con credenciales acotadas por usuario, **Human Gates** (una persona aprueba), state KV, filesystem, sandbox y audit trail. Esas cifras de catálogo son un claim del sitio, no un conteo rehecho aquí.

Dos modos MCP:

- **Tool Mode:** superficies acotadas.
- **Code Mode:** tres meta-tools (`search`, `read_api`, `execute`) para no volcar miles de schemas al contexto.

Endpoint genérico documentado: `https://platform.weavz.io/mcp/weavz`. El sitio lista apps que hablan MCP (Claude, ChatGPT, Codex, Cursor, VS Code, Cline, Gemini CLI, OpenCode) y SDKs (OpenAI Agents, LangGraph, CrewAI, ADK, Vercel AI SDK).

### Sitio y código

| Recurso | URL |
|---|---|
| Sitio | https://weavz.io/ |
| Pricing | https://weavz.io/pricing |
| Connect | https://weavz.io/connect |
| Docs MCP | https://weavz.io/docs/concepts/mcp-servers |
| GitHub | https://github.com/weavz (SDKs y CLI; no es el producto completo en open source) |

El 1-oct-2026 el sitio y la página de precios respondían con el producto.

### Licencia y precio

SaaS comercial. El SDK y la CLI están en la org de GitHub; el gateway no se publica como un producto open source completo.

Precios de https://weavz.io/pricing el 1-oct-2026:

| Plan | Precio | Acciones/mes incluidas | Conexiones | Servidores MCP |
|---|---|---|---|---|
| Free | US$0 | 20.000 | 10 | 25 |
| Pro | US$29/mes | 200.000 | 100 | 500 |
| Team | US$129/mes | 1.000.000 | 500 | 5.000 |
| Scale | US$299/mes | 2.000.000 | 2.500 | 20.000 |
| Enterprise | A medida | Ilimitadas, por contrato | — | — |

Hay add-ons de acciones, horas de sandbox, filesystem y State KV. El sitio describe topes duros más packs, sin overage automático, y un trial sin tarjeta en los planes de pago. En su propia página de precios se comparan con Merge Launch (US$650/mes).

### Madurez

| Señal | Dato | Fuente |
|---|---|---|
| Lanzamiento | ~28–29 jun 2026 | LinkedIn de Weavz; Product Hunt Daily 2026-06-29 |
| Puesto del día | **#9** | hunted.space / PH Daily |
| Upvotes / comentarios | **26** / **20** | hunted.space |
| Featured | hunted.space: no featured formal | hunted.space |
| Sitio | Operativo, con pricing detallado | Observación del 1-oct-2026 |

### MCP

Es el núcleo del producto: MCP remoto con OAuth o bearer, y Code Mode para producción. No añade un crawler ni una base vectorial.

### A favor y en contra

A favor: cubre la parte operativa de un agente en producción (quién actúa, qué puede cambiar, cuándo aprueba una persona, qué queda en el audit) y el precio de entrada está publicado.

En contra: las credenciales y la orquestación quedan en el vendor. El lanzamiento es de junio de 2026, con 26 upvotes. El catálogo de "1.000+ apps" hay que contrastarlo con las aplicaciones que de verdad se van a conectar; las menos comunes pueden no estar. Alternativas del mismo espacio: Composio, n8n con MCP, Zapier MCP, Merge, o un conector propio.

## 4. Comparación

| | Wirable | ByteAsk Embedded MCP | Weavz.io |
|---|---|---|---|
| Tipo | Auditor de agent-readiness y proxy | MCP de docs embebidas | Gateway MCP con gobernanza |
| Licencia | SaaS cerrado | MIT en el servidor; corpus hospedado cerrado | SaaS; SDK/CLI en GitHub |
| Precio público | Free, 3 auditorías; Pro US$29/mes (directorios) | Hosted sin key; privado sin tarifa pública | US$0 / 29 / 129 / 299 + Enterprise |
| Product Hunt | #6 · 60 upvotes · ~29-jun-2026 | #16 · 13 upvotes · ~30-jun-2026 | #9 · 26 upvotes · ~28–29 jun 2026 |
| Sitio el 1-oct-2026 | Dominio declarado no sirve el producto | Docs y repo públicos | Sitio y pricing operativos |
| MCP | Proxy que el producto hospeda | Nativo | Nativo (Tool Mode y Code Mode) |
| Lectura | Diferir | Nicho | Condicional |

## 5. Lectura

1. **Weavz.io: condicional.** El plan Free alcanza para probar dos o tres flujos con Human Gates y audit trail, y para compararlo con Composio, n8n con MCP, Zapier MCP o Merge antes de un plan de pago. Conviene no dejar una arquitectura crítica apoyada solo en Weavz hasta ver estabilidad más allá del lanzamiento de junio de 2026.
2. **Wirable: diferir.** La pregunta de agent-readiness es concreta, pero el 1-oct-2026 https://wirable.dev/ no servía el producto, no hay código público, y el proxy MCP tiene una objeción de ownership sin cerrar. Hay que volver a mirar el dominio y el modelo de seguridad del proxy antes de usarlo.
3. **ByteAsk: nicho.** Encaja donde un datasheet manda (firmware, industrial, protocolos). El MCP hospedado se puede probar sin key. Fuera de ese dominio, el servidor MIT no trae el corpus que lo hace útil.

## 6. Limitaciones

- No se ejecutó el producto de ninguno de los tres, salvo lectura de docs y sitios.
- Wirable: el precio sale de aipure.ai y aistart.ai. El sitio primario no era verificable el 1-oct-2026.
- Product Hunt: puestos, upvotes y comentarios salen de hunted.space y de digests, no de la API oficial.
- El claim de 89% de ByteAsk y los conteos de "1.000+ / 12.000+" de Weavz son del maker o del sitio, y no se reprodujeron.
- Listas diarias de momentum en GitHub al 30-sep-2026 no incluían estos tres nombres. Son lanzamientos de junio, no repos con una base grande de estrellas.
