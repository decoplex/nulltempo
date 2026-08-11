const P=(label,value)=>({label,value});
const S=(category,group,name,prices,text,mock="digital",note="")=>({category,group,name,prices,text,mock,note});

const services=[
  S("design","Social / Digital","Post estático",[P("Baixa","R$ 100"),P("Média","R$ 170"),P("Alta","R$ 250 + R$ 80/h adicional")],"Peça única para feed, anúncio ou comunicação institucional."),
  S("design","Social / Digital","Carrossel — até 10 telas",[P("Baixa","R$ 250"),P("Média","R$ 400"),P("Alta","R$ 650 + R$ 80/h adicional")],"Sequência editorial de até dez telas, com narrativa visual contínua.","digital"),
  S("design","Social / Digital","Kit com 3 stories estáticos",[P("Baixa","R$ 150"),P("Média","R$ 250"),P("Alta","R$ 400 + R$ 80/h adicional")],"Três peças verticais estáticas com uma mesma direção visual."),
  S("design","Social / Digital","Kit de anúncios",[P("Pequeno","R$ 580"),P("Médio","R$ 825"),P("Grande","R$ 1.400")],"Um conceito visual principal adaptado para até oito formatos de mídia.","digital","Contempla 1 conceito visual principal + adaptações para até 8 formatos: Feed 1:1, Feed 4:5, Story/Reels 9:16, horizontal, banner e outras dimensões solicitadas. Não contempla 8 conceitos visuais diferentes."),
  S("design","Social / Digital","Convite / Save the Date",[P("Pequeno","R$ 350"),P("Médio","R$ 500"),P("Grande","R$ 850")],"Convite visual para anunciar data, local e identidade de um evento.","print"),
  S("design","Social / Digital","E-mail marketing — somente layout",[P("Pequeno","R$ 450"),P("Médio","R$ 650"),P("Grande","R$ 1.100")],"Layout de campanha para e-mail; entrega visual, sem desenvolvimento."),
  S("design","Social / Digital","Imagem para Landing Page / Hotsite",[P("Baixa","R$ 50"),P("Média","R$ 120"),P("Alta","R$ 250")],"Imagem ou arte para compor a página de uma campanha.","digital","A cobrança refere-se somente à criação da imagem/arte, não ao desenvolvimento da página."),
  S("design","Impressos","Cartaz",[P("Baixa","R$ 400"),P("Média","R$ 670"),P("Alta","R$ 970")],"Peça de leitura rápida para divulgação física ou digital.","print"),
  S("design","Impressos","Flyer / Folder / Lâmina",[P("Pequeno","R$ 735"),P("Médio","R$ 1.050"),P("Grande","R$ 1.785")],"Material editorial compacto para apresentar programação, produto ou evento.","print"),
  S("design","Impressos","Display cúbico — design por face",[P("Baixa / face","R$ 80"),P("Média / face","R$ 150"),P("Alta / face","R$ 250"),P("Cubo 6 faces / baixa","R$ 480"),P("Cubo 6 faces / média","R$ 900"),P("Cubo 6 faces / alta","R$ 1.500")],"Arte aplicada às faces de uma embalagem, caixa ou display cúbico.","threed","Quando várias faces forem apenas adaptações da mesma arte, a primeira pode ser cobrada pelo valor integral e as demais por valor reduzido."),
  S("design","Credenciamento e materiais do evento","Kit ingresso + pulseira + credencial",[P("Pequeno","R$ 800"),P("Médio","R$ 1.150"),P("Grande","R$ 1.950")],"Sistema visual integrado para acesso e identificação no evento.","print"),
  S("design","Credenciamento e materiais do evento","Programação / Agenda / Mapa do evento",[P("Pequeno","R$ 1.300"),P("Médio","R$ 1.850"),P("Grande","R$ 3.150")],"Material informativo que organiza horários, espaços e percursos.","print"),
  S("design","Credenciamento e materiais do evento","Certificado personalizado",[P("Até 10 nomes","R$ 300"),P("Cada 10 adicionais","+ R$ 50")],"Certificado com identidade do evento e personalização nominal.","print"),
  S("design","Ambientação e sinalização","Backdrop / Painel de fotos / Fundo de palco",[P("Pequeno","R$ 600"),P("Médio","R$ 850"),P("Grande","R$ 1.450")],"Arte de grande formato para palco, fotos e presença de marca.","signage"),
  S("design","Ambientação e sinalização","Sistema de sinalização",[P("Pequeno","R$ 1.500"),P("Médio","R$ 2.200"),P("Grande","R$ 3.150")],"Família coordenada de placas para orientar o público pelo evento.","signage"),
  S("design","Ambientação e sinalização","Placa direcional simples — por unidade",[P("Pequeno","R$ 50"),P("Médio","R$ 100"),P("Grande","R$ 150")],"Sinalização objetiva de direção ou identificação, cobrada por unidade.","signage"),
  S("design","Ambientação e sinalização","Placa / Banner direcional complexo — por unidade",[P("Pequeno","R$ 180"),P("Médio","R$ 300"),P("Grande","R$ 500")],"Peça de orientação com maior densidade de informação.","signage","Pode conter mapa, programação, patrocinadores, QR Code, múltiplas informações e composição visual mais elaborada."),
  S("design","Ambientação e sinalização","Portal de entrada",[P("Pequeno","R$ 1.500"),P("Médio","R$ 2.000"),P("Grande","R$ 3.500")],"Identidade aplicada à estrutura que marca a chegada ao evento.","signage"),
  S("design","Ambientação e sinalização","Grafismos para estande",[P("Baixa","R$ 970"),P("Média","R$ 1.850"),P("Alta","R$ 3.360")],"Sistema de grafismos aplicado a paredes, balcões e superfícies do estande.","signage"),
  S("design","Ambientação e sinalização","Adesivos de piso / parede / vitrine",[P("Baixa","R$ 560"),P("Média","R$ 800"),P("Alta","R$ 1.360")],"Arte ambiental para orientar, comunicar ou transformar superfícies.","signage"),
  S("design","Patrocínio e apresentação","Painel de patrocinadores",[P("Pequeno","R$ 580"),P("Médio","R$ 680"),P("Grande","R$ 960")],"Organização hierárquica das marcas apoiadoras em painel institucional.","signage"),
  S("design","Patrocínio e apresentação","Apresentação comercial",[P("Pequeno","R$ 1.200"),P("Médio","R$ 2.200"),P("Grande","R$ 3.700")],"Deck visual para apresentar proposta, cotas ou projeto do evento.","digital"),
  S("design","Merchandising e brindes","Camiseta do evento",[P("Baixa","R$ 300"),P("Média","R$ 600"),P("Alta","R$ 950")],"Arte vestível alinhada à identidade do evento.","print","A complexidade considera ilustração, quantidade de grafismos, áreas de aplicação, frente/costas/mangas e nível de detalhamento."),
  S("design","Merchandising e brindes","Kit de brindes",[P("Baixa","R$ 1.150"),P("Média","R$ 1.650"),P("Alta","R$ 2.800")],"Sistema visual aplicado a um conjunto coordenado de itens.","print","Pode contemplar copos, sacolas, cadernos, garrafas, caixas e outros itens, especialmente quando houver ilustração ou grafismo personalizado."),
  S("design","Merchandising e brindes","Troféu + Medalha + Certificado",[P("Pequeno","R$ 950"),P("Médio","R$ 1.350"),P("Grande","R$ 2.300")],"Conjunto visual de reconhecimento para cerimônias e premiações.","print"),
  S("design","Produção / adaptações","Adaptação / Redimensionamento — por peça",[P("Baixa","R$ 50"),P("Média","R$ 150"),P("Alta","R$ 315")],"Conversão de uma peça existente para outra dimensão ou aplicação."),
  S("motion","Social / Campanha","Logo animado / Sting",[P("Pequeno","R$ 950"),P("Médio","R$ 1.350"),P("Grande","R$ 2.300")],"Assinatura curta que revela a marca com movimento e som.","motion"),
  S("motion","Social / Campanha","Key Visual animado",[P("Pequeno","R$ 1.250"),P("Médio","R$ 1.800"),P("Grande","R$ 3.050")],"Versão em movimento da peça visual central da campanha.","motion"),
  S("motion","Social / Campanha","Story / Post animado",[P("Pequeno","R$ 200"),P("Médio","R$ 300"),P("Grande","R$ 500")],"Conteúdo curto animado para feed, stories ou mídia paga.","motion"),
  S("motion","Social / Campanha","Reveal de atração / palestrante / lineup",[P("Pequeno","R$ 1.150"),P("Médio","R$ 1.650"),P("Grande","R$ 2.800")],"Anúncio em movimento que cria expectativa para uma revelação.","motion"),
  S("motion","Social / Campanha","Teaser — até 15 segundos",[P("Baixa","R$ 650"),P("Média","R$ 920"),P("Alta","R$ 1.200")],"Vídeo curto de antecipação, com até quinze segundos.","motion"),
  S("motion","Social / Campanha","Promocional — até 30 segundos",[P("Baixa","R$ 920"),P("Média","R$ 1.300"),P("Alta","R$ 1.700")],"Vídeo promocional compacto para apresentar a mensagem principal.","motion"),
  S("motion","Social / Campanha","Promocional — 45 a 60 segundos",[P("Baixa","R$ 1.380"),P("Média","R$ 1.950"),P("Alta","R$ 2.550")],"Filme promocional com espaço para narrativa, informações e chamada.","motion"),
  S("motion","Social / Campanha","Mapa / Localização / Rota animada",[P("Pequeno","R$ 700"),P("Médio","R$ 950"),P("Grande","R$ 1.250")],"Animação que orienta visualmente o caminho até o evento.","motion"),
  S("motion","Pacote regressivo","Pacote com até 5 vídeos",[P("Pequeno","R$ 2.400"),P("Médio","R$ 3.400"),P("Grande","R$ 5.800")],"Série regressiva com uma mesma identidade visual.","motion","Exemplos: Faltam 5 dias; Faltam 3 dias; É amanhã; É hoje; Últimos ingressos."),
  S("motion","Pacote regressivo","Vídeo adicional",[P("Pequeno","+ R$ 250"),P("Médio","+ R$ 350"),P("Grande","+ R$ 500")],"Novo vídeo derivado da identidade do pacote regressivo.","motion"),
  S("motion","Palco / Telão / Cerimônia","Filme de abertura",[P("Baixa","R$ 1.500"),P("Média","R$ 2.700"),P("Alta","R$ 3.800")],"Filme que inicia a cerimônia e estabelece o tom do evento.","stage"),
  S("motion","Bumper de patrocinador","Vinheta curta por patrocinador",[P("Até 5","R$ 150 cada / total R$ 750"),P("Até 10","R$ 170 cada / total R$ 1.700"),P("Até 15","R$ 200 cada / total R$ 3.000"),P("Acima de 15","+ R$ 230 por vídeo adicional")],"Vinheta curta para apresentar a marca do patrocinador em telão, transmissão ou cerimônia.","stage"),
  S("motion","Lower Thirds / Tarjas","Baixa complexidade — pacote com até 5 nomes",[P("Até 5 nomes","R$ 300"),P("Nome adicional","+ R$ 30")],"Tarja animada simples para identificar pessoas na tela.","stage"),
  S("motion","Lower Thirds / Tarjas","Média complexidade — pacote com até 5 nomes",[P("Até 5 nomes","R$ 500"),P("Nome adicional","+ R$ 50")],"Tarja animada com tratamento visual intermediário.","stage"),
  S("motion","Lower Thirds / Tarjas","Alta complexidade — pacote com até 5 nomes",[P("Até 5 nomes","R$ 700"),P("Nome adicional","+ R$ 70")],"Tarja animada com construção visual e movimento mais elaborados.","stage"),
  S("motion","Transições e elementos de palco","Pacote de transições / Stingers",[P("Baixa","R$ 200"),P("Média","R$ 490"),P("Alta","R$ 1.500")],"Transições curtas que conectam blocos de conteúdo no telão.","stage"),
  S("motion","Transições e elementos de palco","Loop para telão / LED",[P("Baixa","R$ 700"),P("Média","R$ 900"),P("Alta","R$ 1.400")],"Animação contínua desenhada para painéis e grandes formatos.","stage"),
  S("motion","Transições e elementos de palco","Pacote com 3 loops ambientes",[P("Baixa","R$ 330"),P("Média","R$ 510"),P("Alta","R$ 810")],"Três loops coordenados para ambientar momentos do evento.","stage","Os pacotes pressupõem reaproveitamento de uma mesma direção visual. Loops completamente diferentes podem ser cobrados individualmente."),
  S("motion","Transições e elementos de palco","Pacote com 5 loops ambientes",[P("Baixa","R$ 550"),P("Média","R$ 850"),P("Alta","R$ 1.350")],"Cinco loops coordenados para uma ambientação mais ampla.","stage","Os pacotes pressupõem reaproveitamento de uma mesma direção visual. Loops completamente diferentes podem ser cobrados individualmente."),
  S("motion","Palestrantes e cerimônia","Template de entrada de palestrante",[P("Baixa","R$ 1.000"),P("Média","R$ 1.700"),P("Alta","R$ 2.300")],"Animação de entrada para introduzir cada palestrante no palco.","stage"),
  S("motion","Palestrantes e cerimônia","Intervalo / Holding / Countdown",[P("Baixa","R$ 870"),P("Média","R$ 1.300"),P("Alta","R$ 1.850")],"Tela animada para pausas, espera ou contagem regressiva.","stage"),
  S("motion","Pacote de premiação","Template visual de premiação",[P("Até 3 premiados","R$ 2.500"),P("Até 5 premiados","R$ 4.500"),P("Até 8 premiados","R$ 6.000")],"Template para exibir nomes, fotos, categorias, indicados e vencedores.","stage"),
  S("motion","Adaptações","Adaptação para LED / múltiplas telas",[P("Baixa","R$ 600"),P("Média","R$ 850"),P("Alta","R$ 1.450")],"Reconfiguração de conteúdo para resoluções e arranjos especiais de telas.","stage"),
  S("motion","Adaptações","Versão / Cutdown adicional",[P("Pequeno","R$ 735"),P("Médio","R$ 1.050"),P("Grande","R$ 1.785")],"Versão derivada de um vídeo já pronto.","motion","Exemplos: 60s → 30s; 30s → 15s; horizontal → vertical; feed → stories; vídeo principal → versão para telão."),
  S("motion","Pós-evento","Recap",[P("Pequeno","R$ 1.800"),P("Médio","R$ 2.700"),P("Grande","R$ 3.600")],"Resumo dinâmico dos principais momentos do evento.","motion"),
  S("motion","Pós-evento","Aftermovie — com material profissional fornecido",[P("Pequeno","R$ 2.500"),P("Médio","R$ 5.000"),P("Grande","R$ 7.000")],"Filme de memória e impacto produzido com captação profissional fornecida.","motion"),

  S("3d","3D / VFX","Logo 3D animado",[P("Pequeno","R$ 3.800"),P("Médio","R$ 5.450"),P("Grande","R$ 7.800")],"Marca modelada, iluminada e animada em ambiente tridimensional.","threed"),
  S("3d","3D / VFX","Cena / Produto / Cenografia 3D",[P("Projeto","Sob consulta")],"Construção tridimensional de produto, espaço ou cenografia virtual.","threed"),
  S("3d","3D / VFX","Composição / VFX",[P("Projeto","Sob consulta")],"Integração de elementos, efeitos e tratamentos visuais em imagem ou vídeo.","threed"),
  S("3d","3D / VFX","Motion Designer — diária presencial no evento",[P("Diária","Sob consulta")],"Suporte presencial para produzir e adaptar conteúdo durante o evento.","stage")
];

