# Checkpoint 6 — Vibecoding: documentação do processo

**Projeto:** Portfólio pessoal (landing page) — Gabriel Brito Braga
**Ferramenta de IA usada:** Qoder (agente de IA com conversa e edição de código)
**Data:** outubro/2026

> Este arquivo é a documentação oficial do processo (itens 3.1 a 3.5 do enunciado).
> Os prompts estão reproduzidos **exatamente como foram escritos**, sem edição posterior.

---

## 3.1 — Referências visuais

> ⚠️ Antes de entregar, abra cada referência e confirme que ela realmente foi usada
> durante o processo. Se trocar alguma, ajuste o texto da análise junto.

1. **https://seemecreative.com/featured/i-d-kids-these-days-2/** — Site de uma produtora
   criativa (referência principal do redesign).
   *O que aproveitei:* praticamente toda a linguagem — foto em tela cheia no hero com a
   manchete serifada por cima, navegação fixa com itens numerados (001, 002...), lista de
   trabalhos em filetes, blocos de crédito com filetes tracejados, numerais gigantes
   vazados (contorno) e o rodapé em bloco único de cor forte.
   *Onde usei:* hero, navbar, seção Sobre (créditos), lista de Projetos, Experiência
   (numerais vazados) e rodapé coral.
2. **https://brittanychiang.com** — Portfólio referência clássica de dev.
   *O que aproveitei:* a numeração das seções como roteiro de leitura ("001 Sobre",
   "002 Skills"...), que na minha página virou a navegação e os rótulos de cada bloco.
   *Onde usei:* navbar numerada e labels de seção.
3. **https://michalsnik.github.io/aos/** — Biblioteca de animação on-scroll (demo oficial).
   *O que aproveitei:* o comportamento "os elementos surgem conforme o scroll", com
   fade + leve deslize de baixo para cima. Não usei a biblioteca em si — reimplementei
   o efeito com IntersectionObserver + CSS puro para manter o site leve.
   *Onde usei:* entrada dos títulos, fotos e blocos de texto de todas as seções.
4. **https://anulikajoy.com/about** — Portfólio pessoal da Anulika Nwankwo.
   *O que aproveitei:* a tipografia gigante como protagonista (o nome em tamanho
   monumental, o itálico serifado nos títulos). No redesign, essa ideia migrou do
   contato para o hero da página.
   *Onde usei:* hero ("GABRIEL BRITO BRAGA" em serifada enorme) e títulos das seções.
5. **https://leerob.io** — Portfólio pessoal do Lee Robinson.
   *O que aproveitei:* a ideia de tratar a foto pessoal como figura de editorial, não
   como "retrato de currículo" — a foto é conteúdo da página, com presença de capa.
   *Onde usei:* hero — a foto do parque em tela cheia por baixo da manchete serifada
   funciona como a abertura de matéria de revista.

---

## 3.2 — Decisões de identidade visual

### Paleta de cores

| Cor | Hex | Papel | Por quê |
|---|---|---|---|
| Papel | `#F4F0E8` | Fundo geral | Off-white quente, com jeito de papel de revista. Diferente do branco clínico das landing pages comuns. |
| Tinta | `#141414` | Texto principal | Preto macio de impressão — contraste editorial sem agressividade. |
| Coral | `#FF5A1F` | Bloco de cor e destaques | A referência usa um bloco pêssego no fim; adaptei para um coral mais vivo, que dá energia de "capa de revista" e carrega a página sozinho. Usado no rodapé, números de seção e detalhes. |
| Fumaça | `#7C766B` | Texto secundário | Cinza quente para legendas, datas e descrições, sem disputar atenção com os títulos. |

As cores conversam porque seguem a lógica da referência: **quase tudo é papel e tinta**
(texto e fotos são o conteúdo), e o coral aparece como o único bloco de cor — no fechamento
da página e em micro-detalhes. É uma paleta de revista, não de app.

### Tipografia

