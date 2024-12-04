# To-Do List

---

Este é um aplicativo de lista de tarefas simples desenvolvido com React Native e Expo.

O objetivo do projeto é criar uma interface que exiba cartões de tarefas, permitindo que o usuário adicione, visualize e gerencie as tarefas em uma lista interativa.

O projeto usa vários recursos do React Native, como componentes, estados e props. O estilo é feito com módulos CSS.

> [!summary] Sumário
>
> - [Sobre](#sobre)
> - [Tecnologias Usadas](#tecnologias-usadas)
> - [Instalação](#instalação)
> - [Estrutura do Projeto](#estrutura-do-projeto)
> - [Como Contribuir](#como-contribuir)
> - [Licença](#licença)

## Sobre

---

O To-Do List permite ao usuário adicionar tarefas, marcar como concluídas e visualizar o total de tarefas pendentes. Ele utiliza componentes React Native modulares para facilitar a manutenção e o desenvolvimento do código.

Este projeto foi criado como parte de um aprendizado prático de React Native, utilizando a componentização como principal técnica de organização.

![[ToDO_List.png]]

## Tecnologias Usadas

---

- **React Native**: Framework utilizado para criar aplicativos móveis usando JavaScript.
- **Expo**: Ferramenta para facilitar o desenvolvimento de aplicativos React Native.
- **JavaScript**: Linguagem de programação usada para lógica de implementação.
- **React**: Biblioteca JavaScript para a construção de interfaces de usuário.

## Instalação

---

Para iniciar este projeto localmente, siga as instruções abaixo:

1. **Criando o projeto**:

```bash
	npx create-expo-app@latest --template
```

Com este código você irá criar um novo projeto usando o Expo como ferramenta de desenvolvimento. Seguindo com as instruções, escolha o modelo a ser usado:

```bash
    Choose a template: » - Use arrow-keys. Return to submit.
    Default - includes tools recommended for most app developers
>   Blank
    Blank (TypeScript)
    Navigation (TypeScript)
    Blank (Bare)
```

Escolha a opção "blank" (em branco) para iniciarmos um projeto vazio, após esta etapa será solicitado o que digite o nome do projeto, **_`ToDO_List`_**, que também será o nome do diretório.

2. **Instale as dependências**:

Nativamente não temos o módulo web instalado, sendo assim, vamos acessar o diretório do projeto e realizar a instalação do módulo com o seguinte comando:

```bash
	cd ToDO_List
	npx expo install react-native-web react-dom @expo/metro-runtime
```

3. **Inicie o servidor Expo**:

```bash
	npx expo start --web
```

Este comando iniciará o servidor do Expo no seu navegador, e você poderá escanear o código QR (que aparece no seu _`shell`_) com o Expo Go no seu dispositivo móvel ou usar um emulador Android/iOS.

## Estrutura do Projeto

---

A estrutura do diretório está organizada da seguinte forma:

```
ToDo_List/
│
├── .expo/                    # Arquivos temporários gerenciados pelo Expo
├── assets/                   # Imagens e recursos estáticos
├── node_modules/             # Dependências do projeto
├── src/                      # Código fonte do aplicativo
│   ├── components/           # Componentes reutilizáveis
│   │   ├── Card/             # Componente para exibir uma tarefa
│   │   ├── Counter/          # Componente para contar tarefas pendentes/concluídas
│   │   ├── Form/             # Componente para o formulário de adicionar tarefas
│   │   ├── Main/             # Componente principal que integra todos componentes
│   │   └── Title/            # Componente para o título da aplicação
│   └── image/                # Imagens usadas no aplicativo
│       ├── clipboard.png
│       └── todoLogo.png
├── .gitignore                # Arquivo de exclusão do Git
├── App.js                    # Arquivo de entrada do aplicativo
├── app.json                  # Configuração do Expo
├── babel.config.js           # Configuração do Babel
├── package-lock.json         # Arquivo de bloqueio de versão do npm
└── package.json              # Dependências e configurações do npm
```

### Descrição das Pastas e Arquivos

---

- **`src/components/`**: Contém os componentes principais do aplicativo.
  - **`Card/`**: Componente para exibir tarefas.
  - **`Counter/`**: Componente para contar as tarefas pendentes.
  - **`Form/`**: Componente para adicionar novas tarefas.
  - **`Main/`**: Componente principal que organiza o layout e lógica da aplicação.
  - **`Title/`**: Componente para exibir o título da aplicação.
- **`assets/`**: Armazena imagens e outros recursos estáticos usados no aplicativo.
- **`App.js`**: Arquivo principal que importa e utiliza os componentes.
- **`package.json`**: Contém as dependências e scripts do projeto.

## Como Contribuir

---

Contribuições são bem-vindas! Sinta-se à vontade para criar um _pull request_ com suas melhorias ou correções. Se você deseja contribuir com este projeto, siga estas etapas:

1. Faça um **_fork_** deste repositório.
2. Crie uma **nova _branch_** para sua contribuição (`git checkout -b feature/nova-funcionalidade`).
3. Faça suas alterações e **_commit_** (`git commit -am 'Adiciona nova funcionalidade'`).
4. Envie sua _branch_ para o repositório remoto (`git push origin feature/nova-funcionalidade`).
5. Abra um **_Pull Request_**.

## Licença

---

Este projeto está sob a [Licença MIT](https://chatgpt.com/c/LICENSE).
