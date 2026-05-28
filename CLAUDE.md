# Com amor para Stefhane — MazyOS

> Workspace de um projeto pessoal: um site-surpresa feito com amor pra
> Stefhane. Perfil criador solo, adaptado pra um presente romântico em vez
> de um negócio. O sistema gira em torno de criar e cuidar desse site.

## O que é esse workspace

Aqui eu construo o site fofinho e romântico que vou dar de presente pra
Stefhane — uma surpresa pra impressioná-la com a criatividade e o carinho
do tempo investido. O coração do site são fotos de nós dois com textos
fofinhos do lado.

**Estrutura de pastas:**
- `_memoria/` — quem somos, como eu falo, o que tá em foco
- `identidade/` — cores, fontes, padrão visual, fotos do casal
- `marketing/`, `saidas/`, `dados/`, `scripts/`, `templates/` — saídas e utilitários do MazyOS
- `_memoria/estrategia.md` — o que tá em jogo agora

## Quem sou

Sou o namorado (quase!) da Stefhane. Vou pedir ela em namoro em breve —
a aliança já tá comprada. Esse site é a surpresa que acompanha esse momento.

## O que produzo aqui

- O site-presente pra Stefhane (fotos + textos fofinhos)
- Textos românticos na minha voz, sobre nós dois

## Pra quem é (a "audiência")

A Stefhane. Garota feliz, leve, sem preocupações, mas que cuida muito das
pessoas — gargalhada alta e contagiante, acha graça de tudo. Adora surpresas
e é curiosa. Não sabe que esse site existe (é segredo).

## Tom de voz

Carinhoso, devoto e presente. Apelidos fofos ("gatinha"), fé no meio
(rezar, pedir a Deus por ela), empolgação de verdade (!!!). Regra de ouro:
**tem que soar como EU falando com ela**, não texto genérico de internet.
Ver exemplo real em `_memoria/preferencias.md`.

Evitar: qualquer coisa que não pareça eu dizendo de verdade; clichê de
cartão de loja em excesso; poema decorado.

## Visual

Rosa e vermelho, inspirado num buquê de lírios que ela adora. Fofo,
romântico e suave — feito à mão e com tempo, nada frio. Detalhes em
`identidade/design-guide.md`.

---

## Contexto do negócio

No início de toda conversa, ler os seguintes arquivos (quando existirem
e estiverem preenchidos):

1. `_memoria/empresa.md` — quem somos, o projeto, o contexto
2. `_memoria/preferencias.md` — tom de voz, estilo de escrita, o que evitar
3. `_memoria/estrategia.md` — foco atual, prioridades, prazos

Usar essas informações como base pra qualquer resposta ou decisão. Ao
sugerir prioridades, formatos ou abordagens, considerar o foco atual
descrito em `estrategia.md`.

Pra qualquer tarefa visual (site, post, imagem), consultar
`identidade/design-guide.md` como referência de estilo.

Não é necessário listar o que foi lido nem confirmar a leitura. Apenas
usar o contexto naturalmente.

---

## Fluxo de trabalho

Antes de executar qualquer tarefa, verificar se existe skill relevante
em `.claude/skills/`. Se encontrar, seguir as instruções da skill. Se
não encontrar, executar a tarefa normalmente.

Ao concluir uma tarefa que não tinha skill mas parece repetível (vou
provavelmente pedir de novo no futuro), perguntar:

> "Isso pode virar uma skill pra próxima vez. Quer que eu crie?"

Não perguntar pra tarefas pontuais ou perguntas simples. Só quando o
padrão de repetição for claro.

---

## Aprender com correções

Quando eu corrigir algo, melhorar uma resposta ou dar uma instrução que
parece permanente (frases como "na verdade é assim", "não faça mais isso",
"prefiro assim", "sempre que...", "evita...", "da próxima vez..."), perguntar:

> "Quer que eu salve isso pra não precisar repetir?"

Se sim, identificar onde faz mais sentido salvar:

- **Sobre o projeto** (a Stefhane, nós dois, o site) → `_memoria/empresa.md`
- **Sobre preferências e estilo** (tom de voz, formato, o que evitar) → `_memoria/preferencias.md`
- **Sobre prioridades e foco** (o que fazer primeiro, prazos) → `_memoria/estrategia.md`
- **Regra de comportamento nessa pasta** → próprio `CLAUDE.md`

Salvar com uma linha nova clara, sem reformatar o arquivo inteiro.
Confirmar mostrando a linha adicionada.

---

## Manter contexto atualizado

Ao terminar uma tarefa que mudou algo relevante (foto nova, mudança de
foco, seção nova no site, ferramenta instalada, estrutura alterada),
perguntar:

> "Isso mudou algo no contexto. Quer que eu atualize a memória?"

Mostrar o que vai mudar antes de salvar. Não reformatar o arquivo
inteiro, só adicionar ou editar a linha relevante.

**Quando NÃO perguntar:**
- Tarefas pontuais sem impacto no contexto
- Perguntas simples ou conversas sem ação
- Mudanças já salvas pelo bloco "Aprender com correções"

**Dica:** rode `/atualizar` pra uma varredura completa quando houver dúvida.

---

## Criação de skills

Quando eu pedir skill nova:

1. Verificar se existe template relevante em `templates/skills/`. Se
   existir, usar como base e adaptar pro contexto
2. Perguntar se é específica desse projeto ou útil em qualquer:
   - Específica → `.claude/skills/nome-da-skill/SKILL.md` (local)
   - Universal → `~/.claude/skills/nome-da-skill/SKILL.md` (global)
3. Ler `_memoria/empresa.md` e `_memoria/preferencias.md` pra calibrar
   o conteúdo da skill ao contexto
4. Se a skill precisar de arquivos de apoio, criar dentro da pasta da skill
5. Seguir o fluxo da skill-creator nativa do Claude Code
