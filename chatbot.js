// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');

venom
    .create({
        session: 'atendimento',
        browser: 'chrome',

    })
let isFirstMessage = false;
let waitingForDetails = false;

function sendWelcomeMessage(client, to) {
  const  welcomeMessage =

  '🤖 Bem-vindo ao nosso Assistente de Suporte! 🤖\n' +
  'Olá! Estou aqui para tornar sua experiência conosco mais fácil e eficiente.\n' +
  'Por favor, escolha uma das seguintes opções para que eu possa ajudar:\n\n' +
  '1. 📦 Produto Danificado: Se você recebeu um produto danificado ou com defeito, escolha esta opção, e nós resolveremos isso para você.\n\n' +
  '2. 🚚 Produto Errado Entregue: Se o produto entregue não corresponde ao que você pediu, selecione esta opção, e nós corrigiremos o erro.\n\n' +
  '3. 😞 Insatisfação do Produto: Se você não está satisfeito com o produto recebido e deseja discutir sua insatisfação, escolha esta opção, e nós ajudaremos a encontrar uma solução.\n\n' +
  '4. ℹ️ Outra Ajuda: Se você precisa de assistência com algo que não se encaixa nas opções acima, selecione esta opção, e nós estaremos à disposição para responder às suas perguntas.\n\n' +
  'Fique à vontade para escolher a opção que melhor descreve sua situação.\n' +
  'Estamos aqui para ajudar e garantir que você tenha a melhor experiência possível com nossos produtos e serviços. 😊';
  isFirstMessage = false;
  client.sendText (to, welcomeMessage);

} 
venom.create().then((client) => {       
  

   client.onMessage(async (message) => {
    if (message.body != null && message.isGroupMsg === false) {
      if (!isFirstMessage) {
        // Envie a mensagem de apresentação ao receber a primeira mensagem do usuário
        sendWelcomeMessage(message.from);
        isFirstMessage = true;
      } else if (waitingForDetails) {
        // O cliente enviou detalhes do problema
        waitingForDetails = false;
        // Envie uma mensagem informando que um atendente será chamado e peça ao cliente que aguarde
        client.sendText(message.from, 'Obrigado pelos detalhes! Estou chamando um atendente para ajudar. Por favor, aguarde um momento.');
      } else if (message.body === '1') {
        // Opção 1: Produto Danificado
        client.sendText(message.from, 'Por favor, descreva os detalhes do produto danificado para que possamos ajudá-lo.');
        waitingForDetails = true; // Marque que estamos aguardando os detalhes do cliente
      } else if (message.body === '2') {
        // Opção 2: Produto Errado Entregue
        client.sendText(message.from, 'Por favor, descreva os detalhes do produto errado entregue para que possamos ajudá-lo.');
        waitingForDetails = true; // Marque que estamos aguardando os detalhes do cliente
      } else if (message.body === '3') {
        // Opção 3: Insatisfação do Produto
        client.sendText(message.from, 'Por favor, descreva sua insatisfação com o produto para que possamos ajudá-lo.');
        waitingForDetails = true; // Marque que estamos aguardando os detalhes do cliente
      } else if (message.body === '4') {
        // Opção 4: Outra Ajuda
        client.sendText(message.from, 'Por favor, descreva sua necessidade ou pergunta para que possamos ajudá-lo.');
        waitingForDetails = true; // Marque que estamos aguardando os detalhes do cliente
      }
    }
  });
}).catch((error) => {
  console.error(error);
});


    
  
