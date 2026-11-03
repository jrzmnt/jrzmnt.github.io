// Gerado a partir dos resumos dos artigos. Não editar à mão.
export const resumos = {
  "2017-a-deep-neural-architecture-for-kitchen-activity-recognition": {
    "slug": "2017-a-deep-neural-architecture-for-kitchen-activity-recognition",
    "temas": [
      "Computer Vision",
      "Deep Learning"
    ],
    "links": [],
    "en": null,
    "pt": null,
    "semPdf": true,
    "imagem": null
  },
  "2017-deep-neural-networks-for-handwritten-chinese-character-recognition": {
    "slug": "2017-deep-neural-networks-for-handwritten-chinese-character-recognition",
    "temas": [
      "Computer Vision",
      "Deep Learning"
    ],
    "links": [],
    "en": null,
    "pt": null,
    "semPdf": true,
    "imagem": null
  },
  "2017-deep-neural-networks-for-kitchen-activity-recognition": {
    "slug": "2017-deep-neural-networks-for-kitchen-activity-recognition",
    "temas": [
      "Computer Vision",
      "Deep Learning"
    ],
    "links": [],
    "en": null,
    "pt": null,
    "semPdf": true,
    "imagem": null
  },
  "2017-hybrid-activity-and-plan-recognition-for-video-streams": {
    "slug": "2017-hybrid-activity-and-plan-recognition-for-video-streams",
    "temas": [
      "Computer Vision",
      "Deep Learning",
      "Planning"
    ],
    "links": [
      {
        "tipo": "doi",
        "href": "https://cdn.aaai.org/ocs/ws/ws0317/15117-68437-1-PB.pdf"
      }
    ],
    "en": {
      "contexto": [
        "Activity recognition is the task of labeling what a person is doing from sensor data, here video frames. Convolutional neural networks (CNNs) learn image features directly from pixels by stacking layers of filters, and they replaced hand-crafted features for this task. Plan recognition is a different problem: given observed actions and a library of known plans, infer which goal the agent is pursuing. Classical plan recognition works on symbols, not pixels.",
        "The paper joins the two. A plan library describes each high-level activity, such as a recipe, as an ordered set of steps. Symbolic Behavior Recognition (SBR) is an existing method that matches observed symbols against that library to return the plans consistent with the observations. The authors plug a CNN in place of SBR's symbol input, so the plan library receives the CNN's output."
      ],
      "ideia": [
        "Most video systems say that someone is 'cutting' or 'mixing' in each frame, but they do not say which dish is being prepared. Knowing the goal is useful for monitoring and assistance, for example to warn a person who skipped a step. The problem is therefore to recognize actions frame by frame and, from that sequence, the overall activity.",
        "Think of a sous-chef who writes down each action they see, such as breaking an egg, then whisking, then baking, and checks that sequence against a cookbook. Some actions are unlikely in some orders, so a wrong sequence can be rejected. The core insight is that a CNN makes the per-frame labels, and a plan library uses the order of those labels to decide which recipe is being made. A sequence filter then discards action orders never seen in training."
      ],
      "algoritmos": [
        "Step 1, frame classification: GoogLeNet, a 22-layer Inception network, takes each frame resized to 256x256 and a random 224x224 crop with horizontal flips. Training uses stochastic gradient descent with momentum 0.9, an initial learning rate of 10^-3, dropout 0.7 on the fully connected layers, and 43,500 iterations (30 epochs). The network outputs a probability for each action class.",
        "Step 2, label smoothing: when the top two probabilities differ by less than a threshold, the rule keeps the previous frame's label if that label is one of the two top classes. Otherwise it takes the top class. This reduces flicker between similar actions in consecutive frames.",
        "Step 3, plan matching: the sequence of labels is passed to SBR, whose decision tree is replaced by the CNN output. The plan library is built from training videos, with each recipe as a top-level goal and each observed action sequence as a plan. A transition graph, built from training sequences, rejects action orders that never occurred in training, and the recognizer returns the recipes consistent with what remains."
      ],
      "resultados": [
        "Experiments use the ICPR 2012 KSCGR kitchen dataset, with eight cooking gestures (breaking, mixing, baking, turning, cutting, boiling, seasoning, peeling, plus none) and five egg recipes. The CNN reached 76% accuracy on the validation set after 43,500 iterations and 69% on the test set. Filtering with the transition graph raised test accuracy to 70%, a gain of about one point. The authors say this gain is smaller than the 7% reported by Bansal et al. with post-processing, which they attribute to better per-frame recognition of sequential actions.",
        "Per-class results show where the CNN struggles. Seasoning had the highest precision (0.89), while Breaking had the lowest precision (0.44). Baking had the highest F-measure (0.80), and Peeling had the lowest accuracy (0.09), since breaking and peeling look alike in the frame. For the full pipeline the plan recognizer scored 0.18 on the test set, where a recipe prediction earns a fraction of credit when several are returned. Its low score comes from plans that appear only in the test set and from recipes that share identical action sequences. The abstract claims state-of-the-art results for cooking activities, a claim these numbers only partly support given the plan-level score."
      ],
      "limitacoes": [
        "The plan library is written from training data and cannot represent plans never seen in training. The authors note that three test plans were absent from training and so were guaranteed to be missed. The paper also does not compare against planning-based plan recognition, which they propose as future work, so the benefit of the library approach over alternatives is not measured.",
        "The evaluation uses one dataset with five recipes, and the class imbalance (None and Baking dominate the frames) affects the per-class numbers. The paper does not report variance over repeated runs, and the 0.18 plan score rests on only a small number of test videos, so it is a weak estimate of performance on new cooking data."
      ]
    },
    "pt": {
      "contexto": [
        "Reconhecimento de atividades é a tarefa de rotular o que uma pessoa está fazendo a partir de dados de sensores, aqui quadros de vídeo. As redes neurais convolucionais (CNNs) aprendem características de imagem diretamente dos pixels, empilhando camadas de filtros, e substituíram as características construídas manualmente nessa tarefa. Reconhecimento de planos é outro problema: dadas ações observadas e uma biblioteca de planos conhecidos, infere-se qual objetivo o agente persegue. O reconhecimento clássico de planos trabalha com símbolos, não com pixels.",
        "O artigo une os dois. Uma biblioteca de planos descreve cada atividade de alto nível, como uma receita, como um conjunto ordenado de passos. O Symbolic Behavior Recognition (SBR) é um método existente que compara símbolos observados com essa biblioteca para devolver os planos compatíveis com as observações. Os autores colocam uma CNN no lugar da entrada simbólica do SBR, de modo que a biblioteca de planos recebe a saída da CNN."
      ],
      "ideia": [
        "A maioria dos sistemas de vídeo diz que alguém está 'cortando' ou 'misturando' em cada quadro, mas não diz qual prato está sendo preparado. Saber o objetivo é útil para monitoramento e assistência, por exemplo para alertar uma pessoa que pulou um passo. O problema é, portanto, reconhecer ações quadro a quadro e, a partir dessa sequência, a atividade geral.",
        "Pense em um assistente de cozinha que anota cada ação que vê, como quebrar um ovo, depois bater e depois assar, e confere essa sequência com um livro de receitas. Algumas ações são improváveis em certas ordens, então uma sequência errada pode ser rejeitada. A ideia central é que a CNN produz os rótulos por quadro, e a biblioteca de planos usa a ordem desses rótulos para decidir qual receita está sendo feita. Um filtro de sequências então descarta ordens de ação nunca vistas no treino."
      ],
      "algoritmos": [
        "Passo 1, classificação de quadros: o GoogLeNet, uma rede Inception de 22 camadas, recebe cada quadro redimensionado para 256x256 e um recorte aleatório de 224x224 com espelhamento horizontal. O treino usa gradiente descendente estocástico com momento 0,9, taxa de aprendizado inicial de 10^-3, dropout 0,7 nas camadas totalmente conectadas e 43.500 iterações (30 épocas). A rede produz uma probabilidade para cada classe de ação.",
        "Passo 2, suavização dos rótulos: quando as duas maiores probabilidades diferem menos que um limiar, a regra mantém o rótulo do quadro anterior se ele for uma dessas duas classes. Caso contrário, escolhe a classe de maior probabilidade. Isso reduz a oscilação entre ações parecidas em quadros consecutivos.",
        "Passo 3, casamento com planos: a sequência de rótulos é passada ao SBR, cuja árvore de decisão é substituída pela saída da CNN. A biblioteca de planos é construída a partir dos vídeos de treino, com cada receita como objetivo de nível superior e cada sequência observada de ações como um plano. Um grafo de transições, construído a partir das sequências de treino, rejeita ordens de ação que nunca ocorreram no treino, e o reconhecedor devolve as receitas compatíveis com o que restou."
      ],
      "resultados": [
        "Os experimentos usam o conjunto de dados de cozinha KSCGR do ICPR 2012, com oito gestos culinários (quebrar, misturar, assar, virar, cortar, ferver, temperar, descascar, mais 'nenhum') e cinco receitas de ovo. A CNN atingiu 76% de acurácia no conjunto de validação após 43.500 iterações e 69% no conjunto de teste. A filtragem com o grafo de transições elevou a acurácia de teste para 70%, um ganho de cerca de um ponto. Os autores dizem que esse ganho é menor que os 7% relatados por Bansal et al. com pós-processamento, e atribuem a diferença a um reconhecimento por quadro melhor de ações sequenciais.",
        "Os resultados por classe mostram onde a CNN tem dificuldade. Temperar teve a maior precisão (0,89), enquanto quebrar teve a menor (0,44). Assar teve a maior F-measure (0,80), e descascar teve a menor acurácia (0,09), já que quebrar e descascar se parecem no quadro. No pipeline completo, o reconhecedor de planos obteve 0,18 no conjunto de teste, onde uma previsão de receita recebe uma fração de crédito quando várias são devolvidas. A pontuação baixa vem de planos que aparecem só no teste e de receitas que compartilham sequências de ações idênticas. O resumo afirma resultados de estado da arte para atividades culinárias, afirmação que esses números sustentam apenas em parte, dada a pontuação em nível de plano."
      ],
      "limitacoes": [
        "A biblioteca de planos é escrita a partir dos dados de treino e não consegue representar planos nunca vistos no treino. Os autores observam que três planos do teste estavam ausentes do treino e, por isso, seriam necessariamente errados. O artigo também não compara com reconhecimento de planos baseado em planejamento, que os autores propõem como trabalho futuro, então o benefício da abordagem por biblioteca em relação a alternativas não é medido.",
        "A avaliação usa um único conjunto de dados com cinco receitas, e o desbalanceamento de classes (None e Assar dominam os quadros) afeta os números por classe. O artigo não reporta variância em execuções repetidas, e a pontuação de 0,18 se apoia em poucos vídeos de teste, por isso é uma estimativa fraca do desempenho em novos dados de cozinha."
      ]
    },
    "figuras": [
      {
        "src": "/figuras/2017-hybrid-activity-and-plan-recognition-for-video-streams-1.png",
        "legenda": {
          "en": "Pipeline of the hybrid architecture: a CNN recognizes activities from video frames, and a symbolic plan recognizer uses a plan library to infer goals.",
          "pt": "Pipeline da arquitetura híbrida: uma CNN reconhece atividades a partir dos quadros de vídeo, e um reconhecedor simbólico de planos usa uma biblioteca de planos para inferir metas."
        }
      }
    ],
    "imagem": "/papers/2017-hybrid-activity-and-plan-recognition-for-video-streams.png"
  },
  "2017-virtual-guide-dog-an-application-to-support-visually-impaired-people-through-deep-convolutional": {
    "slug": "2017-virtual-guide-dog-an-application-to-support-visually-impaired-people-through-deep-convolutional",
    "temas": [
      "Computer Vision",
      "Deep Learning",
      "Healthcare"
    ],
    "links": [
      {
        "tipo": "doi",
        "href": "https://doi.org/10.1109/IJCNN.2017.7966130"
      }
    ],
    "en": null,
    "pt": null,
    "semPdf": true,
    "imagem": null
  },
  "2018-beating-bomberman-with-artificial-intelligence": {
    "slug": "2018-beating-bomberman-with-artificial-intelligence",
    "temas": [
      "Planning"
    ],
    "links": [
      {
        "tipo": "doi",
        "href": "https://sol.sbc.org.br/index.php/eniac/article/view/4430"
      }
    ],
    "en": {
      "contexto": [
        "Bomberman is a 1985 maze game for the Nintendo Entertainment System (NES). The player moves on a grid, drops bombs that explode in a cross shape after a delay, and must kill all enemies and reach a hidden exit. Because the state changes with enemy movement and hidden tiles, a game like this is a small but realistic testbed for decision-making agents.",
        "Two standard tools appear in the paper. A behavior tree is a hierarchy of conditions and actions that is checked from the top at each step, so the agent always picks the first branch whose condition holds. A pathfinding algorithm searches a graph for a route between two points. Breadth-First Search (BFS) explores the graph level by level and guarantees the shortest route in an unweighted graph, but stores many nodes. A* adds a heuristic estimate of the remaining distance to guide the search and usually expands fewer nodes."
      ],
      "ideia": [
        "The problem is that testing AI methods in a complex environment is costly when the environment must be built by hand. The authors argue that a digital game already provides many interacting variables, so it is an efficient way to test whether a technique works before applying it to harder settings.",
        "Think of a robot that must find a way out of a room full of obstacles that move unpredictably. A simple rule set, such as 'if danger is near, run; if an item is near, grab it', can be written as a tree, and each movement can be planned with a path search. The core insight of the paper is that this combination of a behavior tree for choosing goals and pathfinding for executing them is enough to play Bomberman successfully."
      ],
      "algoritmos": [
        "Step 1, perception: at each frame the agent reads the map, locating bombs, power-ups, enemies, bricks and the exit. The agent sees the board as a human does, so it does not know what is hidden under a brick until the brick is destroyed.",
        "Step 2, decision: the behavior tree runs from the top. If a bomb is on the map, the agent goes to a safe tile and waits. If not, it goes for a visible power-up. If there is no power-up, it attacks a reachable enemy. If none is reachable, it heads for the exit when it is available, and otherwise destroys the nearest brick to expose the exit.",
        "Step 3, movement: each 'go to' action builds a directed graph whose nodes are walkable tiles and whose edges connect adjacent tiles. The graph is searched with either BFS or A*. For A*, the heuristic is the Manhattan distance, and the path cost is the depth in the search tree. A random agent that presses buttons without a plan was used as a sanity check, since it usually died before clearing a stage."
      ],
      "resultados": [
        "Both pathfinding variants cleared every stage, killing all enemies and finding the exit. The frame rates recorded during play were 800 FPS at the peak and 120 FPS at the lowest for A*, and 600 FPS and 20 FPS for BFS. The authors read frame rate as a proxy for processing load, so A* was the lighter of the two. Stage clear times were close, with A* about 3 seconds faster, a gap the authors attribute to enemy randomness rather than to the algorithm.",
        "Against a human player on stage 1, the average clear times were 129.50 s (SD 21.44) for the human and 139.50 s (SD 35.35) for the agent. On stage 31 they were 40.00 s (SD 47.71) for the human and 46.00 s (SD 8.57) for the agent. The agent was never killed in its trials. The human failed to clear the stage in four attempts. Since the number of trials is small (four rounds per stage), these differences should be read as indicative rather than as a statistical comparison."
      ],
      "limitacoes": [
        "The paper evaluates two search algorithms in a single game with a handful of trials per stage. It does not report a formal statistical test, and the time differences between agents and the human are small compared with the standard deviations. Claims about human-likeness are based on observation of the agent's behavior, not on a systematic study.",
        "The paper does not compare its behavior tree with learning-based agents, such as reinforcement learning, and it does not test on the other 49 stages or on other games. The authors list ontologies, planning and multi-agent extensions as future work, so those ideas are not evaluated here."
      ]
    },
    "pt": {
      "contexto": [
        "Bomberman é um jogo de labirinto de 1985 para o Nintendo Entertainment System (NES). O jogador se move em uma grade, solta bombas que explodem em forma de cruz após um atraso e precisa eliminar todos os inimigos e alcançar uma saída escondida. Como o estado muda com o movimento dos inimigos e os blocos ocultos, um jogo assim é um pequeno, mas realista, ambiente de teste para agentes de decisão.",
        "Duas ferramentas padrão aparecem no artigo. Uma árvore de comportamento é uma hierarquia de condições e ações avaliada a partir do topo a cada passo, de modo que o agente sempre escolhe o primeiro ramo cuja condição é verdadeira. Um algoritmo de busca de caminhos procura uma rota entre dois pontos em um grafo. A Busca em Largura (BFS) explora o grafo nível por nível e garante a rota mais curta em um grafo sem pesos, mas armazena muitos nós. O A* acrescenta uma estimativa heurística da distância restante para guiar a busca e normalmente expande menos nós."
      ],
      "ideia": [
        "O problema é que testar métodos de IA em um ambiente complexo é caro quando o ambiente precisa ser construído à mão. Os autores argumentam que um jogo digital já oferece muitas variáveis interagindo, por isso é uma forma eficiente de verificar se uma técnica funciona antes de aplicá-la a cenários mais difíceis.",
        "Imagine um robô que precisa encontrar a saída de uma sala cheia de obstáculos que se movem de forma imprevisível. Um conjunto simples de regras, como 'se há perigo por perto, fuja; se há um item por perto, pegue', pode ser escrito como uma árvore, e cada movimento pode ser planejado com uma busca de caminho. A ideia central do artigo é que essa combinação, uma árvore de comportamento para escolher objetivos e busca de caminhos para executá-los, basta para jogar Bomberman com sucesso."
      ],
      "algoritmos": [
        "Passo 1, percepção: a cada quadro o agente lê o mapa, localizando bombas, power-ups, inimigos, tijolos e a saída. O agente vê o tabuleiro como um humano veria, por isso não sabe o que está escondido sob um tijolo até que ele seja destruído.",
        "Passo 2, decisão: a árvore de comportamento é executada a partir do topo. Se há uma bomba no mapa, o agente vai até um bloco seguro e espera. Se não há, vai atrás de um power-up visível. Sem power-up, ataca um inimigo alcançável. Se nenhum for alcançável, dirige-se à saída quando ela está disponível e, caso contrário, destrói o tijolo mais próximo para expor a saída.",
        "Passo 3, movimento: cada ação do tipo 'ir até' constrói um grafo direcionado cujos nós são blocos caminháveis e cujas arestas ligam blocos adjacentes. O grafo é percorrido com BFS ou A*. No A*, a heurística é a distância de Manhattan e o custo do caminho é a profundidade na árvore de busca. Um agente aleatório, que apenas pressiona botões sem plano, foi usado como verificação de sanidade, já que costumava morrer antes de concluir uma fase."
      ],
      "resultados": [
        "As duas variantes de busca concluíram todas as fases, eliminando todos os inimigos e encontrando a saída. As taxas de quadros registradas durante o jogo foram de 800 FPS no pico e 120 FPS no mínimo para o A*, e 600 FPS e 20 FPS para a BFS. Os autores tratam a taxa de quadros como indicador da carga de processamento, então o A* foi a opção mais leve. Os tempos de conclusão ficaram próximos, com o A* cerca de 3 segundos mais rápido, diferença que os autores atribuem à aleatoriedade dos inimigos, e não ao algoritmo.",
        "Em comparação com um jogador humano na fase 1, os tempos médios de conclusão foram 129,50 s (DP 21,44) para o humano e 139,50 s (DP 35,35) para o agente. Na fase 31, foram 40,00 s (DP 47,71) para o humano e 46,00 s (DP 8,57) para o agente. O agente não foi morto em nenhuma tentativa. O humano não conseguiu concluir a fase em quatro oportunidades. Como o número de tentativas é pequeno (quatro rodadas por fase), essas diferenças devem ser lidas como indicativas, e não como uma comparação estatística."
      ],
      "limitacoes": [
        "O artigo avalia dois algoritmos de busca em um único jogo, com poucas tentativas por fase. Não há teste estatístico formal, e as diferenças de tempo entre agente e humano são pequenas em relação aos desvios-padrão. As afirmações sobre semelhança com o comportamento humano se baseiam na observação do agente, não em um estudo sistemático.",
        "O artigo não compara a árvore de comportamento com agentes baseados em aprendizado, como aprendizado por reforço, e não testa as outras 49 fases nem outros jogos. Os autores listam ontologias, planejamento e extensões multiagente como trabalhos futuros, então essas ideias não são avaliadas aqui."
      ]
    },
    "figuras": [
      {
        "src": "/figuras/2018-beating-bomberman-with-artificial-intelligence-1.png",
        "legenda": {
          "en": "Behavior tree of the decision-making algorithm, from checking for bombs and items to going for the exit.",
          "pt": "Árvore de comportamento do algoritmo de decisão, desde a verificação de bombas e itens até a ida à saída."
        }
      },
      {
        "src": "/figuras/2018-beating-bomberman-with-artificial-intelligence-2.png",
        "legenda": {
          "en": "Screenshots of stage 1 (a) and stage 31 (b) of Bomberman, showing the situations the agent faces.",
          "pt": "Capturas da fase 1 (a) e da fase 31 (b) do Bomberman, mostrando as situações enfrentadas pelo agente."
        }
      }
    ],
    "imagem": "/papers/2018-beating-bomberman-with-artificial-intelligence.png"
  },
  "2018-evaluating-the-feasibility-of-deep-learning-for-action-recognition-in-small-datasets": {
    "slug": "2018-evaluating-the-feasibility-of-deep-learning-for-action-recognition-in-small-datasets",
    "temas": [
      "Computer Vision",
      "Deep Learning"
    ],
    "links": [],
    "en": null,
    "pt": null,
    "semPdf": true,
    "imagem": null
  },
  "2018-fusing-scene-context-to-improve-object-recognition": {
    "slug": "2018-fusing-scene-context-to-improve-object-recognition",
    "temas": [
      "Computer Vision",
      "Deep Learning"
    ],
    "links": [
      {
        "tipo": "doi",
        "href": "https://periodicos.ufmg.br/index.php/jidm/article/view/400"
      }
    ],
    "en": {
      "contexto": [
        "Object recognition asks a detector to find objects in an image and say what they are. Modern detectors such as Faster R-CNN do this with a convolutional network that proposes candidate regions and scores each one. They look only at the pixels inside each box, so they ignore the setting around the object, even though objects often appear in predictable places: a sofa in a living room, a boat on water.",
        "Scene recognition is a separate task that classifies the whole image by environment, such as kitchen or street. Places365-CNN is a network trained for this on a large set of scene photos. The paper builds on the two-stream idea from action recognition, where two networks process different kinds of input and their outputs are combined. Here, one stream handles the object and the other handles the scene."
      ],
      "ideia": [
        "Picture a fork that appears in a photo of a kitchen counter versus one on the roof of a car. A person judges the first as plausible and the second as odd, even before looking closely at the fork. The paper turns this everyday judgment into a model: the object's score should go up when its scene fits and go down when it does not.",
        "The core insight is to give the classifier both kinds of evidence at once. Object features and scene-context features are concatenated, in a late-fusion scheme, and the final layer decides the class of each object from the combined vector. The model therefore learns the usual co-occurrence of objects and scenes from data rather than from hand-written rules."
      ],
      "algoritmos": [
        "Step 1, input: both networks receive the same image. Step 2, object stream: Faster R-CNN, built on VGG-16, proposes object regions and extracts features for each one, with up to 300 proposals per image. Step 3, scene stream: Places365-CNN, also run on the image, produces features that describe the environment as a whole. The two models run in parallel in Caffe.",
        "Step 4, late fusion: for each object, its features are concatenated with the scene features, and the fused vector goes through the final fully connected layers that output the class. Training uses a learning rate of 1e-3 for the fully connected layer, reduced to 1e-4 after 75% of training, with dropout of 50% on the fully connected layers. Step 5, evaluation: the experiments use PASCAL VOC 2007, MS COCO and a subset of SUN09, comparing the fused model with Faster R-CNN alone. The main comparisons fix the IoU threshold at 50%, and the authors also vary the threshold from 0 to 100% to see how the gap changes.",
        "Beyond overall scores, the authors sort detections into categories: correct for both models, mistakes for both, and cases where only one model is right. Those where only the fused model is right are the ones that show scene context helping. This analysis shows which objects gain from context."
      ],
      "resultados": [
        "On PASCAL VOC 2007, the fused model has higher average precision than Faster R-CNN in 16 of the 20 classes, with the largest gains for horse (4.06 points) and sheep (3.23 points). The losses are small, for example cow (-1.16 points) and cat (-1.06 points). The gains are larger for objects that the context supports, which is the paper's central claim.",
        "On MS COCO, Faster R-CNN is 0.1 point higher in average precision overall. The fused model still gains on some classes, such as remote (5.7 points), hair drier (2.5 points) and bed (2.5 points). The authors explain the remote and hair drier gains by their small size: small objects leave more room for scene context to matter. In the paper's words, the fused model does not improve overall performance over state-of-the-art recognizers, but it performs well when an object is in its proper context."
      ],
      "limitacoes": [
        "The paper gives no single headline mAP for the fused model in the sections read, so the results are per-class differences rather than an overall score. The COCO comparison is slightly unfavorable to the proposed method, and the authors themselves conclude that the architecture does not beat the state of the art overall. The architecture also depends on the IoU threshold, and the authors note that their method's advantage is largest at low thresholds.",
        "The evaluation uses a single backbone (VGG-16) and only a subset of the SUN09 dataset, so generalization to other detectors or scene models is not shown. The paper also does not report how much of the gain comes from the scene stream as opposed to extra capacity in the network. Some categories, such as furniture, did not improve, and the paper leaves that unexplained beyond noting it as unexpected."
      ]
    },
    "pt": {
      "contexto": [
        "Reconhecimento de objetos pede a um detector que encontre objetos em uma imagem e diga o que são. Detectores modernos como a Faster R-CNN fazem isso com uma rede convolucional que propõe regiões candidatas e pontua cada uma. Eles olham apenas os pixels dentro de cada caixa e ignoram o ambiente ao redor, embora objetos costumem aparecer em lugares previsíveis: um sofá em uma sala, um barco na água.",
        "Reconhecimento de cenas é uma tarefa separada, que classifica a imagem inteira pelo ambiente, como cozinha ou rua. A Places365-CNN é uma rede treinada para isso em um grande conjunto de fotos de cenas. O artigo se apoia na ideia de dois fluxos usada em reconhecimento de ações, em que duas redes processam tipos diferentes de entrada e suas saídas são combinadas. Aqui, um fluxo cuida do objeto e o outro, da cena."
      ],
      "ideia": [
        "Imagine um garfo que aparece na foto de uma bancada de cozinha, versus um garfo sobre o teto de um carro. Uma pessoa julga o primeiro como plausível e o segundo como estranho, mesmo antes de olhar o garfo com atenção. O artigo transforma esse julgamento cotidiano em um modelo: a pontuação do objeto deve subir quando a cena combina com ele e cair quando não combina.",
        "A ideia central é dar ao classificador os dois tipos de evidência ao mesmo tempo. As características do objeto e as do contexto da cena são concatenadas em um esquema de fusão tardia, e a camada final decide a classe de cada objeto a partir do vetor combinado. Assim, o modelo aprende a coocorrência usual entre objetos e cenas a partir dos dados, e não de regras escritas à mão."
      ],
      "algoritmos": [
        "Passo 1, entrada: as duas redes recebem a mesma imagem. Passo 2, fluxo do objeto: a Faster R-CNN, baseada em VGG-16, propõe regiões de objetos e extrai características de cada uma, com até 300 propostas por imagem. Passo 3, fluxo da cena: a Places365-CNN, também aplicada à imagem, produz características que descrevem o ambiente como um todo. Os dois modelos rodam em paralelo no Caffe.",
        "Passo 4, fusão tardia: para cada objeto, suas características são concatenadas com as da cena, e o vetor fundido passa pelas camadas totalmente conectadas finais que geram a classe. O treinamento usa taxa de aprendizado de 1e-3 na camada totalmente conectada, reduzida para 1e-4 após 75% do treino, com dropout de 50% nas camadas totalmente conectadas. Passo 5, avaliação: os experimentos usam PASCAL VOC 2007, MS COCO e um subconjunto do SUN09, comparando o modelo fundido com a Faster R-CNN isolada. As comparações principais fixam o limiar de IoU em 50%, e os autores também variam o limiar de 0 a 100% para ver como a diferença muda.",
        "Além das pontuações gerais, os autores separam as detecções em categorias: acerto para os dois modelos, erro para os dois, e casos em que só um dos modelos acerta. Os casos em que só o modelo fundido acerta são os que mostram o contexto da cena ajudando. Essa análise mostra quais objetos se beneficiam do contexto."
      ],
      "resultados": [
        "No PASCAL VOC 2007, o modelo fundido tem precisão média maior que a Faster R-CNN em 16 das 20 classes, com os maiores ganhos para horse (4,06 pontos) e sheep (3,23 pontos). As perdas são pequenas, por exemplo cow (-1,16 ponto) e cat (-1,06 ponto). Os ganhos são maiores para objetos que o contexto sustenta, que é a tese central do artigo.",
        "No MS COCO, a Faster R-CNN fica 0,1 ponto acima na precisão média geral. O modelo fundido ainda ganha em algumas classes, como remote (5,7 pontos), hair drier (2,5 pontos) e bed (2,5 pontos). Os autores explicam os ganhos de remote e hair drier pelo tamanho pequeno desses objetos: objetos pequenos deixam mais espaço para o contexto da cena fazer diferença. Nas palavras do artigo, o modelo fundido não melhora o desempenho geral em relação aos reconhecedores do estado da arte, mas tem bom desempenho quando o objeto está no seu contexto próprio."
      ],
      "limitacoes": [
        "O artigo não apresenta um único mAP principal para o modelo fundido nas seções lidas, então os resultados são diferenças por classe e não uma pontuação geral. A comparação no COCO é ligeiramente desfavorável ao método proposto, e os próprios autores concluem que a arquitetura não supera o estado da arte no geral. A arquitetura também depende do limiar de IoU, e os autores observam que a vantagem do método é maior em limiares baixos.",
        "A avaliação usa um único backbone (VGG-16) e apenas um subconjunto do SUN09, então a generalização para outros detectores ou modelos de cena não é mostrada. O artigo também não informa quanto do ganho vem do fluxo da cena e quanto vem apenas da capacidade extra da rede. Algumas categorias, como mobília, não melhoraram, e o artigo deixa isso sem explicação além de notar como inesperado."
      ]
    },
    "figuras": [
      {
        "src": "/figuras/2018-fusing-scene-context-to-improve-object-recognition-1.png",
        "legenda": {
          "en": "Architecture that concatenates a Faster R-CNN object stream with a Places365 scene stream in a late fusion layer.",
          "pt": "Arquitetura que concatena um fluxo de objetos Faster R-CNN com um fluxo de cena Places365 em uma camada de fusão tardia."
        }
      },
      {
        "src": "/figuras/2018-fusing-scene-context-to-improve-object-recognition-2.png",
        "legenda": {
          "en": "Mean average precision versus IoU threshold on MS COCO and PASCAL VOC 2007, comparing the fused model with Faster R-CNN.",
          "pt": "Precisão média (mAP) em função do limiar de IoU no MS COCO e no PASCAL VOC 2007, comparando o modelo com fusão ao Faster R-CNN."
        }
      }
    ],
    "imagem": "/papers/2018-fusing-scene-context-to-improve-object-recognition.png"
  },
  "2018-improving-action-recognition-using-temporal-regions": {
    "slug": "2018-improving-action-recognition-using-temporal-regions",
    "temas": [
      "Computer Vision",
      "Deep Learning"
    ],
    "links": [
      {
        "tipo": "doi",
        "href": "https://periodicos.ufmg.br/index.php/jidm/article/view/406"
      }
    ],
    "en": {
      "contexto": [
        "Action recognition means assigning a label such as walking, petting or shooting a basketball to a video clip. Single frames are often ambiguous: one still image cannot tell whether an action is about to start or has just finished, so the motion across frames carries most of the information. A standard image classifier, applied frame by frame, therefore discards the very signal that separates actions.",
        "Earlier work handled time in two main ways. Two-stream networks feed raw frames to one stream and precomputed optical flow to another, but the flow must be computed beforehand. 3D convolutional networks such as C3D and I3D learn spatiotemporal filters directly, at a high cost: the paper quotes about 25M parameters for I3D, against 9M for a single ConvNet plus LSTM, and notes that these models are impractical without GPUs. The paper's aim is to get some temporal information with ordinary 2D CNN features and a light classifier."
      ],
      "ideia": [
        "Think of a video as a long strip of film. Instead of asking what one frame shows, the method cuts the strip into a few equal segments and picks one frame from each segment at matching positions, so each selected group spans the whole clip. Each group then describes how the scene changes from start to end, and that is what a classifier needs.",
        "The core insight is that the temporal aspect can be recovered by combining features from several regions of the video into one instance, using the same per-frame CNN features that a frame-by-frame classifier would already use. No optical flow and no 3D convolution are needed. The authors also test two different CNNs to check that the gain does not depend on a single architecture."
      ],
      "algoritmos": [
        "Step 1, preprocessing: each frame is cropped to a square from its largest dimension and resized to 256 by 256 pixels, the input size of both networks. Step 2, feature extraction: a GoogLeNet and a modified AlexNet, each trained on the task, output a softmax vector per frame, with one value per class. These vectors are the per-frame features.",
        "Step 3, region division: the frame sequence is split into n regions of equal length, and frames left over are discarded. A target frame slides through the first region, and at each position the method takes the frame at the next index in every other region. Because the slide can wrap around, a temporal reordering sorts the selected frames back into the correct order. Step 4, composition and classification: one frame from each region is combined either by concatenation, giving n times the number of classes features, or by averaging, giving a vector the size of the number of classes. An SVM predicts the action from this vector.",
        "The experiments use DogCentric, with 209 egocentric videos of 10 dog actions, and UCF-11, with 1,600 YouTube videos of 11 human actions. Half of each action's videos form the test set, and 20% of the rest is the validation set, used to pick hyperparameters. The baselines are dense trajectories with HOG, HOF, MBH and trajectory descriptors, each classified with an SVM, plus single-frame AlexNet and GoogLeNet classifiers."
      ],
      "resultados": [
        "On DogCentric, GoogLeNet with temporal regions reaches 62% accuracy, 72% precision, 63% recall and 63% F-measure, the best result among the compared approaches. The strongest hand-crafted baseline, MBHy, reaches 54% accuracy, and the authors report that the best deep approach with regions improves on the best deep approach without regions by 11% on average for this dataset. AlexNet with regions reaches 59% accuracy with 16 or 32 regions, so the gain holds across both networks.",
        "On UCF-11 the gains are small. AlexNet reaches about 76-77% accuracy with several regions, against 73% with one region, and GoogLeNet is best with 16 or 32 regions. The authors explain the small differences by the short clips in this dataset. The paper is not fully consistent about the size of the improvement: the introduction cites about 10% in accuracy, while the conclusion says precision goes up by up to 10%. Both figures should be read as reported by the authors."
      ],
      "limitacoes": [
        "The evaluation covers only two datasets, each with a single action per video, so the paper does not show how the method behaves on untrimmed videos where several actions occur in sequence. The baselines are also limited: the paper does not compare against LSTM, C3D or 3D CNN models, which it lists as future work. Its claims rest on two off-the-shelf CNNs and an SVM classifier, so generalization to other architectures is only partly tested.",
        "The paper also does not study the cost of the region method in detail, nor how sensitive results are to the number of regions beyond the values in its tables. Because the inconsistent reporting of the gain (10% accuracy versus 10% precision) is not resolved, readers should compare the DogCentric numbers, which are the clearest, rather than a single headline figure."
      ]
    },
    "pt": {
      "contexto": [
        "Reconhecimento de ações significa atribuir um rótulo, como andar, fazer carinho ou arremessar uma bola de basquete, a um trecho de vídeo. Quadros isolados costumam ser ambíguos: uma única imagem não diz se a ação está prestes a começar ou acabou de terminar, então o movimento ao longo dos quadros carrega a maior parte da informação. Um classificador de imagens aplicado quadro a quadro descarta justamente o sinal que separa uma ação da outra.",
        "Trabalhos anteriores lidaram com o tempo de duas formas principais. As redes de dois fluxos alimentam um fluxo com os quadros brutos e outro com o fluxo óptico pré-calculado, que precisa ser computado antes. As redes convolucionais 3D, como C3D e I3D, aprendem filtros espaço-temporais diretamente, com alto custo: o artigo cita cerca de 25M de parâmetros para a I3D, contra 9M para uma única ConvNet mais LSTM, e observa que esses modelos são impraticáveis sem GPUs. O objetivo do artigo é obter alguma informação temporal com características comuns de CNNs 2D e um classificador leve."
      ],
      "ideia": [
        "Imagine o vídeo como uma longa tira de filme. Em vez de perguntar o que um quadro mostra, o método corta a tira em alguns segmentos iguais e escolhe um quadro de cada segmento em posições correspondentes, de modo que cada grupo selecionado cobre o clipe inteiro. Cada grupo descreve então como a cena muda do início ao fim, e isso é o que um classificador precisa.",
        "A ideia central é que o aspecto temporal pode ser recuperado combinando características de várias regiões do vídeo em uma única instância, usando as mesmas características por quadro que um classificador quadro a quadro já usaria. Não é preciso fluxo óptico nem convolução 3D. Os autores também testam duas CNNs diferentes para verificar que o ganho não depende de uma única arquitetura."
      ],
      "algoritmos": [
        "Passo 1, pré-processamento: cada quadro é recortado em um quadrado a partir da sua maior dimensão e redimensionado para 256 por 256 pixels, o tamanho de entrada das duas redes. Passo 2, extração de características: uma GoogLeNet e uma AlexNet modificada, ambas treinadas na tarefa, produzem por quadro um vetor softmax com um valor por classe. Esses vetores são as características por quadro.",
        "Passo 3, divisão em regiões: a sequência de quadros é dividida em n regiões de mesmo tamanho, descartando os quadros que sobram. Um quadro-alvo desliza pela primeira região, e em cada posição o método pega o quadro de índice seguinte em todas as outras regiões. Como o deslizamento pode dar a volta, uma reordenação temporal coloca os quadros selecionados de volta na ordem correta. Passo 4, composição e classificação: um quadro de cada região é combinado por concatenação, resultando em n vezes o número de classes características, ou por média, resultando em um vetor do tamanho do número de classes. Uma SVM prevê a ação a partir desse vetor.",
        "Os experimentos usam o DogCentric, com 209 vídeos egocêntricos de 10 ações de cães, e o UCF-11, com 1.600 vídeos do YouTube de 11 ações humanas. Metade dos vídeos de cada ação forma o conjunto de teste, e 20% do restante é o conjunto de validação, usado para escolher os hiperparâmetros. As linhas de base são trajetórias densas com descritores HOG, HOF, MBH e de trajetória, cada um classificado com uma SVM, além de classificadores AlexNet e GoogLeNet quadro a quadro."
      ],
      "resultados": [
        "No DogCentric, a GoogLeNet com regiões temporais atinge 62% de acurácia, 72% de precisão, 63% de revocação e 63% de F-measure, o melhor resultado entre as abordagens comparadas. A linha de base manual mais forte, MBHy, chega a 54% de acurácia, e os autores relatam que a melhor abordagem profunda com regiões melhora a abordagem profunda sem regiões em 11% em média nesse conjunto. A AlexNet com regiões atinge 59% de acurácia com 16 ou 32 regiões, então o ganho aparece com as duas redes.",
        "No UCF-11 os ganhos são pequenos. A AlexNet atinge cerca de 76-77% de acurácia com várias regiões, contra 73% com uma região, e a GoogLeNet tem melhor desempenho com 16 ou 32 regiões. Os autores explicam as pequenas diferenças pelos clipes curtos desse conjunto. O artigo não é totalmente consistente sobre o tamanho da melhora: a introdução cita cerca de 10% em acurácia, enquanto a conclusão diz que a precisão sobe em até 10%. Os dois números devem ser lidos como relatados pelos autores."
      ],
      "limitacoes": [
        "A avaliação cobre apenas dois conjuntos de dados, cada um com uma única ação por vídeo, então o artigo não mostra como o método se comporta em vídeos não recortados, com várias ações em sequência. As linhas de base também são limitadas: o artigo não compara com modelos LSTM, C3D ou CNN 3D, que lista como trabalho futuro. As conclusões se apoiam em duas CNNs prontas para uso e em um classificador SVM, então a generalização para outras arquiteturas é só parcialmente testada.",
        "O artigo também não estuda em detalhe o custo do método de regiões, nem a sensibilidade dos resultados ao número de regiões além dos valores das tabelas. Como a divergência no relato do ganho (10% em acurácia versus 10% em precisão) não é resolvida, o leitor deve comparar os números do DogCentric, que são os mais claros, e não um único valor de destaque."
      ]
    },
    "figuras": [
      {
        "src": "/figuras/2018-improving-action-recognition-using-temporal-regions-1.png",
        "legenda": {
          "en": "Pipeline of the architecture: frame features from a CNN are grouped into temporal regions, then merged by concatenation or mean before an SVM.",
          "pt": "Pipeline da arquitetura: as características dos quadros extraídas por uma CNN são agrupadas em regiões temporais e depois combinadas por concatenação ou média antes de um SVM."
        }
      },
      {
        "src": "/figuras/2018-improving-action-recognition-using-temporal-regions-2.png",
        "legenda": {
          "en": "Confusion matrices on DogCentric for AlexNet and GoogLeNet, with single frames and with 32 or 8 temporal regions.",
          "pt": "Matrizes de confusão no DogCentric para AlexNet e GoogLeNet, com quadros isolados e com 32 ou 8 regiões temporais."
        }
      }
    ],
    "imagem": "/papers/2018-improving-action-recognition-using-temporal-regions.png"
  },
  "2018-norm-conflict-identification-using-vector-space-offsets": {
    "slug": "2018-norm-conflict-identification-using-vector-space-offsets",
    "temas": [
      "Deep Learning"
    ],
    "links": [],
    "en": null,
    "pt": null,
    "semPdf": true,
    "imagem": null
  },
  "2018-using-scene-context-to-improve-action-recognition": {
    "slug": "2018-using-scene-context-to-improve-action-recognition",
    "temas": [
      "Computer Vision"
    ],
    "links": [],
    "en": null,
    "pt": null,
    "semPdf": true,
    "imagem": null
  },
  "2020-imitating-unknown-policies-via-exploration": {
    "slug": "2020-imitating-unknown-policies-via-exploration",
    "temas": [
      "Imitation Learning",
      "Deep Learning",
      "Reinforcement Learning"
    ],
    "links": [
      {
        "tipo": "pdf",
        "href": "/pdfs/2020-imitating-unknown-policies-via-exploration.pdf"
      },
      {
        "tipo": "arxiv",
        "href": "https://arxiv.org/abs/2008.05660"
      }
    ],
    "en": {
      "contexto": [
        "Imitation learning trains an agent to behave like an expert by watching demonstrations. The usual version, behavioral cloning, needs a dataset of state-action pairs: for each state the expert visited, the log must also record which action the expert took. In many real settings that log does not exist. A video of someone cooking shows the hand positions over time, but not the motor commands that produced them.",
        "Imitation from observation (IfO) relaxes this requirement. The agent sees only sequences of states, such as frames or sensor readings, and must infer the missing actions. A common tool for this is the inverse dynamics model (IDM), which takes two consecutive states and predicts the action that caused the transition. Behavioral cloning from observations (BCO) combines an IDM with a policy: the IDM labels the expert's transitions with predicted actions, and the policy is trained to copy those labels. BCO can then be run iteratively, feeding the policy's own rollouts back into the IDM."
      ],
      "ideia": [
        "The problem is that this iterative loop is fragile. Early on, the policy is poor, so its rollouts, called post-demonstrations, contain wrong state-action pairs. Retraining the IDM on those pairs makes its predictions worse, which in turn trains a worse policy. The process can settle into a bad local minimum where it stops improving.",
        "Think of a student learning to read a recipe's cooking steps from a video, using a friend who guesses what each motion means. If the guesses are wrong, the student learns the wrong meaning and then repeats the mistake. The paper's fix is to stop trusting the friend's early guesses so much. It keeps the original examples, in which the agent's actions came from a random policy, and mixes them with the new rollouts in a controlled way. It also samples actions from the policy's probability distribution rather than always taking the most likely one, so the agent keeps exploring. Self-attention modules let both networks weigh the whole input, not only nearby features."
      ],
      "algoritmos": [
        "Step 1: Collect pre-demonstrations. A random policy acts in the environment, and the system records state pairs with their true actions. These pairs are used only to train the first IDM. Step 2: Train the IDM. The IDM learns to predict an action from two consecutive states using this initial data.",
        "Step 3: Label the expert's transitions. The IDM receives the expert's state pairs, which have no action labels, and outputs predicted actions for them. Step 4: Train the policy. The policy is trained by behavioral cloning on the expert's states paired with these predicted actions.",
        "Step 5: Generate new data and repeat. The policy acts in the environment, and each run is saved as post-demonstrations, along with whether the goal was reached. Before the IDM is retrained, a sampling step picks which observations to use, weighing pre-demonstrations against post-demonstrations based on each run's success. Actions are drawn from the softmax output, which adds exploration. Both networks use self-attention. The loop runs for a fixed number of cycles."
      ],
      "resultados": [
        "The authors test on four OpenAI Gym environments: three vector-based tasks (CartPole, Acrobot, MountainCar) and image-based mazes at 3x3, 5x5 and 10x10. They compare IUPE with BCO, ILPO, a supervised behavioral clone, a random policy and the expert, using Average Episodic Reward (AER) and Performance (P). IUPE beats the baselines in every environment except CartPole, where all methods tie. CartPole's state has only four dimensions and its actions are easy to separate, so the tie is expected.",
        "The clearest gains are on Acrobot and MountainCar. On Acrobot, IUPE reaches AER -78.10 against -85.30 for ILPO, which the authors read as solving the task about 10 frames sooner. On MountainCar, IUPE reaches P of 1.314 and AER of -130.70, which the authors describe as 19.3 points better than BCO. In the 3x3 maze, IUPE and BCO both reach AER 0.927, so the difference there is in the other metric. The authors also report that IUPE stays stable as the maze grows while the other approaches fail to learn. ILPO's AER is below zero on the mazes, which they attribute to its image cropping removing needed parts of the scene."
      ],
      "limitacoes": [
        "The evaluation is narrow: four environments, two of them small grid mazes, and only discrete action spaces. The paper does not show how IUPE performs on continuous control or on realistic video data, and the authors name continuous spaces as future work. Some of the ablation numbers in the text are hard to read from the extracted table, so this summary does not quote them.",
        "The reported gains are relative to BCO and ILPO only, and the summary has not checked them against other imitation-from-observation methods that came later. The paper also does not report variance across random seeds in the parts summarized here, so the size of the differences should be read with that in mind."
      ]
    },
    "pt": {
      "contexto": [
        "O aprendizado por imitação treina um agente para se comportar como um especialista, observando demonstrações. A versão usual, a clonagem comportamental, precisa de um conjunto de pares estado-ação: para cada estado que o especialista visitou, o registro também deve dizer qual ação ele tomou. Em muitos cenários reais esse registro não existe. Um vídeo de alguém cozinhando mostra a posição das mãos ao longo do tempo, mas não os comandos motores que a produziram.",
        "A imitação a partir de observação (IfO) relaxa essa exigência. O agente vê apenas sequências de estados, como quadros ou leituras de sensores, e precisa inferir as ações que faltam. Uma ferramenta comum é o modelo de dinâmica inversa (IDM), que recebe dois estados consecutivos e prevê a ação que causou a transição. A clonagem comportamental a partir de observações (BCO) combina um IDM com uma política: o IDM rotula as transições do especialista com ações previstas, e a política é treinada para copiar esses rótulos. O BCO pode ser executado de forma iterativa, realimentando o IDM com as execuções da própria política."
      ],
      "ideia": [
        "O problema é que esse ciclo iterativo é frágil. No início, a política é ruim, então suas execuções, chamadas de pós-demonstrações, contêm pares estado-ação errados. Retreinar o IDM com esses pares piora suas previsões, o que por sua vez treina uma política pior. O processo pode se estabilizar em um mínimo local ruim, onde deixa de melhorar.",
        "Imagine um estudante que aprende o significado dos passos de uma receita a partir de um vídeo, com a ajuda de um amigo que chuta o significado de cada movimento. Se os chutes estiverem errados, o estudante aprende o significado errado e repete o erro. A proposta do artigo é confiar menos nos primeiros chutes. O método mantém os exemplos originais, em que as ações vieram de uma política aleatória, e os mistura de forma controlada com as novas execuções. Também amostra as ações a partir da distribuição de probabilidade da política, em vez de sempre escolher a mais provável, para que o agente continue explorando. Módulos de autoatenção permitem que as duas redes ponderem a entrada inteira, e não apenas características locais."
      ],
      "algoritmos": [
        "Passo 1: coletar pré-demonstrações. Uma política aleatória age no ambiente, e o sistema registra pares de estados com suas ações verdadeiras. Esses pares são usados apenas para treinar o primeiro IDM. Passo 2: treinar o IDM. O IDM aprende a prever uma ação a partir de dois estados consecutivos, usando esses dados iniciais.",
        "Passo 3: rotular as transições do especialista. O IDM recebe os pares de estados do especialista, que não têm rótulos de ação, e produz ações previstas para eles. Passo 4: treinar a política. A política é treinada por clonagem comportamental, com os estados do especialista pareados às ações previstas.",
        "Passo 5: gerar novos dados e repetir. A política age no ambiente, e cada execução é salva como pós-demonstração, junto com a informação de se o objetivo foi atingido. Antes de o IDM ser retreinado, uma etapa de amostragem escolhe quais observações usar, ponderando pré-demonstrações e pós-demonstrações conforme o sucesso de cada execução. As ações são sorteadas a partir da saída softmax, o que adiciona exploração. As duas redes usam autoatenção. O ciclo roda por um número fixo de iterações."
      ],
      "resultados": [
        "Os autores testam em quatro ambientes do OpenAI Gym: três tarefas vetoriais (CartPole, Acrobot, MountainCar) e labirintos baseados em imagens nas versões 3x3, 5x5 e 10x10. Comparam o IUPE com o BCO, o ILPO, um clone comportamental supervisionado, uma política aleatória e o especialista, usando a Recompensa Média por Episódio (AER) e o Desempenho (P). O IUPE supera os baselines em todos os ambientes, exceto no CartPole, onde todos os métodos empatam. O estado do CartPole tem apenas quatro dimensões e as ações são fáceis de separar, então o empate é esperado.",
        "Os ganhos mais claros são no Acrobot e no MountainCar. No Acrobot, o IUPE atinge AER de -78,10, contra -85,30 do ILPO, o que os autores interpretam como resolver a tarefa cerca de 10 quadros antes. No MountainCar, o IUPE atinge P de 1,314 e AER de -130,70, que os autores descrevem como 19,3 pontos melhor que o BCO. No labirinto 3x3, IUPE e BCO atingem ambos AER 0,927, então a diferença está na outra métrica. Os autores também relatam que o IUPE se mantém estável conforme o labirinto cresce, enquanto as demais abordagens não aprendem. O AER do ILPO é negativo nos labirintos, o que eles atribuem ao corte das imagens, que remove partes necessárias da cena."
      ],
      "limitacoes": [
        "A avaliação é restrita: quatro ambientes, dois deles labirintos em grade pequenos, e apenas espaços de ação discretos. O artigo não mostra o desempenho do IUPE em controle contínuo nem em dados de vídeo realistas, e os autores citam espaços contínuos como trabalho futuro. Alguns números de ablação no texto são difíceis de ler na tabela extraída, então este resumo não os cita.",
        "Os ganhos relatados são apenas em relação ao BCO e ao ILPO, e este resumo não os comparou com outros métodos de imitação a partir de observação publicados depois. O artigo também não reporta variância entre sementes aleatórias nas partes resumidas aqui, então o tamanho das diferenças deve ser lido com essa ressalva."
      ]
    },
    "figuras": [
      {
        "src": "/figuras/2020-imitating-unknown-policies-via-exploration-1.png",
        "legenda": {
          "en": "Training pipeline of IUPE, with the Inverse Dynamics Model and the Policy Model trained alternately on expert and agent data.",
          "pt": "Pipeline de treinamento do IUPE, com o Modelo Dinâmico Inverso e o Modelo de Política treinados alternadamente com dados do especialista e do agente."
        }
      },
      {
        "src": "/figuras/2020-imitating-unknown-policies-via-exploration-2.png",
        "legenda": {
          "en": "IDM predictions over training interactions (a) and the share of non-MAP choices under the self-decaying exploration rate (b).",
          "pt": "Predições do IDM ao longo das interações de treinamento (a) e a parcela de escolhas não-MAP sob a taxa de exploração com decaimento automático (b)."
        }
      }
    ],
    "imagem": "/papers/2020-imitating-unknown-policies-via-exploration.png"
  },
  "2020-object-based-goal-recognition-using-real-world-data": {
    "slug": "2020-object-based-goal-recognition-using-real-world-data",
    "temas": [
      "Computer Vision",
      "Planning"
    ],
    "links": [
      {
        "tipo": "doi",
        "href": "https://doi.org/10.1007/978-3-030-60884-2_24"
      }
    ],
    "en": null,
    "pt": null,
    "semPdf": true,
    "imagem": null
  },
  "2022-how-resilient-are-imitation-learning-methods-to-sub-optimal-experts": {
    "slug": "2022-how-resilient-are-imitation-learning-methods-to-sub-optimal-experts",
    "temas": [
      "Imitation Learning",
      "Reinforcement Learning"
    ],
    "links": [],
    "en": null,
    "pt": null,
    "semPdf": true,
    "imagem": null
  }
}
