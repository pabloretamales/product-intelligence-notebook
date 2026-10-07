---
title: "Apps con Sign in with ChatGPT que gastan el plan"
summary: "Al 6-oct-2026, Kilo Code, Amp, OpenCode, Warp y v0 documentan inferencia contra el allowance de ChatGPT Plus/Pro. El login de identidad no basta: el gasto del plan es un permiso aparte."
tags:
  - tools
  - openai
  - comparison
  - pricing
created: "2026-10-06"
updated: "2026-10-06"
agent: "Joan Jett"
sources:
  - title: "OpenAI — Sign in with ChatGPT quickstart"
    url: "https://developers.openai.com/siwc/quickstart"
  - title: "OpenAI Help Center — Sign in with ChatGPT"
    url: "https://help.openai.com/en/articles/20001410-sign-in-with-chatgpt"
  - title: "OpenAI — plan usage (OSS / local)"
    url: "https://developers.openai.com/siwc/token-sharing-open-source"
  - title: "OpenAI Cookbook — Sign in with ChatGPT"
    url: "https://developers.openai.com/cookbook/articles/sign-in-with-chatgpt"
  - title: "Kilo — OpenAI ChatGPT Plus/Pro"
    url: "https://kilo.ai/docs/ai-providers/openai-chatgpt-plus-pro"
  - title: "Amp — The Dial"
    url: "https://ampcode.com/docs/the-dial"
  - title: "OpenCode — providers"
    url: "https://opencode.ai/docs/providers/"
  - title: "Warp — Sign in with ChatGPT"
    url: "https://www.warp.dev/blog/sign-in-to-warp-with-chatgpt"
  - title: "v0 — ChatGPT"
    url: "https://v0.app/docs/chatgpt"
  - title: "Devin — Sign in with ChatGPT"
    url: "https://devin.ai/blog/sign-in-with-chatgpt"
  - title: "Notion — usar el plan de ChatGPT con Notion Agent"
    url: "https://www.notion.com/help/use-your-chatgpt-plan-with-notion-agent"
  - title: "The New Stack — Sign in with ChatGPT"
    url: "https://thenewstack.io/sign-in-with-chatgpt/"
---

Nota de archivo al 6 de octubre de 2026 (America/Santiago, UTC-3). Apps donde se puede autenticar con una cuenta de ChatGPT **y** gastar el allowance del plan Plus/Pro (Work/Codex) o los créditos asociados. Quedan fuera los logins que solo identifican a la persona.

**Método.** Búsqueda web y lectura de documentación oficial de OpenAI y de páginas de producto, el 6-oct-2026. No se ejecutaron flujos OAuth ni se midió consumo en vivo. La lista de socios anunciada en el DevDay del 29-sep-2026 está en [OpenAI DevDay 2026: socios de Sign in with ChatGPT](/notes/openai-devday-2026-partner-ecosystem). Esta nota parte de las docs de cada producto y separa identidad de gasto de plan.

## 1. Mecanismo oficial

El programa se llama **Sign in with ChatGPT** (SIWC).

Documentación usada:

- Quickstart: https://developers.openai.com/siwc/quickstart
- Help Center: https://help.openai.com/en/articles/20001410-sign-in-with-chatgpt
- Uso del plan (OSS / local): https://developers.openai.com/siwc/token-sharing-open-source
- Cookbook: https://developers.openai.com/cookbook/articles/sign-in-with-chatgpt

Son dos capacidades distintas.

| Capacidad | Qué otorga | Scopes típicos |
|---|---|---|
| **Identity** | Login con cuenta ChatGPT (nombre, email, foto) | `openid profile email` |
| **ChatGPT plan usage** (“token sharing” / “Use your ChatGPT plan”) | Inferencia elegible contra el allowance de Plus/Pro (Work/Codex) y, según settings, créditos | además: `offline_access resource.invoke chatgpt.tokens.use.direct`, `resource=https://api.openai.com/v1` |

Notas tomadas de la documentación oficial:

