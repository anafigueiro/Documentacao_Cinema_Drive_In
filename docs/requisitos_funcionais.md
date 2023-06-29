# Requisitos Funcionais

**RF.001** - O sistema deve permitir a criação de logins de acesso ao sistema:
RN.001 - O login ‘Cliente’ será destinado a pessoas físicas que desejarem utilizar o site para compra de ingressos.
RN.002 - O login ‘Staff’ se destinará exclusivamente aos funcionários do Drive-in que trabalharem no setor técnico e administrativo.
RN.003 - O login “Staff” terá a categoria “Staff Adm”, destinado exclusivamente à gerência.

**RF.002** - O sistema deve permitir que o usuário efetue seu cadastro.
RN.004 - Ao realizar o cadastro, o sistema deve criar o login e a senha conforme as informações cedidas pelos usuários “Staff” ou “Cliente”.
RN.005 - Se o usuário desejar alterar seus dados, ele deverá informar seu login e senha.
RN.006 - O login “Cliente” poderá alterar todos os seus dados.
RN.007 - Os dados do login “Staff” poderão ser alterados apenas pelo login “Staff Adm”.

**RF.003** - O sistema deve permitir o cadastro do cliente, com os seguintes campos:
Nome;
CPF;
Email;
Telefone;
Data de nascimento.

**RF.004** - O sistema deve permitir o cadastro do “Staff” e “Staff Adm”, com os seguintes campos:
Nome;
Número do crachá;
Função;
Login;
Senha.

**RF.005** - O sistema deve permitir ao usuário do login “Cliente” cadastrar os dados do cartão de crédito ou débito e pix.
RN.008 - Os dados necessários para o cadastro do cartão do cliente são:
Nome;
Tipo do cartão (crédito ou débito);
Companhia do cartão;
Número do cartão;
Código de segurança do cartão;
Nome do titular;
CPF do titular.
RN.009 - Os dados necessários para o cadastro do pix do cliente são:
Número do Pix;
Nome do titular;
CPF do titular.
RN.010 - O cadastro do cartão de crédito ou débito ou pix será opcional quando o usuário realizar o cadastro de login.
RN.011 - O cadastro do cartão só poderá ser efetivo após o cartão ser validado pelo sistema;
RN.012 - O cadastro do cartão de crédito ou débito ou pix será obrigatório quando o usuário realizar a compra de ingresso.
RN.013 - O cliente poderá cadastrar mais de uma forma de pagamento em seu cadastro.
RN.014 - O cadastro do cartão/pix ficará salvo no sistema para futuras compras.

**RF.006** - O sistema deve apresentar o catálogo de filmes cadastrados e horários disponíveis.
RN.015 - Para mostrar o catálogo, será apresentado:
Imagem do poster do filme;
Título do filme;
Duração em minutos;
Classificação indicativa;
Categoria do filme;
Sessões disponíveis (dias e horários).
RN.016 - Na tela do catálogo, o sistema deverá possuir um campo que direciona à tela de compra de ingressos.

**RF.007** - O sistema deve permitir ao usuário a realização de compras de ingressos online a partir da forma de pagamento cadastrada.
RN.017 - Para realizar a compra, o usuário deve informar:
Precisa de Vaga Exclusiva para PCD’S;
Quantidade de ingressos;
Vaga(s) escolhida(s).
RN.018- Caso o cliente compre mais de um ingresso, as vagas serão escolhidas uma por vez, na mesma tela, até finalizar a quantidade de ingressos informada.
RN.019 - Se o usuário clicar na opção “Confirmar” em “Precisa de Vaga Exclusiva para PCD 's", o sistema deve disponibilizar para escolha as vagas “29” e “30”, junto das outras opções disponíveis.
RN.020 - Se o usuário clicar na opção “não preciso” em "Precisa de Vaga Exclusiva para PCD 's", o sistema deve ocultar para escolha as vagas “29” e “30”.
RN.021- Para avançar com a compra, o cliente deverá escolher todas as vagas de acordo com a quantidade informada anteriormente.
RN.022 - A forma de pagamento será a forma cadastrada pelo usuário.