const list=document.getElementById("serviceList"),stage=document.getElementById("previewStage"),previewCode=document.getElementById("previewCode"),previewTitle=document.getElementById("previewTitle"),previewText=document.getElementById("previewText"),resultCount=document.getElementById("resultCount"),filters=[...document.querySelectorAll(".filter")];
const quoteCart=document.getElementById("quoteCart"),cartToggle=document.getElementById("cartToggle"),cartPanel=document.getElementById("cartPanel"),cartClose=document.getElementById("cartClose"),cartList=document.getElementById("cartList"),cartEmpty=document.getElementById("cartEmpty"),cartCount=document.getElementById("cartCount"),cartTotal=document.getElementById("cartTotal"),cartTotalCompact=document.getElementById("cartTotalCompact"),cartSend=document.getElementById("cartSend"),clearSelectionTop=document.getElementById("clearSelectionTop"),clearSelectionCart=document.getElementById("clearSelectionCart");
const selectedServices=new Map();

const phosphorPaths={
  image:'<rect x="32" y="40" width="192" height="176" rx="16"/><circle cx="88" cy="96" r="16"/><path d="m48 184 48-48 32 32 24-24 56 40"/>',
  stack:'<rect x="48" y="40" width="160" height="176" rx="12"/><path d="M80 16h128a16 16 0 0 1 16 16v152M32 72V40a16 16 0 0 1 16-16h120"/>',
  phone:'<rect x="72" y="24" width="112" height="208" rx="20"/><path d="M112 56h32M112 200h32"/>',
  megaphone:'<path d="M144 72 56 104v48l88 32Z"/><path d="M144 72c32-24 56-16 56 56s-24 80-56 56M72 158l16 58h40l-24-68"/>',
  envelope:'<rect x="24" y="48" width="208" height="160" rx="16"/><path d="m32 64 96 80 96-80"/>',
  browser:'<rect x="24" y="40" width="208" height="176" rx="16"/><path d="M24 80h208M56 60h1M80 60h1"/>',
  poster:'<rect x="56" y="24" width="144" height="208"/><path d="M80 64h96M80 96h64M80 184h96"/>',
  cube:'<path d="m128 24 88 48v112l-88 48-88-48V72Z"/><path d="m40 72 88 48 88-48M128 120v112"/>',
  ticket:'<path d="M32 72h192v40a24 24 0 0 0 0 48v40H32v-40a24 24 0 0 0 0-48Z"/><path d="M128 88v16M128 128v16M128 168v16"/>',
  map:'<path d="m24 56 64-24 80 24 64-24v168l-64 24-80-24-64 24Z"/><path d="M88 32v168M168 56v168"/>',
  certificate:'<rect x="40" y="32" width="176" height="144" rx="12"/><path d="M72 72h112M72 104h80"/><circle cx="168" cy="176" r="32"/><path d="m150 200-8 40 26-16 26 16-8-40"/>',
  signpost:'<path d="M128 232V56M64 88h144l24 32-24 32H64L40 120Z"/><path d="M104 24h48"/>',
  gate:'<path d="M32 224V104l96-64 96 64v120M72 224v-88h112v88M16 224h224"/><path d="M104 72h48"/>',
  storefront:'<path d="M32 96h192l-16-56H48Z"/><path d="M40 96v128h176V96M72 224v-72h64v72"/><path d="M32 96c0 24 32 24 32 0 0 24 32 24 32 0 0 24 32 24 32 0 0 24 32 24 32 0 0 24 32 24 32 0 0 24 32 24 32 0"/>',
  sticker:'<path d="M128 24a104 104 0 1 0 104 104V24Z"/><path d="M232 24 128 128h104"/>',
  presentation:'<path d="M32 40h192v136H32Z"/><path d="M128 176v56M88 232h80M72 136l40-40 32 24 40-48"/>',
  shirt:'<path d="m88 40-56 32 24 48 32-16v120h80V104l32 16 24-48-56-32c-8 32-72 32-80 0Z"/>',
  gift:'<rect x="32" y="104" width="192" height="120" rx="8"/><path d="M24 72h208v40H24ZM128 72v152"/><path d="M128 72c-48 0-64-16-56-40s48 0 56 40Zm0 0c48 0 64-16 56-40s-48 0-56 40Z"/>',
  trophy:'<path d="M80 32h96v64c0 40-16 64-48 64S80 136 80 96Z"/><path d="M80 56H40v24c0 32 16 48 48 48M176 56h40v24c0 32-16 48-48 48M128 160v40M80 224h96M96 200h64"/>',
  resize:'<path d="M88 40H40v48M168 40h48v48M88 216H40v-48M168 216h48v-48"/><path d="m40 88 64-64M216 88l-64-64M40 168l64 64M216 168l-64 64"/>',
  play:'<circle cx="128" cy="128" r="104"/><path d="m104 80 72 48-72 48Z"/>',
  route:'<circle cx="56" cy="56" r="24"/><circle cx="200" cy="200" r="24"/><path d="M56 80c0 96 144 0 144 96"/>',
  countdown:'<circle cx="128" cy="136" r="88"/><path d="M96 24h64M128 48v24M128 136l40-32"/>',
  screen:'<rect x="24" y="40" width="208" height="152" rx="8"/><path d="M96 224h64M128 192v32M56 152l48-48 32 24 48-56"/>',
  microphone:'<rect x="88" y="24" width="80" height="136" rx="40"/><path d="M56 120a72 72 0 0 0 144 0M128 192v40M88 232h80"/>',
  scissors:'<circle cx="64" cy="184" r="32"/><circle cx="64" cy="72" r="32"/><path d="m88 88 136 104M88 168 224 64"/>',
  film:'<rect x="24" y="48" width="208" height="160" rx="8"/><path d="M24 88h208M24 168h208M64 48v40M112 48v40M160 48v40M208 48v40M64 168v40M112 168v40M160 168v40M208 168v40"/>',
  sparkles:'<path d="m128 24 16 48 48 16-48 16-16 48-16-48-48-16 48-16ZM200 152l8 24 24 8-24 8-8 24-8-24-24-8 24-8Z"/>'
};

