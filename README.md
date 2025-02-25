# WeatherAPI

## Imagem da Tela

![imagem_da_tela](https://github.com/user-attachments/assets/4a4947cb-f21a-4353-aac0-6eb03184b463)

## Descrição do Projeto
O Weather API é uma aplicação web projetada para consultar e exibir informações meteorológicas baseadas no nome de um país. A aplicação utiliza o Express para fazer chamadas à API do OpenWeather, fornecendo dados detalhados sobre o clima, incluindo a descrição do tempo, temperatura, umidade e pressão atmosférica. É um excelente projeto para quem deseja aprender sobre integração de APIs e desenvolvimento de aplicações web com Node.js e Express.

## Estrutura de Pastas

A estrutura de pastas do projeto é organizada da seguinte forma:

```
public
│
├── index.html
├── stylesheet.css
│
src
│
├── controllers
│   └── weatherController.js
│
├── models
│   └── weatherModel.js
│
├── routes
│   └── weatherRoutes.js
│
└── app.js
│
.dockerignore
.gitignore
README.md
dockerfile
package-lock.json
package.json
```

- **public**: Contém arquivos estáticos como HTML e CSS.
  - `index.html`: O arquivo HTML principal.
  - `stylesheet.css`: O arquivo de estilos CSS.
- **src**: Contém o código-fonte da aplicação.
  - **controllers**: Contém os controladores da aplicação.
    - `weatherController.js`: Controlador para a lógica de manipulação das rotas de clima.
  - **models**: Contém os modelos de dados.
    - `weatherModel.js`: Modelo para as informações de clima.
  - **routes**: Contém as rotas da aplicação.
    - `weatherRoutes.js`: Definição das rotas da API.
  - `app.js`: Arquivo principal que inicializa a aplicação.
- **.dockerignore**: Arquivo de configuração para ignorar arquivos e diretórios ao criar a imagem Docker.
- **.gitignore**: Arquivo para especificar quais arquivos e diretórios o Git deve ignorar.
- **README.md**: Este arquivo.
- **dockerfile**: Arquivo de configuração para construir a imagem Docker.
- **package-lock.json**: Arquivo que descreve a árvore de dependências exata.
- **package.json**: Arquivo de configuração do projeto Node.js com as dependências e scripts.

## Validação de Rota da API (GET)

![insomnia](https://github.com/user-attachments/assets/aaa5afa8-4764-41a3-a469-bb9b524a3cbf)

Utilizamos o Insomnia para validar a rota da API e garantir que a integração com o OpenWeather está funcionando conforme esperado.

## Comandos para Executar o Projeto

### Clone o Repositório

```bash
git clone https://github.com/gabrielleg0mes/WeatherAPI
```

### Instale as Dependências

Navegue até o diretório do projeto e instale as dependências:

```bash
cd weather-api
npm install
```

### Configure as Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto e adicione a chave da API do OpenWeather:

```
OPENWEATHER_API_KEY=your_api_key_here
```

### Inicie o Servidor

```bash
node src/app.js
```

O servidor estará disponível em [http://localhost:3000](http://localhost:3000).

## Cenários de Teste

#### Cenário 1: Exibir Informações de Clima para uma Cidade Válida
- Dado que o usuário está na página inicial
- Quando o usuário insere "London" no campo de cidade
- E clica no botão "Buscar Clima"
- Então as informações de clima para "London" devem ser exibidas

#### Cenário 2: Exibir Mensagem de Erro para uma Cidade Inválida
- Dado que o usuário está na página inicial
- Quando o usuário insere "CidadeInvalida" no campo de cidade
- E clica no botão "Buscar Clima"
- Então uma mensagem de erro deve ser exibida

#### Cenário 3: Exibir Aviso se Nenhum Nome de Cidade For Inserido
- Dado que o usuário está na página inicial
- Quando o usuário não insere nenhum texto no campo de cidade
- E clica no botão "Buscar Clima"
- Então uma mensagem de aviso deve ser exibida

## Agradecimentos

Obrigado por explorar o Weather API! Sua contribuição é essencial para o sucesso deste projeto. Se você encontrar problemas, tiver sugestões ou quiser colaborar, por favor, abra uma issue ou envie um pull request. Agradecemos sua participação e apoio!
