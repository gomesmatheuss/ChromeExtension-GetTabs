# Gerenciador de Abas - Extensão para Chrome

Uma extensão para o Google Chrome que exibe informações sobre as abas abertas no navegador e permite exportá-las para **TXT** ou **JSON**.

---

## Funcionalidades

- Exibe a quantidade de abas abertas.
- Exporta informações das abas para um arquivo `.txt`.
- Exporta informações das abas para um arquivo `.json`.

---

## Instalação

1. Baixe o código-fonte deste repositório:
   git clone https://github.com/gomesmatheuss/ChromeExtension-GetTabs.git

2. Acesse a página de extensões no Chrome:
    chrome://extensions/

3. Ative o Modo de Desenvolvedor (canto superior direito).

4. Clique em "Carregar sem compactação".

5. Selecione a pasta do repositório baixado.

---

## Como Usar

1. Clique no ícone da extensão no navegador.

2. Utilize os botões para exportar as informações:
    - Gerar TXT: Cria um arquivo `.txt` com as informações básicas das abas abertas.
    - Exportar JSON: Gera um arquivo `.json` com todos os detalhes das abas abertas, incluindo informações do grupo.

---

## Estrutura do Projeto

- `manifest.json`: Configuração da extensão.
- `popup.html`: Interface do popup.
- `popup.js`: Lógica principal da extensão, incluindo coleta de abas e exportação de arquivos.
- `style.css`: Estilização do popup.

---

## Tecnologias Utilizadas

- `HTML`: Para a interface do popup.
- `CSS`: Para a estilização.
- `JavaScript`: Para interagir com as APIs do Chrome.
- `API Chrome Extensions`: Para acessar informações das abas e grupos.

---

## Exportação JSON - Exemplo de Estrutura

O arquivo JSON gerado tem a seguinte estrutura:

```json
[
  {
    "id": 24,
    "title": "Google",
    "url": "https://www.google.com/",
    "groupId": 1,
    "groupInfo": {
      "title": "Trabalho",
      "color": "blue"
    }
  },
  {
    "id": 25,
    "title": "YouTube",
    "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "groupId": -1,
    "groupInfo": null
  }
]
```