function iconFor(service){
  const n=service.name.toLowerCase();
  const rules=[[/certificado/,"certificate"],[/camiseta/,"shirt"],[/brindes/,"gift"],[/troféu|medalha|premiação/,"trophy"],[/portal/,"gate"],[/estande/,"storefront"],[/placa|sinalização|direcional/,"signpost"],[/adesivos/,"sticker"],[/cubo|cúbico|3d/,"cube"],[/ingresso|pulseira|credencial/,"ticket"],[/programa|agenda|mapa|rota/,"map"],[/e-mail/,"envelope"],[/landing|hotsite/,"browser"],[/carrossel|stories/,"stack"],[/post estático|imagem/,"image"],[/anúncios|reveal/,"megaphone"],[/convite|save/,"ticket"],[/cartaz|flyer|folder|lâmina/,"poster"],[/apresentação|palestrante/,"presentation"],[/backdrop|painel|fundo de palco|telão|led|holding|lower|tarjas|transições|stingers|loop/,"screen"],[/adaptação|redimensionamento/,"resize"],[/logo animado|key visual|story|teaser|promocional|regressivo|filme de abertura/,"play"],[/countdown/,"countdown"],[/bumper|patrocinador/,"presentation"],[/motion designer/,"microphone"],[/cutdown/,"scissors"],[/recap|aftermovie/,"film"],[/vfx|composição|cenografia/,"sparkles"]];
  return (rules.find(([pattern])=>pattern.test(n))||[null,service.category==="motion"?"play":"image"])[1];
}

