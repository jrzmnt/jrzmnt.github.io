// Gerado a partir dos resumos dos artigos. Não editar à mão.
export const resumos = {
  "2017-a-deep-neural-architecture-for-kitchen-activity-recognition": {
    "slug": "2017-a-deep-neural-architecture-for-kitchen-activity-recognition",
    "temas": [
      "Computer Vision",
      "Deep Learning"
    ],
    "links": [
      {
        "tipo": "pdf",
        "href": "https://www.meneguzzi.eu/felipe/pubs/flairs-hybrid-recognizer-2017.pdf"
      }
    ],
    "en": {
      "contexto": [
        "Recognizing what someone is doing in a kitchen is useful for assistive applications. If a system fails to identify the activity, the user loses trust and stops using it. The challenge is that similar cooking actions share the same objects and the same region of the frame, so a model needs to capture how things move, not only what they look like.",
        "Two inputs carry complementary information. RGB frames show appearance. Optical flow shows motion, the displacement of each pixel between consecutive frames. A convolutional neural network can learn from either one, and fusing the two gives the model both views."
      ],
      "ideia": [
        "The paper proposes a deep architecture for kitchen activity recognition in a fixed-camera setting. One CNN learns from RGB frames and another from optical flow, and their outputs are fused. The fusion stage is where most of the design choices are made.",
        "An analogy: two observers watch the same kitchen, one looking at the scene and one tracking the movement. A third person listens to both and decides what is going on, using the reports of both."
      ],
      "algoritmos": [
        "Step 1, inputs: the video frames are used as RGB images, and dense optical flow is computed between consecutive frames to produce a second input stream.",
        "Step 2, networks: a GoogLeNet is trained on the RGB frames and another on the optical flow. The networks learn the features and produce a probability for each class per frame.",
        "Step 3, fusion: the probabilities are combined in three ways. A mean averages them. A support vector machine (SVM) classifies the stacked probabilities. A neural network (NN) learns how to weigh the two networks, and it performs best.",
        "Step 4, smoothing: following Bansal et al., a sliding window replaces each frame's label with the majority label around it, which removes short misclassifications that would otherwise break an activity into fragments."
      ],
      "resultados": [
        "The neural-network fusion reaches 72.6% global accuracy on the KSCGR dataset and is the best method in 5 of the 9 activities. The RGB network alone reaches 68.9% and the optical flow network alone 63.1%, so the combination gives a clear gain.",
        "Compared with the hand-crafted features of Bansal et al., which reach 64% accuracy and 72% with smoothing, the NN fusion is better before smoothing. The extended IJCNN 2017 version of this work, which uses three CNNs, reaches 78.5% accuracy."
      ],
      "limitacoes": [
        "The Turning activity is almost never recognized by the fused models, and the paper attributes the confusion between activities that share the same region and objects to the frame-by-frame nature of the method. The results come from a single dataset with a fixed camera. The paper leaves temporal modeling to future work."
      ],
      "tabelas": [
        {
          "titulo": "Global accuracy on the KSCGR dataset",
          "colunas": [
            "Approach",
            "Accuracy"
          ],
          "linhas": [
            [
              "Hand-crafted features (Bansal et al.)",
              "0.64"
            ],
            [
              "Hand-crafted features + smoothing (Bansal et al.)",
              "0.72"
            ],
            [
              "RGB network",
              "0.69"
            ],
            [
              "Optical flow network",
              "0.63"
            ],
            [
              "Fusion by neural network (this paper)",
              "0.726"
            ]
          ]
        }
      ]
    },
    "pt": {
      "contexto": [
        "Reconhecer o que alguém faz numa cozinha é útil para aplicações assistivas. Se o sistema não identifica a atividade, o usuário perde a confiança e para de usar. O desafio é que ações de cozinha parecidas compartilham os mesmos objetos e a mesma região do quadro, então o modelo precisa capturar como as coisas se movem, e não só como elas se parecem.",
        "Duas entradas trazem informações complementares. Os quadros RGB mostram a aparência. O fluxo óptico mostra o movimento, o deslocamento de cada pixel entre quadros consecutivos. Uma rede neural convolucional pode aprender a partir de qualquer uma delas, e a fusão das duas dá ao modelo as duas visões."
      ],
      "ideia": [
        "O artigo propõe uma arquitetura profunda para reconhecimento de atividades de cozinha, com câmera fixa. Uma CNN aprende a partir dos quadros RGB e outra a partir do fluxo óptico, e as saídas são fundidas. A etapa de fusão é onde se concentram as principais escolhas de projeto.",
        "Uma analogia: dois observadores acompanham a mesma cozinha, um olhando a cena e outro acompanhando o movimento. Uma terceira pessoa ouve os dois relatórios e decide o que está acontecendo."
      ],
      "algoritmos": [
        "Passo 1, entradas: os quadros de vídeo são usados como imagens RGB, e o fluxo óptico denso é calculado entre quadros consecutivos para gerar um segundo fluxo de entrada.",
        "Passo 2, redes: uma GoogLeNet é treinada nos quadros RGB e outra no fluxo óptico. As redes aprendem as características e produzem uma probabilidade para cada classe em cada quadro.",
        "Passo 3, fusão: as probabilidades são combinadas de três formas. Uma média as calcula. Uma máquina de vetores de suporte (SVM) classifica as probabilidades empilhadas. Uma rede neural (NN) aprende o peso de cada rede, e é a que tem o melhor desempenho.",
        "Passo 4, suavização: seguindo Bansal et al., uma janela deslizante troca o rótulo de cada quadro pelo rótulo majoritário ao redor dele, o que remove erros curtos que, de outro modo, quebrariam uma atividade em fragmentos."
      ],
      "resultados": [
        "A fusão por rede neural alcança 72,6% de acurácia global no conjunto KSCGR e é o melhor método em 5 das 9 atividades. A rede só com RGB chega a 68,9%, e a só com fluxo óptico a 63,1%, então a combinação traz um ganho claro.",
        "Comparada com as características construídas à mão de Bansal et al., que chegam a 64% de acurácia e a 72% com suavização, a fusão por rede neural é melhor antes da suavização. A versão estendida deste trabalho, publicada no IJCNN 2017 com três CNNs, alcança 78,5%."
      ],
      "limitacoes": [
        "A atividade Turning quase nunca é reconhecida pelos modelos fundidos, e o artigo atribui a confusão entre atividades que compartilham a mesma região e os mesmos objetos à natureza quadro a quadro do método. Os resultados vêm de um único conjunto de dados, com câmera fixa. A modelagem temporal fica para trabalhos futuros."
      ],
      "tabelas": [
        {
          "titulo": "Acurácia global no conjunto KSCGR",
          "colunas": [
            "Abordagem",
            "Acurácia"
          ],
          "linhas": [
            [
              "Características construídas à mão (Bansal et al.)",
              "0,64"
            ],
            [
              "Características à mão + suavização (Bansal et al.)",
              "0,72"
            ],
            [
              "Rede só com RGB",
              "0,69"
            ],
            [
              "Rede só com fluxo óptico",
              "0,63"
            ],
            [
              "Fusão por rede neural (este artigo)",
              "0,726"
            ]
          ]
        }
      ]
    },
    "imagem": "/papers/2017-a-deep-neural-architecture-for-kitchen-activity-recognition.png"
  },
  "2017-deep-neural-networks-for-handwritten-chinese-character-recognition": {
    "slug": "2017-deep-neural-networks-for-handwritten-chinese-character-recognition",
    "temas": [
      "Computer Vision",
      "Deep Learning"
    ],
    "links": [
      {
        "tipo": "editor",
        "href": "https://www.computer.org/csdl/proceedings-article/bracis/2017/2407a192/12OmNyeWdNx"
      }
    ],
    "en": {
      "contexto": [
        "Handwriting recognition turns handwritten text into digital text. It matters for reading postal addresses, bank checks, and forms. Chinese is much harder than English or digits: there are more than 50,000 characters, of which about 6,000 are common, and many of them differ by a single stroke. Figure 1 of the paper shows pairs of characters that look almost the same but mean different things.",
        "Convolutional neural networks (CNNs) learn visual features from images and have reached state-of-the-art results on digits and on several alphabets. Before them, the best systems relied on handcrafted features designed for Chinese handwriting, which tend to suffer when the handwriting style changes."
      ],
      "ideia": [
        "The authors ask a systematic question: which CNN architectures work best for handwritten Chinese characters, and does combining them help? They train seven well-known architectures from LeNet to VGG-16 and ZFNet, then test ten fusion combinations of them, on a subset of 200 classes from the HWDB1.1 dataset and on the ICDAR 2013 competition test set.",
        "An analogy: a set of experts reads the same handwritten note. The paper checks whether one good reader is enough, or whether a committee of readers, each with a different background, catches what the first one misses."
      ],
      "algoritmos": [
        "Step 1, architectures: each network takes 64 by 64 images, uses batch normalization after each convolution, ReLU activations, and dropout on the fully connected layers. The architectures differ in depth and filter sizes, from the two-layer LeNet to the deep VGG-16.",
        "Step 2, training: each network is trained with AdaDelta, with weight decay and dropout, and the model with the best validation accuracy is kept.",
        "Step 3, fusion: the probabilities of the best models are concatenated and a support vector machine (SVM) is trained on them to make the late fusion. Ten fusion combinations are tested."
      ],
      "resultados": [
        "On the 200-class subset, ZFNet reaches 97.8% accuracy, and on ICDAR 2013 it reaches 98.2%. The paper reports that this surpasses the 96.13% human accuracy reported for ICDAR 2013. LeNet, the oldest architecture, is the weakest, at 92.4% and 93.5%.",
        "Fusion does not help much. The fused models reach at most 97.5% and 97.9%, a little below ZFNet alone, and mixing architectures brings no clear gain. The authors conclude that a single well-chosen network has enough capacity, and that the networks may already be at their maximum learning capability. The most confused classes are 80 and 81, which differ by a single horizontal stroke."
      ],
      "limitacoes": [
        "The experiments use a reduced version of the ICDAR data, because of computational limits, so the numbers are not directly comparable to the full benchmark. The human-accuracy comparison is taken from the competition report and depends on how that human test was run. The paper does not explore data augmentation or larger ensembles."
      ],
      "tabelas": [
        {
          "titulo": "Accuracy on the 200-class subset and on ICDAR 2013",
          "colunas": [
            "Model",
            "200-Class",
            "ICDAR 2013"
          ],
          "linhas": [
            [
              "LeNet",
              "0.924",
              "0.935"
            ],
            [
              "VGG-9",
              "0.967",
              "0.972"
            ],
            [
              "AlexNet",
              "0.959",
              "0.968"
            ],
            [
              "ZFNet",
              "0.978",
              "0.982"
            ],
            [
              "VGG-7 + VGG-9 + VGG-16 + ZFNet + SVM",
              "0.975",
              "0.978"
            ]
          ]
        }
      ]
    },
    "pt": {
      "contexto": [
        "Reconhecimento de escrita à mão transforma texto manuscrito em texto digital. É importante para ler endereços postais, cheques bancários e formulários. O chinês é bem mais difícil que o inglês ou os algarismos: há mais de 50.000 caracteres, dos quais cerca de 6.000 são comuns, e muitos diferem por um único traço. A Figura 1 do artigo mostra pares de caracteres que quase parecem iguais, mas têm significados diferentes.",
        "Redes neurais convolucionais (CNNs) aprendem características visuais a partir de imagens e alcançaram resultados de estado da arte em algarismos e em vários alfabetos. Antes delas, os melhores sistemas usavam características construídas à mão, pensadas para a escrita chinesa, que tendem a falhar quando o estilo de escrita muda."
      ],
      "ideia": [
        "Os autores fazem uma pergunta sistemática: quais arquiteturas de CNN funcionam melhor para caracteres chineses manuscritos, e combiná-las ajuda? Eles treinam sete arquiteturas conhecidas, do LeNet ao VGG-16 e ZFNet, e testam dez combinações de fusão delas, num subconjunto de 200 classes do HWDB1.1 e no conjunto de teste da competição ICDAR 2013.",
        "Uma analogia: um grupo de especialistas lê a mesma anotação manuscrita. O artigo verifica se um bom leitor basta, ou se um comitê de leitores, cada um com uma formação diferente, pega o que o primeiro deixa passar."
      ],
      "algoritmos": [
        "Passo 1, arquiteturas: cada rede recebe imagens de 64 por 64, usa normalização em lote após cada convolução, ativações ReLU e dropout nas camadas totalmente conectadas. As arquiteturas diferem em profundidade e tamanho de filtros, do LeNet de duas camadas ao VGG-16 profundo.",
        "Passo 2, treino: cada rede é treinada com AdaDelta, com regularização de pesos e dropout, e o modelo com a melhor acurácia de validação é mantido.",
        "Passo 3, fusão: as probabilidades dos melhores modelos são concatenadas e uma máquina de vetores de suporte (SVM) é treinada sobre elas para fazer a fusão tardia. São testadas dez combinações de fusão."
      ],
      "resultados": [
        "No subconjunto de 200 classes, a ZFNet alcança 97,8% de acurácia, e no ICDAR 2013 chega a 98,2%. O artigo afirma que isso supera os 96,13% de acurácia humana relatados para o ICDAR 2013. O LeNet, a arquitetura mais antiga, é o pior, com 92,4% e 93,5%.",
        "A fusão ajuda pouco. Os modelos fundidos chegam no máximo a 97,5% e 97,9%, um pouco abaixo da ZFNet sozinha, e misturar arquiteturas não traz ganho claro. Os autores concluem que uma única rede bem escolhida tem capacidade suficiente, e que as redes podem já estar no limite de aprendizado. As classes mais confundidas são a 80 e a 81, que diferem por um único traço horizontal."
      ],
      "limitacoes": [
        "Os experimentos usam uma versão reduzida dos dados do ICDAR, por limitações de processamento, então os números não são diretamente comparáveis ao benchmark completo. A comparação com a acurácia humana vem do relatório da competição e depende de como esse teste humano foi feito. O artigo não explora aumento de dados nem conjuntos maiores."
      ],
      "tabelas": [
        {
          "titulo": "Acurácia no subconjunto de 200 classes e no ICDAR 2013",
          "colunas": [
            "Modelo",
            "200 classes",
            "ICDAR 2013"
          ],
          "linhas": [
            [
              "LeNet",
              "0,924",
              "0,935"
            ],
            [
              "VGG-9",
              "0,967",
              "0,972"
            ],
            [
              "AlexNet",
              "0,959",
              "0,968"
            ],
            [
              "ZFNet",
              "0,978",
              "0,982"
            ],
            [
              "VGG-7 + VGG-9 + VGG-16 + ZFNet + SVM",
              "0,975",
              "0,978"
            ]
          ]
        }
      ]
    },
    "imagem": "/papers/2017-deep-neural-networks-for-handwritten-chinese-character-recognition.png"
  },
  "2017-deep-neural-networks-for-kitchen-activity-recognition": {
    "slug": "2017-deep-neural-networks-for-kitchen-activity-recognition",
    "temas": [
      "Computer Vision",
      "Deep Learning"
    ],
    "links": [
      {
        "tipo": "pdf",
        "href": "https://www.meneguzzi.eu/felipe/pubs/ijcnn-deep-activity-recognition-2017.pdf"
      }
    ],
    "en": {
      "contexto": [
        "Recognizing human actions in a kitchen is a practical problem. A system that knows the cook is cutting or boiling can warn about a timer, suggest the next step, or help someone who is cooking with limited mobility. The challenge is that cooking actions look alike: 'mixing' and 'baking' can both involve a bowl and an oven. A single static camera gives the images, but a single snapshot is often not enough, because motion matters.",
        "Two kinds of input help. RGB frames show what the scene looks like. Optical flow shows how the pixels move between two consecutive frames: it encodes motion directly, regardless of appearance. A convolutional neural network (CNN) can learn features from either kind of input, and combining them gives the model both appearance and movement."
      ],
      "ideia": [
        "Instead of one network, the authors train an ensemble. Each CNN specializes in a different view of the data (RGB or optical flow, and three different architectures). Their outputs are then fused, and the paper compares several fusion strategies, including a support vector machine, a neural network, and a long short-term memory network (LSTM) that reads the sequence of outputs.",
        "An analogy: a kitchen has three cooks who each watch the same video. One focuses on the ingredients, one on the hands, and one on the motion. An assistant listens to all three and decides which action is happening, and it is also allowed to look back over the last few seconds before deciding."
      ],
      "algoritmos": [
        "Step 1, preprocessing: each video frame is resized, and for each pair of consecutive frames a dense optical flow is computed, which gives the horizontal and vertical displacement of every pixel.",
        "Step 2, the CNNs: GoogLeNet and AlexNet are trained on RGB frames and on optical flow, and SqueezeNet is added with the same training. The paper tests training from scratch and fine-tuning from ImageNet weights. Fine-tuning was not always best, which the authors explain by the kitchen images being very different from ImageNet.",
        "Step 3, fusion: the probabilities of the networks are merged in several ways. Mean averages them. A neural network (NN) learns how much to trust each network. An SVM classifies the stacked probabilities. An LSTM reads the sequence of probabilities across frames, which lets it use temporal context.",
        "Step 4, post-processing: a window of 20 frames replaces each label with the majority label in its window, which removes short, isolated misclassifications. The best model combines three CNNs, LSTM fusion and post-processing: 3CNNs + LSTM + PP."
      ],
      "resultados": [
        "The best model, 3CNNs + LSTM + PP, reaches 78.5% global accuracy on the KSCGR dataset. The strongest single network, AlexNet fine-tuned, reaches 75.1%. Fusion alone already helps: GoogLeNet with RGB and optical flow fused by a neural network reaches 72.6%, compared with 68.9% for RGB alone.",
        "Compared with the previous state of the art, which uses hand-crafted features (Bansal et al.), the proposed approach is clearly better. Bansal et al. reach 64% accuracy without post-processing and 72% with it. The authors also show that the LSTM fusion gives the best precision, recall and F-measure in their table, not just the best accuracy."
      ],
      "limitacoes": [
        "The results are for one kitchen dataset with a fixed camera, so they do not show that the approach works in other kitchens or with moving cameras. Some actions are rare in the training data, and the authors note that the class 'turning' performs poorly in several models, probably because the validation set has very few frames of it. The paper's future work includes temporal pooling and 3D CNNs."
      ],
      "tabelas": [
        {
          "titulo": "Global accuracy on the KSCGR dataset",
          "colunas": [
            "Approach",
            "Accuracy"
          ],
          "linhas": [
            [
              "Hand-crafted features (Bansal et al.)",
              "0.64"
            ],
            [
              "Hand-crafted features + post-processing",
              "0.72"
            ],
            [
              "GoogLeNet RGB + optical flow + NN",
              "0.726"
            ],
            [
              "3CNNs + LSTM + PP (this paper)",
              "0.785"
            ]
          ]
        }
      ]
    },
    "pt": {
      "contexto": [
        "Reconhecer ações humanas na cozinha é um problema prático. Um sistema que sabe se a pessoa está cortando ou fervendo pode lembrar de um timer, sugerir o próximo passo ou ajudar quem cozinha com mobilidade reduzida. O desafio é que ações de cozinha se parecem: 'misturar' e 'assar' podem envolver uma tigela e um forno. Uma única câmera fixa fornece as imagens, mas um instantâneo muitas vezes não basta, porque o movimento importa.",
        "Dois tipos de entrada ajudam. Os quadros RGB mostram como a cena se parece. O fluxo óptico mostra como os pixels se movem entre dois quadros consecutivos: ele codifica o movimento diretamente, independentemente da aparência. Uma rede neural convolucional (CNN) aprende características de qualquer um dos dois, e combinar os dois dá ao modelo tanto aparência quanto movimento."
      ],
      "ideia": [
        "Em vez de uma rede só, os autores treinam um conjunto de redes. Cada CNN se especializa em uma visão diferente dos dados (RGB ou fluxo óptico, e três arquiteturas diferentes). As saídas são então fundidas, e o artigo compara várias estratégias de fusão, incluindo uma máquina de vetores de suporte, uma rede neural e uma rede LSTM que lê a sequência de saídas.",
        "Uma analogia: uma cozinha tem três cozinheiros que assistem ao mesmo vídeo. Um presta atenção nos ingredientes, outro nas mãos e outro no movimento. Um assistente ouve os três e decide qual ação está acontecendo, e ainda pode olhar os últimos segundos antes de decidir."
      ],
      "algoritmos": [
        "Passo 1, pré-processamento: cada quadro de vídeo é redimensionado, e para cada par de quadros consecutivos é calculado um fluxo óptico denso, que dá o deslocamento horizontal e vertical de cada pixel.",
        "Passo 2, as CNNs: GoogLeNet e AlexNet são treinadas com quadros RGB e com fluxo óptico, e a SqueezeNet entra com o mesmo treino. O artigo testa treinar do zero e ajustar a partir de pesos do ImageNet. O ajuste fino nem sempre foi o melhor, o que os autores explicam pelo fato de as imagens da cozinha serem muito diferentes das do ImageNet.",
        "Passo 3, fusão: as probabilidades das redes são combinadas de várias formas. A média simplesmente as calcula. Uma rede neural (NN) aprende quanto confiar em cada rede. Uma SVM classifica as probabilidades empilhadas. Uma LSTM lê a sequência de probabilidades ao longo dos quadros, o que lhe permite usar contexto temporal.",
        "Passo 4, pós-processamento: uma janela de 20 quadros troca cada rótulo pelo rótulo majoritário da janela, o que remove erros curtos e isolados. O melhor modelo combina três CNNs, fusão por LSTM e pós-processamento: 3CNNs + LSTM + PP."
      ],
      "resultados": [
        "O melhor modelo, 3CNNs + LSTM + PP, alcança 78,5% de acurácia global no conjunto KSCGR. A melhor rede isolada, AlexNet com ajuste fino, chega a 75,1%. A fusão sozinha já ajuda: o GoogLeNet com RGB e fluxo óptico combinados por rede neural chega a 72,6%, contra 68,9% só com RGB.",
        "Comparado com o estado da arte anterior, que usa características construídas à mão (Bansal et al.), a abordagem proposta é claramente melhor. Bansal et al. chegam a 64% de acurácia sem pós-processamento e 72% com ele. Os autores também mostram que a fusão por LSTM tem a melhor precisão, revocação e F-measure na tabela, não só a melhor acurácia."
      ],
      "limitacoes": [
        "Os resultados são de um único conjunto de dados de cozinha, com câmera fixa, então não mostram que a abordagem funciona em outras cozinhas ou com câmeras em movimento. Algumas ações são raras no treino, e os autores observam que a classe 'turning' tem desempenho ruim em vários modelos, provavelmente porque o conjunto de validação tem poucos quadros dela. Os trabalhos futuros incluem agregação temporal e CNNs 3D."
      ],
      "tabelas": [
        {
          "titulo": "Acurácia global no conjunto KSCGR",
          "colunas": [
            "Abordagem",
            "Acurácia"
          ],
          "linhas": [
            [
              "Características construídas à mão (Bansal et al.)",
              "0,64"
            ],
            [
              "Características à mão + pós-processamento",
              "0,72"
            ],
            [
              "GoogLeNet RGB + fluxo óptico + NN",
              "0,726"
            ],
            [
              "3CNNs + LSTM + PP (este artigo)",
              "0,785"
            ]
          ]
        }
      ]
    },
    "imagem": "/papers/2017-deep-neural-networks-for-kitchen-activity-recognition.png"
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
      "Deep Learning"
    ],
    "links": [
      {
        "tipo": "pdf",
        "href": "https://www.meneguzzi.eu/felipe/pubs/ijcnn-dogcentric-2017.pdf"
      },
      {
        "tipo": "doi",
        "href": "https://doi.org/10.1109/IJCNN.2017.7966130"
      }
    ],
    "en": {
      "contexto": [
        "Human activity recognition is the task of identifying what a person or an animal is doing from video. It is hard because the camera itself moves: a camera worn on a dog's back shakes with every step, and the scene changes constantly. Deep convolutional neural networks (CNNs) learn visual features from data instead of having them designed by hand, and architectures such as AlexNet and GoogLeNet became standard for images.",
        "Blind and visually impaired people rely on guide dogs for navigation, but a dog cannot describe what it perceives. A system that recognizes what the dog is doing, and says it aloud, could give the user a richer picture of the environment."
      ],
      "ideia": [
        "The authors use a public dataset recorded by cameras mounted on dogs, the DogCentric Activity dataset, to train an activity recognizer. They then connect the recognizer to audio feedback, so the user hears a short phrase whenever the dog's activity changes, for example 'There is a car on your way.'",
        "An analogy: a friend describes your surroundings by watching what your guide dog does. The dog's behavior is a strong clue to what is happening around the user, and the system turns that clue into a sentence."
      ],
      "algoritmos": [
        "Step 1, two CNNs in parallel: AlexNet and GoogLeNet receive the same frames, resized to 256 by 256. The two networks are complementary, because each learns different features from the same image.",
        "Step 2, training: each network is trained in two ways, from scratch and by fine-tuning from ImageNet weights. The fine-tuned versions performed better, so they were the ones combined.",
        "Step 3, late fusion: the softmax outputs of both networks are stacked and classified by a linear SVM, which gives a fused prediction for each frame.",
        "Step 4, post-processing: a sliding window of 10 frames replaces each frame's label with the majority label in its window, which removes isolated misclassified frames. The window size was chosen after testing values from 10 to 50 frames."
      ],
      "resultados": [
        "The final system, Fused+SVM+PP, reaches 75.6% global accuracy on the DogCentric test set. The best single model before smoothing, Fused+SVM, reaches 68.2%. Fine-tuned AlexNet alone reaches 52.6%, so combining the two networks and the smoothing step each add a clear gain.",
        "Compared with the published state of the art on the same dataset, the final system is above the best result reported by Ryoo et al. (PoT+ITF, 74.5%) and above the multi-channel baseline of Iwashita et al. (60.5%). The improvement is modest but consistent across the class-level results."
      ],
      "limitacoes": [
        "Per-class results are uneven. Right (0.0% in the fused model) and Left (11.4%) are almost never recognized, because they are underrepresented and the fine-tuned models already score low on them. The paper also notes that the smoothing step can erase correctly predicted short segments. The application was built and demonstrated with five of the ten classes, and the paper does not report a user study with visually impaired people."
      ],
      "tabelas": [
        {
          "titulo": "Global accuracy on the DogCentric Activity dataset",
          "colunas": [
            "Approach",
            "Accuracy"
          ],
          "linhas": [
            [
              "Multi-channel (Iwashita et al.)",
              "0.605"
            ],
            [
              "PoT+ITF (Ryoo et al.)",
              "0.745"
            ],
            [
              "Fused+SVM",
              "0.682"
            ],
            [
              "Fused+SVM+PP (this paper)",
              "0.756"
            ]
          ]
        }
      ]
    },
    "pt": {
      "contexto": [
        "Reconhecimento de atividades humanas é a tarefa de identificar, a partir de vídeo, o que uma pessoa ou um animal está fazendo. É difícil porque a própria câmera se move: uma câmera presa às costas de um cachorro treme a cada passo, e a cena muda o tempo todo. Redes neurais convolucionais profundas (CNNs) aprendem características visuais a partir dos dados, em vez de elas serem desenhadas à mão, e arquiteturas como AlexNet e GoogLeNet viraram padrão para imagens.",
        "Pessoas cegas ou com baixa visão dependem de cães-guia para se locomover, mas um cão não consegue descrever o que percebe. Um sistema que reconhece o que o cão está fazendo e fala isso em voz alta poderia dar ao usuário uma imagem mais rica do ambiente."
      ],
      "ideia": [
        "Os autores usam um conjunto de dados público gravado por câmeras presas a cães, o DogCentric Activity, para treinar um reconhecedor de atividades. Depois ligam o reconhecedor a um retorno sonoro, para que o usuário ouça uma frase curta sempre que a atividade do cão muda, por exemplo 'Há um carro no seu caminho.'",
        "Uma analogia: um amigo descreve o seu entorno observando o que o seu cão-guia faz. O comportamento do cão é uma pista forte do que acontece ao redor, e o sistema transforma essa pista em uma frase."
      ],
      "algoritmos": [
        "Passo 1, duas CNNs em paralelo: AlexNet e GoogLeNet recebem os mesmos quadros, redimensionados para 256 por 256. As duas redes são complementares, porque cada uma aprende características diferentes da mesma imagem.",
        "Passo 2, treino: cada rede é treinada de duas formas, do zero e por ajuste fino a partir de pesos do ImageNet. As versões com ajuste fino tiveram desempenho melhor, então foram as combinadas.",
        "Passo 3, fusão tardia: as saídas softmax das duas redes são empilhadas e classificadas por uma SVM linear, o que dá uma previsão fundida para cada quadro.",
        "Passo 4, pós-processamento: uma janela deslizante de 10 quadros troca o rótulo de cada quadro pelo rótulo majoritário da janela, o que remove quadros isolados classificados errado. O tamanho da janela foi escolhido testando valores de 10 a 50 quadros."
      ],
      "resultados": [
        "O sistema final, Fused+SVM+PP, alcança 75,6% de acurácia global no conjunto de teste do DogCentric. O melhor modelo antes do suavizado, Fused+SVM, chega a 68,2%. A AlexNet com ajuste fino sozinha chega a 52,6%, então combinar as duas redes e o passo de suavização trazem ganhos claros em cada etapa.",
        "Comparado com o estado da arte publicado no mesmo conjunto de dados, o sistema final fica acima do melhor resultado relatado por Ryoo et al. (PoT+ITF, 74,5%) e acima da referência multicanal de Iwashita et al. (60,5%). A melhora é modesta, mas consistente nos resultados por classe."
      ],
      "limitacoes": [
        "Os resultados por classe são desiguais. Right (0,0% no modelo fundido) e Left (11,4%) quase nunca são reconhecidas, porque são pouco representadas e os modelos com ajuste fino já pontuam baixo nelas. O artigo também observa que a suavização pode apagar segmentos curtos classificados corretamente. A aplicação foi montada e demonstrada com cinco das dez classes, e o artigo não relata um estudo com usuários com deficiência visual."
      ],
      "tabelas": [
        {
          "titulo": "Acurácia global no conjunto de dados DogCentric Activity",
          "colunas": [
            "Abordagem",
            "Acurácia"
          ],
          "linhas": [
            [
              "Multicanal (Iwashita et al.)",
              "0,605"
            ],
            [
              "PoT+ITF (Ryoo et al.)",
              "0,745"
            ],
            [
              "Fused+SVM",
              "0,682"
            ],
            [
              "Fused+SVM+PP (este artigo)",
              "0,756"
            ]
          ]
        }
      ]
    },
    "imagem": "/papers/2017-virtual-guide-dog-an-application-to-support-visually-impaired-people-through-deep-convolutional.png"
  },
  "2018-beating-bomberman-with-artificial-intelligence": {
    "slug": "2018-beating-bomberman-with-artificial-intelligence",
    "temas": [
      "Planning"
    ],
    "links": [
      {
        "tipo": "doi",
        "href": "https://doi.org/10.5753/eniac.2018.4430"
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
    "links": [
      {
        "tipo": "editor",
        "href": "https://ieeexplore.ieee.org/abstract/document/8489297"
      }
    ],
    "en": {
      "contexto": [
        "Action recognition is the task of identifying which action happens in a sequence of frames, such as drinking, petting, or cutting. Traditional methods use handcrafted features designed for each problem. Deep neural networks learn their own features from raw video, but they usually need very large labeled datasets, and with small data they tend to overfit: they memorize the training videos and generalize poorly.",
        "Two kinds of input are used. Still RGB frames show appearance. Optical flow shows the motion of each pixel between frames. Architectures can also treat time explicitly: a recurrent network (LRCN) reads the sequence of features extracted from each frame, and a two-stream network combines a still-image stream with an optical-flow stream."
      ],
      "ideia": [
        "The question is practical: is deep learning worth using when labeled data is scarce? The authors test this on three datasets with different characteristics: KSCGR, recorded by a static camera in a kitchen; DogCentric, recorded by a camera on a dog, with lots of motion and similar classes; and UCF-11, with dynamic scenes and dissimilar classes.",
        "An analogy: a student who has seen only a few examples of each activity. Memorizing them is easy and useless. The question is whether a student who looks at how the scene changes over time can learn to generalize from those few examples."
      ],
      "algoritmos": [
        "Step 1, preprocessing: frames are resized to 256 by 256, and dense optical flow is computed for consecutive frames and encoded as color images, so each video yields two datasets: RGB and optical flow.",
        "Step 2, architectures: Inception-V3 and VGG-16 are used as feature extractors, with the features classified by an SVM or read by an LRCN. Two-stream networks combine the RGB and optical-flow streams by mean or by concatenation.",
        "Step 3, search: a grid search over dropout and learning rate is applied to the main models, which gives 600 trained models in total. The best learning-rate and dropout combinations were high dropout and low learning rate."
      ],
      "resultados": [
        "On KSCGR, the best model is an Inception-V3 with LRCN, which reaches 73.3% accuracy, and the best static model reaches 72.3%. Temporal approaches are better than static ones there, which supports the idea that deep learning does work on this small dataset.",
        "On DogCentric the picture changes. The best model in this paper, a VGG-16 with convolutional LRCN, reaches 60% accuracy, which is below the handcrafted baseline of Iwashita et al. (61%) and clearly below the best published results (Ryoo et al., 75%, and the two-CNN fusion of Monteiro et al., 75%). The authors conclude that deep learning is feasible on small datasets, but the gain depends on the dataset."
      ],
      "limitacoes": [
        "Each dataset is small and the comparisons with the state of the art use the values reported in other papers, under their own protocols. The grid search is simple, and the DogCentric results show that the best models can underperform when the classes are very similar and the camera moves a lot. The authors plan to build regularized architectures that do not have so many parameters."
      ],
      "tabelas": [
        {
          "titulo": "Accuracy on the DogCentric dataset",
          "colunas": [
            "Approach",
            "Accuracy"
          ],
          "linhas": [
            [
              "Multi-channel kernel (Iwashita et al.)",
              "0.61"
            ],
            [
              "PoT+ITF (Ryoo et al.)",
              "0.75"
            ],
            [
              "2 CNNs-SVM-PP (Monteiro et al.)",
              "0.75"
            ],
            [
              "VGG-16 CONV-LRCN (this paper)",
              "0.60"
            ]
          ]
        }
      ]
    },
    "pt": {
      "contexto": [
        "Reconhecimento de ações é a tarefa de identificar qual ação acontece numa sequência de quadros, como beber, fazer carinho ou cortar. Métodos tradicionais usam características construídas à mão para cada problema. Redes neurais profundas aprendem as próprias características a partir do vídeo bruto, mas costumam precisar de conjuntos rotulados muito grandes, e com dados pequenos tendem a sobreajustar: memorizam os vídeos de treino e generalizam mal.",
        "Duas entradas são usadas. Quadros RGB mostram a aparência. O fluxo óptico mostra o movimento de cada pixel entre quadros. As arquiteturas também podem tratar o tempo explicitamente: uma rede recorrente (LRCN) lê a sequência de características extraídas de cada quadro, e uma rede de dois fluxos combina um fluxo de imagens estáticas com um fluxo de fluxo óptico."
      ],
      "ideia": [
        "A pergunta é prática: vale a pena usar aprendizado profundo quando os dados rotulados são escassos? Os autores testam isso em três conjuntos com características diferentes: o KSCGR, gravado por uma câmera fixa numa cozinha; o DogCentric, gravado por uma câmera presa a um cachorro, com muito movimento e classes parecidas; e o UCF-11, com cenas dinâmicas e classes bem diferentes entre si.",
        "Uma analogia: um aluno que viu poucos exemplos de cada atividade. Decorar esses exemplos é fácil e não ajuda. A pergunta é se um aluno que observa como a cena muda ao longo do tempo consegue generalizar a partir desses poucos exemplos."
      ],
      "algoritmos": [
        "Passo 1, pré-processamento: os quadros são redimensionados para 256 por 256, e o fluxo óptico denso é calculado entre quadros consecutivos e codificado como imagens coloridas, de modo que cada vídeo gera dois conjuntos de dados: RGB e fluxo óptico.",
        "Passo 2, arquiteturas: Inception-V3 e VGG-16 são usadas como extratores de características, com as características classificadas por uma SVM ou lidas por uma LRCN. Redes de dois fluxos combinam os fluxos RGB e de fluxo óptico por média ou por concatenação.",
        "Passo 3, busca: uma busca em grade sobre dropout e taxa de aprendizado é aplicada aos principais modelos, o que resulta em 600 modelos treinados no total. As melhores combinações tiveram dropout alto e taxa de aprendizado baixa."
      ],
      "resultados": [
        "No KSCGR, o melhor modelo é uma Inception-V3 com LRCN, que chega a 73,3% de acurácia, e o melhor modelo estático chega a 72,3%. As abordagens temporais superam as estáticas nesse conjunto, o que sustenta a ideia de que o aprendizado profundo funciona nesse conjunto pequeno.",
        "No DogCentric, o quadro muda. O melhor modelo deste artigo, uma VGG-16 com LRCN convolucional, chega a 60% de acurácia, abaixo da referência de características construídas à mão de Iwashita et al. (61%) e claramente abaixo dos melhores resultados publicados (Ryoo et al., 75%, e a fusão de duas CNNs de Monteiro et al., 75%). Os autores concluem que o aprendizado profundo é viável com poucos dados, mas que o ganho depende do conjunto."
      ],
      "limitacoes": [
        "Cada conjunto é pequeno, e as comparações com o estado da arte usam os valores publicados em outros artigos, com protocolos próprios. A busca em grade é simples, e os resultados do DogCentric mostram que os melhores modelos podem ficar abaixo quando as classes são muito parecidas e a câmera se move muito. Os autores planejam construir arquiteturas com regularização que não tenham tantos parâmetros."
      ],
      "tabelas": [
        {
          "titulo": "Acurácia no conjunto DogCentric",
          "colunas": [
            "Abordagem",
            "Acurácia"
          ],
          "linhas": [
            [
              "Kernel multicanal (Iwashita et al.)",
              "0,61"
            ],
            [
              "PoT+ITF (Ryoo et al.)",
              "0,75"
            ],
            [
              "2 CNNs-SVM-PP (Monteiro et al.)",
              "0,75"
            ],
            [
              "VGG-16 CONV-LRCN (este artigo)",
              "0,60"
            ]
          ]
        }
      ]
    },
    "imagem": "/papers/2018-evaluating-the-feasibility-of-deep-learning-for-action-recognition-in-small-datasets.png"
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
      "Natural Language Processing",
      "Deep Learning"
    ],
    "links": [
      {
        "tipo": "doi",
        "href": "https://doi.org/10.1109/IJCNN.2018.8489119"
      }
    ],
    "en": {
      "contexto": [
        "A contract is a set of norms: statements that say what each party must do (an obligation), may do (a permission), or must not do (a prohibition). Two norms conflict when they apply to the same party and action but say different things, for example a permission to delay a payment and an obligation to pay on a fixed date. A contract with conflicting norms can be invalidated in whole or in part.",
        "Sentence embeddings are numerical vectors that represent the meaning of a sentence, so that sentences with similar meanings are close in the vector space. Sent2Vec is one model that builds such vectors. Finding conflicts by hand is slow and error-prone, because real contracts can be very long: the authors' dataset averages about 40,000 characters per contract."
      ],
      "ideia": [
        "The authors propose to detect conflicts by geometry. They learn an offset vector: the average displacement between the embeddings of conflicting pairs of norms. If a new pair of norms has a difference that matches this offset, the pair is likely to be a conflict; if not, it is probably consistent.",
        "An analogy: imagine that every conflict pushes two sentences apart in the same direction, like a fixed arrow between them. If you learn the typical arrow from examples, you can check whether a new pair of sentences lines up with it."
      ],
      "algoritmos": [
        "Step 1, dataset: a set of norm conflicts is built by modifying real norms, changing either the modal verb (for example, turning a prohibition into a permission) or the sentence structure while keeping the meaning. Non-conflicting norm pairs are taken from the norms not used to create conflicts, giving 204,443 pairs.",
        "Step 2, embeddings: each norm is converted into a vector with a pretrained Sent2Vec model, using either the unigram model (600 dimensions) or the bigram model (700 dimensions).",
        "Step 3, offset: with 10-fold cross-validation, the offset is computed from the conflicting pairs in nine folds. A pair is classified as a conflict when its distance to the learned offset is below a threshold. Euclidean distance and cosine distance are both tested, with thresholds varying across their range."
      ],
      "resultados": [
        "The best configuration is the euclidean distance with the unigram model and threshold 2, with a mean accuracy of 0.95 across the folds. The bigram model gives the best result with cosine distance and threshold 0.8.",
        "Compared with the previous approaches on the same dataset, the offset method is clearly better: Aires et al. report 0.78, and Aires and Meneguzzi, who use a deep learning model, report 0.84. The paper also shows that the extreme thresholds (0 and 2 for cosine) perform poorly, so the separation depends on choosing the right threshold."
      ],
      "limitacoes": [
        "The dataset is built by modifying real norms, so the conflicts are synthetic, and the evaluation uses only five real contracts. The results depend on the pretrained Sent2Vec models, which were trained on English Wikipedia. The paper does not address the case where a conflict depends on context beyond the two sentences."
      ],
      "tabelas": [
        {
          "titulo": "Accuracy on the norm conflict dataset",
          "colunas": [
            "Approach",
            "Accuracy"
          ],
          "linhas": [
            [
              "Aires et al. (rule-based)",
              "0.78"
            ],
            [
              "Aires and Meneguzzi (deep learning)",
              "0.84"
            ],
            [
              "Offset conflict (this paper)",
              "0.95"
            ]
          ]
        }
      ]
    },
    "pt": {
      "contexto": [
        "Um contrato é um conjunto de normas: afirmações que dizem o que cada parte deve fazer (uma obrigação), pode fazer (uma permissão) ou não deve fazer (uma proibição). Duas normas entram em conflito quando se aplicam à mesma parte e à mesma ação, mas dizem coisas diferentes, por exemplo uma permissão para atrasar um pagamento e uma obrigação de pagar numa data fixa. Um contrato com normas conflitantes pode ser invalidado, no todo ou em parte.",
        "Embeddings de sentenças são vetores numéricos que representam o significado de uma frase, de modo que frases de sentido parecido ficam próximas no espaço vetorial. O Sent2Vec é um modelo que constrói esses vetores. Encontrar conflitos à mão é lento e sujeito a erros, porque contratos reais podem ser muito longos: o conjunto de dados dos autores tem em média cerca de 40.000 caracteres por contrato."
      ],
      "ideia": [
        "Os autores propõem detectar conflitos pela geometria. Eles aprendem um vetor de deslocamento: a diferença média entre os embeddings de pares de normas em conflito. Se um novo par de normas tem uma diferença parecida com esse deslocamento, o par provavelmente é um conflito; se não, provavelmente é consistente.",
        "Uma analogia: imagine que cada conflito empurra duas frases na mesma direção, como uma seta fixa entre elas. Se você aprende a seta típica a partir de exemplos, pode verificar se um par novo de frases se alinha com ela."
      ],
      "algoritmos": [
        "Passo 1, conjunto de dados: pares de conflito são criados modificando normas reais, trocando o verbo modal (por exemplo, transformando uma proibição em permissão) ou a estrutura da frase, mantendo o significado. Os pares sem conflito vêm das normas que não foram usadas para criar conflitos, totalizando 204.443 pares.",
        "Passo 2, embeddings: cada norma é convertida em um vetor com um modelo Sent2Vec pré-treinado, na versão de unigramas (600 dimensões) ou de bigramas (700 dimensões).",
        "Passo 3, deslocamento: com validação cruzada de 10 partes, o deslocamento é calculado a partir dos pares em conflito de nove partes. Um par é classificado como conflito quando sua distância até o deslocamento aprendido fica abaixo de um limiar. São testadas as distâncias euclidiana e cosseno, variando o limiar ao longo da faixa de cada uma."
      ],
      "resultados": [
        "A melhor configuração é a distância euclidiana com o modelo de unigramas e limiar 2, com acurácia média de 0,95 nas partes. O modelo de bigramas tem o melhor resultado com a distância cosseno e limiar 0,8.",
        "Comparada às abordagens anteriores no mesmo conjunto de dados, a proposta é claramente melhor: Aires et al. reportam 0,78, e Aires e Meneguzzi, que usam um modelo de aprendizado profundo, reportam 0,84. O artigo também mostra que os limiares extremos (0 e 2, no caso do cosseno) têm desempenho ruim, então a separação depende de escolher bem o limiar."
      ],
      "limitacoes": [
        "O conjunto de dados é construído modificando normas reais, então os conflitos são sintéticos, e a avaliação usa apenas cinco contratos reais. Os resultados dependem dos modelos Sent2Vec pré-treinados, que foram treinados em inglês, na Wikipédia. O artigo não trata os casos em que o conflito depende de um contexto além das duas frases."
      ],
      "tabelas": [
        {
          "titulo": "Acurácia no conjunto de dados de conflitos de normas",
          "colunas": [
            "Abordagem",
            "Acurácia"
          ],
          "linhas": [
            [
              "Aires et al. (baseada em regras)",
              "0,78"
            ],
            [
              "Aires e Meneguzzi (aprendizado profundo)",
              "0,84"
            ],
            [
              "Deslocamento de conflito (este artigo)",
              "0,95"
            ]
          ]
        }
      ]
    },
    "imagem": "/papers/2018-norm-conflict-identification-using-vector-space-offsets.png"
  },
  "2018-using-scene-context-to-improve-action-recognition": {
    "slug": "2018-using-scene-context-to-improve-action-recognition",
    "temas": [
      "Action Recognition",
      "Convolutional Neural Networks"
    ],
    "links": [
      {
        "tipo": "doi",
        "href": "https://doi.org/10.1007/978-3-030-13469-3_110"
      }
    ],
    "en": {
      "contexto": [
        "Action recognition asks which action happens in a video: a person waving, a dog drinking, a ball being juggled. Most systems look only at motion, so the same movement in different places is treated as the same action. Convolutional neural networks (CNNs) learn visual features from images, and two-stream networks use two of them: one on still frames for appearance, and one on optical flow for motion.",
        "The scene is the background where an action happens: a field, a kitchen, a street. Scene recognition is a well-studied problem on its own, and it gives information that motion alone cannot provide."
      ],
      "ideia": [
        "The authors add a third source of information. Their two-stream architecture contains an action stream that focuses on the movements, and a scene stream that focuses on the background. The two streams are fused late, and a classifier decides the action.",
        "An analogy: two baseball players and two tennis players can both swing a bat or a racket. The movement alone is ambiguous, but if you also see the field, you know which sport it is. The scene breaks the tie."
      ],
      "algoritmos": [
        "Step 1, action stream: a CNN is trained on the video frames to recognize the action, starting from ImageNet weights, with mini-batches of 128 images and a grid search over dropout.",
        "Step 2, scene stream: a pretrained scene-recognition CNN is used as a fixed feature extractor. It is not trained further, so it only describes the background of each frame.",
        "Step 3, late fusion: the features of both streams are concatenated and passed to a classifier that predicts the action in each frame."
      ],
      "resultados": [
        "On UCF-11, the scene stream helps: the fused model reaches 0.69 accuracy against about 0.65 for the action stream alone. The best classes are Diving and Horse riding, with 85% and 81% accuracy, and the lowest is Soccer juggling, which is performed in many different places, so the background is not informative for it.",
        "On DogCentric, the approach does not help. Its accuracy is 0.53, while the standard two-stream network reaches 0.54 and the best published method (PoT+ITF, Ryoo et al.) reaches 0.75. The authors explain it by camera motion on the dog and by the fact that dog actions are not tied to a fixed background. The exception is Car, where the dog waits outside, which reaches 90% precision."
      ],
      "limitacoes": [
        "The results are modest compared with the state of the art on both datasets, and the authors say their goal was to test whether scene context helps, not to beat the best methods. The scene stream uses a fixed extractor that was not trained for these videos. Camera motion strongly affects the scene recognition, as the DogCentric results show."
      ],
      "tabelas": [
        {
          "titulo": "Accuracy on UCF-11 and DogCentric",
          "colunas": [
            "Dataset",
            "Approach",
            "Accuracy"
          ],
          "linhas": [
            [
              "UCF-11",
              "Two-stream (Simonyan and Zisserman)",
              "0.71"
            ],
            [
              "UCF-11",
              "DTAM (Wang et al.)",
              "0.71"
            ],
            [
              "UCF-11",
              "Visual-DTAM (Wang et al.)",
              "0.75"
            ],
            [
              "UCF-11",
              "Action + scene streams (this paper)",
              "0.69"
            ],
            [
              "DogCentric",
              "Two-stream (Simonyan and Zisserman)",
              "0.54"
            ],
            [
              "DogCentric",
              "PoT+ITF (Ryoo et al.)",
              "0.75"
            ],
            [
              "DogCentric",
              "Action + scene streams (this paper)",
              "0.53"
            ]
          ]
        }
      ]
    },
    "pt": {
      "contexto": [
        "Reconhecimento de ações pergunta qual ação acontece num vídeo: uma pessoa acenando, um cachorro bebendo, uma bola sendo malabarizada. A maioria dos sistemas olha só o movimento, então o mesmo gesto em lugares diferentes é tratado como a mesma ação. Redes neurais convolucionais (CNNs) aprendem características visuais a partir de imagens, e as redes de dois fluxos usam duas delas: uma sobre quadros parados, para a aparência, e outra sobre o fluxo óptico, para o movimento.",
        "A cena é o fundo onde a ação acontece: um campo, uma cozinha, uma rua. O reconhecimento de cenas é um problema bem estudado por si só, e traz uma informação que o movimento sozinho não dá."
      ],
      "ideia": [
        "Os autores acrescentam uma terceira fonte de informação. A arquitetura de dois fluxos contém um fluxo de ação, que se concentra nos movimentos, e um fluxo de cena, que se concentra no fundo. Os dois fluxos são fundidos no fim, e um classificador decide a ação.",
        "Uma analogia: dois jogadores de beisebol e dois de tênis podem balançar um bastão ou uma raquete. O movimento sozinho é ambíguo, mas, se você vê o campo, sabe qual é o esporte. A cena desempata."
      ],
      "algoritmos": [
        "Passo 1, fluxo de ação: uma CNN é treinada nos quadros do vídeo para reconhecer a ação, partindo de pesos do ImageNet, com lotes de 128 imagens e busca em grade sobre o dropout.",
        "Passo 2, fluxo de cena: uma CNN pré-treinada em reconhecimento de cenas é usada como extrator fixo de características. Ela não é treinada de novo, então só descreve o fundo de cada quadro.",
        "Passo 3, fusão tardia: as características dos dois fluxos são concatenadas e passadas a um classificador que prevê a ação em cada quadro."
      ],
      "resultados": [
        "No UCF-11, o fluxo de cena ajuda: o modelo fundido chega a 0,69 de acurácia, contra cerca de 0,65 do fluxo de ação sozinho. As melhores classes são Diving e Horse riding, com 85% e 81% de acurácia, e a pior é Soccer juggling, que é feita em lugares muito diferentes, então o fundo não ajuda nela.",
        "No DogCentric, a abordagem não ajuda. A acurácia é 0,53, enquanto a rede de dois fluxos padrão chega a 0,54 e o melhor método publicado (PoT+ITF, Ryoo et al.) chega a 0,75. Os autores explicam isso pelo movimento da câmera no cachorro e pelo fato de as ações do cachorro não estarem ligadas a um fundo fixo. A exceção é Car, em que o cachorro espera fora de casa, com precisão de 90%."
      ],
      "limitacoes": [
        "Os resultados são modestos em comparação com o estado da arte nos dois conjuntos, e os autores dizem que o objetivo era testar se o contexto de cena ajuda, não superar os melhores métodos. O fluxo de cena usa um extrator fixo que não foi treinado para esses vídeos. O movimento da câmera afeta muito o reconhecimento de cena, como mostram os resultados do DogCentric."
      ],
      "tabelas": [
        {
          "titulo": "Acurácia no UCF-11 e no DogCentric",
          "colunas": [
            "Conjunto",
            "Abordagem",
            "Acurácia"
          ],
          "linhas": [
            [
              "UCF-11",
              "Dois fluxos (Simonyan e Zisserman)",
              "0,71"
            ],
            [
              "UCF-11",
              "DTAM (Wang et al.)",
              "0,71"
            ],
            [
              "UCF-11",
              "Visual-DTAM (Wang et al.)",
              "0,75"
            ],
            [
              "UCF-11",
              "Fluxos de ação + cena (este artigo)",
              "0,69"
            ],
            [
              "DogCentric",
              "Dois fluxos (Simonyan e Zisserman)",
              "0,54"
            ],
            [
              "DogCentric",
              "PoT+ITF (Ryoo et al.)",
              "0,75"
            ],
            [
              "DogCentric",
              "Fluxos de ação + cena (este artigo)",
              "0,53"
            ]
          ]
        }
      ]
    },
    "imagem": "/papers/2018-using-scene-context-to-improve-action-recognition.png"
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
      "Planning",
      "Deep Learning"
    ],
    "links": [
      {
        "tipo": "doi",
        "href": "https://link.springer.com/chapter/10.1007/978-3-030-60884-2_24"
      }
    ],
    "en": {
      "contexto": [
        "Goal recognition asks a simple question: given what someone is doing, what are they trying to achieve? It matters for ambient assisted living, where a system should notice that a person is making an omelette and offer help at the right moment. Most goal recognition work reasons over actions, such as 'cut', 'stir', or 'pour'. Those actions are hard to see reliably in video.",
        "A scene graph is a simple way to describe a picture: it lists objects and the relations between them, as triplets like (hand, holding, egg) or (egg, on, table). A STRIPS planning domain is a formal description of what can happen in an environment: each action has preconditions and effects over facts. Goal recognition then compares the observed facts with the possible goals, which are the states the person might be trying to reach."
      ],
      "ideia": [
        "The authors propose to recognize goals from objects and their relations instead of actions. Each video frame becomes a set of relations between objects, and the sequence of frames becomes a sequence of observations about the state of the kitchen. The goal is the set of relations present in the last frame of each recipe.",
        "An analogy: instead of guessing what a cook is doing by watching their hands, you look at the counter. If the bowl has cracked eggs on it and the pan is on the stove, the dish being prepared is much easier to guess than if you only saw the movements."
      ],
      "algoritmos": [
        "Step 1, object detection: a Faster R-CNN with a VGG-16 backbone finds bounding boxes for the objects in each frame. Step 2, relationship detection: VRD-DSR predicts the predicate between each pair of detected objects, producing triplets that form a scene graph.",
        "Step 3, domain generation. The paper gives two ways to build the STRIPS domain. In minimal interference, a domain engineer defines the verbs and predicates used to describe relations, and the domain is generated from the relations annotated in the training set. In no interference, the domain is generated entirely from the data.",
        "Step 4, goal recognition problem. The initial state is the intersection of the relations present in the first frame of all training videos. Candidate goals are the intersection of the relations in the last frame of each recipe. For each test frame, the observed relations become the observations. A landmark-based recognizer, the state of the art for goal recognition, then outputs the most probable goal."
      ],
      "resultados": [
        "The experiments use a kitchen dataset annotated by the authors, with five egg recipes: boiled egg, ham egg, kinshi egg, omelette, and scrambled egg. Table 1 reports accuracy when the recognizer sees only a fraction of the observations, from 10% to 100%, using ground-truth relations.",
        "With full observability, boiled egg is recognized perfectly (accuracy 1.00), while kinshi egg is almost never recognized (0.12). Ham egg, omelette and scrambled egg fall in between. Accuracy does not improve much as observability grows, because the early frames of similar recipes look alike.",
        "When the relations come from the VRD-DSR detector instead of the annotations, the picture is similar: boiled egg remains at 1.00, and most other recipes drop slightly, which shows the detector's errors propagate into goal recognition."
      ],
      "limitacoes": [
        "The dataset covers a single kitchen and a small set of egg recipes, so the results may not transfer to other scenes or foods. The accuracy on some recipes is low, and the paper reports it openly. The authors plan to test other object and relationship detectors, and other goal recognizers, as future work."
      ],
      "tabelas": [
        {
          "titulo": "Goal recognition accuracy with full observability (100%)",
          "colunas": [
            "Recipe",
            "Ground-truth relations",
            "VRD-DSR detector"
          ],
          "linhas": [
            [
              "Boiled egg",
              "1.00",
              "1.00"
            ],
            [
              "Ham egg",
              "0.76",
              "0.65"
            ],
            [
              "Kinshi egg",
              "0.12",
              "0.11"
            ],
            [
              "Omelette",
              "0.48",
              "0.56"
            ],
            [
              "Scrambled egg",
              "0.59",
              "0.44"
            ]
          ]
        }
      ]
    },
    "pt": {
      "contexto": [
        "Reconhecimento de objetivos responde a uma pergunta simples: observando o que alguém faz, qual é o objetivo dessa pessoa? Isso importa para a vida assistida por ambientes, em que um sistema deveria perceber que a pessoa está fazendo uma omelete e oferecer ajuda no momento certo. A maior parte dos trabalhos raciocina sobre ações, como cortar, mexer ou despejar. Essas ações são difíceis de ver de forma confiável em vídeo.",
        "Um grafo de cena é uma forma simples de descrever uma imagem: lista os objetos e as relações entre eles, em tríades como (mão, segurando, ovo) ou (ovo, sobre, mesa). Um domínio de planejamento STRIPS é uma descrição formal do que pode acontecer no ambiente: cada ação tem pré-condições e efeitos sobre fatos. O reconhecimento de objetivos compara os fatos observados com os objetivos possíveis, que são os estados que a pessoa pode estar tentando alcançar."
      ],
      "ideia": [
        "Os autores propõem reconhecer objetivos a partir de objetos e suas relações, em vez de ações. Cada quadro do vídeo vira um conjunto de relações entre objetos, e a sequência de quadros vira uma sequência de observações sobre o estado da cozinha. O objetivo é o conjunto de relações presente no último quadro de cada receita.",
        "Uma analogia: em vez de adivinhar o que um cozinheiro faz observando as mãos, você olha a bancada. Se a tigela tem ovos quebrados e a frigideira está no fogão, o prato em preparo fica bem mais fácil de adivinhar do que se você só visse os movimentos."
      ],
      "algoritmos": [
        "Passo 1, detecção de objetos: uma Faster R-CNN com base VGG-16 encontra caixas delimitadoras dos objetos em cada quadro. Passo 2, detecção de relações: o VRD-DSR prevê o predicado entre cada par de objetos detectados, produzindo tríades que formam um grafo de cena.",
        "Passo 3, geração do domínio. O artigo apresenta duas formas de montar o domínio STRIPS. Na interferência mínima, um engenheiro de domínio define os verbos e predicados usados para descrever as relações, e o domínio é gerado a partir das relações anotadas no conjunto de treino. Na ausência de interferência, o domínio é gerado inteiramente a partir dos dados.",
        "Passo 4, problema de reconhecimento de objetivos. O estado inicial é a interseção das relações presentes no primeiro quadro de todos os vídeos de treino. Os objetivos candidatos são a interseção das relações do último quadro de cada receita. Para cada quadro de teste, as relações observadas viram observações. Um reconhecedor baseado em landmarks, o estado da arte em reconhecimento de objetivos, então devolve o objetivo mais provável."
      ],
      "resultados": [
        "Os experimentos usam um conjunto de dados de cozinha anotado pelos próprios autores, com cinco receitas de ovo: ovo cozido, ovo com presunto, ovo kinshi, omelete e ovo mexido. A Tabela 1 reporta a acurácia quando o reconhecedor vê apenas uma fração das observações, de 10% a 100%, usando relações anotadas.",
        "Com observabilidade total, o ovo cozido é reconhecido perfeitamente (acurácia 1,00), enquanto o ovo kinshi quase nunca é reconhecido (0,12). Ovo com presunto, omelete e ovo mexido ficam no meio. A acurácia não melhora muito conforme a observabilidade cresce, porque os primeiros quadros de receitas parecidas são semelhantes.",
        "Quando as relações vêm do detector VRD-DSR em vez das anotações, o quadro é parecido: o ovo cozido continua em 1,00, e a maioria das outras receitas cai um pouco, o que mostra que os erros do detector se propagam para o reconhecimento de objetivos."
      ],
      "limitacoes": [
        "O conjunto de dados cobre uma única cozinha e um pequeno conjunto de receitas de ovo, então os resultados podem não se transferir para outras cenas ou alimentos. A acurácia de algumas receitas é baixa, e o artigo reporta isso abertamente. Como trabalho futuro, os autores planejam testar outros detectores de objetos e relações, e outros reconhecedores de objetivos."
      ],
      "tabelas": [
        {
          "titulo": "Acurácia do reconhecimento de objetivos com observabilidade total (100%)",
          "colunas": [
            "Receita",
            "Relações anotadas",
            "Detector VRD-DSR"
          ],
          "linhas": [
            [
              "Ovo cozido",
              "1,00",
              "1,00"
            ],
            [
              "Ovo com presunto",
              "0,76",
              "0,65"
            ],
            [
              "Ovo kinshi",
              "0,12",
              "0,11"
            ],
            [
              "Omelete",
              "0,48",
              "0,56"
            ],
            [
              "Ovo mexido",
              "0,59",
              "0,44"
            ]
          ]
        }
      ]
    },
    "imagem": "/papers/2020-object-based-goal-recognition-using-real-world-data.png"
  },
  "2022-how-resilient-are-imitation-learning-methods-to-sub-optimal-experts": {
    "slug": "2022-how-resilient-are-imitation-learning-methods-to-sub-optimal-experts",
    "temas": [
      "Imitation Learning",
      "Self-Supervised Learning",
      "Learning from Observations"
    ],
    "links": [
      {
        "tipo": "doi",
        "href": "https://link.springer.com/chapter/10.1007/978-3-031-21689-3_32"
      }
    ],
    "en": {
      "contexto": [
        "Imitation learning teaches an agent to behave like an expert from demonstrations. The usual assumption is that the expert is good. In practice, demonstrations come from people or from policies that make mistakes, so the data is often sub-optimal. Nobody had systematically measured how much each imitation method degrades when the expert gets worse.",
        "Learning from observation means the demonstrations contain only states, with no actions. Some methods first learn to classify the transition between two states, which is the action that produced it, and then imitate the expert. Others, such as behavioral cloning (BC), directly copy the actions. GAIL uses a discriminator in an adversarial game to match the expert's distribution."
      ],
      "ideia": [
        "The authors ask a practical question: if the teacher is not perfect, which imitation methods still work? They fix four algorithms and create five experts of decreasing quality for each environment, and then measure how each algorithm behaves with each expert.",
        "An analogy: a student learns to cook by watching a chef. If the chef is excellent, the student learns well. If the chef makes small mistakes, does the student still cook a good dish? Some students copy every move and inherit the mistakes, while others learn the underlying process and are less affected."
      ],
      "algoritmos": [
        "Step 1, experts: agents trained with DQN and PPO are used as experts for four environments (CartPole, Acrobot, MountainCar, LunarLander). Each expert is kept only if it reaches a reward threshold, which defines five levels of quality, from Expert1 (best) to Expert5 (worst).",
        "Step 2, algorithms: four imitation methods are compared. BC and GAIL are the classical baselines. ILPO and IUPE are self-supervised: they first learn to label the action between two states, and then imitate the expert with those labels.",
        "Step 3, evaluation: each algorithm is run 10 times for 100 epochs with a small two-layer perceptron. Two metrics are reported: performance (P), which is the fraction of episodes that solve the task, and average episodic reward (AER)."
      ],
      "resultados": [
        "With the optimal expert, all methods solve CartPole (performance 1), and the self-supervised methods are the most stable. On MountainCar, BC and GAIL fail completely (performance 0), while ILPO reaches a performance of 0.15 and IUPE 0.38 with an AER of -166.97.",
        "Across the experts, the paper concludes that self-supervised methods are relatively resilient to sub-optimal experts, while the supervised method (BC) is not. Some sub-optimal experts even help: on LunarLander, less-optimal experts seem to act as a regularizer, and the self-supervised methods perform better with them."
      ],
      "limitacoes": [
        "The study uses four small control environments and small multilayer perceptrons, so the conclusions may not hold for images or larger models. The degrees of optimality are defined by a reward threshold, which is a convenient but simple definition of expert quality. The authors plan to test partial observations as future work."
      ],
      "tabelas": [
        {
          "titulo": "Average episodic reward (AER) with the optimal expert (Expert1)",
          "colunas": [
            "Method",
            "CartPole",
            "Acrobot",
            "MountainCar",
            "LunarLander"
          ],
          "linhas": [
            [
              "Expert1",
              "500",
              "-82",
              "-99",
              "228"
            ],
            [
              "BC",
              "500",
              "-93.6",
              "-200",
              "-80.9"
            ],
            [
              "GAIL",
              "500",
              "-286.2",
              "-200",
              "-92.3"
            ],
            [
              "ILPO",
              "500",
              "-75.7",
              "-184.5",
              "-98.5"
            ],
            [
              "IUPE",
              "500",
              "-87.3",
              "-167.0",
              "-81.3"
            ]
          ]
        }
      ]
    },
    "pt": {
      "contexto": [
        "Aprendizado por imitação ensina um agente a agir como um especialista a partir de demonstrações. A suposição habitual é que o especialista é bom. Na prática, as demonstrações vêm de pessoas ou de políticas que cometem erros, então os dados costumam ser subótimos. Ninguém tinha medido de forma sistemática quanto cada método de imitação piora quando o especialista piora.",
        "Aprendizado por observação significa que as demonstrações têm só estados, sem as ações. Alguns métodos aprendem primeiro a classificar a transição entre dois estados, ou seja, a ação que a produziu, e só depois imitam o especialista. Outros, como a clonagem de comportamento (BC), copiam diretamente as ações. O GAIL usa um discriminador num jogo adversarial para casar a distribuição do especialista."
      ],
      "ideia": [
        "Os autores fazem uma pergunta prática: se o professor não é perfeito, quais métodos de imitação ainda funcionam? Eles fixam quatro algoritmos e criam cinco especialistas de qualidade decrescente para cada ambiente, e medem como cada algoritmo se comporta com cada um.",
        "Uma analogia: um aluno aprende a cozinhar observando um chef. Se o chef é excelente, o aluno aprende bem. Se o chef comete pequenos erros, o aluno ainda faz um bom prato? Alguns alunos copiam cada movimento e herdam os erros, enquanto outros aprendem o processo por trás e são menos afetados."
      ],
      "algoritmos": [
        "Passo 1, especialistas: agentes treinados com DQN e PPO servem de especialistas em quatro ambientes (CartPole, Acrobot, MountainCar e LunarLander). Cada especialista só é aceito se atingir um limiar de recompensa, o que define cinco níveis de qualidade, de Expert1 (melhor) a Expert5 (pior).",
        "Passo 2, algoritmos: quatro métodos de imitação são comparados. BC e GAIL são as referências clássicas. ILPO e IUPE são autossupervisionados: primeiro aprendem a rotular a ação entre dois estados e depois imitam o especialista com esses rótulos.",
        "Passo 3, avaliação: cada algoritmo roda 10 vezes por 100 épocas, com um perceptron de duas camadas. São reportadas duas métricas: o desempenho (P), que é a fração de episódios em que a tarefa é resolvida, e a recompensa média episódica (AER)."
      ],
      "resultados": [
        "Com o especialista ótimo, todos os métodos resolvem o CartPole (desempenho 1), e os métodos autossupervisionados são os mais estáveis. No MountainCar, BC e GAIL falham por completo (desempenho 0), enquanto o ILPO chega a 0,15 e o IUPE a 0,38, com AER de −166,97.",
        "Considerando todos os especialistas, o artigo conclui que os métodos autossupervisionados são relativamente resistentes a especialistas subótimos, enquanto o método supervisionado (BC) não é. Alguns especialistas subótimos chegam a ajudar: no LunarLander, os menos ótimos parecem agir como regularizadores, e os métodos autossupervisionados se saem melhor com eles."
      ],
      "limitacoes": [
        "O estudo usa quatro ambientes de controle pequenos e perceptrons multicamadas pequenos, então as conclusões podem não valer para imagens ou modelos maiores. Os níveis de otimalidade são definidos por um limiar de recompensa, uma definição conveniente, mas simples, de qualidade do especialista. Os autores planejam testar observações parciais como trabalho futuro."
      ],
      "tabelas": [
        {
          "titulo": "Recompensa média episódica (AER) com o especialista ótimo (Expert1)",
          "colunas": [
            "Método",
            "CartPole",
            "Acrobot",
            "MountainCar",
            "LunarLander"
          ],
          "linhas": [
            [
              "Expert1",
              "500",
              "-82",
              "-99",
              "228"
            ],
            [
              "BC",
              "500",
              "-93,6",
              "-200",
              "-80,9"
            ],
            [
              "GAIL",
              "500",
              "-286,2",
              "-200",
              "-92,3"
            ],
            [
              "ILPO",
              "500",
              "-75,7",
              "-184,5",
              "-98,5"
            ],
            [
              "IUPE",
              "500",
              "-87,3",
              "-167,0",
              "-81,3"
            ]
          ]
        }
      ]
    },
    "imagem": "/papers/2022-how-resilient-are-imitation-learning-methods-to-sub-optimal-experts.png"
  },
  "datasynk-lxai": {
    "slug": "datasynk-lxai",
    "temas": [
      "Tabular FMs",
      "Healthcare"
    ],
    "links": [],
    "en": {
      "contexto": [
        "Electronic health records (EHRs) are scarce for many clinical AI projects, especially in public hospitals in the Global South. Synthetic data can fill the gap, but only if the generated records are clinically plausible, not only statistically similar to the real ones. A table can match every column's distribution and still contain impossible combinations of diagnoses.",
        "Tabular foundation models, such as TabPFN, are pre-trained on synthetic tables, so the quality of those tables matters. Bayesian networks are a small-data option because they encode a structure, but standard structure learning finds statistical associations, which need not be medically meaningful."
      ],
      "ideia": [
        "The paper argues that statistical fidelity and clinical validity measure different things, and that a good synthetic dataset needs both. DataSynK combines a prior knowledge graph built from medical ontologies, constrained causal discovery, Bayesian-network sampling, and symbolic clinical rules. The generated records must follow clinically admissible relations.",
        "An analogy: a recipe generator that learns from real recipes but only proposes combinations where each ingredient is connected to the others through a plausible cooking step. A dish can look like the real ones on paper and still be impossible to cook."
      ],
      "algoritmos": [
        "Step 1, causal tiers: clinical features are sorted into causal tiers (Table 1 of the paper), which restricts which variables can influence which. Edges that break the tiers are rejected.",
        "Step 2, causal discovery and sampling: constrained causal discovery learns the dependencies, a Bayesian network is fitted to them, and symbolic rules in Answer Set Programming reject records that violate clinical constraints.",
        "Step 3, ONTO.VAL: a new metric checks whether every pair of active features in a record is connected by at least one clinically admissible path in the knowledge graph. The score is the fraction of valid records, and it works for any generator."
      ],
      "resultados": [
        "In the benchmark on Brazilian public-hospital cohorts for acute myocardial infarction and stroke, DataSynK reaches the highest downstream F1 among the methods that do not collapse (+0.093, against +0.069 for TVAE and +0.040 for SDV), so the classifiers trained on its data are more balanced. Its ONTO.VAL is 0.089, the highest in the table, while the statistical fidelity metrics remain competitive.",
        "The paper's central claim is that statistical fidelity and structural validity are complementary. Several well-known generators match the marginal distributions well but score zero on ONTO.VAL, which is exactly the gap that the paper is trying to expose."
      ],
      "limitacoes": [
        "The evaluation uses two clinical subgroups from one country, and the sample sizes are small. The authors discuss sensitivity to the DAG sparsity threshold and report a single-cohort analysis. Privacy metrics show a trade-off that needs to be examined before clinical use. Clinical validation by specialists is not part of this study."
      ],
      "tabelas": [
        {
          "titulo": "Benchmark on the Brazilian EHR cohorts (selected methods)",
          "colunas": [
            "Method",
            "TVD ↓",
            "|AUC| ↓",
            "F1 ↑",
            "Onto.Val ↑"
          ],
          "linhas": [
            [
              "CTGAN",
              "0.009",
              "0.017",
              "+0.013",
              "0.062"
            ],
            [
              "TVAE",
              "0.023",
              "0.014",
              "+0.069",
              "0.038"
            ],
            [
              "SDV",
              "0.015",
              "0.040",
              "+0.040",
              "0.052"
            ],
            [
              "DataSynK (this paper)",
              "0.018",
              "0.091",
              "+0.093",
              "0.089"
            ]
          ]
        }
      ]
    },
    "pt": {
      "contexto": [
        "Prontuários eletrônicos (EHR) são escassos em muitos projetos de IA clínica, especialmente em hospitais públicos do Sul Global. Dados sintéticos podem preencher essa lacuna, mas só se os registros gerados forem clinicamente plausíveis, e não apenas parecidos estatisticamente com os reais. Uma tabela pode reproduzir a distribuição de cada coluna e ainda conter combinações impossíveis de diagnósticos.",
        "Modelos fundacionais tabulares, como o TabPFN, são pré-treinados com tabelas sintéticas, então a qualidade dessas tabelas importa. Redes bayesianas são uma opção para poucos dados, porque codificam uma estrutura, mas o aprendizado de estrutura padrão encontra associações estatísticas, que não necessariamente têm sentido médico."
      ],
      "ideia": [
        "O artigo defende que fidelidade estatística e validade clínica medem coisas diferentes, e que um bom conjunto de dados sintéticos precisa das duas. O DataSynK combina um grafo de conhecimento prévio construído a partir de ontologias médicas, descoberta causal restrita, amostragem por rede bayesiana e regras simbólicas clínicas. Os registros gerados precisam seguir relações clinicamente admissíveis.",
        "Uma analogia: um gerador de receitas que aprende com receitas reais, mas só propõe combinações em que cada ingrediente se liga aos outros por um passo de preparo plausível. Um prato pode parecer com os reais no papel e, mesmo assim, ser impossível de cozinhar."
      ],
      "algoritmos": [
        "Passo 1, níveis causais: as variáveis clínicas são organizadas em níveis causais (Tabela 1 do artigo), o que restringe quais variáveis podem influenciar quais. Arestas que quebram os níveis são rejeitadas.",
        "Passo 2, descoberta causal e amostragem: a descoberta causal restrita aprende as dependências, uma rede bayesiana é ajustada a elas, e regras simbólicas em Answer Set Programming rejeitam registros que violam restrições clínicas.",
        "Passo 3, ONTO.VAL: uma nova métrica verifica se cada par de variáveis ativas de um registro está ligado por pelo menos um caminho clinicamente admissível no grafo de conhecimento. O escore é a fração de registros válidos, e ela funciona para qualquer gerador."
      ],
      "resultados": [
        "No benchmark com coortes de hospitais públicos brasileiros, para infarto agudo do miocárdio e AVC, o DataSynK alcança o maior F1 entre os métodos que não colapsam (+0,093, contra +0,069 do TVAE e +0,040 do SDV), então os classificadores treinados com seus dados ficam mais equilibrados. Seu ONTO.VAL é 0,089, o maior da tabela, enquanto as métricas de fidelidade estatística continuam competitivas.",
        "A tese central do artigo é que fidelidade estatística e validade estrutural são complementares. Vários geradores conhecidos reproduzem bem as distribuições marginais, mas têm ONTO.VAL zero, e é exatamente essa lacuna que o artigo expõe."
      ],
      "limitacoes": [
        "A avaliação usa dois subgrupos clínicos de um único país, com amostras pequenas. Os autores discutem a sensibilidade ao limiar de esparsidade do grafo causal e apresentam uma análise de coorte única. As métricas de privacidade mostram um compromisso que precisa ser examinado antes de qualquer uso clínico. A validação clínica por especialistas não faz parte deste estudo."
      ],
      "tabelas": [
        {
          "titulo": "Benchmark nas coortes de prontuários brasileiros (métodos selecionados)",
          "colunas": [
            "Método",
            "TVD ↓",
            "|AUC| ↓",
            "F1 ↑",
            "Onto.Val ↑"
          ],
          "linhas": [
            [
              "CTGAN",
              "0,009",
              "0,017",
              "+0,013",
              "0,062"
            ],
            [
              "TVAE",
              "0,023",
              "0,014",
              "+0,069",
              "0,038"
            ],
            [
              "SDV",
              "0,015",
              "0,040",
              "+0,040",
              "0,052"
            ],
            [
              "DataSynK (este artigo)",
              "0,018",
              "0,091",
              "+0,093",
              "0,089"
            ]
          ]
        }
      ]
    },
    "imagem": "/papers/datasynk-lxai.png"
  },
  "snokind-lxai": {
    "slug": "snokind-lxai",
    "temas": [
      "LLMs",
      "Healthcare"
    ],
    "links": [],
    "en": {
      "contexto": [
        "Clinical notes are written in free text, but hospital systems need standard codes. SNOMED CT is the largest standard terminology for clinical concepts, and each concept has a numeric identifier (CID). Mapping a free-text mention like 'pericardial effusion' to its CID enables interoperability, reporting, and research. For Portuguese there was no automated system for this mapping, and most existing approaches are either rule-based (English-only) or rely on large language models, which can produce invalid codes and behave differently from run to run.",
        "A hybrid cascade is a pipeline in which cheap, deterministic steps run first, and expensive or stochastic steps run only on the cases the first steps could not solve."
      ],
      "ideia": [
        "The paper proposes SNOKind, a cost-aware pipeline for SNOMED CT concept assignment in Brazilian Portuguese. Deterministic heuristic rules resolve most mentions cheaply and transparently. Embedding similarity handles many of the rest, and a language model reasons only over the ambiguous cases that remain.",
        "An analogy: a triage desk in a hospital. Most patients are routed by a checklist, a few by a nurse's judgment, and only the hardest cases reach the specialist. The order matters, because it decides how often the expensive specialist is needed."
      ],
      "algoritmos": [
        "Step 1, entity extraction: a language model extracts the clinical entities from the EHR text, which is a named-entity recognition step.",
        "Step 2, resolution cascade: each entity goes through the stages in order. Heuristic rules map the easy cases. Embedding similarity, computed with a text-embedding model against SNOMED CT terms, resolves the next group. An LLM handles the remaining ambiguous entities.",
        "Step 3, ordering analysis: three orderings are compared: rules then embeddings then LLM, embeddings then rules then LLM, and LLM first. The paper measures coverage, LLM workload, and how often the stochastic model is exposed."
      ],
      "resultados": [
        "On 100 ICU records from a Brazilian public hospital, the LLM-only baseline resolves 57% of the mentions to valid concept IDs and leaves 43% unresolved. The SNOKind pipeline reaches 92% resolution.",
        "All three orderings reach similar coverage (92%, 91% and 92%), so the ordering does not change accuracy much. It changes cost and reliability: when rules or embeddings go first, the LLM processes as little as 14% of the entities, and fewer entities are exposed to the stochastic model."
      ],
      "limitacoes": [
        "The evaluation uses 100 ICU records from one hospital, and the paper does not report precision against expert-annotated gold labels. The results depend on GPT-5 and the embedding model used, although the authors state the design is model-agnostic. The approach needs validation on other hospitals and clinical specialties."
      ],
      "tabelas": [
        {
          "titulo": "Resolution of clinical mentions to SNOMED CT concepts",
          "colunas": [
            "Method",
            "Resolved to valid CID (%)",
            "Unresolved (%)"
          ],
          "linhas": [
            [
              "LLM only",
              "57",
              "43"
            ],
            [
              "SNOKind (rules → embeddings → LLM)",
              "92",
              "8"
            ]
          ]
        }
      ]
    },
    "pt": {
      "contexto": [
        "Notas clínicas são escritas em texto livre, mas os sistemas hospitalares precisam de códigos padronizados. O SNOMED CT é a maior terminologia padronizada de conceitos clínicos, e cada conceito tem um identificador numérico (CID). Mapear uma menção em texto livre, como 'derrame pericárdico', para o seu CID permite interoperabilidade, relatórios e pesquisa. Para o português não havia um sistema automatizado para esse mapeamento, e as abordagens existentes são baseadas em regras (só para inglês) ou dependem de modelos de linguagem grandes, que podem gerar códigos inválidos e se comportar de forma diferente a cada execução.",
        "Uma cascata híbrida é um pipeline em que etapas baratas e determinísticas rodam primeiro, e etapas caras ou estocásticas rodam só nos casos que as primeiras não resolveram."
      ],
      "ideia": [
        "O artigo propõe o SNOKind, um pipeline sensível ao custo para atribuição de conceitos SNOMED CT em português brasileiro. Regras heurísticas determinísticas resolvem a maior parte das menções de forma barata e transparente. A similaridade de embeddings cuida de muitas das restantes, e um modelo de linguagem raciocina apenas sobre os casos ambíguos que sobram.",
        "Uma analogia: a triagem de um hospital. A maioria dos pacientes é encaminhada por uma lista de verificação, alguns pelo julgamento de uma enfermeira, e só os casos mais difíceis chegam ao especialista. A ordem importa, porque define com que frequência o especialista caro é necessário."
      ],
      "algoritmos": [
        "Passo 1, extração de entidades: um modelo de linguagem extrai as entidades clínicas do texto do prontuário, em uma etapa de reconhecimento de entidades nomeadas.",
        "Passo 2, cascata de resolução: cada entidade passa pelas etapas na ordem definida. Regras heurísticas resolvem os casos fáceis. A similaridade de embeddings, calculada com um modelo de embeddings de texto contra os termos do SNOMED CT, resolve o grupo seguinte. Um LLM trata as entidades ambíguas que restam.",
        "Passo 3, análise de ordem: três ordens são comparadas: regras, depois embeddings, depois LLM; embeddings, depois regras, depois LLM; e LLM primeiro. O artigo mede a cobertura, a carga de uso do LLM e com que frequência o modelo estocástico é acionado."
      ],
      "resultados": [
        "Em 100 registros de UTI de um hospital público brasileiro, o LLM sozinho resolve 57% das menções para CIDs válidos e deixa 43% sem resolução. O pipeline SNOKind chega a 92% de resolução.",
        "As três ordens alcançam cobertura parecida (92%, 91% e 92%), então a ordem não muda muito a acurácia. Ela muda o custo e a confiabilidade: quando regras ou embeddings vêm primeiro, o LLM processa só 14% das entidades, e menos entidades ficam expostas ao modelo estocástico."
      ],
      "limitacoes": [
        "A avaliação usa 100 registros de UTI de um único hospital, e o artigo não reporta precisão contra rótulos-ouro anotados por especialistas. Os resultados dependem do GPT-5 e do modelo de embeddings usados, embora os autores afirmem que o desenho é independente de modelo. A abordagem precisa ser validada em outros hospitais e especialidades."
      ],
      "tabelas": [
        {
          "titulo": "Resolução de menções clínicas para conceitos do SNOMED CT",
          "colunas": [
            "Método",
            "Resolvido para CID válido (%)",
            "Sem resolução (%)"
          ],
          "linhas": [
            [
              "Somente LLM",
              "57",
              "43"
            ],
            [
              "SNOKind (regras → embeddings → LLM)",
              "92",
              "8"
            ]
          ]
        }
      ]
    },
    "imagem": "/papers/snokind-lxai.png"
  }
}
