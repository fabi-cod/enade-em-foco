//  Banco de questões — 100 questões (ENADE / Conhecimentos Gerais)
//  10 por rodada (selecionadas aleatoriamente a cada partida)


const BANCO_QUESTOES = [
  // ==================== BLOCO 1 (1 a 50) ====================
  // --- Ética, democracia, cidadania e direitos humanos ---
  {
    tema: "Ética e Cidadania",
    enunciado: "Em uma sociedade democrática plural, o exercício da cidadania plena vai além do direito ao voto, englobando a participação ativa nas decisões públicas e o respeito intransigente aos direitos fundamentais de todos os cidadãos.",
    pergunta: "Qual atitude consolida diretamente os princípios da democracia participativa e dos direitos humanos?",
    alternativas: [
      "Restringir o debate político apenas aos períodos eleitorais formais.",
      "Incentivar o diálogo comunitário, a fiscalização dos atos públicos e o respeito à diversidade de opiniões.",
      "Delegar todas as decisões estatais aos governantes sem consulta prévia à sociedade civil.",
      "Priorizar o cumprimento de leis individuais em detrimento do bem-estar coletivo."
    ],
    correta: 1
  },
  {
    tema: "Direitos Humanos",
    enunciado: "Os direitos humanos fundamentam-se na premissa da dignidade inerente a toda pessoa humana, exigindo do Estado e da sociedade ações contínuas para a sua efetivação e proteção contra violações.",
    pergunta: "De acordo com os fundamentos dos direitos humanos, qual é a principal obrigação do Estado?",
    alternativas: [
      "Garantir políticas públicas universais que assegurem igualdade de condições, proteção e dignidade a todos.",
      "Condicionar o acesso aos direitos básicos ao mérito financeiro ou produtivo do indivíduo.",
      "Suspender garantias fundamentais em momentos de instabilidade administrativa sem critérios rígidos.",
      "Tratar a segurança pública como prioridade absoluta acima das liberdades civis."
    ],
    correta: 0
  },
  {
    tema: "Democracia",
    enunciado: "A democracia moderna enfrenta desafios contemporâneos como a polarização extrema, a proliferação de notícias falsas e a descrença nas instituições republicanas.",
    pergunta: "Qual elemento é indispensável para a sustentabilidade e o fortalecimento de um regime democrático?",
    alternativas: [
      "A concentração de poderes decisórios em uma única liderança carismática.",
      "A restrição da liberdade de imprensa para evitar conflitos ideológicos.",
      "A transparência governamental, o fortalecimento de instituições independentes e a educação crítica da sociedade.",
      "A eliminação do contraditório nos debates públicos de interesse geral."
    ],
    correta: 2
  },
  {
    tema: "Ética Profissional",
    enunciado: "A atuação ética no ambiente profissional contemporâneo exige responsabilidade social, integridade nas decisões e compromisso com o impacto coletivo das inovações e serviços prestados.",
    pergunta: "Como se caracteriza uma conduta profissional verdadeiramente ética?",
    alternativas: [
      "Pela busca de resultados financeiros imediatos, independentemente dos meios utilizados.",
      "Pelo cumprimento estrito de normas legais, desconsiderando preceitos morais e sociais.",
      "Pela responsabilidade socioambiental, transparência com os clientes e respeito às normas de conduta da classe.",
      "Pela obediência cega a ordens superiores, eximindo-se da culpa por eventuais danos."
    ],
    correta: 2
  },
  {
    tema: "Cidadania Global",
    enunciado: "Fenômenos globais contemporâneos conectam populações de diferentes partes do planeta, gerando responsabilidades compartilhadas frente a crises sanitárias, econômicas e ambientais.",
    pergunta: "O conceito de cidadania global pressupõe:",
    alternativas: [
      "A anulação das identidades culturais locais em favor de uma cultura internacional padronizada.",
      "A conscientização de que as ações locais repercutem globalmente, exigindo solidariedade e cooperação internacional.",
      "A submissão das leis nacionais a organismos corporativos transnacionais.",
      "A restrição do foco cívico exclusivamente aos limites geográficos do município de origem."
    ],
    correta: 1
  },

  // --- Estado, sociedade e trabalho ---
  {
    tema: "Estado e Sociedade",
    enunciado: "A relação entre o Estado e a sociedade civil organizada molda as políticas públicas e o grau de bem-estar social alcançado por uma nação ao longo de sua história.",
    pergunta: "Qual é o papel fundamental da sociedade civil na dinâmica do Estado democrático de direito?",
    alternativas: [
      "Atuar passivamente na recepção de diretrizes governamentais.",
      "Controlar os meios de coerção estatal sem a participação de instâncias judiciais.",
      "Mobilizar-se, fiscalizar a gestão pública e propor caminhos para a melhoria de serviços essenciais.",
      "Substituir integralmente as funções regulatórias do Estado por entidades privadas."
    ],
    correta: 2
  },
  {
    tema: "Mundo do Trabalho",
    enunciado: "As transformações tecnológicas, a globalização e a precarização das relações laborais redefiniram o conceito de trabalho na sociedade contemporânea.",
    pergunta: "Quais características marcam as novas exigências do mercado de trabalho atual?",
    alternativas: [
      "A estabilidade vitalícia em um único cargo operacional.",
      "A desvalorização da capacidade de adaptação em prol de tarefas puramente repetitivas.",
      "A exigência de aprendizagem contínua, polivalência e desenvolvimento de competências socioemocionais.",
      "O isolamento total do trabalhador em relação a equipes multidisciplinares."
    ],
    correta: 2
  },
  {
    tema: "Políticas Públicas",
    enunciado: "As políticas públicas configuram-se como respostas do Estado a demandas sociais estruturais, visando reduzir assimetrias históricas e promover o desenvolvimento nacional.",
    pergunta: "Para que uma política pública seja considerada eficaz a longo prazo, ela deve:",
    alternativas: [
      "Ser descontinuada a cada mudança de gestão governamental para poupar recursos.",
      "Basear-se em evidências técnicas, planejamento participativo e mecanismos de avaliação contínua.",
      "Atender apenas a grupos de pressão economicamente privileged.",
      "Focar exclusivamente na repressão de conflitos sociais sem investigar suas causas."
    ],
    correta: 1
  },
  {
    tema: "Direitos Trabalhistas",
    enunciado: "A legislação trabalhista busca equilibrar a relação assimétrica entre capital e trabalho, assegurando condições dignas de labor, segurança e seguridade social.",
    pergunta: "A premissa básica da proteção jurídica ao trabalhador consiste em:",
    alternativas: [
      "Garantir flexibilidade contratual absoluta sem limites para jornadas ou remuneração.",
      "Reconhecer o trabalho como mercadoria comum sujeita exclusivamente às leis de oferta e procura.",
      "Assegurar a dignidade da pessoa humana por meio de pisos civilizatórios de direitos e segurança laboral.",
      "Transferir todos os riscos da atividade econômica para o trabalhador autônomo."
    ],
    correta: 2
  },
  {
    tema: "Movimentos Sociais",
    enunciado: "Os movimentos sociais desempenham um papel histórico na conquista de direitos civis, políticos e sociais, pautando temas antes negligenciados pela agenda oficial do Estado.",
    pergunta: "De que maneira os movimentos sociais impactam a evolução institucional do Estado?",
    alternativas: [
      "Impedindo qualquer tipo de reforma legislativa ou administrativa.",
      "Buscando a ruptura institucional imediata em detrimento do diálogo democrático.",
      "Dando visibilidade a demandas reprimidas, pressionando por leis inclusivas e renovando a cultura política.",
      "Atuando estritamente como braços partidários de governos vigentes."
    ],
    correta: 2
  },

  // --- Educação e desenvolvimento humano e social ---
  {
    tema: "Educação Inclusiva",
    enunciado: "A educação inclusiva propõe um sistema educacional que acolhe todas as pessoas, respeitando suas singularidades e garantindo o acesso e a permanência com qualidade.",
    pergunta: "Qual é o princípio fundamental da escola inclusiva?",
    alternativas: [
      "Segregar alunos com necessidades específicas em classes especializadas e isoladas.",
      "Adaptar a estrutura física, os métodos pedagógicos e os materiais para atender à diversidade do alunado na mesma sala de aula.",
      "Exigir que o estudante se adapte integralmente aos padrões rígidos tradicionais sem apoio pedagógico extra.",
      "Focar o ensino unicamente nos alunos com alto desempenho acadêmico."
    ],
    correta: 1
  },
  {
    tema: "Desenvolvimento Humano",
    enunciado: "O Índice de Desenvolvimento Humano (IDH) amplia a análise do progresso de uma nação para além da vertente puramente econômica.",
    pergunta: "Quais dimensões básicas compõem o cálculo do IDH proposto pela ONU?",
    alternativas: [
      "PIB per capita, inflação controlada e balança comercial favorável.",
      "Longevidade e saúde, acesso ao conhecimento (educação) e padrão de vida digno.",
      "Taxa de desemprego, produtividade industrial e arrecadação fiscal.",
      "Crescimento demográfico, urbanização e consumo energético."
    ],
    correta: 1
  },
  {
    tema: "Função Social da Escola",
    enunciado: "A escola contemporânea não deve limitar-se à transmissão enciclopédica de conteúdos, mas atuar na formação integral do estudante como cidadão crítico.",
    pergunta: "Como se traduz na prática pedagógica a função social da educação?",
    alternativas: [
      "Na priorização exclusiva de testes padronizados de memorização.",
      "Na desvinculação entre os saberes escolares e a realidade social dos discentes.",
      "Na promoção do pensamento crítico, da autonomia, da ética e da capacidade de intervenção na realidade.",
      "Na estrita observância de normas disciplinares punitivas."
    ],
    correta: 2
  },
  {
    tema: "Educação Continuada",
    enunciado: "A educação ao longo da vida (lifelong learning) tornou-se imprescindível diante da rápida obsolescência de conhecimentos técnicos e das mudanças sociais.",
    pergunta: "Qual é o objetivo principal da educação continuada no contexto atual?",
    alternativas: [
      "Manter o profissional preso a uma única formação acadêmica inicial.",
      "Permitir a requalificação constante, o desenvolvimento de novas habilidades e a adaptação a cenários em transformação.",
      "Substituir o ensino regular básico por cursos corporativos rápidos.",
      "Eliminar a necessidade de diplomas formais no mercado de trabalho."
    ],
    correta: 1
  },
  {
    tema: "Avaliação Educacional",
    enunciado: "A avaliação da aprendizagem e dos sistemas educacionais deve orientar a melhoria da qualidade do ensino, identificando lacunas e potencialidades.",
    pergunta: "Qual concepção de avaliação é coerente com uma pedagogia emancipatória?",
    alternativas: [
      "Uma ferramenta punitiva e classificatória baseada em notas excludentes.",
      "Um processo formativo contínuo que diagnostica dificuldades e redireciona o processo de ensino-aprendizagem.",
      "Um exame aplicado apenas no fim do ciclo letivo sem feedback ao estudante.",
      "Uma medição estritamente quantitativa do volume de dados memorizados."
    ],
    correta: 1
  },

  // --- Meio ambiente, mudanças climáticas e desafios socioambientais ---
  {
    tema: "Mudanças Climáticas",
    enunciado: "O aquecimento global provocado por emissões antrópicas de gases de efeito estufa gera impactos severos nos ecossistemas, na economia e na segurança alimentar.",
    pergunta: "O conceito de transição energética justa refere-se a:",
    alternativas: [
      "Substituir os combustíveis fósseis por fontes renováveis garantindo inclusão socioeconômica e apoio às comunidades afetadas.",
      "Aumentar a exploração de carvão mineral em países em desenvolvimento para equiparar a economia.",
      "Privatizar integralmente os recursos hídricos e energéticos globais.",
      "Manter a matriz energética baseada em petróleo até o esgotamento total dos poços."
    ],
    correta: 0
  },
  {
    tema: "Desenvolvimento Sustentável",
    enunciado: "O desenvolvimento sustentável busca atender às necessidades do presente sem comprometer a capacidade das gerações futuras de suprirem suas próprias necessidades.",
    pergunta: "Quais pilares sustentam o conceito ampliado de sustentabilidade?",
    alternativas: [
      "Crescimento financeiro, desregulamentação de mercados e livre concorrência.",
      "Viabilidade econômica, equidade social e preservação ambiental.",
      "Industrialização acelerada, urbanização vertical e consumo de massa.",
      "Proteção estrita da natureza com isolamento absoluto de comunidades humanas."
    ],
    correta: 1
  },
  {
    tema: "Crise Hídrica",
    enunciado: "A escassez de água potável em diversas regiões do planeta decorre de múltiplos fatores, incluindo poluição, desmatamento de nascentes e desperdício crônico.",
    pergunta: "Qual medida de gestão ambiental é mais adequada para o enfrentamento da crise hídrica?",
    alternativas: [
      "Tratar a água exclusivamente como mercadoria de alto valor agregado sem controle estatal.",
      "Incentivar o reuso de água, a proteção de mananciais e a eficiência nos processos industriais e agrícolas.",
      "Desviar rios intermitentes sem estudos de impacto ambiental prévios.",
      "Restringir o acesso à água apenas a grandes centros urbanos industriais."
    ],
    correta: 1
  },
  {
    tema: "Pegada Ecológica",
    enunciado: "A pegada ecológica é uma ferramenta de contabilidade ambiental que avalia a pressão exercida pelas atividades humanas sobre os recursos naturais do planeta.",
    pergunta: "Um resultado de pegada ecológica acima da capacidade de regeneração da Terra indica:",
    alternativas: [
      "Que o modelo de consumo atual é sustentável e ecologicamente balanceado.",
      "Que a biocapacidade global está sendo consumida em ritmo superior à sua renovação, gerando déficit ecológico.",
      "Que a população mundial precisa ser reduzida drasticamente por meio de controle estatal.",
      "Que o uso de energias renováveis atingiu seu patamar máximo."
    ],
    correta: 1
  },
  {
    tema: "Justiça Climática",
    enunciado: "A justiça climática aponta que os impactos das mudanças ambientais afetam de forma desigual as populações mais vulneráveis socioeconomicamente.",
    pergunta: "Qual é o foco central do debate sobre justiça climática?",
    alternativas: [
      "Atribuir a culpa das mudanças climáticas unicamente aos cidadãos de baixa renda.",
      "Garantir que os grupos populacionais menos responsáveis históricos pela poluição não arquem com o maior ônus socioambiental.",
      "Impedir que países periféricos industrializem suas economias sob qualquer pretexto.",
      "Isentar corporações multinacionais de responsabilidade em desastres ecológicos."
    ],
    correta: 1
  },

  // --- Desigualdades, opressões e explorações ---
  {
    tema: "Desigualdade Social",
    enunciado: "A concentração de renda e o acesso desigual a oportunidades estruturam sociedades marcadas por profundos abismos socioeconômicos.",
    pergunta: "O combate efetivo às desigualdades estruturais exige prioritariamente:",
    alternativas: [
      "A caridade individual desprovida de investimentos em infraestrutura social.",
      "Políticas redistributivas, acesso universal à saúde, educação de qualidade e valorização do trabalho.",
      "A supressão de impostos sobre grandes fortunas e heranças.",
      "A naturalização da pobreza como fruto exclusivo do mérito individual."
    ],
    correta: 1
  },
  {
    tema: "Relações Étnico-Raciais",
    enunciado: "O racismo estrutural manifesta-se em práticas institucionais e culturais que perpetuam desvantagens históricas para populações negras e indígenas.",
    pergunta: "Quais ações configuram políticas de reparação e promoção da igualdade racial?",
    alternativas: [
      "A negação da existência do racismo na sociedade contemporânea.",
      "A implementação de ações afirmativas, valorização da história afro-brasileira/indígena e combate rigoroso à discriminação.",
      "A padronização cultural sem respeito às raízes ancestrais das minorias.",
      "A privatização de terras tradicionalmente ocupadas por povos originários."
    ],
    correta: 1
  },
  {
    tema: "Gênero e Diversidade",
    enunciado: "A divisão sexual do trabalho e a violência de gênero refletem assimetrias de poder históricas que limitam a autonomia feminina na sociedade.",
    pergunta: "O conceito de equidade de gênero busca alcançar:",
    alternativas: [
      "A exclusão dos homens de espaços decisórios públicos e privados.",
      "A igualdade de direitos, oportunidades e valorização social, respeitando as especificidades e eliminando barreiras machistas.",
      "A eliminação de qualquer discussão sobre diferenças biológicas ou sociais.",
      "A manutenção de papéis tradicionais rígidos na família e no trabalho."
    ],
    correta: 1
  },
  {
    tema: "Interseccionalidade",
    enunciado: "O conceito de interseccionalidade demonstra como marcadores sociais como raça, classe, gênero e sexualidade cruzam-se e intensificam experiências de opressão.",
    pergunta: "Por que a perspectiva interseccional é fundamental para a análise sociológica?",
    alternativas: [
      "Porque analisa cada opressão de forma isolada, sem conexão com as demais.",
      "Porque compreende que a vivência de discriminação de uma mulher negra da classe trabalhadora possui dinâmicas complexas e específicas.",
      "Porque simplifica a desigualdade social reduzindo-a unicamente à renda familiar.",
      "Porque desconsidera o fator econômico nas relações de poder."
    ],
    correta: 1
  },
  {
    tema: "Direitos LGBTQIA+",
    enunciado: "A garantia de direitos civis à população LGBTQIA+ representa um avanço na consolidação do princípio constitutional da dignidade da pessoa humana e da não discriminação.",
    pergunta: "Qual medida reforça o respeito à diversidade sexual e de gênero nas instituições?",
    alternativas: [
      "A omissão institucional diante de episódios de homotransfobia.",
      "A criação de protocolos de acolhimento, garantia do uso do nome social e combate implacável ao preconceito.",
      "A restrição de direitos civis básicos a casais homoafetivos.",
      "A patologização das identidades de gênero diversas."
    ],
    correta: 1
  },

  // --- Cultura, arte e comunicação ---
  {
    tema: "Patrimônio Cultural",
    enunciado: "O patrimônio cultural brasileiro compreende bens materiais e imateriais que portam a memória, a identidade e a diversidade dos diferentes grupos formadores da sociedade.",
    pergunta: "Como se classifica uma manifestação como o frevo ou o samba de roda no âmbito do patrimônio cultural?",
    alternativas: [
      "Como patrimônio cultural material, focado estritamente em monumentos de pedra.",
      "Como patrimônio cultural imaterial, salvaguardado por práticas, saberes, celebrações e formas de expressão.",
      "Como mercadoria industrializada destituída de valor histórico.",
      "Como bem público descartável passível de privatização irrestrita."
    ],
    correta: 1
  },
  {
    tema: "Indústria Cultural",
    enunciado: "A indústria cultural padroniza gostos e transforma bens simbólicos em mercadorias de consumo em massa, gerando debates sobre alienação e massificação.",
    pergunta: "Uma característica marcante da produção da indústria cultural é:",
    alternativas: [
      "O estímulo constante ao pensamento crítico e à reflexão profunda.",
      "A priorização do lucro, da repetição de fórmulas comerciais e do consumo acelerado de entretenimento.",
      "O resgate de manifestações artísticas populares locais e artesanais sem fins lucrativos.",
      "A rejeição absoluta de qualquer tecnologia de reprodução em massa."
    ],
    correta: 1
  },
  {
    tema: "Liberdade de Expressão",
    enunciado: "A liberdade de expressão é um pilar democrático fundamental, mas encontra limites jurídicos e éticos na proteção dos direitos alheios e da ordem democrática.",
    pergunta: "Onde se estabelece o limite ético e legal da liberdade de expressão?",
    alternativas: [
      "Na censura prévia exercida por governos autoritários sobre jornais.",
      "Na proibição de críticas a autoridades públicas de qualquer esfera.",
      "Na responsabilização por discursos de ódio, difamação, apologia à violência e atentados contra o Estado democrático.",
      "Na padronização de opiniões permitidas em redes sociais privadas."
    ],
    correta: 2
  },
  {
    tema: "Comunicação e Cidadania",
    enunciado: "A democratização dos meios de comunicação é essencial para que diferentes vozes da sociedade tenham acesso à produção e circulação de informações.",
    pergunta: "O pluralismo nos meios de comunicação de massa assegura:",
    alternativas: [
      "A concentração de monopólios informativos em poucas famílias ou corporações.",
      "A diversidade de pontos de vista, o contraditório e o direito do cidadão a uma informação plural e verificada.",
      "A eliminação de conteúdos educativos na programação diária.",
      "A submissão da imprensa aos interesses partidários temporários."
    ],
    correta: 1
  },
  {
    tema: "Arte e Educação",
    enunciado: "A presença da arte nos currículos educacionais estimula a sensibilidade, a expressão criativa, o repertório cultural e a leitura crítica do mundo.",
    pergunta: "Qual é a contribuição pedagógica da educação artística?",
    alternativas: [
      "Ensinar apenas técnicas manuais repetitivas sem conexão com a história.",
      "Desenvolver a percepção estética, a imaginação, o pensamento divergente e o diálogo intercultural.",
      "Servir unicamente como atividade recreativa para preencher horários vagos.",
      "Substituir o estudo de ciências exatas e humanas."
    ],
    correta: 1
  },

  // --- Ciência, tecnologia e inovação ---
  {
    tema: "Ética em Pesquisa",
    enunciado: "O avanço científico e tecnológico, especialmente em áreas como biotecnologia e inteligência artificial, impõe dilemas éticos profundos que exigem rigorosos comitês de controle.",
    pergunta: "O princípio fundamental da bioética e da ética em pesquisa envolve:",
    alternativas: [
      "A priorização do lucro corporativo acima da integridade de cobaias humanas ou animais.",
      "O respeito à dignidade humana, a beneficência, a não maleficência e a justiça nos experimentos.",
      "A autorregulamentação irrestrita por cientistas sem transparência pública.",
      "A eliminação de testes de segurança para acelerar patentes."
    ],
    correta: 1
  },
  {
    tema: "Inovação Tecnológica",
    enunciado: "A inovação tecnológica orientada para o desenvolvimento social busca solucionar problemas reais de comunidades vulneráveis, promovendo inclusão digital e produtiva.",
    pergunta: "O que caracteriza a inovação socialmente responsável?",
    alternativas: [
      "Desenvolver tecnologias inacessíveis financeiramente para a maioria da população.",
      "Criar soluções que atendam a demandas mercadológicas de elite sem impacto socioambiental.",
      "Focar no bem comum, na sustentabilidade, na acessibilidade e na melhoria da qualidade de vida coletiva.",
      "Automatizar processos industriais visando apenas a demissão em massa."
    ],
    correta: 2
  },
  {
    tema: "Letramento Científico",
    enunciado: "O letramento científico da população é um escudo contra a desinformação, o negacionismo científico e a proliferação de pseudociências em crises sanitárias.",
    pergunta: "Qual é o objetivo principal do letramento científico na sociedade?",
    alternativas: [
      "Transformar todos os cidadãos em pesquisadores acadêmicos de laboratório.",
      "Capacitar o cidadão comum a compreender evidências científicas, avaliar fontes e tomar decisões fundamentadas.",
      "Difundir dogmas inquestionáveis produzidos por corporações científicas.",
      "Incentivar o ceticismo absoluto em relação a qualquer método de pesquisa."
    ],
    correta: 1
  },
  {
    tema: "Inteligência Artificial",
    enunciado: "A ascensão de sistemas autônomos e algoritmos de aprendizado de máquina traz desafios relativos a vieses discriminatórios, privacidade e vigilância em massa.",
    pergunta: "Como garantir a justiça algorítmica no uso de inteligência artificial?",
    alternativas: [
      "Ocultando os critérios de programação das decisões algorítmicas ao público.",
      "Auditando bancos de dados para eliminar vieses preconceituosos, garantindo transparência e responsabilidade dos desenvolvedores.",
      "Permitindo que algoritmos tomem decisões judiciais ou médicas sem supervisão humana.",
      "Proibindo o uso de algoritmos em qualquer setor da economia."
    ],
    correta: 1
  },
  {
    tema: "Soberania Científica",
    enunciado: "Investir em ciência, tecnologia e inovação é um requisito incontornável para a soberania nacional e para a superação da dependência de tecnologias externas.",
    pergunta: "Qual política fortalece a soberania científica de um país?",
    alternativas: [
      "Desfinanciar universidades públicas e institutos federais de pesquisa.",
      "Fomentar o ecossistema de pesquisa básica e aplicada, garantindo bolsas, infraestrutura e cooperação universidade-empresa.",
      "Importar integralmente pacotes tecnológicos prontos sem domínio de código ou fabricação.",
      "Restringir o intercâmbio de pesquisadores brasileiros com centros internacionais."
    ],
    correta: 1
  },

  // --- Processos de globalização e política internacional ---
  {
    tema: "Globalização",
    enunciado: "A globalização econômica e cultural intensificou fluxos de capitais, mercadorias e informações, mas também aprofundou assimetrias entre países centrais e periféricos.",
    pergunta: "Qual é uma das principais contradições do processo de globalização contemporânea?",
    alternativas: [
      "A livre circulação irrestrita de trabalhadores migrantes em todas as fronteiras nacionais.",
      "A globalização do capital financeiro e das mercadorias, acompanhada pelo endurecimento de barreiras à imigração humana.",
      "A padronização absoluta das culturas locais sem resistência regional.",
      "A extinção completa dos Estados Nacionais soberanos."
    ],
    correta: 1
  },
  {
    tema: "Geopolítica Internacional",
    enunciado: "As relações internacionais contemporâneas passam por reconfigurações com o surgimento de novos polos de poder econômico e disputas tecnológicas estratégicas.",
    pergunta: "O multilateralismo nas relações internacionais caracteriza-se por:",
    alternativas: [
      "A imposição unilateral de sanções por uma única superpotência militar.",
      "A negociação conjunta, cooperação entre Estados e fortalecimento de organismos internacionais baseados em regras comuns.",
      "O isolacionismo comercial absoluto de nações em desenvolvimento.",
      "A formação exclusiva de blocos militares defensivos."
    ],
    correta: 1
  },
  {
    tema: "Crise dos Refugiados",
    enunciado: "Conflitos armados, perseguições políticas e catástrofes climáticas geram fluxos migratórios forçados de milhões de refugiados em busca de proteção internacional.",
    pergunta: "De acordo com os acordos internacionais humanitários, qual é o dever ético e jurídico frente aos refugiados?",
    alternativas: [
      "Repelir compulsoriamente os solicitantes de refúgio nas fronteiras sem análise de seus casos.",
      "Garantir o princípio da não devolução (non-refoulement) e oferecer acolhimento humanitário digno.",
      "Tratar refugiados como criminosos em situação irregular passíveis de encarceramento.",
      "Condicionar o refúgio à comprovação imediata de riqueza financeira."
    ],
    correta: 1
  },
  {
    tema: "Blocos Econômicos",
    enunciado: "A integração regional por meio de blocos econômicos visa ampliar mercados, facilitar o comércio e fortalecer a inserção internacional dos países membros.",
    pergunta: "Qual é a principal característica de um Mercado Comum (estágio mais avançado que uma simples união aduaneira)?",
    alternativas: [
      "A eliminação apenas de tarifas alfandegárias internas, mantendo tarifas externas distintas.",
      "A livre circulação de mercadorias, serviços, capitais e pessoas entre os países membros.",
      "A adoção obrigatória de uma moeda única em todas as etapas.",
      "A abolição total das soberanias legislativas nacionais."
    ],
    correta: 1
  },
  {
    tema: "Organismos Internacionais",
    enunciado: "Instituições como a ONU, a OMS e a OMC desempenham papéis centrais na governança global, embora enfrentem críticas quanto à sua eficácia e representatividade.",
    pergunta: "Qual é a principal função histórica da Organização das Nações Unidas (ONU)?",
    alternativas: [
      "Controlar os mercados financeiros e cambiais de países subdesenvolvidos.",
      "Manter a paz e a segurança internacionais, promover os direitos humanos e fomentar a cooperação socioeconômica.",
      "Legislar diretamente sobre leis civis e penais dos países soberanos.",
      "Atuar como tribunal penal com jurisdição obrigatória sobre todos os crimes do mundo."
    ],
    correta: 1
  },

  // --- Cidades, habitação e qualidade de vida ---
  {
    tema: "Direito à Cidade",
    enunciado: "O Estatuto da Cidade e a Constituição Federal consagram o direito à cidade sustentável, compreendido como o direito à terra urbana, moradia, saneamento e transporte.",
    pergunta: "O que preconiza o princípio da função social da propriedade urbana?",
    alternativas: [
      "Que o proprietário pode manter lotes vazios indefinidamente à espera de especulação imobiliária.",
      "Que a propriedade urbana deve atender às exigências fundamentais de ordenação da cidade, garantindo bem-estar coletivo e justiça ambiental.",
      "Que o Estado deve desapropriar todas as moradias particulares em áreas centrais.",
      "Que o mercado imobiliário deve ditar exclusivamente o zoneamento urbano."
    ],
    correta: 1
  },
  {
    tema: "Mobilidade Urbana",
    enunciado: "A priorização do transporte público coletivo de qualidade, do ciclomobilidade e dos pedestres é diretriz essencial para cidades humanas e sustentáveis.",
    pergunta: "Qual modelo de planejamento urbano reduz os impactos socioambientais negativos?",
    alternativas: [
      "Fomentar o uso exclusivo de veículos individuais motorizados com alargamento de vias.",
      "Investir em sistemas integrados de transporte público eficiente, ciclovias seguras e calçadas acessíveis.",
      "Expandir a mancha urbana horizontalmente sem infraestrutura básica.",
      "Isolar bairros residenciais de zonas comerciais por rodovias de alta velocidade."
    ],
    correta: 1
  },
  {
    tema: "Saneamento Básico",
    enunciado: "O acesso universal ao abastecimento de água, esgotamento sanitário, limpeza urbana e manejo de águas pluviais é indicador básico de dignidade humana e saúde pública.",
    pergunta: "A ausência de saneamento básico em periferias urbanas gera diretamente:",
    alternativas: [
      "Aumento da qualidade de vida e longevidade dos moradores locais.",
      "Proliferação de doenças de veiculação hídrica, degradação ambiental e perpetuação da exclusão social.",
      "Desenvolvimento econômico sustentável da região.",
      "Redução drástica nos gastos públicos com saúde."
    ],
    correta: 1
  },
  {
    tema: "Segregação Espacial",
    enunciado: "A especulação imobiliária e a falta de planejamento habitacional segregam populações de baixa renda para periferias desprovidas de infraestrutura urbana.",
    pergunta: "Como se manifesta espacialmente a segregação socioespacial nas metrópoles?",
    alternativas: [
      "Pela distribuição homogênea e igualitária de serviços públicos em todos os bairros.",
      "Pela concentração de investimentos públicos e infraestrutura em áreas centrais e de elite, relegando as periferias à precariedade.",
      "Pela integração completa entre habitações populares e condomínios de alto luxo.",
      "Pela inexistência de diferenças geográficas nas condições de moradia."
    ],
    correta: 1
  },
  {
    tema: "Habitação Social",
    enunciado: "A política habitacional voltada para famílias de baixa renda deve estar integrada à oferta de emprego, transporte, saúde e educação.",
    pergunta: "Um erro comum em políticas habitacionais do passado que deve ser evitado é:",
    alternativas: [
      "Construir conjuntos habitacionais em áreas periféricas isoladas, sem transporte, comércio ou equipamentos públicos.",
      "Localizar moradias populares em áreas centrais com acesso total à rede urbana consolidada.",
      "Envolver a comunidade beneficiada no planejamento dos projetos.",
      "Garantir a regularização fundiária de assentamentos informais."
    ],
    correta: 0
  },

  // --- Territórios, sociodiversidade e diversidade cultural ---
  {
    tema: "Territórios Indígenas",
    enunciado: "A demarcação de terras indígenas e quilombolas é uma exigência constitucional para a preservação da sociodiversidade e dos ecossistemas brasileiros.",
    pergunta: "Qual é a importância socioambiental dos territórios tradicionais demarcados?",
    alternativas: [
      "Impedir qualquer uso sustentável da floresta pelas comunidades locais.",
      "Atuar como barreiras naturais contra o desmatamento, preservando a biodiversidade e a sociodiversidade cultural.",
      "Liberar áreas para exploração mineradora intensiva sem restrições.",
      "Reduzir a soberania nacional sobre a região amazônica."
    ],
    correta: 1
  },
  {
    tema: "Sociodiversidade",
    enunciado: "A sociodiversidade brasileira engloba a multiplicidade de modos de vida, saberes tradicionais, línguas e visões de mundo dos povos originários e comunidades tradicionais.",
    pergunta: "O respeito à sociodiversidade implica:",
    alternativas: [
      "Assimilar culturalmente todas as comunidades indígenas à cultura urbana dominante.",
      "Reconhecer e proteger os direitos territoriais, culturais e políticos desses povos, valorizando seus saberes ancestrais.",
      "Transformar saberes tradicionais em mercadorias patenteadas por corporações sem consentimento.",
      "Isolar os povos tradicionais do contato com avanços da medicina e educação."
    ],
    correta: 1
  },
  {
    tema: "Patrimônio Etnográfico",
    enunciado: "O patrimônio etnográfico e oral de comunidades tradicionais guarda conhecimentos milenares sobre manejo da biodiversidade e fitoterapia.",
    pergunta: "O que caracteriza a biopirataria em territórios de sociodiversidade?",
    alternativas: [
      "A pesquisa científica realizada em parceria com anuência prévia e repartição de benefícios com as comunidades locais.",
      "A apropriação ilegal de recursos genéticos e conhecimentos tradicionais sem autorização ou compensação justa aos povos detentores.",
      "A conservação rigorosa de sementes crioulas em bancos comunitários.",
      "O intercâmbio cultural legítimo entre universidades e comunidades indígenas."
    ],
    correta: 1
  },
  {
    tema: "Territórios Quilombolas",
    enunciado: "As comunidades quilombolas representam a resistência histórica à escravidão e mantêm modos de vida vinculados à ancestralidade e ao território coletivo.",
    pergunta: "A titulação definitiva das terras quilombolas tem como objetivo:",
    alternativas: [
      "Transformar terras coletivas em propriedades privadas individuais comerciais.",
      "Reparar injustiças históricas, assegurando a subsistência física, cultural e a preservação do modo de vida tradicional.",
      "Desocupar áreas rurais para grandes projetos de monocultura agroexportadora.",
      "Extinguir a cultura afro-brasileira rural."
    ],
    correta: 1
  },
  {
    tema: "Diálogo Intercultural",
    enunciado: "O diálogo intercultural pressupõe relações horizontais entre diferentes matrizes culturais, combatendo o etnocentrismo e a imposição de uma cultura hegemônica.",
    pergunta: "Como se define uma postura etnocêntrica?",
    alternativas: [
      "Como o respeito mútuo e a valorização igualitária de todas as culturas.",
      "Como a tendência de julgar outras culturas a partir dos valores e padrões da sua própria cultura, considerada superior.",
      "Como o estudo científico imparcial das tradições populares.",
      "Como a abertura completa para o sincretismo cultural."
    ],
    correta: 1
  },

  // --- Acessibilidade e inclusão social ---
  {
    tema: "Desenho Universal",
    enunciado: "O desenho universal consiste na concepção de produtos, ambientes, programas e serviços a serem usados por todas as pessoas, na maior medida possível, sem necessidade de adaptação.",
    pergunta: "Qual é o principal objetivo do desenho universal na arquitetura e no urbanismo?",
    alternativas: [
      "Criar soluções segregadas e exclusivas para pessoas com deficiência física.",
      "Garantir autonomia, segurança e conforto a todos os cidadãos, independentemente de idade, estatura ou mobilidade.",
      "Reduzir custos de construção utilizando materiais de baixa qualidade.",
      "Padronizar edifícios sem considerar rampas ou elevadores."
    ],
    correta: 1
  },
  {
    tema: "Inclusão e PCD",
    enunciado: "O Estatuto da Pessoa com Deficiência assegura e promove condições de igualdade para o exercício de direitos e liberdades fundamentais.",
    pergunta: "Segundo o modelo social da deficiência adotado pela legislação contemporânea, a deficiência resulta:",
    alternativas: [
      "Exclusivamente de limitações biológicas ou orgânicas inerentes ao indivíduo.",
      "Da interação entre os impedimentos corporais do indivíduo e as barreiras atitudinais, arquitetônicas e comunicacionais da sociedade.",
      "De castigos ou contingências históricas inevitáveis.",
      "Da falta de esforço pessoal para superação de obstáculos."
    ],
    correta: 1
  },
  {
    tema: "Tecnologia Assistiva",
    enunciado: "As tecnologias assistivas englobam produtos, recursos, metodologias e serviços que promovem a funcionalidade relacionada à atividade de pessoas com deficiência.",
    pergunta: "Dê um exemplo prático de aplicação de tecnologia assistiva na educação:",
    alternativas: [
      "Proibir o uso de softwares leitores de tela em computadores de bibliotecas.",
      "Disponibilizar softwares leitores de tela, intérpretes de Libras, teclados adaptados e materiais em Braille.",
      "Exigir que alunos com deficiência visual acompanhem aulas exclusivamente por leitura oral sem apoio.",
      "Eliminar o uso de computadores nas salas de aula."
    ],
    correta: 1
  },
  {
    tema: "Barreiras Atitudinais",
    enunciado: "As barreiras atitudinais constituem um dos maiores entraves à inclusão social, manifestando-se em preconceitos, estigmas e estereótipos contra minorias.",
    pergunta: "Como combater efetivamente as barreiras atitudinais na sociedade?",
    alternativas: [
      "Isolando grupos estigmatizados em instituições especializadas fechadas.",
      "Promovendo campanhas educativas, conscientização pública, convivência plural e legislação antidiscriminatória rigorosa.",
      "Ignorando os preconceitos sob a premissa de que o tempo os resolverá.",
      "Proibindo o debate sobre inclusão em ambientes corporativos e escolares."
    ],
    correta: 1
  },
  {
    tema: "Acessibilidade Digital",
    enunciado: "A acessibilidade digital garante que sites, aplicativos e documentos na internet possam ser compreendidos e navegados por pessoas com deficiência visual, motora ou cognitiva.",
    pergunta: "Qual requisito é essencial para a acessibilidade em portais web governamentais?",
    alternativas: [
      "Uso exclusivo de animações sem legendas ou textos alternativos.",
      "Compatibilidade com leitores de tela, contraste adequado de cores, legendas em vídeos e navegação por teclado.",
      "Exigência de cliques rápidos do mouse em áreas minúsculas da tela.",
      "Fontes ilegíveis e cores berrantes para chamar atenção."
    ],
    correta: 1
  },

  // --- Promoção da saúde e prevenção de doenças ---
  {
    tema: "Princípios do SUS",
    enunciado: "O SUS consagra a saúde como direito fundamental de todo cidadão e dever do Estado, estruturando-se com base na universalidade, equidade e integralidade.",
    pergunta: "O que significa o princípio da equidade no âmbito do Sistema Único de Saúde?",
    alternativas: [
      "Tratar todos os pacientes exatamente da mesma forma, independentemente de sua condição social ou gravidade.",
      "Oferecer mais recursos e atenção àqueles que mais necessitam, reduzindo desigualdades sistêmicas de acesso.",
      "Cobrar taxas moderadas de atendimento de acordo com a renda familiar.",
      "Priorizar pacientes com planos de saúde privados na rede pública."
    ],
    correta: 1
  },
  {
    tema: "Promoção da Saúde",
    enunciado: "A promoção da saúde vai além da assistência médica curativa, englobando determinantes sociais como saneamento, habitação, educação, renda e qualidade de vida.",
    pergunta: "Qual ação caracteriza uma estratégia de promoção da saúde de base comunitária?",
    alternativas: [
      "Construir apenas hospitais de alta complexidade focados em cirurgias de emergência.",
      "Incentivar a prática de atividades físicas, alimentação saudável, saneamento ambiental e espaços públicos de lazer.",
      "Distribuir medicamentos controlados sem acompanhamento clínico.",
      "Isolar comunidades afetadas por epidemias sem orientações preventivas."
    ],
    correta: 1
  },
  {
    tema: "Vigilância Epidemiológica",
    enunciado: "A vigilância epidemiológica fornece informações indispensáveis para a tomada de decisão em saúde pública, prevenindo surtos e epidemias.",
    pergunta: "Qual é o papel fundamental das campanhas de vacinação em massa na saúde coletiva?",
    alternativas: [
      "Garantir lucro para laboratórios farmacêuticos internacionais exclusivamente.",
      "Alcançar a imunidade de rebanho, erradicar doenças infectocontagiosas e proteger populações vulneráveis.",
      "Substituir hábitos de higiene pessoal por imunização química.",
      "Testar experimentalmente vacinas sem comprovação científica."
    ],
    correta: 1
  },
  {
    tema: "Saúde Mental",
    enunciado: "A reforma psiquiátrica brasileira substituiu o modelo manicomial excludente pela atenção psicossocial territorial, humanizada e centrada na liberdade.",
    pergunta: "Qual é a diretriz central da Rede de Atenção Psicossocial (RAPS)?",
    alternativas: [
      "Internar pacientes psiquiátricos em hospitais isolados por tempo indeterminado.",
      "Oferecer cuidado em liberdade por meio de Centros de Atenção Psicossocial (CAPS), reabilitação e inclusão social.",
      "Criminalizar o sofrimento psíquico em delegacias especializadas.",
      "Tratar transtornos mentais unicamente com medicação sem suporte terapêutico."
    ],
    correta: 1
  },
  {
    tema: "Determinantes Sociais",
    enunciado: "Os determinantes sociais da saúde demonstram que o adoecimento e a longevidade estão diretamente ligados às condições de vida, trabalho e renda das pessoas.",
    pergunta: "Por que as políticas de combate à pobreza impactam diretamente os indicadores de saúde pública?",
    alternativas: [
      "Porque a renda elevada elimina a ocorrência de doenças genéticas.",
      "Porque melhores condições de vida reduzem a exposição a vetores de doenças, garantem nutrição adequada e acesso a saneamento.",
      "Porque desobrigam o Estado de investir em hospitais públicos.",
      "Porque transferem a responsabilidade sanitária inteiramente para o indivíduo."
    ],
    correta: 1
  },

  // ==================== BLOCO 2 (51 a 100) ====================
  // --- Ética, democracia, cidadania e direitos humanos ---
  {
    tema: "Combate à Corrupção",
    enunciado: "A integridade na administração pública exige mecanismos transparentes de controle interno e externo, além de leis rígidas de combate ao conflito de interesses e ao nepotismo.",
    pergunta: "Qual mecanismo amplia o controle social da gestão pública de forma transparente?",
    alternativas: [
      "O sigilo de cem anos sobre todas as compras estatais de grande porte.",
      "Portais de transparência funcionais e leis de acesso à informação acessíveis a qualquer cidadão.",
      "A restrição da auditoria de contas públicas apenas a órgãos internos do governo.",
      "A proibição de transmissões ao vivo de reuniões de conselhos municipais e estaduais."
    ],
    correta: 1
  },
  {
    tema: "Estado laico",
    enunciado: "O princípio da laicidade do Estado assegura a separação entre instituições religiosas e governamentais, garantindo a liberdade de crença e de não crença.",
    pergunta: "Em um Estado laico, a atuação do governo deve pautar-se por:",
    alternativas: [
      "Favorecer a religião majoritária em editais de fomento e currículos de escolas públicas.",
      "Proibir manifestações religiosas privadas em espaços urbanos.",
      "Manter neutralidade religiosa, tratando todos os dogmas ou o ateísmo com igual respeito e isenção legal.",
      "Submeter a aprovação de leis civis à concordância de líderes religiosos estaduais."
    ],
    correta: 2
  },
  {
    tema: "Direitos da Infância",
    enunciado: "O Estatuto da Criança e do Adolescente (ECA) adota a doutrina da proteção integral, considerando crianças e adolescentes como sujeitos de direitos em desenvolvimento.",
    pergunta: "A responsabilidade pela garantia absoluta dos direitos da infância recai sobre:",
    alternativas: [
      "Exclusivamente sobre a família nuclear biológica.",
      "De forma compartilhada e prioritária sobre a família, a sociedade e o Estado.",
      "Apenas sobre os órgãos de assistência social e conselhos tutelares.",
      "Unicamente sobre a escola e as instituições religiosas."
    ],
    correta: 1
  },

  // --- Estado, sociedade e trabalho ---
  {
    tema: "Trabalho Análogo à Escravidão",
    enunciado: "A erradicação do trabalho escravo contemporâneo é compromisso do Estado brasileiro, manifestando-se por servidão por dívida, condições degradantes e jornadas exaustivas.",
    pergunta: "O conceito legal moderno de trabalho em condições análogas às de escravo abrange:",
    alternativas: [
      "Apenas situações em que há o aprisionamento físico do trabalhador com correntes.",
      "Submissão a trabalho forçado, jornada exaustiva, condições degradantes de labor ou restrição de locomoção por dívida.",
      "Exclusivamente a ausência de carteira de trabalho assinada no setor informal.",
      "Qualquer relação de emprego em que o salário seja inferior ao mínimo estipulado."
    ],
    correta: 1
  },
  {
    tema: "Economia Solidária",
    enunciado: "A economia solidária surge como alternativa autogestionária ao modelo capitalista tradicional, fundamentando-se na cooperação, na distribuição justa e no respeito ao meio ambiente.",
    pergunta: "Uma característica central de um empreendimento de economia solidária é:",
    alternativas: [
      "A hierarquia rígida com concentração de lucros nos diretores proprietários.",
      "A autogestão democrática, em que cada trabalhador tem direito a voto e participação nos resultados.",
      "A dependência exclusiva de subsídios a fundo perdido do Estado.",
      "O foco na maximização dos lucros mesmo que prejudique a comunidade vizinha."
    ],
    correta: 1
  },
  {
    tema: "Terceirização do Trabalho",
    enunciado: "A flexibilização das leis trabalhistas permitiu a terceirização de atividades-fim, alterando o perfil das relações de emprego e a representação sindical.",
    pergunta: "Um dos impactos frequentemente associados à terceirização irrestrita do trabalho é:",
    alternativas: [
      "A garantia automática de salários mais elevados para os contratados terceirizados.",
      "A fragmentação da organização sindical e a maior rotatividade nos postos de trabalho.",
      "A erradicação completa dos acidentes de trabalho nas empresas contratantes.",
      "O aumento do vínculo afetivo e da estabilidade no emprego."
    ],
    correta: 1
  },

  // --- Educação e desenvolvimento humano e social ---
  {
    tema: "Analfa-Letramento",
    enunciado: "O analfabetismo funcional caracteriza a incapacidade de compreender, interpretar e aplicar textos simples e operações matemáticas na vida cotidiana e profissional.",
    pergunta: "O combate ao analfabetismo funcional exige das políticas educacionais:",
    alternativas: [
      "Focar apenas na decodificação mecânica de letras e números nos primeiros anos.",
      "Desenvolver habilidades de leitura crítica, interpretação de texto e raciocínio lógico contextualizado.",
      "Reduzir o tempo de escolarização obrigatória para jovens e adultos.",
      "Priorizar o ensino de línguas estrangeiras antes do domínio do idioma pátrio."
    ],
    correta: 1
  },
  {
    tema: "Autonomia Pedagógica",
    enunciado: "O educador Paulo Freire defendia a educação como prática da liberdade, criticando o modelo bancário em que o conhecimento é apenas 'depositado' no aluno.",
    pergunta: "Na concepção freiriana de educação, o processo de ensino deve fundamentar-se:",
    alternativas: [
      "Na memorização passiva de conteúdos distantes da realidade do educando.",
      "No diálogo, na valorização dos saberes prévios dos estudantes e na problematização do mundo.",
      "Na autoridade inquestionável do professor sobre a turma.",
      "Na utilização exclusiva de materiais didáticos internacionais padronizados."
    ],
    correta: 1
  },
  {
    tema: "EAD e Inclusão",
    enunciado: "A expansão do Ensino a Distância (EAD) ampliou o acesso ao ensino superior, mas trouxe questionamentos sobre a qualidade pedagógica e a exclusão digital.",
    pergunta: "Para que a modalidade EAD promova inclusão social efetiva, ela deve assegurar:",
    alternativas: [
      "A eliminação de tutoria humana e de momentos de interação síncrona.",
      "Acesso amplo à internet de alta velocidade, plataformas acessíveis e mediação pedagógica de qualidade.",
      "A aprovação automática de alunos para reduzir a evasão universitária.",
      "A substituição integral de aulas laboratoriais e práticas presenciais por vídeos de curta duração."
    ],
    correta: 1
  },

  // --- Meio ambiente, mudanças climáticas e desafios socioambientais ---
  {
    tema: "Economia Circular",
    enunciado: "O modelo de economia circular opõe-se à lógica linear do 'extrair, produzir, descartar', propondo a reutilização, a reciclagem e a regeneração de sistemas naturais.",
    pergunta: "Qual prática industrial está diretamente alinhada aos princípios da economia circular?",
    alternativas: [
      "Projetar produtos com obsolescência programada para incentivar o consumo frequente.",
      "Desenvolver produtos reparáveis, desmontáveis e com logística reversa de insumos e embalagens.",
      "Descartar efluentes não tratados em aterros sanitários municipais.",
      "Incentivar o uso de plásticos de uso único (descartáveis) em larga escala."
    ],
    correta: 1
  },
  {
    tema: "Biodiversidade Brasileira",
    enunciado: "O Brasil abriga a maior biodiversidade do planeta, distribuída em biomas ricos como Amazônia, Cerrado, Caatinga, Mata Atlântica, Pantanal e Pampa.",
    pergunta: "A preservação do bioma Cerrado é crucial para a segurança hídrica nacional porque:",
    alternativas: [
      "Atua como a 'caixa d'água' do Brasil, abrigando nascentes das principais bacias hidrográficas do país.",
      "É o único bioma brasileiro com índice pluviométrico constante durante todo o ano.",
      "Impede a formação de secas no semiárido nordestino sem necessidade de intervenção.",
      "Possui a maior extensão de florestas tropicais densas e inundáveis do mundo."
    ],
    correta: 0
  },
  {
    tema: "Desastres Socioambientais",
    enunciado: "Desastres associados ao rompimento de barragens de mineração evidenciam a necessidade de fiscalização rígida e aplicação do princípio do poluidor-pagador.",
    pergunta: "O princípio ambiental do poluidor-pagador estabelece que:",
    alternativas: [
      "A empresa poluidora pode poluir livremente desde que pague uma taxa prévia ao governo.",
      "O causador do dano ambiental deve arcar integralmente com os custos de prevenção, reparação e indenização socioambiental.",
      "O Estado assume todos os prejuízos ambientais causados por empresas privadas falidas.",
      "As comunidades atingidas devem pagar pelas obras de recuperação de sua região."
    ],
    correta: 1
  },

  // --- Desigualdades, opressões e explorações ---
  {
    tema: "Etarismo",
    enunciado: "O etarismo ou idadismo refere-se ao preconceito e à discriminação baseados na idade, afetando especialmente pessoas idosas em ambientes sociais e profissionais.",
    pergunta: "Qual medida combate a discriminação por idade no mercado de trabalho?",
    alternativas: [
      "Estabelecer limites máximos de idade para contratação em processos seletivos privados.",
      "Adotar seleções cegas sem idade nos currículos e valorizar a experiência e a diversidade geracional nas equipes.",
      "Incentivar a aposentadoria compulsória precoce em todas as áreas técnicas.",
      "Segregar trabalhadores idosos em setores isolados da empresa."
    ],
    correta: 1
  },
  {
    tema: "Fome e Segurança Alimentar",
    enunciado: "A soberania e a segurança alimentar garantem o direito de todos ao acesso regular e permanente a alimentos de qualidade e em quantidade suficiente.",
    pergunta: "Qual fator contribui diretamente para a insegurança alimentar grave em um país produtor de alimentos?",
    alternativas: [
      "A promoção da agricultura familiar orgânica de subsistência.",
      "A priorização da exportação de commodities agrícolas em detrimento do abastecimento do mercado interno com alimentos básicos.",
      "O fortalecimento de estoques reguladores públicos de alimentos.",
      "A distribuição de refeições gratuitas em restaurantes populares."
    ],
    correta: 1
  },
  {
    tema: "Pessoas em Situação de Rua",
    enunciado: "O aumento da população em situação de rua nos grandes centros urbanos reflete o desemprego, a especulação imobiliária e a ausência de redes de proteção social.",
    pergunta: "A abordagem de políticas públicas baseada na metodologia 'Housing First' (Moradia Primeiro) defende:",
    alternativas: [
      "Exigir a cura de vícios ou o emprego formal como pré-requisito para acesso a um teto.",
      "Garantir imediatamente uma moradia segura e permanente como ponto de partida para a restauração da dignidade e saúde do indivíduo.",
      "Internar compulsoriamente todas as pessoas em situação de rua em abrigos distantes.",
      "Remover à força populações de rua de áreas turísticas e comerciais."
    ],
    correta: 1
  },

  // --- Cultura, arte e comunicação ---
  {
    tema: "Cultura Digital",
    enunciado: "A cultura digital transformou a criação, a circulação e o consumo de conteúdos artísticos, redefinindo o papel das redes sociais e do streaming na sociedade.",
    pergunta: "Como a mediação por algoritmos de recomendação afeta o consumo cultural nas redes?",
    alternativas: [
      "Ampliando a diversidade de escolhas espontâneas do usuário sem qualquer filtro prévio.",
      "Tendendo a criar 'bolhas de informação' e hiper-especialização do gosto com base em hábitos anteriores de consumo.",
      "Garantindo remuneração igualitária para todos os artistas independentes.",
      "Eliminando completamente a influência do marketing na música e no cinema."
    ],
    correta: 1
  },
  {
    tema: "Diversidade Linguística",
    enunciado: "Além do português, o Brasil possui dezenas de línguas indígenas, línguas de sinais e variantes regionais que compõem seu patrimônio imaterial.",
    pergunta: "O reconhecimento de línguas indígenas como cooficiais em municípios brasileiros visa:",
    alternativas: [
      "Substituir o ensino da língua portuguesa nas escolas públicas locais.",
      "Preservar a diversidade linguística, garantir direitos de cidadania e acesso aos serviços públicos na língua materna dos munícipes.",
      "Isolar linguisticamente a população originária dos centros urbanos.",
      "Proibir o uso de dialetos regionais na administração pública."
    ],
    correta: 1
  },
  {
    tema: "Desinformação e Fake News",
    enunciado: "A proliferação de notícias falsas em ambientes digitais ameaça processos eleitorais, campanhas de vacinação e a coesão social.",
    pergunta: "Qual é a estratégia mais duradoura para combater a desinformação na sociedade?",
    alternativas: [
      "Bloquear o acesso à internet em todo o território nacional durante crises.",
      "Promover a educação para as mídias (literacia mediática), ensinando os cidadãos a checar fontes e checar fatos.",
      "Entregar o controle absoluto da verdade a agências estatais sem fiscalização.",
      "Proibir discussões políticas em redes sociais privadas."
    ],
    correta: 1
  },

  // --- Ciência, tecnologia e inovação ---
  {
    tema: "Software Livre",
    enunciado: "A filosofia do software livre e do conhecimento aberto defende a liberdade de executar, copiar, distribuir, estudar, mudar e melhorar programas de computador.",
    pergunta: "A adoção de software livre em órgãos governamentais proporciona como benefício direto:",
    alternativas: [
      "A dependência de licenças proprietárias caras de fornecedores estrangeiros.",
      "A redução de custos com licenças, maior auditabilidade, segurança de dados e soberania tecnológica.",
      "A proibição de modificação do código-fonte por técnicos nacionais.",
      "A obrigatoriedade de pagamento de royalties mensais a corporações internacionais."
    ],
    correta: 1
  },
  {
    tema: "Biotecnologia e Transgênicos",
    enunciado: "O uso de organismos geneticamente modificados (OGMs) na agricultura gera controvérsias quanto à produtividade, segurança alimentar e impactos ambientais.",
    pergunta: "Qual é uma preocupação socioambiental associada ao uso massivo de sementes transgênicas?",
    alternativas: [
      "A perda de variabilidade genética das culturas tradicionais e o aumento da dependência de agricultores frente a patentes de multinacionais.",
      "A eliminação completa da necessidade de defensivos agrícolas nas lavouras.",
      "A redução da produtividade de grãos por hectare em comparação com sementes crioulas.",
      "A impossibilidade de comercialização desses grãos no mercado internacional."
    ],
    correta: 0
  },
  {
    tema: "Propriedade Intelectual",
    enunciado: "A concessão de patentes busca incentivar a inovação garantindo exclusividade temporária, mas deve ser equilibrada com o interesse público e o direito à saúde.",
    pergunta: "O mecanismo da 'licença compulsória' (quebra de patente) em saúde pública permite:",
    alternativas: [
      "A apropriação indevida de patentes para comercialização com lucro em países ricos.",
      "A produção nacional ou importação de medicamentos genéricos sem o consentimento do titular da patente em caso de emergência nacional.",
      "A proibição de pesquisas científicas com fármacos importados.",
      "O cancelamento de todas as marcas registradas no mercado alimentício."
    ],
    correta: 1
  },

  // --- Processos de globalização e política internacional ---
  {
    tema: "Acordo de Paris",
    enunciado: "O Acordo de Paris é um tratado internacional sobre mudanças climáticas que visa limitar o aquecimento global a bem menos de 2°C acima dos níveis pré-industriais.",
    pergunta: "Para cumprir suas metas no Acordo de Paris, o Brasil deve priorizar:",
    alternativas: [
      "Expandir o desmatamento ilegal na Amazônia para aumentar a área de pastagem.",
      "Zerar o desmatamento ilegal, promover o reflorestamento e expandir fontes renováveis na matriz de energia.",
      "Aumentar a queima de carvão mineral nas usinas termoelétricas estaduais.",
      "Substituir o transporte ferroviário por caminhões movidos a diesel."
    ],
    correta: 1
  },
  {
    tema: "Guerra Fiscal",
    enunciado: "A concorrência entre municípios e estados para atrair investimentos mediante isenções fiscais é conhecida como guerra fiscal.",
    pergunta: "Uma consequência negativa da guerra fiscal desregrada entre entes federativos é:",
    alternativas: [
      "O aumento substancial da arrecadação de impostos em todas as cidades envolvidas.",
      "A renúncia de receitas públicas vitais que compromete o financiamento de serviços de saúde e educação.",
      "O equilíbrio econômico imediato de todas as regiões periféricas.",
      "A eliminação da desigualdade regional no país."
    ],
    correta: 1
  },
  {
    tema: "Comércio Internacional",
    enunciado: "O protecionismo comercial envolve a imposição de tarifas e barreiras alfandegárias para proteger indústrias nacionais da concorrência estrangeira.",
    pergunta: "Qual é o objetivo central de um país ao adotar medidas protecionistas pontuais?",
    alternativas: [
      "Estimular a entrada maciça de produtos importados de baixo custo.",
      "Proteger empresas e empregos domésticos em setores estratégicos contra a competição externa agressiva.",
      "Abolir os impostos sobre a exportação de matérias-primas brutas.",
      "Submeter a economia do país às regras de um único parceiro comercial."
    ],
    correta: 1
  },

  // --- Cidades, habitação e qualidade de vida ---
  {
    tema: "Gentrificação",
    enunciado: "O fenômeno da gentrificação ocorre quando áreas urbanas valorizam-se rapidamente por intervenções imobiliárias, encarecendo o custo de vida local.",
    pergunta: "Qual é o principal impacto social da gentrificação em bairros históricos ou periféricos?",
    alternativas: [
      "A fixação definitiva das famílias tradicionais de baixa renda no bairro.",
      "A expulsão indireta de moradores antigos e comerciantes locais devido ao aumento de aluguéis e impostos.",
      "A democratização do acesso à moradia popular no centro da cidade.",
      "A redução do valor de mercado dos imóveis da região afetada."
    ],
    correta: 1
  },
  {
    tema: "Cidades Inteligentes",
    enunciado: "O conceito de Cidade Inteligente (Smart City) utiliza tecnologia e dados para otimizar serviços urbanos, transporte, energia e governança.",
    pergunta: "Uma Cidade Inteligente sustentável deve priorizar:",
    alternativas: [
      "Apenas a instalação de câmeras de vigilância privadas em bairros ricos.",
      "A inclusão digital, a eficiência energética, a participação cidadã e o uso de dados para resolver problemas urbanos reais.",
      "A substituição de parques e áreas verdes por antenas de transmissão 5G.",
      "A automação de serviços cobrados com exclusão de populações sem smartphone."
    ],
    correta: 1
  },

  // --- Territórios, sociodiversidade e diversidade cultural ---
  {
    tema: "Povos da Floresta",
    enunciado: "Chico Mendes liderou o movimento dos seringueiros na Amazônia, propondo a criação de Reservas Extrativistas (Resex) como modelo de desenvolvimento sustentável.",
    pergunta: "As Reservas Extrativistas (Resex) caracterizam-se por ser áreas de domínio público cujo uso é concedido a comunidades extrativistas tradicionais para:",
    alternativas: [
      "A desmatamento total visando a pecuária extensiva de corte.",
      "A exploração sustentável dos recursos naturais aliada à conservação da natureza e da cultura local.",
      "A instalação de complexos industriais de celulose multinacionais.",
      "A venda de lotes individuais de terra no mercado imobiliário."
    ],
    correta: 1
  },
  {
    tema: "Comunidades Ranzinzas/Ribeirinhas",
    enunciado: "As populações ribeirinhas da Amazônia possuem um profundo conhecimento adaptativo sobre os ciclos de cheia e seca dos rios, praticando a pesca e a agricultura de várzea.",
    pergunta: "A construção de grandes usinas hidrelétricas em rios amazônicos gera para as comunidades ribeirinhas:",
    alternativas: [
      "A preservação intacta de seus territórios de pesca e modos de vida tradicionais.",
      "O deslocamento forçado, a alteração dos estoques pesqueiros e a perda de referências culturais ancestrais.",
      "A garantia de energia elétrica gratuita e ilimitada para todos os moradores locais.",
      "O aumento imediato do turismo ecológico sustentável sem impactos ambientais."
    ],
    correta: 1
  },

  // --- Acessibilidade e inclusão social ---
  {
    tema: "Libras e Cidadania",
    enunciado: "A Língua Brasileira de Sinais (Libras) é reconhecida por lei como meio legal de comunicação e expressão da comunidade surda do Brasil.",
    pergunta: "A presença de tradutores e intérpretes de Libras em órgãos públicos, escolas e telejornais assegura:",
    alternativas: [
      "Uma concessão assistencialista opcional sem respaldo legal.",
      "O direito constitucional à informação, à comunicação acessível e ao exercício pleno da cidadania pela pessoa surda.",
      "A substituição do ensino da língua portuguesa escrita nas escolas formais.",
      "A exclusão de pessoas cegas da transmissão de dados digitais."
    ],
    correta: 1
  },
  {
    tema: "Neurodiversidade",
    enunciado: "O conceito de neurodiversidade reconhece condições como o Transtorno do Espectro Autista (TEA) e o TDAH como variações naturais do cérebro humano, e não como deficiências a serem 'curadas'.",
    pergunta: "Uma postura inclusiva em relação a pessoas neurodivergentes no ambiente acadêmico envolve:",
    alternativas: [
      "Exigir adaptação total ao padrão neurotípico tradicional sob ameaça de reprovação.",
      "Promover acomodações razoáveis, como ambientes sensoriais amigáveis, tempo adicional para exames e comunicação clara.",
      "Isolar estudantes autistas em turmas exclusivas de educação especial sem convívio social.",
      "Ignorar relatórios diagnósticos para evitar o que chamam de 'privilégios'."
    ],
    correta: 1
  },

  // --- Promoção da saúde e prevenção de doenças ---
  {
    tema: "Redução de Danos",
    enunciado: "A estratégia de Redução de Danos em saúde pública busca minimizar os prejuízos sociais e à saúde associados ao uso de substâncias psicoativas, sem necessariamente exigir a abstinência imediata.",
    pergunta: "Um princípio norteador das políticas de redução de danos é:",
    alternativas: [
      "A criminalização e estigmatização severa do usuário como forma de coerção ao tratamento.",
      "O respeito aos direitos humanos, o acolhimento sem julgamentos morais e a oferta de insumos de proteção à saúde.",
      "A internação forçada compulsória sem avaliação médica individualizada.",
      "A recusa de atendimento médico a usuários em crise nos prontos-socorros."
    ],
    correta: 1
  },
  {
    tema: "Segurança no Trabalho",
    enunciado: "A saúde do trabalhador é ramo da saúde pública que estuda os impactos dos ambientes de trabalho sobre a saúde física e mental dos profissionais.",
    pergunta: "A Síndrome de Burnout (esgotamento profissional) foi reconhecida pela OMS como fenômeno ocupacional decorrente de:",
    alternativas: [
      "Fragilidade psicológica individual não relacionada ao ambiente de trabalho.",
      "Estresse crônico no trabalho que não foi administrado com sucesso, caracterizado por exaustão, cinismo e ineficácia.",
      "Falta de ambição pessoal do trabalhador em alcançar metas corporativas.",
      "Excesso de horas de lazer fora do expediente comercial."
    ],
    correta: 1
  },

  // --- Questões Complementares Mistas ---
  {
    tema: "Democracia Representativa",
    enunciado: "O sistema proporcional de voto utilizado nas eleições para deputados e vereadores visa garantir a representação de diferentes correntes de opinião na sociedade.",
    pergunta: "Diferente do sistema majoritário, o sistema proporcional distribui cadeiras com base no:",
    alternativas: [
      "Total de votos recebidos individualmente pelo candidato mais idoso da disputa.",
      "Desempenho eleitoral conjunto do partido ou federação (Quociente Eleitoral).",
      "Sorteio público auditado entre os concorrentes mais votados.",
      "Volume de recursos arrecadados durante a campanha eleitoral."
    ],
    correta: 1
  },
  {
    tema: "Tributação Progressiva",
    enunciado: "A justiça fiscal preconiza que os tributos devem ser cobrados de acordo com a capacidade contributiva de cada cidadão (princípio da progressividade).",
    pergunta: "Um sistema tributário considerado regressivo é aquele em que:",
    alternativas: [
      "As alíquotas de imposto aumentam à medida que a renda ou riqueza do contribuinte cresce.",
      "A carga tributária incide proporcionalmente mais sobre o consumo de alimentos básicos, pesando mais sobre os mais pobres.",
      "Grandes fortunas e lucros divididos são taxados com as maiores alíquotas do país.",
      "Isenções fiscais são concedidas exclusivamente a famílias em extrema pobreza."
    ],
    correta: 1
  },
  {
    tema: "Segurança Pública e Direitos",
    enunciado: "A segurança pública é dever do Estado, direito e responsabilidade de todos, devendo ser exercida com estrito respeito às garantias constitucionais.",
    pergunta: "O modelo de policiamento comunitário orienta-se pela:",
    alternativas: [
      "Atuação repressiva militarizada focada exclusivamente no confronto armado em áreas periféricas.",
      "Parceria e integração entre a polícia e a comunidade para prevenção do crime e resolução de problemas locais.",
      "Privatização dos serviços de segurança pública em bairros residenciais.",
      "Suspensão de mandados judiciais de busca e apreensão domiciliar."
    ],
    correta: 1
  },
  {
    tema: "Trabalho Doméstico",
    enunciado: "A PEC das Domésticas (Emenda Constitucional nº 72/2013) equiparou os direitos dos trabalhadores domésticos aos demais trabalhadores urbanos e rurais no Brasil.",
    pergunta: "A partir da consolidação desses direitos, os trabalhadores domésticos passaram a ter direito a:",
    alternativas: [
      "Jornada de trabalho ilimitada sem pagamento de horas extras.",
      "FGTS obrigatório, limite de jornada de 44 horas semanais, adicional noturno e pagamento de hora extra.",
      "Salário inferior ao mínimo caso residam no local de trabalho.",
      "Contratação verbal sem obrigatoriedade de assinatura na carteira de trabalho."
    ],
    correta: 1
  },
  {
    tema: "Violência Obstétrica",
    enunciado: "A humanização do parto busca eliminar práticas desnecessárias e violentas durante o pré-parto, parto e puerpério, respeitando a autonomia da gestante.",
    pergunta: "Constitui exemplo de violência obstétrica sofrida pela mulher nas instituições de saúde:",
    alternativas: [
      "O direito ao acompanhante de livre escolha da gestante durante todo o trabalho de parto.",
      "A realização de procedimentos invasivos dolorosos sem consentimento informado ou ofensas verbais à parturiente.",
      "O contato pele a pele imediato entre a mãe e o recém-nascido saudável.",
      "O alívio da dor oferecido mediante métodos não farmacológicos."
    ],
    correta: 1
  },
  {
    tema: "Crise Climática e Cidades",
    enunciado: "Eventos climáticos extremos como tempestades e ondas de calor severas exigem planos estaduais e municipais de adaptação das cidades.",
    pergunta: "Uma medida eficaz de infraestrutura verde para mitigar enchentes urbanas é:",
    alternativas: [
      "Canalizar e retificar rios e cobrir a várzea com asfalto e concreto.",
      "Criar parques lineares, jardins de chuva e preservar as áreas de preservação permanente (APPs) ao longo dos rios.",
      "Construir edifícios residenciais em encostas íngremes de morros.",
      "Eliminar a arborização urbana para facilitar a circulação de ar quente."
    ],
    correta: 1
  },
  {
    tema: "Mídia Independente",
    enunciado: "O surgimento de coletivos de jornalismo independente e comunitário nas periferias fortalece a contra-narrativa aos grandes conglomerados de mídia.",
    pergunta: "Qual é o valor social do jornalismo comunitário de periferia?",
    alternativas: [
      "Reproduzir estigmas de violência e criminalização sobre as suas próprias comunidades.",
      "Dar voz aos próprios moradores, pautar demandas locais invisibilizadas e valorizar a cultura periférica.",
      "Atuar como assessoria de imprensa paga de governos locais.",
      "Promover a venda de produtos importados sem certificação."
    ],
    correta: 1
  },
  {
    tema: "Educação em Direitos Humanos",
    enunciado: "A Educação em Direitos Humanos (EDH) visa a formação de uma cultura de respeito à dignidade humana em todas as instâncias educativas.",
    pergunta: "Um objetivo central da EDH nos currículos de ensino superior é:",
    alternativas: [
      "Ensinar aos alunos estratégias para burlar normas ambientais e trabalhistas.",
      "Formar profissionais éticos, conscientes de seu papel social na superação de preconceitos e na defesa das liberdades.",
      "Substituir o ensino de conteúdos acadêmicos específicos por doutrinação partidária.",
      "Treinar profissionais para atuação técnica neutra desvinculada de impactos humanos."
    ],
    correta: 1
  },
  {
    tema: "Saneamento e Meio Ambiente",
    enunciado: "O Marco Legal do Saneamento Básico estabeleceu como meta a universalização do atendimento de água e esgoto no Brasil até 2033.",
    pergunta: "O tratamento adequado de esgotos domésticos impacta diretamente o meio ambiente ao:",
    alternativas: [
      "Promover a eutrofização e a morte de peixes em rios e lagoas urbanas.",
      "Evitar a contaminação dos corpos d'água, proteger a fauna aquática e prevenir surtos de doenças bacterianas.",
      "Aumentar a salinização de lençóis freáticos profundos.",
      "Acelerar o processo de desertificação em áreas florestais."
    ],
    correta: 1
  },
  {
    tema: "Racismo Ambiental",
    enunciado: "O termo 'racismo ambiental' designa a injustiça social manifestada pelo fato de comunidades marginalizadas (negras, indígenas, periféricas) sofrerem desproporcionalmente os impactos do lixo e da poluição.",
    pergunta: "Identifica-se uma situação de racismo ambiental na:",
    alternativas: [
      "Instalação de parques ecológicos bem preservados em bairros periféricos de baixa renda.",
      "Localização sistemática de aterros sanitários, lixões e indústrias poluidoras próximas a comunidades vulneráveis e de minoria étnica.",
      "Oferta universal e gratuita de transporte público elétrico na periferia.",
      "Regularização fundiária de territórios tradicionais com saneamento completo."
    ],
    correta: 1
  },
  {
    tema: "Inclusão Produtiva",
    enunciado: "Políticas de inclusão produtiva buscam integrar pessoas em situação de vulnerabilidade econômica ao mercado de trabalho ou ao empreendedorismo sustentável.",
    pergunta: "Uma ação efetiva de inclusão produtiva envolve:",
    alternativas: [
      "Conceder empréstimos bancários com juros abusivos a famílias sem renda.",
      "Oferecer qualificação profissional adequada, microcrédito orientado e apoio técnico ao pequeno produtor.",
      "Exigir ensino superior completo para programas de contratação inicial em obras públicas.",
      "Substituir o trabalho humano por sistemas automatizados sem requalificação."
    ],
    correta: 1
  },
  {
    tema: "Cultura de Paz",
    enunciado: "A promoção da Cultura de Paz envolve a rejeição da violência, o combate às desigualdades e a mediação pacífica de conflitos em escolas, redes e comunidades.",
    pergunta: "Qual prática nas escolas contribui para a consolidação de uma Cultura de Paz?",
    alternativas: [
      "A aplicação de punições humilhantes e exclusão de alunos com problemas comportamentais.",
      "A implementação de práticas restaurativas, mediação de conflitos e rodas de conversa sobre empatia e respeito.",
      "O incentivo à competição predatória entre estudantes em exames diários.",
      "A instalação de detectores de metal sem trabalho pedagógico prévio."
    ],
    correta: 1
  },
  {
    tema: "Direitos do Consumidor",
    enunciado: "O Código de Defesa do Consumidor (CDC) reconhece a vulnerabilidade do consumidor no mercado de consumo, garantindo a proteção contra práticas abusivas.",
    pergunta: "Uma prática expressamente proibida pelo Código de Defesa do Consumidor é:",
    alternativas: [
      "A venda faturada com emissão de nota fiscal detalhada.",
      "A 'venda casada', que condiciona o fornecimento de um produto ou serviço à aquisição de outro.",
      "A oferta de descontos para pagamento em dinheiro ou PIX.",
      "A disponibilização da data de validade de forma visível na embalagem."
    ],
    correta: 1
  },

  // --- Questões Finais de Integração ---
  {
    tema: "Economia do Cuidado",
    enunciado: "A Economia do Cuidado abrange o trabalho doméstico e de assistência a crianças, idosos e doentes, realizado majoritariamente por mulheres sem remuneração e invisibilizado nas estatísticas oficiais.",
    pergunta: "O reconhecimento e a valorização da economia do cuidado são essenciais para:",
    alternativas: [
      "Manter a sobrecarga de trabalho não pago exclusivamente no âmbito privado das famílias.",
      "Promover a igualdade de gênero, redistribuir responsabilidades de cuidado e formular políticas públicas de creches e ilhas de apoio a idosos.",
      "Reduzir o valor das aposentadorias de trabalhadoras do lar.",
      "Privatizar integralmente os serviços de saúde preventiva."
    ],
    correta: 1
  },
  {
    tema: "Transparência Algorítmica",
    enunciado: "O uso de algoritmos para concessão de crédito, seleção de pessoal ou pontuação de crédito social pode perpetuar privilégios ou discriminações invisíveis.",
    pergunta: "O princípio da explicabilidade em Inteligência Artificial exige que:",
    alternativas: [
      "O código da IA seja mantido em segredo absoluto pelas corporações de tecnologia.",
      "Os motivos e critérios de uma decisão tomada por um sistema automatizado sejam compreensíveis e explicados ao cidadão afetado.",
      "Nenhum sistema computacional possa ser utilizado na administração pública.",
      "Decisões automatizadas sejam irrevogáveis por supervisores humanos."
    ],
    correta: 1
  },
  {
    tema: "Direito de Acesso à Internet",
    enunciado: "O Marco Civil da Internet (Lei nº 12.965/2014) estabelece princípios, garantias, direitos e deveres para o uso da internet no Brasil, tratando o acesso como essencial ao exercício da cidadania.",
    pergunta: "O princípio da Neutralidade da Rede assegura que:",
    alternativas: [
      "Provedores de internet podem bloquear ou desacelerar sites concorrentes de streaming.",
      "Os pacotes de dados trafegados devem ser tratados de forma isDirecta e igualitária, sem distinção por conteúdo, origem ou destino.",
      "O governo pode censurar postagens em redes sociais sem ordem judicial prévia.",
      "A navegação na internet deva ser cobrada por página visitada."
    ],
    correta: 1
  },
  {
    tema: "Cidadania e Saúde Pública",
    enunciado: "O controle social no SUS é exercido através dos Conselhos e Conferências de Saúde, garantindo a participação paritária de usuários, trabalhadores e gestores.",
    pergunta: "A composição paritária dos Conselhos de Saúde garante que:",
    alternativas: [
      "50% dos membros do conselho sejam representantes dos usuários do sistema público de saúde.",
      "Os conselhos sejam formados unicamente por médicos e diretores de hospitais.",
      "Apenas o Secretário de Saúde tenha poder de voto nas deliberações financeiras.",
      "A população não possa fiscalizar a aplicação das verbas do SUS."
    ],
    correta: 0
  },
  {
    tema: "Desinformação Científica",
    enunciado: "Durante emergências sanitárias internacionais, o fenômeno da 'infodemia' (excesso de informações falsas ou imprecisas) dificulta a resposta dos órgãos de saúde pública.",
    pergunta: "Para combater uma infodemia de forma ética e eficaz, os governos devem:",
    alternativas: [
      "Processar criminalmente qualquer cidadão que faça perguntas sobre vacinas.",
      "Comunicar-se com transparência, fornecer dados científicos em linguagem acessível e utilizar fontes oficiais e validadas.",
      "Ocultar estatísticas de infectados e óbitos para evitar pânico populacional.",
      "Substituir coletivas médicas por declarações de influenciadores digitais aleatórios."
    ],
    correta: 1
  }
];
