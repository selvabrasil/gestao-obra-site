/**
 * Direção visual: Caderno de Obra Editorial — neoeditorial técnico, papel mineral,
 * azul-petróleo e laranja-telha. Priorizar leitura rápida, composição assimétrica e matéria.
 */
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronRight,
  ClipboardList,
  Download,
  FileDown,
  HardHat,
  LockKeyhole,
  Package,
  Plus,
  ShieldCheck,
  Smartphone,
  Users,
  WalletCards,
} from "lucide-react";

const materialCategories = [
  "Fundação e estrutura",
  "Alvenaria",
  "Cobertura",
  "Instalações elétricas",
  "Instalações hidráulicas",
  "Revestimentos",
  "Esquadrias",
  "Pintura",
  "Acabamentos",
  "Equipamentos e ferramentas",
  "Outros",
];

const indirectCategories = [
  "Cartoriais",
  "Prefeitura (alvará)",
  "INSS de obra",
  "Aluguel de residência",
  "Projetos e laudos",
  "Seguros",
  "Energia elétrica",
  "Água",
  "Transporte de materiais",
  "Outros",
];

function SectionTag({ children, tone = "light" }: { children: React.ReactNode; tone?: "light" | "dark" }) {
  return (
    <p
      className={`inline-flex items-center gap-2 border px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] ${
        tone === "dark"
          ? "border-white/25 bg-white/5 text-[#f8f2e9]"
          : "border-[#173f46]/25 bg-[#f8f2e9]/75 text-[#173f46]"
      }`}
    >
      <span className={`h-1.5 w-1.5 ${tone === "dark" ? "bg-[#f3a067]" : "bg-[#e8683f]"}`} />
      {children}
    </p>
  );
}

