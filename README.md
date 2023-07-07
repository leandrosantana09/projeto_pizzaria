
Nesta aplicação será usada a arquitetura MSC. Em poucas palavras as camadas controller e service podem ser descritas em,

- service:

Responsável por converter as regras de negócio e controlar o acesso aos dados. 

- controller:

Responsável por fazer o contato direto com as requisições, enviando apenas os dados o necessário para a camada de Services.


# Estrutura de pastas da aplicação central

```shell
├───src
│   ├───config
│   ├───middlewares
│   ├───prisma
│   │   └───express
│   ├───controllers
│   │   ├───category
│   │   ├───item
│   │   ├───order
│   │   ├───product
│   │   └───user
│   └───services
│       ├───category
│       ├───item
│       ├───order
│       ├───product
│       └───user
```

# Ferramentas ultilizadas

- Java Script 
- Type Script
- Node JS
- JWT
- Multer
- Prisma
- ElephantSQL


# Referências:

- https://dev.to/gabrielhsilvestre/controller-e-service-uma-breve-introducao-24hk

- [Projeto Completo NodeJS, React, React Native, TypeScript](https://www.udemy.com/course/dev-fullstack/?utm_source=adwords-intl&utm_medium=udemyads&utm_campaign=LongTail_new_la.PT_cc.BR&utm_content=deal4584&utm_term=_._ag_118044111482_._kw__._ad_491671393381_._de_c_._dm__._pl__._ti_dsa-1131315795588_._li_9101221_._pd__._&gclid=Cj0KCQjw756lBhDMARIsAEI0AglRBEKiJBHoUd8ll6SQgiStG_i3v3S8igMl2ums3EEd9MNINSeBncUaArJFEALw_wcB)