# Plano de Testes de Software

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.
 
## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

# Registro de Testes de Software

Pré-requisitos: Computadores, tablets e smartphones com acesso à internet; navegador com versão compatível com tecnologia 
HTML5.

CT.01 - Acesso à página Início:

    	1 - Conectar-se ao site usando o link: https://projeto-playlist.herokuapp.com/
    
Resultados obtidos:

    	Acessando o site, temos a página Início, que contém o descritivo principal do site.

CT.02 - Acesso à seção de Transtornos:

	1 - Conectar-se ao site usando o link: https://projeto-playlist.herokuapp.com/
	2 - Clicar no link Transtornos da Navbar.

Resultados obtidos:
	
	Redirecionamento para a própria página Início na seção Transtornos, que traz informações sobre ansiedade e depressão.

CT.03 - Acesso à página de Podcasts de Ansiedade:

	1 - Conectar-se ao site usando o link: https://projeto-playlist.herokuapp.com/
	2 - Clicar no link Podcasts-Ansiedade.	

Resultados obtidos:

	Acesso aos perfis dos profissionais com os links de podcasts de ansiedade previamente cadastrados.

CT.04 - Acesso à página de Vídeos de Ansiedade:

	1 - Conectar-se ao site usando o link: https://projeto-playlist.herokuapp.com/
	2 - Clicar no link Vídeos-Ansiedade.	

Resultados obtidos:

	Acesso aos perfis dos profissionais com os links de vídeos de ansiedade previamente cadastrados.

CT.05 - Acesso à página de Podcasts de Depressão:

	1 - Conectar-se ao site usando o link: https://projeto-playlist.herokuapp.com/
	2 - Clicar no link Podcasts-Depressão.

Resultados obtidos:

	Acesso aos perfis dos profissionais com os links de podcasts de depressão previamente cadastrados.

CT.06 - Acesso à página de Vídeos de Depressão:

	1 - Conectar-se ao site usando o link: https://projeto-playlist.herokuapp.com/
	2 - Clicar no link Vídeos-Depressão.

Resultados obtidos:

	Acesso aos perfis dos profissionais com os links de vídeos de depressão previamente cadastrados.

CT. 07 - Acesso à página de Músicas:
	
	1 - Conectar-se ao site usando o link: https://projeto-playlist.herokuapp.com/
	2 - Clicar no link Músicas.

Resultados obtidos:

	Acesso aos links que redirecionam para sites que contêm playlists de músicas.

CT. 08 - Acesso à seção Inscreva-se em nossa Newsletter:

	1 - Conectar-se ao site usando o link: https://projeto-playlist.herokuapp.com/
	
Resultados obtidos:

	Acesso ao formulário de inscrição da newsletter.

CT. 09 - Acesso à seção Sobre Nós:

	1 - Conectar-se ao site usando o link: https://projeto-playlist.herokuapp.com/
	2 - Clicar no link Sobre Nós da Navbar.

Resultados obtidos:
	
	Redirecionamento para o footer da página Home, que traz informações sobre o site.

CT - 10 - Acesso à página Entrar:

	1 - Conectar-se ao site usando o link: https://projeto-playlist.herokuapp.com/
	2 - Clicar no link Entrar da Navbar.

Resultados obtidos:

	Redirecionamento para a página Entrar, que apresenta:
		- Navbar com links que redirecionam para a página inicial;
		- Formulário para os profissionais entrarem no site;
		- Informações de como recuperar a senha; 
		- Acesso à página de cadastro para quem ainda não é usuário.


CT - 11 - Acesso à página de Cadastro:
	
	1 - Conectar-se ao site usando o link: https://projeto-playlist.herokuapp.com/
	2 - Clicar no link Entrar da Navbar.
	3 - Clicar no link Cadastre-se da página Entrar.

Resultados obtidos:

	Redirecionamento para a página Cadastro, que contém formulário para os profissionais se cadastrarem no site. 
	

CT - 12 - Acesso à página Perfil:

	1 - Conectar-se ao site usando o link: https://projeto-playlist.herokuapp.com/
	2 - Clicar no link Entrar da Navbar.
	3 - Clicar no link Cadastre-se da página Entrar.
	4 - Preencher o formulário e clicar em cadastrar.
	
Resultados obtidos: 

	Acesso ao formulário de Perfil, onde o profissional fala um pouco sobre si, e cadastra as playlists e após retorna para a página Início.
	Botão sair, para retornar à pagina inicial sem preencher o formulário de Perfil.


CT - 13 - Validação do formulário Inscreva-se em nossa newsletter:

	 1 - Conectar-se ao site usando o link: https://projeto-playlist.herokuapp.com/
	 2 - Acesso ao formulário de inscrição da newsletter.
	 3 - Preencher o formulário.

Resultados obtidos:
		
	Preencher todos os campos do formulário corretamente, caso contrário acusará erro.

CT - 14 - Validação da responsividade do site:
	
	1 - Conectar-se ao site usando o link: https://projeto-playlist.herokuapp.com utilizando computador;
	2 - Conectar-se ao site usando o link: https://projeto-playlist.herokuapp.com utilizando smartphone;
	3 - Conectar-se ao site usando o link: https://projeto-playlist.herokuapp.com utilizando tablet;

Resultados obtidos:

	1 - Ao acessar o link do site a página Início é aberta, apresentando as principais informações da organização.
        2 - Ao acessar o link do site a página Início é aberta, apresentando as principais informações da organização, porém com o layout do site adaptado 
ao smartphone utilizado para o acesso.
	3 - Ao acessar o link do site a página Início é aberta, apresentando as principais informações da organização, porém com o layout do site adaptado 
ao tablet utilizado para o acesso.


## Avaliação

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