- **Fraunces** — serifada editorial (títulos, nomes, itálicos). Escolhida pela família de
  pesos variáveis e pelos itálicos expressivos: é ela que dá o ar de "manchete de revista".
- **Space Grotesk** — a marca ("GABRIEL BRITO\*") e negritos de apoio. Geometricamente
  moderna, funciona como o logo da publicação.
- **JetBrains Mono** — labels técnicos: numeração de seção, rótulos ("nº 01 — python"),
  créditos e links. Reforça a identidade de código nos detalhes.
- **Inter** — textos corridos, pela legibilidade em parágrafos.

### Tom e personalidade

**Editorial, descolado e pessoal.** A página se comporta como uma edição de revista sobre
mim: manchetes grandes, uma foto de capa no hero, créditos e lista de trabalhos como se
fosse a página final de um editorial. Os textos seguem em primeira pessoa, diretos e sem
jargão corporativo.

### Estrutura da página

| Ordem | Seção | Por quê |
|---|---|---|
| 1 | Hero | Foto em tela cheia + manchete serifada: em 5 segundos diz quem sou e o tom da página. |
| 2 | Sobre | Texto editorial + foto com legenda ("fig. 01") + bloco de créditos (nome, formação, status, contato). |
| 3 | Skills | Três colunas de "créditos" (a. linguagens / b. front-end / c. em estudo). |
| 4 | Projetos | Lista editorial de trabalhos: rótulo mono ("nº 01 — python"), título serifado em itálico, descrição e seta. |
| 5 | Experiência | Lista com numerais vazados gigantes (01, 02). |
| 6 | Contato | Bloco coral de ponta a ponta, com links e o convite "Vamos construir algo juntos?" |

A ordem segue a narrativa de uma revista: **capa → matéria principal → seções → página final.**

---

## 3.3 — Prompts utilizados (em ordem)

**Prompt inicial** (primeira mensagem enviada à IA, exatamente como escrito):

> chat me ajude fazer esse trabalho aqui em anexo, faça perguntas pra mim de como quero o site etc para que possamos fazer algo legal

**Respostas ao questionário da IA** (segundo envio — definiu direção inicial e conteúdo):

> Estilo visual: Light e clean — Fundo claro, muito espaço em branco, tipografia forte e minimalista
> Animações: Scroll suave — Elementos surgem com fade/slide e parallax conforme o scroll
> Stack: Não sei, decide por mim — Recomendo a opção mais adequada ao estilo escolhido
> Deploy: Ainda não sei — Decidimos depois, no final do projeto
>
> Gabriel Brito Braga - Engenharia de software
> python, javascript
> somente trabalhos escolares que utilizei java script e python
> trabalho atualmente como assistente adminstrativo em uma empresa de credito imobiliario
> github: https://github.com/gabrielbritobraga - email: gabriel.bragabrito@gmail.com
> *(+ foto anexada)*

**Prompt de redesign da seção de contato:**

> deixe a parte final que seria de contato com essa referencia - https://anulikajoy.com/about

**Prompt de redesign completo da página:**

> pega essa referencia e monte a pagina assim, se precisar de mais fotos me avisa, que te envio ai vc me fala aonde vc vai colocar pra eu pegar umas imagens legais: https://seemecreative.com/featured/i-d-kids-these-days-2/

**Prompt de simplificação para uma foto única (hero):**

> deixena verdade somente uma foto que seria a foto hero que é que eu te mandei anteriormente

**Prompt de conteúdo real (projetos, sobre e troca de fotos):**

> subistituir jogo de advinhação para terravis , um site que fi oara um trabalho da facukdadeque a ideia era de pegar um satelite e utlizar ele no ramo de agronegocio para ajudar os quem trabalha no ramo ele pegava a previsao como ta o mato pra ve se ta bom pra plantação etc - tambem subistiuir calculadora de notas para OPTICODE um site que fiz para fazer uma propagando para o site da jovi, gostaria tambem de acresenta outra foto no sobremim e adcionar mais informações q ue sou musicom toco na igreja e que sou cristao, e troca foto hero para o sobre mim e vou te manda a nova foto para colocar na hero
>
> *(+ nova foto anexada — culto com a banda da igreja, para o hero)*

