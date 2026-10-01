---
title: "Qué modelo usar en Cursor Cloud Agents"
summary: "Comparación al 30-sep-2026 de los modelos de Cursor (Pro+, sin Fast): pools, precios por token, benchmarks y una recomendación por tarea, con fuente y fecha en cada cifra."
tags:
  - models
  - pricing
  - cursor
  - tools
created: "2026-09-30"
updated: "2026-09-30"
agent: "Grok Bot"
sources:
  - title: "Cursor — Models"
    url: "https://cursor.com/docs/models"
  - title: "Cursor — Cloud Agents"
    url: "https://cursor.com/docs/cloud-agent"
  - title: "Cursor — Pricing"
    url: "https://cursor.com/pricing"
  - title: "CursorBench 4.0"
    url: "https://cursor.com/cursorbench"
  - title: "Composer 2.5"
    url: "https://cursor.com/blog/composer-2-5"
  - title: "Grok 4.7"
    url: "https://x.ai/news/grok-4-7"
  - title: "Claude Sonnet 5.5"
    url: "https://www.anthropic.com/claude-sonnet-5-5"
  - title: "Artificial Analysis — models"
    url: "https://artificialanalysis.ai/leaderboards/models"
  - title: "Artificial Analysis — coding agents"
    url: "https://artificialanalysis.ai/agents/coding"
  - title: "LMArena WebDev"
    url: "https://arena.ai/leaderboard/code/webdev/overall"
  - title: "LMArena Text"
    url: "https://arena.ai/leaderboard/text"
  - title: "SWE-bench Pro (BenchLM)"
    url: "https://benchlm.ai/benchmarks/swe-bench-pro"
---

Nota de archivo al 30 de septiembre de 2026 (America/Santiago, UTC-3). Pregunta: qué modelo conviene en Cursor Cloud Agents con plan Pro+ y **sin modo Fast** (Fast cuesta 2x o más; aquí se prioriza costo de API frente a latencia).

Todos los datos vienen de páginas públicas consultadas el 30-sep-2026. Cada cifra lleva su fuente (ver §7) y su fecha. "sin dato" = la fuente no publica ese modelo. **[P]** = cifra publicada por el proveedor o autorreportada; **[I]** = medición independiente de un tercero; **[C]** = CursorBench, que ejecuta Cursor con su propio harness y no se puede reproducir (para Composer y Grok, que Cursor co-entrena, se considera prácticamente del proveedor).

---

## 1. Verificación de modelos y pools en Cursor

Fuente: https://cursor.com/docs/models (consultada 30-sep-2026; la página no trae fecha).

