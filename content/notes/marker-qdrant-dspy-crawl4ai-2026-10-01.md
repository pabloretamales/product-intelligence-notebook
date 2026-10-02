---
title: "Marker, Qdrant, DSPy y Crawl4AI"
summary: "Ficha al 1-oct-2026 de cuatro piezas open source para un pipeline RAG: Crawl4AI (web a Markdown), Marker (documentos a Markdown o JSON), Qdrant (base vectorial) y DSPy (programas LLM con optimización). El código tiene licencia permisiva; los pesos de Marker usan OpenRAIL-M."
tags:
  - tools
  - comparison
  - rag
created: "2026-10-01"
updated: "2026-10-02"
agent: "Joan Jett"
sources:
  - title: "Marker"
    url: "https://github.com/datalab-to/marker"
  - title: "Datalab"
    url: "https://www.datalab.to"
  - title: "Datalab — docs"
    url: "https://documentation.datalab.to"
  - title: "Datalab — pricing"
    url: "https://www.datalab.to/pricing"
  - title: "Qdrant"
    url: "https://github.com/qdrant/qdrant"
  - title: "Qdrant — pricing"
    url: "https://qdrant.tech/pricing"
  - title: "Qdrant MCP server"
    url: "https://github.com/qdrant/mcp-server-qdrant"
  - title: "Qdrant MCP — docs"
    url: "https://qdrant.tech/documentation/qdrant-mcp-server/"
  - title: "DSPy"
    url: "https://github.com/stanfordnlp/dspy"
  - title: "DSPy — docs"
    url: "https://dspy.ai"
  - title: "Crawl4AI"
    url: "https://github.com/unclecode/crawl4ai"
  - title: "Crawl4AI Cloud"
    url: "https://crawl4ai.com"
  - title: "Crawl4AI — docs OSS"
    url: "https://docs.crawl4ai.com"
---

Nota de archivo al 1 de octubre de 2026 (America/Santiago, UTC-3). Cuatro proyectos maduros que cubren un pipeline de RAG de punta a punta: crawl web, parseo de documentos, base vectorial y optimización de programas LLM. Ninguno es un lanzamiento de esa semana. Las estrellas son una foto de las páginas públicas de GitHub el 1-oct-2026.

**Método.** README, sitios oficiales, páginas de precios y docs, leídos el 1-oct-2026. No se re-ejecutó olmOCR ni un bench de RAG, ni se midió latencia propia. "Claim del sitio" o "claim del README" significa que la cifra la publica el proyecto y aquí no se reprodujo.

Pasarelas y auditorías para que un agente actúe sobre otras apps están en otra nota: [Wirable, ByteAsk y Weavz.io](/notes/wirable-byteask-weavz-2026-10-01).

## 1. Crawl4AI

Crawler asíncrono open source que convierte páginas en **Markdown pensado para LLMs** (RAG, agentes, pipelines). También existe **Crawl4AI Cloud** (API y MCP) con scrape, search, extract, batch/jobs, recipes y monitors. El README cita la release **v0.9.4 (23-sep-2026)**.

| Recurso | URL |
|---|---|
| GitHub | https://github.com/unclecode/crawl4ai |
| Cloud | https://crawl4ai.com |
| Docs de la API | https://crawl4ai.com/docs |
| Docs OSS | https://docs.crawl4ai.com |
| MCP cloud | `https://api.crawl4ai.com/mcp` |

**Licencia: Apache 2.0.** El self-host y el Docker propio no tienen tarifa de software.

Precios cloud leídos de `GET https://api.crawl4ai.com/v1/prices` el 1-oct-2026:

| Concepto | Cifra |
|---|---|
| Crédito | US$0,001 |
| Scrape / extract / jobs y recipes | ~0,20 créditos base |
| Search | ~0,50 créditos base |
| Answer | ~1,00 crédito base |
| Alta | 10.000 créditos (equivalente a US$10) hasta el 31-dic-2026 |
| Packs | US$10 / US$25 / US$100 |

El esfuerzo multiplica esa base (instant 0,5×, heavy 10×, hard 20×, según el API). El propio API avisa que es precio de lanzamiento del primer año y puede cambiar.

| Señal | Dato |
|---|---|
| Estrellas | **~84.596** |
| MCP | Sí, en el cloud (`scrape`, `search`, `answer`, `extract`, jobs, recipes, billing) |
| Rol | Web → Markdown. No parsea PDFs |

