# Publicação manual no GitHub Pages

## Visão geral

O projeto foi preparado para gerar um pacote estático e autossuficiente em `dist/public`. Esse pacote contém HTML, JavaScript, estilos e todas as imagens usadas no site. Para atualizar a versão pública, gere o pacote novamente e envie o conteúdo dessa pasta para a branch de publicação.

Para este repositório, a versão pública é servida em `https://selvabrasil.github.io/gestao-obra-site/`. A compilação considera esse caminho-base para que a página inicial e os ativos sejam encontrados corretamente.

> O pacote produzido por `pnpm build:pages` não deve ser editado manualmente. Faça alterações nos arquivos do projeto e gere uma nova versão antes de cada atualização.

## Publicação inicial

Primeiro, crie um repositório no GitHub e envie o código-fonte do site para o branch principal. Em contas gratuitas do GitHub, o repositório precisa estar público para usar GitHub Pages.[1]

Na cópia local do repositório, instale as dependências e gere o pacote de publicação:

```bash
pnpm install
pnpm build:pages
```

Em seguida, crie uma branch exclusiva para o site publicado e envie o conteúdo de `dist/public` para ela. O bloco a seguir cria a branch `gh-pages`, remove os arquivos do código-fonte nessa branch e adiciona apenas os arquivos estáticos gerados:

```bash
git checkout --orphan gh-pages
git rm -rf .
cp -R dist/public/. .
git add -A
git commit -m "Publicar GestãoObra"
git push -u origin gh-pages
git checkout main
```

No repositório do GitHub, abra **Settings → Pages**. Em **Build and deployment**, escolha a opção de publicação por branch, selecione `gh-pages` e a pasta `/ (root)`, e salve. O endereço público será informado pelo GitHub na própria tela de configuração.[2]

## Atualizações futuras

Sempre que modificar o site, mantenha o código-fonte no branch `main` e siga este fluxo:

```bash
pnpm build:pages
git checkout gh-pages
git rm -rf .
cp -R dist/public/. .
git add -A
git commit -m "Atualizar site"
git push
git checkout main
```

## Verificação antes do envio

Antes de atualizar a branch `gh-pages`, confirme que `pnpm check` e `pnpm build:pages` terminaram sem erros. O pacote de publicação deve conter `index.html`, a pasta `assets`, a pasta `site-assets` e o arquivo `.nojekyll`.

## Referências

[1]: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages "GitHub Docs — Using custom workflows with GitHub Pages"
[2]: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site "GitHub Docs — Configuring a publishing source for your GitHub Pages site"
