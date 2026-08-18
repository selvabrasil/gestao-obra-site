# GestãoObra

Landing page do aplicativo Android **GestãoObra**, criado para registrar materiais, mão de obra e custos indiretos de uma construção, com relatórios, exportação de dados e armazenamento local no aparelho.

## Desenvolvimento local

Instale as dependências com `pnpm install` e execute `pnpm dev`. Para verificar tipos, use `pnpm check`.

## Publicação manual no GitHub Pages

O comando `pnpm build:pages` gera uma versão estática autossuficiente em `dist/public`. O pacote já contém as imagens necessárias, caminhos relativos compatíveis com GitHub Pages e o arquivo `.nojekyll`.

O procedimento detalhado de atualização manual está em [docs/github-pages-deployment.md](docs/github-pages-deployment.md).
