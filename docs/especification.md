# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

    1. Ana, 17 anos, estudante e atleta de ginástica rítmica desportiva, tem uma vida corrida entre dedicar-se aos estudos e ao esporte. Seus pais sempre a incentivaram na prática esportiva, mas Ana quer mesmo é cantar. Com receio de decepcionar as expectativas de seus pais, Ana aceita seguir na prática da ginástica, que exige muita dedicação e responsabilidade. Após muitos anos realizando as atividades esportivas sem gostar, e com medo de falhar nas apresentações, Ana está roendo as unhas, tem dificuldade para dormir, e antes das provas da ginástica sente um aperto no peito e algumas vezes tremores, o que vem atrapalhando sua performance e gerando preocupação em todos à sua volta. Ana percebe que seus sintomas estão piorando e ela precisa entender melhor o que se passa para poder falar sobre o assunto com seus pais.
    2. Breno, 45 anos, casado, analista de sistemas, está trabalhando em home office devido à pandemia do coronavírus. Breno é muito inseguro e se sente aliviado de estar em isolamento; sempre escuta de sua esposa e amigos que ele é muito ansioso, mas nunca procurou se informar sobre isso. Após meses trabalhando em casa, fazendo compras via internet e sem sair para qualquer lugar, está se sentindo nervoso e dormindo mal. A vacinação já iniciou e ele ainda segue muito agitado, o medo o domina. Com a retomada de algum trabalho presencial, é escalado para uma viagem, e a caminho do aeroporto está muito preocupado de como será a viagem, dos riscos, começa a suar e se sentir angustiado. Ao aguardar na sala de embarque, está tocando uma música clássica, e ele se surpreende pois se sente mais calmo ao som da sinfonia.
    3. Luciana, 29 anos, solteira, jornalista, é funcionária pública no Ministério da Economia em Brasília. Sozinha na capital federal, fazendo novas amizades, conhece Marcos e começam um namoro. Fragilizada de um término de namoro traumático, dessa vez acredita estar no caminho certo, mas após dois anos Marcos termina o relacionamento sem muitas justificativas, deixando Luciana arrasada. Longe da família e amigos, se sentindo desprezada e humilhada, Luciana não tem vontade de sair de casa, está irritadiça no trabalho, não se alimenta direito, sofre com insônia e não sente estímulo para viver. Ela sabe que precisa de orientação, mas não tem ideia de onde buscar.
    4. Helena, 70 anos, viúva, moradora da cidade de São Paulo, ex-professora universitária, está muito cansada e desmotivada, sem causa aparente. Ela acha que é o cansaço de afazeres diários, mas o tempo está passando e já são muitas as noites de insônia, os alimentos já não têm mais sabor; a higiene pessoal está em segundo plano, a aula de dança está abandonada e ela não abre mais as cortinas da casa, além de não responder mensagens da família e amigos. Isolada do convívio social, mantém pensamentos de que a vida já não tem sentido. Seus filhos estão preocupados e a orientam a usar a internet e pesquisar sobre o que está sentindo, para entender melhor o que se passa e procurar ajuda profissional.
    5. Érika, 38 anos, casada, psicóloga, está preocupada com o aumento de casos de depressão e ansiedade. Ela acha muito interessante a ideia de ter conteúdos de podcasts e vídeos disponibilizados não só para seus pacientes, como também para o público em geral que possa precisar de informação para esses problemas. Acredita que uma plataforma web que direcione o público para os conteúdos será a ideal e está em busca de desenvolvedores.
    6. Paulo César, 43 anos, psiquiatra, é casado com Érika e eles possuem uma clínica juntos. Ele se interessa não só em ter conteúdos de vídeos e músicas direcionados pela plataforma que sua esposa propõe, como também em patrocinar a criação dessa plataforma.
    7.Jaqueline, 23 anos, analista de suporte, sabe bem como um administrar um sistema web. Está à procura de emprego, e futuramente encontrará um anúncio com uma vaga de administrador para um sistema de playlists de autoajuda, e será contratada.
    8.João Luiz, 57 anos, é proprietário de uma rede de farmácias em uma grande capital. Ele achou muito boa a ideia de Érika e tem interesse em patrocinar a criação desse sistema web e promover a sua logomarca.

## Histórias de Usuários 

Com base na análise das personas foram identificadas as seguintes histórias de usuários:

### Como Ana:
* Eu quero compreender melhor os sintomas e emoções que venho sentindo.
* Para poder conversar e pedir ajuda aos meus pais.

### Como Breno:
* Eu quero ter um contato rotineiro com conteúdos relacionados a ansiedade.
* Para que eu possa ir melhorando aos poucos meus medos e preocupações.

### Como Nelita:
* Eu quero ter controle dos meus sentimentos e impulsos.
* Para me sentir menos carente e respeitar os espaços que meus filhos necessitam.

### Como Adriana:
* Eu quero ter forças para realizar mudanças nas minhas relações íntimas.
* Para que eu possa voltar a me valorizar e escolher o que agrega ou não a minha vida.

### Como Luciana:
* Eu quero iniciar algum tratamento para a minha situação.
* Para poder ter contato com conteúdos e profissionais capazes de propor auxílio na reconstrução de autoestima e confiança.

### Como Helena:
* Eu quero esclarecer os motivos pelos quais me sinto deprimida e sem estímulos.
* Para que eu possa buscar ajuda profissional e voltar a estimar a vida e me sentir bem novamente.

### Como Érika:
* Eu quero disponibilizar conteúdos e materiais em locais especializados.
* Para que eu possa agregar e disseminar ajuda a quem necessita.

### Como Paulo César:
* Eu quero disponibilizar contéudos, além de, patrocinar a criação de um sistema dedicado a causa.
* Para agregar, disseminar e incentivar ajuda a quem necessita. 

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Cadastrar links das playlists de músicas | ALTA | 
|RF-002| Cadastrar links de playlists de podcasts informativos sobre depressão e ansiedade | ALTA | 
|RF-003| Cadastrar links de playlists de vídeos informativos sobre depressão e ansiedade | ALTA |
|RF-004| Permitir que o profissional cadastre seu perfil | MÉDIA |
|RF-005| Permitir que o profissional cadastre conteúdos | MÉDIA |
|RF-006| Permitir que o profissional divulgue suas redes sociais | BAIXA |
|RF-007| Permitir que o usuário filtre as recomendações de músicas,  podcasts e vídeos separados por categorias | BAIXA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve conter somente conteúdos informativos ligados à depressão e à ansiedade | ALTA |
|RNF-002| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-003| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                                                                   |
|--|---------------------------------------------------------------------------------------------|
|01| Apenas um idioma - Português                                                                |
|02| Não pode ser desenvolvido um módulo de backend                                              |
|03| Restrito a 2 tipos de transtornos                                                           |
|04| Patrocínio somente de empresas e profissionais da área da saúde                             |
|05| Remuneração apenas com anúncios                                                             |
|06| Não faz diagnósticos e nem tratamentos                                                      |
|07| Conteúdo fornecido somente por profissionais qualificados da área da psiquiatria/psicologia |




