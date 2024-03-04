# Missão Prática | Nível 1 | Mundo 4

Objetivos da prática

Configurar o ambiente de desenvolvimento React Native;
Implementar a funcionalidade de entrada de texto em um componente React Native;
Implementar um Componente de Lista Dinâmica (ScrollView);
Implementar componentes React Native para exibir informações de forma dinâmica
em listas;
Empregar elementos visuais em um aplicativo React Native.

## Microatividade 1: Configurar o ambiente de desenvolvimento React Native
- Material necessário para a prática

Editor de texto ou IDE sendo opções sugeridas: Notepad++, Nano Editor, VS Code;
Navegador Web: Google Chrome, Firefox, MS Edge, Safari ou Opera;
Node.js e npm;
- Procedimentos

Esta atividade tem como objetivo guiar os passos para a configuração do ambiente de
desenvolvimento React Native para a plataforma Windows, MacOS e Linux,
fornecendo-lhes as ferramentas essenciais e orientações para começar a criar
aplicativos móveis com esta tecnologia. A seguir, você terá os passos necessários para
a instalação do Node.JS e do framework React para os três ambientes.

No meu caso foi feito para ambiente Windows

Instalando o React Native no Windows

1. Para instalar o React no Windows, você precisa ter o Node.js e o npm (Node
Package Manager) instalados em seu sistema. Se você ainda não os instalou, siga
estas etapas:
Visite a página de download do Node.js em: https://nodejs.org/en/download/
Faça o download do instalador para o seu sistema Windows utilizando a versão.
Para instalar o Node.js e o npm, execute o instalador e siga cuidadosamente as
instruções fornecidas.

IMAGEM AQUI DA VERSÂO DO NODES

2. Após a conclusão da instalação, você pode verificar se o Node.js e o npm estão
instalados abrindo um prompt de comando e executando os seguintes comandos:

node -v npm -v

Esses comandos devem exibir os números de versão do Node.js e do npm,
respectivamente.

3. Agora, para instalar o Create React App globalmente, abra um prompt de comando e
execute o seguinte comando:

npm install -g create-react-app

Esse comando instala o Create React App em seu sistema, tornando disponível para
uso em qualquer diretório.

4. Agora que você tem o Create React App instalado, pode usá-lo para criar um novo
projeto React. Para fazer isso, abra um prompt de comando, vá para o diretório onde
você deseja que o projeto fique e execute o seguinte comando:

create-react-app my-app

Substitua “my-app” pelo nome desejado para seu projeto. O Create React App criará
um novo diretório com o nome especificado e gerará um novo projeto React com uma
estrutura e configuração de projeto recomendadas.

5. Depois que o projeto for criado, vá para o diretório do projeto executando o seguinte
comando no prompt de comando:

cd my-app

6. Substitua “my-app” pelo nome do diretório do projeto. Agora, inicie o servidor de
desenvolvimento executando o seguinte comando:

npm start

### Configurações adicionais

Além dos passos anteriores, algumas outras ferramentas são necessárias para que o
ambiente esteja completo e você seja capaz de criar seus apps.

 

- Instalação do Expo (opcional): Para uma configuração mais rápida e simplificada,
você pode instalar o Expo, uma ferramenta que facilita o desenvolvimento React
Native com uma experiência de desenvolvimento mais amigável.

- Instalação do Android Studio (para desenvolvimento Android): A instalação do
Android Studio é necessária para criar aplicativos React Native para a plataforma
Android. A seguir estão os os passos resumidos para a instalação do Android Studio:
 

1)      Baixe o Android Studio:

Acesse o site oficial do Android Studio em developer.android.com/studio e clique no
botão "Download" para obter o instalador adequado ao seu sistema operacional
(Windows, macOS ou Linux).

 

2)      Instalação no Windows:

Execute o arquivo de instalação que você baixou.
Siga as instruções do assistente de instalação.
Durante a instalação, você pode escolher as opções padrão ou personalizadas,
dependendo das suas necessidades.
 
3)      Configuração Inicial:

Quando você inicia o Android Studio pela primeira vez, ele solicitará que você configure
algumas preferências, como temas, atalhos e plugins. Siga as etapas conforme
apropriado.

 

4)      Instalação do SDK do Android:

Após a configuração inicial, o Android Studio solicitará que você instale o SDK do
Android. Siga as instruções para instalar a versão do SDK Android que você deseja.

 

5)      Configuração do Emulador (Opcional):

Se você planeja desenvolver para Android e deseja testar seus aplicativos em um
emulador, você pode configurar um emulador Android no Android Studio. Vá para "AVD
Manager" (Gerenciador de Dispositivos Virtuais Android) e siga as instruções para criar
e configurar um dispositivo virtual.

 

6)      Atualizações e Plugins:

O Android Studio pode solicitar atualizações periódicas e sugestões para instalar
plugins. É recomendável manter o Android Studio atualizado e instalar plugins
conforme necessário para o desenvolvimento do seu projeto.

### Configuração do Ambiente de Desenvolvimento: Configure as variáveis de
ambiente, como o PATH, e a instalar as dependências específicas do React Native,
como o CLI do React Native e o Watchman.
### Instalação do VS code: Caso você precise editar o código do seu app será
necessário o uso de uma IDE como o VS Code. A seguir são apresentados os passos
resumidos para a instalação desta IDE.
### Baixe o VS Code: Acesse o site oficial do Visual Studio Code em
code.visualstudio.com e clique no botão "Download" para obter o instalador
apropriado para o seu sistema operacional (Windows, macOS ou Linux).
### Instalação no Windows:
Execute o arquivo de instalação que você baixou.
Siga as instruções do assistente de instalação.
Durante a instalação, você pode escolher as opções padrão ou personalizadas,
dependendo das suas necessidades.

### Execução do VS Code:
Após a instalação, inicie o Visual Studio Code a partir do menu de aplicativos (no
caso do Windows ou macOS) ou usando um comando de terminal (no caso do
Linux). Você pode simplesmente digitar code no terminal.
O Visual Studio Code é um ambiente de desenvolvimento muito popular e amplamente
utilizado por desenvolvedores de várias plataformas. A instalação é geralmente direta e
simples de realizar, e o VS Code é conhecido por sua extensibilidade e suporte a várias
linguagens de programação. Certifique-se de verificar as instruções específicas para o
seu sistema operacional, se necessário
