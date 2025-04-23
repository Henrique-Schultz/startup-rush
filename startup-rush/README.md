## 🚀 Startup Rush – Torneio de Startups (Desafio Técnico Dell IT Academy)

Aplicação web interativa desenvolvida como solução para o desafio técnico da Dell IT Academy – Edição #22.  
Simula um torneio eliminatório entre startups, com cadastro, chaveamento visual, avaliação por critérios e um toque especial de imersão sonora.

---

## 🧑‍💻 Autor

- Desenvolvido por `Henrique Schultz`
- Desafio Técnico – `Dell IT Academy 2025`

### 🛠️ Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- HTML, CSS e JavaScript
- Hooks do React (`useState`)
- Componentização modular (páginas e componentes reutilizáveis)

---

### 🧩 Funcionalidades

#### ✅ Cadastro de Startups

- Seleção de 4 ou 8 participantes
- Cadastro de nome, slogan, ano e som característico (feature extra)
- Visualização em tempo real via `ListaStartups`

#### ✅ Sorteio e Estrutura do Torneio

- Sorteio automático dos confrontos
- Chaveamento visual com divs aninhadas
- Estrutura interativa controlando todo o fluxo

#### ✅ Avaliação e Pitch

- Modal com critérios fixos exibidos como checkboxes
- Pontuação em tempo real
- Detecção automática de empates com ativação do **SHARK FIGHT**

#### ✅ Avanço Automático de Fase

- Sistema avança automaticamente para a próxima fase após conclusão de todos os pitches

#### ✅ Tela Final e Ranking

- Exibição da vencedora com troféu e reprodução do som personalizado
- Ranking geral das startups com pontuação acumulada
- Botão “Novo Torneio” que reinicia o sistema

#### 🎯 Feature Extra

- Sons personalizados por startup
- SHARK FIGHT com pontuação bônus
- Dark mode e animações suaves

---

### 🧠 Organização do Código

- Componentes em `components/`
- Telas em `pages/`
- Arquivos `.jsx` e `.css` separados por função
- `App.jsx` gerencia a navegação entre telas

---

### ⚙️ Como Rodar o Projeto

# Clone o repositório

git clone https://github.com/seu-usuario/startup-rush.git

# Acesse a pasta

cd startup-rush

# Instale as dependências

npm install

# Rode o projeto localmente

npm run dev

---