**Prompts de ajuste durante o desenvolvimento/QA:**

> *(QA do menu mobile)* O menu mobile aberto estava transparente e não cobria a tela — corrigir o overlay do menu.

> *(QA de robustez)* Garantir que o conteúdo da página nunca fique invisível se o JavaScript estiver desativado.

> *(QA do redesign)* O logo "GABRIEL BRITO" some quando o menu mobile abre — ele ficou atrás do fundo do menu.

---

## 3.4 — Registro de correções

### Correção 1 — Menu mobile transparente

| Campo | Registro |
|---|---|
| **Problema** | Ao abrir o menu no celular, os links apareciam flutuando sobre o conteúdo da página — o fundo do menu não cobria a tela (dava pra ver a foto e o texto atrás dos links). |
| **Causa** | O header usa `backdrop-filter` (blur no fundo). Qualquer ancestral com `backdrop-filter` ou `transform` vira o "containing block" de filhos com `position: fixed` — então o menu, em vez de fixar na janela, fixou dentro do header, que tem só ~70px de altura. |
| **Prompt de correção** | "O menu mobile aberto estava transparente e não cobria a tela — corrigir o overlay do menu." |
| **Resultado** | ✅ Resolveu totalmente. O JS agora adiciona a classe `header--menu-open` no header quando o menu abre, e o CSS transforma o header em overlay de tela cheia (`height: 100dvh`, fundo opaco). |
| **Aprendizado** | No prompt inicial eu deveria especificar o comportamento esperado do menu mobile ("menu deve cobrir a tela inteira com fundo opaco"). Detalhes de comportamento em telas pequenas são fáceis de esquecer e custam uma rodada de correção. |

### Correção 2 — Conteúdo invisível sem JavaScript

| Campo | Registro |
|---|---|
| **Problema** | As animações de entrada usam a classe `.reveal` (opacidade 0 até entrar na tela). No QA, screenshots de página inteira mostravam seções em branco — e sem JavaScript o conteúdo ficaria invisível para sempre. |
| **Causa** | O sistema de animação depende 100% do IntersectionObserver (JS). Sem o disparo do observer, os elementos permanecem com `opacity: 0`. |
| **Prompt de correção** | "Garantir que o conteúdo da página nunca fique invisível se o JavaScript estiver desativado." |
| **Resultado** | ✅ Resolveu totalmente. Adicionei um fallback com `<noscript>` que força `.reveal { opacity: 1 }` quando o JS está desligado. Para o QA de screenshots, ajustei o script de teste para rolar a página em passos controlados antes de fotografar. |
| **Aprendizado** | No prompt inicial, vale especificar requisitos de acessibilidade/robustez ("conteúdo deve estar visível mesmo sem animação"). Animar com classes que escondem conteúdo exige sempre um plano B. |

### Correção 3 — Redesign da seção de contato (ajuste de design, não de bug)

| Campo | Registro |
|---|---|
| **Problema** | A seção de contato original (caixa escura arredondada com dois botões) funcionava, mas era genérica — parecia qualquer formulário de newsletter e não criava um fechamento memorável para a página. |
| **Prompt de correção** | "deixe a parte final que seria de contato com essa referencia - https://anulikajoy.com/about" |
| **Resultado** | ✅ Resolveu totalmente naquele momento. Refiz a seção como bloco escuro em tela cheia, dirigido por tipografia: nome gigante centralizado, e-mail como link grande com sublinhado e redes sociais em linha separadas por "/". *(Nota: essa seção foi posteriormente substituída pelo redesign completo da página — a ideia da tipografia gigante migrou para o hero.)* |
| **Aprendizado** | Referência visual vale mais que descrição: trazer o link do que eu queria imitar comunicou o resultado em uma rodada só. Também aprendi que aplicar uma referência não é copiar cores — é adaptar a ideia à própria identidade. |

