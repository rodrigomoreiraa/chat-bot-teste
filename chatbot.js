// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');

venom
  .create({
    session: 'session-name' //name of session
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage((message) => {
    if (message.body !=null && message.isGroupMsg === false) {
      client
        .sendText(message.from, '🤖 **Bem-vindo ao nosso Assistente de Suporte!** 🤖
        Olá! Estou aqui para tornar sua experiência conosco mais fácil e eficiente. Por favor, escolha uma das seguintes opções para que eu possa ajudar:

1. 📦 **Produto Danificado**: Se você recebeu um produto danificado ou com defeito, escolha esta opção, e nós resolveremos isso para você.

2. 🚚 **Produto Errado Entregue**: Se o produto entregue não corresponde ao que você pediu, selecione esta opção, e nós corrigiremos o erro.

3. 😞 **Insatisfação do Produto**: Se você não está satisfeito com o produto recebido e deseja discutir sua insatisfação, escolha esta opção, e nós ajudaremos a encontrar uma solução.

4. ℹ️ **Outra Ajuda**: Se você precisa de assistência com algo que não se encaixa nas opções acima, selecione esta opção, e nós estaremos à disposição para responder às suas perguntas.

Fique à vontade para escolher a opção que melhor descreve sua situação. Estamos aqui para ajudar e garantir que você tenha a melhor experiência possível com nossos produtos e serviços. 😊
  ')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }
  });
}