function pricingBasis(service){
  const labels=service.prices.map(p=>p.label.toLowerCase());
  if(labels.some(l=>l.startsWith("baixa")||l.startsWith("média")||l.startsWith("alta"))) return "Nível de complexidade";
  if(labels.some(l=>l.startsWith("pequeno")||l.startsWith("médio")||l.startsWith("grande"))) return "Porte da empresa cliente";
  if(labels.some(l=>l.includes("nome")||l.includes("premiado")||l.includes("patrocinador")||l.includes("até"))) return "Quantidade de entregas";
  if(labels.some(l=>l.includes("face"))) return "Quantidade e complexidade";
  return "Escopo do projeto";
}

function protectOrphans(text){
  return text.replace(/\s+(de|do|da|dos|das|e|ou|para|por|com|em|no|na)\s+/gi,(match,word)=>` ${word}\u00a0`);
}

const previewLabels={
  "Carrossel — até 10 telas":"Carrossel",
  "Kit com 3 stories estáticos":"Kit de stories",
  "Kit de anúncios":"Kit de anúncios",
  "Convite / Save the Date":"Convite do evento",
  "E-mail marketing — somente layout":"E-mail marketing",
  "Imagem para Landing Page / Hotsite":"Imagem de landing page",
  "Flyer / Folder / Lâmina":"Material impresso",
  "Display cúbico — design por face":"Display cúbico",
  "Kit ingresso + pulseira + credencial":"Kit de acesso",
  "Programação / Agenda / Mapa do evento":"Programação do evento",
  "Backdrop / Painel de fotos / Fundo de palco":"Backdrop de palco",
  "Placa direcional simples — por unidade":"Placa direcional",
  "Placa / Banner direcional complexo — por unidade":"Sinalização complexa",
  "Grafismos para estande":"Grafismos de estande",
  "Adesivos de piso / parede / vitrine":"Adesivos ambientais",
  "Painel de patrocinadores":"Painel de marcas",
  "Troféu + Medalha + Certificado":"Kit de premiação",
  "Adaptação / Redimensionamento — por peça":"Redimensionamento",
  "Reveal de atração / palestrante / lineup":"Reveal de atração",
  "Mapa / Localização / Rota animada":"Rota animada",
  "Pacote com até 5 vídeos":"Pacote regressivo",
  "Vinheta curta por patrocinador":"Bumper de patrocinador",
  "Baixa complexidade — pacote com até 5 nomes":"Tarjas essenciais",
  "Média complexidade — pacote com até 5 nomes":"Tarjas intermediárias",
  "Alta complexidade — pacote com até 5 nomes":"Tarjas avançadas",
  "Pacote de transições / Stingers":"Transições de palco",
  "Pacote com 3 loops ambientes":"3 loops ambientes",
  "Pacote com 5 loops ambientes":"5 loops ambientes",
  "Template de entrada de palestrante":"Entrada de palestrante",
  "Intervalo / Holding / Countdown":"Holding e countdown",
  "Template visual de premiação":"Template de premiação",
  "Adaptação para LED / múltiplas telas":"Adaptação para LED",
  "Versão / Cutdown adicional":"Cutdown adicional",
  "Aftermovie — com material profissional fornecido":"Aftermovie",
  "Cena / Produto / Cenografia 3D":"Cenografia 3D",
  "Motion Designer — diária presencial no evento":"Motion no evento"
};

