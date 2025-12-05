# Uomani Finance – Gestão de Membros e Pagamentos

Aplicação front-end para gestão de membros, pagamentos e relatórios da empresa fictícia **Uomani Finance – Soluções Financeiras**.  
O sistema permite cadastro de clientes, login, listagem e filtros de membros, gerenciamento de pagamentos e visualização de relatórios, tudo armazenado no navegador via `localStorage`.

## 🧱 Arquitetura do Projeto

- **Tipo de projeto**  
  - Front-end estático (
  - Multi-páginas: `index.html` + páginas em `pages/` (ex: `client.html`, `report.html`, `pagamentos.html`)
  - Navegação via links HTML e redirecionamentos de `window.location.href`

- **Ponto de entrada JavaScript**
  - Em cada página principal:
    - `index.html` e `pages/client.html` importam `script type="module" src="/src/index.js"`
  - `src/index.js`:
    - Faz `export *` de todos os módulos da pasta `modules/`
    - É carregado como módulo ES6, permitindo imports organizados entre arquivos

- **Organização geral de pastas**
  - `index.html` – página inicial 
    - `pages/`
    - `client.html` – gestão de membros
    - `report.html` – relatórios 
    - `pagamentos.html` – pagamentos 
  - `src/`
    - `index.js` – agregador dos módulos
    - `modules/` – funcionalidades principais (cadastro, login, membros, estatísticas, etc.)
    - `utils/` – funções utilitárias (ID, formatação de renda, filtros, etc.)
  - `styles/`
    - `main.css` – arquivo de entrada que importa todos os módulos de CSS
    - `base/` – reset, tipografia, variáveis
    - `components/` – componentes reutilizáveis (botões, cards, formulários, dialogs, etc.)
    - `layout/` – header, footer, body, main, sections
    - `pages/` – estilos específicos de página (ex: `client.css`)
  - `assets/`
    - `images/` – imagens da marca e do site
    - favicon e outros recursos visuais

---

## 🛠 Tecnologias Utilizadas

- **HTML5**
  - Estrutura semântica (`header`, `main`, `section`, `footer`)
  - Uso de `dialog` nativo para modais de **login**, **cadastro** e **contato**
  - Atributos ARIA e `aria-label` para acessibilidade em navegação e galerias

- **CSS3 (modularizado)**
  - Arquivo principal: `styles/main.css`
  - Uso de `@import` para dividir o CSS em:
    - `base/reset.css` – reset de estilos
    - `base/typography.css` – fontes e tamanhos
    - `base/variables.css` – *design tokens* (cores, espaçamentos etc.)
    - `components/*.css` – botões (`buttons.css`), cards (`cards.css`), navegação (`navigation.css`), formulários (`forms.css`), dialogs (`dialog.css`), etc.
    - `layout/*.css` – header, footer, body, main, section
    - `pages/client.css` – estilos específicos da página de membros
  - Padrão de design baseado em **cartões** (`.carta`, `.carta-grid`) e **CTA** (`.cta`)

- **JavaScript (ES6 Módulos)**
  - `type="module"` nos scripts
  - Organização por **módulos de funcionalidade** e **utils**
  - Manipulação de DOM (event listeners, criação de elementos, `innerHTML`, etc.)
  - Armazenamento de dados com **`localStorage`** (sem backend)

---

## 🧩 Principais Funcionalidades (JS)

### Cadastro de Membros – `src/modules/cadastro.js`

- Usa `gerarIdComPrefixo` (`src/utils/gerarID.js`) para gerar IDs únicos.
- Lê dados do formulário `#cadastro-form`:
  - `cadastro-nome`, `cadastro-email`, `cadastro-senha`, `cadastro-renda`,
    `cadastro-plano`, `cadastro-status` (quando existir), `cadastro-data-nascimento`.
- Monta objeto `dadosCliente` e salva no `localStorage`:
  - Chave = ID gerado (ou ID já existente se editar)
- Em caso de sucesso:
  - Mostra `alert` de sucesso
  - Reseta o formulário
  - Fecha o `dialog` de cadastro
  - Se estiver na landing (sem `cadastro-status`), redireciona para `/pages/client.html`
- No modo edição:
  - Usa um `data-id` no botão para saber qual cliente está sendo editado
  - Ao clicar em um botão de editar, reabre o dialog de cadastro

### Login – `src/modules/login.js`

- Usa o formulário `#login-form` do `index.html`.
- Recupera `email` e `senha` do formulário.
- Busca no `localStorage` usando o *email* como chave (importante para o fluxo de dados).
- Se `senha` corresponde:
  - Redireciona para `/pages/client.html`
- Se não:
  - Exibe mensagem de erro com `alert`.

### Listagem e Filtro de Membros – `src/modules/displayMembros.js`

- Utiliza helpers de `utils/`:
  - `capitalizarPrimeiraLetra`
  - `formatarRenda`
  - `acessarMembros`
  - `filtraMembro`
- Lê lista de membros do `localStorage` via `acessarMembros()`.
- `criarCartaMembro(membro)`:
  - Cria dinamicamente um card `.carta` com:
    - Nome, status, email, renda média formatada e plano
    - Botões de **Editar** e **Deletar** (identificados via `data-id`)
- `displayMembros()`:
  - Limpa a lista (`listaMembros.innerHTML = ""`)
  - Percorre todos os membros não deletados (`membro.deletado` é ignorado)
  - Aplica filtro por:
    - Status (`filtro-status`)
    - Plano (`filtro-plano`)
    - ID / nome / email (`busca-membro`)
  - Renderiza os cards correspondentes
- Deleção:
  - Marca o membro como `deletado = true` no `localStorage` em vez de remover definitivamente.

### Estatísticas de Membros – `src/modules/atualizaDOMClient.js`

- Usa `acessarMembros()` para obter todos os membros ativos (ignora deletados).
- Atualiza os elementos:
  - `#total-membros` – quantidade total de membros
  - `#total-ativos` – quantidade com `status === "ativo"`
  - `#total-receita-mensal` – soma de `rendaMedia`
  - `#media-renda` – média de `rendaMedia`
- Usa `formatarRenda` para formatar valores monetários em padrão brasileiro.

---

## 🖼 Base Conceitual e Conteúdo da Empresa

Através do HTML e dos textos:

- **Marca:** Uomani Finance
- **Tagline:** “Soluções financeiras”
- **Proposta de valor:**
  - Gestão financeira clara
  - Planejamento, consultoria e relatórios
- **Público-alvo:**
  - Pessoas físicas e empresas que precisam de:
    - Planejamento financeiro
    - Acompanhamento de resultados
    - Organização de pagamentos/mensalidades
- **Contato (simulado):**
  - Telefone, e-mail e endereço em São José – SC
  - Redes sociais: LinkedIn e Twitter

Isso é refletido visualmente em:
- Seção “Sobre nós” explicando missão e visão.
- Galeria de imagens com consultores, escritórios, reuniões, etc.

---

## 📄 Páginas Principais

- **`index.html` – Landing Page**
  - Hero “Gestão financeira clara. Resultados reais.”
  - Cards com “Planejamento”, “Consultoria”, “Relatórios”
  - Galeria de imagens da empresa
  - Botão “Fale conosco” abrindo `dialog` com formulário de contato
  - Modais de **Login** e **Cadastro** via `<dialog>`

- **`pages/client.html` – Gestão de Membros**
  - Hero “Gestão de Membros” com botão “Adicionar Novo Membro” (abre dialog `cadastro`)
  - Filtros por status, plano e busca textual
  - Lista de membros (`#lista-membros-lista`)
  - Estatísticas rápidas:
    - Membros Ativos
    - Receita Mensal
    - Renda Média
  - Link para:
    - Relatórios (`/pages/report.html`)
    - Pagamentos (`/pages/pagamentos.html`)

- **`pages/report.html` / `pages/pagamentos.html`**
  - Estrutura focada em relatórios e fluxo de pagamentos (conteúdo detalhado definido nos respectivos HTML/JS).

---

## ▶️ Como Executar o Projeto

1. **Clonar o repositório**
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd projeto-02-isac-l-dos-santos
   ```

2. **Abrir no navegador**
   - Opção 1: abrir diretamente `index.html` no navegador.
   - Opção 2 (recomendado): usar uma extensão como **Live Server** (VS Code) ou qualquer servidor estático:
     ```bash
     # exemplo com npx serve (se tiver Node instalado)
     npx serve .
     ```
   - Acesse: `http://localhost:3000` (ou porta mostrada no terminal).

3. **Fluxo de uso**
   - Acessar `index.html`
   - Cadastrar um novo usuário pelo modal de **Cadastro**
   - Fazer **login**
   - Ser redirecionado para `/pages/client.html`
   - Gerenciar membros, pagamentos e relatórios

---

## 📁 Estrutura Simplificada de Pastas

```text
projeto-02-isac-l-dos-santos/
├── index.html
├── pages/
│   ├── client.html
│   ├── report.html
│   └── pagamentos.html
├── src/
│   ├── index.js
│   ├── modules/
│   │   ├── cadastro.js
│   │   ├── login.js
│   │   ├── displayMembros.js
│   │   ├── atualizaDOMClient.js
│   │   ├── editarMembro.js
│   │   ├── cadastroPagamento.js
│   │   ├── buscarPagamento.js
│   │   └── excluirPagamento.js
│   └── utils/
│       ├── gerarID.js
│       ├── acessarMembros.js
│       ├── formatarRenda.js
│       ├── capitalizarPrimeiraLetra.js
│       └── filtraMembro.js
├── styles/
│   ├── main.css
│   ├── base/
│   ├── components/
│   ├── layout/
│   └── pages/
└── assets/
    ├── uomaniFavicon.png
    └── images/
```

---

## ✅ Possíveis Melhorias Futuras

- Validações mais robustas de formulário (HTML + JS).
- Tratamento de erros mais amigável (toast em vez de `alert`).
- Backend real (API REST) para persistência além do `localStorage`.
- Testes automatizados (unitários e de interface).

[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/EvVSCvhI)