### Correção 4 — Redesign completo da página (evolução do conceito)

| Campo | Registro |
|---|---|
| **Problema** | Depois de ver o site no ar, percebi que o estilo "light clean minimal" ficou bonito mas anônimo — poderia ser o portfólio de qualquer pessoa. Faltava personalidade e repertório visual mais ousado, que era justamente o objetivo do checkpoint. |
| **Prompt de correção** | "pega essa referencia e monte a pagina assim, se precisar de mais fotos me avisa, que te envio ai vc me fala aonde vc vai colocar pra eu pegar umas imagens legais: https://seemecreative.com/featured/i-d-kids-these-days-2/" |
| **Resultado** | ✅ Resolveu totalmente. Reconstruí a página com linguagem editorial de revista: hero em tela cheia com manchete serifada, navegação numerada, grid de projetos colado, créditos com filetes tracejados, numerais vazados e rodapé em bloco coral. A IA avisou onde cada foto vai entrar e gerou placeholders com instruções, para eu enviar as imagens certas. *(Esse grid de fotos durou pouco — a simplificação para uma foto única ficou registrada na Correção 6.)* |
| **Aprendizado** | O checkpoint valoriza o processo — e trocar o conceito no meio do caminho, documentando o porquê, mostra evolução de repertório (peso na nota). Também aprendi que fótos/imagens são conteúdo de design: pedir a lista de imagens necessárias antes de finalizar evita retrabalho. |

### Correção 5 — Logo escondido atrás do menu mobile

| Campo | Registro |
|---|---|
| **Problema** | No QA do redesign, o logo "GABRIEL BRITO\*" ficou invisível quando o menu mobile abria — só apareciam os links numerados e o botão de fechar. |
| **Causa** | A lista do menu (`position: fixed` com fundo opaco de tela cheia) pinta por cima do logo, que é irmão dela no DOM. O botão de fechar escapava porque tinha `z-index`; o logo não tinha. |
| **Prompt de correção** | "O logo 'GABRIEL BRITO' some quando o menu mobile abre — ele ficou atrás do fundo do menu." |
| **Resultado** | ✅ Resolveu totalmente. O logo ganhou `position: relative; z-index: 110`, acima do overlay. |
| **Aprendizado** | Elementos fixos/flutuantes no header precisam de z-index explícito sempre que um overlay de tela cheia entra em cena. No prompt, vale pedir "o logo deve continuar visível com o menu aberto". |

### Correção 6 — Simplificação para uma foto única (hero)

| Campo | Registro |
|---|---|
| **Problema** | O redesign tinha placeholders para cinco imagens (hero, sobre, três projetos) mais um interlúdio — mas eu só tinha uma foto real (a do parque). A página ficaria incompleta até eu conseguir as outras, e o fluxo dependia de mim mandar imagens novas. |
| **Prompt de correção** | "deixena verdade somente uma foto que seria a foto hero que é que eu te mandei anteriormente" |
| **Resultado** | ✅ Resolveu totalmente. A página passou a usar uma única imagem: a foto do parque no hero (tela cheia, com véu em gradiente por baixo da manchete). Sobre virou coluna de texto única; Projetos virou lista editorial em texto (rótulo "nº 01 — python", título serifado, descrição, seta); o interlúdio full-bleed saiu. Todos os placeholders foram apagados — `assets/` tem só `foto-gabriel.jpg`. |
| **Aprendizado** | Confirmar a quantidade de conteúdo real (fotos, textos) antes de gerar placeholders: eles ajudam a visualizar, mas se o conteúdo não vier viram dívida. Também aprendi que uma foto forte no hero sustenta uma página inteira editorial — o resto pode ser só tipografia. *(Parcialmente revisto na Correção 7, quando o Sobre ganhou foto de volta.)* |

