# cloudvBOX Dark Theme

<div align="center">
  <img src="https://cloudvbox.com/wp-content/uploads/2024/08/logo-preto.png" alt="cloudvBOX Logo" width="200"/>
  
  **cloudvBOX Dark Theme for JupyterLab**
  
  [![PyPI version](https://badge.fury.io/py/cloudvbox-dark-theme.svg)](https://badge.fury.io/py/cloudvbox-dark-theme)
  [![Python Support](https://img.shields.io/pypi/pyversions/cloudvbox-dark-theme.svg)](https://pypi.org/project/cloudvbox-dark-theme/)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![Downloads](https://pepy.tech/badge/cloudvbox-dark-theme)](https://pepy.tech/project/cloudvbox-dark-theme)
</div>

## 🎨 Visão Geral

O **cloudvBOX Dark Theme** é um tema profissional escuro desenvolvido especificamente para Jupyter Notebook e JupyterLab, incorporando a identidade visual moderna do cloudvBOX. Este tema oferece uma experiência visual elegante e profissional para cientistas de dados, desenvolvedores e pesquisadores.

### ✨ Características Principais

- **🌙 Design Escuro Profissional**: Fundo escuro (#012837) que reduz o cansaço visual
- **🎯 Cor de Destaque Única**: teal accent-ink (#3FD1B9) da paleta Cockpit v2 da cloudvBOX
- **🖼️ Logo Integrado**: Logo cloudvBOX elegantemente posicionado no header
- **📱 Design Responsivo**: Funciona perfeitamente em desktop e mobile
- **🔧 Syntax Highlighting Otimizado**: Cores cuidadosamente selecionadas para melhor legibilidade
- **⚡ Instalação Simples**: Instalação com um comando via pip
- **🔄 Compatibilidade Ampla**: Suporte para Jupyter Notebook e JupyterLab

### 🎨 Paleta de Cores

| Elemento | Cor | Hex |
|----------|-----|-----|
| Fundo Principal | Azul Escuro | `#012837` |
| Cor de Destaque | Teal (accent-ink v2) | `#3FD1B9` |
| Texto Principal | Branco | `#ffffff` |
| Texto Secundário | Cinza Claro | `#d1d5db` |
| Botões Primários | Azul | `#3b82f6` |
| Cards/Painéis | Cinza Escuro | `#1f2937` |




## 🧭 Cockpit v2

A cor de interação deste tema segue a paleta do Cockpit v2, adotada em todo o design system da
plataforma: o teal **accent-ink** `#3FD1B9` (dark; `#0E6E66` no light) substitui o ciano v1
`#55FCFF`. O gate `sh scripts/check-cockpit-v2.sh` (também no CI) barra a volta das cores v1 e
literais do accent-ink fora dos arquivos de token. Detalhes, o que ainda está aberto e links do
handoff em [`docs/cockpit-v2.md`](docs/cockpit-v2.md).

## 🚀 Instalação

### Pré-requisitos

- Python 3.7 ou superior
- Jupyter Notebook 6.0+ ou JupyterLab 3.0+

### Instalação via pip

```bash
# Instalar o pacote
pip install cloudvbox-dark-theme

# Aplicar o tema
cloudvbox-theme-install
```

### Instalação via poetry

```bash
# Adicionar ao projeto
poetry add cloudvbox-dark-theme

# Aplicar o tema
poetry run cloudvbox-theme-install
```

### Instalação para Desenvolvimento

```bash
# Clonar o repositório
git clone https://github.com/cloudvbox/cloudvbox-dark-theme.git
cd cloudvbox-dark-theme

# Instalar em modo desenvolvimento
pip install -e .

# Aplicar o tema
cloudvbox-theme-install
```

## 🎯 Uso Rápido

Após a instalação, reinicie o Jupyter Notebook ou JupyterLab para aplicar o tema:

```bash
# Para Jupyter Notebook
jupyter notebook

# Para JupyterLab
jupyter lab
```

O tema será aplicado automaticamente em todas as sessões futuras.

## 📋 Comandos Disponíveis

O pacote inclui vários comandos de linha de comando para gerenciar o tema:

### Instalação e Remoção

```bash
# Instalar o tema
cloudvbox-theme-install

# Remover o tema
cloudvbox-theme-uninstall

# Interface completa (recomendado)
cloudvbox-theme install
cloudvbox-theme uninstall
```

### Informações e Ajuda

```bash
# Mostrar informações do tema
cloudvbox-theme --info

# Mostrar versão
cloudvbox-theme --version

# Ajuda completa
cloudvbox-theme --help
```

### Opções Avançadas

```bash
# Instalação forçada (sem confirmação)
cloudvbox-theme install --force

# Modo verboso (mais detalhes)
cloudvbox-theme install --verbose

# Combinação de opções
cloudvbox-theme install --force --verbose
```


## 🖼️ Screenshots

### Jupyter Notebook
![Jupyter Notebook com cloudvBOX Dark Theme](docs/images/notebook-screenshot.png)

### JupyterLab
![JupyterLab com cloudvBOX Dark Theme](docs/images/jupyterlab-screenshot.png)

### Células de Código
![Células de código com syntax highlighting](docs/images/code-cells-screenshot.png)

### Células de Markdown
![Células de markdown renderizadas](docs/images/markdown-cells-screenshot.png)

## 🔧 Personalização

### Modificando Cores

Você pode personalizar as cores do tema editando o arquivo CSS:

```css
:root {
    /* Personalizar cor principal */
    --cloudvbox-primary: #3FD1B9;
    --cloudvbox-primary-rgb: 63, 209, 185;
    
    /* Personalizar fundo */
    --cloudvbox-dark-bg: #012837;
    
    /* Personalizar texto */
    --cloudvbox-text-primary: #ffffff;
}
```

### Adicionando Estilos Customizados

Crie um arquivo `custom-extra.css` no diretório custom do Jupyter:

```bash
# Localizar diretório custom
jupyter --config-dir
```

```css
/* Exemplo de customização adicional */
.cell.selected {
    border-color: #ff6b6b !important;
}

.CodeMirror {
    font-size: 16px !important;
}
```

### Configuração Avançada

Para configurações mais avançadas, você pode usar a API Python:

```python
from cloudvbox_dark_theme import theme_config

# Acessar configurações
config = theme_config
print(config.colors)

# Gerar variáveis CSS customizadas
css_vars = config.get_css_variables()
print(css_vars)
```

## 🔍 Troubleshooting

### Tema não aparece após instalação

1. **Verificar instalação**:
   ```bash
   cloudvbox-theme --info
   ```

2. **Reinstalar o tema**:
   ```bash
   cloudvbox-theme-uninstall
   cloudvbox-theme-install
   ```

3. **Limpar cache do navegador**:
   - Pressione `Ctrl+F5` (Windows/Linux) ou `Cmd+Shift+R` (Mac)

### Logo não aparece

1. **Verificar arquivos de imagem**:
   ```bash
   # Verificar se o logo foi copiado
   ls ~/.jupyter/custom/images/
   ```

2. **Verificar permissões**:
   ```bash
   chmod 644 ~/.jupyter/images/logo-branco.png
   ```

### Conflitos com outros temas

1. **Remover outros temas**:
   ```bash
   # Backup do custom.css atual
   cp ~/.jupyter/custom/custom.css ~/.jupyter/custom/custom.css.backup
   
   # Reinstalar tema cloudvBOX
   cloudvbox-theme-install
   ```

### Problemas de compatibilidade

1. **Verificar versões**:
   ```bash
   jupyter --version
   jupyter lab --version
   ```

2. **Atualizar Jupyter**:
   ```bash
   pip install --upgrade jupyter jupyterlab
   ```


## 🤝 Contribuindo

Contribuições são bem-vindas! Veja como você pode ajudar:

### Reportando Bugs

1. Verifique se o bug já foi reportado nas [Issues](https://github.com/cloudvbox/cloudvbox-dark-theme/issues)
2. Crie uma nova issue com:
   - Descrição detalhada do problema
   - Passos para reproduzir
   - Screenshots (se aplicável)
   - Informações do sistema (`cloudvbox-theme --info`)

### Sugerindo Melhorias

1. Abra uma issue com a tag `enhancement`
2. Descreva a melhoria proposta
3. Explique por que seria útil
4. Forneça exemplos ou mockups se possível

### Desenvolvendo

1. **Fork o repositório**
2. **Clone seu fork**:
   ```bash
   git clone https://github.com/seu-usuario/cloudvbox-dark-theme.git
   cd cloudvbox-dark-theme
   ```

3. **Criar branch para feature**:
   ```bash
   git checkout -b feature/nova-funcionalidade
   ```

4. **Instalar dependências de desenvolvimento**:
   ```bash
   pip install -e ".[dev]"
   ```

5. **Fazer suas alterações**
6. **Testar as alterações**:
   ```bash
   # Instalar tema local
   cloudvbox-theme-install
   
   # Testar no Jupyter
   jupyter notebook
   jupyter lab
   ```

7. **Commit e push**:
   ```bash
   git add .
   git commit -m "feat: adicionar nova funcionalidade"
   git push origin feature/nova-funcionalidade
   ```

8. **Criar Pull Request**

### Padrões de Código

- Use **Black** para formatação Python
- Siga **PEP 8** para estilo Python
- Use **Prettier** para formatação CSS/JS
- Adicione comentários explicativos
- Mantenha compatibilidade com versões suportadas

### Testando

```bash
# Executar testes
pytest

# Verificar cobertura
pytest --cov=cloudvbox_dark_theme

# Linting
flake8 cloudvbox_dark_theme/
black --check cloudvbox_dark_theme/
```

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

```
MIT License

Copyright (c) 2025 cloudvBOX

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🙏 Agradecimentos

- **Equipe cloudvBOX** - Pela identidade visual e inspiração
- **Projeto Jupyter** - Pela plataforma incrível
- **Comunidade Open Source** - Pelas ferramentas e bibliotecas utilizadas

## 📞 Suporte

- **Website**: [cloudvbox.com](https://cloudvbox.com)
- **Email**: contato@cloudvbox.com
- **GitHub Issues**: [Reportar problema](https://github.com/cloudvbox/cloudvbox-dark-theme/issues)
- **Documentação**: [GitHub Wiki](https://github.com/cloudvbox/cloudvbox-dark-theme/wiki)

## 🔗 Links Úteis

- [Jupyter Notebook](https://jupyter.org/)
- [JupyterLab](https://jupyterlab.readthedocs.io/)
- [cloudvBOX](https://cloudvbox.com)
- [Guia de Contribuição](CONTRIBUTING.md)
- [Changelog](CHANGELOG.md)

---

<div align="center">
  <p>Feito com ❤️ pela equipe <strong>cloudvBOX</strong></p>
  <p>
    <a href="https://cloudvbox.com">Website</a> •
    <a href="https://github.com/cloudvbox">GitHub</a> •
    <a href="mailto:contato@cloudvbox.com">Contato</a>
  </p>
</div>


# cloudvBOX Dark Theme

<div align="center">
  <img src="https://cloudvbox.com/wp-content/uploads/2024/08/logo-preto.png" alt="cloudvBOX Logo" width="200"/>
  
  **cloudvBOX Dark Theme for JupyterLab**
  
  [![PyPI version](https://badge.fury.io/py/cloudvbox-dark-theme.svg)](https://badge.fury.io/py/cloudvbox-dark-theme)
  [![Python Support](https://img.shields.io/pypi/pyversions/cloudvbox-dark-theme.svg)](https://pypi.org/project/cloudvbox-dark-theme/)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![Downloads](https://pepy.tech/badge/cloudvbox-dark-theme)](https://pepy.tech/project/cloudvbox-dark-theme)
</div>

## 🎨 Overview

The **cloudvBOX Dark Theme** is a professional dark theme developed specifically for Jupyter Notebook and JupyterLab, incorporating the modern visual identity of cloudvBOX. This theme provides an elegant and professional visual experience for data scientists, developers, and researchers.

### ✨ Key Features

- **🌙 Professional Dark Design**: Dark background (#012837) that reduces eye strain
- **🎯 Unique Accent Color**: accent-ink teal (#3FD1B9) from the cloudvBOX Cockpit v2 palette
- **🖼️ Integrated Logo**: cloudvBOX logo elegantly positioned in the header
- **📱 Responsive Design**: Works perfectly on desktop and mobile
- **🔧 Optimized Syntax Highlighting**: Carefully selected colors for better readability
- **⚡ Simple Installation**: One-command installation via pip
- **🔄 Broad Compatibility**: Support for Jupyter Notebook and JupyterLab

### 🎨 Color Palette

| Element         | Color Name  | Hex        |
|-----------------|------------|------------|
| Main Background | Dark Blue  | `#012837`  |
| Accent Color    | Teal (accent-ink v2) | `#3FD1B9`  |
| Primary Text    | White      | `#ffffff`  |
| Secondary Text  | Light Gray | `#d1d5db`  |
| Primary Buttons | Blue       | `#3b82f6`  |
| Cards/Panels    | Dark Gray  | `#1f2937`  |


## 🚀 Installation

### Prerequisites

- Python 3.7 or higher
- Jupyter Notebook 6.0+ or JupyterLab 3.0+

### Install via pip

```bash
# Install the package
pip install cloudvbox-dark-theme

# Apply the theme
cloudvbox-theme-install
```

### Install via poetry

```bash
# Add to your project
poetry add cloudvbox-dark-theme

# Apply the theme
poetry run cloudvbox-theme-install
```

### Development Installation

```bash
# Clone the repository
git clone https://github.com/cloudvbox/cloudvbox-dark-theme.git
cd cloudvbox-dark-theme

# Install in development mode
pip install -e .

# Apply the theme
cloudvbox-theme-install
```

## 🎯 Quick Usage

After installation, restart Jupyter Notebook or JupyterLab to apply the theme:

```bash
# For Jupyter Notebook
jupyter notebook

# For JupyterLab
jupyter lab
```

The theme will be automatically applied in all future sessions.

## 📋 Available Commands

The package includes several command-line commands to manage the theme:

### Installation and Removal

```bash
# Install the theme
cloudvbox-theme-install

# Remove the theme
cloudvbox-theme-uninstall

# Full interface (recommended)
cloudvbox-theme install
cloudvbox-theme uninstall
```

### Information and Help

```bash
# Show theme information
cloudvbox-theme --info

# Show version
cloudvbox-theme --version

# Full help
cloudvbox-theme --help
```

### Advanced Options

```bash
# Force installation (no confirmation)
cloudvbox-theme install --force

# Verbose mode (more details)
cloudvbox-theme install --verbose

# Combine options
cloudvbox-theme install --force --verbose
```


## 🖼️ Screenshots

### Jupyter Notebook
![Jupyter Notebook with cloudvBOX Dark Theme](docs/images/notebook-screenshot.png)

### JupyterLab
![JupyterLab with cloudvBOX Dark Theme](docs/images/jupyterlab-screenshot.png)

### Code Cells
![Code cells with syntax highlighting](docs/images/code-cells-screenshot.png)

### Markdown Cells
![Rendered markdown cells](docs/images/markdown-cells-screenshot.png)

## 🔧 Customization

### Modifying Colors

You can customize the theme colors by editing the CSS file:

```css
:root {
    /* Customize main color */
    --cloudvbox-primary: #3FD1B9;
    --cloudvbox-primary-rgb: 63, 209, 185;
    
    /* Customize background */
    --cloudvbox-dark-bg: #012837;
    
    /* Customize text */
    --cloudvbox-text-primary: #ffffff;
}
```

### Adding Custom Styles

Create a `custom-extra.css` file in the Jupyter custom directory:

```bash
# Find custom directory
jupyter --config-dir
```

```css
/* Example of additional customization */
.cell.selected {
    border-color: #ff6b6b !important;
}

.CodeMirror {
    font-size: 16px !important;
}
```

### Advanced Configuration

For more advanced settings, you can use the Python API:

```python
from cloudvbox_dark_theme import theme_config

# Access settings
config = theme_config
print(config.colors)

# Generate custom CSS variables
css_vars = config.get_css_variables()
print(css_vars)
```

## 🔍 Troubleshooting

### Theme does not appear after installation

1. **Check installation**:
   ```bash
   cloudvbox-theme --info
   ```

2. **Reinstall the theme**:
   ```bash
   cloudvbox-theme-uninstall
   cloudvbox-theme-install
   ```

3. **Clear browser cache**:
   - Press `Ctrl+F5` (Windows/Linux) or `Cmd+Shift+R` (Mac)

### Logo does not appear

1. **Check image files**:
   ```bash
   # Check if the logo was copied
   ls ~/.jupyter/custom/images/
   ```

2. **Check permissions**:
   ```bash
   chmod 644 ~/.jupyter/images/logo-branco.png
   ```

### Conflicts with other themes

1. **Remove other themes**:
   ```bash
   # Backup current custom.css
   cp ~/.jupyter/custom/custom.css ~/.jupyter/custom/custom.css.backup
   
   # Reinstall cloudvBOX theme
   cloudvbox-theme-install
   ```

### Compatibility issues

1. **Check versions**:
   ```bash
   jupyter --version
   jupyter lab --version
   ```

2. **Update Jupyter**:
   ```bash
   pip install --upgrade jupyter jupyterlab
   ```


## 🤝 Contributing

Contributions are welcome! Here’s how you can help:

### Reporting Bugs

1. Check if the bug has already been reported in [Issues](https://github.com/cloudvbox/cloudvbox-dark-theme/issues)
2. Create a new issue with:
   - Detailed description of the problem
   - Steps to reproduce
   - Screenshots (if applicable)
   - System information (`cloudvbox-theme --info`)

### Suggesting Improvements

1. Open an issue with the tag `enhancement`
2. Describe the proposed improvement
3. Explain why it would be useful
4. Provide examples or mockups if possible

### Developing

1. **Fork the repository**
2. **Clone your fork**:
   ```bash
   git clone https://github.com/your-username/cloudvbox-dark-theme.git
   cd cloudvbox-dark-theme
   ```

3. **Create a feature branch**:
   ```bash
   git checkout -b feature/new-feature
   ```

4. **Install development dependencies**:
   ```bash
   pip install -e ".[dev]"
   ```

5. **Make your changes**
6. **Test your changes**:
   ```bash
   # Install theme locally
   cloudvbox-theme-install
   
   # Test in Jupyter
   jupyter notebook
   jupyter lab
   ```

7. **Commit and push**:
   ```bash
   git add .
   git commit -m "feat: add new feature"
   git push origin feature/new-feature
   ```

8. **Create Pull Request**

### Code Standards

- Use **Black** for Python formatting
- Follow **PEP 8** for Python style
- Use **Prettier** for CSS/JS formatting
- Add explanatory comments
- Maintain compatibility with supported versions

### Testing

```bash
# Run tests
pytest

# Check coverage
pytest --cov=cloudvbox_dark_theme

# Linting
flake8 cloudvbox_dark_theme/
black --check cloudvbox_dark_theme/
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 cloudvBOX

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🙏 Acknowledgements

- **cloudvBOX Team** – For the visual identity and inspiration
- **Jupyter Project** – For the amazing platform
- **Open Source Community** – For the tools and libraries used

## 📞 Support

- **Website**: [cloudvbox.com](https://cloudvbox.com)
- **Email**: contato@cloudvbox.com
- **GitHub Issues**: [Report an issue](https://github.com/cloudvbox/cloudvbox-dark-theme/issues)
- **Documentation**: [GitHub Wiki](https://github.com/cloudvbox/cloudvbox-dark-theme/wiki)

## 🔗 Useful Links

- [Jupyter Notebook](https://jupyter.org/)
- [JupyterLab](https://jupyterlab.readthedocs.io/)
- [cloudvBOX](https://cloudvbox.com)
- [Contribution Guide](CONTRIBUTING.md)
- [Changelog](CHANGELOG.md)

---

<div align="center">
  <p>Made with ❤️ by the <strong>cloudvBOX</strong> team</p>
  <p>
    <a href="https://cloudvbox.com">Website</a> •
    <a href="https://github.com/cloudvbox">GitHub</a> •
    <a href="mailto:vbox@cloudvbox.com">Contact</a>
  </p>
</div>