- El login de identidad no implica uso del plan. El permiso de plan se autoriza aparte.
- No da acceso a conversaciones, memoria ni a la API key del usuario.
- Elegible para **ChatGPT Plus y Pro** en apps participantes.
- El uso se gestiona en ChatGPT: **Settings → Usage / App Limits** (cuota semanal por app, default 100%).
- Flujo OAuth 2.0 / OIDC con PKCE. Issuer: `https://auth.openai.com`.
- Comerciales y hosted: partners aprobados (trial limitado). OSS y local: self-serve con `dynamic_agent_client`.
- La inferencia va por la **Responses API** con el access token OAuth, no con una API key de Platform.
- Partners de **plan usage** anunciados en el DevDay del 29-sep-2026 (cobertura de The New Stack y listas secundarias): Amp, Conductor, Dactyl, Devin, Hermes Agent, Hyperagent, Kilo Code, Notion, Vercel, Vorflux, Warp, más los OSS OpenClaw, OpenCode, Pi y T3. Lovable figura como “coming soon”.
- Partners de **solo identidad** (julio 2026 y Help Center): Airtable, GitLab, HubSpot, Notion (después también plan usage), Supabase, Vercel (después también plan usage), Canva y otros. Sin evidencia de plan usage no cuentan como gasto del plan.

## 2. Cinco apps para usar el allowance

Orden por utilidad práctica para aprovechar el allowance de ChatGPT: agentes de código, documentación clara y poca fricción. No es un ranking por cobertura.

### 2.1 Kilo Code

| Campo | Detalle |
|---|---|
| **Qué hace** | Agente de código en VS Code, JetBrains y CLI; gateway multi-modelo; Cloud Agents y reviews. Adquirido por Anaconda. |
| **SSO y créditos** | Sí. “Continue with ChatGPT” para el login. BYOK **OpenAI (ChatGPT subscription)** o el provider local “OpenAI – ChatGPT Plus/Pro”. Las requests elegibles usan el allowance de ChatGPT, sin créditos Kilo ni API key de Platform. Si se agota el límite de ChatGPT, hay error: no hay fallback automático a créditos Kilo. |
| **URL** | Docs: https://kilo.ai/docs/ai-providers/openai-chatgpt-plus-pro · Landing: https://kilo.ai/use-chatgpt-subscription-in-kilo |
| **Activo** | Sí (docs al día; BYOK y App Limits de OpenAI). |
| **Madurez** | Alta. Docs de billing, límites y reconexión muy completas; producto de IDE maduro. |
| **Evidencia** | Docs oficiales de Kilo citadas arriba. |

### 2.2 Amp (Amp Code)

| Campo | Detalle |
|---|---|
| **Qué hace** | Agente de código (CLI y web) con “Dial” (low / medium / high / ultra), orbs remotos y model routing. |
| **SSO y créditos** | Sí. Model Routing → ChatGPT subscription, o `amp config model-providers add-chatgpt-subscription`. El uso de modelos OpenAI soportados se factura al plan de ChatGPT. Los créditos Amp cubren roles o modelos fuera de la suscripción. El plan Hobby es **gratis** con suscripción de ChatGPT (los orbs van aparte). |
| **URL** | https://ampcode.com/ · Dial: https://ampcode.com/docs/the-dial · Routing: https://ampcode.com/docs/customize/model-routing · Free Agent: https://ampcode.com/news/free-agent |
| **Activo** | Sí. |
| **Madurez** | Alta. Producto comercial con docs detalladas de routing y presets “ChatGPT Only”. |
| **Evidencia** | Docs de Amp y mención como launch partner del DevDay (The New Stack). |

### 2.3 OpenCode

| Campo | Detalle |
|---|---|
| **Qué hace** | Agente de código open source (TUI, desktop e IDE); multi-provider. |
| **SSO y créditos** | Sí. La homepage dice “ChatGPT Plus/Pro — Log in with OpenAI to use your ChatGPT Plus or Pro account”. En docs, `/connect` → OpenAI → **ChatGPT Plus/Pro** (OAuth en el browser) frente a API key manual. Aparece como partner de plan usage. |
| **URL** | https://opencode.ai/ · Providers: https://opencode.ai/docs/providers/ |
| **Activo** | Sí (docs con “Last updated: Oct 6, 2026”). |
| **Madurez** | Alta como OSS y muy usado. La integración SIWC “oficial” es posterior al DevDay. Conviene confirmar en el build propio que el flujo es el token-sharing nuevo y no el OAuth Codex legacy. |
| **Evidencia** | Homepage y docs de providers; lista de partners (The New Stack y reporting secundario). |

### 2.4 Warp

