<template>
  <div id="questions">
    <div class="questionbox-container">
      <div id="title">
        <h2>Questionário</h2>
        <button class="questions-button" @click="startQuiz" id="btn-start">
          Iniciar
        </button>
      </div>
      <div
        v-for="(question, index) in questions"
        :key="index"
        id="content"
        v-show="startGame"
      >
        <div v-show="index === questionIndex">
          <h4>{{ index + 1 }}: {{ question.title }}</h4>
          <ul class="list-questions">
            <li
              class="item-questions"
              v-for="(answer, index) in question.answers"
              :key="index"
              :class="selected ? checkResult(answer) : ''"
              @click="selectedReponse(answer)"
            >
              {{ answer.text }}
            </li>
          </ul>
          <button
            class="questions-button"
            v-if="questionIndex > 0"
            @click="prev"
          >
            Voltar
          </button>
          <button class="questions-button" @click="next" id="btn-next">
            Próxima
          </button>
        </div>
      </div>

      <div v-show="questionIndex === questions.length" id="result">
        <h2>Terminou!</h2>
        <h3>Questões acertadas: {{ score() }}</h3>
        <p id="message">{{ resultMessage() }}</p>
        <button class="questions-button" id="btn-restart" @click="restart">
          Reiniciar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "questoes",
  data() {
    return {
      questions: [
        {
          title:
            "Exercício 1: (UFPR 2009) Sobre o movimento do Contestado, ocorrido de 1912 a 1916, considere as afirmativas abaixo:  No início do movimento, o monge José Maria, sua principal liderança, foi morto, mas suas orientações continuaram a exercer influência sobre os participantes. Esse movimento acabou por agregar diferentes segmentos sociais, como posseiros e sitiantes expulsos de suas terras, e comunidades negras e caboclas. O movimento do Contestado tinha características milenares e messiânicas, mas também políticas, de contestação social. Apesar do cunho contestatório, a simpatia para com a República é uma característica continuamente presente no movimento do Contestado. Uma das principais causas do movimento foi o fato de os sertanejos – ou caboclos – terem sido expulsos de suas terras pela estrada de ferro construída na região. Assinale a alternativa correta. ",
          answers: [
            { text: "A)Somente as afirmativas 3, 4 e 5 são verdadeiras." },
            { text: "B)Somente as afirmativas 1 e 4 são verdadeiras." },
            {
              text: "C)Somente as afirmativas 1, 2, 3 e 5 são verdadeiras.",
              correct: true,
            },
            { text: "D)Somente as afirmativas 2 e 3 são verdadeiras." },
            { text: "E)Somente as afirmativas 1, 2, 4 e 5 são verdadeiras." },
          ],
        },
        {
          title:
            "Exercício 2: (Unespar 2017) “A experiência dos sertanejos do Contestado teve como foco a luta em oposição ao Coronelismo, à concentração fundiária, à exploração de empresas estrangeiras e [como objetivo] a construção de comunidades autônomas em relação ao Estado e ao Clero. Estes aspectos vão muito além das especificidades locais ou regionais. São questões que permeavam, e ainda permeiam, nosso país e boa parte da América Latina” O trecho se refere à Guerra do Contestado (1912-1916). Sobre este fenômeno histórico, identifique a alternativa INCORRETA:.",
          answers: [
            {
              text:
                "Após a conclusão de parte da Estrada de Ferro São Paulo-Rio Grande, muitos operários foram demitidos e iniciou-se o processo de desapropriação das terras que ficavam à margem da ferrovia, intensificando as precárias condições de vida e os atritos entre as partes envolvidas;",
            },
            {
              text:
                "A área do Contestado, rica em madeira e erva mate, era disputada, desde o século XIX, entre Paraná e Santa Catarina, litígio que só foi encerrado após o fim do embate e a assinatura de um acordo entre as partes;",
            },
            {
              text:
                "A Guerra do Contestado pode ser explicada pelo messianismo, com a liderança de “monges” e “virgens”, que transformou sertanejos comuns em fanáticos dispostos a matar e morrer pelas crenças religiosas.",
              correct: true,
            },
            {
              text:
                "De acordo com o trecho acima, o Contestado tem componentes comuns a conflitos em outros espaços, sobretudo em contendas que opõem interesses do grande capital ao de indivíduos comuns;",
            },
          ],
        },
        {
          title:
            "Exercício 3 (ENEM) - A serraria construía ramais ferroviários que adentravam as grandes matas, onde grandes locomotivas com guindastes e correntes gigantescas de mais de 100 metros arrastavam, para as composições de trem, as toras que jaziam abatidas por equipes de trabalhadores que anteriormente passavam pelo local. Quando o guindaste arrastava as grandes toras em direção à composição de trem, os ervais nativos que existiam em meio às matas eram destruídos por este deslocamento. MACHADO P. P. Lideranças do Contestado. Campinas: Unicamp, 2004 (adaptado). No início do século XX, uma série de empreendimentos capitalistas chegou à região do meio-oeste de Santa Catarina – ferrovias, serrarias e projetos de colonização. Os impactos sociais gerados por esse processo estão na origem da chamada Guerra do Contestado. Entre tais impactos, encontrava-se",
          answers: [
            {
              text:
                "A absorção dos trabalhadores rurais como trabalhadores da serraria, resultando em um processo de êxodo rural.",
            },
            {
              text:
                "O desemprego gerado pela introdução das novas máquinas, que diminuíam a necessidade de mão de obra.",
            },
            {
              text:
                "A diminuição do poder dos grandes coronéis da região, que passavam disputar o poder político com os novos agentes.",
            },
            {
              text:
                "A desorganização da economia tradicional, que sustentava os posseiros e os trabalhadores rurais da região.",
              correct: true,
            },
          ],
        },
        {
          title:
            "(UECE) Atente ao seguinte excerto: “Em 1912, o governador do Estado de Santa Catarina, Vidal Ramos, advertia: ‘Nossos caboclos do mato são fáceis de se fanatizar, e se for exato o que se ouve, é necessário a ação enérgica’. Ele considerava perigoso para o poder local o ajuntamento de sertanejos pobres em torno do Curandeiro José Maria”. MACHADO, Paulo Pinheiro. Lideranças do Contestado: a formação e atuação de chefias caboclas (1912-1916). Campinas: Editora da Unicamp, 2004. Sobre o excerto acima, é correto afirmar que",
          answers: [
            {
              text:
                "Faz menção ao Movimento do Contestado, que foi um movimento religioso, com características messiânicas, no qual só ingressavam meninas virgens e meninos puros, para a construção de uma Nova Jerusalém.",
            },
            {
              text:
                "Trata do Movimento do Contestado, cujo líder foi José Maria, um missionário franciscano alemão que atuou no Planalto Catarinense entre 1890 e 1930.",
            },
            {
              text:
                "Se refere à Guerra do Contestado, que, para a imprensa e autoridades militares, era uma reedição do fanatismo de Canudos.",
              correct: true,
            },
            {
              text:
                "Faz referência à Guerra do Contestado, cuja população envolvida era muito religiosa, louvava a monarquia e o retorno da Casa Real de Bragança ao trono brasileiro.",
            },
          ],
        },
        {
          title:
            " (UECE) “A experiência militar na divisão do Paraná com Santa Catarina foi fundamental para a cristalização da memória histórica do Contestado [...] não há duvida de que o Contestado foi bem aproveitado pelo Exército.” RODIGUES, Rogério Rosa. Bendita Guerra. Revista de História da Biblioteca Nacional. Outubro de 2012. Ano 7, n 85, p. 33. Atente para o que se diz a respeito do Contestado.",
          answers: [
            { text: "I, II e III.", correct: true },
            { text: "I e II apenas." },
            { text: "II e III apenas." },
            { text: "I e III apenas." },
          ],
        },
        {
          title:
            " (ACAFE) “Em novembro de 1912 o acampamento de Irani é atacado pela força policial paranaense e trava-se sangrento combate, com a perda de muitos homens e de grande quantidade de material bélico do Paraná.(...) Este combate de Irani fez desencadear novos confrontos, além do agravamento da relações entre Paraná e Santa Cataria.” (In: PIAZZA, Walter Fernando. Santa Catarina: história da gente. Walter Fernando Piazza, Laura Machado Hübener. 4ª edição. Florianópolis: Editora Lunardelli, 1997. Pg. 130). Acerca do contexto descrito acima e dos eventos políticos, militares e sociais que envolveram a Questão do Contestado, é correto afirmar, exceto:",
          answers: [
            {
              text:
                "As atividades econômicas desenvolvidas na região do Contestado centravam-se principalmente na pecuária extensiva e na extração da erva-mate.",
            },
            {
              text:
                "Na região do Contestado foi construída a estrada de ferro São Paulo - Rio Grande, o que ocasionou a expulsão de muitos posseiros da área onde seria construída a ferrovia.",
            },
            {
              text:
                "O enfrentamento militar entres as polícias de Santa Catarina e do Paraná, além de centenas de mortes, resultou na perda do território catarinense de Mafra para os paranaenses.",
              correct: true,
            },
            {
              text:
                "Com a formação de redutos de resistência dos caboclos e o aparecimento de lideranças místicas, o movimento adquiriu também um aspecto messiânico.",
            },
          ],
        },
        {
          title:
            " (ACAFE) Um dos acontecimentos importantes da história catarinense, o Contestado, iniciou nos primeiros anos do século XX. Acerca dos eventos que caracterizaram o Contestado é correto afirmar, exceto:",
          answers: [
            {
              text:
                "Combates entre o exército brasileiro e os caboclos da região do Contestado, estes últimos influenciados pela liderança de “monges”",
            },
            {
              text:
                "Disputas jurídicas entre Santa Catarina e Paraná sobre limites territoriais entre os dois Estados.",
            },
            {
              text:
                "Construção do trecho catarinense da Estrada de Ferro São Paulo-Rio Grande, pela Brazil Railway Co.",
            },
            {
              text:
                "Conflitos entre os latifundiários catarinenses e empresas do Paraná e de São Paulo acerca da exploração da madeira e da ervamate na serra catarinense..",
              correct: true,
            },
          ],
        },
        {
          title:
            " (UECE) “A experiência militar na divisão do Paraná com Santa Catarina foi fundamental para a cristalização da memória histórica do Contestado [...] não há duvida de que o Contestado foi bem aproveitado pelo Exército.” RODIGUES, Rogério Rosa. Bendita Guerra. Revista de História da Biblioteca Nacional. Outubro de 2012. Ano 7, n 85, p. 33. Atente para o que se diz a respeito do Contestado.",
          answers: [
            { text: "I, II e III.", correct: true },
            { text: "I e II apenas." },
            { text: "II e III apenas." },
            { text: "I e III apenas." },
          ],
        },
      ],
      index: 0,
      numCorrect: 0,
      numTotal: 0,
      startGame: false,
      questionIndex: 0,
      selected: false,
      scores: 0,
    };
  },

  methods: {
    startQuiz() {
      this.startGame = true;
      document.getElementById("btn-start").style.display = "none";
    },

    selectedReponse(item) {
      this.selected = true;
      if (item.correct) {
        this.scores += 1;
      }
    },

    checkResult(status) {
      if (status.correct) {
        return "correct";
      } else {
        return "incorrect";
      }
    },

    next() {
      this.questionIndex++;
      this.selected = false;
    },

    prev() {
      this.questionIndex--;
    },

    score() {
      var totalQuestions = this.questions.length;
      if (this.questionIndex === totalQuestions) {
        return this.scores;
      }
    },

    restart() {
      if (this.questionIndex >= this.questions.length) {
        this.questionIndex = 0;
        this.scores = 0;
      }
    },

    resultMessage() {
      if (this.scores === 10) {
        return "Muito bem!";
      } else if (this.scores >= 8) {
        return "Bom.";
      } else if (this.scores >= 5) {
        return "Razoavel";
      } else {
        return "Ruim";
      }
    },
  },
};
</script>

<style>
#questions {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 100px;
}
ul.list-questions {
  list-style: none;
}
ul li.item-questions {
  border: 1px solid #d2d2d2;
  border-radius: 5px;
  padding: 8px 5px;
  margin: 8px 0;
  max-width: 100%;
}
ul li.item-questions:hover {
  cursor: pointer;
  background-color: #d2d2d2;
}
ul li.item-questions.correct {
  background-color: #09aa78;
  color: #fff;
}
ul li.item-questions.incorrect {
  background-color: #a90a1a;
  color: #fff;
}
#content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#title {
  text-align: center;
}
#result {
  text-align: center;
}

.questions-button {
  margin-top: 10px;
  padding: 10px 20px;
  outline: none;
  border: none;
  background-color: #09aa78;
  color: #333;
  font-weight: bold;
  cursor: pointer;
  font-weight: bold;
  margin-right: 15px;
}
</style>