function previewLabel(service){
  if(previewLabels[service.name]) return previewLabels[service.name];
  const clean=service.name.replace(/\s+—\s+.*/,"");
  return clean.length>34?clean.replace(/\s*\/\s*/g," e "):clean;
}

function vectorScene(service,index=0){
  const icon=iconFor(service),path=phosphorPaths[icon],code=String(index+1).padStart(2,"0"),variant=index%4,title=previewLabel(service);
  const motif=variant===0?'<circle cx="410" cy="72" r="118" class="art-soft"/>':variant===1?'<path d="M300 0h220v360H180Z" class="art-soft"/>':variant===2?'<path d="M0 260 520 72v128L0 360Z" class="art-soft"/>':'<circle cx="430" cy="290" r="150" class="art-soft"/><circle cx="430" cy="290" r="92" class="art-ring"/>';
  const length=title.length,longestWord=Math.max(...title.split(/[\s/—+]+/).map(word=>word.length));
  const sizeClass=length>52||longestWord>17?"vector-title--xs":length>36||longestWord>13?"vector-title--sm":"";
  return `<div class="vector-preview vector-preview--${variant}">
    <svg class="service-art" viewBox="0 0 520 360" role="img" aria-label="Ilustração vetorial de ${service.name}" data-icon-source="Phosphor Icons" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="360" class="art-bg"/>${motif}
      <path d="M32 40h92M32 320h154" class="art-rule"/><text x="32" y="70" class="art-code">NULLTEMPO / ${code}</text>
    </svg>
    <div class="vector-icon-zone" aria-hidden="true"><svg class="phosphor-icon" viewBox="0 0 256 256" data-phosphor-icon="${icon}" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round">${path}</g></svg></div>
    <div class="vector-copy"><span>${service.category==="motion"?"MOTION DESIGN":service.category==="3d"?"3D / VFX":"DESIGN GRÁFICO"}</span><strong class="vector-title ${sizeClass}">${protectOrphans(title)}</strong><small>PHOSPHOR / ${icon.toUpperCase()}</small></div>
  </div>`;
}

