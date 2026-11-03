import { resumos } from './resumos.js'

// Conteúdo detalhado de cada pesquisa, escrito como uma aula: contexto, ideia, funcionamento, resultados e limitações.
// "busca" liga a entrada à publicação correspondente em publications.js.
// Textos derivados dos próprios PDFs dos artigos. Números são os do artigo.
export const conteudo = {
  'ask-in-the-dark': {
    busca: null,
    links: [
      { tipo: 'pdf', href: '/pdfs/ask-in-the-dark.pdf' },
      { tipo: 'codigo', href: 'https://github.com/jrzmnt/ask-pomdp' },
    ],
    figuras: [
      {
        src: '/figuras/ask-in-the-dark-1.png',
        legenda: {
          en: 'Decision flow of ASK+. MC Dropout decides when the language model is queried, and the episode state σ gives it global context.',
          pt: 'Fluxo de decisão do ASK+. O MC Dropout decide quando o modelo de linguagem é consultado, e o estado do episódio σ dá a ele contexto global.',
        },
      },
    ],
    en: {
      contexto: [
        'Reinforcement learning (RL) trains an agent by trial and error. It acts, receives rewards, and learns a policy that maximizes the reward over time. Under partial observability, the agent sees only part of the situation at each step. Imagine walking through a dark room with a flashlight that lights only the next cell: you can still move, but your picture of the room is incomplete.',
        'A language model (LM) knows a lot about the world and can reason in text, but it needs the situation described to it. A small language model (SLM) is cheaper to run, which matters when the agent has to decide in real time.',
      ],
      ideia: [
        'The starting point is ASK. The RL policy acts by default, and the language model is consulted only when the policy is unsure. ASK+ comes from a diagnosis: when the language model received only the immediate observation, it almost never changed the policy\'s action (overwrite rate between 0.00 and 0.01). The model was being asked a question it could not answer, so the paper concludes that the problem is context, not model capacity.',
        'An analogy: asking a friend for directions while showing them only a photo of the next corner. ASK+ also shows the friend the map you have already walked, where you have been, and what you have tried.',
      ],
      algoritmos: [
        'Step 1: the PPO policy proposes an action a for the current observation o. Step 2: MC Dropout estimates uncertainty. The network runs N stochastic forward passes with dropout enabled, and the total predictive entropy H(o) measures how spread out those answers are. If H(o) is below the threshold τ, the action runs directly.',
        'Step 3: if H(o) reaches τ, the SLM receives a prompt built from o, the suggestion a, and the episode state σ, which holds a partially revealed map, the visited positions, and the action history. Its answer a′ replaces a when it is valid. Step 4: the state σ is updated after every step.',
        'Three prompt configurations add context in stages: enriched (derived features and action previews), stateful (adds the episodic memory σ), and rationale (allows a budget of 10 tokens for deliberate reasoning before answering).',
      ],
      resultados: [
        'On DoorKey, vanilla ASK matches PPO at 89%, and ASK+ raises the success rate to 93%. On FourRooms, success rises from 53% to 70%. On HigherLower, accuracy reaches about 74%.',
        'These gains come from giving the SLM grounding, not from a bigger model: Qwen3.5-2B matches or exceeds Qwen3.5-4B in every environment. The same small model moves from almost never disagreeing with the policy to actually reasoning about the task.',
      ],
      tabelas: [
        {
          titulo: 'Success rate by environment: vanilla ASK and ASK+',
          colunas: ['Environment', 'Vanilla ASK', 'ASK+'],
          linhas: [
            ['DoorKey', '89%', '93%'],
            ['FourRooms', '53%', '70%'],
            ['HigherLower', '—', '≈ 74% (accuracy)'],
          ],
        },
      ],
      limitacoes: [
        'The three environments are small grid worlds, and the paper does not test large, continuous, or real-world tasks. The explanation shown in the rationale configuration is a justification of the decision, not a verified record of the model\'s internal reasoning, and the authors say so explicitly.',
      ],
    },
    pt: {
      contexto: [
        'Aprendizado por reforço (RL) treina um agente por tentativa e erro. Ele age, recebe recompensas e aprende uma política que maximiza a recompensa ao longo do tempo. Em observabilidade parcial, o agente enxerga só parte da situação a cada passo. Imagine atravessar um quarto escuro com uma lanterna que ilumina apenas a próxima casa: você ainda consegue andar, mas sua imagem do quarto é incompleta.',
        'Um modelo de linguagem (LM) sabe muito sobre o mundo e raciocina em texto, mas precisa que a situação seja descrita para ele. Um modelo de linguagem pequeno (SLM) é mais barato de rodar, o que importa quando o agente precisa decidir em tempo real.',
      ],
      ideia: [
        'O ponto de partida é o ASK. A política RL age por padrão, e o modelo de linguagem só é consultado quando a política não tem certeza. O ASK+ nasce de um diagnóstico: quando o modelo recebia apenas a observação imediata, quase nunca mudava a ação da política (taxa de sobrescrita entre 0,00 e 0,01). O modelo estava sendo perguntado sem informação para responder, então o artigo conclui que o problema é o contexto, não a capacidade do modelo.',
        'Uma analogia: pedir informação a um amigo mostrando só uma foto da próxima esquina. O ASK+ mostra também o mapa do que você já percorreu, onde esteve e o que já tentou.',
      ],
      algoritmos: [
        'Passo 1: a política PPO propõe uma ação a para a observação atual o. Passo 2: o MC Dropout estima a incerteza. A rede roda N passagens estocásticas com dropout ativo, e a entropia preditiva total H(o) mede o quanto essas respostas se espalham. Se H(o) estiver abaixo do limiar τ, a ação é executada diretamente.',
        'Passo 3: se H(o) atingir τ, o SLM recebe um prompt montado com o, a sugestão a e o estado do episódio σ, que guarda um mapa parcialmente revelado, as posições visitadas e o histórico de ações. A resposta a′ substitui a quando é válida. Passo 4: o estado σ é atualizado a cada passo.',
        'Três configurações de prompt acrescentam contexto em etapas: enriched (características derivadas e prévias de ação), stateful (acrescenta a memória do episódio σ) e rationale (orçamento de 10 tokens para raciocinar antes de responder).',
      ],
      resultados: [
        'No DoorKey, o ASK puro iguala o PPO com 89%, e o ASK+ sobe a taxa de sucesso para 93%. No FourRooms, o sucesso passa de 53% para 70%. No HigherLower, a acurácia chega a cerca de 74%.',
        'Esses ganhos vêm de dar ao SLM uma base concreta, não de um modelo maior: o Qwen3.5-2B iguala ou supera o Qwen3.5-4B em todos os ambientes. O mesmo modelo pequeno passa de quase nunca discordar da política a de fato raciocinar sobre a tarefa.',
      ],
      tabelas: [
        {
          titulo: 'Taxa de sucesso por ambiente: ASK puro e ASK+',
          colunas: ['Ambiente', 'ASK puro', 'ASK+'],
          linhas: [
            ['DoorKey', '89%', '93%'],
            ['FourRooms', '53%', '70%'],
            ['HigherLower', '—', '≈ 74% (acurácia)'],
          ],
        },
      ],
      limitacoes: [
        'Os três ambientes são grades pequenas, e o artigo não testa tarefas grandes, contínuas ou do mundo real. A explicação mostrada na configuração rationale é uma justificativa da decisão, não um registro verificado do raciocínio interno do modelo, e os autores dizem isso explicitamente.',
      ],
    },
  },

  'when-to-ask': {
    busca: 'When to ASK',
    links: [
      { tipo: 'pdf', href: '/pdfs/when-to-ask.pdf' },
      { tipo: 'codigo', href: 'https://github.com/jrzmnt/ask-rl' },
      { tipo: 'arxiv', href: 'https://arxiv.org/abs/2604.02226' },
    ],
    figuras: [
      {
        src: '/figuras/when-to-ask-1.png',
        legenda: {
          en: 'In-domain reward on FrozenLake 6×6, 7×7 and 8×8 for PPO, LM-only and ASK, across language model sizes from 0.5B to 72B.',
          pt: 'Recompensa em domínio no FrozenLake 6×6, 7×7 e 8×8 para PPO, somente LM e ASK, em modelos de linguagem de 0,5B a 72B.',
        },
      },
    ],
    en: {
      contexto: [
        'An agent is out of distribution (OOD) when the situation at test time differs from anything it saw in training. RL policies often fail silently in these cases: the observation looks familiar, so the policy keeps following its learned value estimates with confidence, toward a bad outcome.',
        'Monte Carlo Dropout is a way to measure uncertainty. Dropout normally switches off random neurons during training. Keeping it on at test time and running the network many times yields a spread of answers. A wide spread signals that the model is unsure.',
      ],
      ideia: [
        'Small language models carry world knowledge and common sense at a much lower cost than large ones. ASK combines a trained RL policy with a small language model and consults the language model only when the policy is uncertain. In familiar states, the policy acts alone and stays efficient. In unfamiliar states, the language model can suggest a sensible action.',
        'An analogy: a driver who follows a GPS on known roads and asks a local only at a confusing junction. The driver does not need the local at every turn, and the local is only useful where the GPS is lost.',
      ],
      algoritmos: [
        'Step 1: the PPO policy runs on the observation. Step 2: MC Dropout, with 100 forward passes and a dropout rate of 0.2, estimates the epistemic uncertainty for that observation. Step 3: if the uncertainty exceeds the threshold τ, the language model is queried for an action suggestion; otherwise the policy acts. The thresholds are tuned with Optuna.',
        'Two metrics describe the behavior. The intervention rate measures how often the language model is consulted. The overwrite rate measures how often its suggestion differs from the policy\'s action. A low overwrite rate means the language model is only confirming the policy.',
      ],
      resultados: [
        'In the training domain, FrozenLake, most LM-augmented agents are statistically indistinguishable from PPO, so ASK does not improve familiar tasks. The paper reports this honestly.',
        'On transfer tasks, ASK navigates robustly and reaches a reward of 0.95, which is the main result. Language models alone stay near zero on the test splits, so they cannot plan by themselves; the gating is what makes them useful.',
      ],
      tabelas: [
        {
          titulo: 'Main numbers reported',
          colunas: ['Setting', 'Metric', 'Value'],
          linhas: [
            ['FrozenLake 6×6, PPO', 'Mean reward (100 episodes)', '0.93 ± 0.26'],
            ['FrozenLake, LM-only', 'Reward on test splits', 'near zero'],
            ['Transfer tasks, ASK', 'Reward', '0.95'],
          ],
        },
      ],
      limitacoes: [
        'The experiments use FrozenLake, a small grid world. The gains are reported on transfer tasks, not in the training domain, and the paper does not claim improvements where the policy already works well.',
      ],
    },
    pt: {
      contexto: [
        'Um agente está fora da distribuição (OOD) quando a situação no teste é diferente de tudo o que ele viu no treino. Políticas RL costumam falhar em silêncio nesses casos: a observação parece familiar, então a política segue suas estimativas de valor com confiança, rumo a um resultado ruim.',
        'O Monte Carlo Dropout é uma forma de medir incerteza. O dropout normalmente desliga neurônios aleatoriamente durante o treino. Mantê-lo ligado no teste e rodar a rede muitas vezes produz um leque de respostas. Um leque largo indica que o modelo não tem certeza.',
      ],
      ideia: [
        'Modelos de linguagem pequenos carregam conhecimento de mundo e senso comum a um custo bem menor que os grandes. O ASK combina uma política RL treinada com um modelo de linguagem pequeno e consulta o modelo só quando a política está incerta. Em estados conhecidos, a política age sozinha e continua eficiente. Em estados desconhecidos, o modelo de linguagem pode sugerir uma ação sensata.',
        'Uma analogia: um motorista que segue o GPS em rotas conhecidas e pergunta a um morador só numa encruzilhada confusa. Ele não precisa do morador a cada curva, e o morador só ajuda onde o GPS se perde.',
      ],
      algoritmos: [
        'Passo 1: a política PPO roda sobre a observação. Passo 2: o MC Dropout, com 100 passagens e taxa de dropout de 0,2, estima a incerteza epistêmica daquela observação. Passo 3: se a incerteza passar do limiar τ, o modelo de linguagem é consultado para sugerir uma ação; caso contrário, a política age. Os limiares são ajustados com Optuna.',
        'Duas métricas descrevem o comportamento. A taxa de intervenção mede com que frequência o modelo de linguagem é consultado. A taxa de sobrescrita mede com que frequência a sugestão dele difere da ação da política. Uma taxa de sobrescrita baixa significa que o modelo só confirma a política.',
      ],
      resultados: [
        'No domínio de treino, o FrozenLake, a maioria dos agentes com LM é estatisticamente indistinguível do PPO, então o ASK não melhora as tarefas conhecidas. O artigo relata isso de forma transparente.',
        'Em tarefas de transferência, o ASK navega de forma robusta e alcança recompensa de 0,95, que é o principal resultado. Os modelos de linguagem sozinhos ficam perto de zero nas divisões de teste, então não planejam por conta própria; o controle de quando consultar é o que os torna úteis.',
      ],
      tabelas: [
        {
          titulo: 'Principais números reportados',
          colunas: ['Cenário', 'Métrica', 'Valor'],
          linhas: [
            ['FrozenLake 6×6, PPO', 'Recompensa média (100 episódios)', '0,93 ± 0,26'],
            ['FrozenLake, somente LM', 'Recompensa nas divisões de teste', 'perto de zero'],
            ['Tarefas de transferência, ASK', 'Recompensa', '0,95'],
          ],
        },
      ],
      limitacoes: [
        'Os experimentos usam o FrozenLake, uma grade pequena. Os ganhos são relatados em tarefas de transferência, não no domínio de treino, e o artigo não afirma melhorias onde a política já funciona bem.',
      ],
    },
  },

  'pact': {
    busca: 'When in Doubt',
    links: [
      { tipo: 'pdf', href: '/pdfs/pact.pdf' },
      { tipo: 'arxiv', href: 'https://arxiv.org/abs/2606.16995' },
    ],
    figuras: [
      {
        src: '/figuras/pact-1.png',
        legenda: {
          en: 'The PACT architecture: a slow planner (plan generation, verification, alignment) runs alongside a fast reactive RL policy.',
          pt: 'A arquitetura PACT: um planejador lento (geração de planos, verificação e alinhamento) funciona junto com uma política RL reativa e rápida.',
        },
      },
    ],
    en: {
      contexto: [
        'An RL policy reacts to what it sees. It is fast, but it has no explicit plan. Classical planners can plan, but they need hand-built models of the world. Language models can reason about plans, but they are unreliable at multi-step planning, and they are too expensive to query at every step.',
        'Simulation-based verification means testing a candidate plan inside a model of the environment before executing it for real, so plans that would fail are caught early.',
      ],
      ideia: [
        'PACT combines both worlds. A fast reactive policy handles most steps, and a slow, deliberative planner, a 2B-parameter small language model, proposes whole plans. Before any plan runs, it is checked in simulation. If it is safe, feasible, and complete, it runs directly and bypasses the RL policy, which is never retrained.',
        'An analogy: a driver who knows the road well and drives on autopilot, but calls up a route planner when a junction looks unfamiliar. The planner\'s route is checked before the driver follows it.',
      ],
      algoritmos: [
        'Slow component, asynchronous: the SLM receives the task description and the first observation, and proposes a candidate plan of up to n actions. Verification: the candidate is simulated with an approximate transition model, and only plans that are safe, feasible, and complete pass. Alignment: a verified plan is reconciled with the agent\'s current trajectory and replanned when needed.',
        'Fast component: the RL policy acts while its epistemic uncertainty U(o) stays below τ. When uncertainty crosses τ, or a verified plan is ready before the goal, control moves to the plan. If planning does not finish within the time limit, the RL policy takes over again.',
      ],
      resultados: [
        'On three FrozenLake configurations of increasing difficulty, PACT outperforms all the baselines, using a 2B-parameter backbone.',
        'The planner is not called at every step. The SLM was consulted on roughly 58% to 81% of the steps, depending on the configuration, so the cost of planning is concentrated where the policy is uncertain.',
      ],
      limitacoes: [
        'PACT assumes an approximate transition function for simulation and a task description detailed enough for the SLM to plan from. The evaluation is on FrozenLake, so transfer to larger or continuous environments is not shown here.',
      ],
    },
    pt: {
      contexto: [
        'Uma política RL reage ao que vê. É rápida, mas não tem um plano explícito. Planejadores clássicos conseguem planejar, mas exigem modelos do mundo feitos à mão. Modelos de linguagem conseguem raciocinar sobre planos, mas erram no planejamento de muitos passos e são caros demais para consultar a cada passo.',
        'Verificação por simulação significa testar um plano candidato dentro de um modelo do ambiente antes de executá-lo de verdade, para pegar cedo os planos que falhariam.',
      ],
      ideia: [
        'O PACT combina os dois mundos. Uma política reativa e rápida cuida da maioria dos passos, e um planejador lento e deliberativo, um modelo de linguagem pequeno de 2B parâmetros, propõe planos inteiros. Antes de qualquer plano rodar, ele é checado em simulação. Se for seguro, viável e completo, é executado diretamente e contorna a política RL, que nunca é retreinada.',
        'Uma analogia: um motorista que conhece bem a estrada e dirige no piloto automático, mas chama um planejador de rotas quando uma encruzilhada parece desconhecida. A rota do planejador é checada antes de ser seguida.',
      ],
      algoritmos: [
        'Componente lento, assíncrono: o SLM recebe a descrição da tarefa e a primeira observação, e propõe um plano candidato de até n ações. Verificação: o candidato é simulado com um modelo de transição aproximado, e só passam os planos seguros, viáveis e completos. Alinhamento: um plano verificado é reconciliado com a trajetória atual do agente e replanejado quando necessário.',
        'Componente rápido: a política RL age enquanto a incerteza epistêmica U(o) fica abaixo de τ. Quando a incerteza passa de τ, ou quando um plano verificado fica pronto antes do objetivo, o controle passa para o plano. Se o planejamento não terminar dentro do tempo limite, a política RL assume de novo.',
      ],
      resultados: [
        'Em três configurações do FrozenLake de dificuldade crescente, o PACT supera todas as referências, usando um modelo de base de 2B parâmetros.',
        'O planejador não é chamado a cada passo. O SLM foi consultado em cerca de 58% a 81% dos passos, conforme a configuração, então o custo do planejamento fica concentrado onde a política está incerta.',
      ],
      limitacoes: [
        'O PACT assume uma função de transição aproximada para a simulação e uma descrição da tarefa detalhada o bastante para o SLM planejar. A avaliação é no FrozenLake, então a transferência para ambientes maiores ou contínuos não é mostrada aqui.',
      ],
    },
  },

  'datasynk': {
    busca: 'DataSynK:',
    links: [
      { tipo: 'pdf', href: '/pdfs/datasynk.pdf' },
      { tipo: 'codigo', href: 'https://github.com/eduarda-chagas/DataSynK' },
    ],
    figuras: [],
    en: {
      contexto: [
        'Electronic health records (EHR) store patient data as tables: each row is a patient, and each column is a clinical fact, such as having a condition or taking a medication, encoded as yes or no. Privacy rules and scarcity limit how much real data can be shared or used to train models.',
        'Synthetic data is artificially generated data that looks statistically like the real thing. A generator can match the numbers and still produce clinically impossible combinations, such as two conditions that contradict each other. That is a validity problem, not only a fidelity problem. A tabular foundation model, such as TabPFN, is pre-trained on many synthetic tables and then applied to a new table through in-context learning, so the quality of its pre-training data matters.',
      ],
      ideia: [
        'DataSynK generates synthetic EHR tables that respect medical knowledge. It draws on three sources: a medical ontology (SNOMED CT) that defines which concepts exist and how they relate, causal discovery that learns which variables influence others, and symbolic logic rules that forbid clinically impossible combinations.',
        'An analogy: a recipe generator that learns ingredient statistics from real recipes but refuses combinations that no cook would ever serve.',
      ],
      algoritmos: [
        'Step 1: clinical entities are extracted from the source data with an ontology-guided named entity recognition step. Step 2: the ontology relations are encoded as a prior knowledge graph (PKG). Step 3: a tiered causal discovery procedure searches for dependencies, constrained by that graph.',
        'Step 4: Answer Set Programming (ASP) logical filters enforce hard constraints, rejecting any record that breaks them. Step 5: the output is a binary feature matrix of synthetic records, which can serve as a pre-training corpus for a tabular foundation model.',
      ],
      resultados: [
        'Deep generators collapse under extreme scarcity, producing repeated, unrepresentative records. DataSynK avoids this collapse in the low-resource regime. Among the evaluated methods, it reaches the highest balanced-classification utility (ΔF1 = +0.093) and keeps strictly positive ontological validity.',
        'The trade-off is a modest increase in marginal distance, so its per-feature statistics are not the closest to the real data. The authors argue that, for clinical use, structural validity matters as much as distributional fidelity.',
      ],
      limitacoes: [
        'The paper says DataSynK is not the best on every marginal-fidelity metric. The downstream evaluation uses a TSTR proxy (train on synthetic data, test on real data) with TabPFN, which measures usefulness for modeling but is not a clinical validation.',
      ],
    },
    pt: {
      contexto: [
        'Prontuários eletrônicos (EHR) guardam dados de pacientes em tabelas: cada linha é um paciente, e cada coluna é um fato clínico, como ter uma condição ou tomar um medicamento, codificado como sim ou não. Regras de privacidade e a escassez limitam quantos dados reais podem ser compartilhados ou usados para treinar modelos.',
        'Dados sintéticos são dados gerados artificialmente que se parecem estatisticamente com os reais. Um gerador pode acertar os números e ainda produzir combinações clinicamente impossíveis, como duas condições que se contradizem. Isso é um problema de validade, não só de fidelidade. Um modelo fundacional tabular, como o TabPFN, é pré-treinado com muitas tabelas sintéticas e depois aplicado a uma tabela nova por aprendizado em contexto, então a qualidade desses dados de pré-treino importa.',
      ],
      ideia: [
        'O DataSynK gera tabelas sintéticas de prontuários que respeitam o conhecimento médico. Ele usa três fontes: uma ontologia médica (SNOMED CT) que define quais conceitos existem e como se relacionam, descoberta causal que aprende quais variáveis influenciam outras, e regras de lógica simbólica que proíbem combinações clinicamente impossíveis.',
        'Uma analogia: um gerador de receitas que aprende estatísticas de ingredientes a partir de receitas reais, mas recusa combinações que nenhum cozinheiro serviria.',
      ],
      algoritmos: [
        'Passo 1: entidades clínicas são extraídas dos dados de origem com um reconhecimento de entidades guiado por ontologia. Passo 2: as relações da ontologia são codificadas como um grafo de conhecimento prévio (PKG). Passo 3: um procedimento de descoberta causal em camadas busca dependências, restrito por esse grafo.',
        'Passo 4: filtros lógicos em Answer Set Programming (ASP) impõem restrições rígidas, rejeitando qualquer registro que as quebre. Passo 5: a saída é uma matriz binária de registros sintéticos, que pode servir de corpus de pré-treino para um modelo fundacional tabular.',
      ],
      resultados: [
        'Geradores profundos colapsam sob escassez extrema, produzindo registros repetidos e pouco representativos. O DataSynK evita esse colapso no regime de poucos dados. Entre os métodos avaliados, atinge a maior utilidade em classificação balanceada (ΔF1 = +0,093) e mantém validade ontológica estritamente positiva.',
        'O custo é um aumento modesto na distância marginal, então as estatísticas por variável não são as mais próximas dos dados reais. Os autores argumentam que, para uso clínico, a validade estrutural importa tanto quanto a fidelidade distribucional.',
      ],
      limitacoes: [
        'O artigo diz que o DataSynK não é o melhor em todas as métricas de fidelidade marginal. A avaliação usa um proxy TSTR (treinar com dados sintéticos, testar com dados reais) com o TabPFN, que mede utilidade para modelagem, mas não é uma validação clínica.',
      ],
    },
  },

  'sail': {
    busca: 'Self-Supervised Adversarial',
    links: [
      { tipo: 'pdf', href: '/pdfs/sail.pdf' },
      { tipo: 'codigo', href: 'https://github.com/NathanGavenski/SAIL' },
      { tipo: 'arxiv', href: 'https://arxiv.org/abs/2304.10914' },
    ],
    figuras: [
      {
        src: '/figuras/sail-1.png',
        legenda: {
          en: 'SAIL training pipeline. Inverse dynamics, policy, generative model and discriminator are trained iteratively from state-only demonstrations.',
          pt: 'Pipeline de treino do SAIL. Modelo de dinâmica inversa, política, modelo generativo e discriminador são treinados de forma iterativa a partir de demonstrações apenas com estados.',
        },
      },
    ],
    en: {
      contexto: [
        'Imitation learning teaches an agent to behave like an expert from demonstrations. Behavioral cloning (BC) is the simplest version: each (state, action) pair becomes a supervised example. Many datasets have only states, with no actions. That is learning from observation (LfO), and it is harder, because the actions that caused each transition must be inferred.',
        'An inverse dynamics model (IDM) guesses the action that moved the agent from one state to the next. A discriminator, as in generative adversarial networks, is a network that learns to tell real samples from generated ones. Here it asks whether a generated transition looks like one the expert could have produced.',
      ],
      ideia: [
        'Self-supervised methods alternate between inferring actions and imitating them, but this loop can lock onto bad solutions. Earlier fixes required a person to check whether the agent reached its goal. SAIL adds a discriminator that keeps only the generated transitions the expert could have produced. This removes the manual check and steers learning toward the expert\'s state transitions.',
        'An analogy: learning a dance from video only. You guess the steps behind each frame and practice them, and a judge keeps only the practice clips that look like the real dancer.',
      ],
      algoritmos: [
        'SAIL trains four models together. M is an inverse dynamics model that predicts actions from state transitions. The policy π_θ is trained with behavioral cloning on the labels that M produces for the expert\'s transitions. A generative model G predicts the next state from the policy\'s action. A discriminator D decides whether a generated transition is good enough to keep.',
        'In each iteration, the policy collects new samples, M labels the expert transitions, π_θ is updated by BC, and G is trained alongside it. D then adds to the dataset only the samples it cannot tell apart from the expert\'s. Exploration comes from sampling M\'s softmax outputs instead of always taking the most likely label.',
      ],
      resultados: [
        'In Table I, across CartPole, MountainCar, Acrobot, and LunarLander, SAIL stays closest to the teacher\'s reward on CartPole, MountainCar, and Acrobot, and is weakest on LunarLander.',
        'Table II shows that with 25 expert trajectories SAIL reaches a performance close to 1. Like other behavioral cloning methods, it does not scale reliably as the number of trajectories grows, because compounding errors appear when the policy drifts away from the demonstrated trajectories.',
      ],
      limitacoes: [
        'SAIL removes the manual goal check, but it still depends on how many trajectories are available. The official repository does not publish a results table, so the numbers reported here come from the paper.',
      ],
    },
    pt: {
      contexto: [
        'Aprendizado por imitação ensina um agente a agir como um especialista a partir de demonstrações. A clonagem de comportamento (BC) é a versão mais simples: cada par (estado, ação) vira um exemplo supervisionado. Muitos conjuntos de dados têm só estados, sem ações. Isso é o aprendizado por observação (LfO), e é mais difícil, porque as ações que causaram cada transição precisam ser inferidas.',
        'Um modelo de dinâmica inversa (IDM) adivinha a ação que levou o agente de um estado ao seguinte. Um discriminador, como nas redes adversariais generativas, é uma rede que aprende a distinguir amostras reais de geradas. Aqui ele pergunta se uma transição gerada parece uma que o especialista poderia ter produzido.',
      ],
      ideia: [
        'Métodos autossupervisionados alternam entre inferir ações e imitá-las, mas esse ciclo pode travar em soluções ruins. Soluções anteriores exigiam que uma pessoa checasse se o agente chegou ao objetivo. O SAIL acrescenta um discriminador que mantém apenas as transições geradas que o especialista poderia ter produzido. Isso elimina a checagem manual e guia o aprendizado para as transições de estado do especialista.',
        'Uma analogia: aprender uma coreografia só a partir de um vídeo. Você adivinha os passos por trás de cada quadro e ensaia, e um juiz mantém só os trechos de ensaio que parecem com o dançarino real.',
      ],
      algoritmos: [
        'O SAIL treina quatro modelos juntos. M é um modelo de dinâmica inversa que prevê ações a partir de transições de estado. A política π_θ é treinada por clonagem de comportamento com os rótulos que M produz para as transições do especialista. Um modelo generativo G prevê o próximo estado a partir da ação da política. Um discriminador D decide se uma transição gerada é boa o bastante para ser mantida.',
        'Em cada iteração, a política coleta novas amostras, M rotula as transições do especialista, π_θ é atualizada por BC, e G é treinado junto. Em seguida, D acrescenta ao conjunto de dados só as amostras que não consegue distinguir das do especialista. A exploração vem de amostrar as saídas softmax de M, em vez de sempre escolher o rótulo mais provável.',
      ],
      resultados: [
        'Na Tabela I, considerando CartPole, MountainCar, Acrobot e LunarLander, o SAIL fica mais próximo da recompensa do professor em CartPole, MountainCar e Acrobot, e é o mais fraco no LunarLander.',
        'A Tabela II mostra que, com 25 trajetórias do especialista, o SAIL alcança desempenho próximo de 1. Como outros métodos de clonagem de comportamento, não escala de forma confiável quando o número de trajetórias cresce, porque erros acumulados aparecem quando a política se afasta das trajetórias demonstradas.',
      ],
      limitacoes: [
        'O SAIL elimina a checagem manual de metas, mas ainda depende de quantas trajetórias estão disponíveis. O repositório oficial não publica uma tabela de resultados, então os números aqui vêm do artigo.',
      ],
    },
  },

  'abco': {
    busca: 'Augmented Behavioral Cloning',
    links: [
      { tipo: 'pdf', href: '/pdfs/abco.pdf' },
      { tipo: 'codigo', href: 'https://github.com/NathanGavenski/ABCO' },
      { tipo: 'arxiv', href: 'https://arxiv.org/abs/2004.13529' },
    ],
    figuras: [
      {
        src: '/figuras/abco-1.png',
        legenda: {
          en: 'Example environments: Acrobot-v1, CartPole-v1, MountainCar-v0 and Gym-Maze 5×5.',
          pt: 'Ambientes de exemplo: Acrobot-v1, CartPole-v1, MountainCar-v0 e Gym-Maze 5×5.',
        },
      },
    ],
    en: {
      contexto: [
        'Imitation from observation (IfO) is the same problem as LfO: learn from sequences of states only. Current approaches learn two models at once. An inverse dynamics model (IDM) labels the actions, and a policy model imitates those labels.',
        'Self-attention is a mechanism in which each position of a feature map looks at all the others and weights them by relevance. Convolutions only see local neighborhoods, while self-attention captures global relationships. It was popularized for images by SAGAN.',
      ],
      ideia: [
        'The two models depend on each other. The IDM learns from data the policy generates, and the policy learns from the IDM\'s labels, so errors feed back into the loop. In the early iterations the process overfits the demonstrations and stalls far from the expert. ABCO tackles this with two additions: self-attention, so the model weights global features of the state, and a sampling strategy that controls which observations are used for learning.',
        'An analogy: two students grade each other\'s homework. Early mistakes get reinforced, so the teacher limits which homework is graded at each stage, and asks each student to look at the whole page, not just the last line.',
      ],
      algoritmos: [
        'Step 1: the agent acts randomly to collect an initial set of transitions, the pre-demonstrations (I_pre). Step 2: the IDM is trained on these transitions to label actions. Step 3: the policy model is trained on those labels.',
        'Step 4: the policy acts in the environment to collect new transitions, and the sampling strategy controls how many samples from the original data are kept. Step 5: repeat. In both models, the self-attention module computes attention maps over the feature maps, and its learnable weight μ starts at zero, so the model begins without attention and learns how much to use it.',
      ],
      resultados: [
        'In Table I, ABCO matches or surpasses the state of the art in every environment except the 3×3 maze, where it is similar to BCO. On the 5×5 maze, ABCO reaches Performance (P) 0.960 and Average Episodic Reward (AER) 0.932, against −0.112 and −0.941 for BCO.',
        'The ablation in Table II separates the components. Self-attention alone gives P −0.415 and AER −0.940, which is no gain over BCO. The improvement comes from combining attention with the sampling strategy.',
      ],
      tabelas: [
        {
          titulo: 'Ablation on the 5×5 maze (Table II)',
          colunas: ['Model', 'P', 'AER'],
          linhas: [
            ['BCO', '−0.112', '−0.941'],
            ['Self-attention only', '−0.415', '−0.940'],
            ['ABCO (attention + sampling)', '0.960', '0.932'],
          ],
        },
      ],
      limitacoes: [
        'The experiments use small control benchmarks and small mazes. The authors note that accuracy is not a reliable measure of policy quality, which is why they report AER and Performance instead.',
      ],
    },
    pt: {
      contexto: [
        'Aprendizado por imitação a partir de observação (IfO) é o mesmo problema do LfO: aprender só a partir de sequências de estados. As abordagens atuais aprendem dois modelos ao mesmo tempo. Um modelo de dinâmica inversa (IDM) rotula as ações, e um modelo de política imita esses rótulos.',
        'Auto-atenção é um mecanismo em que cada posição de um mapa de características olha para todas as outras e as pondera pela relevância. Convoluções só enxergam vizinhanças locais, enquanto a auto-atenção captura relações globais. Ela foi popularizada em imagens pelo SAGAN.',
      ],
      ideia: [
        'Os dois modelos dependem um do outro. O IDM aprende com os dados que a política gera, e a política aprende com os rótulos do IDM, então os erros voltam para o ciclo. Nas primeiras iterações o processo sobreajusta as demonstrações e para longe do especialista. O ABCO enfrenta isso com duas adições: a auto-atenção, para que o modelo pondere características globais do estado, e uma estratégia de amostragem que controla quais observações são usadas no aprendizado.',
        'Uma analogia: dois alunos corrigem a lição um do outro. Os erros iniciais se reforçam, então o professor limita quais lições são corrigidas em cada etapa e pede que cada aluno olhe a página inteira, não só a última linha.',
      ],
      algoritmos: [
        'Passo 1: o agente age aleatoriamente para coletar um conjunto inicial de transições, as pré-demonstrações (I_pre). Passo 2: o IDM é treinado com essas transições para rotular ações. Passo 3: o modelo de política é treinado com esses rótulos.',
        'Passo 4: a política age no ambiente para coletar novas transições, e a estratégia de amostragem controla quantas amostras dos dados originais são mantidas. Passo 5: repetir. Nos dois modelos, o módulo de auto-atenção calcula mapas de atenção sobre os mapas de características, e seu peso aprendível μ começa em zero, então o modelo começa sem atenção e aprende quanto usar.',
      ],
      resultados: [
        'Na Tabela I, o ABCO iguala ou supera o estado da arte em todos os ambientes, exceto no labirinto 3×3, onde fica semelhante ao BCO. No labirinto 5×5, o ABCO atinge Performance (P) 0,960 e Recompensa Média Episódica (AER) 0,932, contra −0,112 e −0,941 do BCO.',
        'A ablação da Tabela II separa os componentes. A auto-atenção sozinha dá P −0,415 e AER −0,940, sem ganho sobre o BCO. A melhora vem da combinação da atenção com a estratégia de amostragem.',
      ],
      tabelas: [
        {
          titulo: 'Ablação no labirinto 5×5 (Tabela II)',
          colunas: ['Modelo', 'P', 'AER'],
          linhas: [
            ['BCO', '−0,112', '−0,941'],
            ['Apenas auto-atenção', '−0,415', '−0,940'],
            ['ABCO (atenção + amostragem)', '0,960', '0,932'],
          ],
        },
      ],
      limitacoes: [
        'Os experimentos usam benchmarks de controle pequenos e labirintos pequenos. Os autores observam que a acurácia não é uma medida confiável da qualidade da política, por isso reportam AER e Performance.',
      ],
    },
  },
}

// Resumos gerados para as demais publicações entram no mesmo formato, sem sobrescrever o conteúdo manual.
for (const [slug, r] of Object.entries(resumos)) {
  if (conteudo[slug]) continue
  conteudo[slug] = { busca: null, links: r.links ?? [], figuras: r.figuras ?? [], en: r.en ?? undefined, pt: r.pt ?? undefined }
}
