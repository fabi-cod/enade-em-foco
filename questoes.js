//  Banco de questões — 200 questões (ENADE / Conhecimentos Gerais)
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
      "Atender apenas a grupos de pressão economicamente privilegiados.",
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
    enunciado: "A garantia de direitos civis à população LGBTQIA+ representa um avanço na consolidação do princípio constitucional da dignidade da pessoa humana e da não discriminação.",
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
      "Substituir a economia do país às regras de um único parceiro comercial."
    ],
    correta: 1
  },
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
    tema: "Comunidades Ribeirinhas",
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
    enunciado: "O termo 'racismo ambiental' designa a injustiça social manifestada pelo fato de comunidades marginalizadas sofrerem desproporcionalmente os impactos do lixo e da poluição.",
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
  {
    tema: "Economia do Cuidado",
    enunciado: "A Economia do Cuidado abrange o trabalho doméstico e de assistência a crianças, idosos e doentes, realizado majoritariamente por mulheres sem remuneração e invisibilizado.",
    pergunta: "O reconhecimento e a valorização da economia do cuidado são essenciais para:",
    alternativas: [
      "Manter a sobrecarga de trabalho não pago exclusivamente no âmbito privado das famílias.",
      "Promover a igualdade de gênero, redistribuir responsabilidades de cuidado e formular políticas públicas de creches e apoio a idosos.",
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
    enunciado: "O Marco Civil da Internet estabelece princípios, garantias, direitos e deveres para o uso da internet no Brasil, tratando o acesso como essencial à cidadania.",
    pergunta: "O princípio da Neutralidade da Rede assegura que:",
    alternativas: [
      "Provedores de internet podem bloquear ou desacelerar sites concorrentes de streaming.",
      "Os pacotes de dados trafegados devem ser tratados de forma igualitária, sem distinção por conteúdo, origem ou destino.",
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
    enunciado: "Durante emergências sanitárias internacionais, o fenômeno da 'infodemia' (excesso de informações falsas ou imprecisas) dificulta a resposta dos órgãos de saúde.",
    pergunta: "Para combater uma infodemia de forma ética e eficaz, os governos devem:",
    alternativas: [
      "Processar criminalmente qualquer cidadão que faça perguntas sobre vacinas.",
      "Comunicar-se com transparência, fornecer dados científicos em linguagem acessível e utilizar fontes oficiais e validadas.",
      "Ocultar estatísticas de infectados e óbitos para evitar pânico populacional.",
      "Substituir coletivas médicas por declarações de influenciadores digitais aleatórios."
    ],
    correta: 1
  },

  // ==================== BLOCO 3 (101 a 150) ====================
  {
    tema: "Pluralismo Político",
    enunciado: "O pluralismo político é um dos fundamentos da República Federativa do Brasil, garantindo a coexistência de diferentes ideologias, partidos e correntes de pensamento.",
    pergunta: "Como o pluralismo político se reflete na garantia da ordem democrática?",
    alternativas: [
      "Impondo uma ideologia única aprovada pelo congresso nacional.",
      "Assegurando a livre organização partidária e o direito de oposição sem perseguições estatais.",
      "Eliminando debates divergentes durante períodos de crise institucional.",
      "Subordinando partidos políticos ao controle direto do poder executivo."
    ],
    correta: 1
  },
  {
    tema: "Educação Ambiental",
    enunciado: "A Política Nacional de Educação Ambiental estabelece que a educação ambiental deve ser desenvolvida como uma prática educativa integrada e contínua em todos os níveis.",
    pergunta: "Qual é a principal finalidade da educação ambiental crítica nas escolas?",
    alternativas: [
      "Ensinar apenas técnicas de reciclagem doméstica de plásticos.",
      "Promover a compreensão integrada dos problemas socioambientais, estimulando a transformação de valores e práticas sociais.",
      "Substituir o ensino das ciências biológicas por ativismo ecológico.",
      "Eximir o Estado de responsabilidades na fiscalização de indústrias poluidoras."
    ],
    correta: 1
  },
  {
    tema: "Desigualdade de Gênero no Mercado",
    enunciado: "A disparidade salarial entre homens e mulheres que exercem as mesmas funções persiste como um desafio estrutural no mercado de trabalho contemporâneo.",
    pergunta: "O princípio constitutional que combate diretamente essa desigualdade é o da:",
    alternativas: [
      "Irretroatividade das leis trabalhistas.",
      "Proibição de diferença de salários, de exercício de funções e de critérios de admissão por motivo de sexo, idade, cor ou estado civil.",
      "Liberdade de associação profissional e sindical.",
      "Obrigatoriedade de filiação a conselhos de classe."
    ],
    correta: 1
  },
  {
    tema: "Seguridade Social",
    enunciado: "A Seguridade Social compreende um conjunto integrado de ações de iniciativa dos poderes públicos e da sociedade, destinadas a assegurar os direitos à saúde, à previdência e à assistência social.",
    pergunta: "Qual característica diferencia a Assistência Social das demais áreas da Seguridade Social?",
    alternativas: [
      "Exigir contribuição financeira prévia e contínua do cidadão para concessão de benefícios.",
      "Ser prestada a quem dela necessitar, independentemente de contribuição à seguridade social.",
      "Atender unicamente a trabalhadores formais com carteira assinada.",
      "Ser financiada exclusivamente por taxas alfandegárias de importação."
    ],
    correta: 1
  },
  {
    tema: "Patrimônio Genético",
    enunciado: "O acesso ao patrimônio genético brasileiro e ao conhecimento tradicional associado é regululado visando à repartição justa e equitativa dos benefícios gerados.",
    pergunta: "Qual é o objetivo principal da legislação sobre proteção ao patrimônio genético?",
    alternativas: [
      "Proibir qualquer tipo de pesquisa científica com plantas nativas do país.",
      "Evitar a biopirataria e garantir que comunidades tradicionais recebam compensações pelo uso de seus saberes ancestrais.",
      "Conceder exclusividade de patentes a empresas estrangeiras sem restrições.",
      "Transformar reservas florestais em laboratórios farmacêuticos privados."
    ],
    correta: 1
  },
  {
    tema: "Mobilidade Ativa",
    enunciado: "A mobilidade ativa engloba formas de deslocamento humano baseadas no esforço físico, como caminhar e andar de bicicleta, sendo prioridade em planos de mobilidade urbana sustentável.",
    pergunta: "Quais são os benefícios diretos do incentivo à mobilidade ativa nas cidades?",
    alternativas: [
      "Aumento drástico da emissão de gases poluentes e congestionamentos viários.",
      "Melhoria da saúde pública, redução de emissões de carbono e humanização do espaço urbano.",
      "Elevação dos custos de manutenção de vias públicas com grandes obras rodoviárias.",
      "Isolamento de bairros residenciais em relação aos centros comerciais."
    ],
    correta: 1
  },
  {
    tema: "Envelhecimento Populacional",
    enunciado: "A transição demográfica brasileira aponta para um rápido envelhecimento da população, exigindo adaptações na previdência, saúde e infraestrutura urbana.",
    pergunta: "Quais são os principais desafios impostos pelo envelhecimento populacional ao sistema de saúde?",
    alternativas: [
      "Aumento da demanda por tratamentos de doenças crônicas não transmissíveis e cuidados de longa duração.",
      "Erradicação completa de patologias infecciosas agudas na infância.",
      "Redução drástica na necessidade de leitos hospitalares geriátricos.",
      "Substituição de medicamentos por terapias exclusivamente estéticas."
    ],
    correta: 0
  },
  {
    tema: "Patrimônio Material",
    enunciado: "O patrimônio cultural material é composto por conjuntos de bens móveis e imóveis cuja conservação seja de interesse público.",
    pergunta: "Dentre as opções abaixo, qual representa um bem cultural material tombado em âmbito nacional?",
    alternativas: [
      "O modo de fazer o queijo artesanal de Minas Gerais.",
      "As ruínas e o conjunto arquitetônico da Cidade de Ouro Preto (MG).",
      "A festa do Círio de Nazaré em Belém (PA).",
      "A literatura de cordel nordestina."
    ],
    correta: 1
  },
  {
    tema: "Cidadania Digital",
    enunciado: "A cidadania digital envolve o uso competente e ético da tecnologia, englobando direitos de privacidade, segurança da informação e combate ao cyberbullying.",
    pergunta: "No Brasil, a proteção jurídica dos dados pessoais dos cidadãos no ambiente digital é garantida principalmente por qual lei?",
    alternativas: [
      "Código de Defesa do Consumidor (Lei nº 8.078/1990).",
      "Lei Geral de Proteção de Dados - LGPD (Lei nº 13.709/2018).",
      "Marco Civil da Internet (Lei nº 12.965/2014).",
      "Estatuto da Criança e do Adolescente (Lei nº 8.069/1990)."
    ],
    correta: 1
  },
  {
    tema: "Intolerância Religiosa",
    enunciado: "A liberdade de crença é garantia constitucional inviolável no Brasil, sendo crime inafiançável e imprescritível a prática de racismo e intolerância religiosa.",
    pergunta: "Como se caracteriza juridicamente a intolerância religiosa?",
    alternativas: [
      "Como um simples desentendimento de opiniões filosóficas sem repercussão legal.",
      "Como condutas discriminatórias, ofensas, depredação de templos ou impedimento de ritos de crenças específicas.",
      "Como o debate teológico comparado entre diferentes religiões em livros acadêmicos.",
      "Como a adoção de um Estado laico neutro em cerimônias oficiais."
    ],
    correta: 1
  },
  {
    tema: "Segurança Hídrica",
    enunciado: "A segurança hídrica consiste na garantia de acesso à água em quantidade e qualidade adequadas para a saúde, o desenvolvimento socioeconômico e a sustentabilidade dos ecossistemas.",
    pergunta: "Qual prática agrícola compromete severamente a segurança hídrica a médio e longo prazo?",
    alternativas: [
      "O uso de sistemas de irrigação por gotejamento de alta precisão.",
      "A supressão de matas ciliares e o uso intensivo de fertilizantes que provocam o assoreamento e a poluição de rios.",
      "O cultivo rotacionado de culturas orgânicas em pequenas propriedades.",
      "A captação de água da chuva para uso em lavouras de subsistência."
    ],
    correta: 1
  },
  {
    tema: "Trabalho Infantil",
    enunciado: "A Constituição Federal proíbe o trabalho noturno, perigoso ou insalubre a menores de dezoito anos e qualquer trabalho a menores de dezesseis anos, salvo na condição de aprendiz.",
    pergunta: "Qual é o principal impacto social negativo gerado pelo trabalho infantil precoce?",
    alternativas: [
      "O desenvolvimento acelerado de competências financeiras na infância.",
      "A evasão escolar, o comprometimento do desenvolvimento físico e psicológico e a perpetuação do ciclo de pobreza.",
      "A garantia de estabilidade econômica familiar a longo prazo.",
      "O aperfeiçoamento da formação profissional técnica para o futuro."
    ],
    correta: 1
  },
  {
    tema: "Desenvolvimento Regional",
    enunciado: "As disparidades regionais entre o Sul/Sudeste e as regiões Norte/Nordeste representam um desafio histórico para o planejamento socioeconômico do Estado brasileiro.",
    pergunta: "Qual instrumento institucional costuma ser utilizado para mitigar assimetrias regionais?",
    alternativas: [
      "A centralização absoluta de investimentos públicos apenas nas capitais financeiras.",
      "Fundos constitucionais de financiamento regional e incentivos fiscais para implantação de indústrias em áreas menos desenvolvidas.",
      "A extinção de agências de desenvolvimento regional.",
      "A aplicação de alíquotas de impostos federais mais elevadas sobre estados periféricos."
    ],
    correta: 1
  },
  {
    tema: "Gestão de Resíduos Sólidos",
    enunciado: "A Política Nacional de Resíduos Sólidos (PNRS) estabelece a responsabilidade compartilhada pelo ciclo de vida dos produtos entre fabricantes, importadores, distribuidores, comerciantes e cidadãos.",
    pergunta: "O que preconiza o conceito de 'logística reversa' instituído pela PNRS?",
    alternativas: [
      "O descarte de embalagens usadas diretamente em aterros clandestinos municipais.",
      "A restituição dos produtos e embalagens após o uso ao setor empresarial para reaproveitamento, reciclagem ou descarte adequado.",
      "A proibição de importação de mercadorias que utilizem papelão.",
      "A obrigatoriedade de o consumidor queimar seus resíduos domiciliares."
    ],
    correta: 1
  },
  {
    tema: "Violência Contra a Mulher",
    enunciado: "A Lei Maria da Penha (Lei nº 11.340/2006) criou mecanismos para coibir e prevenir a violência doméstica e familiar contra a mulher no Brasil.",
    pergunta: "Segundo a referida lei, a violência contra a mulher no âmbito doméstico não se restringe à agressão física, abrangendo também:",
    alternativas: [
      "Exclusivamente danos materiais a bens móveis de uso pessoal.",
      "Violência psicológica, sexual, patrimonial e moral.",
      "Apenas conflitos verbais ocorridos em vias públicas sem vínculo familiar.",
      "Desacato a autoridades policiais em operações de trânsito."
    ],
    correta: 1
  },
  {
    tema: "Educação Financeira",
    enunciado: "A Estratégia Nacional de Educação Financeira promove ações para capacitar o cidadão a tomar decisões conscientes sobre o uso de seus recursos financeiros.",
    pergunta: "Qual é um dos pilares fundamentais abordados pela educação financeira crítica?",
    alternativas: [
      "Incentivar o endividamento crônico através do crédito rotativo bancário.",
      "Compreender o impacto do consumo impulsivo, planejar orçamento doméstico e poupar para imprevistos.",
      "Investir todas as economias em ativos de alto risco sem planejamento.",
      "Desconsiderar taxas de juros ao contrair empréstimos de longo prazo."
    ],
    correta: 1
  },
  {
    tema: "Demografia e Pirâmide Etária",
    enunciado: "A base larga de uma pirâmide etária em formato tradicional indica altas taxas de natalidade e mortalidade, enquanto o estreitamento da base revela transição demográfica.",
    pergunta: "O que o estreitamento da base e o alargamento do topo de uma pirâmide etária sinalizam a médio prazo?",
    alternativas: [
      "Aumento explosivo da população em idade escolar infantil.",
      "Redução da taxa de fecundidade e aumento da expectativa de vida (envelhecimento populacional).",
      "Crescimento imediato da força de trabalho industrial jovem.",
      "Estagnação total no desenvolvimento socioeconômico da nação."
    ],
    correta: 1
  },
  {
    tema: "Desigualdade Educacional",
    enunciado: "As desigualdades no acesso a tecnologias de ensino, infraestrutura escolar adequada e docentes qualificados afetam o desempenho de estudantes da rede pública frente à privada.",
    pergunta: "O princípio constitucional que busca corrigir essa distorção e garantir igualdade de condições para o acesso e a permanência na escola é o da:",
    alternativas: [
      "Gratuidade do ensino público em estabelecimentos oficiais.",
      "Igualdade de condições para o acesso e permanência na escola.",
      "Validação automática de diplomas estrangeiros.",
      "Liberdade de aprender, ensinar, pesquisar e divulgar o pensamento."
    ],
    correta: 1
  },
  {
    tema: "Transparência Pública",
    enunciado: "A Lei de Acesso à Informação (LAI) regulamenta o direito constitucional de acesso aos informações públicas geradas pelos órgãos dos poderes da União, Estados e Municípios.",
    pergunta: "Qual é a regra geral estabelecida pela LAI quanto à publicidade dos atos administrativos?",
    alternativas: [
      "O sigilo absoluto de todas as decisões tomadas por gestores públicos.",
      "O sigilo temporário de trinta anos para qualquer documento de compras.",
      "O sigilo como exceção e a publicidade como regra, garantindo transparência ativa e passiva.",
      "A divulgação restrita de dados financeiros apenas a parlamentares."
    ],
    correta: 2
  },
  {
    tema: "Participação Comunitária",
    enunciado: "Os conselhos gestores de políticas públicas (saúde, educação, assistência social) são instâncias de participação direta da sociedade na administração do Estado.",
    pergunta: "Qual é a principal atribuição deliberativa e fiscalizadora desses conselhos?",
    alternativas: [
      "Substituir o poder legislativo na aprovação de emendas constitucionais.",
      "Acompanhar, avaliar e fiscalizar a execução das políticas públicas e a gestão dos recursos financeiros do setor.",
      "Julgar crimes penais cometidos por prefeitos e governadores.",
      "Gerenciar diretamente empresas privadas de capital aberto."
    ],
    correta: 1
  },
  {
    tema: "Energias Renováveis",
    enunciado: "A diversificação da matriz energética com fontes renováveis como solar fotovoltaica e eólica é estratégica para a segurança energética e mitigação climática.",
    pergunta: "Qual é um dos principais desafios técnicos associados à expansão de fontes solares e eólicas na rede elétrica?",
    alternativas: [
      "A emissão massiva de gases de efeito estufa durante sua operação diária.",
      "A intermitência e a variabilidade na geração de energia dependentes de condições climáticas.",
      "A impossibilidade técnica de integração com redes inteligentes de distribuição.",
      "O esgotamento rápido dos recursos minerais necessários para sua fabricação."
    ],
    correta: 1
  },
  {
    tema: "Saúde Coletiva e Prevenção",
    enunciado: "A atenção primária à saúde, estruturada no Brasil através das Estratégias de Saúde da Família (ESF), atua na prevenção de agravos e promoção da qualidade de vida.",
    pergunta: "Qual é o foco principal da atuação das equipes de Saúde da Família em seus territórios?",
    alternativas: [
      "Realizar cirurgias cardíacas de alta complexidade em postos de bairro.",
      "Conhecer a realidade sanitária das famílias, atuar na prevenção de doenças e realizar acompanhamento contínuo na comunidade.",
      "Substituir os hospitais de emergência em casos de traumas ortopédicos graves.",
      "Distribuir medicamentos controlados sem receita médica em praças públicas."
    ],
    correta: 1
  },
  {
    tema: "Direitos dos Povos Indígenas",
    enunciado: "A Constituição Federal de 1988 reconheceu aos índios sua organização social, costumes, línguas, crenças e os direitos originários sobre as terras que tradicionalmente ocupam.",
    pergunta: "O que significam juridicamente os 'direitos originários' sobre as terras tradicionais?",
    alternativas: [
      "Que os direitos decorrem de concessão graciosa do governo federal atual.",
      "Que são direitos anteriores à própria formação do Estado brasileiro, fundamentados na ocupação tradicional histórica.",
      "Que as terras podem ser vendidas livremente a latifundiários estrangeiros.",
      "Que os povos indígenas possuem jurisdição militar autônoma independente."
    ],
    correta: 1
  },
  {
    tema: "Segurança Digital e Privacidade",
    enunciado: "O vazamento de dados confidenciais e ataques cibernéticos a instituições públicas e privadas representam ameaças crescentes à segurança nacional e individual.",
    pergunta: "A adoção da autenticação em duas etapas (2FA) em sistemas digitais visa principalmente:",
    alternativas: [
      "Acelerar a velocidade de navegação na internet móvel.",
      "Adicionar uma camada extra de segurança além da senha, dificultando acessos não autorizados.",
      "Eliminar a necessidade de senhas fortes em cadastros corporativos.",
      "Reduzir custos de armazenamento de dados em servidores em nuvem."
    ],
    correta: 1
  },
  {
    tema: "Cidadania Planetária",
    enunciado: "Os Objetivos de Desenvolvimento Sustentável (ODS) da ONU compõem uma agenda global para erradicar a pobreza, proteger o planeta e garantir a paz e a prosperidade.",
    pergunta: "Quantos objetivos principais compõem a agenda global dos ODS para o horizonte de desenvolvimento sustentável?",
    alternativas: [
      "5 objetivos focados exclusivamente no crescimento do PIB.",
      "10 objetivos voltados apenas para energias fósseis.",
      "17 objetivos integrados que abordam desafios globais complexos.",
      "25 objetivos de integração militar entre os continentes."
    ],
    correta: 2
  },
  {
    tema: "Patrimônio Imaterial",
    enunciado: "O Registro de Bens Culturais de Natureza Imaterial protege conhecimentos, práticas, expressões e rituais transmitidos de geração em geração.",
    pergunta: "Qual é o órgão federal brasileiro responsável pelo registro e salvaguarda do patrimônio histórico, artístico e nacional?",
    alternativas: [
      "Instituto Brasileiro de Geografia e Estatística (IBGE).",
      "Instituto do Patrimônio Histórico e Artístico Nacional (IPHAN).",
      "Empresa Brasileira de Pesquisa Agropecuária (Embrapa).",
      "Fundação Biblioteca Nacional (FBN)."
    ],
    correta: 1
  },
  {
    tema: "Segregação Socioespacial",
    enunciado: "A expansão urbana desordenada sem infraestrutura acentua a fragmentação das cidades, separando áreas dotadas de serviços daqueles desprovidos de saneamento e transporte.",
    pergunta: "Qual instrumento urbanístico previsto no Estatuto da Cidade visa combater a retenção especulativa de imóveis urbanos desocupados?",
    alternativas: [
      "A concessão de isenção total de IPTU a grandes loteadores.",
      "O parcelamento, edificação ou utilização compulsórios (PEUC), IPTU progressivo no tempo e desapropriação-sanção.",
      "A privatização completa do sistema viário municipal.",
      "A remoção forçada de bairros centrais consolidados para áreas rurais."
    ],
    correta: 1
  },
  {
    tema: "Educação Midiática",
    enunciado: "A educação midiática capacita os cidadãos a analisar criticamente mensagens veiculadas por mídias tradicionais e digitais, identificando vieses e intenções.",
    pergunta: "Qual habilidade é central no desenvolvimento da literacia midiática?",
    alternativas: [
      "Acreditar em qualquer manchete sensacionalista compartilhada por autoridades.",
      "Verificar a autoria, cruzar dados com fontes primárias e questionar o contexto de publicações virais.",
      "Abster-se de consumir notícias veiculadas em portais jornalísticos profissionais.",
      "Compartilhar conteúdos sem leitura prévia para testar engajamento."
    ],
    correta: 1
  },
  {
    tema: "Economia Criativa",
    enunciado: "A economia criativa baseia-se no capital intelectual, na cultura, na criatividade e na inovação como motores de geração de valor econômico e social.",
    pergunta: "Quais setores integram tipicamente o ecossistema da economia criativa?",
    alternativas: [
      "Extrativismo mineral de ferro e exploração de petróleo bruto.",
      "Audiovisual, design, software, moda, arquitetura, artes cênicas e música.",
      "Monocultura extensiva de soja e pecuária intensiva de corte.",
      "Fabricação de fertilizantes químicos inorgânicos industriais."
    ],
    correta: 1
  },
  {
    tema: "Responsabilidade Social Empresarial",
    enunciado: "A responsabilidade social empresarial (RSE) vai além do cumprimento das leis trabalhistas e ambientais, englobando compromissos éticos com o desenvolvimento da comunidade.",
    pergunta: "Como se manifesta uma gestão empresarial genuinamente socialmente responsável?",
    alternativas: [
      "Pela ocultação de impactos socioambientais negativos gerados por seus processos produtivos.",
      "Pela transparência nas relações com stakeholders, investimento em projetos sociais locais e ética corporativa.",
      "Pela priorização exclusiva do lucro acionário trimestral a qualquer custo moral.",
      "Pela recusa em participar de auditorias externas de conformidade."
    ],
    correta: 1
  },

  // ==================== BLOCO 4 (151 a 200) ====================
  {
    tema: "Democracia e Participação",
    enunciado: "O plebiscito e o referendo são instrumentos de democracia direta previstos na Constituição Federal brasileira de 1988 para consulta ao eleitorado sobre matérias de relevante interesse nacional.",
    pergunta: "Qual é a diferença fundamental entre o plebiscito e o referendo?",
    alternativas: [
      "O plebiscito é convocado após a aprovação do ato legislativo, enquanto o referendo ocorre antes.",
      "O plebiscito é uma consulta prévia ao ato legislativo/administrativo, enquanto o referendo é convocado após a lei ter sido aprovada para sua ratificação.",
      "O plebiscito aplica-se apenas a assuntos estaduais, enquanto o referendo é exclusivo do poder executivo federal.",
      "O plebiscito é deliberativo obrigatório e o referendo tem apenas caráter consultivo sem força legal."
    ],
    correta: 1
  },
  {
    tema: "Transição Justa e Emprego",
    enunciado: "A descarbonização da economia exige o fechamento gradual de indústrias highly poluidoras, o que pode gerar impacto social negativo sobre regiões dependentes dessas atividades.",
    pergunta: "Para assegurar uma 'transição justa' no mercado de trabalho, as políticas públicas devem:",
    alternativas: [
      "Manter o funcionamento indeterminado de indústrias poluentes sem restrições ambientais.",
      "Garantir programas de requalificação profissional, proteção social e fomento a novas cadeias produtivas limpas nas regiões afetadas.",
      "Transferir o custo de encerramento das atividades inteiramente para os trabalhadores demitidos.",
      "Substituir trabalhadores locais por mão de obra estrangeira especializada sem suporte comunitário."
    ],
    correta: 1
  },
  {
    tema: "Acessibilidade Comunicacional",
    enunciado: "A acessibilidade comunicacional garante que mensagens, conteúdos digitais e sinalizações estejam disponíveis em formatos compreensíveis a pessoas com diferentes deficiências sensoriais.",
    pergunta: "Qual recurso técnico assegura a acessibilidade comunicacional para pessoas com deficiência auditiva em eventos ao vivo ou transmissões?",
    alternativas: [
      "O aumento do contraste das luzes do palco principal.",
      "A presença de intérpretes de Libras (Língua Brasileira de Sinais) e a disponibilização de legendas em tempo real (LSTV/Closed Caption).",
      "A utilização de impressos em Braille distribuídos na entrada do evento.",
      "A instalação de rampas de acesso com inclinação adequada segundo normas técnicas."
    ],
    correta: 1
  },
  {
    tema: "Economia do Conhecimento",
    enunciado: "A transição da economia industrial para a economia do conhecimento coloca o capital humano, a informação, a capacidade de inovação e o aprendizado contínuo no centro do valor econômico.",
    pergunta: "Em um cenário dominado pela economia do conhecimento, o investimento prioritário dos países deve focar em:",
    alternativas: [
      "Subvenção maciça a atividades extrativistas primárias de baixo valor agregado.",
      "Educação de qualidade, sistemas de pesquisa e desenvolvimento (P&D), infraestrutura digital e proteção à propriedade intelectual.",
      "Aumento de barreiras alfandegárias para proibir a circulação de softwares internacionais.",
      "Redução dos salários de profissionais das áreas de tecnologia e ciências humanas."
    ],
    correta: 1
  },
  {
    tema: "Segurança Alimentar e Nutricional",
    enunciado: "O conceito de Segurança Alimentar e Nutricional engloba não apenas a quantidade suficiente de comida, mas também a qualidade biológica, sanitária e o respeito à diversidade cultural alimentícia.",
    pergunta: "Qual diretriz promove a segurança alimentar e sustentável na merenda escolar pública?",
    alternativas: [
      "Priorizar a aquisição de alimentos ultraprocessados de grande escala comercial.",
      "Comprar gêneros alimentícios diretamente da agricultura familiar e de agroindústrias comunitárias locais.",
      "Substituir refeições frescas por suplementos vitamínicos industrializados padronizados.",
      "Importar produtos enlatados sem certificação de órgãos de vigilância sanitária."
    ],
    correta: 1
  },
  {
    tema: "Direitos Culturais",
    enunciado: "Os direitos culturais integram os direitos humanos de segunda geração, abrangendo a liberdade de criação artística, o acesso aos bens culturais e a salvaguarda da memória coletiva.",
    pergunta: "O mecanismo de fomento à cultura mediante leis de incentivo fiscal caracteriza-se por:",
    alternativas: [
      "Censura prévia do Estado sobre projetos com propostas estéticas inovadoras ou críticas.",
      "Permitir que empresas e cidadãos destinem parte de seus impostos devidos ao financiamento de projetos culturais aprovados.",
      "Aprovar exclusivamente projetos artísticos de corporações multinacionais de entretenimento.",
      "Proibir a cobrança de ingressos em qualquer evento cultural público ou privado."
    ],
    correta: 1
  },
  {
    tema: "Mudanças Climáticas e Saúde",
    enunciado: "O aumento das temperaturas globais e a alteração dos regimes de chuvas expandem as áreas geográficas de ocorrência de vetores de doenças tropicais, como a dengue, zika e chikungunya.",
    pergunta: "Uma ação preventiva de saúde pública para mitigar esse impacto socioambiental consiste em:",
    alternativas: [
      "Interromper o monitoramento de áreas de risco durante épocas de seca prolongada.",
      "Fortalecer a vigilância em saúde ambiental, investir em saneamento urbano e promover ações comunitárias de eliminação de criadouros.",
      "Aplicar inseticidas químicos de forma indiscriminada sem avaliação de impacto ecossistêmico.",
      "Restringir o acesso da população às unidades básicas de saúde durante surtos."
    ],
    correta: 1
  },
  {
    tema: "Violência Institucional",
    enunciado: "A violência institucional manifesta-se no atendimento prestado por órgãos públicos ou agentes do Estado quando violam direitos, reproduzem preconceitos ou renegam serviços essenciais.",
    pergunta: "Identifica-se um episódio de violência institucional na:",
    alternativas: [
      "Oferta de atendimento prioritário a idosos e gestantes conforme previsto em lei.",
      "Recusa injustificada de acolhimento ou revitimização de mulheres em situação de violência ao buscarem serviços de proteção.",
      "Realização de triagem médica em pronto-atendimento com base na gravidade clínica dos sintomas.",
      "Exigência de apresentação de documento oficial com foto em repartições administrativas."
    ],
    correta: 1
  },
  {
    tema: "Justiça Restaurativa",
    enunciado: "Diferente da justiça retributiva focada estritamente na punição e aplicação da pena, a justiça restaurativa prioriza a reparação dos danos, o diálogo entre as partes e a restauração de laços sociais.",
    pergunta: "O processo de mediação em justiça restaurativa busca centralmente:",
    alternativas: [
      "Isolar o infrator do convívio comunitário por prazos indeterminados sem escuta das vítimas.",
      "Promover encontros facilitados em que vítima, ofensor e comunidade participem na construção de soluções reparadoras.",
      "Aplicar multas financeiras revertidas exclusivamente para o orçamento de segurança pública.",
      "Transferir o julgamento de conflitos comunitários para tribunais militares."
    ],
    correta: 1
  },
  {
    tema: "Inclusão Escolar de Surdos",
    enunciado: "A Convenção sobre os Direitos das Pessoas com Deficiência e a LDB garantem a oferta de educação bilíngue para surdos, em que a Libras é a primeira língua e o português escrito é a segunda.",
    pergunta: "Uma escola inclusiva preparada para receber estudantes surdos deve assegurar:",
    alternativas: [
      "A obrigatoriedade de implante coclear como condição de matrícula.",
      "Professores de salas regulares e tradutores/intérpretes de Libras capacitados, além de materiais didáticos visuais.",
      "A proibição da utilização de sinais em momentos de recreio e atividades esportivas.",
      "A dispensa automática do ensino de língua portuguesa escrita para todos os alunos surdos."
    ],
    correta: 1
  },
  {
    tema: "Gentrificação e Moradia",
    enunciado: "A especulação imobiliária em áreas centrais de grandes cidades frequentemente provoca o aumento exagerado dos custos do solo urbano e dos impostos locais.",
    pergunta: "A consequência direta desse movimento especulativo para trabalhadores de baixa renda é:",
    alternativas: [
      "A aquisição facilitada de moradias próprias e estruturadas no centro histórico.",
      "O deslocamento forçado para áreas periféricas desprovidas de infraestrutura e a ampliação das distâncias casa-trabalho.",
      "A redução imediata no valor das tarifas do transporte público municipal.",
      "A garantia de regularização fundiária de loteamentos informais consolidados."
    ],
    correta: 1
  },
  {
    tema: "Direitos dos Idosos",
    enunciado: "O Estatuto da Pessoa Idosa (Lei nº 10.741/2003) assegura prioridade absoluta na efetivação dos direitos à vida, saúde, alimentação, cultura e convivência comunitária.",
    pergunta: "Em relação ao direito ao transporte coletivo urbano, o Estatuto da Pessoa Idosa garante:",
    alternativas: [
      "A gratuidade dos transportes coletivos públicos urbanos e semiurbanos aos maiores de 65 anos.",
      "A cobrança de meia-entrada estrita apenas durante horários fora do pico comercial.",
      "A obrigatoriedade de compra prévia de bilhetes com três dias de antecedência.",
      "A reserva de vagas exclusivas mediante pagamento de taxa de adesão anual."
    ],
    correta: 0
  },
  {
    tema: "Cibersegurança e Sociedade",
    enunciado: "A ocorrência de engenharia social (como ataques de phishing) explora a confiança, o medo ou a falta de informação do usuário para roubar senhas e dados bancários.",
    pergunta: "Qual atitude individual reduz significativamente o risco de ser vítima de um golpe de phishing?",
    alternativas: [
      "Clicar em links recebidos por mensagens não solicitadas sem checar o remetente oficial.",
      "Verificar a autenticidade do endereço eletrônico (URL), não fornecer senhas em sites não seguros e utilizar canais oficiais.",
      "Utilizar a mesma senha alfanumérica simples em todos os cadastros pessoais.",
      "Desativar atualizações de segurança dos sistemas operacionais dos dispositivos."
    ],
    correta: 1
  },
  {
    tema: "Proteção aos Povos Isolados",
    enunciado: "O Estado brasileiro adota a política de 'não contato' em relação a povos indígenas isolados, intervindo apenas em situações extraordinárias de ameaça à sua sobrevivência.",
    pergunta: "A política de não contato fundamenta-se na necessidade de:",
    alternativas: [
      "Forçar a integração dessas populações ao mercado produtivo agrícola regional.",
      "Respeitar a autodeterminação dos povos e protegê-los contra doenças infectocontagiosas para as quais não possuem imunidade.",
      "Facilitar o loteamento de suas terras para exploração mineral privada.",
      "Permitir que missões catequéticas modifiquem suas tradições sem autorização judicial."
    ],
    correta: 1
  },
  {
    tema: "Guerra Cibernética e Geopolítica",
    enunciado: "Os conflitos internacionais contemporâneos extrapolam o campo físico, incorporando ataques a redes de energia, sistemas bancários e infraestruturas críticas dos Estados Nacionais.",
    pergunta: "A este conjunto de ações bélicas no ambiente digital dá-se o nome de:",
    alternativas: [
      "Guerra fiscal intra-regional.",
      "Guerra cibernética (cyberwarfare).",
      "Guerra comercial protecionista.",
      "Soberania biotecnológica."
    ],
    correta: 1
  },
  {
    tema: "Vulnerabilidade e Desastres",
    enunciado: "Mapeamentos de risco demonstram que desastres decorrentes de deslizamentos de terra em morros e encostas atingem predominantemente populações de baixa renda.",
    pergunta: "Esse padrão de vitimização evidencia um problema estrutural de:",
    alternativas: [
      "Inexistência de técnicas de engenharia civil aplicáveis no país.",
      "Injustiça ambiental e falta de planejamento habitacional preventivo que force a ocupação de áreas de risco.",
      "Escolha individual deliberada dos moradores por locais sem saneamento.",
      "Excesso de investimento em moradias populares centrais."
    ],
    correta: 1
  },
  {
    tema: "Inovação Aberta",
    enunciado: "A abordagem de inovação aberta (open innovation) incentiva empresas e governos a colaborar com universidades, startups e cidadãos para a solução de problemas complexos.",
    pergunta: "Uma vantagem competitiva da aplicação da inovação aberta no setor público é:",
    alternativas: [
      "O encerramento de parcerias técnicas com instituições de pesquisa científica.",
      "A aceleração no desenvolvimento de soluções eficientes e o barateamento de custos mediante inteligência coletiva.",
      "O sigilo compulsório sobre todas as etapas de criação de softwares governamentais.",
      "A centralização das pesquisas em um único departamento burocrático fechado."
    ],
    correta: 1
  },
  {
    tema: "Políticas de Ações Afirmativas",
    enunciado: "A Lei de Cotas (Lei nº 12.711/2012) reserva vagas em universidades federais para estudantes egressos de escolas públicas, pretos, pardos, indígenas e pessoas com deficiência.",
    pergunta: "O fundamento constitucional que valida a aplicação das ações afirmativas é o princípio da:",
    alternativas: [
      "Igualdade formal absoluta (todos tratados identicamente independente das desigualdades reais).",
      "Igualdade material/substantiva (tratar desigualmente os desiguais na medida de suas desigualdades para promover equidade).",
      "Soberania dos conselhos universitários privados.",
      "Livre concorrência de mercado."
    ],
    correta: 1
  },
  {
    tema: "Agroecologia",
    enunciado: "A agroecologia propõe um modelo de produção agrícola que integra princípios ecológicos, sociais e culturais ao cultivo de alimentos, rejeitando o uso de agrotóxicos sintéticos.",
    pergunta: "Qual benefício a agroecologia proporciona em comparação ao agronegócio de monocultura intensiva?",
    alternativas: [
      "A contaminação do lençol freático por defensivos de alta persistência.",
      "A preservação do solo, a conservação da biodiversidade e a oferta de alimentos saudáveis com justiça social.",
      "O aumento do desmatamento de florestas tropicais primárias.",
      "A concentração de terras nas mãos de poucos investidores internacionais."
    ],
    correta: 1
  },
  {
    tema: "Redução da Maioridade Penal",
    enunciado: "O debate sobre a redução da maioridade penal envolve argumentos jurídicos, sociológicos e éticos sobre a eficácia de medidas punitivas frente à socioeducação de adolescentes.",
    pergunta: "A Doutrina da Proteção Integral adotada pela Constituição e pelo ECA estabelece para adolescentes autor de ato infracional:",
    alternativas: [
      "A impunidade absoluta sem qualquer responsabilização estatal.",
      "Medidas socioeducativas (advertência, prestação de serviços, internação) focadas na reeducação e reinserção social.",
      "A aplicação imediata das mesmas penas de prisão do Código Penal para adultos.",
      "A perda compulsória dos direitos de cidadania até os trinta anos."
    ],
    correta: 1
  },
  {
    tema: "Transição Demográfica e Economia",
    enunciado: "O conceito de 'bônus demográfico' ocorre quando a proporção de pessoas em idade ativa (força de trabalho) é maior do que a proporção de dependentes (crianças e idosos).",
    pergunta: "Para aproveitar o período de bônus demográfico antes de seu esgotamento, o país deve:",
    alternativas: [
      "Reduzir os gastos em educação básica para equilibrar o orçamento público curto.",
      "Investir massivamente na qualificação profissional dos jovens e na criação de postos de trabalho de alta produtividade.",
      "Estimular a emigração do capital humano jovem para países desenvolvidos.",
      "Desincentivar a participação feminina no mercado de trabalho formal."
    ],
    correta: 1
  },
  {
    tema: "Direitos dos Povos Quilombolas",
    enunciado: "O Supremo Tribunal Federal (STF) reafirmou a constitucionalidade do Decreto nº 4.887/2003, que regulamenta o procedimento de identificação e titulação das terras quilombolas.",
    pergunta: "O critério utilizado para a identificação e delimitação das comunidades quilombolas é o da:",
    alternativas: [
      "Avaliação genética individual feita por peritos do Estado.",
      "Autodefinição/autoidentificação da própria comunidade aliada a estudos históricos e antropológicos.",
      "Comprovação de renda média familiar mínima de dois salários mínimos.",
      "Aprovação prévia por empresários rurais locais."
    ],
    correta: 1
  },
  {
    tema: "Consumo Consciente",
    enunciado: "O consumo consciente envolve a escolha de produtos e serviços considerando seus impactos ambientais, sociais e econômicos ao longo de todo o ciclo de vida.",
    pergunta: "Uma atitude alinhada ao consumo consciente no cotidiano é:",
    alternativas: [
      "Substituir aparelhos eletrônicos funcionais a cada lançamento publicitário.",
      "Avaliar a real necessidade da compra, priorizar produtos locais, recicláveis e de empresas com responsabilidade social.",
      "Descartar resíduos orgânicos misturados ao lixo reciclável sem separação.",
      "Comprar produtos descartáveis de uso único para evitar gastos com água."
    ],
    correta: 1
  },
  {
    tema: "Livre Manifestação e Protesto",
    enunciado: "O direito de reunião e protesto é garantia fundamental assegurada na Constituição brasileira, exercido em locais abertos ao público.",
    pergunta: "A exigência constitucional para a realização de reuniões pacíficas em locais públicos é de que:",
    alternativas: [
      "Ocorra autorização prévia discricionária expedida por órgãos policiais locais.",
      "Seja pacífica, sem armas, não frustre outra reunião convocada para o mesmo local e haja prévio aviso à autoridade competente.",
      "Seja restrita aos fins de semana e feriados nacionais.",
      "Ocorra pagamento de taxa de ocupação do solo urbano."
    ],
    correta: 1
  },
  {
    tema: "Inclusão Digital no Meio Rural",
    enunciado: "O hiato digital entre áreas urbanas e rurais dificulta o acesso de agricultores familiares a tecnologias de precisão, serviços bancários e políticas de comercialização.",
    pergunta: "Qual política pública reduz o abismo digital nas áreas rurais?",
    alternativas: [
      "Expandir a infraestrutura de telecomunicações, levar sinal de internet banda larga e capacitar a população do campo no uso de ferramentas digitais.",
      "Proibir a instalação de torres de telefonia celular em áreas agrícolas.",
      "Restringir o acesso a plataformas governamentais a moradores das capitais.",
      "Substituir todas as escolas rurais por cursos por correspondência impressa."
    ],
    correta: 0
  },
  {
    tema: "Direitos dos Refugiados",
    enunciado: "A Lei de Refúgio do Brasil (Lei nº 9.474/1997) é considerada uma das mais avançadas do mundo por adotar a definição ampliada da Declaração de Cartagena.",
    pergunta: "A definição ampliada de refúgio reconhece como refugiado o indivíduo que foi forçado a deixar seu país devido a:",
    alternativas: [
      "Interesse exclusivo de viagem de turismo internacional.",
      "Grave e generalizada violação dos direitos humanos em sua nação de origem.",
      "Busca por salários em moedas estrangeiras mais valorizadas sem conflito interno.",
      "Fuga do cumprimento de obrigações fiscais ou sanções trabalhistas comuns."
    ],
    correta: 1
  },
  {
    tema: "Poluição Atmosférica",
    enunciado: "A poluição do ar nas metrópoles é responsável pelo agravamento de cardiopatias, crises asmáticas e mortes precoces, gerando custos elevados para os sistemas de saúde.",
    pergunta: "Uma medida estrutural de planejamento urbano que atua na raiz da poluição do ar é:",
    alternativas: [
      "A substituição de frota de ônibus a diesel por veículos elétricos e o fortalecimento do transporte sobre trilhos.",
      "A liberação da venda de combustíveis fósseis adulterados para baixar custos de transporte.",
      "O incentivo à circulação livre de caminhões pesados nas áreas centrais em qualquer horário.",
      "A poda drástica e eliminação das árvores ao longo de avenidas expressas."
    ],
    correta: 0
  },
  {
    tema: "Saúde Sexual e Reprodutiva",
    enunciado: "Os direitos sexuais e reprodutivos garantem que todas as pessoas possam tomar decisões sobre sua sexualidade e reprodução de forma livre, responsável e informada.",
    pergunta: "A oferta de métodos contraceptivos gratuitos pelo SUS fundamenta-se no princípio de que o planejamento familiar é:",
    alternativas: [
      "Uma imposição do Estado para controlar o crescimento demográfico de famílias de baixa renda.",
      "Um direito de livre escolha do casal ou do indivíduo, vedada qualquer forma coercitiva por parte de instituições públicas ou privadas.",
      "Um benefício condicionado ao pagamento de contribuição previdenciária prévia.",
      "Um serviço restrito a maiores de trinta anos com dois filhos vivos."
    ],
    correta: 1
  },
  {
    tema: "Indústria 4.0 e Emprego",
    enunciado: "A Indústria 4.0 integra inteligência artificial, internet das coisas (IoT), robótica avançada e computação em nuvem nos processos produtivos das fábricas.",
    pergunta: "O impacto da quarta revolução industrial no mercado de trabalho exige dos trabalhadores de manufatura:",
    alternativas: [
      "Apenas força física para operação contínua de maquinário mecânico simples.",
      "Capacidade de lidar com dados digitais, resolução de problemas complexos e programação de sistemas automatizados.",
      "O abandono do ensino formal em favor de treinamento estritamente braçal.",
      "A aceitação de jornadas extensas de trabalho repetitivo em linhas de montagem manuais."
    ],
    correta: 1
  },
  {
    tema: "Políticas Anticorrupção",
    enunciado: "A Lei da Ficha Limpa (Lei Complementar nº 135/2010) alterou a Lei de Inelegibilidades para impedir a candidatura de cidadãos condenados por órgãos colegiados.",
    pergunta: "A Lei da Ficha Limpa visou proteger no processo eleitoral a:",
    alternativas: [
      "Imunidade absoluta de parlamentares durante o mandato exercido.",
      "Proidade administrativa, a moralidade para o exercício do mandato e a normalidade das eleições.",
      "Reserva de candidaturas para representantes de elites financeiras.",
      "Centralização de decisões eleitorais nas mãos de um único partido político."
    ],
    correta: 1
  },
  {
    tema: "Manejo Florestal Sustentável",
    enunciado: "O manejo florestal sustentável combina a extração seletiva de madeira com a conservação da cobertura vegetal e da biodiversidade local a longo prazo.",
    pergunta: "Em oposição ao desmatamento raso, o manejo florestal sustentável caracteriza-se por:",
    alternativas: [
      "Retirar todas as árvores de uma determinada área de uma só vez para queimada posterior.",
      "Planejar o corte seletivo de árvores adultas, respeitando o tempo de regeneração natural da floresta e mantendo sua estrutura física.",
      "Substituir espécies nativas por florestas de eucalipto exótico sem controle.",
      "Utilizar agrotóxicos desfolhantes para acelerar a derrubada mecânica de toras."
    ],
    correta: 1
  },
  {
    tema: "Saúde Trabalhista e Prevenção",
    enunciado: "As Equipas de Saúde da Família e os Centros de Referência em Saúde do Trabalhador (CEREST) atuam no diagnóstico, prevenção e vigilância de lesões relacionadas ao trabalho.",
    pergunta: "A LER/DORT (Lesões por Esforços Repetitivos / Distúrbios Osteomusculares Relacionados ao Trabalho) é prevenida prioritariamente através de:",
    alternativas: [
      "Adequação ergonômica dos postos de trabalho, pausas regulares e alternância de tarefas.",
      "Aumento da carga horária semanal sem interrupções operacionais.",
      "Uso diário compulsório de analgésicos fortes antes do início da jornada laboral.",
      "Substituição de mobiliário ajustável por estruturas rígidas padronizadas de baixo custo."
    ],
    correta: 0
  },
  {
    tema: "Acessibilidade no Transporte Público",
    enunciado: "A Lei de Acessibilidade obriga a adaptação de todos os veículos de transporte coletivo de passageiros para o uso por pessoas com deficiência ou mobilidade reduzida.",
    pergunta: "Constituem adaptações de acessibilidade obrigatórias em frotas urbanas de ônibus:",
    alternativas: [
      "Elevadores ou rampas de acesso, assentos reservados com sinalização, espaço para cadeira de rodas e avisos sonoros e visuais.",
      "Degraus elevados sem corrimão de apoio para otimizar espaço de circulação.",
      "Catracas estreitas sem liberação manual em casos de emergência.",
      "Uso exclusivo de escadas íngremes nas portas de desembarque."
    ],
    correta: 0
  },
  {
    tema: "Direito à Informação e Saúde",
    enunciado: "A rotulagem nutricional frontal em alimentos embalados (com o símbolo de lupa) foi implementada pela ANVISA para alertar o consumidor sobre teores elevados de açúcares adicionados, gorduras saturadas e sódio.",
    pergunta: "Essa medida de saúde pública visa promover:",
    alternativas: [
      "A proibição sumária da venda de doces e salgadinhos no mercado nacional.",
      "A transparência de informações para que os consumidores façam escolhas alimentares mais conscientes e saudáveis.",
      "A redução nos impostos estaduais incidentes sobre alimentos ultraprocessados.",
      "O aumento das exportações de alimentos enlatados sem controle sanitário."
    ],
    correta: 1
  },
  {
    tema: "Patrimônio e Memória Negra",
    enunciado: "O Cais do Valongo, no Rio de Janeiro, foi reconhecido como Patrimônio Mundial pela UNESCO por ser o principal porto de desembarque de africanos escravizados nas Américas.",
    pergunta: "O reconhecimento desse local como patrimônio visa preservar a memória histórica sob a perspectiva de:",
    alternativas: [
      "Celebrar a expansão comercial mercantilista sem reflexão crítica sobre seus impactos cotidianos.",
      "Um 'sítio de memória sensível' que convida à reflexão sobre as atrocidades da escravidão e à valorização da herança africana na formação nacional.",
      "Apagar os vestígios da presença negra do centro histórico urbano.",
      "Promover a privatização comercial de monumentos históricos marítimos."
    ],
    correta: 1
  },
  {
    tema: "Cultura Digital e Privacidade",
    enunciado: "Muitos aplicativos para smartphones coletam dados de localização geográfica, contatos e dados biométricos de usuários para vender informações a redes de publicidade.",
    pergunta: "De acordo com os princípios de proteção de dados, a coleta de dados pessoais por aplicativos deve condicionar-se a:",
    alternativas: [
      "Instalação automática do aplicativo sem exibição dos termos de uso ao proprietário do aparelho.",
      "Consentimento livre, informado e inequívoco do titular, informando claramente a finalidade legítima do uso dos dados.",
      "Coleta irrestrita de qualquer informação do telefone sem canal de cancelamento de cadastro.",
      "Autorização compulsória do provedor de acesso à internet sem consulta ao indivíduo."
    ],
    correta: 1
  },
  {
    tema: "Ecoturismo e Desenvolvimento",
    enunciado: "O ecoturismo ou turismo de natureza busca conciliar o lazer dos visitantes com a conservação ambiental e a geração de renda para populações locais.",
    pergunta: "Para que uma atividade seja considerada ecoturismo genuíno, ela deve necessariamente:",
    alternativas: [
      "Construir grandes resorts de luxo em áreas de preservação permanente sem estudo de impacto.",
      "Incentivar a conscientização ambiental, respeitar o patrimônio natural/cultural e beneficiar socioeconomicamente a comunidade anfitriã.",
      "Permitir a caça e a coleta de espécies silvestres ameaçadas de extinção por turistas.",
      "Proibir a presença de guias locais em trilhas ecológicas estruturadas."
    ],
    correta: 1
  },
  {
    tema: "Combate ao Trabalho Infantil na Agricultura",
    enunciado: "A agricultura familiar ainda registra ocorrências de trabalho infantil perigoso envolvendo o manuseio de ferramentas cortantes e a aplicação de venenos agrícolas.",
    pergunta: "As ações estratégicas do Programa de Erradicação do Trabalho Infantil (PETI) priorizam:",
    alternativas: [
      "A legalização do trabalho infantil no campo a partir dos oito anos de idade.",
      "A transferência de renda vinculada à frequência escolar, ampliação da jornada em tempo integral e fiscalização das condições de trabalho no campo.",
      "A suspensão dos repasses de programas sociais a famílias em vulnerabilidade socioeconômica.",
      "A substituição de escolas rurais por trabalho prático supervisionado em fazendas comerciais."
    ],
    correta: 1
  },
  {
    tema: "Combate ao Assédio no Trabalho",
    enunciado: "O assédio moral no ambiente de trabalho caracteriza-se pela exposição dos trabalhadores a situações humilhantes e constrangedoras de forma repetitiva e prolongada.",
    pergunta: "Constitui conduta preventiva das organizações para erradicar o assédio moral no trabalho:",
    alternativas: [
      "Isolar os funcionários que fazem denúncias formais na ouvidoria da instituição.",
      "Criar um código de conduta transparente, canais seguros e anônimos de denúncia e promover treinamentos de liderança respeitosa.",
      "Exigir metas inalcançáveis mediante ameaças públicas de demissão por justa causa.",
      "Proibir a comunicação verbal informal entre colegas de equipe no ambiente laboral."
    ],
    correta: 1
  },
  {
    tema: "Preservação da Caatinga",
    enunciado: "A Caatinga é um bioma exclusivamente brasileiro caracterizado por vegetação xerófila, com alto grau de endemismo, que sofre com o processo de desertificação.",
    pergunta: "Uma causa antrópica direta que acelera a desertificação no bioma Caatinga é:",
    alternativas: [
      "O desmatamento ilegal para produção de lenha/carvão vegetal e o sobrepastoreio extensivo não manejado.",
      "A expansão de sistemas agroflorestais diversificados e comunitários.",
      "A criação de Unidades de Conservação de Proteção Integral estaduais.",
      "O uso generalizado de irrigação por gotejamento solar eficiente."
    ],
    correta: 0
  },
  {
    tema: "Violência Política de Gênero",
    enunciado: "A Lei nº 14.192/2021 estabeleceu normas para prevenir, reprimir e combater a violência política contra a mulher durante campanhas eleitorais e no exercício de mandatos.",
    pergunta: "Caracteriza-se como violência política de gênero a conduta de:",
    alternativas: [
      "Criticar propostas legislativas ou votos de uma parlamentar com base em argumentos técnicos.",
      "Assediar, constranger, humilhar ou ameaçar candidatas ou detentoras de mandato com o objetivo de impedir ou dificultar o exercício de seus direitos políticos.",
      "Organizar debates eleitorais abertos com tempo igualitário de fala entre todos os candidatos.",
      "Divulgar a prestação de contas oficial de campanhas eleitorais de partidos políticos."
    ],
    correta: 1
  },
  {
    tema: "Segurança de Barragens",
    enunciado: "A Política Nacional de Segurança de Barragens proíbe a construção ou alteração de barragens de mineração pelo método de alçamento a montante (considerado menos seguro).",
    pergunta: "A proibição do método de alçamento a montante tem como objetivo fundamental:",
    alternativas: [
      "Reduzir o pagamento de impostos pelas mineradoras ao poder público.",
      "Evitar colapsos estruturais e desastres socioambientais catastróficos que ameacem vidas humanas e recursos hídricos.",
      "Impedir a extração de minério de ferro em todo o território nacional.",
      "Transferir a responsabilidade pelo monitoramento das barragens para os moradores locais."
    ],
    correta: 1
  },
  {
    tema: "Cidadania e Voto Consciente",
    enunciado: "O voto no Brasil é secreto e obrigatório para os alfabetizados maiores de 18 anos, sendo facultativo para jovens de 16 e 17 anos, idosos acima de 70 anos e analfabetos.",
    pergunta: "O caráter secreto do voto assegura ao cidadão:",
    alternativas: [
      "A obrigatoriedade de divulgar a sua escolha partidária em redes sociais públicas.",
      "A liberdade de exercer a sua escolha sem coação, ameaça ou compra de votos por parte de terceiros.",
      "A perda do direito de fiscalizar a apuração das urnas pelos partidos políticos.",
      "A impossibilidade de alterar o local de votação em caso de mudança de domicílio."
    ],
    correta: 1
  },
  {
    tema: "Inclusão no Ensino Superior",
    enunciado: "O Programa Universidade para Todos (Prouni) concede bolsas de estudo integrais e parciais em cursos de graduação de instituições privadas de ensino superior.",
    pergunta: "O critério de seleção de estudantes beneficiados pelo Prouni combina o desempenho no ENEM com:",
    alternativas: [
      "Avaliação de patrimônio familiar imobiliário em cartórios da capital.",
      "A comprovação de renda familiar per capita compatível com os limites sociais do programa e ter cursado o ensino médio na rede pública ou com bolsa integral.",
      "O pagamento de taxa de inscrição proporcional ao valor da mensalidade.",
      "Indicação política de prefeitos e vereadores da região do estudante."
    ],
    correta: 1
  },
  {
    tema: "Transição Energética e Baterias",
    enunciado: "A expansão de veículos elétricos e o armazenamento de energia eólica e solar aumentaram a demanda global por minerais críticos como lítio, cobalto e níquel.",
    pergunta: "Um desafio socioambiental associado à mineração desses metais críticos é:",
    alternativas: [
      "A contaminação do solo, o alto consumo de água em regiões áridas e os impactos em territórios de populações vulneráveis.",
      "A diminuição na eficiência dos motores elétricos produzidos no mundo.",
      "A ausência total de reciclagem de componentes eletrônicos pela indústria.",
      "O aumento imediato da emissão de dióxido de carbono pelos motores elétricos."
    ],
    correta: 0
  },
  {
    tema: "Saneamento e Saúde Infantil",
    enunciado: "A falta de esgotamento sanitário adequado está diretamente relacionada à mortalidade infantil por diarreia e verminoses, além de prejudicar o desenvolvimento cognitivo de crianças.",
    pergunta: "Investimentos em saneamento básico em comunidades periféricas geram como retorno imediato:",
    alternativas: [
      "O aumento da internação hospitalar por infecções gastrointestinais pediátricas.",
      "A redução de gastos públicos na medicina curativa e a melhoria dos indicadores de rendimento e frequência escolar.",
      "A elevação da poluição dos rios e praias urbanas de lazer.",
      "A paralisação das atividades comerciais locais em bairros residenciais."
    ],
    correta: 1
  },
  {
    tema: "Direitos dos Trabalhadores Rurais",
    enunciado: "O trabalhador rural possui direitos constitucionais equivalentes aos do trabalhador urbano, incluindo piso salarial, décimo terceiro, férias e aposentadoria especial.",
    pergunta: "A aposentadoria especial do segurado especial (pequeno produtor rural familiar) garante o benefício em idade reduzida devido às:",
    alternativas: [
      "Falta de exigência de comprovação de atividade agrícola no campo.",
      "Condições desgastantes do trabalho no campo e ao compromisso social do Estado com a agricultura familiar de subsistência.",
      "Normas internacionais que proíbem o trabalho agrícola de pessoas acima dos cinquenta anos.",
      "Alíquotas de impostos diferenciadas cobradas sobre a exportação de grãos de grande porte."
    ],
    correta: 1
  },
  {
    tema: "Combate ao Racismo nas Redes",
    enunciado: "A Lei nº 14.532/2023 tipificou a injúria racial como crime de racismo, tornando-a inafiançável e imprescritível, aumentando a pena quando cometida nas redes sociais.",
    pergunta: "A equiparação da injúria racial ao crime de racismo significa que o crime:",
    alternativas: [
      "Pode ser fiançado mediante pagamento estipulado por autoridade policial imediatamente.",
      "Não prescreve com o passar do tempo e não permite o pagamento de fiança para responder em liberdade.",
      "Aplica-se unicamente quando a vítima for autoridade ocupante de cargo público.",
      "Pode ser resolvido por meio de retratação verbal sem abertura de processo judicial."
    ],
    correta: 1
  },
  {
    tema: "Educação em Tempo Integral",
    enunciado: "O Plano Nacional de Educação (PNE) estabelece a meta de oferecer educação em tempo integral em, no mínimo, 50% das escolas públicas da educação básica.",
    pergunta: "A expansão da jornada escolar em tempo integral visa fortalecer a aprendizagem através de:",
    alternativas: [
      "Repetição mecânica de aulas teóricas tradicionais sem intervalo para descanso.",
      "Formação pedagógica diversificada, atividades culturais, esportivas, reforço escolar e nutrição adequada para o desenvolvimento integral.",
      "Redução da oferta de merenda escolar durante o período vespertino.",
      "Eliminação do ensino de disciplinas de humanidades para focar apenas em testes de matemática."
    ],
    correta: 1
  },
  {
    tema: "Governança Socioambiental (ESG)",
    enunciado: "A sigla ESG (Environmental, Social and Governance) refere-se às práticas ambientais, sociais e de governança que orientam investimentos e a gestão corporativa moderna.",
    pergunta: "O pilar 'Social' dentro da abordagem ESG avalia o compromisso da empresa com:",
    alternativas: [
      "A maximização do pagamento de dividendos a acionistas minoritários sem auditoria.",
      "A diversidade da equipe, os direitos dos trabalhadores, a segurança do trabalho e as relações comunitárias transparentes.",
      "O uso exclusivo de sistemas digitais fechados de gerenciamento de dados corporativos.",
      "A aquisição de terrenos comerciais sem licença de órgãos ambientais."
    ],
    correta: 1
  }
];