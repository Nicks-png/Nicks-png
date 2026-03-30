# 🚀 Setup GitHub - nicks-png

Este guia ajuda a criar o repositório no GitHub e fazer deploy.

## Opção 1: Via linha de comando (recomendado)

### Passo a passo:

1. **Crie um repositório no GitHub:**
   - Acesse https://github.com/new
   - Nome: `nicks-png`
   - **NÃO** marque "Initialize this repository with a README"
   - Clique em "Create repository"

2. **Conecte seu repositório local ao GitHub:**

```bash
# Navegue até a pasta do projeto
cd caminho/para/nicks-png

# Adicione o remote do GitHub (substitua SEU_USUARIO)
git remote add origin https://github.com/SEU_USUARIO/nicks-png.git

# Renomeie a branch para main (se ainda não for)
git branch -M main

# Envie os arquivos
git push -u origin main
```

3. **Ative o GitHub Pages:**
   - Vá em **Settings** > **Pages**
   - Em "Build and deployment", selecione:
     - Source: `Deploy from a branch`
     - Branch: `main` / `/ (root)`
   - Clique em **Save**
   - Aguarde 1-2 minutos
   - Seu site estará em: `https://SEU_USUARIO.github.io/nicks-png/`

## Opção 2: Usando SSH (se configurado)

```bash
git remote add origin git@github.com:SEU_USUARIO/nicks-png.git
git push -u origin main
```

## Opção 3: Upload manual via interface web

1. No repositório criado no GitHub, clique em "upload an existing file"
2. Arraste a pasta `nicks-png` ou selecione os arquivos
3. Commit message: "Initial commit"
4. Clique em "Commit changes"

## Verificação

Após o push, vá em:
```
https://github.com/SEU_USUARIO/nicks-png/settings/pages
```

Deve aparecer: "Your site is live at https://SEU_USUARIO.github.io/nicks-png/"

## ⚠️ Problemas comuns

**Erro: "remote: Repository not found"**
- Verifique se o repositório existe no GitHub
- Verifique se você tem permissão de escrita
- Use o URL correto (com seu usuário)

**Erro: "fatal: Authentication failed"**
- Use um token de acesso pessoal (PAT) no lugar da senha
- Crie um token em: GitHub Settings > Developer settings > Personal access tokens
- Ou configure SSH

**GitHub Pages não aparece:**
- Verifique se a branch é `main` ou `master`
- Verifique se a pasta selecionada é `/` (root)
- Aguarde alguns minutos
