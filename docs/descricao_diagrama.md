# 4.1 Descrição de caso de uso

## Enviar/responder chat:

Descrição: esse caso de uso é iniciado pelo usuário quando ele requisita ao sistema abrir o chat para mandar uma mensagem ao funcionário. O sistema fornece ao funcionário (login staff) a possibilidade de responder a mensagem através do próprio chat, sanando as dúvidas do cliente.
Objetivo: possibilitar a comunicação entre cliente (usuário) e funcionário através de troca de mensagens diretas.
Atores envolvidos: cliente e staff
Interação entre atores e sistema:

1. O cliente solicita iniciar o chat;
2. O sistema exibe a interface do chat no canto inferior direito da tela mostrando uma mensagem para tirar a dúvida;
3. O cliente digita e manda a mensagem;
4. O sistema salva a mensagem e a exibe na tela do chat;
5. O staff recebe a mensagem (EX01);
6. O staff responde a mensagem (RN01);
7. O sistema salva a mensagem e a exibe na tela do chat;
8. O cliente ou o staff finaliza o chat;
9. O sistema fecha a interface.

- Exceções:

  **EX01**- Se a conversa já estiver finalizada, o staff pode nesse momento já finalizar o chat.

- Regras de negócio

  **RN01**- Para responder, os usuários do “Staff” deverão estar em seu login

## Confirmar idade:

Descrição: esse caso de uso é iniciado pelo sistema
Objetivo: verificar se o usuário que efetuar a compra realmente é maior de idade pois somente pessoas maiores de 18 anos serão aptas a dirigir e entrar no cinema.
Atores envolvidos: cliente e sistema
Interação entre atores e sistema:

1. O cliente finaliza a compra;
2. O sistema exibe um pop-up solicitando a confirmação da maioridade do condutor do veículo;
3. O cliente cConfirma a solicitação (EX01 e EX02);
4. O sistema fecha o pop-up e continua o processo de finalização da compra (RN01).

- Exceções:

**EX01**- Se o usuário não confirmar o termo de compromisso clicando na opção “não concordo”, o usuário será redirecionado à tela inicial e a compra é encerrada.

**EX02**- Se o usuário não clicar em nenhuma das opções, o sistema deve mostrar o pop-up de termo de compromisso novamente com a mensagem, adicionada acima do pop-up “CLIQUE EM UMA DAS OPÇÕES PARA PROSSEGUIR”.

- Regras de negócio

**RN01**- O sistema deve avançar para a tela de pagamento somente após a confirmação do termo de compromisso ser “Concordo, e estou ciente”.
