# 📸 Álbum de Felicidades

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Responsivo](https://img.shields.io/badge/Design-Responsivo-6DB33F?style=for-the-badge)

### Um álbum digital elegante para preservar momentos especiais

<img src="https://skillicons.dev/icons?i=html,css" alt="Ícones das tecnologias HTML e CSS" />

</div>

---

## ✨ Sobre o projeto

**Álbum de Felicidades** é uma galeria fotográfica construída com HTML e CSS puro. As fotografias são apresentadas em um carrossel tridimensional com uma identidade visual clara, acolhedora e moderna.

O projeto foi pensado para funcionar em computadores, tablets e celulares, mantendo uma boa experiência visual em diferentes tamanhos de tela.

---

## 🎨 Recursos

- 🔄 **Carrossel 3D automático**  
- 🖼️ **13 fotografias familiares**  
- ⏸️ **Rotação interrompida ao passar o cursor**  
- 📱 **Adaptação responsiva para telas menores**  
- ♿ **Textos alternativos nas imagens**  
- 🌿 **Paleta clara, suave e contemporânea**  
- 🎭 **Animação reduzida para usuários que preferem menos movimento**  
- 🔍 **Visualização ampliada ao clicar na fotografia**  
- ⏸️ **Pausa automática do carrossel durante a ampliação**  
- 🚫 **Nenhuma biblioteca ou framework externo**

---

## 🛠️ Tecnologias utilizadas

<div align="center">

| Tecnologia | Utilização |
|:---:|:---|
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="42" /> | Estrutura semântica e conteúdo da galeria |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="42" /> | Layout 3D, animações e responsividade |

</div>

---

## 📂 Estrutura do projeto

```text
Album/
├── index.html
├── style.css
├── script.js
├── README.md
└── imagens/
    ├── ArleteShow.jpeg
    ├── Arnaldinho.jpeg
    ├── EuCasamento.jpeg
    ├── Lola.jpeg
    ├── SaraAnel.jpeg
    ├── SarinhaSu.jpeg
    ├── SuLinda.jpeg
    ├── ThiagoJuiz.jpeg
    ├── Noivado.jpeg
    ├── MainhaJovem.jpeg
    ├── Eubarba.jpeg
    ├── Entrada.jpeg
    └── Lin.jpeg
```

---

## 🚀 Como executar

### Opção 1: Abrir diretamente

Abra o arquivo `index.html` em seu navegador.

### Opção 2: Usar um servidor local

Com Python instalado, execute no terminal:

```bash
cd "caminho/para/Album"
python -m http.server 5500
```

Depois, acesse:

```text
http://localhost:5500
```

---

## 🖼️ Personalização

### Trocar uma fotografia

Substitua a imagem dentro da pasta `imagens` ou altere o atributo `src` no `index.html`:

```html
<img src="imagens/MinhaFoto.jpeg" alt="Descrição da fotografia">
```

### Alterar as cores

As principais variáveis visuais estão no início do arquivo `style.css`:

```css
:root {
    --gold: #a66f3f;
    --ink: #29221d;
    --carousel-width: 278px;
    --carousel-height: 368px;
    --rotation-speed: 42s;
}
```

### Ajustar a velocidade

Altere o valor de `--rotation-speed`:

```css
--rotation-speed: 42s;
```

Valores menores deixam o carrossel mais rápido; valores maiores deixam o movimento mais suave.

---

## 🌐 Publicação

Este projeto pode ser publicado gratuitamente em plataformas como:

- [GitHub Pages](https://pages.github.com/)
- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)

Para publicar no GitHub Pages, envie os arquivos para um repositório, acesse **Settings > Pages**, selecione a branch principal e a pasta raiz do projeto.

---

## 📄 Licença

Este projeto pode ser utilizado como portfólio, álbum pessoal ou base para novos projetos. Caso seja distribuído publicamente, verifique os direitos das imagens utilizadas.

---

<div align="center">

Feito com carinho para guardar momentos que merecem ser lembrados 💛

</div>
