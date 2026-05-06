// ════════════════════════════════════════════════════════════
//  COMO USAR:
//  1. Acesse script.google.com
//  2. Clique em "Novo projeto"
//  3. Apague o código que já existe
//  4. Cole TODO este código
//  5. Clique no botão "Executar" (triângulo)
//  6. Autorize quando pedir permissão
//  7. O formulário será criado no seu Google Drive
//  8. No log (View > Logs) aparece a URL do formulário
// ════════════════════════════════════════════════════════════

function criarFormularioBriefing() {

  var form = FormApp.create('Briefing – Gestão de Tráfego Pago | DigitalCreate');
  form.setDescription('Preencha com o máximo de detalhes possível. Quanto mais completo o briefing, mais assertiva e eficiente será a sua campanha!');
  form.setProgressBar(true);
  form.setShowLinkToRespondAgain(false);
  form.setConfirmationMessage('Briefing enviado com sucesso! A equipe DigitalCreate vai analisar e entrar em contato em breve.');

  // ── SEÇÃO 1: IDENTIFICAÇÃO ──────────────────────────────
  form.addSectionHeaderItem()
    .setTitle('01 · Identificação')
    .setHelpText('Dados de quem preenche e sobre o negócio que será anunciado.');

  form.addTextItem()
    .setTitle('Nome completo e cargo de quem responde')
    .setHelpText('Ex: João Silva – Gestor de Marketing')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Nome da empresa / produto / serviço que será anunciado')
    .setHelpText('Ex: Academia FitPro, Curso NR-35, Clínica Vitallis')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('Descreva o que você faz, seu diferencial e segmento de atuação')
    .setHelpText('Inclua tempo de mercado, modelo de entrega (online/presencial), certificações, diferenciais')
    .setRequired(true);

  // ── SEÇÃO 2: OBJETIVO ───────────────────────────────────
  form.addPageBreakItem()
    .setTitle('02 · Objetivo da Campanha')
    .setHelpText('O norte estratégico de toda a campanha. Sem objetivo claro, não há otimização possível.');

  form.addMultipleChoiceItem()
    .setTitle('Qual é o objetivo principal desta campanha?')
    .setChoiceValues([
      'Gerar vendas diretas',
      'Captar leads',
      'Direcionar ao WhatsApp',
      'Agendamento',
      'Visibilidade de marca',
      'Promover evento',
      'Outro'
    ])
    .setRequired(true);

  form.addTextItem()
    .setTitle('Qual a ação exata que você quer que o usuário realize ao ver o anúncio?')
    .setHelpText('Ex: clicar no botão WhatsApp, preencher formulário de lead, comprar no checkout')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('Existe meta quantitativa para a campanha?')
    .setHelpText('Número de leads, CPA máximo, ROAS mínimo, alcance, ROI esperado');

  form.addMultipleChoiceItem()
    .setTitle('Esta campanha é para qual etapa do funil?')
    .setChoiceValues([
      'Topo – Descoberta e consciência',
      'Meio – Consideração e nutrição',
      'Fundo – Conversão e fechamento',
      'Todos os funis'
    ])
    .setRequired(true);

  // ── SEÇÃO 3: HISTÓRICO ──────────────────────────────────
  form.addPageBreakItem()
    .setTitle('03 · Histórico de Campanhas')
    .setHelpText('O que já foi feito aponta o que não repetir — e o que pode escalar.');

  form.addMultipleChoiceItem()
    .setTitle('Já rodou campanhas pagas anteriormente?')
    .setChoiceValues(['Sim', 'Não – primeira campanha'])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('Quais plataformas, quais resultados e principais aprendizados?')
    .setHelpText('Ex: Meta Ads – 300 leads em 30 dias a R$18. Aprendizado: vídeo curto convertia 3x mais que imagem estática.');

  // ── SEÇÃO 4: PÚBLICO-ALVO ───────────────────────────────
  form.addPageBreakItem()
    .setTitle('04 · Público-Alvo')
    .setHelpText('Quanto mais específico, mais precisa a segmentação e menor o custo por resultado.');

  form.addParagraphTextItem()
    .setTitle('Quem é o cliente ideal que você quer atingir?')
    .setHelpText('Idade, gênero, localização, profissão, renda, interesses, comportamentos, plataformas que usa')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('Qual é a dor, problema ou necessidade mais urgente do seu público?')
    .setHelpText('A dor que o faz pesquisar sua solução agora, não amanhã')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('O que essa pessoa já tentou antes que não funcionou?')
    .setHelpText('Concorrentes, soluções alternativas, tentativas frustradas anteriores');

  form.addParagraphTextItem()
    .setTitle('O que faria essa pessoa NÃO comprar / NÃO converter?')
    .setHelpText('Barreiras psicológicas, objeções antes mesmo de clicar no anúncio')
    .setRequired(true);

  // ── SEÇÃO 5: PROPOSTA DE VALOR ──────────────────────────
  form.addPageBreakItem()
    .setTitle('05 · Proposta de Valor e Oferta')
    .setHelpText('O coração da conversão — por que seu cliente deve escolher você, agora.');

  form.addParagraphTextItem()
    .setTitle('Qual é o principal benefício e diferencial competitivo do seu produto/serviço?')
    .setHelpText('Foque no BENEFÍCIO (resultado que o cliente obtém), não apenas na característica técnica')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('O que está incluso na oferta? Bônus, preço e garantia?')
    .setHelpText('Tudo que compõe o pacote que será anunciado');

  form.addParagraphTextItem()
    .setTitle('Existe oferta especial, desconto ou urgência para esta campanha?')
    .setHelpText('Promoção com prazo, vagas limitadas, bônus exclusivo para quem clicar no anúncio');

  // ── SEÇÃO 6: COMUNICAÇÃO ────────────────────────────────
  form.addPageBreakItem()
    .setTitle('06 · Comunicação e Mensagem')
    .setHelpText('O que falar, como falar — e o que jamais deve ser dito.');

  form.addParagraphTextItem()
    .setTitle('Quais são as mensagens e argumentos principais para os anúncios?')
    .setHelpText('Frases de impacto, argumentos de venda, CTAs que devem aparecer')
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle('Qual o tom de voz da comunicação?')
    .setChoiceValues([
      'Direto e objetivo',
      'Formal e técnico',
      'Emocional e empático',
      'Descontraído e próximo',
      'Urgente e persuasivo',
      'Educativo e consultivo'
    ])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('Palavras-chave de busca (Google Ads) e termos que DEVEM aparecer nos anúncios')
    .setHelpText('Termos técnicos, palavras que seu público digita, expressões que conectam');

  form.addParagraphTextItem()
    .setTitle('O que NÃO deve ser comunicado? Restrições de mensagem ou imagem')
    .setHelpText('Promessas proibidas, termos a evitar, restrições legais ou de compliance');

  // ── SEÇÃO 7: OBJEÇÕES E GATILHOS ───────────────────────
  form.addPageBreakItem()
    .setTitle('07 · Objeções e Gatilhos Mentais')
    .setHelpText('As barreiras que impedem a conversão — e como quebrá-las antes que apareçam.');

  form.addParagraphTextItem()
    .setTitle('Por que alguém hesitaria em comprar e como você quebra cada objeção?')
    .setHelpText('Liste: Objeção → Resposta. Ex: "Certificado é válido?" → "Homologado pelo MTE, aceito em qualquer empresa"')
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle('Quais gatilhos mentais você tem disponíveis para usar?')
    .setChoiceValues([
      'Escassez (vagas/estoque)',
      'Urgência (prazo/promoção)',
      'Autoridade',
      'Prova social',
      'Reciprocidade',
      'Garantia'
    ])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('Descreva cada gatilho com detalhes concretos')
    .setHelpText('Ex: "50 vagas disponíveis", "Promoção encerra domingo às 23h59", "4.9 estrelas com 320 avaliações"');

  // ── SEÇÃO 8: CREDIBILIDADE ──────────────────────────────
  form.addPageBreakItem()
    .setTitle('08 · Prova e Credibilidade')
    .setHelpText('Evidências reais que eliminam a desconfiança e aceleram a decisão de compra.');

  form.addParagraphTextItem()
    .setTitle('Você tem depoimentos, cases, números ou resultados para usar nos anúncios?')
    .setHelpText('Depoimentos com nome/foto, número de clientes, resultados mensuráveis, antes e depois, prints, vídeos')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('Quais credenciais, certificações, parcerias ou reconhecimentos você pode destacar?')
    .setHelpText('Certificações do setor, parceiros estratégicos, prêmios, cobertura na mídia');

  // ── SEÇÃO 9: CONCORRÊNCIA ───────────────────────────────
  form.addPageBreakItem()
    .setTitle('09 · Concorrência e Posicionamento')
    .setHelpText('Entender o mercado é saber onde posicionar sua oferta para se destacar.');

  form.addParagraphTextItem()
    .setTitle('Quem são seus principais concorrentes diretos e indiretos?')
    .setHelpText('Diretos = mesma solução; Indiretos = alternativas que seu público também considera')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('O que os concorrentes estão prometendo e como você se posiciona melhor?')
    .setHelpText('Argumento que te diferencia no mercado disputado');

  // ── SEÇÃO 10: ATENDIMENTO ───────────────────────────────
  form.addPageBreakItem()
    .setTitle('10 · Atendimento e Pós-Conversão')
    .setHelpText('O lead chegou — o que acontece nos próximos minutos define se ele compra ou some.');

  form.addParagraphTextItem()
    .setTitle('Qual será o CTA principal e o fluxo de conversão?')
    .setHelpText('Botão WhatsApp, formulário de lead, checkout direto? Quantos passos até a compra?')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('Como você atende o lead após entrar?')
    .setHelpText('Fluxo de atendimento, tempo de resposta, canais (WhatsApp, CRM, ligação, e-mail)')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('O que é indispensável que o lead saiba ANTES de contratar?')
    .setHelpText('Pré-requisitos, prazo de entrega, processo de trabalho, o que está fora do escopo');

  form.addParagraphTextItem()
    .setTitle('Qual transformação/resultado o cliente deve perceber ao finalizar o processo?')
    .setHelpText('A promessa de transformação que conecta a dor inicial ao resultado final');

  // ── SEÇÃO 11: INVESTIMENTO ──────────────────────────────
  form.addPageBreakItem()
    .setTitle('11 · Investimento, Restrições e Branding')
    .setHelpText('Os limites operacionais e a identidade que guiam a execução técnica da campanha.');

  form.addTextItem()
    .setTitle('Qual é o investimento disponível para a campanha (R$/mês)?')
    .setHelpText('Valor mensal total de mídia paga — quanto vai investir nos anúncios')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('Existe diretriz, política, restrição legal ou compliance a observar?')
    .setHelpText('Segmentos regulados (saúde, financeiro, educação), termos proibidos por lei, políticas de plataforma');

  form.addParagraphTextItem()
    .setTitle('Identidade visual: existe manual de marca, cores, fontes ou referências de design?')
    .setHelpText('Manual no Google Drive, cores da marca, referências de anúncios que você gosta');

  // ── SEÇÃO 12: EXTRAS ────────────────────────────────────
  form.addPageBreakItem()
    .setTitle('12 · Informações Complementares')
    .setHelpText('Tudo que não coube nas seções anteriores mas pode fazer diferença na campanha.');

  form.addParagraphTextItem()
    .setTitle('Quais perguntas seus clientes mais fazem antes de contratar?')
    .setHelpText('FAQs reais — usamos para criar copy de anúncios que antecipam dúvidas e eliminam fricção');

  form.addParagraphTextItem()
    .setTitle('Alguma informação extra ou contexto importante para o sucesso da campanha?')
    .setHelpText('Sazonalidade, eventos do setor, particularidades do mercado, contexto atual do negócio');

  // ── LOG FINAL ───────────────────────────────────────────
  Logger.log('=====================================');
  Logger.log('Formulario criado com sucesso!');
  Logger.log('URL para responder: ' + form.getPublishedUrl());
  Logger.log('URL de edicao:      ' + form.getEditUrl());
  Logger.log('ID do formulario:   ' + form.getId());
  Logger.log('=====================================');
}