A favor: es la pieza open source de más tracción de esta ficha para pasar de crawl a Markdown, y el cloud evita operar browsers y proxies. En contra: el self-host implica browsers, anti-bot y proxies, y el precio por esfuerzo sube en sitios "hard". Hay que respetar robots y los términos del sitio que se crawlea.

## 2. Marker (Datalab)

Convertidor open source de **documentos a Markdown, JSON, chunks y HTML**, para pipelines de LLM y RAG. Acepta PDF, imágenes, PPTX, DOCX, XLSX, HTML y EPUB, con tablas, ecuaciones, formas y links. Corre en GPU, CPU o MPS. Modos `balanced` y `fast`. La opción `--use_llm` (hybrid) llama a Gemini, Claude, un endpoint compatible con OpenAI, u Ollama.

La plataforma gestionada es **Datalab** (https://www.datalab.to): API con procesadores Convert, Segment y Extraction, y SOC 2 Type II. Paquete PyPI: `marker-pdf`. El repo actual es https://github.com/datalab-to/marker (históricamente también VikParuchuri/marker). Docs: https://documentation.datalab.to.

**Licencia dual.** El código es **Apache 2.0**. Los **pesos** usan un **OpenRAIL-M modificado**: research, uso personal y startups por debajo de **US$5 millones** de funding o revenue; por encima, licencia comercial de Datalab. Versiones viejas usaban GPL y otros topes. El README vigente el 1-oct-2026 indica Apache 2.0 más OpenRAIL-M.

Precios de la API (https://www.datalab.to/pricing), no del self-host:

| Plan o procesador | Precio | Notas |
|---|---|---|
| Free | US$0 más un cupo | US$20/mes con email de trabajo, o US$10 con email personal; después, pago por uso |
| Team | US$400/mes | Incluye US$400 de uso; rate limits altos |
| Enterprise | A medida | VPC o air-gapped |
| Convert fast / balanced | US$4 / 1.000 páginas | |
| Convert accurate | US$10 / 1.000 páginas | |
| Startup | 33% de descuento el primer año | Menos de 3 años, menos de US$15 millones de funding, menos de US$5 millones de ARR |

El self-host cuesta la infra y, si aplica, la licencia de los pesos.

| Señal | Dato |
|---|---|
| Estrellas | **~40.145** |
| Creado | ~30-oct-2023 |
| Bench | olmOCR-bench: balanced **76,0%** overall (claim del README; no re-ejecutado) |
| MCP | No publica un servidor MCP. La salida alimenta un pipeline; el modo hybrid llama a un LLM externo |

A favor: calidad alta en documentos difíciles, comunidad grande, y un camino self-host más una API con compliance. En contra: el umbral de los pesos (US$5 millones) hay que leerlo antes de una producción comercial a escala; el self-host es pesado (PyTorch, vLLM o llama.cpp, GPU recomendada para `balanced`); el repo tiene cientos de issues abiertas, en línea con su tamaño.

## 3. Qdrant

Base de datos **vectorial** open source, en Rust, para búsqueda semántica, filtros y cargas RAG. Se puede auto-hospedar o usar **Qdrant Cloud** (AWS, Azure, GCP), Hybrid Cloud y Private Cloud.

| Recurso | URL |
|---|---|
| GitHub | https://github.com/qdrant/qdrant |
| Sitio | https://qdrant.tech |
| Pricing | https://qdrant.tech/pricing |
| MCP | https://github.com/qdrant/mcp-server-qdrant |

**Licencia: Apache 2.0**, también en el servidor MCP.

| Tier | Precio | Notas |
|---|---|---|
| Free | US$0, sin vencimiento publicado | 1 nodo, 0,5 vCPU, 1 GB RAM, 4 GB de disco |
| Standard | Por uso | Dedicado, HA, backups, SLA 99,5% |
| Premium | Mínimo de gasto | SSO, VPC links, SLA 99,9% o más |
| Hybrid / Private | Ventas | Residencia del dato o air-gap |

El binario OSS no tiene tarifa de software. La página de Standard no publica una tabla fija de US$/GB; el precio depende de los recursos.

| Señal | Dato |
|---|---|
| Estrellas del core | **~34.894** |
| Estrellas del MCP | **~1.541** |
| MCP | Oficial: `qdrant-store` y `qdrant-find` vía FastEmbed; transportes stdio, SSE y Streamable HTTP |

El servidor MCP oficial es mínimo al lado de forks de la comunidad que ingieren PDFs enteros. En un pipeline rico, la ingesta sigue afuera (Marker o Crawl4AI, más chunking). Operar un cluster propio pide sharding y snapshots. El mismo hueco lo cubren pgvector, Weaviate, Milvus, Chroma y Pinecone; esta ficha no los compara uno a uno.

## 4. DSPy

Framework Python de Stanford NLP para **programar sistemas con LLMs**: `Signatures` tipadas, `Modules` (`Predict`, `ChainOfThought`, `ReAct` y otros) y `Optimizers` (MIPROv2, GEPA y otros) que compilan prompts —y, si se pide, pesos— contra una métrica y un trainset.

El sitio, leído el 1-oct-2026, cita **DSPy 3.4.0**, con mejoras en PythonInterpreter, GEPA más rápido y **compatibilidad con MCP v2**. Repo: https://github.com/stanfordnlp/dspy. Docs: https://dspy.ai. Instalación: `pip install -U dspy`, Python 3.10 o superior.

**Licencia: MIT** (Stanford Future Data Systems y la comunidad). El framework no tiene precio. El costo es el de las APIs durante la inferencia y durante las corridas de optimización. El sitio ilustra compiles chicos del orden de **~US$2**; el número real depende del modelo y del dataset.

| Señal | Dato |
|---|---|
| Estrellas | **~38.447** |
| Descargas | 5,2 millones o más al mes (claim de dspy.ai) |
| Contribuidores | 461 o más (claim del sitio) |
| En producción | El sitio nombra a Databricks, Shopify, Dropbox, AWS, JetBlue y Replit, entre otros |
| Origen | Paper DSPy 2023; la línea viene de DSP 2022 |

Sirve para optimizar un pipeline de RAG o de agentes cuando hay métrica y ejemplos. No hospeda vectores ni crawlea. Varios proveedores entran por `dspy.LM("provider/model")`. La curva es la de métricas, trainsets y optimizers, y abusar de un modelo frontier en la optimización sale caro. Para un prototipo de un solo prompt, sobra.

## 5. Comparación

| | Crawl4AI | Marker | Qdrant | DSPy |
|---|---|---|---|---|
| Rol | Web → Markdown | Documentos → Markdown / JSON | Base vectorial | Optimizar programas LLM |
| Licencia | Apache 2.0 | Apache 2.0 en el código; OpenRAIL-M en los pesos | Apache 2.0 | MIT |
| Precio | OSS gratis; cloud ~US$0,001/crédito | OSS; API Free a Team US$400/mes | OSS; Cloud Free y luego por uso | Gratis, más el costo del LLM |
| Estrellas (~) | 84,6k | 40,1k | 34,9k (MCP ~1,5k) | 38,4k |
| MCP | Sí, en el cloud | No | Sí, oficial y acotado | MCP v2 citado en 3.4.0 |
| Encaja cuando | Hay que ingestar web | Hay PDFs u office | Hay que buscar por embedding y filtros | Hay métrica y ejemplos etiquetados |

## 6. Pipeline de referencia

```text
Web (Crawl4AI) + documentos (Marker) → chunks → embeddings → Qdrant → aplicación o agente
Calidad de los programas LLM: DSPy, cuando existen una métrica y un trainset
```

Orden de esta ficha, por madurez y por hueco que cubren:

1. **Crawl4AI** como crawler por defecto de este conjunto: Apache 2.0, la base de estrellas más grande, y un MCP cloud para una prueba.
2. **Qdrant** como base vectorial: Apache 2.0, Docker OSS o el tier Free de Cloud.
3. **Marker** para documentos. Self-host o el Free de la API alcanzan para una prueba. Antes de una producción comercial a escala, leer el OpenRAIL-M de los pesos (umbral de US$5 millones de funding o revenue).
4. **DSPy** cuando el pipeline ya tiene una métrica y del orden de decenas de ejemplos etiquetados. No hace falta en cada prototipo.

Weavz.io, en la nota de Product Hunt, es un candidato aparte para gobernar acciones del agente sobre apps de terceros. No sustituye a ninguna de estas cuatro piezas.

## 7. Limitaciones

- Las estrellas son la lectura del 1-oct-2026 en las páginas de GitHub y se mueven cada día.
- No se midió calidad ni latencia. El 76,0% de olmOCR-bench es un claim del README de Marker.
- Qdrant Standard es por uso, sin una tabla pública de US$/GB.
- Crawl4AI Cloud está en precio de lanzamiento; el API dice que puede cambiar.
- Descargas, contribuidores y logos de producción de DSPy son claims de dspy.ai.
