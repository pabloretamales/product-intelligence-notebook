---
title: "Thermos frente a pstack"
summary: "Comparación al 1-oct-2026 de dos plugins de Cursor: Thermos (review de branch con dos rúbricas) y pstack (workflows de ingeniería con modo sticky). Thermos encaja como gate de merge; pstack es condicional porque el modo sticky gasta muchos tokens. Pueden convivir."
tags:
  - cursor
  - tools
  - comparison
created: "2026-10-01"
updated: "2026-10-02"
agent: "Joan Jett"
sources:
  - title: "Thermos — README"
    url: "https://github.com/cursor/plugins/blob/main/thermos/README.md"
  - title: "Thermos — plugin.json"
    url: "https://github.com/cursor/plugins/blob/main/thermos/.cursor-plugin/plugin.json"
  - title: "Thermos — CHANGELOG"
    url: "https://github.com/cursor/plugins/blob/main/thermos/CHANGELOG.md"
  - title: "Thermos — skill"
    url: "https://github.com/cursor/plugins/blob/main/thermos/skills/thermos/SKILL.md"
  - title: "pstack — README"
    url: "https://github.com/cursor/plugins/blob/main/pstack/README.md"
  - title: "pstack — plugin.json"
    url: "https://github.com/cursor/plugins/blob/main/pstack/.cursor-plugin/plugin.json"
  - title: "pstack — guía"
    url: "https://github.com/cursor/plugins/blob/main/pstack/docs/guide/README.md"
  - title: "pstack — setup"
    url: "https://github.com/cursor/plugins/blob/main/pstack/docs/guide/01-setup.md"
  - title: "Cursor plugins marketplace"
    url: "https://github.com/cursor/plugins/blob/main/.cursor-plugin/marketplace.json"
---