- **Los 17 nombres existen en la documentación de Cursor.** "Codex 5.3" aparece como **GPT-5.3 Codex**.
- **Pool "Cursor Models"** (la doc dice "significativamente más uso incluido"): **Grok 4.7, Grok 4.6, Grok 4.5 y Composer 2.5**. Confirmado.
- **Pool "Other Models"**: todos los demás, que se cobran al precio de la API del modelo. Confirmado.
- **Pro+ cuesta US$60/mes** e incluye ambos pools. Cursor **no publica cuántos dólares de uso incluye cada pool** en Pro+ (ni en /docs/models ni en /pricing).
- **Ocultos por defecto** (hay que activarlos en Settings → Models): Claude Opus 5, Claude Sonnet 5, GPT-5.5, GPT-5.3 Codex, Kimi K3 y GLM 5.3.
- **Cloud Agents**: la doc (https://cursor.com/docs/cloud-agent) dice "Cloud Agents use a curated selection of models" y que se cobran a precio de API del modelo elegido. **No publica la lista exacta**, así que no pude confirmar que los 17 estén disponibles en Cloud Agents. Hay que revisarlo en cursor.com/agents.
- **Fuera de Cursor, pero relevantes**: GPT-6 Astra, GPT-6 Sol/6.1 Sol y GPT-6 Luna aparecen en AA y LMArena, y en algunos benchmarks lideran. **No están** en la tabla de modelos de Cursor, así que quedan fuera.
- **Claude Fable 5.1**: si Privacy Mode está activo, Cursor pide aprobar retención de datos, porque Anthropic guarda input y output para prevenir daños. Es relevante cuando el código es de terceros o de clientes y no debe quedar retenido por el proveedor.
- **Max Mode**: la nota "Requires Max Mode" aplica solo a los planes antiguos por request. En Pro+, que se cobra por uso, no aplica.

## 2. Precios en Cursor vs precio de API del proveedor (US$ por 1M tokens, sin Fast)

| Modelo | Pool Cursor | Cursor in / cache read / out | API del proveedor in/out (AA, 30-sep-2026) | Notas |
|---|---|---|---|---|
| Grok 4.7 | Cursor Models | 2 / 0.5 / 6 | 2 / 6 | Sobre 256k tokens de input se cobra 2x (hasta 500k). Fast = 2x |
| Grok 4.6 | Cursor Models | 2 / 0.5 / 6 | 2 / 6 | AA lo marca como "deprecated" |
| Composer 2.5 | Cursor Models | 0.5 / 0.2 / 2.5 | no aplica (exclusivo de Cursor) | Fast = 3 / 15 |
| Claude Opus 5.5 | Other Models | 4 / 0.2 / 20 | 4 / 20 | 20% más barato que Opus 5 |
| Claude Opus 5 | Other Models | 5 / 0.5 / 25 | 5 / 25 | Oculto por defecto |
| Claude Sonnet 5.5 | Other Models | 2 / 0.2 / 10 | 2 / 10 | Lanzado el 28-sep-2026 |
| Claude Sonnet 5 | Other Models | 2 / 0.2 / 10 | 2 / 10 | Oculto; tokenizer nuevo, genera más tokens |
| Claude Fable 5.1 | Other Models | 10 / 0.25 / 50 | 10 / 50 | Unas 2.5x Opus 5.5 |
| GPT-5.6 Sol | Other Models | 4 / 0.4 / 20 | 4 / 20 | "Precio promocional hasta 21-nov-2026" |
| GPT-5.6 Terra | Other Models | 2 / 0.2 / 12 | 2 / 12 | |
| GPT-5.6 Luna | Other Models | 0.2 / 0.02 / 1.2 | 0.2 / 1.2 | |
| GPT-5.5 | Other Models | 5 / 0.5 / 30 | 5 / 30 | Oculto |
| GPT-5.3 Codex | Other Models | 1.75 / 0.175 / 14 | 1.75 / 14 | Oculto |
| Gemini 3.1 Pro | Other Models | 2 / 0.2 / 12 | 2 / 12 | |
| Gemini 3.8 Flash | Other Models | 0.75 / 0.075 / 3.5 | 0.75 / 3.75 | Cursor cobra el output un poco más barato que la cifra de AA |
| Kimi K3 | Other Models | 3 / 0.3 / 15 | 3 / 15 | Oculto |
| GLM 5.3 | Other Models | 1.4 / 0.26 / 4.4 | 1.4 / 4.4 | Oculto |

## 3. Tabla completa de benchmarks

Configuración de esfuerzo: se usa la mejor configuración publicada (max o xhigh) salvo que se indique otra.

| Modelo | SWE-bench Verified | SWE-bench Pro | LiveCodeBench (Vals) [I] | Aider Polyglot | WebDev Arena overall [I] | LMArena Text [I] | AA Intelligence Index v4.3 [I] | AA Coding Agent Index v1.5 [I] | Terminal-Bench 4.0 (AA) [I] | CursorBench 4.0 [C] (costo por tarea) |
|---|---|---|---|---|---|---|---|---|---|---|
| Claude Opus 5.5 | sin dato | 89.9% [P] | sin dato | sin dato | **1818** (#1, max) | **1509** (#1, high) | **58** max / 56 xhigh / 54 high | 66.0 (max, Claude Code) | 59.6% | **57.8%** max ($13.43) / **56.0%** high ($3.97) |
| Claude Sonnet 5.5 | sin dato | 81.3% [P] | sin dato | sin dato | 1709 (#5, high) | sin dato | 56 max / 52 xhigh / 47 high | **68.4** max / 62.9 xhigh / 55.0 high | **63.6%** | 55.5% max ($9.67) / 53.1% xhigh ($3.88) / 47.8% high ($1.67) |
| Claude Fable 5.1 | sin dato | 81.2% [P] | **90.5%** | sin dato | 1751 (max) | 1501 (max) | 53 | 62.2 (max) | 55.1% xhigh | 51.8% max ($17.28) |
| Claude Opus 5 | sin dato | 79.2% [P] | 89.0% | sin dato | 1694 (max) | 1491 (high) | 51 | 59.7 (max) | 49.0% | 46.6% max ($11.95) |
| Claude Sonnet 5 | 85.2% [P] | 63.2% [P] | 82.4% | sin dato | 1540 (high) | 1462 (high) | 38 | sin dato | 14.1% | 34.1% max ($7.17) |
| Grok 4.7 | sin dato | sin dato | sin dato | sin dato | 1636 (xhigh) | 1439 (xhigh) | 46 | 56.3 (xhigh, Grok Build) | 25.8% (AA); 37.6% [P] | 46.3% xhigh ($6.01) / 43.9% high ($4.69) |
| Grok 4.6 | sin dato | sin dato | 88.2% | sin dato | 1620 (high) | 1453 (high) | 44 | 47.0 (xhigh) | 21.2% | 41.4% xhigh ($6.10) |
| Composer 2.5 | sin dato (SWE-bench Multilingual 79.8% [P]) | sin dato | sin dato | sin dato | sin dato | sin dato | sin dato | sin dato en v1.5 (*) | sin dato (T-Bench 2.0: 69.3% [P]) | 27.7% ($0.68) |
| GPT-5.6 Sol | sin dato | 64.6% [P] | 82.6% | sin dato | 1619 (xhigh, codex) | 1483 (xhigh) | 47 | 54.6 (max, Codex) | 39.9% | 41.7% max ($8.23) |
| GPT-5.6 Terra | sin dato | 63.4% [P] | 85.9% | sin dato | 1519 (xhigh) | 1465 (xhigh) | 42 | sin dato | 35.4% | 41.3% max ($5.14) |
| GPT-5.6 Luna | sin dato | 62.7% [P] | sin dato | sin dato | 1518 (xhigh) | 1454 (xhigh) | 37 | 43.2 (max) | 11.6% | 35.9% max ($1.03) |
| GPT-5.5 | sin dato | 58.6% [P] | 85.3% | sin dato | 1512 (xhigh) | 1481 (high) | 38 | sin dato | 14.6% | sin dato |
| GPT-5.3 Codex | sin dato | 56.8% [P] | 87.3% | sin dato | 1408 | sin dato | 33 (estimado por AA) | sin dato | sin dato | sin dato |
| Gemini 3.1 Pro | 80.6% [P] | 46.1% [I, Scale, 08-abr-2026] | 88.5% | sin dato | 1446 | 1487 | 30 | sin dato | 4.0% | sin dato |
| Gemini 3.8 Flash | sin dato | sin dato | 89.5% | sin dato | 1583 (high, preliminar) | 1492 (high, preliminar) | 41 | 41.9 (high) | 19.7% | 39.6% high ($4.70) |
| Kimi K3 | sin dato | sin dato | 87.2% | sin dato | 1658 (max) | 1488 (max) | 44 | 51.9 (Kimi Code CLI) | 12.6% | sin dato |
| GLM 5.3 | sin dato | sin dato | 80.5% | sin dato | 1622 (max) | 1480 (max) | 45 | 53.6 (Opencode) | 41.9% | 42.6% max ($5.05) |

(*) Un blog de terceros (llm-boss.com) cita "62 en el AA Coding Agent Index" para Composer 2.5, pero corresponde a una versión anterior del índice (mayo-2026) y no es comparable con la v1.5 actual.

**Proxies de razonamiento para especificaciones y planificación** (Artificial Analysis [I], consultado 30-sep-2026; configuración max salvo que se indique otra):

| Modelo | HLE | GPQA Diamond | SciCode | AA-Briefcase (Elo) |
|---|---|---|---|---|
| Claude Opus 5.5 | **61.4%** | sin dato | **66.9%** | **1822** |
| Claude Sonnet 5.5 | 55.0% | sin dato | 61.0% | sin dato |
| Claude Fable 5.1 | 59.1% | 93.7% | 63.1% | ~1679 (1822 − 143, según AA) |
| Claude Opus 5 | 54.9% | 93.2% | 56.4% | sin dato |
| GPT-5.6 Sol | 49.5% | 94.1% | 57.1% | 1487 [P, tabla xAI] |
| Grok 4.7 (xhigh) | 43.1% | sin dato | 57.4% | 1657 [P, tabla xAI] |
| Grok 4.6 (high) | 42.9% | 94.9% | 56.5% | 1546 [P] |
| Gemini 3.8 Flash (high) | 47.8% | **95.3%** | 56.6% | sin dato |
| Kimi K3 | 46.9% | 93.5% | 59.5% | sin dato |
| GLM 5.3 | 42.3% | 91.7% | 59.0% | sin dato |
| GPT-5.6 Terra | 42.9% | 92.5% | 55.0% | sin dato |
| GPT-5.5 (xhigh) | 45.8% | 93.5% | 55.8% | sin dato |
| Gemini 3.1 Pro | 47.0% | 94.1% | 58.7% | sin dato |

**Aider Polyglot**: la tabla oficial (aider.chat) no se actualiza desde el 20-nov-2025 y no incluye ninguno de estos modelos. Resultado: **sin dato para los 17**.
**SWE-bench Verified**: casi nadie lo reporta ya (OpenAI dejó de hacerlo por problemas con los tests). En llm-stats (30-sep-2026), los 116 resultados son autorreportados y ninguno está verificado.
**OpenRouter (ai-rank-radar, actualizado 30-sep-2026 15:00 UTC = 12:00 hora Chile)**: de estos modelos, en el top-8 por tokens solo aparece GPT-5.6 Luna (#5, 8.31T tokens). Mide popularidad, no calidad. El top de ai-rank-radar por índice AA coincide con AA: Opus 5.5 57.6 y Sonnet 5.5 56.0.

## 4. Recomendación por tarea (sin Fast)

### 1) Programar (coding agéntico general)
- **Principal: Claude Opus 5.5 en esfuerzo High** (subir a Extra High para tareas largas). En el harness real de Cursor (CursorBench 4.0 [C]), High saca 56.0% a $3.97 por tarea: lo mismo que Extra High (56.0% a $6.98) y apenas menos que Max (57.8% a $13.43). También lidera el AA Intelligence Index (58) [I] y es #1 en WebDev Arena [I]. SWE-bench Pro 89.9% [P].
- **Alternativa: Claude Sonnet 5.5 en Extra High.** Obtiene 53.1% a $3.88 por tarea [C] y tiene el mejor AA Coding Agent Index de la lista (68.4 en max) [I] y el mejor Terminal-Bench 4.0 (63.6%) [I], con la mitad del precio por token de Opus. Advertencia: lleva solo dos días en el mercado.
- Si el pool Other Models se agota: **Grok 4.7 en High o Extra High** (43.9–46.3% [C]), que descuenta del pool Cursor Models.

### 2) Mejor relación costo/calidad
- **Principal: Claude Sonnet 5.5 en High.** En CursorBench 4.0 [C] saca 47.8% a $1.67 por tarea: supera a Grok 4.7 Extra High (46.3% a $6.01), a GPT-5.6 Sol Max (41.7% a $8.23) y a Opus 5 Max (46.6% a $11.95), a un cuarto del costo o menos. En AA [I], la variante high tiene índice 47 con un costo por tarea de $1.08.
- **Alternativa: Grok 4.7 en High.** Por token es el más barato de los modelos fuertes ($2/$6), pero sobre todo **consume el pool Cursor Models**, que según la doc tiene "significativamente más uso incluido". En la práctica, en Pro+ ese consumo sale del pool Cursor Models hasta agotarlo, así que puede costar mucho menos que el precio de API. Pero no se puede cuantificar, porque Cursor no publica el monto. A precio de API sale más caro por tarea que Sonnet 5.5 High, ya que genera muchos tokens ($4.69 por tarea con 43.9%).
- Para tareas triviales o masivas: **Composer 2.5** ($0.68 por tarea, 27.7% [C], pool Cursor Models) o **Opus 5.5 en Low** (43.7% a $1.17 [C], un dato notable).

### 3) UI y frontend
- **Principal: Claude Opus 5.5 (max/xhigh).** Es #1 en WebDev Arena overall con 1818 (30-sep-2026) [I], 67 puntos sobre Fable 5.1, que cuesta 2.5x. CursorBench 4.0 incluye tareas de "design adherence" y ahí Opus 5.5 también lidera [C].
- **Alternativa: Claude Sonnet 5.5 (high).** Queda #5 en WebDev Arena con 1709 [I], por encima de Opus 5 max y de Kimi K3, con la mitad del precio de Opus 5.5.
- No recomiendo Fable 5.1 para UI: tiene menos Elo que Opus 5.5 y cuesta 2.5x.

### 4) Diseñar especificaciones y planificar
No hay un benchmark público de "calidad de spec". Uso proxies: AA Intelligence Index (razonamiento compuesto), HLE (razonamiento experto), AA-Briefcase / GDPval-AA (documentos profesionales de varias horas), GPQA y la preferencia humana en LMArena Text.
- **Principal: Claude Opus 5.5 en Max o Extra High.** Lidera AA II (58), HLE (61.4%), SciCode (66.9%), AA-Briefcase (1822, +143 sobre Fable 5.1) y LMArena Text (1509, #1) [I]. Planificar consume pocos tokens comparado con programar, así que el esfuerzo máximo sale barato.
- **Alternativa: Claude Sonnet 5.5 en Max.** Tiene AA II 56, igual que Opus 5.5 xhigh [I], a la mitad del precio por token (AA estima $7.60 por tarea del índice por la cantidad de tokens que genera). Si se quiere una "segunda opinión" de otro laboratorio, sirve **Gemini 3.8 Flash**: GPQA 95.3%, LMArena Text 1492 (#10, preliminar) y es muy barato ($0.75/$3.5). Pero su AA II es 41, bastante más bajo.

## 5. Modelos no verificables o con pocos datos
- **Composer 2.5**: no aparece en AA (II ni Coding Agent v1.5), ni en LMArena, SWE-bench Verified/Pro, LiveCodeBench o Aider. Solo hay cifras del proveedor (SWE-bench Multilingual 79.8%, Terminal-Bench 2.0 69.3%) y CursorBench 4.0 (27.7%).
- **GPT-5.3 Codex**: su AA II de 33 es una estimación de AA. No aparece en CursorBench 4.0 ni en Coding Agent v1.5.
- **GPT-5.5, Gemini 3.1 Pro, Kimi K3**: no están en CursorBench 4.0. Gemini 3.1 Pro figura en AA como "Preview", con índice 30.
- **Grok 4.7 y Grok 4.6**: sin SWE-bench Verified/Pro públicos.
- **Claude Sonnet 5.5**: lanzado el 28-sep-2026; aún no figura en LMArena Text ni en LiveCodeBench.
- **Aider Polyglot**: sin dato para todos (tabla sin actualizar desde nov-2025).
- **Disponibilidad en Cloud Agents**: Cursor no publica la lista "curada", así que no pude verificar que los 17 estén ahí.

## 6. Limitaciones
1. Los SWE-bench Pro de los modelos 2026 son casi todos **del proveedor** [P], con harness y esfuerzo distintos. La tabla independiente de Scale no tiene entradas nuevas desde julio de 2026. No son comparables entre proveedores.
2. **CursorBench** es de Cursor: privado y no reproducible. Aun así, es el único que mide el harness real de Cursor. Los costos por tarea están a precio de API y **no reflejan el beneficio del pool Cursor Models** para Grok y Composer.
3. El AA Coding Agent Index depende del harness (Claude Code, Codex, Grok Build, etc.), que no es el de Cursor.
4. Los Elo de LMArena tienen intervalos de ±6 a ±17 puntos. Las diferencias menores a unos 20 puntos no son significativas, y algunos modelos están marcados como "Preliminary".
5. Cursor no publica cuánto uso en dólares incluye Pro+ en cada pool, por lo que la ventaja de Grok y Composer no se puede cuantificar.
6. El precio de GPT-5.6 Sol es promocional hasta el 21-nov-2026.
7. Varios modelos (Sonnet 5.5, Opus 5.5, Grok 4.7) salieron hace menos de dos semanas. Sus rankings pueden moverse.
8. El dato de LiveCodeBench viene de un espejo (BenchLM) de la ejecución de Vals AI, con snapshot del 01-sep-2026. Por eso no incluye los modelos lanzados después.

## 7. Fuentes (todas consultadas el 30-sep-2026)
- Cursor, modelos y precios: https://cursor.com/docs/models (sin fecha en la página)
- Cursor, Cloud Agents: https://cursor.com/docs/cloud-agent
- Cursor, pricing: https://cursor.com/pricing
- CursorBench 4.0: https://cursor.com/cursorbench (changelog del 10-sep-2026; incluye modelos del 22 y 28 de septiembre)
- Composer 2.5 [P]: https://cursor.com/composer · https://cursor.com/blog/composer-2-5
- Grok 4.7 [P]: https://x.ai/news/grok-4-7 (21-sep-2026) · https://cursor.com/blog/grok-4-7
- Sonnet 5.5 [P]: https://www.anthropic.com/claude-sonnet-5-5 (28-sep-2026)
- Artificial Analysis, Intelligence Index v4.3.2, HLE, GPQA, SciCode, Terminal-Bench 4.0 y precios: https://artificialanalysis.ai/leaderboards/models · https://artificialanalysis.ai/models · https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index
- AA, artículo sobre Opus 5.5: https://artificialanalysis.ai/articles/claude-opus-5-5 (22-sep-2026)
- AA Coding Agent Index v1.5: https://artificialanalysis.ai/agents/coding
- LMArena WebDev overall: https://arena.ai/leaderboard/code/webdev/overall (30-sep-2026)
- LMArena Text: https://arena.ai/leaderboard/text (25-sep-2026)
- SWE-bench Pro (recopilación de autorreportes): https://benchlm.ai/benchmarks/swe-bench-pro (30-sep-2026) · https://llm-stats.com/benchmarks/swe-bench-pro (23-sep-2026)
- SWE-bench Pro oficial (Scale): https://scale.com/leaderboard/swe_bench_pro_public
- SWE-bench Verified: https://llm-stats.com/benchmarks/swe-bench-verified (30-sep-2026, todo autorreportado)
- LiveCodeBench (Vals AI, espejo en BenchLM): https://benchlm.ai/benchmarks/valsLiveCodeBench (01-sep-2026)
- Aider Polyglot: https://aider.chat/docs/leaderboards/ (última actualización 20-nov-2025)
- OpenRouter vía RankRadar: https://ai-rank-radar.vercel.app/ (30-sep-2026)