function mockup(service,index=0){
  return `<div class="mockup">${vectorScene(service,index)}</div>`;
}
function activate(row,service,index){
  document.querySelectorAll(".service-row").forEach(el=>el.classList.remove("is-active"));row.classList.add("is-active");
  stage.innerHTML=mockup(service,index);previewCode.textContent=String(index+1).padStart(2,"0");previewTitle.textContent=service.name;previewText.textContent=service.text+(service.note?` ${service.note}`:"");
}

function currencyValue(text){
  const total=text.match(/total\s*R\$\s*([\d.]+)/i);if(total)return Number(total[1].replaceAll(".",""));
  const matches=[...text.matchAll(/R\$\s*([\d.]+)/g)];
  if(!matches.length)return null;
  return Number(matches[0][1].replaceAll(".",""));
}

function formatBRL(value){return value===null?"Sob consulta":value.toLocaleString("pt-BR",{style:"currency",currency:"BRL",maximumFractionDigits:0})}

function setCartOpen(open){cartToggle.setAttribute("aria-expanded",String(open));cartPanel.hidden=!open;quoteCart.classList.toggle("is-open",open)}

function updateCart(){
  const entries=[...selectedServices.values()],total=entries.reduce((sum,item)=>sum+(item.estimate||0),0);
  cartCount.textContent=String(entries.length);cartTotal.textContent=formatBRL(total);cartTotalCompact.textContent=formatBRL(total);cartEmpty.hidden=entries.length>0;clearSelectionTop.disabled=!entries.length;clearSelectionCart.disabled=!entries.length;
  cartList.innerHTML=entries.map(item=>`<li><div><strong>${protectOrphans(item.service.name)}</strong><span>${item.price.label} — ${formatBRL(item.estimate)}</span></div><button type="button" data-remove="${item.index}" aria-label="Remover ${item.service.name}">×</button></li>`).join("");
  document.querySelectorAll("[data-price-select]").forEach(button=>{const selected=selectedServices.get(Number(button.dataset.serviceIndex));button.setAttribute("aria-pressed",String(Boolean(selected&&selected.priceIndex===Number(button.dataset.priceSelect))))});
  if(!entries.length){cartSend.classList.add("is-disabled");cartSend.setAttribute("aria-disabled","true");cartSend.href="#";return}
  const itemBlocks=entries.map((item,i)=>`*${String(i+1).padStart(2,"0")} — ${item.service.name}*\nOpção escolhida: ${item.price.label}\nValor: ${formatBRL(item.estimate)}`);
  const message=`Olá! Tenho interesse em solicitar um orçamento.\n\n*ITENS SELECIONADOS*\n\n${itemBlocks.join("\n\n")}\n\n*RESUMO*\nItens selecionados: ${entries.length}\nTotal estimado: *${formatBRL(total)}*\n\n_Entendo que os valores são referenciais e que o orçamento final depende do briefing, escopo e prazo._`;
  cartSend.href=`https://wa.me/554498142748?text=${encodeURIComponent(message)}`;cartSend.target="_blank";cartSend.rel="noopener noreferrer";cartSend.classList.remove("is-disabled");cartSend.removeAttribute("aria-disabled");
}

