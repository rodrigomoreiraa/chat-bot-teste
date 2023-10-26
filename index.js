// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');

venom
  .create({
    session: 'suporte', //name of session
    browser: 'chrome'
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

  function start(client) {
    client.onMessage((message) => {
      switch (message.body.toLowerCase()) {
        case 'oi':
          client
            .sendText(message.from, '😀 Olá! Bem-vindo ao nosso atendimento ao cliente automatizado. Como posso ajudá-lo hoje?(Digite *suporte* para continuar)')
            .then((result) => {
              console.log('Resultado: ', result); // Retorna um objeto de sucesso
            })
            .catch((erro) => {
              console.error('Erro ao enviar mensagem: ', erro); // Retorna um objeto de erro
            });
              break;        
                case 'suporte':
          client
            .sendText(message.from, 'Escolha uma das opções de suporte técnico:\n1. 👨‍💻 Problemas de software\n2. 🖥️ Problemas de hardware\n3. ❗Outras questões técnicas (OBS: Digite apenas o número da opção a ser escolhida)')
            .then((result) => {
              console.log('Resultado: ', result);
            })
            .catch((erro) => {
              console.error('Erro ao enviar mensagem: ', erro);
            });
          break;
        case '1':
          client
            .sendText(message.from, 'Você escolheu Problemas de software. Vou te direcionar para o suporte técnico de software. Por favor, aguarde um momento.')
            .then((result) => {
              console.log('Resultado: ', result);
            })
            .catch((erro) => {
              console.error('Erro ao enviar mensagem: ', erro);
            });
          // Lógica para encaminhar para suporte técnico de software
          break;
        case '2':
          client
            .sendText(message.from, 'Você escolheu Problemas de hardware. Vou te direcionar para o suporte técnico de hardware. Por favor, aguarde um momento.')
            .then((result) => {
              console.log('Resultado: ', result);
            })
            .catch((erro) => {
              console.error('Erro ao enviar mensagem: ', erro);
            });
          // Lógica para encaminhar para suporte técnico de hardware
          break;
        case '3':
          client
            .sendText(message.from, 'Você escolheu Outras questões técnicas. Vou te direcionar para o suporte técnico. Por favor, aguarde um momento.')
            .then((result) => {
              console.log('Resultado: ', result);
            })
            .catch((erro) => {
              console.error('Erro ao enviar mensagem: ', erro);
            });
          // Lógica para encaminhar para suporte técnico de outras questões técnicas
          break;
        default:
          client
            .sendText(message.from, '☹️ Desculpe, não entendi. Por favor, digite *suporte* para obter detalhes sobre nossos produtos e serviços ou "suporte técnico" para escolher uma das opções de suporte técnico.')
            .then((result) => {
              console.log('Resultado: ', result);
            })
            .catch((erro) => {
              console.error('Erro ao enviar mensagem: ', erro);
            });
      }
    });
  }



  