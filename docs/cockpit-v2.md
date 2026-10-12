# Cockpit v2 e o cvb-jupyter-theme

## O que é o Cockpit v2

O Cockpit é o console operacional da cloudvBOX, centrado no chat com IA: painel do ambiente,
terminal integrado ao chat, agentes, arquivos e integrações, editor, diagramas e projetos, mais
um **Admin** (usuários, presets de acesso, projetos, mensagens de bloqueio, relatórios, pontuação
e auditoria). A revisão v2 (handoff de 2026-10-12) substitui a v1 e traz uma paleta **grafite**
com um único tom de interação, o **accent-ink** teal.

Em 2026-10-12 o dono decidiu que essa paleta não é só do Cockpit: o accent-ink v2 **substitui o
ciano de marca `#55FCFF` e o teal v1 `#006D6F`** como cor de interação/primária em **todo o
design system da plataforma** (`@cvb/console-design` 0.2.0, em andamento).

## Relação deste repositório com o Cockpit v2

O `cvb-jupyter-theme` é o tema escuro cloudvBOX para Jupyter Notebook e JupyterLab (CSS, um
template e scripts de front). Ele **não é** serviço nem ferramenta acionada pelo chat, pelo painel
Commands ou por MCP do Cockpit: a relação é de **UI que segue a paleta do DS v2**, para que o
Jupyter aberto a partir da plataforma tenha a mesma cor de interação do Cockpit.

## Paleta aplicada

| Token v2 | Dark | Light | Neste repositório |
|---|---|---|---|
| accent-ink | `#3FD1B9` | `#0E6E66` | `--cloudvbox-primary` / `--cloudvbox-primary-rgb` (`63, 209, 185`) |

- O tema é só escuro, então usa o valor **dark** `#3FD1B9`. O valor light `#0E6E66` fica anotado
  junto ao token para uma futura variante clara.
- Tudo o que era ciano (texto de destaque, bordas de foco, seleção, prompts, links, brilho) passa
  a vir do token: `var(--cloudvbox-primary)` e `rgba(var(--cloudvbox-primary-rgb), a)`.
- Arquivos de token: `static/css/common.css` (importado por `lab.css` e `notebook.css`) e os
  temas avulsos do JupyterLab `static/css/custom.css` e `static/css/lab2.css`, que não importam
  o `common.css` e por isso declaram o token no próprio `:root`.
- **Fora do escopo desta mudança:** fundos, superfícies, textos e o azul dos botões continuam os
  da v1 (`#012837`, `#1f2937`, `#3b82f6`…). A migração para as superfícies grafite da v2 é passo
  seguinte, a fazer junto com o `@cvb/console-design` 0.2.0.

## O gate

`scripts/check-cockpit-v2.sh` (POSIX sh + grep, sem dependência) roda no CI
(`.github/workflows/cockpit-v2.yml`, em push e pull request) e localmente:

```bash
sh scripts/check-cockpit-v2.sh
```

Ele percorre os arquivos de UI versionados (css, scss, sass, less, html, svelte, vue, ts/tsx,
js/jsx, json) e falha quando:

1. aparece a cor v1: `#55FCFF` ou `#006D6F`, sem diferenciar maiúsculas, ou as formas rgb
   `85, 252, 255` e `0, 109, 111`;
2. aparece o literal do accent-ink (`#3FD1B9`, `#0E6E66`, `63, 209, 185`, `14, 110, 102`) fora
   dos arquivos de token. O valor de reserva de um `var()`
   (`var(--cloudvbox-primary, #3FD1B9)`, usado em `static/js/custom_lab.js`) é aceito.

A lista de arquivos de token pode ser sobrescrita com `COCKPIT_V2_TOKEN_FILES`. Se o
repositório deixar de ter arquivos de UI, o gate passa e diz que não havia nada a verificar.

O gate não proíbe os demais literais de cor (cinzas, azul dos botões), que ainda estão espalhados
pelos CSS: isso entra com a migração das superfícies.

## O que ainda está aberto

Decisões do dono ainda não tomadas; este repositório **não** as resolve:

- **Fonte:** a v2 usa a pilha do sistema (SF Pro / Segoe UI) e o contrato do DS é IBM Plex auto-hospedada.
  Até decidir, vale IBM Plex. Este tema não muda fontes.
- **Revisão de boas práticas** (`docs/cockpit-v2/best-practices-review.md`): itens aguardando Sim / Não / Depois.
- **Estratégia multissetor** (`docs/cockpit-v2/multi-sector-strategy.md` §8): manifest-first ou
  screens-first, setores piloto, nome do "Action console", perspectivas e conectores iniciais.
- **Conflitos C-1..C-11** entre v1 e v2, listados no `CLAUDE.md` e em `docs/00-requisitos/business-rules-v2.md` do handoff.

## Referências (repositório do handoff)

- Handoff: [https://github.com/cloudvBOX/cvb-cockpit-design](https://github.com/cloudvBOX/cvb-cockpit-design) (`README.md` §6, tokens v2; `CLAUDE.md`, decisões abertas)
- [`docs/cockpit-v2/`](https://github.com/cloudvBOX/cvb-cockpit-design/tree/main/docs/cockpit-v2)
- [`docs/00-requisitos/business-rules-v2.md`](https://github.com/cloudvBOX/cvb-cockpit-design/blob/main/docs/00-requisitos/business-rules-v2.md)
