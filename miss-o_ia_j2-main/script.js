    const caixaprincipal = document.querySelector(".caixa-principal");
    const caixaPerguntas = document.querySelector(".caixa-perguntas");
    const caixaAlternativas = document.querySelector(".caixa-alternativas");
    const caixaResultado = document.querySelector(".caixa-resultado");
    const textoResultado = document.querySelector(".texto-resultado");

    const perguntas = [
        {
            enunciado: "Você já presenciou alguém usando drogas em um ambiente escolar ou de trabalho?",
            alternativas: [
                {
                    texto: "Sim!",
                    afirmacao: "Sua missão é informar um responsável ou buscar ajuda profissional. Não ignore a situação, pois sua ação pode ser crucial para a segurança e o bem-estar de quem está envolvido. "
                },
                {
                    texto: "Não!",
                    afirmacao: "Sua missão é manter-se informado sobre os sinais de uso de drogas e estar preparado para agir se você testemunhar essa situação. Eduque-se sobre as consequências e busque maneiras de apoiar a prevenção."
                }
            ]
        },
        {
            enunciado: "Quando você vê alguém sendo influenciado a usar drogas, você tende a:",
            alternativas: [
                {
                    texto: "Ignorar a situação!",
                    afirmacao: "Sua missão é aprender sobre a gravidade do uso de drogas e a importância de intervir. Procure entender como ajudar e apoiar a pessoa envolvida, e informe-se sobre recursos de ajuda disponíveis."
                },
                {
                    texto: "Tentar ajudar ou procurar ajuda!",
                    afirmacao: "Continue sendo uma pessoa proativa e incentive outros a fazerem o mesmo. Compartilhe informações sobre como buscar ajuda e ofereça apoio para aqueles que precisam se afastar das drogas."
                }
            ]
        },
        {
            enunciado: "Você acredita que o uso de drogas é um problema sério?",
            alternativas: [
                {
                    texto: "Sim, é muito sério!",
                    afirmacao: "Sua missão é se tornar um defensor ativo contra o uso de drogas, compartilhando informações sobre os riscos e impactos com colegas e em suas redes sociais. Contribua para um ambiente mais seguro e saudável."
                },
                {
                    texto: "Não, não é tão grave assim",
                    afirmacao: "Sua missão é pesquisar e aprender mais sobre os efeitos devastadores do uso de drogas. Reavalie sua posição e considere como você pode ajudar a educar outros sobre a seriedade do problema."
                } 
            ]
        },
        {
            enunciado: "Você se sente confortável em falar sobre o uso de drogas com amigos ou familiares?  ",
            alternativas: [
                {
                    texto: "Sim, falo abertamente",
                    afirmacao: "Sua missão é promover conversas abertas sobre o uso de drogas dentro do seu círculo social. Ao criar um espaço de diálogo, você ajuda a aumentar a conscientização e a segurança das pessoas ao seu redor.  "
                },
                {
                    texto: "Não, evito o assunto",
                    afirmacao: "Sua missão é encontrar uma pessoa de confiança para iniciar uma conversa sobre o uso de drogas. Entender melhor o tema e aprender a falar sobre ele pode ser o primeiro passo para oferecer apoio a quem precisa."
                }
            ]
        },
        {
            enunciado: "Você acredita que pequenas ações podem fazer a diferença na luta contra o uso de drogas?",
            alternativas: [
                {
                    texto: "Sim, toda ação conta!",
                    afirmacao: "Sua missão é adotar pequenas ações diárias para apoiar a prevenção, como promover hábitos saudáveis e estar atento ao comportamento de amigos. Lembre-se de que cada gesto positivo pode fazer uma grande diferença."
                },
                {
                    texto: "Não, apenas grandes ações fazem a direrença!",
                    afirmacao: "Sua missão é entender o impacto das pequenas atitudes na luta contra o uso de drogas. Descubra como ações simples de apoio e conscientização podem ajudar a prevenir o uso de substâncias e considere aplicar essas práticas."
                } 
            ]
        },
    ];

    let atual = 0;
    let perguntaAtual;
    let historiaFinal = "";

    function mostraPergunta() {
        if (atual >= perguntas.length) {
            mostraResultado();
            return;
        }
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
        caixaAlternativas.textContent = "";
        mostraAlternativas();
    }

    function mostraAlternativas(){
        for(const alternativa of perguntaAtual.alternativas) {
            const botaoAlternativas = document.createElement("button");
            botaoAlternativas.textContent = alternativa.texto;
            botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
            caixaAlternativas.appendChild(botaoAlternativas);
        }
    }

    function respostaSelecionada(opcaoSelecionada) {
        const afirmacoes = opcaoSelecionada.afirmacao;
        historiaFinal += afirmacoes + " ";
        atual++;
        mostraPergunta();
    }

    function mostraResultado() {
        caixaPerguntas.textContent = "Agorinha...";
        textoResultado.textContent = historiaFinal;
        caixaAlternativas.textContent = "";
    }

    mostraPergunta();