### Correção 7 — Conteúdo real: projetos, sobre ampliado e troca de fotos

| Campo | Registro |
|---|---|
| **Problema** | Dois dos três projetos do portfólio eram nomes inventados ("Jogo de Adivinhação", "Calculadora de Notas") porque eu não tinha parado para listar os trabalhos reais da faculdade. O Sobre também estava pobre: não contava que sou músico, toco na igreja e sou cristão — parte grande da minha identidade. |
| **Prompt de correção** | "subistituir jogo de advinhação para terravis , um site que fi oara um trabalho da facukdadeque a ideia era de pegar um satelite e utlizar ele no ramo de agronegocio para ajudar os quem trabalha no ramo ele pegava a previsao como ta o mato pra ve se ta bom pra plantação etc - tambem subistiuir calculadora de notas para OPTICODE um site que fiz para fazer uma propagando para o site da jovi, gostaria tambem de acresenta outra foto no sobremim e adcionar mais informações q ue sou musicom toco na igreja e que sou cristao, e troca foto hero para o sobre mim e vou te manda a nova foto para colocar na hero" |
| **Resultado** | ✅ Resolveu totalmente. Projetos agora listam **Terravis** (site do trabalho de faculdade sobre satélite no agronegócio) e **OPTICODE** (site de propaganda para o projeto da Jovi). O Sobre ganhou um parágrafo sobre música, igreja e fé, e a foto do parque voltou para o Sobre ("fig. 01 — o autor do código, em modo offline"). A foto nova do culto com a banda virou o hero — a manchete serifada por cima do momento de louvor ficou a cara da página. |
| **Aprendizado** | Conteúdo real primeiro, sempre: projetos inventados até "funcionam" visualmente, mas o portfólio só fica meu quando carrega os trabalhos que eu de fato fiz. E a foto do hero conta a história antes de qualquer texto — escolher uma imagem com significado (o culto, a música) vale mais que uma imagem bonita genérica. |

---

## 3.5 — Resultado final

- **Repositório:** *(preencher — ex.: https://github.com/gabrielbritobraga/portfolio)*
- **Deploy:** *(preencher — ex.: https://portfolio-gabriel.vercel.app)*

### Reflexão

**O que ficou como eu imaginava:** a virada para o estilo editorial deixou o portfólio com
cara de "minha" página — a manchete gigante, os numerais vazados, o rodapé coral e as fotos
tratadas como figura de revista. Cada seção tem um gesto visual próprio, como pede a
referência.

**O que ainda mudaria:** adicionar links individuais para o repositório de cada
projeto (Terravis, OPTICODE e este portfólio); e testaria uma versão com mais movimento
(parallax mais forte ou transições entre as seções), algo para estudar no próximo
checkpoint.

---

## Anexo — QA realizado

Testado em desktop (1440px) e mobile (390px), com Playwright + Chrome:

- [x] Todos os botões e links clicáveis (âncoras internas, GitHub, e-mail)
- [x] Menu mobile abre cobrindo a tela, **logo continua visível**, fecha ao clicar em link
- [x] Navbar esconde ao rolar para baixo e reaparece ao rolar para cima
- [x] Animações de reveal disparam em todas as seções
- [x] Parallax sutil na foto do hero
- [x] Sem erros no console do navegador
- [x] Sem âncoras quebradas
- [x] Imagens carregando (duas fotos: hero do culto + fig. 01 do Sobre)
- [x] Ano do rodapé automático

### Sobre as imagens

O site usa **duas fotos** (decisão final registrada na Correção 7):

| Arquivo em `assets/` | Onde entra |
|---|---|
| `foto-hero.jpg` | Hero, tela cheia — culto com a banda da igreja (enviada na rodada da Correção 7) |
| `foto-gabriel.jpg` | Sobre, coluna direita com legenda — foto do parque (enviada no início do projeto) |