Nota de archivo al 1 de octubre de 2026 (America/Santiago, UTC-3). Dos plugins del marketplace de Cursor, leídos desde el repo público [cursor/plugins](https://github.com/cursor/plugins): **Thermos** (review de un branch) y **pstack** (un sistema de workflows de ingeniería). No se instalaron ni se corrieron.

**Método.** README, `.cursor-plugin/plugin.json`, CHANGELOG de Thermos, la guía de setup de pstack y los `SKILL.md` citados. El 1-oct-2026 ninguno de los dos árboles tenía `package.json` ni `mcp.json` (raw 404). El manifiesto es `.cursor-plugin/plugin.json`. Lo que no está en esas fuentes no se da por existente.

## 1. Thermos

Plugin oficial de Cursor para una revisión de branch en dos lentes, lanzadas en paralelo: corrección y seguridad, y mantenibilidad.

| | |
|---|---|
| Autor | Cursor |
| Versión | 1.0.0 |
| Licencia | MIT |
| Categoría | developer-tools |
| Instalación | `/add-plugin thermos` |
| Árbol | https://github.com/cursor/plugins/tree/main/thermos |

### Qué ejecuta

| Pieza | Rol |
|---|---|
| Skill `thermo-nuclear-review` | Bugs, roturas, seguridad, regresiones de devex y leaks de feature flags. Solo código **añadido o modificado** en el diff |
| Skill `thermo-nuclear-code-quality-review` | Mantenibilidad estricta: "code judo", la regla de ~1.000 líneas, spaghetti, boundaries y tipos |
| Skill `thermos` | Lanza los dos subagents en paralelo (`run_in_background: true`) y sintetiza hallazgos deduplicados |
| Agent `thermo-nuclear-review-subagent` | Rúbrica de deep review |
| Agent `thermo-nuclear-code-quality-review-subagent` | Rúbrica de code quality |

El flujo del README: reunir `git diff main...HEAD` más el contenido de los archivos tocados, invocar los dos subagents y sintetizar. Las tres skills traen `disable-model-invocation: true`: hay que invocarlas; no se disparan solas.

Si el review de seguridad tiene hallazgos de prioridad media o alta y existe un PR, la skill indica leer la discusión con `gh` o `glab` e incorporar comentarios de BugBot o de personas. `gh` y `glab` son opcionales.

### Qué no hace

No escribe la feature ni orquesta el trabajo de construcción. No añade servidores MCP.

El `plugin.json` describe "optional take-the-wheel and FSD merge-ready flows". El CHANGELOG 1.0.0 y el árbol de skills solo documentan el trío de review y los dos agents. Esos flujos extra no están en las skills leídas.

### Instalación y migración

Hace falta Cursor con plugins y Task/subagents, y un repo git con branch contra una base (en las docs, `main`).

`cursor-team-kit` antes traía solo `thermo-nuclear-code-quality-review`. Esa skill y su agent viven ahora en Thermos. El README pide **quitar las entradas thermo viejas del team-kit** al instalar Thermos, para no duplicarlas. Fuente: https://github.com/cursor/plugins/blob/main/thermos/README.md.

### A favor y en contra

A favor: el alcance es el diff, las dos rúbricas están escritas, el paralelismo es real y la superficie es chica (3 skills, 2 agents). Licencia MIT, autor Cursor.

En contra: cada doble review gasta dos subagents. No reemplaza un sistema para construir features. Quien espere los flujos "take-the-wheel / FSD" del `plugin.json` no los va a encontrar en la 1.0.0 documentada.

## 2. pstack

Sistema de workflows de ingeniería de **Lauren Tan (poteto)**. El README (https://github.com/cursor/plugins/blob/main/pstack/README.md) lo presenta así: menos código y más calidad, con playbooks, principios y paralelismo de agentes. La autora se identifica ahí con trabajo en Meta, Netflix y Cursor, y con el equipo core de React (React Compiler).

| | |
|---|---|
| Autor | Lauren Tan |
| Versión | 0.15.5 |
| Licencia | MIT |
| Instalación | `/add-plugin pstack` |
| Árbol | https://github.com/cursor/plugins/tree/main/pstack |
| Guía | https://github.com/cursor/plugins/blob/main/pstack/docs/guide/README.md |

### Qué ejecuta

La entrada es **`/poteto-mode`**. Es un **modo sticky**: una vez activado, sigue en los turnos siguientes, entra cuando el pedido calza con un playbook y se aparta cuando no. Se sale diciéndolo. El README dice que combina bien con `/loop` de Cursor.

Elige entre **23 playbooks** (bug fix, perf, feature, refactoring, babysit, shipping, autonomous run, orchestrate, autopilot-full, autopilot-stack, y otros). La tabla completa está en el README. Al final de los demás playbooks, el de "opening a pr" abre el PR.

Skills situacionales, entre otras: `/how`, `/why`, `/architect`, `/arena`, `/swarm`, `/interrogate`, `/tdd`, `/unslop`, `/no-comments`, `/setup-pstack`, `/automate-me`, `/make-bot-ui`, `/create-verification-skill`, `/teach`, `/recall`, `/blast-radius`. **23 principles** (`laziness-protocol`, `prove-it-works`, `boundary-discipline`, y el resto) van indexados dentro de poteto-mode. Agents: `poteto-agent` y Comment Sicko (este último vía `/no-comments`).

`/why` no añade MCPs. En runtime descubre los que ya están conectados y consulta en paralelo categorías de evidencia: source control, issue tracker, docs largas, chat, observabilidad, error tracking y analytics.

`/setup-pstack` escribe `~/.cursor/rules/pstack-models.mdc` con un presupuesto de razonamiento y un modelo por rol (código, juicio, paneles de review). La guía pide un **chat nuevo** después del setup, porque la rule aplica a sesiones nuevas. Los alias `inherit-parent` y `auto` dejan el rol en el modelo del chat padre.

Defaults que el README de 0.15.5 documenta, y que el setup puede cambiar: los delegates de código van a un modelo Grok; juicio y los cambios más duros, a Opus 5.5; el panel por defecto es Opus 5.5 / Sol / Grok. Una rule escrita antes de 0.15.3 deja clavados defaults viejos; hay que borrarla o re-correr el setup.

No viajan en este plugin (el README los manda a `cursor-team-kit`): `/deslop`, `control-cli`, `control-ui`. El pack de automations **benny** (triage de reportes en Slack, luego repro y fix) viene dormido; el setup está en `automations/benny/FOR_AGENTS.md` y no es una slash skill.

El README describe `/make-bot-ui` como una página cuyos botones despiertan un Grok Bot por webhook.

### A favor y en contra

A favor: la guía cubre el camino de un primer task, el modo enruta playbooks en vez de depender de un prompt suelto, `/interrogate` enfrenta el diff a varios modelos, y los modelos por rol se pueden reconfigurar.

En contra: la superficie es grande (decenas de skills, 23 playbooks, 23 principles). El modo sticky cambia el chat. Paneles, `arena`, `swarm` y los playbooks overnight multiplican subagents y tokens. Los defaults de modelo cambian entre versiones 0.15.x. Es un sistema de trabajo, no un review corto.

## 3. Comparación

| | Thermos | pstack |
|---|---|---|
| Versión | 1.0.0 | 0.15.5 |
| Autor | Cursor | Lauren Tan |
| Alcance | Review del diff de un branch o PR | Workflow de ingeniería, de la tarea al PR |
| Piezas | 3 skills, 2 agents | Decenas de skills, 23 playbooks, 23 principles, 2 agents |
| MCP propio | No | No. `/why` usa MCPs ya conectados |
| Setup | `/add-plugin thermos` | Más `/setup-pstack`, una rule de modelos y un chat nuevo |
| Invocación | Manual (`disable-model-invocation: true`) | `/poteto-mode` queda sticky entre turnos |
| Review | Dos rúbricas fijas, una de ellas de seguridad | `/interrogate`: panel multi-modelo y una lente de code quality |
| Tokens | Dos subagents por doble review | Alto: paneles, swarms, corridas overnight, modo sticky |
| Solape entre sí | Gate de merge, acotado al diff | Se solapa en "revisar un diff" y casi no se solapa en el resto |

Thermos no sustituye un orquestador de tareas ni los MCP que el entorno ya tenga. pstack sí ocupa el lugar de un sistema de trabajo del agente: playbooks, modo sticky y paralelismo. Por eso el solape de pstack con un flujo genérico de cloud agents es alto, y el de Thermos es bajo.

`/interrogate` y Thermos miran un diff con métodos distintos. Uno arma un panel de modelos. El otro aplica dos rúbricas fijas, con seguridad explícita y alcance limitado a lo que el PR toca.

## 4. Lectura

1. **Thermos: sí, como gate de merge.** Review acotado al diff, con corrección, seguridad y mantenibilidad, sin MCP propio y con poca superficie. Se invoca en branches sensibles (`/thermos` o la skill `thermos`). Si `cursor-team-kit` todavía tiene la skill thermo vieja, hay que quitarla al instalar.
2. **pstack: condicional.** El modo sticky y el coste de tokens son el condicionante: el panel por defecto usa varios modelos frontier, y `arena`, `swarm` y los playbooks overnight multiplican corridas. Tiene sentido si se va a usar `/poteto-mode` a conciencia, después de `/setup-pstack`, en una tarea con un resultado verificable. Para mejorar solo las reviews, Thermos alcanza. Si el modo sticky compite con playbooks que ya existen, se puede no dejarlo puesto y usar solo `/interrogate`, `/how` o `/why`.
3. **Coexisten.** Construir con poteto-mode; el gate de merge queda en Thermos. `/interrogate` entra cuando hace falta un panel de modelos, no como reemplazo de las dos rúbricas. Instalar los dos sin esa regla mezcla un sistema de trabajo con un review y paga tokens de los dos.

`cursor-team-kit` es un tercer plugin, aparte: Thermos pide limpiar duplicados thermo; pstack no incluye `/deslop`, `control-cli` ni `control-ui`.

## 5. Limitaciones

- Ningún plugin se instaló ni se ejecutó. No hay una medición propia de tokens por review o por playbook.
- La descripción de "take-the-wheel and FSD" en el `plugin.json` de Thermos no tiene skill ni entrada de CHANGELOG en la 1.0.0 leída.
- Los defaults de modelo de pstack son los del README 0.15.5. El propio README dice que una rule anterior a 0.15.3 conserva otros defaults, y que `/setup-pstack` los reemplaza.
- Los nombres de skills situacionales de pstack no son una lista exhaustiva; la tabla viva está en el README.
