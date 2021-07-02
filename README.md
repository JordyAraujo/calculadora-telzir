# Calculadora de Tarifas Telzir
> Aplicação para cálculo de tarifas da Telzir telefonia.


## Problema proposto

A empresa de telefonia Telzir, especializada em chamadas de longa distância nacional, vaicolocar um novo produto no mercado chamado FaleMais.Normalmente um cliente Telzir pode fazer uma chamada de uma cidade para outra pagandouma tarifa fixa por minuto, com o preço sendo pré-definido em uma lista com os códigos DDDsde origem e destino:

| Origem | Destino | $/min |
|--------|---------|-------|
| 011    | 016     | 1.90  |
| 016    | 011     | 2.90  |
| 011    | 017     | 1.70  |
| 017    | 011     | 2.70  |
| 011    | 018     | 0.90  |
| 018    | 011     | 1.90  |

Com o novo produto FaleMais da Telzir o cliente adquire um plano e pode falar de graça atéum determinado tempo (em minutos) e só paga os minutos excedentes. Os minutosexcedentes tem um acréscimo de 10% sobre a tarifa normal do minuto. Os planos sãoFaleMais 30 (30 minutos), FaleMais 60 (60 minutos) e FaleMais 120 (120 minutos).A Telzir, preocupada com a transparência junto aos seus clientes, quer disponibilizar umapágina na web onde o cliente pode calcular o valor da ligação. Ali, o cliente pode escolher oscódigos das cidades de origem e destino, o tempo da ligação em minutos e escolher qual oplano FaleMais. O sistema deve mostrar dois valores: (1) o valor da ligação com o plano e (2)sem o plano. O custo inicial de aquisição do plano deve ser desconsiderado para esteproblema.

Ex:
| Origem | Destino | Tempo | Plano FaleMais | Com FaleMais | Sem FaleMais |
|--------|---------|-------|----------------|--------------|--------------|
| 011    | 016     | 20    | FaleMais 30    | R$ 0.00      | R$ 38.00     |
| 016    | 011     | 80    | FaleMais 60    | R$ 37.40     | R$ 136.00    |
| 011    | 017     | 200   | FaleMais 120   | R$ 167.20    | R$ 380.00    |
| 017    | 011     | 100   | FaleMais 30    | -            | -            |


## Solução

Como solução, utilizei uma estrutura simples em PHP que desenvolvi baseada na arquitetura MVC, e que utilizo em meus projetos pessoais. A escolhi pela simplicidade e limpeza do código, me trazendo um processo de desenvolvimento simples e enxuto.

Dada a baixa complexidade do sistema, removi as camadas de modelo, as checagens de usuário e todos os assets não utilizados.

Para o layout do sistema, utilizei a tela de registro do template opensource [BLK• Design System](https://www.creative-tim.com/product/blk-design-system), do designer [Creative Tim](https://www.creative-tim.com/).


## Setup de desenvolvimento

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
RewriteRule ^(.*)$ /index.php?url=$1 [QSA,L]
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

## Autor

Jordy Araújo – jordyaraujo@outlook.com