function PhoneFrame({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`screen-frame ${className}`}>
      <div className="screen-frame__speaker" />
      <img src={src} alt={alt} className="h-full w-full object-cover object-top" />
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f6f0e7] text-[#17343a]">
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>

      <header className="sticky top-0 z-50 border-b border-[#173f46]/10 bg-[#f6f0e7]/92 backdrop-blur-xl">
        <div className="container flex h-[72px] items-center justify-between gap-6">
          <a href="#inicio" className="group flex shrink-0 items-center gap-3" aria-label="Gestão Obra — início">
            <img
              src="/manus-storage/gestao-obra-logo_e73fa381.png"
              alt="Símbolo Gestão Obra"
              className="h-10 w-10 object-contain transition-transform duration-200 group-hover:-rotate-6"
            />
            <span className="leading-none">
              <span className="block font-mono text-[10px] font-bold tracking-[0.18em] text-[#e8683f]">GESTÃO</span>
              <span className="block font-display text-[22px] font-bold tracking-[-0.06em] text-[#173f46]">obra</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Navegação principal">
            <a className="nav-link" href="#recursos">Recursos</a>
            <a className="nav-link" href="#categorias">Categorias</a>
            <a className="nav-link" href="#seguranca">Segurança</a>
            <a className="nav-link" href="#politica">Política</a>
          </nav>

          <a href="#recursos" className="btn-compact group">
            Ver o app <ArrowDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-y-0.5" />
          </a>
        </div>
      </header>

      <main id="conteudo">
        <section id="inicio" className="relative isolate min-h-[720px] overflow-hidden border-b border-[#173f46]/10 lg:min-h-[760px]">
          <div className="absolute inset-0 technical-grid opacity-[0.32]" />
          <img
            src="/manus-storage/gestao-obra-hero_40010623.jpg"
            alt="Celular sobre materiais e planta arquitetônica"
            className="absolute right-0 top-0 h-full w-full object-cover object-[72%_center] opacity-70 lg:w-[74%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f6f0e7] via-[#f6f0e7]/95 via-42% to-[#f6f0e7]/20" />
          <div className="absolute bottom-0 left-[9%] top-0 hidden w-px bg-[#e8683f] lg:block" />

          <div className="container relative flex min-h-[720px] items-center py-16 lg:min-h-[760px] lg:py-20">
            <div className="grid w-full items-center gap-14 lg:grid-cols-[minmax(0,0.88fr)_minmax(340px,0.68fr)] lg:gap-8">
              <div className="max-w-[710px] pt-6 lg:pl-[10%]">
                <SectionTag>Seu caderno financeiro de obra</SectionTag>
                <h1 className="mt-6 max-w-[650px] font-display text-[clamp(3.25rem,7vw,6.4rem)] font-bold leading-[0.88] tracking-[-0.075em] text-[#173f46]">
                  Cada gasto da obra, <span className="text-[#e8683f]">no lugar certo.</span>
                </h1>
                <p className="mt-7 max-w-[560px] text-lg leading-relaxed text-[#406168] sm:text-xl">
                  Registre materiais, mão de obra e custos indiretos. Acompanhe o total, organize contatos e consulte relatórios — tudo no seu Android.
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <a className="btn-primary group" href="#recursos">
                    Conheça os recursos <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a className="btn-secondary" href="#seguranca">
                    <LockKeyhole className="h-4 w-4" /> Dados no aparelho
                  </a>
                </div>
                <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-[#527278]">
                  <span className="inline-flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#e8683f]" /> Registro rápido</span>
                  <span className="inline-flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#e8683f]" /> Relatórios visuais</span>
                  <span className="inline-flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#e8683f]" /> Sem nuvem</span>
                </div>
              </div>

              <div className="relative mx-auto h-[405px] w-[285px] sm:h-[470px] sm:w-[330px] lg:mr-[9%] lg:h-[570px] lg:w-[400px]">
                <div className="absolute -right-11 top-[13%] hidden h-[250px] w-[250px] rounded-full border border-[#e8683f]/35 lg:block" />
                <div className="absolute -left-10 bottom-10 h-[145px] w-[145px] border border-[#173f46]/25 bg-[#f6f0e7]/75 backdrop-blur-sm" />
                <div className="absolute -left-5 bottom-[27%] z-20 border border-[#173f46]/15 bg-[#f8f2e9] px-4 py-3 shadow-[8px_8px_0_#173f46]">
                  <p className="font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-[#60777a]">Visão da obra</p>
                  <p className="mt-1 font-display text-base font-bold text-[#173f46]">total + categorias</p>
                </div>
                <PhoneFrame
                  src="/manus-storage/tela-resumo-app_0b21f99d.jpeg"
                  alt="Tela inicial do aplicativo GestãoObra, com total gasto e categorias de custos"
                  className="relative z-10 h-full w-full rotate-[3deg]"
                />
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 border-t border-[#173f46]/10 bg-[#173f46] text-[#f8f2e9]">
            <div className="ticker-track py-3.5 font-mono text-[10px] font-semibold uppercase tracking-[0.2em]">
              <span>Planeje. Registre. Compare.</span><i /> <span>GestãoObra para Android</span><i /> <span>Controle na palma da mão</span><i /> <span>Dados sob seu controle</span>
            </div>
          </div>
        </section>

        <section id="recursos" className="relative bg-[#fbf8f2] py-24 sm:py-32">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div className="lg:pl-[8%]">
                <SectionTag>Do lançamento ao relatório</SectionTag>
                <h2 className="mt-6 max-w-[420px] font-display text-5xl font-bold leading-[0.92] tracking-[-0.065em] text-[#173f46] sm:text-6xl">
                  Controle que acompanha <span className="text-[#e8683f]">a obra de perto.</span>
                </h2>
                <p className="mt-6 max-w-[450px] leading-relaxed text-[#587278]">
                  O GestãoObra organiza o que acontece de verdade na construção: uma compra urgente, o pagamento de um profissional ou uma taxa que não pode ficar fora do orçamento.
                </p>
                <a href="#categorias" className="mt-8 inline-flex items-center gap-2 font-display text-base font-bold text-[#173f46] underline decoration-[#e8683f] decoration-2 underline-offset-8 transition-colors hover:text-[#e8683f]">
                  Veja as categorias <ChevronRight className="h-4 w-4" />
                </a>
              </div>

              <div className="relative grid gap-3 sm:grid-cols-[0.87fr_1.13fr]">
                <article className="feature-card bg-[#173f46] text-[#f8f2e9] sm:mt-20">
                  <div className="flex items-start justify-between gap-6">
                    <span className="feature-icon bg-[#f3a067] text-[#173f46]"><Plus className="h-5 w-5" /></span>
                    <span className="font-mono text-[10px] tracking-[0.15em] text-[#a8c3c3]">01 / LANÇAR</span>
                  </div>
                  <h3 className="mt-14 font-display text-3xl font-bold leading-none tracking-[-0.05em]">Registre sem complicação</h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#c9d9d6]">Categoria, detalhe, data, valor e observação. Uma rotina simples para não perder nenhum gasto.</p>
                </article>

                <article className="feature-card bg-[#e8683f] text-[#fff7ed]">
                  <div className="flex items-start justify-between gap-6">
                    <span className="feature-icon bg-[#fff7ed] text-[#e8683f]"><WalletCards className="h-5 w-5" /></span>
                    <span className="font-mono text-[10px] tracking-[0.15em] text-[#ffddc9]">02 / ORGANIZAR</span>
                  </div>
                  <h3 className="mt-14 font-display text-3xl font-bold leading-none tracking-[-0.05em]">Separe o que importa</h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#ffeadc]">Materiais, mão de obra e custos indiretos aparecem em seus próprios lugares, prontos para comparar.</p>
                </article>

                <article className="feature-card bg-[#e9e1e9] text-[#173f46] sm:col-span-2 sm:ml-[12%] sm:mr-[8%]">
                  <div className="grid items-center gap-6 sm:grid-cols-[auto_1fr_auto]">
                    <span className="feature-icon bg-[#4f9d91] text-white"><BarChart3 className="h-5 w-5" /></span>
                    <div>
                      <p className="font-mono text-[10px] font-semibold tracking-[0.15em] text-[#667d80]">03 / ENTENDER</p>
                      <h3 className="mt-2 font-display text-3xl font-bold leading-none tracking-[-0.05em]">Enxergue o custo por inteiro</h3>
                    </div>
                    <p className="max-w-[180px] text-sm leading-relaxed text-[#527176]">Gráficos e detalhamento para transformar registros em visão de obra.</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="categorias" className="relative overflow-hidden bg-[#f6f0e7] py-24 sm:py-32">
          <div className="absolute inset-y-0 right-0 hidden w-[39%] lg:block">
            <img src="/manus-storage/gestao-obra-categorias_5c1e4259.jpg" alt="Materiais e elementos de construção organizados" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#f6f0e7] via-[#f6f0e7]/30 to-transparent" />
          </div>
          <div className="container relative">
            <div className="max-w-[780px] lg:pl-[8%]">
              <SectionTag>Classificação feita para a construção</SectionTag>
              <h2 className="mt-6 max-w-[700px] font-display text-5xl font-bold leading-[0.9] tracking-[-0.065em] text-[#173f46] sm:text-6xl">
                Uma obra tem muitas frentes. <span className="text-[#e8683f]">Seu controle também.</span>
              </h2>
            </div>

            <div className="mt-14 grid gap-4 lg:grid-cols-[1.05fr_0.95fr] lg:pl-[8%] lg:pr-[28%]">
              <article className="category-panel border-t-4 border-[#398d84] bg-[#f9fbf9]">
                <div className="flex items-center justify-between gap-4"><span className="category-icon bg-[#d9efeb] text-[#257d73]"><Package className="h-5 w-5" /></span><span className="font-mono text-[10px] font-bold tracking-[0.16em] text-[#5b7875]">MATERIAIS</span></div>
                <h3>Da fundação ao acabamento</h3>
                <p>Classifique as compras de cada etapa e saiba para onde o orçamento está indo.</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {materialCategories.map((item) => <span className="category-chip" key={item}>{item}</span>)}
                </div>
              </article>

              <article className="category-panel border-t-4 border-[#e8683f] bg-[#fff9f4]">
                <div className="flex items-center justify-between gap-4"><span className="category-icon bg-[#ffe4d6] text-[#d9572f]"><HardHat className="h-5 w-5" /></span><span className="font-mono text-[10px] font-bold tracking-[0.16em] text-[#9c654f]">MÃO DE OBRA</span></div>
                <h3>Profissionais e empresas</h3>
                <p>Registre um profissional autônomo ou uma empresa contratada com contexto para a sua obra.</p>
                <div className="mt-7 grid gap-2 text-sm text-[#47666a]">
                  <p className="font-semibold text-[#173f46]">Profissional autônomo</p>
                  <div className="flex flex-wrap gap-2"><span className="category-chip">Pedreiro</span><span className="category-chip">Eletricista</span><span className="category-chip">Encanador</span><span className="category-chip">Pintor</span><span className="category-chip">e outros</span></div>
                  <p className="mt-2 font-semibold text-[#173f46]">Empresa contratada</p>
                </div>
              </article>

              <article className="category-panel border-t-4 border-[#718bc8] bg-[#f5f5fc] lg:col-span-2 lg:mr-[18%]">
                <div className="flex items-start gap-5">
                  <span className="category-icon shrink-0 bg-[#e1e7fb] text-[#5b71b7]"><ClipboardList className="h-5 w-5" /></span>
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-3"><h3 className="!mt-0">Custos indiretos também entram na conta</h3><span className="font-mono text-[10px] font-bold tracking-[0.16em] text-[#6573a2]">INDIRETOS</span></div>
                    <p>Não deixe despesas necessárias fora da visão geral da obra.</p>
                    <div className="mt-5 flex flex-wrap gap-2">{indirectCategories.map((item) => <span className="category-chip" key={item}>{item}</span>)}</div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-[#173f46] py-24 text-[#f8f2e9] sm:py-32">
          <div className="container">
            <div className="grid items-center gap-14 lg:grid-cols-[0.86fr_1.14fr] lg:gap-20">
              <div className="relative mx-auto h-[520px] w-[285px] sm:h-[590px] sm:w-[325px] lg:ml-[18%]">
                <div className="absolute -left-12 top-[19%] h-[240px] w-[240px] border border-[#f3a067]/45" />
                <div className="absolute -right-8 bottom-12 z-20 bg-[#f3a067] px-4 py-3 text-[#173f46] shadow-[7px_7px_0_rgba(248,242,233,0.9)]">
                  <p className="font-mono text-[9px] font-bold uppercase tracking-[0.15em]">Visão clara</p>
                  <p className="mt-1 font-display text-sm font-bold">do total à subcategoria</p>
                </div>
                <PhoneFrame src="/manus-storage/tela-relatorio-app_26ff137f.jpeg" alt="Tela de relatório do GestãoObra, com gráfico de custos e detalhamento" className="relative z-10 h-full w-full -rotate-[3deg]" />
              </div>

              <div className="max-w-[640px]">
                <SectionTag tone="dark">Relatórios da obra</SectionTag>
                <h2 className="mt-6 font-display text-5xl font-bold leading-[0.9] tracking-[-0.065em] text-[#f8f2e9] sm:text-6xl">
                  Não veja só o valor. <span className="text-[#f3a067]">Veja a história do custo.</span>
                </h2>
                <p className="mt-7 max-w-[550px] text-lg leading-relaxed text-[#c8dbd8]">
                  O relatório automático apresenta a distribuição entre materiais, mão de obra e custos indiretos. Você acompanha o total geral e aprofunda a consulta por subcategoria.
                </p>
                <div className="mt-10 grid gap-3 sm:grid-cols-2">
                  <div className="report-point"><BarChart3 className="h-5 w-5 text-[#f3a067]" /><span>Resumo visual com gráfico de gastos</span></div>
                  <div className="report-point"><FileDown className="h-5 w-5 text-[#f3a067]" /><span>Exportação em <strong>.csv</strong> ou <strong>.db</strong></span></div>
                  <div className="report-point"><Download className="h-5 w-5 text-[#f3a067]" /><span>Importe o arquivo <strong>.db</strong> em outro celular</span></div>
                  <div className="report-point"><Users className="h-5 w-5 text-[#f3a067]" /><span>Contatos de prestadores e fornecedores reunidos</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="seguranca" className="relative overflow-hidden bg-[#e6ddd1] py-24 sm:py-32">
          <div className="container relative">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.94fr] lg:gap-24">
              <div className="lg:pl-[10%]">
                <SectionTag>Privacidade por padrão</SectionTag>
                <h2 className="mt-6 max-w-[620px] font-display text-5xl font-bold leading-[0.9] tracking-[-0.065em] text-[#173f46] sm:text-6xl">
                  A sua obra, os seus dados, <span className="text-[#e8683f]">o seu aparelho.</span>
                </h2>
                <p className="mt-7 max-w-[570px] text-lg leading-relaxed text-[#4b686c]">
                  O GestãoObra salva as informações diretamente no dispositivo. Você mantém o controle dos registros e pode levar o seu arquivo <strong>.db</strong> para outro celular quando precisar.
                </p>
                <div className="mt-9 space-y-3">
                  <div className="privacy-line"><ShieldCheck className="h-5 w-5 text-[#e8683f]" /><span>Dados armazenados localmente, sem depender de nuvem.</span></div>
                  <div className="privacy-line"><Smartphone className="h-5 w-5 text-[#e8683f]" /><span>Continuidade da obra com importação do seu banco de dados.</span></div>
                  <div className="privacy-line"><LockKeyhole className="h-5 w-5 text-[#e8683f]" /><span>Uma ferramenta direta para a rotina, sem complicar a sua privacidade.</span></div>
                </div>
              </div>
              <div className="relative mx-auto w-full max-w-[440px]">
                <div className="absolute -left-10 -top-10 h-32 w-32 border border-[#173f46]/25" />
                <img src="/manus-storage/gestao-obra-privacidade_0bd4ffbb.jpg" alt="Celular e chave representando privacidade de dados" className="relative z-10 aspect-[4/5] w-full object-cover shadow-[18px_18px_0_#173f46]" />
                <div className="absolute -bottom-7 -left-5 z-20 bg-[#f8f2e9] px-5 py-4 shadow-[6px_6px_0_#e8683f]">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#e8683f]">Sem nuvem</p>
                  <p className="mt-1 font-display text-lg font-bold tracking-[-0.04em] text-[#173f46]">Controle que fica com você.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="politica" className="relative overflow-hidden bg-[#fbf8f2] py-24 sm:py-32">
          <div className="absolute inset-0 technical-grid opacity-25" />
          <div className="container relative">
            <div className="lg:pl-[8%]">
              <SectionTag>Política de Privacidade</SectionTag>
              <div className="mt-6 grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
                <div>
                  <h2 className="max-w-[440px] font-display text-5xl font-bold leading-[0.9] tracking-[-0.065em] text-[#173f46] sm:text-6xl">
                    Transparência também <span className="text-[#e8683f]">faz parte da obra.</span>
                  </h2>
                  <p className="mt-6 max-w-[420px] text-lg leading-relaxed text-[#537176]">
                    Esta política descreve como o GestãoObra trata as informações registradas no aplicativo. A versão abaixo é aplicável ao uso atual, com armazenamento local no aparelho.
                  </p>
                  <p className="mt-8 border-l-2 border-[#e8683f] pl-4 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-[#61777a]">
                    Última atualização: 18 de agosto de 2026
                  </p>
                </div>

                <article className="policy-sheet">
                  <div className="policy-sheet__topline"><span>GESTÃOOBRA / PRIVACIDADE</span><span>LOCAL · ANDROID</span></div>
                  <div className="policy-content">
                    <section>
                      <h3>1. Informações abrangidas</h3>
                      <p>O GestãoObra permite que você registre dados relacionados à sua construção, como nome da obra, lançamentos de materiais, mão de obra e custos indiretos, valores, datas, observações e contatos de prestadores ou fornecedores inseridos por você.</p>
                    </section>
                    <section>
                      <h3>2. Onde os dados ficam</h3>
                      <p>As informações registradas são salvas localmente no aparelho em que o aplicativo é utilizado. O funcionamento descrito para a versão atual não depende de conta de usuário nem de armazenamento em nuvem operado pelo GestãoObra.</p>
                    </section>
                    <section>
                      <h3>3. Uso das informações</h3>
                      <p>Os dados são utilizados no próprio aplicativo para organizar lançamentos, calcular totais, montar relatórios, exibir gráficos e manter os contatos associados à obra. O GestãoObra não usa esses registros para publicidade ou para formar perfis comerciais.</p>
                    </section>
                    <section>
                      <h3>4. Exportação e transferência</h3>
                      <p>Você pode exportar relatórios em <strong>.csv</strong> e o banco de dados em <strong>.db</strong>. A decisão de exportar, guardar, enviar ou importar esses arquivos em outro aparelho é sua. Proteja esses arquivos, pois eles podem conter os registros da sua obra.</p>
                    </section>
                    <section>
                      <h3>5. Compartilhamento</h3>
                      <p>O GestãoObra não compartilha automaticamente os dados cadastrados com terceiros. O compartilhamento acontece apenas quando você escolhe exportar um arquivo ou utilizar as funções de compartilhamento disponibilizadas pelo seu próprio dispositivo.</p>
                    </section>
                    <section>
                      <h3>6. Seus controles</h3>
                      <p>Você pode revisar, editar ou excluir os lançamentos diretamente no aplicativo. Como os dados são locais, a remoção do aplicativo, a limpeza de dados ou a perda do aparelho podem eliminar informações que não tenham sido exportadas previamente.</p>
                    </section>
                    <section>
                      <h3>7. Atualizações desta política</h3>
                      <p>Esta política pode ser atualizada quando houver mudanças relevantes nas funcionalidades ou no tratamento de dados. A versão vigente permanecerá disponível nesta aba, com a data da última atualização.</p>
                    </section>
                    <section>
                      <h3>8. Contato</h3>
                      <p>Para dúvidas sobre privacidade ou sobre o uso do aplicativo, utilize o canal de suporte informado na página de distribuição do GestãoObra.</p>
                    </section>
                  </div>
                  <div className="policy-sheet__note"><LockKeyhole className="h-4 w-4" /> Armazenamento local. Controle do usuário.</div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#fbf8f2] py-24 sm:py-28">
          <div className="absolute inset-0 technical-grid opacity-30" />
          <div className="container relative">
            <div className="relative overflow-hidden border border-[#173f46]/15 bg-[#f8f2e9] px-7 py-12 shadow-[14px_14px_0_#e8683f] sm:px-12 sm:py-16 lg:mx-[8%] lg:px-16">
              <div className="absolute right-0 top-0 h-28 w-28 border-b border-l border-[#173f46]/15" />
              <SectionTag>Feito para a rotina de quem constrói</SectionTag>
              <div className="mt-7 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
                <div className="max-w-[680px]">
                  <h2 className="font-display text-5xl font-bold leading-[0.9] tracking-[-0.065em] text-[#173f46] sm:text-6xl">Leve o controle da sua obra <span className="text-[#e8683f]">no bolso.</span></h2>
                  <p className="mt-6 max-w-[610px] text-lg leading-relaxed text-[#537176]">Conheça a proposta do GestãoObra: menos lembranças soltas, mais contexto para cada gasto e uma visão mais segura do seu investimento.</p>
                </div>
                <a className="btn-primary group shrink-0" href="#inicio">
                  Voltar ao início <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#173f46] text-[#d6e2de]">
        <div className="container flex flex-col gap-10 py-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <img src="/manus-storage/gestao-obra-logo_e73fa381.png" alt="Símbolo Gestão Obra" className="h-11 w-11" />
              <div><p className="font-mono text-[10px] font-bold tracking-[0.18em] text-[#f3a067]">GESTÃO</p><p className="font-display text-2xl font-bold tracking-[-0.06em] text-white">obra</p></div>
            </div>
            <p className="mt-5 max-w-[360px] text-sm leading-relaxed text-[#a8c3c3]">Controle de custos de construção para Android. Registre, organize e entenda cada etapa do seu investimento.</p>
          </div>
          <div className="border-l border-[#a8c3c3]/25 pl-5 font-mono text-[10px] uppercase tracking-[0.14em] text-[#a8c3c3]">
            <p>GestãoObra</p>
            <p className="mt-2 text-[#f3a067]">Dados locais · Android</p>
            <a href="#politica" className="mt-4 inline-flex text-[#f8f2e9] underline decoration-[#f3a067] decoration-2 underline-offset-4 transition-colors hover:text-[#f3a067]">Política de Privacidade</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
