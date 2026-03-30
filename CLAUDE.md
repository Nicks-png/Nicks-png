# Claude Code Config - Run the Beat

Este arquivo contém diretrizes específicas para o Claude Code interagir com este repositório.

## 🎯 Visão Geral

**Projeto:** Run the Beat - Landing page da marca @runebass_
**Tipo:** Site estático (HTML/CSS/JS) - Landing page de marca
**Deploy:** GitHub Pages

## 📁 Estrutura do Projeto

```
nicks-png/
├── index.html          # Página principal (landing page)
├── styles.css          # Estilos da marca (cores: rosa #ff3366, azul #33ccff, amarelo #ffcc00)
├── script.js           # Lógica de carregamento de dados
├── profile-data.json   # Dados do perfil (username, bio, estatísticas, posts)
├── DATA_TEMPLATE.json  # Template vazio para referência
├── README.md           # Documentação geral
├── SETUP_GITHUB.md     # Guia de configuração GitHub Pages
└── CLAUDE.md           # Este arquivo
```

## 🎨 Identidade da Marca

- **Nome:** Run the Beat
- **Tagline:** Feel the Bass
- **Instagram:** @runebass_
- **Segmento:** Música eletrônica, comunidade Bass, eventos
- **Parceiros:** Growth Supplements, Red Bull Brasil, Liquid IV Brasil
- **Paleta:**
  - Primária: #ff3366 (rosa vibrante)
  - Secundária: #33ccff (azul ciano)
  - Destaque: #ffcc00 (amarelo)
  - Fundo: #0d0d0d (fundo escuro)

## 🚀 Comandos Úteis

### Desenvolvimento local
```bash
# Servir localmente (se tiver Node.js)
npx serve .

# Ou simplesmente abra index.html no navegador
```

### Git
```bash
git add .
git commit -m "descrição clara da alteração"
git push origin main
```

### Verificar deploy
- Site: https://nicks-png.github.io/nicks-png/
- GitHub Pages settings: https://github.com/Nicks-png/nicks-png/settings/pages

## 📝 Diretrizes para Contribuições

### Ao modificar o site:

1. **Não use identidade do Instagram** - o site é da marca "Run the Beat"
2. **Mantenha a paleta de cores** - usar as variáveis CSS em `:root`
3. **Respeite a identidade visual** - logo, tagline, tons da marca
4. **Atualize dados em `profile-data.json`** - nunca hardcode no HTML/JS
5. **Teste localmente antes do push** - abra index.html no navegador
6. **Commits claros** - use prefixos como: `feat:`, `fix:`, `docs:`, `style:`

### Se faltarem imagens:
- Use placeholders com cores da marca: https://via.placeholder.com/600x600/ff3366/ffffff?text=Bass+1
- Ou gere com Google Imagen e faça upload para Imgur/Cloudinary

## 🔄 Workflow Recomendado

1. **Fazer alterações** em arquivos locais
2. **Testar** abrindo `index.html` no navegador
3. **Commit** com mensagem descritiva
4. **Push** para `origin main`
5. **Aguardar 1-2 min** para GitHub Pages atualizar
6. **Verificar** se site está online

## ⚠️ Pontos de Atenção

- O arquivo `profile-data.json` contém dados reais do perfil (seguidores, etc.)
- A branch correta é `main` (não `master`)
- GitHub Pages deve apontar para branch `main` / pasta `/`
- O repositório usa o nome `nicks-png` (minúsculo) no URL do Pages

## 🎨 Customização Rápida

### Cores:
Edite `styles.css` no bloco `:root`

### textos da home:
Edite `index.html` nas seções: tagline, missão, valores

### Dados do perfil:
Edite `profile-data.json` (posts, seguidores, bio, imagens)

## 📞 Contato

Este site representa a marca **Run the Beat** (@runebass_)
Para dúvidas sobre o projeto, consulte o dono do repositório.

---

**Última atualização:** 30 de março de 2025
**Versão:** 1.0.0
