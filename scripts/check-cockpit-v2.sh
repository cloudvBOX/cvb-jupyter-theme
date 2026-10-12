#!/bin/sh
# Gate da paleta Cockpit v2 (docs/cockpit-v2.md). POSIX sh + grep, sem dependência.
#
# Falha quando um arquivo de UI versionado:
#   1. contém a cor de interação v1: ciano #55FCFF ou teal #006D6F, em hex ou na
#      forma rgb (85,252,255 / 0,109,111), sem diferenciar maiúsculas;
#   2. contém o literal do accent-ink v2 (#3FD1B9 dark, #0E6E66 light, ou
#      63,209,185 / 14,110,102) fora dos arquivos de token. Fora deles a cor vem
#      do token: var(--cloudvbox-primary) e rgba(var(--cloudvbox-primary-rgb), a).
#      O valor de reserva de um var() (var(--cloudvbox-primary, #3FD1B9)) é aceito.
#
# Arquivos de token (sobrescreva com COCKPIT_V2_TOKEN_FILES, separados por espaço):
#   static/css/common.css  tokens do tema (importado por lab.css e notebook.css)
#   static/css/custom.css  tema avulso do JupyterLab (user-settings), sem import do common
#   static/css/lab2.css    idem, variante de caminho
#
# Uso: sh scripts/check-cockpit-v2.sh   (na raiz do repositório)

set -u

TOKEN_FILES=${COCKPIT_V2_TOKEN_FILES:-"static/css/common.css static/css/custom.css static/css/lab2.css"}

V1='#55fcff|#006d6f|(^|[^0-9])85 *, *252 *, *255([^0-9]|$)|(^|[^0-9])0 *, *109 *, *111([^0-9]|$)'
V2='#3fd1b9|#0e6e66|(^|[^0-9])63 *, *209 *, *185([^0-9]|$)|(^|[^0-9])14 *, *110 *, *102([^0-9]|$)'
FALLBACK='var\( *--cloudvbox-primary(-rgb)? *,'

cd "$(dirname "$0")/.." || exit 2

if git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  LIST=$(git ls-files)
else
  LIST=$(find . -type f ! -path './.git/*' | sed 's|^\./||')
fi

UI=$(printf '%s\n' "$LIST" | grep -iE '\.(css|scss|sass|less|html?|svelte|vue|tsx|jsx|ts|js|json)$' || true)

if [ -z "$UI" ]; then
  echo "cockpit-v2: nenhum arquivo de UI versionado; nada a verificar."
  exit 0
fi

fail=0
n=0
for f in $UI; do
  [ -f "$f" ] || continue
  n=$((n + 1))
  hits=$(grep -niE "$V1" "$f" || true)
  if [ -n "$hits" ]; then
    printf '%s\n' "$hits" | sed "s|^|cockpit-v2: cor v1 em $f:|"
    fail=1
  fi
  is_token=0
  for t in $TOKEN_FILES; do
    [ "$f" = "$t" ] && is_token=1
  done
  if [ "$is_token" -eq 0 ]; then
    hits=$(grep -niE "$V2" "$f" | grep -viE "$FALLBACK" || true)
    if [ -n "$hits" ]; then
      printf '%s\n' "$hits" | sed "s|^|cockpit-v2: literal do accent-ink fora do token em $f:|"
      fail=1
    fi
  fi
done

if [ "$fail" -ne 0 ]; then
  echo "cockpit-v2: FALHOU. Use a paleta v2 pelos tokens (docs/cockpit-v2.md)."
  exit 1
fi
echo "cockpit-v2: ok ($n arquivos de UI verificados; tokens: $TOKEN_FILES)"
