# Diagnóstico de publicação — GitHub Pages

## Estado observado

O GitHub Pages reconheceu a branch `gh-pages` e concluiu a compilação sem erro. Porém, o endereço público continuou a renderizar a tela interna de página não encontrada da aplicação, apesar de o arquivo `index.html` estar presente.

## Próxima verificação

É necessário comparar o `index.html` e o JavaScript entregues pelo endereço público com os arquivos do commit mais recente da branch `gh-pages`. Isso permitirá identificar se o problema está em cache de publicação, no bundle servido ou em uma regra de rota ainda presente no artefato estático.
