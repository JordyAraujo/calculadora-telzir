# Utilizando

Primeiramente, ao clonar o sistema, deve-se rodar em um terminal (certifique-se de ter o [composer](https://getcomposer.org/) instalado no sistema)
```
composer upgrade
```

Para utilizar a estrutura, basta setar as configurações iniciais de acordo com os arquivos definidos na sessão ["Estrutura de Arquivos"](#estrutura-de-arquivos) e rodar o sistema num servidor apache de sua escolha.
O uso da pasta htdocs do [XAMPP](https://www.apachefriends.org/pt_br/index.html) é uma opção limpa e simples de executar como ambiente de desenvolvimento.

# Estrutura de Arquivos

### ./index.php

Inicia a sessão e define módulos do autoload

## Arquivos de Configuração:

### ./environment.php

Define o ambiente utilizado

### ./config.php

Contém definições de banco. Descomentar tudo e preencher configurações locais.

### ./.htaccess

Arquivo de configuração do Servidor Web Apache. Trocar "PHP_base" pelo nome do seu sistema em desenvolvimento. Se em produção utilize
``` PHP
RewriteRule ^(.*)$ /PHP_base/index.php?url=$1 [QSA,L]
```

## MVC:

### ./Views/

Pasta com arquivos de visão do projeto. Todos os arquivos PHP que geram HTML devem estar aqui, podendo ser separados em subdiretórios

#### ./Views/template.php

Arquivo template que serve de base para todo o sistema. As páginas chamadas pelos Controllers serão renderizadas dentro dele.

### ./Models/

Arquivos de modelo do sistema. Aqui devem ficar as consultas ao banco. Uma boa prática é nomear os arquivos de acordo com a tabela do banco que acessam, em Camel Case.

### ./Controllers/

Diretório com os controladores do sistema. Uma boa prática é nomeá-los de acordo com o Model relacionado, colocando a palavra "Controller" depois.
> Importante: A nomenclatura dos controllers idealmente deve estar em Camel Case, porém, apenas a primeira letra do nome do arquivo e o "C" de "Controller" devem estar em maiúsculo neste caso para evitar conflitos. Sistemas Linux podem apresentar problemas de leitura nestes arquivos.

## Imports:

### ./assets/

Aqui devem ficar os arquivos auxiliares que serão importados pelo sistema, como css, js e imagens.