| Campo | Detalle |
|---|---|
| **Qué hace** | Terminal y Warp Agent CLI (código, comandos, edits y reviews en la terminal). |
| **SSO y créditos** | Sí. Blog oficial del 29-sep-2026: Sign in with ChatGPT en Warp Terminal y en Agent CLI. El uso sale del **Work and Codex** incluido en la suscripción. |
| **URL** | https://www.warp.dev/blog/sign-in-to-warp-with-chatgpt · Producto: https://www.warp.dev/ |
| **Activo** | Sí (anuncio del DevDay). |
| **Madurez** | Alta como terminal. La integración de plan usage es reciente (lanzamiento alrededor del 29-sep-2026). |
| **Evidencia** | Blog oficial de Warp. |

### 2.5 v0 (Vercel)

| Campo | Detalle |
|---|---|
| **Qué hace** | Generación e iteración de UI y apps web (producto de Vercel). |
| **SSO y créditos** | Sí. Las docs de v0: al conectar ChatGPT Plus/Pro, las respuestas de IA elegibles cuentan contra el **plan de ChatGPT** en lugar de créditos v0. Imágenes, subagents y trabajo de soporte pueden seguir consumiendo créditos v0. Al agotar el plan, la generación **se pausa**: no pasa sola a créditos v0. |
| **URL** | https://v0.app/docs/chatgpt · Changelog de SIWC en Vercel (identidad, julio 2026): https://vercel.com/changelog/sign-in-with-chatgpt-is-now-available-on-vercel |
| **Activo** | Sí. |
| **Madurez** | Alta (producto de Vercel). El plan usage está documentado de forma explícita en las docs de v0. |
| **Evidencia** | https://v0.app/docs/chatgpt |

## 3. Menciones con más fricción

Fuera del grupo anterior, o con más condiciones para usar el plan.

| App | Por qué aparece | Caveat y evidencia |
|---|---|---|
| **Devin (Cognition)** | Cloud, Desktop y CLI. Los modelos OpenAI del mix cuentan al plan de ChatGPT. | Requiere **Devin Pro, Max o Teams** (no el plan free). Blog: https://devin.ai/blog/sign-in-with-chatgpt |
| **Notion Agent** | El plan de ChatGPT reemplaza créditos de Notion al elegir un modelo GPT. | Workspace **Business o Enterprise**. No aplica a Custom Agents. https://www.notion.com/help/use-your-chatgpt-plan-with-notion-agent |
| **Pi, OpenClaw y T3** | OSS con plan usage en la lista del DevDay. | La madurez de SIWC varía por release. No se re-verificaron en profundidad en esta pasada. |
| **Dactyl, Conductor, Hermes, Hyperagent y Vorflux** | Están en la lista de partners. | Menos documentación pública de billing verificada en esta pasada. |
| **Lovable** | “Coming soon” en los anuncios. | **No activo** para plan usage al 30-sep-2026, según el reporting. |

**No confundir.** Airtable, GitLab, HubSpot, Supabase y Canva son sobre todo **Sign in** de identidad, sin gasto del plan de ChatGPT, salvo evidencia posterior.

## 4. Qué quedó sin verificar

1. **Directorio oficial vivo de OpenAI** con la lista exacta “plan usage frente a sign-in only” en una sola página de Help o marketing. Se usaron el quickstart, el Help de identidad, The New Stack citando a OpenAI y las docs de cada producto.
2. **OpenCode.** Si el OAuth “ChatGPT Plus/Pro” de `/connect` ya es en todas las versiones el scope `chatgpt.tokens.use.direct` de SIWC, o si alguna versión sigue en el bridge Codex legacy. Homepage y docs afirman cuenta Plus/Pro, y la lista de partners lo incluye.
3. **Cuotas exactas** actuales de Plus frente a Pro (ventana de cinco horas y tope semanal) y la política de “credits balance” por app. El Help menciona rates, límites y créditos de la suscripción. Los números vivos dependen de Settings de cada usuario.
4. **Apps menores** de la lista del DevDay (Dactyl, Conductor, Hermes Agent, Hyperagent, Vorflux, T3, OpenClaw y Pi): no se leyó en profundidad la documentación de billing de cada una.
5. **Estado de Lovable** “coming soon”: no confirmado en vivo al 6-oct-2026.
6. **ChatGPT Enterprise y Business** y las políticas de admin (External access): no auditadas por organización.
7. No se probaron flujos OAuth reales ni se midió consumo en vivo. La evidencia es documental.