function selectPrice(index,priceIndex){
  const current=selectedServices.get(index);if(current&&current.priceIndex===priceIndex){selectedServices.delete(index)}else{const service=services[index],price=service.prices[priceIndex];selectedServices.set(index,{index,service,price,priceIndex,estimate:currencyValue(price.value)})}updateCart()
}

function removeService(index){selectedServices.delete(index);updateCart()}

function clearAllServices(){selectedServices.clear();updateCart()}
function renderServices(filter="all"){
  list.innerHTML="";const visible=services.filter(s=>filter==="all"||s.category===filter);resultCount.textContent=`${visible.length} SERVIÇOS / REFERÊNCIA`;
  let currentGroup="";
  visible.forEach(service=>{
    if(service.group!==currentGroup){currentGroup=service.group;const head=document.createElement("div");head.className="group-heading";head.innerHTML=`<h3>${currentGroup}</h3><span>${service.category==="design"?"Design gráfico":service.category==="motion"?"Motion design":"Especialidades"}</span>`;list.appendChild(head)}
    const index=services.indexOf(service),row=document.createElement("article");row.className="service-row";row.tabIndex=0;row.setAttribute("aria-label",`${service.name}. Ver detalhes`);
    row.innerHTML=`<span class="service-index">${String(index+1).padStart(2,"0")}</span><strong class="service-name">${protectOrphans(service.name)}</strong><span class="service-prices"><span class="pricing-basis">${pricingBasis(service)}</span>${service.prices.map((p,priceIndex)=>`<button type="button" class="price-pill" data-service-index="${index}" data-price-select="${priceIndex}" aria-pressed="${selectedServices.get(index)?.priceIndex===priceIndex}" aria-label="Selecionar ${p.label}, ${p.value}, para ${service.name}"><b>${p.label}</b>${p.value}</button>`).join("")}</span>${service.note?`<p class="service-note">${protectOrphans(service.note)}</p>`:""}`;
    row.querySelectorAll("[data-price-select]").forEach(button=>button.addEventListener("click",event=>{event.stopPropagation();selectPrice(index,Number(button.dataset.priceSelect))}));
    row.addEventListener("mouseenter",()=>activate(row,service,index));row.addEventListener("focus",()=>activate(row,service,index));row.addEventListener("click",()=>activate(row,service,index));row.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();activate(row,service,index)}});list.appendChild(row);
  });
}
filters.forEach(btn=>btn.addEventListener("click",()=>{filters.forEach(b=>b.classList.remove("is-active"));btn.classList.add("is-active");renderServices(btn.dataset.filter)}));
cartToggle.addEventListener("click",()=>setCartOpen(cartPanel.hidden));cartClose.addEventListener("click",()=>setCartOpen(false));quoteCart.addEventListener("mouseenter",()=>setCartOpen(true));quoteCart.addEventListener("mouseleave",()=>setCartOpen(false));clearSelectionTop.addEventListener("click",clearAllServices);clearSelectionCart.addEventListener("click",clearAllServices);cartList.addEventListener("click",event=>{const button=event.target.closest("[data-remove]");if(button)removeService(Number(button.dataset.remove))});cartSend.addEventListener("click",event=>{if(cartSend.classList.contains("is-disabled"))event.preventDefault()});
document.addEventListener("mousemove",e=>{const glow=document.querySelector(".cursor-glow");if(glow){glow.style.left=`${e.clientX}px`;glow.style.top=`${e.clientY}px`}});
renderServices();updateCart();
