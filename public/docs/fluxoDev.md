# Fluxo ordenado para desenvolvimento do app 

### Aqui teremos a ordem que devemos construir nossa aplicação. 

## Criando o projeto
* Criar um novo projeto com Vite __npm create vite@latest__
* Instalar o pacote __npm install json-server__
* Instalar o pacote __npm install react-router-dom__
* Instalar o pacote __npm install axios__

## Configurar json-server
* Criar um arquivo fora da pasta SRC chamado __db.json__
* Criar um novo script dentro do __package.json__ chamado __"server": "json-server --watch db.json"__
* Dentro do arquivo __db.json__ criar um endpoint chamado users
 
## Resetar algumas configurações padrão do vite
* Excluir a pasta __assets__
* Excluir o icone do react dentro da pasta __public__
* Excluir o arquivo __App.css__
* Excluir o conteúdo do arquivo __App.jsx__
* Excluir os imports dos arquivos __reactLogo e viteLogo__ dentro do arquivo __App.jsx__
* Excluir o conteúdo css dentro de __index.css__
* Compilar seu projeto e verificar se não há erros __npm run dev__

## Realizar algumas configurações CSS de style-guide
* Criar as variaveis de cores para serem usadas no projeto 
* Criar uma pasta na raiz chamada **styles** e dentro dela um arquivo chamado **_global.css**
* Adicione as cores no arquivo **_global.css** na pasta **styles**, e importe o arquivo **_global.css** dentro do arquivo **index.css**
* Pegar a font **Space Mono** no google fonts com o **weights 700** e atualizar o arquivo **index.html**
* Acessar o arquivo **index.css** e adicionar a font a todo o documento.

## Criar uma pasta *Pages* e dentro da pasta nossos componentes que serão rotas.
* Criar um componente chamado **Home.jsx** e seu arquivo CSS **Home.css**.
* Criar um componente chamado **Signin.jsx** e seu arquivo CSS **Signin.css**.
* Criar um componente chamado **Signup.jsx** e seu arquivo CSS **Signup.css**.

## Criar uma pasta chamada *components* para armazenar nossos componentes reutilizáveis
* Criar um componente chamado **Layout** e seu arquivo CSS **Layout.css**
* Criar um componente chamado **Text.jsx** e seu arquivo CSS **Text.css**
* Criar um componente chamado **Input.jsx** e seu arquivo CSS **Input.css**
* Criar um componente chamado **Button.jsx** e seu arquivo CSS **Button.css**
* Criar um componente chamado **Form.jsx** e seu arquivo CSS **Form.css**
* Criar um componente chamado **Content.jsx** e seu arquivo CSS **Content.css**
* Criar um componente chamado **Container.jsx** e seu arquivo CSS **Container.css**


## Criaremos o estilo dos nossos componentes Individualmente para depois utiliza-los
* Estilizar e preparar suas props **Input**
* Estilizar e preparar suas props **Button**
* Estilizar e preparar suas props **Text**
* Estilizar e preparar suas props **Container**
* Estilizar e preparar suas props **Form**
* Estilizar e preparar suas props **Layout**

## Vamos criar nossas Rotas
* Criar uma pasta chamada **routes**
* Dentro da pasta **routes** criar dois arquivos chamados **index.jsx** e **PrivateRoutes.jsx**
* Realizar a configuração das rotas
* Apos as configurações realizar o import das rotas no **App.js**

## Vamos criar o Contexto e gerenciar as rotas privadas
* Criar uma pasta chamada **contexts**
* Criar um arquivo **auth.js** dentro da pasta **contexts**
* Crair as funções de **Signin**, **Signup**, **Signout**.
* Exportar os valores para serem consumidos.

## Vamos criar um hook customizado para acessar os valores do contexto
* Criar uma pasta chamada **hooks**
* Criar um arquivo chamado **useAuth.jsx** que encapsulara os nossos values do nosso provider
* Após as lógicas implementadas no **useAuth.jsx**, precisamos realizar algumas modificações
* Vá até o arquivo **App.js** e envolva o retorno do componente com o importe de **auth.jsx**
* Vá ate o arquivo de **PrivateRoutes** e pegue o valor de signed via hook **useAuth.jsx**

## Vamos montar nossas Pages com os componentes que estilizamos
* Vamos montar o **Signin.jsx**
* Estruturar toda a logica de validações
##
* Vamos montar o **Signup.jsx**
* Estruturar toda a logica de validações

# Home + react Redux
## Vamos Ajustar o componente Home e utilizar o redux Toolkit
* Vamos instalar o redux com o seguinte comando **`npm install @reduxjs/toolkit react-redux`**
* Criar uma pasta chamada **Store** na pasta **src** e um arquivo dentro de **store** chamado **index.js**
* Vamos disponibilizar nosso store para toda nossa aplicação envolvendo no **app.jsx** com a tag provider em todo o conteúdo do app.
* Vamos criar um Slicer dentro de pasta **store** chamado **counterSlice.js** para exemplificar.
* Criar a estrutura dentro do **counterSlice**
* Criar uma estrutura html basica na **home**, para testar o estado global. 
* Importar os componentes e atualizar os estados dentro de **home**

## Listagem de tarefas
* Crie um componente chamado **header** na pasta **components**