**RF.008** - O sistema deve solicitar confirmação de idade do usuário, antes da compra ser finalizada, em filmes com a classificação “+18”, através de um pop-up.
RN.023 - Antes da validação da compra de ingresso, o usuário deverá confirmar que o condutor do veículo tem 18 anos ou mais.
RN.024 - O sistema deve avançar para a tela de pagamento somente após a confirmação do termo de compromisso ser “Concordo, e estou ciente”.
RN.025 - Se o usuário não confirmar o termo de compromisso clicando na opção “não concordo”, o usuário será redirecionado à tela inicial e a compra é encerrada.
RN.026 - Se o usuário não clicar em nenhuma das opções, o sistema deve mostrar o pop-up de termo de compromisso novamente com a mensagem, adicionada acima do pop-up “CLIQUE EM UMA DAS OPÇÕES PARA PROSSEGUIR”.

**RF.009** - O sistema deve alterar o status da compra para “Aprovada” quando o pagamento for efetuado e confirmado.

RN.027 - Para confirmar o pagamento, o sistema deverá validar a forma de pagamento cadastrada.

**RF.010** - O sistema deve confirmar a compra para o usuário.
RN.028 - Será mostrado ao usuário uma mensagem de confirmação e as informações e orientações de funcionamento e entrada no cinema.

**RF.011** - O sistema deve enviar ao usuário um comprovante da compra do ingresso, via e-mail cadastrado, após a compra ter seu status alterado para “Aprovada”.
RN.029 - O comprovante de pagamento deverá conter:
Numeração do ingresso;
Nome do filme;
Horário e data da sessão;
Vaga correspondente;
QR Code do ingresso.

**RF.012** - O sistema deve realizar o controle das vagas disponíveis no estacionamento.
RN.030 - Quando o usuário escolher a(s) vaga(s) e a compra for confirmada (finalizada), o sistema marcará como ocupada a(s) mesma(s) vaga(s).
RN.031 - Os usuários só poderão escolher as vagas que estiverem disponíveis.  
RN.032 - O sistema só pode disponibilizar as vagas “29” e “30” para os usuários que confirmarem o requisito “Precisa de Vaga Exclusiva para PCD 'S" na compra.

**RF.013** - O sistema deve ter uma caixa na tela inicial para busca dos filmes cadastrados e disponíveis.
RN.033 - O usuário pode pesquisar por palavras-chave, por título ou por horário de sessão.

**RF.014** - O sistema deve permitir ao usuário enviar mensagens ao login “Staff” e manter um chat de conversa.
RN.034 - Caso o cliente estiver em seu login, para entrar em contato com a Staff basta enviar a mensagem no chat correspondente.
RN.035 - Caso o cliente não estiver em seu login, para entrar em contato com a Staff é necessário informar:
Nome completo;
Email;
Telefone;
Cidade;
Estado;
Mensagem.

**RF.015** - O sistema deve permitir ao login “Staff” responder as mensagens iniciadas pelo login “Cliente”.
RN.036 - Para responder, os usuários do “Staff” deverão estar em seu login.

**RF.016** - O sistema deve permitir ao login “Staff” cadastrar e alterar o catálogo de filmes disponíveis.
RN.037 - Os dados para cadastro de um filme são:
Imagem do poster do filme;
Título do filme;
Duração em minutos;
Classificação indicativa;
Categoria do filme;
Sessões disponíveis (dias e horários).

**RF.017** - Ao realizar a compra do ingresso, o sistema deve gerar automaticamente um QR Code.
RN.038 - O QR Code será utilizado futuramente para entrada no estabelecimento.
RN.039 - A cada compra será emitido um novo QR Code.
RN.040 - O QR Code, quando apresentado na entrada, deverá mostrar:
O nome do filme;
Os dados da sessão;
A vaga escolhida.
