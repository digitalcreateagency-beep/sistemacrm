// ─── INITIAL DATA ─────────────────────────────────────────────────────────────
const initialData = {
  amanda: {
    label: 'Gestora Amanda',
    groups: [
      { id: 'tarefas', label: 'Tarefas Diárias', color: '#7c5cfc', items: [
        { id: 1, name: 'Tarefas diarias - Google My Business', person: 'Amanda', status: 'Feito', start: '2025-11-30', end: '2025-12-31', recorrencia: '', verba: '', temp: '', perf: '', notes: '', melhorias: '', proximos: '', type: 'tarefa', links: [], subitems: [] },
        { id: 2, name: 'Tarefas diárias - Tráfego Pago', person: 'Amanda', status: 'Aguardando verificação', start: '', end: '', recorrencia: '', verba: '', temp: '', perf: '', notes: '', melhorias: '', proximos: '', type: 'tarefa', links: [], subitems: [] },
        { id: 3, name: 'Melhorias do Monday', person: 'Amanda', status: 'Aguardando verificação', start: '', end: '', recorrencia: '', verba: '', temp: '', perf: '', notes: '', melhorias: '', proximos: '', type: 'tarefa', links: [], subitems: [] },
        { id: 4, name: 'Reuniões de Check-in', person: 'Amanda', status: 'Aguardando verificação', start: '', end: '', recorrencia: '', verba: '', temp: '', perf: '', notes: '', melhorias: '', proximos: '', type: 'tarefa', links: [], subitems: [] },
      ]},
      { id: 'gbimpl', label: 'Google Business — Implementação', color: '#2dce89', items: [
        { id: 10, name: '01 - Magistrelli Mortgages', person: 'Amanda', status: 'Em andamento', start: '', end: '', recorrencia: '', verba: '', temp: '', perf: '', notes: '', melhorias: '', proximos: '', type: 'cliente', links: [], subitems: [
          { id: 101, name: 'Criar / otimizar perfil GBP', status: 'Feito', person: 'Amanda', notes: '' },
          { id: 102, name: 'Adicionar fotos e vídeos', status: 'Pendente', person: 'Amanda', notes: '' },
          { id: 103, name: 'Configurar serviços e horários', status: 'Pendente', person: 'Amanda', notes: '' },
          { id: 104, name: 'Solicitar primeiras avaliações', status: 'Pendente', person: 'Amanda', notes: '' },
        ]},
        { id: 11, name: '02 - Menille Consulting', person: 'Amanda', status: 'Aguardando verificação', start: '', end: '', recorrencia: '', verba: '', temp: '', perf: '', notes: '', melhorias: '', proximos: '', type: 'cliente', links: [], subitems: [] },
        { id: 12, name: '03 - Tati Consórcios', person: 'Amanda', status: 'Aguardando verificação', start: '', end: '', recorrencia: '', verba: '', temp: '', perf: '', notes: '', melhorias: '', proximos: '', type: 'cliente', links: [], subitems: [] },
      ]},
      { id: 'gbmensal', label: 'Google Business — Mensal', color: '#f4c430', items: [
        { id: 20, name: '01 - Fichas Scholl Podologia', person: 'Amanda', status: 'Pendente', start: '', end: '', recorrencia: 'Mensal', verba: '', temp: '', perf: '', notes: '', melhorias: '', proximos: '', type: 'cliente', links: [], subitems: [
          { id: 201, name: 'Pedir e Subir conteúdos', status: 'Pendente', person: 'Amanda', notes: '' },
          { id: 202, name: 'Analisar posicionamento', status: 'Pendente', person: 'Amanda', notes: '' },
          { id: 203, name: 'Responder Avaliações', status: 'Pendente', person: 'Amanda', notes: '' },
          { id: 204, name: 'Otimizar o perfil', status: 'Pendente', person: 'Amanda', notes: '' },
          { id: 205, name: 'Sexta solicitar avaliações', status: 'Pendente', person: 'Amanda', notes: '' },
        ]},
        { id: 21, name: '01.1 - Scholl Podologia - POA', person: 'Amanda', status: 'Pendente', start: '', end: '', recorrencia: 'Mensal', verba: '', temp: '', perf: '', notes: '', melhorias: '', proximos: '', type: 'cliente', links: [], subitems: [] },
        { id: 22, name: '01.2 - Scholl Podologia Independência', person: 'Amanda', status: 'Pendente', start: '', end: '', recorrencia: 'Mensal', verba: '', temp: '', perf: '', notes: '', melhorias: '', proximos: '', type: 'cliente', links: [], subitems: [] },
        { id: 23, name: '01.3 - Scholl Podologia - Curitiba', person: 'Amanda', status: 'Pendente', start: '', end: '', recorrencia: 'Mensal', verba: '', temp: '', perf: '', notes: '', melhorias: '', proximos: '', type: 'cliente', links: [], subitems: [] },
        { id: 24, name: '02 - Growth Fly', person: 'Amanda', status: 'Pendente', start: '', end: '', recorrencia: 'Mensal', verba: '', temp: '', perf: '', notes: '', melhorias: '', proximos: '', type: 'cliente', links: [], subitems: [] },
        { id: 25, name: '03 - Prime Cars Solutions', person: 'Amanda', status: 'Pendente', start: '', end: '', recorrencia: 'Mensal', verba: '', temp: '', perf: '', notes: '', melhorias: '', proximos: '', type: 'cliente', links: [], subitems: [] },
      ]},
      { id: 'trafego', label: 'Gestão de Tráfego', color: '#fb6340', items: [
        { id: 30, name: 'Excellence Drive', person: 'Amanda', status: 'Pendente', start: '', end: '', recorrencia: '', verba: '', temp: '', perf: '', notes: '', melhorias: '', proximos: '', type: 'cliente', links: [], subitems: [] },
        { id: 31, name: 'Stela Giovenardi - Google', person: 'Amanda', status: 'Pendente', start: '', end: '', recorrencia: '', verba: '', temp: '', perf: '', notes: '', melhorias: '', proximos: '', type: 'cliente', links: [], subitems: [] },
        { id: 32, name: 'Stela Giovenardi - Meta', person: 'Amanda', status: 'Pendente', start: '', end: '', recorrencia: '', verba: '', temp: '', perf: '', notes: '', melhorias: '', proximos: '', type: 'cliente', links: [], subitems: [] },
        { id: 33, name: 'WJ Refrigeração', person: 'Amanda', status: 'Pendente', start: '', end: '', recorrencia: '', verba: '', temp: '', perf: '', notes: '', melhorias: '', proximos: '', type: 'cliente', links: [], subitems: [] },
      ]}
    ]
  },
  clo: {
    label: 'Gestora Clo — Tráfego Pago',
    groups: [
      { id: 'tarefas', label: 'Tarefas Diárias / Semanais / Mensais', color: '#7c5cfc', items: [
        { id: 1, name: 'Tarefas do dia a dia (Padrão para todos)', person: 'Clotildes', status: 'Aguardar docs', start: '', end: '', recorrencia: '', verba: '', temp: '', perf: '', notes: '', melhorias: '', proximos: '', type: 'tarefa', links: [], subitems: [] },
        { id: 2, name: 'Reuniões mensais de check-in', person: 'Amanda + Clotildes', status: 'Aguardar docs', start: '', end: '', recorrencia: 'Mensal', verba: '', temp: '', perf: '', notes: '', melhorias: '', proximos: '', type: 'tarefa', links: [], subitems: [] },
        { id: 3, name: 'Relatório Mensal', person: 'Clotildes', status: 'Aguardar docs', start: '', end: '', recorrencia: 'Mensal', verba: '', temp: '', perf: '', notes: '', melhorias: '', proximos: '', type: 'tarefa', links: [], subitems: [] },
      ]},
      { id: 'google', label: 'Clientes Mensais | Google ADS', color: '#2dce89', items: [
        { id: 10, name: 'Inovar', person: 'Clotildes', status: 'Feito', start: '', end: '', recorrencia: '', verba: 'R$ 1.800', temp: '', perf: '', notes: '', melhorias: '', proximos: '', type: 'cliente', links: [{label:'LP Inovar', url:'https://www.inovarsolutions.com.br/'}], subitems: [] },
        { id: 11, name: 'Prime Car Solutions', person: 'Clotildes', status: 'Aguardar docs', start: '', end: '', recorrencia: '', verba: '', temp: '', perf: '', notes: '', melhorias: '', proximos: '', type: 'cliente', links: [], subitems: [] },
      ]},
      { id: 'meta', label: 'Clientes Mensais | Meta ADS', color: '#fb6340', items: [
        { id: 20, name: 'Prime Car Solutions', person: 'Clotildes', status: 'Feito', start: '', end: '', recorrencia: '', verba: '', temp: '', perf: '', notes: '', melhorias: '', proximos: '', type: 'cliente', links: [], subitems: [] },
        { id: 21, name: 'Inovar', person: 'Clotildes', status: 'Aguardar docs', start: '', end: '', recorrencia: '', verba: '', temp: '', perf: '', notes: '', melhorias: '', proximos: '', type: 'cliente', links: [], subitems: [] },
        { id: 22, name: 'Tati Consórcios', person: 'Clotildes', status: 'Feito', start: '', end: '', recorrencia: '', verba: '', temp: '', perf: '', notes: '', melhorias: '', proximos: '', type: 'cliente', links: [], subitems: [] },
      ]},
      { id: 'novos', label: 'Novos Clientes de Gestão de Tráfego', color: '#f4c430', items: [
        { id: 30, name: '01 - Prime Car Solutions EUA', person: 'Clotildes', status: 'Fazendo', start: '2026-01-28', end: '2026-02-28', recorrencia: '06 meses', verba: 'Meta', temp: '', perf: '', notes: '', melhorias: '', proximos: '', type: 'cliente', links: [], subitems: [] },
        { id: 31, name: '03 - MP Group USA', person: 'Clotildes', status: 'Fazendo', start: '2026-01-28', end: '2026-02-28', recorrencia: '06 meses', verba: 'Google + Meta + SEO', temp: '', perf: '', notes: '', melhorias: '', proximos: '', type: 'cliente', links: [], subitems: [] },
        { id: 32, name: '04 - Tati Consórcios (BR)', person: 'Clotildes', status: 'Fazendo', start: '2026-01-28', end: '2026-02-28', recorrencia: '12 meses', verba: 'Meta', temp: '', perf: '', notes: '', melhorias: '', proximos: '', type: 'cliente', links: [], subitems: [] },
        { id: 33, name: '05 - Inovar Solutions (BR)', person: 'Clotildes', status: 'Pendente', start: '2026-01-28', end: '2026-02-28', recorrencia: '', verba: 'Meta + Google Ads', temp: '', perf: '', notes: '', melhorias: '', proximos: '', type: 'cliente', links: [], subitems: [] },
        { id: 34, name: '06 - Implementação Ricardo', person: 'Clotildes', status: 'Pendente', start: '2026-02-02', end: '2026-02-02', recorrencia: '', verba: 'Meta e Google', temp: '', perf: '', notes: '', melhorias: '', proximos: '', type: 'cliente', links: [], subitems: [] },
        { id: 35, name: 'Magistrelli - Ricardo | Meta e Google', person: 'Clotildes', status: 'Aguardar docs', start: '2026-01-27', end: '2026-04-02', recorrencia: '', verba: '', temp: '', perf: '', notes: '', melhorias: '', proximos: '', type: 'cliente', links: [], subitems: [] },
      ]}
    ]
  },
  squad: {
    label: 'Squad Operacional',
    groups: [
      { id: 'logins', label: 'Logins e Senhas', color: '#7c5cfc', items: [
        { id: 1, name: 'Verificação com autenticador', person: 'Amanda, Clotildes, Luan, Francine', status: 'Aguardar docs', start: '', end: '', recorrencia: '', verba: '', temp: '', perf: '', notes: '', melhorias: '', proximos: '', type: 'tarefa', links: [], subitems: [] },
        { id: 2, name: 'Logins Google Geral', person: 'Amanda, Clotildes, Luan, Francine', status: 'Aguardar docs', start: '', end: '', recorrencia: '', verba: '', temp: '', perf: '', notes: '', melhorias: '', proximos: '', type: 'tarefa', links: [], subitems: [] },
        { id: 3, name: 'Logins Meta Ads Gestores', person: 'Amanda, Clotildes, Luan, Francine', status: 'Aguardar docs', start: '', end: '', recorrencia: '', verba: '', temp: '', perf: '', notes: '', melhorias: '', proximos: '', type: 'tarefa', links: [], subitems: [] },
      ]},
      { id: 'cursos', label: 'Cursos', color: '#2dce89', items: [
        { id: 10, name: 'Login de acesso', person: 'Amanda, Clotildes, Luan, Francine', status: 'Aguardar docs', start: '', end: '', recorrencia: '', verba: '', temp: '', perf: '', notes: '', melhorias: '', proximos: '', type: 'tarefa', links: [], subitems: [] },
        { id: 11, name: 'Tutorial de acesso', person: 'Amanda, Clotildes, Luan, Francine', status: 'Aguardar docs', start: '', end: '', recorrencia: '', verba: '', temp: '', perf: '', notes: '', melhorias: '', proximos: '', type: 'tarefa', links: [], subitems: [] },
      ]},
      { id: 'geral', label: 'Conhecimentos Gerais & Indicações', color: '#f4c430', items: [
        { id: 20, name: 'Checar todas as contas dos clientes', person: 'Clotildes', status: 'Feito', start: '', end: '', recorrencia: '', verba: '', temp: '', perf: '', notes: 'Chequei todas as contas e levarei pendências para reunião.', melhorias: '', proximos: '', type: 'tarefa', links: [], subitems: [] },
        { id: 21, name: 'Drive Playbook Operacional', person: 'Francine', status: 'Feito', start: '', end: '', recorrencia: '', verba: '', temp: '', perf: '', notes: '', melhorias: '', proximos: '', type: 'tarefa', links: [{label:'Drive Playbook', url:'https://drive.google.com/drive/folders/1vZQ6u6CNZU_7lBf0EqTpeK367jMsVSdH'}], subitems: [] },
        { id: 22, name: 'Drive de Reuniões Gravadas & Regras', person: 'Amanda', status: 'Feito', start: '', end: '', recorrencia: '', verba: '', temp: '', perf: '', notes: '', melhorias: '', proximos: '', type: 'tarefa', links: [{label:'Drive Reuniões', url:'https://drive.google.com/drive/folders/19dO3Mn_0NOViNN-QDlQsy4LMRxmzXvfA'}], subitems: [] },
        { id: 23, name: 'Sobre Resultados', person: 'Amanda', status: 'Em andamento', start: '', end: '', recorrencia: '', verba: '', temp: '', perf: '', notes: 'Acompanhar conversões e retorno de investimento dos clientes.', melhorias: '', proximos: '', type: 'tarefa', links: [], subitems: [] },
      ]}
    ]
  }
};

const initialFinanceiro = [
  { id: 1, client: 'Inovar Solutions', service: 'Google ADS Mensal', valor: 'R$ 1.800', venc: '10', start: '2026-01-01', end: '2026-12-31', paystatus: 'Pago', tipo: 'Mensal', notes: '' },
  { id: 2, client: 'Prime Car Solutions', service: 'Meta + Google ADS', valor: 'R$ 2.500', venc: '5', start: '2026-01-28', end: '2026-07-28', paystatus: 'Pendente', tipo: 'Semestral', notes: '' },
  { id: 3, client: 'Tati Consórcios', service: 'Meta ADS', valor: 'R$ 1.200', venc: '15', start: '2026-01-28', end: '2027-01-28', paystatus: 'Pago', tipo: 'Anual', notes: '' },
  { id: 4, client: 'MP Group USA', service: 'Google + Meta + SEO', valor: 'USD 1.500', venc: '1', start: '2026-01-28', end: '2026-07-28', paystatus: 'Atrasado', tipo: 'Semestral', notes: '' },
];

// ─── FINANCEIRO EMPRESA (ADM only) ────────────────────────────────────────────
const initialEmpresaState = {
  despesas: [
    { id: 1, nome: 'Netlify', categoria: 'Plataforma', tipo: 'fixo', valor: 'R$ 0', venc: '1', mes: '', notas: '' },
    { id: 2, nome: 'Firebase', categoria: 'Plataforma', tipo: 'fixo', valor: 'R$ 0', venc: '1', mes: '', notas: '' },
    { id: 3, nome: 'Google Workspace', categoria: 'Plataforma', tipo: 'fixo', valor: 'R$ 0', venc: '1', mes: '', notas: '' },
  ],
  equipe: [],
  historicoMes: [],
  notasGerais: '',
};
let empresaState = deepClone(initialEmpresaState);
let finTab = 'contratos'; // 'contratos' | 'empresa'
let empresaModalTarget = null; // null = new, id = edit
let empresaModalTipo = 'despesa'; // 'despesa' | 'equipe'

// ─── PROSPECÇÃO STATE ──────────────────────────────────────────────────────────
let prospLeads = [];
let prspModalTarget = null;
let memberFichas = {}; // { memberKey: { geral, contrato, entregas } }
let memberFichaTarget = null; // memberKey being edited

// Default subelement templates
const defaultTemplates = [
  { id: 'impl_gb', name: 'Google Business — Implementação (44 tarefas)', icon: '📍', subitems: [
    'Criar / otimizar perfil GBP', 'Verificar/reivindicar perfil existente', 'Preencher nome da empresa', 'Preencher categoria principal', 'Adicionar categorias secundárias',
    'Inserir endereço completo', 'Configurar área de atendimento', 'Inserir telefone comercial', 'Inserir horário de funcionamento', 'Adicionar horário especial / feriados',
    'Inserir site da empresa', 'Escrever descrição da empresa', 'Adicionar serviços ou produtos', 'Inserir atributos do perfil', 'Adicionar fotos da fachada',
    'Adicionar fotos internas', 'Adicionar fotos de equipe', 'Adicionar fotos de produtos/serviços', 'Upload do logo', 'Upload da capa do perfil',
    'Ativar mensagens no GBP', 'Configurar resposta automática de mensagem', 'Criar 1ª publicação (post)', 'Criar publicação de oferta', 'Responder avaliações existentes',
    'Solicitar 5 primeiras avaliações', 'Verificar e corrigir NAP em diretórios', 'Criar citação no Yelp', 'Criar citação no Foursquare', 'Criar citação no Apple Maps',
    'Verificar indexação no Google Maps', 'Verificar foto de capa no Maps', 'Testar busca por palavra-chave principal', 'Analisar concorrentes próximos', 'Verificar Q&A (Perguntas e Respostas)',
    'Adicionar 3 perguntas e respostas frequentes', 'Configurar botão de ação (CTA)', 'Integrar com Google Analytics / GA4', 'Criar relatório inicial', 'Entregar acesso ao cliente',
    'Treinamento básico para o cliente', 'Configurar notificações de avaliação', 'Criar cronograma de posts mensais', 'Agendar reunião de alinhamento pós-impl.'
  ]},
  { id: 'mensal_gb', name: 'Google Business — Mensal', icon: '📅', subitems: [
    'Pedir e Subir conteúdos', 'Analisar posicionamento', 'Responder Avaliações', 'Otimizar o perfil', 'Sexta solicitar avaliações',
    'Criar publicação semanal 1', 'Criar publicação semanal 2', 'Criar publicação semanal 3', 'Criar publicação semanal 4', 'Gerar relatório mensal'
  ]},
  { id: 'trafego_impl', name: 'Tráfego Pago — Implementação', icon: '🚀', subitems: [
    'Criar conta no Business Manager', 'Configurar Pixel do Facebook', 'Criar conta no Google Ads', 'Instalar tag Google Analytics', 'Definir objetivo da campanha',
    'Criar público-alvo personalizado', 'Criar lookalike audience', 'Criar campanha de consciência', 'Criar campanha de tráfego', 'Criar campanha de conversão',
    'Criar criativos (imagem)', 'Criar criativos (vídeo)', 'Configurar teste A/B', 'Definir orçamento diário', 'Configurar remarketing',
    'Revisar e aprovar anúncios', 'Lançar campanha', 'Monitorar primeiros 3 dias', 'Enviar relatório de lançamento'
  ]},
  { id: 'onboarding', name: 'Onboarding Novo Cliente', icon: '🤝', subitems: [
    'Contrato assinado', 'Pagamento recebido', 'Briefing preenchido', 'Acessos recebidos (Meta/Google)', 'Reunião de alinhamento',
    'Criar pasta no Drive', 'Criar tarefa no CRM', 'Apresentar equipe ao cliente', 'Enviar boas-vindas por email'
  ]}
];

// ─── STATE ────────────────────────────────────────────────────────────────────
let state = deepClone(initialData);
let finState = deepClone(initialFinanceiro);
let templates = deepClone(defaultTemplates);
let currentBoard = 'amanda';
let currentPage = 'crm';
let searchTerm = '';
let filterStatus = '';
let filterType = '';
let collapsedGroups = {};
let modalTarget = null;
let finModalTarget = null;
let _finFilterVal = 'todos';
let expandedRows = {};
let expandedSubitems = {};
let updatesData = {};
let updatesTarget = null;
let updatesTab = 'updates';
let newGroupColor = '#7c5cfc';
let linkModalTarget = null; // {boardKey, groupId, itemId}
let subModalTarget = null;  // {boardKey, groupId, itemId, subId}
let templatesTarget = null; // {boardKey, groupId, itemId}
let clientsTab = 'clientes';
let clientsView = 'cards'; // 'cards' | 'table'
let clientsData = []; // master client registry
let clientModalStep = 1;
let clientModalData = {}; // temp data while filling form
let editingClientId = null;

// ─── TEAM MEMBERS STATE ───────────────────────────────────────────────────────
const defaultTeamMembers = [
  { key: 'amanda', label: 'Amanda', icon: '👤', role: 'Gestora' },
  { key: 'clo', label: 'Clo – Tráfego', icon: '👤', role: 'Tráfego Pago' },
  { key: 'squad', label: 'Squad Operacional', icon: '⚙️', role: 'Operacional' },
];
let teamMembers = deepClone(defaultTeamMembers);

// ─── MULTI-SELECT STATE ────────────────────────────────────────────────────────
let selectedItems = new Set(); // Set of "boardKey|groupId|itemId"
let selectedSubitems = new Set(); // Set of "boardKey|groupId|itemId|subId"
let lastClickedItemIdx = null; // {groupId, index}
let lastClickedSubIdx = null;  // {groupId, itemId, index}

function deepClone(o) { return JSON.parse(JSON.stringify(o)); }

// ─── PERSIST (Firebase + localStorage fallback) ────────────────────────────────
let _saveTimer = null;
function saveState() {
  // Always save to localStorage as instant backup
  try {
    localStorage.setItem('dc_crm_v4', JSON.stringify(state));
    localStorage.setItem('dc_fin_v4', JSON.stringify(finState));
    localStorage.setItem('dc_empresa_v1', JSON.stringify(empresaState));
    localStorage.setItem('dc_prosp_v1', JSON.stringify(prospLeads));
    localStorage.setItem('dc_fichas_v1', JSON.stringify(memberFichas));
    localStorage.setItem('dc_templates_v1', JSON.stringify(templates));
    localStorage.setItem('dc_updates_v2', JSON.stringify(updatesData));
    localStorage.setItem('dc_team_v1', JSON.stringify(teamMembers));
    localStorage.setItem('dc_clients_v1', JSON.stringify(clientsData));
  } catch(e) {}
  // Debounce Firebase save (avoid too many writes)
  clearTimeout(_saveTimer);
  _saveTimer = setTimeout(() => {
    if (window.saveToFirebase) {
      window.saveToFirebase({
        state: JSON.parse(JSON.stringify(state)),
        finState: JSON.parse(JSON.stringify(finState)),
        empresaState: JSON.parse(JSON.stringify(empresaState)),
        prospLeads: JSON.parse(JSON.stringify(prospLeads)),
        memberFichas: JSON.parse(JSON.stringify(memberFichas)),
        templates: JSON.parse(JSON.stringify(templates)),
        updatesData: JSON.parse(JSON.stringify(updatesData)),
        teamMembers: JSON.parse(JSON.stringify(teamMembers)),
        clientsData: JSON.parse(JSON.stringify(clientsData)),
      });
    }
  }, 800);
}

async function loadState() {
  // Show loading indicator
  document.body.insertAdjacentHTML('beforeend', '<div id="fb-loading" style="position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(10,10,15,0.85);z-index:9999;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Sora,sans-serif;color:#eeeef5"><div style="font-size:22px;font-weight:700;margin-bottom:12px">🔄 Carregando seu CRM...</div><div style="font-size:13px;color:#8888a8">Conectando ao Firebase</div></div>');

  // Load from localStorage first (instant)
  try {
    const s = localStorage.getItem('dc_crm_v4'); if (s) state = JSON.parse(s);
    const f = localStorage.getItem('dc_fin_v4'); if (f) finState = JSON.parse(f);
    const ef = localStorage.getItem('dc_empresa_v1'); if (ef) empresaState = JSON.parse(ef);
    const pl = localStorage.getItem('dc_prosp_v1'); if (pl) prospLeads = JSON.parse(pl);
    const mf = localStorage.getItem('dc_fichas_v1'); if (mf) memberFichas = JSON.parse(mf);
    const t = localStorage.getItem('dc_templates_v1'); if (t) templates = JSON.parse(t);
    const u = localStorage.getItem('dc_updates_v2'); if (u) updatesData = JSON.parse(u);
    const tm = localStorage.getItem('dc_team_v1'); if (tm) teamMembers = JSON.parse(tm);
    const cd = localStorage.getItem('dc_clients_v1'); if (cd) clientsData = JSON.parse(cd);
  } catch(e) {}

  // Then try to load fresher data from Firebase
  const tryFirebase = async () => {
    if (window.loadFromFirebase) {
      const data = await window.loadFromFirebase();
      if (data) {
        if (data.state) state = data.state;
        if (data.finState) finState = data.finState;
        if (data.empresaState) empresaState = data.empresaState;
        if (data.prospLeads) prospLeads = data.prospLeads;
        if (data.memberFichas) memberFichas = data.memberFichas;
        if (data.templates) templates = data.templates;
        if (data.updatesData) updatesData = data.updatesData;
        if (data.teamMembers) teamMembers = data.teamMembers;
        if (data.clientsData) clientsData = data.clientsData;
        renderTeamNav();
        renderCRM();
      }
      const loader = document.getElementById('fb-loading');
      if (loader) loader.remove();
    }
  };

  if (window._firebaseReady) {
    await tryFirebase();
  } else {
    // Wait for firebase to be ready (max 5s)
    await new Promise(resolve => {
      const timeout = setTimeout(resolve, 5000);
      window.addEventListener('firebase-ready', () => { clearTimeout(timeout); resolve(); }, { once: true });
    });
    await tryFirebase();
    const loader = document.getElementById('fb-loading');
    if (loader) loader.remove();
  }
}

// ─── HELPERS ──────────────────────────────────────────────────────────────────
function statusClass(s) {
  if (!s) return 's-default';
  const sl = s.toLowerCase();
  if (sl.includes('feito')) return 's-feito';
  if (sl.includes('andamento')) return 's-andamento';
  if (sl.includes('pendente')) return 's-pendente';
  if (sl.includes('aguardar') || sl.includes('aguardando')) return 's-aguardar';
  if (sl.includes('parado')) return 's-parado';
  if (sl.includes('fazendo')) return 's-fazendo';
  return 's-default';
}
function payClass(s) {
  if (!s) return '';
  const sl = s.toLowerCase();
  if (sl === 'pago') return 'pay-pago';
  if (sl === 'atrasado') return 'pay-atrasado';
  return 'pay-pendente';
}
function tempEmoji(t) {
  if (!t) return '';
  if (t === 'Quente') return '🔴';
  if (t === 'Morno') return '🟡';
  if (t === 'Frio') return '🔵';
  return '';
}
function fmtDate(d) { if (!d) return '—'; const [y,m,day] = d.split('-'); return `${day}/${m}/${y}`; }
const ACCENTS = ['#7c5cfc','#2dce89','#38b6ff','#f4c430','#fb6340','#f5365c','#00d4aa','#ff6ec7'];
function accentColor(i) { return ACCENTS[i % ACCENTS.length]; }

function findItem(boardKey, itemId) {
  for (const g of state[boardKey].groups) {
    const it = g.items.find(i => i.id === itemId);
    if (it) return { item: it, group: g };
  }
  return null;
}

// ─── INLINE STATUS CHANGE ─────────────────────────────────────────────────────
function changeStatus(boardKey, groupId, itemId, val) {
  const g = state[boardKey].groups.find(x => x.id === groupId);
  if (!g) return;
  const item = g.items.find(i => i.id === itemId);
  if (!item) return;
  item.status = val;
  saveState();
  logActivity(itemId, `alterou status para "${val}"`);
  renderCRM();
}

function changeSubStatus(boardKey, groupId, itemId, subId, val) {
  const g = state[boardKey].groups.find(x => x.id === groupId);
  if (!g) return;
  const item = g.items.find(i => i.id === itemId);
  if (!item || !item.subitems) return;
  const sub = item.subitems.find(s => s.id === subId);
  if (!sub) return;
  sub.status = val;
  saveState();
  renderCRM();
}

// ─── SUBITEMS ──────────────────────────────────────────────────────────────────
function toggleSubitems(key, e) {
  e.stopPropagation();
  expandedSubitems[key] = !expandedSubitems[key];
  renderCRM();
}

let subModalMode = 'new'; // 'new' or 'edit'
function openAddSubitem(boardKey, groupId, itemId, e) {
  e && e.stopPropagation();
  subModalTarget = { boardKey, groupId, itemId, subId: null };
  subModalMode = 'new';
  document.getElementById('modal-sub-title').textContent = 'Novo Subelemento';
  document.getElementById('fs-name').value = '';
  document.getElementById('fs-status').value = 'Pendente';
  document.getElementById('fs-person').value = '';
  document.getElementById('fs-notes').value = '';
  document.getElementById('modal-sub').classList.add('open');
  setTimeout(() => document.getElementById('fs-name').focus(), 100);
}

function openEditSubitem(boardKey, groupId, itemId, subId, e) {
  e && e.stopPropagation();
  subModalTarget = { boardKey, groupId, itemId, subId };
  subModalMode = 'edit';
  const res = findItem(boardKey, itemId);
  if (!res) return;
  const sub = (res.item.subitems || []).find(s => s.id === subId);
  if (!sub) return;
  document.getElementById('modal-sub-title').textContent = 'Editar Subelemento';
  document.getElementById('fs-name').value = sub.name || '';
  document.getElementById('fs-status').value = sub.status || 'Pendente';
  document.getElementById('fs-person').value = sub.person || '';
  document.getElementById('fs-notes').value = sub.notes || '';
  document.getElementById('modal-sub').classList.add('open');
}

function closeSubModal() { document.getElementById('modal-sub').classList.remove('open'); subModalTarget = null; }

function saveSubItem() {
  if (!subModalTarget) return;
  const { boardKey, groupId, itemId, subId } = subModalTarget;
  const g = state[boardKey].groups.find(x => x.id === groupId);
  if (!g) return;
  const item = g.items.find(i => i.id === itemId);
  if (!item) return;
  if (!item.subitems) item.subitems = [];
  const newSub = {
    id: subModalMode === 'edit' ? subId : Date.now(),
    name: document.getElementById('fs-name').value.trim() || 'Sem nome',
    status: document.getElementById('fs-status').value,
    person: document.getElementById('fs-person').value.trim(),
    notes: document.getElementById('fs-notes').value.trim(),
  };
  if (subModalMode === 'edit') {
    const idx = item.subitems.findIndex(s => s.id === subId);
    if (idx >= 0) item.subitems[idx] = newSub;
  } else {
    item.subitems.push(newSub);
  }
  saveState(); closeSubModal(); renderCRM();
}

function deleteSubitem(boardKey, groupId, itemId, subId, e) {
  e && e.stopPropagation();
  if (!confirm('Remover este subelemento?')) return;
  const g = state[boardKey].groups.find(x => x.id === groupId);
  if (!g) return;
  const item = g.items.find(i => i.id === itemId);
  if (!item || !item.subitems) return;
  item.subitems = item.subitems.filter(s => s.id !== subId);
  saveState(); renderCRM();
}

// ─── TEMPLATES ────────────────────────────────────────────────────────────────
function openTemplatesModal(boardKey, groupId, itemId, e) {
  e && e.stopPropagation();
  templatesTarget = { boardKey, groupId, itemId };
  showTemplateList();
  document.getElementById('modal-templates').classList.add('open');
}

function showTemplateList() {
  document.getElementById('tpl-view-list').style.display = '';
  document.getElementById('tpl-view-editor').style.display = 'none';
  const list = document.getElementById('templates-list');
  list.innerHTML = templates.map(t => `
    <div class="template-card">
      <div class="t-icon">${t.icon||'📋'}</div>
      <div class="t-info" style="flex:1">
        <div class="t-name">${t.name}</div>
        <div class="t-count">${t.subitems.length} subelementos</div>
      </div>
      <div style="display:flex;gap:6px;align-items:center">
        <button class="icon-btn" onclick="openEditTemplate('${t.id}')" title="Editar" style="font-size:11px;padding:3px 8px">✏️</button>
        <button class="icon-btn" onclick="deleteTemplate('${t.id}',event)" title="Remover" style="font-size:11px;padding:3px 8px">🗑</button>
        <button class="btn btn-primary" style="font-size:11px;padding:4px 12px" onclick="applyTemplate('${t.id}')">Aplicar →</button>
      </div>
    </div>`).join('') || '<div style="color:var(--text-muted);font-size:12px;text-align:center;padding:20px">Nenhum template salvo. Crie um abaixo!</div>';
}

function openCreateTemplate() {
  window._editingTemplateId = null;
  document.getElementById('tpl-editor-name').value = '';
  document.getElementById('tpl-editor-items').value = '';
  document.getElementById('tpl-editor-count').textContent = '0 subelementos';
  document.getElementById('tpl-view-list').style.display = 'none';
  document.getElementById('tpl-view-editor').style.display = '';
  document.getElementById('tpl-editor-name').focus();
  document.getElementById('tpl-editor-items').oninput = updateTplCount;
}

function openEditTemplate(id) {
  const t = templates.find(x => x.id === id);
  if (!t) return;
  window._editingTemplateId = id;
  document.getElementById('tpl-editor-name').value = t.name;
  document.getElementById('tpl-editor-items').value = t.subitems.join('\n');
  document.getElementById('tpl-editor-count').textContent = t.subitems.length + ' subelementos';
  document.getElementById('tpl-view-list').style.display = 'none';
  document.getElementById('tpl-view-editor').style.display = '';
  document.getElementById('tpl-editor-items').oninput = updateTplCount;
}

function updateTplCount() {
  const lines = document.getElementById('tpl-editor-items').value.split('\n').map(s=>s.trim()).filter(Boolean);
  document.getElementById('tpl-editor-count').textContent = lines.length + ' subelemento' + (lines.length !== 1 ? 's' : '');
}

function saveTemplateEditor() {
  const name = document.getElementById('tpl-editor-name').value.trim();
  if (!name) { document.getElementById('tpl-editor-name').focus(); return; }
  const subs = document.getElementById('tpl-editor-items').value.split('\n').map(s => s.trim()).filter(Boolean);
  if (!subs.length) { alert('Adicione pelo menos um subelemento.'); return; }
  if (window._editingTemplateId) {
    const t = templates.find(x => x.id === window._editingTemplateId);
    if (t) { t.name = name; t.subitems = subs; }
  } else {
    templates.push({ id: 'tpl_' + Date.now(), name, icon: '📋', subitems: subs });
  }
  saveState();
  showTemplateList();
}

function cancelTemplateEditor() {
  showTemplateList();
}

function applyTemplate(templateId) {
  if (!templatesTarget) return;
  const t = templates.find(x => x.id === templateId);
  if (!t) return;
  const { boardKey, groupId, itemId } = templatesTarget;
  const g = state[boardKey].groups.find(x => x.id === groupId);
  if (!g) return;
  const item = g.items.find(i => i.id === itemId);
  if (!item) return;
  if (!item.subitems) item.subitems = [];
  const newSubs = t.subitems.map((name, i) => ({ id: Date.now() + i, name, status: 'Pendente', person: item.person || '', notes: '' }));
  item.subitems = [...item.subitems, ...newSubs];
  saveState(); closeTemplatesModal(); renderCRM();
}

function deleteTemplate(id, e) {
  e && e.stopPropagation();
  const t = templates.find(x => x.id === id);
  if (!confirm(`Remover o template "${t?.name}"?`)) return;
  templates = templates.filter(t => t.id !== id);
  saveState(); showTemplateList();
}

function openNewTemplateFlow() { openCreateTemplate(); }

function closeTemplatesModal() { document.getElementById('modal-templates').classList.remove('open'); }

// ─── LINK MANAGEMENT ──────────────────────────────────────────────────────────
let linkModalItemRef = null;
let linkModalEditIdx = null;

function openLinkModal(boardKey, groupId, itemId, editIdx, e) {
  e && e.stopPropagation();
  linkModalItemRef = { boardKey, groupId, itemId };
  linkModalEditIdx = editIdx !== undefined ? editIdx : null;
  const modal = document.getElementById('link-modal');
  if (editIdx !== null && editIdx !== undefined) {
    const res = findItem(boardKey, itemId);
    const link = (res?.item?.links || [])[editIdx];
    document.getElementById('lm-label').value = link?.label || '';
    document.getElementById('lm-url').value = link?.url || '';
  } else {
    document.getElementById('lm-label').value = '';
    document.getElementById('lm-url').value = '';
  }
  const btn = e && e.currentTarget ? e.currentTarget : null;
  if (btn) {
    const rect = btn.getBoundingClientRect();
    modal.style.top = Math.min(rect.bottom + 8, window.innerHeight - 220) + 'px';
    modal.style.left = Math.min(rect.left, window.innerWidth - 340) + 'px';
  } else {
    modal.style.top = '200px';
    modal.style.left = '50%';
    modal.style.transform = 'translateX(-50%)';
  }
  modal.style.display = 'block';
  setTimeout(() => document.getElementById('lm-label').focus(), 50);
}

function closeLinkModal() {
  document.getElementById('link-modal').style.display = 'none';
  document.getElementById('link-modal').style.transform = '';
  linkModalItemRef = null; linkModalEditIdx = null;
}

function saveLinkModal() {
  if (!linkModalItemRef) return;
  const label = document.getElementById('lm-label').value.trim();
  const url = document.getElementById('lm-url').value.trim();
  if (!url) { alert('Insira uma URL válida.'); return; }
  const { boardKey, groupId, itemId } = linkModalItemRef;
  const g = state[boardKey].groups.find(x => x.id === groupId);
  if (!g) return;
  const item = g.items.find(i => i.id === itemId);
  if (!item) return;
  if (!item.links) item.links = [];
  if (linkModalEditIdx !== null) {
    item.links[linkModalEditIdx] = { label: label || url, url };
  } else {
    item.links.push({ label: label || url, url });
  }
  saveState(); closeLinkModal(); renderCRM();
}

function deleteLink(boardKey, groupId, itemId, idx, e) {
  e && e.stopPropagation();
  const g = state[boardKey].groups.find(x => x.id === groupId);
  if (!g) return;
  const item = g.items.find(i => i.id === itemId);
  if (!item || !item.links) return;
  item.links.splice(idx, 1);
  saveState(); renderCRM();
}

// Close link modal on outside click
document.addEventListener('click', (e) => {
  const m = document.getElementById('link-modal');
  if (m.style.display !== 'none' && !m.contains(e.target) && !e.target.classList.contains('link-add-btn') && !e.target.classList.contains('link-chip')) {
    closeLinkModal();
  }
});

// ─── UPDATES PANEL ────────────────────────────────────────────────────────────
function openUpdates(boardKey, groupId, itemId) {
  const res = findItem(boardKey, itemId);
  if (!res) return;
  const item = res.item;
  updatesTarget = { boardKey, groupId, itemId, itemName: item.name };
  document.getElementById('updates-item-name').textContent = item.name;
  document.getElementById('updates-item-meta').textContent = (item.person ? item.person + ' · ' : '') + (item.status || '');
  const dfEl = document.getElementById('updates-drive-folders');
  if (dfEl) {
    const folders = item.driveFolders || [];
    dfEl.innerHTML = folders.map(f =>
      `<a href="${f.url}" target="_blank" style="display:inline-flex;align-items:center;gap:4px;padding:2px 8px;border-radius:6px;background:rgba(251,188,4,.12);border:1px solid rgba(251,188,4,.3);font-size:11px;font-weight:600;color:var(--text-primary);text-decoration:none">📁 ${f.name}</a>`
    ).join('');
    dfEl.style.display = folders.length ? 'flex' : 'none';
  }
  document.getElementById('updates-panel').classList.add('open');
  document.getElementById('updates-backdrop').classList.add('open');
  updatesTab = 'updates';
  document.querySelectorAll('.updates-tab').forEach((t,i) => t.classList.toggle('active', i===0));
  renderUpdatesBody();
  setTimeout(() => document.getElementById('compose-input').focus(), 300);
}

function closeUpdates() {
  document.getElementById('updates-panel').classList.remove('open');
  document.getElementById('updates-backdrop').classList.remove('open');
  updatesTarget = null;
  _replyTo = null;
  const _rp = document.getElementById('compose-reply-preview');
  if (_rp) _rp.style.display = 'none';
}

function switchUpdatesTab(tab, el) {
  updatesTab = tab;
  document.querySelectorAll('.updates-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  const composeArea = document.getElementById('updates-compose-area');
  composeArea.style.display = tab === 'activity' ? 'none' : '';
  renderUpdatesBody();
}

function renderUpdatesBody() { renderUpdatesBodyEnhanced(); }
function toggleSubCheck(boardKey, groupId, itemId, subId) {
  const g = state[boardKey].groups.find(x => x.id === groupId);
  if (!g) return;
  const item = g.items.find(i => i.id === itemId);
  if (!item || !item.subitems) return;
  const sub = item.subitems.find(s => s.id === subId);
  if (!sub) return;
  sub.status = sub.status === 'Feito' ? 'Pendente' : 'Feito';
  // Auto-status: checklist 100% → marca item como Feito
  if (item.subitems.length > 0 && item.subitems.every(s => s.status === 'Feito') && item.status !== 'Feito') {
    const oldStatus = item.status;
    item.status = 'Feito';
    logActivity(itemId, `✅ Status alterado automaticamente para "Feito" — checklist 100% concluído (era "${oldStatus}")`);
    addNotification('✅ Checklist completo!', `"${item.name}" foi marcado como Feito automaticamente`, 'activity');
  }
  saveState();
  if (updatesTab === 'checklist') renderUpdatesBody();
  // refresh row
  renderCRM();
}

// ─── COMPOSE STATE ────────────────────────────────────────────────────────────
let _composeAttachments = []; // [{name, data, type, size}]
let _fvFiles = [];        // file viewer registry — rebuilt on each renderUpdates()
let _updateEntries = [];  // update entry registry — rebuilt on each renderUpdatesBodyEnhanced()
let _replyTo = null;      // {author, text} of the message being replied to
let _composeScheduled = null;
let _mentionStart = -1;
let _selectedPersons = []; // multi-assignee picker state
let _labels = [];          // [{id, name, color}]
let _mentionIdx = 0;

function onComposeInput(ta) {
  checkMentionTrigger(ta);
  autoResizeTextarea(ta);
}

function autoResizeTextarea(ta) {
  ta.style.height = 'auto';
  ta.style.height = Math.min(ta.scrollHeight, 200) + 'px';
}

function onComposeKeydown(e) {
  const dd = document.getElementById('mention-dropdown');
  if (dd && dd.style.display !== 'none') {
    const items = dd.querySelectorAll('.mention-item');
    if (e.key === 'ArrowDown') { e.preventDefault(); _mentionIdx = Math.min(_mentionIdx+1, items.length-1); items.forEach((el,i)=>el.classList.toggle('active',i===_mentionIdx)); return; }
    if (e.key === 'ArrowUp')   { e.preventDefault(); _mentionIdx = Math.max(_mentionIdx-1, 0); items.forEach((el,i)=>el.classList.toggle('active',i===_mentionIdx)); return; }
    if (e.key === 'Enter' || e.key === 'Tab') { e.preventDefault(); if(items[_mentionIdx]) items[_mentionIdx].click(); return; }
    if (e.key === 'Escape') { dd.style.display='none'; return; }
  }
  if (e.ctrlKey && e.key === 'Enter') { e.preventDefault(); postUpdate(); return; }
  if (e.ctrlKey && e.key === 'b') { e.preventDefault(); fmtText('bold'); return; }
  if (e.ctrlKey && e.key === 'i') { e.preventDefault(); fmtText('italic'); return; }
  if (e.ctrlKey && e.key === 'u') { e.preventDefault(); fmtText('underline'); return; }
}

function checkMentionTrigger(ta) {
  const val = ta.value;
  const pos = ta.selectionStart;
  const dd = document.getElementById('mention-dropdown');
  // Find nearest @ before cursor
  let atPos = -1;
  for (let i = pos-1; i >= 0; i--) {
    if (val[i] === '@') { atPos = i; break; }
    if (val[i] === ' ' || val[i] === '\n') break;
  }
  if (atPos < 0) { dd.style.display = 'none'; return; }
  _mentionStart = atPos;
  const query = val.substring(atPos+1, pos).toLowerCase();
  const members = getAllMentionableUsers().filter(m => m.name.toLowerCase().includes(query));
  if (!members.length) { dd.style.display = 'none'; return; }
  _mentionIdx = 0;
  dd.innerHTML = members.map((m,i) => `
    <div class="mention-item${i===0?' active':''}" onmousedown="event.preventDefault();selectMention('${m.name.replace(/'/g,"\\'")}')">
      <div class="mention-avatar">${m.name.charAt(0).toUpperCase()}</div>
      <div><div style="font-weight:600">${m.name}</div><div style="font-size:10px;color:var(--text-muted)">${m.role||''}</div></div>
    </div>`).join('');
  dd.style.display = 'block';
}

function getAllMentionableUsers() {
  const users = [];
  // From team members
  if (window.teamMembers) teamMembers.forEach(m => users.push({name: m.label, role: m.role}));
  // From registered users
  try {
    const allUsers = JSON.parse(localStorage.getItem('dc_all_users') || '[]');
    allUsers.forEach(u => { if (!users.find(x => x.name === u.name)) users.push({name: u.name, role: u.role}); });
  } catch(e) {}
  return users;
}

function selectMention(name) {
  const ta = document.getElementById('compose-input');
  const val = ta.value;
  const pos = ta.selectionStart;
  const before = val.substring(0, _mentionStart);
  const after = val.substring(pos);
  ta.value = before + '@' + name + ' ' + after;
  const newPos = before.length + name.length + 2;
  ta.setSelectionRange(newPos, newPos);
  document.getElementById('mention-dropdown').style.display = 'none';
  ta.focus();
}

function insertMention() {
  const ta = document.getElementById('compose-input');
  const pos = ta.selectionStart;
  ta.value = ta.value.substring(0, pos) + '@' + ta.value.substring(pos);
  ta.setSelectionRange(pos+1, pos+1);
  ta.focus();
  checkMentionTrigger(ta);
}

// ─── FILE ATTACHMENTS ─────────────────────────────────────────────────────────
function attachFiles(input) {
  const files = Array.from(input.files);
  const MAX = 5 * 1024 * 1024; // 5MB per file
  files.forEach(file => {
    if (file.size > MAX) { alert(`"${file.name}" é maior que 5MB e não pode ser anexado.`); return; }
    const reader = new FileReader();
    reader.onload = e => {
      _composeAttachments.push({ name: file.name, data: e.target.result, type: file.type, size: file.size });
      renderComposeAttachments();
    };
    reader.readAsDataURL(file);
  });
  input.value = '';
}

function renderComposeAttachments() {
  const el = document.getElementById('compose-attachments');
  if (!_composeAttachments.length) { el.style.display = 'none'; el.innerHTML = ''; return; }
  el.style.display = 'flex';
  el.innerHTML = _composeAttachments.map((f, i) => {
    const icon = f.type.startsWith('image/') ? '🖼️' : f.type.includes('pdf') ? '📄' : '📎';
    const kb = Math.round(f.size/1024);
    return `<div class="attach-chip">${icon} <span>${f.name}</span> <span style="color:var(--text-muted);font-size:10px">${kb}KB</span> <span class="rm" onclick="removeAttachment(${i})">✕</span></div>`;
  }).join('');
}

function removeAttachment(i) {
  _composeAttachments.splice(i, 1);
  renderComposeAttachments();
}

// ─── SCHEDULING ───────────────────────────────────────────────────────────────
function openSchedulePicker() {
  const picker = document.getElementById('schedule-picker');
  picker.style.display = picker.style.display === 'none' ? 'block' : 'none';
  // Set min datetime to now
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  document.getElementById('schedule-datetime').min = now.toISOString().slice(0,16);
}

function setScheduleQuick(type) {
  const d = new Date();
  if (type === 'tomorrow') { d.setDate(d.getDate()+1); d.setHours(9,0,0,0); }
  else { d.setDate(d.getDate() + (8 - d.getDay())); d.setHours(9,0,0,0); }
  applySchedule(d);
}

function setScheduleCustom() {
  const val = document.getElementById('schedule-datetime').value;
  if (!val) { alert('Selecione uma data e hora.'); return; }
  applySchedule(new Date(val));
}

function applySchedule(date) {
  _composeScheduled = date.toISOString();
  const label = date.toLocaleString('pt-BR', {day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'});
  document.getElementById('schedule-label').textContent = label;
  document.getElementById('schedule-badge').style.display = 'inline-flex';
  document.getElementById('schedule-picker').style.display = 'none';
}

function cancelSchedule() {
  _composeScheduled = null;
  document.getElementById('schedule-badge').style.display = 'none';
}

// ─── POST UPDATE (enhanced) ───────────────────────────────────────────────────
function postUpdate() {
  if (!updatesTarget) return;
  const input = document.getElementById('compose-input');
  const text = input.value.trim();
  if (!text && !_composeAttachments.length) return;
  const key = updatesTarget.itemId;
  if (!updatesData[key]) updatesData[key] = [];
  const authorName = window.currentUser?.name || 'Usuário';
  const now = new Date();

  // Extract mentions
  const mentionedNames = [...new Set((text.match(/@([\w\s]+?)(?=\s|$|@)/g)||[]).map(m=>m.slice(1).trim()))];

  const entry = {
    id: Date.now() + Math.random(),
    type: 'update',
    author: authorName,
    time: now.toLocaleString('pt-BR'),
    timestamp: now.toISOString(),
    text,
    attachments: _composeAttachments.map(a => ({name:a.name, data:a.data, type:a.type})),
    mentions: mentionedNames,
    replyTo: _replyTo ? { author: _replyTo.author, text: _replyTo.text } : null,
    scheduledAt: _composeScheduled || null,
    published: !_composeScheduled,
  };

  if (_composeScheduled) {
    // Save as scheduled — will auto-publish when opened after scheduledAt
    entry.type = 'update';
    addNotification('🕐 Atualização agendada', `"${updatesTarget.itemName}" — publicação para ${document.getElementById('schedule-label').textContent}`, 'schedule');
  } else {
    // Notify mentioned users
    mentionedNames.forEach(name => {
      addNotification(`💬 @${name} mencionado`, `${authorName} mencionou @${name} em "${updatesTarget.itemName}"`, 'mention');
      sendBrowserNotification(`${authorName} mencionou @${name}`, `Em: ${updatesTarget.itemName}\n"${text.substring(0,80)}"`);
      // Send to mentioned user via Firebase
      sendMentionNotifToUser(name, authorName, updatesTarget.itemName, text, updatesTarget.boardKey, updatesTarget.groupId, updatesTarget.itemId);
    });
    addNotification('✅ Atualização publicada', `"${updatesTarget.itemName}" — ${text.substring(0,60)}${text.length>60?'...':''}`, 'update');
    // Notify all co-assignees who didn't post this update and aren't already mentioned
    const _res = findItem(updatesTarget.boardKey, updatesTarget.itemId);
    if (_res) {
      const _assignees = _res.item.persons || (_res.item.person ? [_res.item.person] : []);
      _assignees.forEach(aName => {
        if (aName && aName !== authorName && !mentionedNames.includes(aName)) {
          sendMentionNotifToUser(aName, authorName, updatesTarget.itemName, text,
            updatesTarget.boardKey, updatesTarget.groupId, updatesTarget.itemId,
            `📋 ${authorName} atualizou "${updatesTarget.itemName}"`);
        }
      });
    }
  }

  updatesData[key].push(entry);

  // Upload de anexos para Firebase Storage + Files (em background)
  if (_composeAttachments.length && window.storageUpload && window.saveCrmFile) {
    const _itemRes2 = findItem(updatesTarget.boardKey, updatesTarget.itemId);
    const _clientId = _itemRes2?.item?._clientId || null;
    const _clientNome = _clientId ? (clientsData.find(c => c.id === _clientId)?.nome || '') : '';
    _composeAttachments.forEach(async (att) => {
      try {
        const blob = await fetch(att.data).then(r => r.blob());
        const fileId = window.storageGenId();
        const ext = att.name.split('.').pop();
        const path = _clientId ? `clients/${_clientId}/updates/${fileId}.${ext}` : `updates/${fileId}.${ext}`;
        const url = await window.storageUpload(blob, path);
        await window.saveCrmFile({
          id: fileId, name: att.name, url, fullPath: path,
          size: att.size, type: att.type,
          uploadedBy: window.currentUser?.uid || '',
          uploadedByName: authorName,
          clientId: _clientId || '', clientNome: _clientNome,
          category: 'atualizacao',
          createdAt: Date.now(),
        });
        if (currentPage === 'files') { _filesData = window.loadCrmFiles ? (await window.loadCrmFiles()) : _filesData; _renderFilesList(); }
      } catch(e) { console.warn('Falha ao salvar anexo em Arquivos:', e.message); }
    });
  }

  _composeAttachments = [];
  _composeScheduled = null;
  _replyTo = null;
  const _rp = document.getElementById('compose-reply-preview');
  if (_rp) _rp.style.display = 'none';
  input.value = '';
  input.style.height = '';
  renderComposeAttachments();
  document.getElementById('schedule-badge').style.display = 'none';
  document.getElementById('mention-dropdown').style.display = 'none';
  saveState();
  renderUpdatesBody();
  checkScheduledUpdates();
  // Sugestão do próximo passo (automação #9)
  if (!_composeScheduled) {
    const _itemRes = findItem(updatesTarget.boardKey, updatesTarget.itemId);
    if (_itemRes) showSuggestionToast(getSuggestion(_itemRes.item, text));
  }
}

function addChecklistItem() {
  if (!updatesTarget) return;
  openAddSubitem(updatesTarget.boardKey, updatesTarget.groupId, updatesTarget.itemId);
}

function logActivity(itemId, text) {
  if (!updatesData[itemId]) updatesData[itemId] = [];
  const authorName = window.currentUser?.name || 'Usuário';
  updatesData[itemId].push({ type: 'activity', author: authorName, time: new Date().toLocaleString('pt-BR'), text, published: true });
  addNotification('📋 ' + text, authorName + ' — ' + new Date().toLocaleTimeString('pt-BR', {hour:'2-digit',minute:'2-digit'}), 'activity');
  saveState();
}

// ─── CHECK SCHEDULED UPDATES ──────────────────────────────────────────────────
function checkScheduledUpdates() {
  const now = new Date();
  let changed = false;
  Object.keys(updatesData).forEach(key => {
    updatesData[key].forEach(e => {
      if (e.scheduledAt && !e.published && new Date(e.scheduledAt) <= now) {
        e.published = true;
        changed = true;
        addNotification('🕐 Atualização publicada automaticamente', `Publicada conforme agendado`, 'schedule');
      }
    });
  });
  if (changed) { saveState(); renderUpdatesBody(); }
}

// ─── RENDER UPDATES BODY (enhanced) ──────────────────────────────────────────
function renderUpdatesBodyEnhanced() {
  if (!updatesTarget) return;
  const key = updatesTarget.itemId;
  const all = (updatesData[key] || []).slice().reverse();
  const body = document.getElementById('updates-body');
  const now = new Date();

  if (updatesTab === 'activity') {
    const acts = all.filter(e => e.type === 'activity');
    if (!acts.length) { body.innerHTML = `<div style="text-align:center;color:var(--text-muted);padding:30px;font-size:12px">Nenhuma atividade registrada.</div>`; return; }
    body.innerHTML = acts.map(e => `
      <div style="display:flex;align-items:flex-start;gap:10px;font-size:11.5px;padding:6px 0">
        <div style="width:6px;height:6px;border-radius:50%;background:var(--accent);margin-top:5px;flex-shrink:0"></div>
        <div><span style="color:var(--text-primary);font-weight:600">${e.author}</span> <span style="color:var(--text-muted)">${e.text}</span>
        <div style="color:var(--text-muted);font-size:10px;margin-top:2px">${e.time}</div></div>
      </div>`).join('');
    return;
  }

  if (updatesTab === 'checklist') {
    const res = findItem(updatesTarget.boardKey, updatesTarget.itemId);
    const subitems = res?.item?.subitems || [];
    if (!subitems.length) {
      body.innerHTML = `<div style="text-align:center;color:var(--text-muted);padding:30px;font-size:12px">Nenhum subelemento ainda.<br><button class="btn btn-ghost" style="margin-top:10px;font-size:11px" onclick="openAddSubitem('${updatesTarget.boardKey}','${updatesTarget.groupId}',${updatesTarget.itemId})">+ Adicionar tarefa</button></div>`;
      return;
    }
    const done = subitems.filter(s=>s.status==='Feito').length;
    body.innerHTML = `
      <div style="font-size:10px;color:var(--text-muted);margin-bottom:8px;font-weight:600;letter-spacing:.8px;text-transform:uppercase">${done}/${subitems.length} concluídas</div>
      <div style="height:4px;background:var(--border);border-radius:99px;margin-bottom:14px;overflow:hidden">
        <div style="height:100%;background:var(--green);border-radius:99px;width:${subitems.length?Math.round(done/subitems.length*100):0}%;transition:width .3s"></div>
      </div>
      ${subitems.map(sub => `
        <div class="checklist-item ${sub.status==='Feito'?'done':''}" onclick="toggleSubCheck('${updatesTarget.boardKey}','${updatesTarget.groupId}',${updatesTarget.itemId},${sub.id})">
          <input type="checkbox" class="task-check" ${sub.status==='Feito'?'checked':''} onchange="toggleSubCheck('${updatesTarget.boardKey}','${updatesTarget.groupId}',${updatesTarget.itemId},${sub.id})" onclick="event.stopPropagation()">
          <span class="check-label">${sub.name}</span>
          <span style="font-size:10px;color:var(--text-muted)">${sub.person||''}</span>
        </div>`).join('')}
      <button class="btn btn-ghost" style="width:100%;margin-top:8px;font-size:11px" onclick="openAddSubitem('${updatesTarget.boardKey}','${updatesTarget.groupId}',${updatesTarget.itemId})">+ Adicionar tarefa</button>`;
    return;
  }

  // Updates tab — show published + future scheduled (labeled)
  const updates = all.filter(e => e.type === 'update');
  if (!updates.length) {
    body.innerHTML = `<div style="text-align:center;color:var(--text-muted);padding:30px;font-size:12px">Nenhuma atualização ainda.<br>Escreva a primeira! 👇</div>`;
    return;
  }
  _fvFiles = [];        // reset file viewer registry
  _updateEntries = [];  // reset reply registry
  body.innerHTML = updates.map(e => {
    const eIdx = _updateEntries.length;
    _updateEntries.push(e);
    const isScheduled = e.scheduledAt && !e.published;
    const schedDate = e.scheduledAt ? new Date(e.scheduledAt).toLocaleString('pt-BR', {day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'}) : '';
    // Markdown + @mention rendering
    const htmlText = (e.text||'')
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
      .replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>')
      .replace(/__(.*?)__/g,'<u>$1</u>')
      .replace(/~~(.*?)~~/g,'<s>$1</s>')
      .replace(/(?<![*_])\b_([^_]+)_\b/g,'<em>$1</em>')
      .replace(/`([^`]+)`/g,'<code style="background:var(--bg-base);padding:1px 5px;border-radius:4px;font-family:var(--mono);font-size:11px">$1</code>')
      .replace(/@([\w ]+?)(?=\s|$)/g,'<span class="update-mention">@$1</span>')
      .replace(/\n/g,'<br>');
    // Reply quote block
    let replyHtml = '';
    if (e.replyTo) {
      const safeText = (e.replyTo.text||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
      replyHtml = `<div style="border-left:3px solid var(--purple);padding:4px 10px;background:rgba(124,92,252,.07);border-radius:0 6px 6px 0;margin-bottom:7px">
        <div style="font-size:10px;font-weight:700;color:var(--purple);margin-bottom:2px">${e.replyTo.author}</div>
        <div style="font-size:11.5px;color:var(--text-secondary);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${safeText.substring(0,120)}</div>
      </div>`;
    }
    // Attachments
    let attachHtml = '';
    if (e.attachments && e.attachments.length) {
      attachHtml = '<div class="update-attachment">' + e.attachments.map(a => {
        const idx = _fvFiles.length;
        _fvFiles.push(a);
        if (a.type && a.type.startsWith('image/')) {
          return `<div onclick="openFileViewer(${idx})" class="update-attach-link" style="cursor:pointer"><img src="${a.data}" style="max-width:160px;max-height:100px;border-radius:6px;display:block" alt="${a.name}"></div>`;
        }
        const icon = a.type && a.type.includes('pdf') ? '📄' : '📎';
        return `<div onclick="openFileViewer(${idx})" class="update-attach-link" style="cursor:pointer;display:flex;align-items:center;gap:5px">${icon} <span>${a.name}</span></div>`;
      }).join('') + '</div>';
    }
    return `<div class="update-entry" style="${isScheduled?'opacity:.7;border:1px dashed var(--border);border-radius:10px;padding:8px':''}" onmouseenter="this.querySelector('.reply-btn')&&(this.querySelector('.reply-btn').style.opacity='1')" onmouseleave="this.querySelector('.reply-btn')&&(this.querySelector('.reply-btn').style.opacity='0')">
      <div class="update-avatar">${e.author.charAt(0).toUpperCase()}</div>
      <div class="update-bubble" style="flex:1;min-width:0">
        ${isScheduled ? `<div class="scheduled-badge">🕐 Agendada para ${schedDate}</div>` : ''}
        <div style="display:flex;align-items:baseline;justify-content:space-between;gap:8px">
          <div class="update-author">${e.author}</div>
          <div style="display:flex;align-items:center;gap:6px">
            <div class="update-time">${e.time}</div>
            <button class="reply-btn" onclick="setReplyTo(${eIdx})" title="Responder" style="opacity:0;transition:opacity .15s;background:none;border:1px solid var(--border);border-radius:5px;font-size:10px;cursor:pointer;color:var(--text-muted);padding:1px 6px;white-space:nowrap">↩ Responder</button>
          </div>
        </div>
        ${replyHtml}
        <div class="update-text">${htmlText}</div>
        ${attachHtml}
      </div>
    </div>`;
  }).join('');
}

// ─── NOTIFICATIONS ────────────────────────────────────────────────────────────
let _notifications = [];

function loadNotifications() {
  try { _notifications = JSON.parse(localStorage.getItem('dc_notifs_v1') || '[]'); } catch(e) { _notifications = []; }
  updateNotifBadge();
}

async function loadFirebaseNotifications() {
  const uid = window.currentUser?.uid;
  if (!uid || !window.loadFirebaseNotifs) return;
  try {
    const remote = await window.loadFirebaseNotifs(uid);
    if (!remote.length) return;
    // Merge: avoid duplicates by id
    const existingIds = new Set(_notifications.map(n => n.id));
    const newOnes = remote.filter(n => !existingIds.has(n.id));
    if (newOnes.length) {
      _notifications = [...newOnes, ..._notifications].sort((a,b) => b.id - a.id).slice(0, 100);
      saveNotifications();
      updateNotifBadge();
    }
    // Clear Firebase after loading so next time only new ones come
    await window.clearFirebaseNotifs(uid);
  } catch(e) { console.error('loadFirebaseNotifications error:', e); }
}

function saveNotifications() {
  try { localStorage.setItem('dc_notifs_v1', JSON.stringify(_notifications.slice(0, 100))); } catch(e) {}
}

function addNotification(title, body, type) {
  _notifications.unshift({ id: Date.now(), title, body, type, time: new Date().toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'}), read: false, _local: true });
  saveNotifications();
  updateNotifBadge();
}
function addNotif(msg, type) { addNotification(msg, '', type || 'info'); }

async function sendMentionNotifToUser(targetName, authorName, itemName, text, boardKey, groupId, itemId, customTitle) {
  if (!window.sendFirebaseNotif) return;
  // Find the target user's UID from the known users list
  try {
    const allUsers = JSON.parse(localStorage.getItem('dc_all_users') || '[]');
    const target = allUsers.find(u => u.name && u.name.toLowerCase() === targetName.toLowerCase());
    if (!target || !target.uid) return;
    // Don't notify yourself
    if (target.uid === window.currentUser?.uid) return;
    const notif = {
      id: Date.now() + Math.random(),
      title: customTitle || `💬 ${authorName} mencionou você`,
      body: `Em "${itemName}": ${text.substring(0, 80)}${text.length > 80 ? '...' : ''}`,
      type: 'mention',
      time: new Date().toLocaleTimeString('pt-BR', {hour:'2-digit', minute:'2-digit'}),
      read: false,
      boardKey: boardKey || null,
      groupId: groupId || null,
      itemId: itemId || null,
    };
    await window.sendFirebaseNotif(target.uid, notif);
  } catch(e) { console.error('sendMentionNotifToUser error:', e); }
}

function updateNotifBadge() {
  const unread = _notifications.filter(n => !n.read).length;
  const badge = document.getElementById('notif-badge');
  if (badge) { badge.textContent = unread; badge.style.display = unread > 0 ? 'flex' : 'none'; }
}

function toggleNotifPanel() {
  const panel = document.getElementById('notif-panel');
  const isOpen = panel.style.display === 'flex';
  panel.style.display = isOpen ? 'none' : 'flex';
  panel.style.flexDirection = 'column';
  if (!isOpen) { renderNotifPanel(); markAllNotifsRead(); }
}

function renderNotifPanel() {
  const list = document.getElementById('notif-list');
  if (!_notifications.length) {
    list.innerHTML = '<div style="text-align:center;color:var(--text-muted);padding:30px;font-size:12px">Nenhuma notificação ainda.</div>';
    return;
  }
  const icons = { mention:'💬', update:'✅', activity:'📋', schedule:'🕐' };
  list.innerHTML = _notifications.slice(0, 50).map(n => `
    <div class="notif-item ${n.read?'':'unread'}" onclick="handleNotifClick(${n.id})" style="${n.type==='mention'&&n.itemId?'cursor:pointer':''}">
      <div style="display:flex;gap:10px;align-items:flex-start">
        <div style="font-size:16px;flex-shrink:0">${icons[n.type]||'🔔'}</div>
        <div style="flex:1;min-width:0">
          <div style="font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${n.title}</div>
          <div style="color:var(--text-muted);font-size:11px;margin-top:1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${n.body}</div>
        </div>
        <div style="font-size:10px;color:var(--text-muted);flex-shrink:0">${n.time}</div>
      </div>
    </div>`).join('');
}

function handleNotifClick(id) {
  const n = _notifications.find(x => x.id === id);
  if (!n) return;
  n.read = true;
  saveNotifications();
  updateNotifBadge();
  document.getElementById('notif-panel').style.display = 'none';
  if (n.type === 'mention' && n.boardKey && n.itemId) {
    showPage('crm');
    setTimeout(() => openUpdates(n.boardKey, n.groupId, n.itemId), 350);
  }
}
function markNotifRead(id) { const n = _notifications.find(x=>x.id===id); if(n) n.read=true; saveNotifications(); updateNotifBadge(); renderNotifPanel(); }
function markAllNotifsRead() { _notifications.forEach(n=>n.read=true); saveNotifications(); updateNotifBadge(); }
function clearAllNotifs() { _notifications=[]; saveNotifications(); updateNotifBadge(); renderNotifPanel(); }

// ─── FILE VIEWER ──────────────────────────────────────────────────────────────
function openFileViewer(idx) {
  const file = _fvFiles[idx];
  if (!file) return;
  const overlay = document.getElementById('file-viewer-overlay');
  document.getElementById('fv-title').textContent = file.name;
  const dl = document.getElementById('fv-download');
  dl.href = file.data;
  dl.download = file.name;
  const body = document.getElementById('fv-body');

  if (file.type && file.type.startsWith('image/')) {
    body.innerHTML = `<img src="${file.data}" style="max-width:82vw;max-height:76vh;object-fit:contain;border-radius:8px;display:block">`;
  } else if (file.type && file.type.includes('pdf')) {
    body.innerHTML = `<embed src="${file.data}" type="application/pdf" style="width:min(820px,85vw);height:76vh;border:none;border-radius:4px">`;
  } else {
    const ext = file.name.split('.').pop().toLowerCase();
    const icon = ['xls','xlsx','csv'].includes(ext) ? '📊' : ['doc','docx'].includes(ext) ? '📝' : ['txt'].includes(ext) ? '📃' : '📎';
    body.innerHTML = `<div style="text-align:center;padding:48px 32px">
      <div style="font-size:64px;margin-bottom:16px">${icon}</div>
      <div style="font-size:16px;font-weight:700;margin-bottom:6px;color:var(--text-main)">${file.name}</div>
      <div style="color:var(--text-muted);font-size:12px;margin-bottom:28px">Visualização não disponível para este tipo de arquivo</div>
      <a href="${file.data}" download="${file.name}" style="background:var(--purple);color:#fff;padding:10px 28px;border-radius:8px;text-decoration:none;font-size:13px;font-weight:600">⬇ Baixar arquivo</a>
    </div>`;
  }
  overlay.style.display = 'flex';
}

function closeFileViewer() {
  document.getElementById('file-viewer-overlay').style.display = 'none';
  document.getElementById('fv-body').innerHTML = '';
}

// ─── REPLY TO MESSAGE ─────────────────────────────────────────────────────────
function setReplyTo(idx) {
  const entry = _updateEntries[idx];
  if (!entry) return;
  _replyTo = { author: entry.author, text: entry.text };
  document.getElementById('reply-author-name').textContent = _replyTo.author;
  document.getElementById('reply-text-preview').textContent = (_replyTo.text || '').substring(0, 120);
  document.getElementById('compose-reply-preview').style.display = 'block';
  document.getElementById('compose-input').focus();
}
function clearReply() {
  _replyTo = null;
  document.getElementById('compose-reply-preview').style.display = 'none';
}

// ─── FORMATTING TOOLBAR ───────────────────────────────────────────────────────
function fmtText(type) {
  const ta = document.getElementById('compose-input');
  if (!ta) return;
  const start = ta.selectionStart;
  const end = ta.selectionEnd;
  const selected = ta.value.substring(start, end);
  if (type === 'ul') {
    const lines = selected ? selected.split('\n') : [''];
    ta.setRangeText(lines.map(l => '• ' + l).join('\n'), start, end, 'end');
    ta.focus(); return;
  }
  if (type === 'ol') {
    const lines = selected ? selected.split('\n') : [''];
    ta.setRangeText(lines.map((l, i) => `${i+1}. ${l}`).join('\n'), start, end, 'end');
    ta.focus(); return;
  }
  const map = { bold:['**','**'], italic:['_','_'], underline:['__','__'], strike:['~~','~~'], code:['`','`'] };
  const [b, a] = map[type] || ['',''];
  ta.setRangeText(`${b}${selected || 'texto'}${a}`, start, end, selected ? 'end' : 'select');
  ta.focus();
}

// ─── LABELS ───────────────────────────────────────────────────────────────────
function loadLabels() {
  try { _labels = JSON.parse(localStorage.getItem('dc_labels') || '[]'); } catch(e) { _labels = []; }
}
function saveLabels() {
  localStorage.setItem('dc_labels', JSON.stringify(_labels));
}
function openLabelsModal() {
  document.getElementById('modal-labels').classList.add('open');
  renderLabelsModal();
}
function closeLabelsModal() {
  document.getElementById('modal-labels').classList.remove('open');
}
function renderLabelsModal() {
  const el = document.getElementById('labels-list');
  if (!_labels.length) {
    el.innerHTML = '<div style="text-align:center;color:var(--text-muted);padding:24px;font-size:12px">Nenhuma etiqueta criada ainda.<br>Use o campo acima para criar a primeira! 🏷️</div>';
    return;
  }
  el.innerHTML = _labels.map(l => `
    <div style="display:flex;align-items:center;gap:8px;padding:8px 10px;background:var(--bg-base);border-radius:8px;border:1px solid var(--border)">
      <div style="width:20px;height:20px;border-radius:5px;background:${l.color};flex-shrink:0"></div>
      <input type="text" value="${l.name.replace(/"/g,'&quot;')}" onchange="updateLabelName('${l.id}',this.value)" style="flex:1;border:none;background:transparent;font-size:13px;color:var(--text-primary);font-family:var(--font);outline:none">
      <input type="color" value="${l.color}" onchange="updateLabelColor('${l.id}',this.value)" style="width:28px;height:28px;border:none;cursor:pointer;background:transparent;padding:0;border-radius:4px">
      <button onclick="deleteLabel('${l.id}')" style="background:none;border:none;cursor:pointer;color:var(--red);font-size:15px;padding:2px 4px" title="Excluir">🗑</button>
    </div>`).join('');
}
function createLabel() {
  const name = document.getElementById('new-label-name').value.trim();
  const color = document.getElementById('new-label-color').value;
  if (!name) return;
  _labels.push({ id: 'l' + Date.now(), name, color });
  saveLabels();
  document.getElementById('new-label-name').value = '';
  renderLabelsModal();
  renderCRM();
}
function updateLabelName(id, name) {
  const l = _labels.find(x => x.id === id);
  if (l) { l.name = name; saveLabels(); }
}
function updateLabelColor(id, color) {
  const l = _labels.find(x => x.id === id);
  if (l) { l.color = color; saveLabels(); renderLabelsModal(); renderCRM(); }
}
function deleteLabel(id) {
  _labels = _labels.filter(x => x.id !== id);
  saveLabels();
  // Remove from all items
  Object.values(state).forEach(board => (board.groups||[]).forEach(g => g.items.forEach(item => {
    if (item.labels) item.labels = item.labels.filter(lid => lid !== id);
  })));
  saveState();
  renderLabelsModal();
  renderCRM();
}
function toggleItemLabel(boardKey, groupId, itemId, labelId, event) {
  event && event.stopPropagation();
  const res = findItem(boardKey, itemId);
  if (!res) return;
  const item = res.item;
  if (!item.labels) item.labels = [];
  if (item.labels.includes(labelId)) item.labels = item.labels.filter(x => x !== labelId);
  else item.labels.push(labelId);
  saveState();
  renderCRM();
}
function openLabelPicker(boardKey, groupId, itemId, event) {
  event && event.stopPropagation();
  // Close any open picker
  document.querySelectorAll('.label-picker-popup').forEach(p => p.remove());
  if (!_labels.length) { openLabelsModal(); return; }
  const btn = event.currentTarget || event.target;
  const res = findItem(boardKey, itemId);
  const item = res?.item;
  if (!item) return;
  const popup = document.createElement('div');
  popup.className = 'label-picker-popup';
  popup.style.cssText = 'position:fixed;z-index:8000;background:var(--bg-card);border:1px solid var(--border);border-radius:10px;box-shadow:0 8px 28px rgba(0,0,0,.25);padding:8px;min-width:180px;max-height:260px;overflow-y:auto';
  const rect = btn.getBoundingClientRect();
  popup.style.top = (rect.bottom + 4) + 'px';
  popup.style.left = rect.left + 'px';
  popup.innerHTML = _labels.map(l => {
    const active = (item.labels||[]).includes(l.id);
    return `<div onclick="toggleItemLabel('${boardKey}','${groupId}',${itemId},'${l.id}',event);document.querySelectorAll('.label-picker-popup').forEach(p=>p.remove())" style="display:flex;align-items:center;gap:8px;padding:6px 8px;border-radius:6px;cursor:pointer;background:${active?'rgba(124,92,252,.1)':'transparent'};margin-bottom:2px">
      <div style="width:14px;height:14px;border-radius:4px;background:${l.color};flex-shrink:0"></div>
      <span style="font-size:12.5px;flex:1;color:var(--text-primary)">${l.name}</span>
      ${active ? '<span style="color:var(--purple);font-size:12px">✓</span>' : ''}
    </div>`;
  }).join('');
  document.body.appendChild(popup);
  setTimeout(() => document.addEventListener('click', () => popup.remove(), {once:true}), 10);
}
function renderItemLabels(item) {
  if (!item.labels || !item.labels.length) return '';
  return item.labels.map(lid => {
    const l = _labels.find(x => x.id === lid);
    if (!l) return '';
    return `<span style="display:inline-block;background:${l.color};color:#fff;font-size:9.5px;font-weight:600;padding:1px 7px;border-radius:20px;margin:1px 2px;white-space:nowrap">${l.name}</span>`;
  }).join('');
}
function getUserPhoto(name) {
  try {
    const allUsers = JSON.parse(localStorage.getItem('dc_all_users') || '[]');
    const u = allUsers.find(x => x.name && x.name.toLowerCase() === (name||'').toLowerCase());
    return u?.photo || null;
  } catch(e) { return null; }
}

function renderPersonAvatars(item) {
  const persons = item.persons || (item.person ? [item.person] : []);
  if (!persons.length) return ''; // célula vazia quando não há responsável
  return persons.map(name => {
    const photo = getUserPhoto(name);
    const initials = name.split(' ').map(w => w[0]).join('').substring(0,2).toUpperCase();
    const inner = photo
      ? `<img src="${photo}" style="width:100%;height:100%;border-radius:50%;object-fit:cover" onerror="this.style.display='none';this.nextSibling.style.display='flex'">${initials}`
      : initials;
    return `<span title="${name}" style="position:relative;display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;background:var(--purple);color:#fff;font-size:9px;font-weight:700;margin-right:2px;border:1.5px solid var(--bg-card);overflow:hidden;flex-shrink:0">${inner}</span>`;
  }).join('');
}

// ─── MULTI-ASSIGNEE PICKER ────────────────────────────────────────────────────
let _personsPickerOpen = false;

function togglePersonsPicker() {
  const dd = document.getElementById('f-persons-dropdown');
  if (!dd) return;
  if (_personsPickerOpen) { closePersonsPicker(); return; }
  _personsPickerOpen = true;
  renderPersonsPicker();
  dd.style.display = 'block';
}
function closePersonsPicker() {
  const dd = document.getElementById('f-persons-dropdown');
  if (dd) dd.style.display = 'none';
  _personsPickerOpen = false;
}
// Clique fora do picker fecha ele
document.addEventListener('click', e => {
  if (!_personsPickerOpen) return;
  const display = document.getElementById('f-persons-display');
  const dd = document.getElementById('f-persons-dropdown');
  if (dd && display && !dd.contains(e.target) && !display.contains(e.target)) closePersonsPicker();
});
function renderPersonsPicker() {
  const dd = document.getElementById('f-persons-dropdown');
  if (!dd) return;
  const allUsers = JSON.parse(localStorage.getItem('dc_all_users') || '[]');
  const names = [...new Set(allUsers.map(u => u.name).filter(Boolean))];
  // Cabeçalho com botão X para fechar o picker
  const header = `<div style="display:flex;align-items:center;justify-content:space-between;padding:6px 8px 8px;border-bottom:1px solid var(--border);margin-bottom:4px">
    <span style="font-size:11px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.8px">Selecionar responsáveis</span>
    <button onclick="closePersonsPicker()" style="background:none;border:none;cursor:pointer;font-size:16px;color:var(--text-muted);line-height:1;padding:0 2px" title="Fechar">✕</button>
  </div>`;
  if (!names.length) {
    dd.innerHTML = header + '<div style="font-size:12px;color:var(--text-muted);padding:10px;text-align:center">Nenhum usuário cadastrado.</div>';
    return;
  }
  dd.innerHTML = header + names.map(name => {
    const sel = _selectedPersons.includes(name);
    const initials = name.split(' ').map(w=>w[0]).join('').substring(0,2).toUpperCase();
    return `<div onclick="togglePersonSelection('${name.replace(/'/g,"\\'")}',event)" style="display:flex;align-items:center;gap:8px;padding:7px 8px;border-radius:7px;cursor:pointer;background:${sel?'rgba(124,92,252,.1)':'transparent'};margin-bottom:2px">
      <div style="width:26px;height:26px;border-radius:50%;background:var(--purple);color:#fff;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;flex-shrink:0">${initials}</div>
      <span style="font-size:13px;flex:1;color:var(--text-primary)">${name}</span>
      ${sel ? '<span style="color:var(--purple);font-size:13px">✓</span>' : ''}
    </div>`;
  }).join('');
}
function togglePersonSelection(name, event) {
  event && event.stopPropagation();
  if (_selectedPersons.includes(name)) _selectedPersons = _selectedPersons.filter(p => p !== name);
  else _selectedPersons.push(name);
  updatePersonsDisplay();
  renderPersonsPicker();
}
// ─── STATUS PICKER (Monday-style — só etiquetas) ──────────────────────────────
let _statusPickerOpen = false;

function renderStatusBadge(boardKey, groupId, itemId, status, subId) {
  const label = _labels.find(l => l.name === status);
  const sp = subId !== undefined ? `,${subId}` : '';
  const onclick = `openStatusPicker('${boardKey}','${groupId}',${itemId},event${sp})`;
  if (label) {
    return `<div onclick="${onclick}" style="display:inline-flex;align-items:center;padding:3px 12px;border-radius:20px;font-size:11.5px;font-weight:600;white-space:nowrap;cursor:pointer;background:${label.color};color:#fff;user-select:none">${status}</div>`;
  }
  if (status) {
    return `<div onclick="${onclick}" class="badge ${statusClass(status)}" style="display:inline-flex;align-items:center;padding:3px 11px;border-radius:20px;font-size:11.5px;font-weight:600;white-space:nowrap;cursor:pointer;user-select:none">${status}</div>`;
  }
  return `<div onclick="${onclick}" style="display:inline-flex;align-items:center;padding:3px 12px;border-radius:20px;font-size:11.5px;font-weight:600;white-space:nowrap;cursor:pointer;background:var(--bg-card2);color:var(--text-muted);border:1.5px dashed var(--border);user-select:none">— status</div>`;
}

function openStatusPicker(boardKey, groupId, itemId, event, subId) {
  event && event.stopPropagation();
  document.querySelectorAll('.status-picker-popup').forEach(p => p.remove());
  _statusPickerOpen = false;
  const subParam = subId !== undefined ? subId : 'null';
  const popup = document.createElement('div');
  popup.className = 'status-picker-popup';
  popup.style.cssText = 'position:fixed;z-index:9500;background:var(--bg-card);border:1px solid var(--border);border-radius:12px;box-shadow:0 16px 48px rgba(0,0,0,.32);padding:8px;min-width:230px;max-height:520px;overflow-y:auto';
  const rect = (event.currentTarget || event.target).getBoundingClientRect();
  popup.style.top  = Math.min(rect.bottom + 4, window.innerHeight - 540) + 'px';
  popup.style.left = Math.min(rect.left, window.innerWidth - 250) + 'px';
  _buildStatusPickerHTML(popup, boardKey, groupId, itemId, subParam);
  document.body.appendChild(popup);
  _statusPickerOpen = true;
}

document.addEventListener('click', e => {
  if (!_statusPickerOpen) return;
  const popup = document.querySelector('.status-picker-popup');
  if (popup && !popup.contains(e.target)) { popup.remove(); _statusPickerOpen = false; }
});

function _buildStatusPickerHTML(popup, boardKey, groupId, itemId, subParam) {
  const colors = ['#ef4444','#f97316','#eab308','#22c55e','#10b981','#06b6d4','#3b82f6','#6366f1','#8b5cf6','#ec4899','#64748b','#1e293b'];
  let html = `<div style="font-size:10px;color:var(--text-muted);padding:4px 8px 8px;font-weight:700;letter-spacing:1px;text-transform:uppercase">Status</div>`;
  if (!_labels.length) {
    html += `<div style="padding:14px 10px;font-size:12px;color:var(--text-muted);text-align:center;line-height:1.8">Nenhum status criado.<br>Use o botão abaixo ↓</div>`;
  } else {
    html += _labels.map(l => {
      const safe = l.name.replace(/\\/g,'\\\\').replace(/'/g,"\\'");
      return `<div style="display:flex;align-items:center;gap:2px;padding:2px 2px;border-radius:8px;margin-bottom:1px"
           onmouseenter="this.querySelector('.spick-del').style.opacity='1'"
           onmouseleave="this.querySelector('.spick-del').style.opacity='0'">
        <div onclick="selectStatus('${boardKey}','${groupId}',${itemId},'${safe}',${subParam})"
             style="flex:1;padding:4px 6px;border-radius:7px;cursor:pointer;transition:background .12s"
             onmouseenter="this.style.background='var(--bg-card2)'" onmouseleave="this.style.background='none'">
          <span style="display:inline-flex;padding:4px 14px;border-radius:20px;font-size:12px;font-weight:600;background:${l.color};color:#fff;white-space:nowrap">${l.name}</span>
        </div>
        <button class="spick-del" onclick="event.stopPropagation();_statusDelLabel('${l.id}','${boardKey}','${groupId}',${itemId},${subParam})"
                style="opacity:0;border:none;background:none;cursor:pointer;color:var(--text-muted);width:24px;height:24px;border-radius:5px;font-size:12px;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .15s"
                onmouseenter="this.style.background='var(--bg-card2)';this.style.color='#ef4444'"
                onmouseleave="this.style.background='none';this.style.color='var(--text-muted)'">✕</button>
      </div>`;
    }).join('');
  }
  html += `<div style="border-top:1px solid var(--border);margin-top:6px;padding-top:6px">
    <div id="spick-form" style="display:none;padding:4px 2px 6px">
      <input id="spick-name" placeholder="Nome do status..." maxlength="30"
             style="width:100%;padding:7px 10px;border:1.5px solid var(--border);border-radius:8px;background:var(--bg-card2);color:var(--text-primary);font-family:var(--font);font-size:13px;outline:none;margin-bottom:8px;box-sizing:border-box"
             onkeydown="if(event.key==='Enter'){event.stopPropagation();_statusCreate('${boardKey}','${groupId}',${itemId},${subParam})}">
      <div style="display:flex;gap:5px;flex-wrap:wrap;margin-bottom:10px" id="spick-clrs">
        ${colors.map((c,i) =>
          `<div onclick="event.stopPropagation();document.getElementById('spick-color').value='${c}';document.querySelectorAll('#spick-clrs .spdot').forEach(d=>d.style.outline='none');this.style.outline='2px solid ${c}';this.style.outlineOffset='2px'"
                class="spdot" style="width:22px;height:22px;border-radius:50%;background:${c};cursor:pointer;flex-shrink:0;${i===5?'outline:2px solid '+c+';outline-offset:2px':''}" title="${c}"></div>`
        ).join('')}
      </div>
      <input type="hidden" id="spick-color" value="${colors[5]}">
      <div style="display:flex;gap:6px">
        <button onclick="event.stopPropagation();_statusCreate('${boardKey}','${groupId}',${itemId},${subParam})"
                style="flex:1;padding:7px;background:var(--accent);color:#fff;border:none;border-radius:7px;font-family:var(--font);font-size:12px;font-weight:600;cursor:pointer">Criar</button>
        <button onclick="event.stopPropagation();document.getElementById('spick-form').style.display='none'"
                style="padding:7px 12px;background:var(--bg-card2);color:var(--text-primary);border:1px solid var(--border);border-radius:7px;font-family:var(--font);font-size:12px;cursor:pointer">✕</button>
      </div>
    </div>
    <div onclick="event.stopPropagation();document.getElementById('spick-form').style.display='block';setTimeout(()=>document.getElementById('spick-name')?.focus(),50)"
         style="display:flex;align-items:center;gap:6px;padding:7px 8px;cursor:pointer;color:var(--accent);font-size:12px;font-weight:600;border-radius:7px;transition:background .15s"
         onmouseenter="this.style.background='var(--bg-card2)'" onmouseleave="this.style.background='none'">
      <span style="font-size:18px;line-height:1">+</span> Novo status
    </div>
  </div>`;
  popup.innerHTML = html;
}

function _statusDelLabel(id, boardKey, groupId, itemId, subParam) {
  const lbl = _labels.find(x => x.id === id);
  if (!lbl) return;
  if (!confirm(`Excluir o status "${lbl.name}"?\nItens com esse status ficarão sem status.`)) return;
  _labels = _labels.filter(x => x.id !== id);
  saveLabels();
  Object.values(state).forEach(board => (board.groups||[]).forEach(g => g.items.forEach(item => {
    if (item.status === lbl.name) item.status = '';
    (item.subitems||[]).forEach(s => { if (s.status === lbl.name) s.status = ''; });
  })));
  saveState();
  const popup = document.querySelector('.status-picker-popup');
  if (popup) _buildStatusPickerHTML(popup, boardKey, groupId, itemId, subParam);
}

function _statusCreate(boardKey, groupId, itemId, subParam) {
  const nameEl  = document.getElementById('spick-name');
  const colorEl = document.getElementById('spick-color');
  const name  = nameEl?.value?.trim();
  const color = colorEl?.value || '#06b6d4';
  if (!name) { nameEl?.focus(); return; }
  if (_labels.find(l => l.name.toLowerCase() === name.toLowerCase())) { alert('Já existe um status com esse nome.'); return; }
  _labels.push({ id: 'l' + Date.now(), name, color });
  saveLabels();
  selectStatus(boardKey, groupId, itemId, name, subParam);
  const popup = document.querySelector('.status-picker-popup');
  if (popup) { popup.remove(); _statusPickerOpen = false; }
}

function selectStatus(boardKey, groupId, itemId, status, subId) {
  document.querySelectorAll('.status-picker-popup').forEach(p => p.remove());
  _statusPickerOpen = false;
  if (subId !== null && subId !== undefined && subId !== 'null') {
    changeSubStatus(boardKey, groupId, itemId, subId, status);
  } else {
    changeStatus(boardKey, groupId, itemId, status);
  }
}

// ─── INLINE PERSON PICKER ─────────────────────────────────────────────────────
function openInlinePersonPicker(boardKey, groupId, itemId, event) {
  event && event.stopPropagation();
  document.querySelectorAll('.inline-person-popup').forEach(p => p.remove());
  const res = findItem(boardKey, itemId);
  if (!res) return;
  const item = res.item;
  const allUsers = JSON.parse(localStorage.getItem('dc_all_users') || '[]');
  const names = [...new Set(allUsers.map(u => u.name).filter(Boolean))];
  if (!names.length) return;
  const currentPersons = item.persons || (item.person ? [item.person] : []);
  const popup = document.createElement('div');
  popup.className = 'inline-person-popup';
  popup.style.cssText = 'position:fixed;z-index:9500;background:var(--bg-card);border:1px solid var(--border);border-radius:12px;box-shadow:0 16px 48px rgba(0,0,0,.32);padding:8px;min-width:220px;max-height:320px;overflow-y:auto';
  const rect = event.currentTarget.getBoundingClientRect();
  popup.style.top = Math.min(rect.bottom + 4, window.innerHeight - 340) + 'px';
  popup.style.left = Math.min(rect.left, window.innerWidth - 240) + 'px';
  let selected = [...currentPersons];
  const render = () => {
    popup.innerHTML = `<div style="font-size:10px;color:var(--text-muted);padding:2px 6px 8px;font-weight:600;letter-spacing:.8px">RESPONSÁVEL(IS)</div>` +
      names.map(name => {
        const photo = getUserPhoto(name);
        const initials = name.split(' ').map(w=>w[0]).join('').substring(0,2).toUpperCase();
        const isSel = selected.includes(name);
        const avatar = photo
          ? `<img src="${photo}" style="width:26px;height:26px;border-radius:50%;object-fit:cover;flex-shrink:0">`
          : `<div style="width:26px;height:26px;border-radius:50%;background:var(--purple);color:#fff;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;flex-shrink:0">${initials}</div>`;
        return `<div onclick="_toggleInlinePerson('${name.replace(/'/g,"\\'")}',event)" style="display:flex;align-items:center;gap:8px;padding:6px 8px;border-radius:8px;cursor:pointer;background:${isSel?'rgba(124,92,252,.1)':'transparent'};margin-bottom:2px">
          ${avatar}
          <span style="font-size:13px;flex:1;color:var(--text-primary)">${name}</span>
          ${isSel ? '<span style="color:var(--purple);font-size:13px;font-weight:700">✓</span>' : ''}
        </div>`;
      }).join('') +
      `<div style="border-top:1px solid var(--border);margin-top:6px;padding-top:6px;display:flex;gap:6px;justify-content:flex-end">
        <button onclick="_saveInlinePersons('${boardKey}','${groupId}',${itemId},event)" style="background:var(--purple);color:#fff;border:none;border-radius:7px;padding:5px 14px;font-size:12px;cursor:pointer;font-family:var(--font)">Salvar</button>
      </div>`;
  };
  popup._selected = selected;
  popup._render = render;
  render();
  _activePersonPopup = popup;
  document.body.appendChild(popup);
  setTimeout(() => document.addEventListener('click', e => { if (!popup.contains(e.target)) { popup.remove(); _activePersonPopup = null; } }, {once:true}), 10);
}

let _activePersonPopup = null;

function _toggleInlinePerson(name, e) {
  e && e.stopPropagation();
  if (!_activePersonPopup) return;
  const sel = _activePersonPopup._selected;
  const idx = sel.indexOf(name);
  if (idx >= 0) sel.splice(idx, 1); else sel.push(name);
  _activePersonPopup._render();
}

function _saveInlinePersons(boardKey, groupId, itemId, e) {
  e && e.stopPropagation();
  const popup = _activePersonPopup;
  if (!popup) return;
  const res = findItem(boardKey, itemId);
  if (!res) return;
  const item = res.item;
  item.persons = [...popup._selected];
  item.person = popup._selected[0] || '';
  saveState();
  popup.remove();
  _activePersonPopup = null;
  renderCRM();
}

// ─── AUTOMAÇÕES ───────────────────────────────────────────────────────────────

// #3/#8 — inatividade e risco de cliente
function getDaysSinceLastUpdate(itemId) {
  const updates = (updatesData[itemId] || []).filter(u => u.type === 'update' && u.published !== false);
  if (!updates.length) return Infinity;
  const ts = updates.map(u => u.timestamp ? new Date(u.timestamp).getTime() : 0).filter(Boolean);
  if (!ts.length) return Infinity;
  return (Date.now() - Math.max(...ts)) / (1000 * 60 * 60 * 24);
}

const _negKeywords = ['problema','insatisfeito','cancelar','cancelamento','desistir','parar','reclamação','ruim','péssimo','decepcionado','chateado'];

function getRiskLevel(item) {
  if (!item || item.status === 'Feito' || item.status === 'Parado' || item.type !== 'cliente') return 0;
  const updates = (updatesData[item.id] || []).filter(u => u.type === 'update' && u.published !== false);
  if (!updates.length) return 0; // item novo, sem histórico — não é risco
  const recentText = updates.slice(-3).map(u => (u.text||'').toLowerCase()).join(' ');
  const hasNegative = _negKeywords.some(kw => recentText.includes(kw));
  const days = getDaysSinceLastUpdate(item.id);
  if (!isFinite(days)) return 0;
  if (hasNegative || days >= 21) return 2;
  if (days >= 10) return 1;
  return 0;
}

function renderRiskBadge(item) {
  const lvl = getRiskLevel(item);
  if (lvl === 0) return '';
  const days = getDaysSinceLastUpdate(item.id);
  const daysStr = isFinite(days) ? `${Math.floor(days)}d sem update` : 'sem updates';
  if (lvl === 2) return `<span title="⚠️ Cliente em risco — ${daysStr}" style="display:inline-flex;align-items:center;gap:2px;font-size:9.5px;background:rgba(239,68,68,.12);color:#ef4444;border:1px solid rgba(239,68,68,.25);border-radius:4px;padding:1px 5px;margin-left:3px;white-space:nowrap;cursor:default">🔴 ${daysStr}</span>`;
  return `<span title="Cliente inativo — ${daysStr}" style="display:inline-flex;align-items:center;gap:2px;font-size:9.5px;background:rgba(245,158,11,.1);color:#f59e0b;border:1px solid rgba(245,158,11,.25);border-radius:4px;padding:1px 5px;margin-left:3px;white-space:nowrap;cursor:default">⚠️ ${daysStr}</span>`;
}

// #1 — alerta de prazo automático
function checkDeadlineAlerts() {
  const now = new Date();
  const todayStr = now.toISOString().split('T')[0];
  const tomorrowStr = new Date(now.getTime() + 86400000).toISOString().split('T')[0];
  const alerted = JSON.parse(localStorage.getItem('dc_deadline_alerted') || '{}');
  const updated = { ...alerted };
  Object.entries(state).forEach(([boardKey, board]) => {
    (board.groups||[]).forEach(g => g.items.forEach(item => {
      if (!item.end || item.status === 'Feito') return;
      const alertKey = `${item.id}_${item.end}`;
      if (alerted[alertKey]) return;
      if (item.end === todayStr) {
        addNotification('⏰ Prazo HOJE!', `"${item.name}" vence hoje!`, 'schedule');
        updated[alertKey] = true;
      } else if (item.end === tomorrowStr) {
        addNotification('⏰ Prazo amanhã', `"${item.name}" vence amanhã`, 'schedule');
        updated[alertKey] = true;
      }
    }));
  });
  localStorage.setItem('dc_deadline_alerted', JSON.stringify(updated));
}

// #4 — tarefas recorrentes
function checkRecurringTasks() {
  const todayStr = new Date().toLocaleDateString('pt-BR');
  if (localStorage.getItem('dc_recurrence_last') === todayStr) return;
  localStorage.setItem('dc_recurrence_last', todayStr);
  const todayDay = new Date().getDay(); // 0=dom, 1=seg...
  const dayMap = { segunda:1, terça:2, terca:2, 'terça-feira':2, quarta:3, quinta:4, sexta:5, sábado:6, sabado:6, domingo:0 };
  let found = 0;
  Object.values(state).forEach(board => {
    (board.groups||[]).forEach(g => g.items.forEach(item => {
      const st = (item.status||'').toLowerCase();
      let matches = st.includes('todo dia') || st.includes('toda dia') || st.includes('fazer todo dia');
      if (!matches) {
        Object.entries(dayMap).forEach(([name, day]) => {
          if (st.includes(name) && todayDay === day) matches = true;
        });
      }
      if (matches) {
        addNotification('🔄 Tarefa recorrente', `"${item.name}" — ${item.status}`, 'activity');
        logActivity(item.id, `🔄 Tarefa recorrente do dia verificada — ${item.status}`);
        found++;
      }
    }));
  });
  if (found > 0) saveState();
}

// #6 — resumo semanal (toda segunda-feira)
function checkWeeklySummary() {
  if (new Date().getDay() !== 1) return; // só segunda
  const todayStr = new Date().toLocaleDateString('pt-BR');
  if (localStorage.getItem('dc_weekly_summary') === todayStr) return;
  localStorage.setItem('dc_weekly_summary', todayStr);
  let done = 0, pending = 0, overdue = 0;
  const now = new Date();
  Object.values(state).forEach(board => {
    (board.groups||[]).forEach(g => g.items.forEach(item => {
      if (item.status === 'Feito') done++;
      else if (item.end && new Date(item.end) < now) overdue++;
      else pending++;
    }));
  });
  addNotification(
    '📊 Resumo semanal',
    `✅ ${done} concluídos · ⏳ ${pending} em andamento · ⚠️ ${overdue} atrasados`,
    'activity'
  );
}

// #9 — sugestão do próximo passo
function getSuggestion(item, text) {
  const st = (item?.status||'').toLowerCase();
  const tx = (text||'').toLowerCase();
  if (tx.includes('reunião') || tx.includes('call') || tx.includes('meeting'))
    return '💡 Registre os pontos combinados na reunião como subelementos do checklist.';
  if (tx.includes('relatório') || tx.includes('report'))
    return '💡 Envie o relatório ao cliente e marque o envio aqui para o histórico.';
  if (tx.includes('problema') || tx.includes('erro') || tx.includes('bug'))
    return '💡 Documente a solução encontrada nos próximos passos do cliente.';
  if (tx.includes('aguard') || st.includes('aguard'))
    return '💡 Pendência externa. Defina um prazo de follow-up para cobrar o retorno.';
  if (st === 'pendente')
    return '💡 Item ainda pendente. Considere definir um prazo e iniciar em breve.';
  if (st === 'fazendo' || st === 'em andamento')
    return '💡 Em andamento! Atualize o cliente sobre o progresso até o fim da semana.';
  if (st === 'feito')
    return '💡 Concluído! Considere solicitar um depoimento ao cliente sobre o resultado.';
  return '💡 Atualize o status do item para refletir o progresso atual.';
}

function showSuggestionToast(msg) {
  const existing = document.getElementById('suggestion-toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.id = 'suggestion-toast';
  toast.style.cssText = 'position:fixed;bottom:80px;right:20px;background:var(--bg-card);border:1px solid var(--purple);border-left:4px solid var(--purple);border-radius:12px;padding:12px 16px;max-width:320px;font-size:12.5px;color:var(--text-primary);box-shadow:0 8px 28px rgba(0,0,0,.22);z-index:5000;animation:fadeIn .3s ease;line-height:1.5';
  toast.innerHTML = `<div style="display:flex;align-items:flex-start;gap:8px"><div style="flex:1">${msg}</div><button onclick="document.getElementById('suggestion-toast').remove()" style="background:none;border:none;cursor:pointer;color:var(--text-muted);font-size:14px;flex-shrink:0;padding:0;line-height:1">✕</button></div>`;
  document.body.appendChild(toast);
  setTimeout(() => { const t = document.getElementById('suggestion-toast'); if(t) t.remove(); }, 9000);
}

function updatePersonsDisplay() {
  const display = document.getElementById('f-persons-display');
  const placeholder = document.getElementById('f-persons-placeholder');
  if (!display) return;
  display.querySelectorAll('.person-chip').forEach(c => c.remove());
  if (!_selectedPersons.length) {
    if (placeholder) placeholder.style.display = '';
    return;
  }
  if (placeholder) placeholder.style.display = 'none';
  _selectedPersons.forEach(name => {
    const initials = name.split(' ').map(w=>w[0]).join('').substring(0,2).toUpperCase();
    const chip = document.createElement('div');
    chip.className = 'person-chip';
    chip.style.cssText = 'display:flex;align-items:center;gap:4px;background:rgba(124,92,252,.12);border:1px solid rgba(124,92,252,.25);border-radius:20px;padding:2px 8px 2px 4px;font-size:11px;color:var(--purple)';
    chip.innerHTML = `<div style="width:18px;height:18px;border-radius:50%;background:var(--purple);color:#fff;display:flex;align-items:center;justify-content:center;font-size:8px;font-weight:700">${initials}</div>${name}`;
    display.appendChild(chip);
  });
}

// ─── BROWSER PUSH NOTIFICATIONS ───────────────────────────────────────────────
function sendBrowserNotification(title, body) {
  if (!('Notification' in window)) return;
  const send = () => new Notification(title, { body, icon: '' });
  if (Notification.permission === 'granted') { send(); }
  else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then(p => { if (p === 'granted') send(); });
  }
}

// Close notif panel on outside click
document.addEventListener('click', e => {
  const panel = document.getElementById('notif-panel');
  const btn = document.getElementById('notif-btn');
  if (panel && btn && !panel.contains(e.target) && !btn.contains(e.target)) panel.style.display = 'none';
});


document.addEventListener('keydown', e => {
  if (e.ctrlKey && e.key === 'Enter' && document.activeElement.id === 'compose-input') postUpdate();
});

// ─── PAGE / BOARD NAVIGATION ──────────────────────────────────────────────────
function showPage(page) {
  // Parar listener de briefings ao sair da página de formulários
  if (!page.startsWith('briefings-') && page !== 'form-editor') _stopBriefingsListener();
  // Auto-save doc before leaving editor
  if (currentPage === 'doc-editor' && page !== 'doc-editor' && _currentDoc && !_docSavedState) _docSaveNow();
  currentPage = page;
  const titles = {
    crm: '<span>CRM</span> — Tarefas',
    clients: '<span>Clientes</span>',
    financeiro: '<span>Financeiro</span>',
    prospeccao: '<span>Prospecção</span> — Leads',
    'briefings-trafego':  '<span>Formulários</span> — Tráfego Pago',
    'briefings-gmb':      '<span>Formulários</span> — Google Meu Negócio',
    'briefings-contrato': '<span>Formulários</span> — Contrato',
    'briefings-satisfacao':'<span>Formulários</span> — Satisfação',
    'briefings-sites':    '<span>Formulários</span> — Sites / Landing Pages',
    'form-editor':        '<span>Editor</span> — Formulários',
    'docs':               '<span>Documentos</span>',
    'doc-editor':         '<span>Documentos</span> — Editor',
    'files':              '<span>Arquivos</span>',
    'custom-forms':       '<span>Formulários</span> — Meus Formulários',
    'custom-form-editor': '<span>Formulários</span> — Editor',
    'dashboard':          '<span>Dashboard</span> — Visão Geral',
    'jornada':            '<span>Jornada</span> — Pipeline de Clientes',
    'lembretes':          '<span>Lembretes</span> — Agenda',
    'calendario':         '<span>Calendário</span> — Semanal',
    'ia':                 '<span>IA</span> — Assistente da Agência',
    'contratos-ia':       '<span>Agente</span> — Contratos com IA',
    'settings':           '<span>Configurações</span> — Visibilidade por Role',
  };
  document.getElementById('page-title').innerHTML = titles[page] || page;
  const hiddenNew = ['financeiro','prospeccao','clients','briefings-trafego','briefings-gmb','briefings-contrato','briefings-satisfacao','briefings-sites','form-editor','docs','doc-editor','files','custom-forms','custom-form-editor','dashboard','jornada','lembretes','ia','contratos-ia','settings','calendario'];
  document.getElementById('top-new-btn').style.display = hiddenNew.includes(page) ? 'none' : '';
  document.getElementById('top-new-btn').onclick = openNewModal;
  if (page === 'crm') { renderTeamNav(); renderCRM(); }
  else if (page === 'financeiro') renderFinanceiro();
  else if (page === 'clients') { if (!['ativos','arquivados'].includes(clientsTab)) clientsTab='ativos'; renderClients(); }
  else if (page === 'prospeccao') renderProspeccao();
  else if (page === 'briefings-trafego')  renderBriefingsPage('trafego');
  else if (page === 'briefings-gmb')      renderBriefingsPage('gmb');
  else if (page === 'briefings-contrato') renderBriefingsPage('contrato');
  else if (page === 'briefings-satisfacao') renderBriefingsPage('satisfacao');
  else if (page === 'briefings-sites')      renderBriefingsPage('sites');
  else if (page === 'form-editor')          renderFormEditor(_feType || _currentFormType);
  else if (page === 'docs')                 renderDocsPage();
  else if (page === 'files')                renderFilesPage();
  else if (page === 'custom-forms')         renderCustomFormsPage();
  else if (page === 'custom-form-editor')   renderCustomFormEditor();
  else if (page === 'dashboard')            renderDashboard();
  else if (page === 'jornada')             renderJornada();
  else if (page === 'lembretes')           renderLembretes();
  else if (page === 'calendario')          renderCalendarioPage();
  else if (page === 'ia')                  renderIAPage();
  else if (page === 'contratos-ia')        renderContratoIAPage();
  else if (page === 'settings')            renderSettingsPage();
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  // Nav map: now first section has 4 items (Dashboard, CRM, Jornada, Lembretes)
  // and second section has Gestão items
  const navMap = { dashboard: 0, crm: 1, jornada: 2, lembretes: 3 };
  const navItems = document.querySelectorAll('.sidebar-section:first-of-type .nav-item');
  if (navMap[page] !== undefined && navItems[navMap[page]]) navItems[navMap[page]].classList.add('active');
  // Second section: Gestão
  const navMap2 = { clients: 0, financeiro: 1, prospeccao: 2, docs: 3, 'doc-editor': 3, files: 4 };
  const navItems2 = document.querySelectorAll('.sidebar-section:nth-of-type(2) .nav-item');
  if (navMap2[page] !== undefined && navItems2[navMap2[page]]) navItems2[navMap2[page]].classList.add('active');
  // Marcar item ativo nos formulários (terceira seção)
  if (page.startsWith('briefings-') || page === 'custom-forms' || page === 'custom-form-editor') {
    const formNavMap = { 'custom-forms': 0, 'custom-form-editor': 0, 'briefings-trafego': 1, 'briefings-gmb': 2, 'briefings-contrato': 3, 'briefings-satisfacao': 4, 'briefings-sites': 5 };
    const formNavItems = document.querySelectorAll('.sidebar-section:nth-of-type(3) .nav-item');
    if (formNavItems[formNavMap[page]]) formNavItems[formNavMap[page]].classList.add('active');
  }
  const mobMap = { crm: 'mob-crm', clients: 'mob-clients', financeiro: 'mob-financeiro', prospeccao: 'mob-prospeccao' };
  document.querySelectorAll('.mob-nav-item').forEach(el => el.classList.remove('active'));
  const mobEl = document.getElementById(mobMap[page]);
  if (mobEl) mobEl.classList.add('active');
}

function switchBoard(b) {
  currentBoard = b;
  selectedItems.clear();
  selectedSubitems.clear();
  lastClickedItemIdx = null;
  lastClickedSubIdx = null;
  if (currentPage !== 'crm') showPage('crm');
  else { renderTeamNav(); renderCRM(); }
}

function onSearch(v) {
  searchTerm = v;
  if (currentPage === 'crm') renderCRM();
  else if (currentPage === 'clients') renderClients();
}

// ─── CRM RENDER ───────────────────────────────────────────────────────────────
function renderCRM() {
  const board = state[currentBoard];
  if (!board) {
    // Board not found, switch to first available
    currentBoard = teamMembers[0]?.key || 'amanda';
    renderTeamNav();
    return renderCRM();
  }
  let totalItems = 0, doneItems = 0, inProgress = 0, pendentes = 0;
  board.groups.forEach(g => g.items.forEach(item => {
    totalItems++;
    const sl = (item.status||'').toLowerCase();
    if (sl.includes('feito')) doneItems++;
    else if (sl.includes('andamento') || sl.includes('fazendo')) inProgress++;
    else pendentes++;
  }));

  const totalSel = selectedItems.size + selectedSubitems.size;

  // Only show all-team tabs + global stats to admin/gerente
  const isAdminOrGerente = window.currentRole === 'admin' || window.currentRole === 'gerente';
  const visibleTabs = isAdminOrGerente ? teamMembers : teamMembers.filter(m => m.key === currentBoard);

  let html = `
  <div class="board-tabs">
    ${isAdminOrGerente ? teamMembers.map(m => `<div class="board-tab ${m.key===currentBoard?'active':''}" onclick="switchBoard('${m.key}')">${m.icon} ${m.label}</div>`).join('') : `<div class="board-tab active">${teamMembers.find(m=>m.key===currentBoard)?.icon||''} ${board.label}</div>`}
  </div>
  ${isAdminOrGerente ? `<div class="stats-row">
    <div class="stat-card"><div class="stat-label">Total</div><div class="stat-val purple">${totalItems}</div></div>
    <div class="stat-card"><div class="stat-label">Feitos</div><div class="stat-val green">${doneItems}</div></div>
    <div class="stat-card"><div class="stat-label">Em progresso</div><div class="stat-val blue">${inProgress}</div></div>
    <div class="stat-card"><div class="stat-label">Pendentes</div><div class="stat-val yellow">${pendentes}</div></div>
  </div>` : ''}

  <div class="bulk-bar ${totalSel>0?'visible':''}" id="bulk-action-bar">
    <span class="bulk-count" id="bulk-count-label">${totalSel} item${totalSel!==1?'s':''} selecionado${totalSel!==1?'s':''}</span>
    <div class="sep"></div>
    <select onchange="if(this.value){bulkMarkStatus(this.value);this.value=''}" style="font-size:11px;padding:3px 8px;border-radius:6px;border:1px solid var(--border);background:var(--bg-base);color:var(--text-primary);cursor:pointer;height:28px" title="Mudar status em massa">
      <option value="">🏷 Status...</option>
      <option value="Feito">✅ Feito</option>
      <option value="Em andamento">🔵 Em andamento</option>
      <option value="Fazendo">🟣 Fazendo</option>
      <option value="Pendente">⏳ Pendente</option>
      <option value="Aguardar docs">📎 Aguardar docs</option>
      <option value="Aguardando verificação">🔍 Aguardando verificação</option>
      <option value="Parado">⛔ Parado</option>
    </select>
    <button class="btn btn-ghost" style="padding:4px 12px;font-size:11px" onclick="bulkSetDate('start')">📅 Data início</button>
    <button class="btn btn-ghost" style="padding:4px 12px;font-size:11px" onclick="bulkSetDate('end')">📅 Data fim</button>
    <button class="btn btn-danger" style="padding:4px 12px;font-size:11px" onclick="bulkDeleteSelected()">🗑 Excluir</button>
    <button class="btn btn-ghost" style="padding:4px 10px;font-size:11px;margin-left:auto" onclick="clearSelection()">✕ Limpar</button>
  </div>

  <div class="toolbar">
    <input type="text" placeholder="🔍 Buscar..." oninput="searchTerm=this.value;renderCRM()" value="${searchTerm}">
    <select onchange="filterStatus=this.value;renderCRM()">
      <option value="">Todos os status</option>
      <option value="Feito">Feito</option>
      <option value="Em andamento">Em andamento</option>
      <option value="Pendente">Pendente</option>
      <option value="Fazendo">Fazendo</option>
      <option value="Aguardar docs">Aguardar docs</option>
      <option value="Parado">Parado</option>
    </select>
    <select onchange="filterType=this.value;renderCRM()">
      <option value="">Todos os tipos</option>
      <option value="cliente">👤 Clientes</option>
      <option value="tarefa">📌 Tarefas</option>
    </select>
    <button class="btn btn-primary" onclick="openModal('${currentBoard}',null,null)">+ Novo item</button>
  </div>`;

  board.groups.forEach(g => {
    const gKey = currentBoard + '_' + g.id;
    const collapsed = collapsedGroups[gKey];
    const filtered = g.items.filter(item => {
      if (item._archived) return false; // hide archived client items
      const ms = !searchTerm || item.name.toLowerCase().includes(searchTerm.toLowerCase()) || (item.person||'').toLowerCase().includes(searchTerm.toLowerCase());
      const mf = !filterStatus || item.status === filterStatus;
      const mt = !filterType || (item.type || 'tarefa') === filterType;
      return ms && mf && mt;
    });
    if (filtered.length === 0 && (searchTerm || filterStatus || filterType)) return;

    const allGroupSelected = filtered.length > 0 && filtered.every(it => selectedItems.has(itemSelKey(g.id, it.id)));
    const someGroupSelected = filtered.some(it => selectedItems.has(itemSelKey(g.id, it.id)));

    html += `<div class="group-block">
      <div class="group-header" style="background:${g.color}18;color:${g.color}" onclick="toggleGroup('${gKey}')">
        <span class="group-arrow ${collapsed?'collapsed':''}">▼</span>
        <span id="glabel-${g.id}">${g.label}</span>
        <span class="group-count">${filtered.length} item${filtered.length!==1?'s':''}</span>
        <button class="icon-btn" style="margin-left:4px;font-size:10px;padding:2px 6px;opacity:.6" onclick="renameGroup('${currentBoard}','${g.id}',event)" title="Renomear grupo">✏️</button>
        <button class="icon-btn" style="margin-left:2px;font-size:10px;padding:2px 6px;opacity:.5" onclick="deleteGroup('${g.id}',event)" title="Remover grupo">🗑</button>
      </div>`;

    if (!collapsed) {
      html += `<div class="table-wrap"><table>
        <thead><tr>
          <th style="width:36px;text-align:center">
            <input type="checkbox" class="sel-check" id="hdr-check-${g.id}"
              ${allGroupSelected?'checked':''} title="Selecionar todos"
              data-gid="${g.id}"
              onclick="toggleGroupSelectAll(this.dataset.gid,this)">
          </th>
          <th style="min-width:220px">Nome / Cliente</th>
          <th style="min-width:140px">Status</th>
          <th>Tipo</th>
          <th>Responsável</th>
          <th>Recorrência</th>
          <th>Verba</th>
          <th>Início</th>
          <th>Fim</th>
          <th>Temp.</th>
          <th>Links</th>
          <th></th>
        </tr></thead><tbody>`;

      filtered.forEach((item, itemIndex) => {
        const rowKey = gKey + '_' + item.id;
        const subKey = rowKey + '_sub';
        const hasNotes = item.notes || item.melhorias || item.proximos;
        const hasSubs = item.subitems && item.subitems.length > 0;
        const expandedSub = expandedSubitems[subKey];
        const updateCount = (updatesData[item.id] || []).filter(u => u.type === 'update').length;
        const subDone = hasSubs ? item.subitems.filter(s => s.status === 'Feito').length : 0;
        const itemType = item.type || 'tarefa';
        const isSelected = selectedItems.has(itemSelKey(g.id, item.id));

        html += `<tr class="${isSelected?'row-selected':''}">
          <td style="text-align:center">
            <input type="checkbox" class="sel-check" ${isSelected?'checked':''}
              onclick="toggleItemSelect('${g.id}',${item.id},event,${JSON.stringify(filtered.map(i=>({id:i.id})))},${itemIndex})"
              title="Selecionar item">
          </td>
          <td style="font-weight:500;max-width:240px">
            <div style="display:flex;align-items:center;gap:8px">
              <input type="checkbox" class="task-check" ${item.status==='Feito'?'checked':''} onchange="quickCheckItem('${currentBoard}','${g.id}',${item.id},this.checked)" title="Marcar como feito" onclick="event.stopPropagation()">
              ${hasSubs ? `<button class="icon-btn" style="font-size:10px;padding:2px 5px;flex-shrink:0" onclick="toggleSubitems('${subKey}',event)">${expandedSub?'▲':'▼'}<span style="font-size:9px;margin-left:2px">${subDone}/${item.subitems.length}</span></button>` : ''}
              <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${item.name}">${item.name}</span>
            </div>
          </td>
          <td>${renderStatusBadge(currentBoard,g.id,item.id,item.status)}</td>
          <td><span class="type-tag type-${itemType}">${itemType==='cliente'?'👤 Cliente':'📌 Tarefa'}</span></td>
          <td style="max-width:160px;cursor:pointer" onclick="openInlinePersonPicker('${currentBoard}','${g.id}',${item.id},event)" title="Atribuir responsável">${renderPersonAvatars(item)}${renderRiskBadge(item)}${renderItemLabels(item)}</td>
          <td style="color:var(--text-secondary);font-size:11.5px">${item.recorrencia||'—'}</td>
          <td style="color:var(--text-secondary);font-size:11.5px">${item.verba||'—'}</td>
          <td style="color:var(--text-muted);font-size:11px;font-family:var(--mono)">${fmtDate(item.start)}</td>
          <td style="color:var(--text-muted);font-size:11px;font-family:var(--mono)">${fmtDate(item.end)}</td>
          <td>${item.temp?`<span style="font-size:11px">${tempEmoji(item.temp)} ${item.temp}</span>`:'—'}</td>
          <td>
            <div class="link-cell">
              ${(item.links||[]).map((lk, idx) => `<a href="${lk.url}" target="_blank" rel="noopener" class="link-chip" title="${lk.url}" ondblclick="openLinkModal('${currentBoard}','${g.id}',${item.id},${idx},event);event.preventDefault()">🔗 ${lk.label}</a>`).join('')}
              ${(item.driveFolders||[]).map(f => `<a href="${f.url}" target="_blank" rel="noopener" class="link-chip" title="${f.url}" style="background:rgba(251,188,4,.12);border-color:rgba(251,188,4,.3)">📁 ${f.name}</a>`).join('')}
              <button class="link-add-btn" onclick="openLinkModal('${currentBoard}','${g.id}',${item.id},undefined,event)" title="Adicionar link">+</button>
            </div>
          </td>
          <td style="white-space:nowrap">
            <button class="icon-btn" onclick="openLabelPicker('${currentBoard}','${g.id}',${item.id},event)" title="Etiquetas" style="margin-right:4px">🏷️</button>
            <button class="icon-btn" onclick="openTemplatesModal('${currentBoard}','${g.id}',${item.id},event)" title="Aplicar template de subelementos" style="margin-right:4px">📋</button>
            <button class="icon-btn" onclick="openUpdates('${currentBoard}','${g.id}',${item.id})" title="Atualizações / Checklist" style="position:relative">
              💬${updateCount > 0 ? `<span style="position:absolute;top:-4px;right:-4px;background:var(--accent);color:#fff;border-radius:99px;font-size:9px;padding:1px 4px;font-weight:700">${updateCount}</span>` : ''}
            </button>
            <button class="icon-btn" onclick="openModal('${currentBoard}','${g.id}',${item.id})" title="Editar" style="margin-left:4px">✏️</button>
            <button class="icon-btn" onclick="deleteItem('${currentBoard}','${g.id}',${item.id},event)" title="Excluir" style="margin-left:2px;color:var(--red)">🗑</button>
          </td>
        </tr>`;

        // EXPANDED NOTES ROW
        if (expandedRows[rowKey] && hasNotes) {
          html += `<tr style="background:var(--bg-card2)!important">
            <td colspan="13" style="padding:12px 16px 12px 52px">
              <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px">
                ${item.notes?`<div class="notes-panel"><div class="notes-label">📝 Anotações</div><div class="note-text">${item.notes}</div></div>`:''}
                ${item.melhorias?`<div class="notes-panel"><div class="notes-label">🔧 Melhorias</div><div class="note-text">${item.melhorias}</div></div>`:''}
                ${item.proximos?`<div class="notes-panel"><div class="notes-label">➡️ Próximos passos</div><div class="note-text">${item.proximos}</div></div>`:''}
              </div>
            </td>
          </tr>`;
        }

        // SUBITEMS ROWS
        if (expandedSub && hasSubs) {
          item.subitems.forEach((sub, subIndex) => {
            const isSubSel = selectedSubitems.has(subSelKey(g.id, item.id, sub.id));
            html += `<tr class="subitem-row${isSubSel?' row-selected':''}">
              <td style="text-align:center;padding-left:20px">
                <input type="checkbox" class="sel-check" ${isSubSel?'checked':''}
                  onclick="toggleSubSelect('${g.id}',${item.id},${sub.id},event,${JSON.stringify(item.subitems.map(s=>({id:s.id})))},${subIndex})"
                  title="Selecionar subelemento">
              </td>
              <td style="font-weight:400;color:var(--text-secondary);font-size:12px;padding-left:44px">
                <div style="display:flex;align-items:center;gap:8px">
                  <input type="checkbox" class="task-check" ${sub.status==='Feito'?'checked':''} onchange="toggleSubCheck('${currentBoard}','${g.id}',${item.id},${sub.id})" title="Marcar concluído" onclick="event.stopPropagation()">
                  <span ${sub.status==='Feito'?'style="text-decoration:line-through;opacity:.5"':''}>${sub.name}</span>
                  ${sub.notes?`<span style="font-size:10px;color:var(--text-muted);margin-left:8px" title="${sub.notes}">📝</span>`:''}
                </div>
              </td>
              <td>${renderStatusBadge(currentBoard,g.id,item.id,sub.status,sub.id)}</td>
              <td><span class="type-tag" style="background:rgba(124,92,252,.1);color:var(--accent);border:1px solid rgba(124,92,252,.2)">↳ Sub</span></td>
              <td style="font-size:11px;color:var(--text-muted)">${sub.person||'—'}</td>
              <td colspan="5"></td>
              <td style="white-space:nowrap">
                <button class="icon-btn" style="font-size:10px;padding:2px 6px" onclick="openEditSubitem('${currentBoard}','${g.id}',${item.id},${sub.id},event)">✏️</button>
                <button class="icon-btn" style="font-size:10px;padding:2px 6px;color:var(--red)" onclick="deleteSubitem('${currentBoard}','${g.id}',${item.id},${sub.id},event)">🗑</button>
              </td>
            </tr>`;
          });
          html += `<tr class="subitem-row">
            <td colspan="13">
              <div class="add-subitem-row" onclick="openAddSubitem('${currentBoard}','${g.id}',${item.id})">＋ Adicionar subelemento em ${item.name}</div>
            </td>
          </tr>`;
        }
      });

      html += `</tbody></table>
        <div class="add-row" onclick="openModal('${currentBoard}','${g.id}',null)">＋ Adicionar item em ${g.label}</div>
      </div>`;
    }
    html += `</div>`;
  });

  html += `<button class="add-group-btn" onclick="openGroupModal()">＋ Adicionar novo grupo</button>`;
  document.getElementById('main-content').innerHTML = html;

  // Restore indeterminate state for group header checkboxes
  board.groups.forEach(g => {
    const filtered = g.items.filter(item => {
      const ms = !searchTerm || item.name.toLowerCase().includes(searchTerm.toLowerCase()) || (item.person||'').toLowerCase().includes(searchTerm.toLowerCase());
      const mf = !filterStatus || item.status === filterStatus;
      const mt = !filterType || (item.type || 'tarefa') === filterType;
      return ms && mf && mt;
    });
    const cb = document.getElementById(`hdr-check-${g.id}`);
    if (!cb || !filtered.length) return;
    const allSel = filtered.every(it => selectedItems.has(itemSelKey(g.id, it.id)));
    const someSel = filtered.some(it => selectedItems.has(itemSelKey(g.id, it.id)));
    cb.indeterminate = someSel && !allSel;
  });

  renderTeamNav();
}

function quickCheckItem(boardKey, groupId, itemId, checked) {
  const g = state[boardKey].groups.find(x => x.id === groupId);
  if (!g) return;
  const item = g.items.find(i => i.id === itemId);
  if (!item) return;
  item.status = checked ? 'Feito' : 'Pendente';
  saveState();
  logActivity(itemId, checked ? 'marcou como Feito' : 'desmarcou como Pendente');
  renderCRM();
}

function toggleRow(key, e) { e.stopPropagation(); expandedRows[key] = !expandedRows[key]; renderCRM(); }
function toggleGroup(key) { collapsedGroups[key] = !collapsedGroups[key]; renderCRM(); }

function deleteItem(boardKey, groupId, itemId, e) {
  e && e.stopPropagation();
  if (!confirm('Remover este item?')) return;
  const g = state[boardKey].groups.find(x => x.id === groupId);
  if (!g) return;
  g.items = g.items.filter(i => i.id !== itemId);
  saveState(); renderCRM();
}

// ─── CLIENTS — NEW SYSTEM ─────────────────────────────────────────────────────

function renderClients() {
  const canSensitive = window.currentRole === 'admin' || window.currentRole === 'gerente';
  const showArchived = clientsTab === 'arquivados';
  const active = clientsData.filter(c => !c.archived);
  const archived = clientsData.filter(c => c.archived);
  const list = showArchived ? archived : active;
  const filtered = searchTerm ? list.filter(c =>
    (c.nome||'').toLowerCase().includes(searchTerm.toLowerCase()) ||
    (c.empresa||'').toLowerCase().includes(searchTerm.toLowerCase()) ||
    (c.email||'').toLowerCase().includes(searchTerm.toLowerCase())
  ) : list;

  let html = `
  <div class="clients-section-tabs">
    <div class="clients-section-tab ${clientsTab==='ativos'?'active':''}" onclick="clientsTab='ativos';renderClients()">👤 Ativos (${active.length})</div>
    <div class="clients-section-tab ${clientsTab==='arquivados'?'active':''}" onclick="clientsTab='arquivados';renderClients()">📦 Arquivados (${archived.length})</div>
  </div>
  <div class="clients-toolbar">
    <input type="text" placeholder="🔍 Buscar cliente..." oninput="searchTerm=this.value;renderClients()" value="${searchTerm}" style="background:var(--bg-card);border:1px solid var(--border);border-radius:8px;color:var(--text-primary);font-family:var(--font);font-size:12px;padding:7px 12px;outline:none;min-width:200px">
    <div class="view-toggle">
      <button class="view-toggle-btn ${clientsView==='cards'?'active':''}" onclick="clientsView='cards';renderClients()">⊞ Cards</button>
      <button class="view-toggle-btn ${clientsView==='table'?'active':''}" onclick="clientsView='table';renderClients()">☰ Tabela</button>
    </div>
    <span style="color:var(--text-muted);font-size:12px;margin-left:4px">${filtered.length} cliente${filtered.length!==1?'s':''}</span>
    <button class="btn btn-primary" style="margin-left:auto" onclick="openClientReg()">+ Novo cliente</button>
  </div>`;

  if (!filtered.length) {
    html += `<div style="text-align:center;padding:60px 20px;color:var(--text-muted)"><div style="font-size:40px;margin-bottom:12px">👤</div><div style="font-size:14px;margin-bottom:8px">Nenhum cliente cadastrado</div><button class="btn btn-primary" onclick="openClientReg()">+ Cadastrar primeiro cliente</button></div>`;
    document.getElementById('main-content').innerHTML = html;
    return;
  }

  if (clientsView === 'cards') {
    html += `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:14px">`;
    filtered.forEach(c => { html += renderClientCard(c, canSensitive); });
    html += '</div>';
  } else {
    html += `<div style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-lg);overflow:auto">
    <table class="clients-table">
      <thead><tr>
        <th>Nome</th><th>Empresa</th><th>Status</th><th>Temp</th><th>Valor</th><th>Equipes</th><th>Contato</th><th></th>
      </tr></thead><tbody>`;
    filtered.forEach(c => {
      const teams = (c.teams||[]).map(t=>`<span class="client-team-chip">${t.memberLabel}</span>`).join('');
      html += `<tr onclick="openClientDetail('${c.id}')" style="cursor:pointer">
        <td><div style="font-weight:600">${c.nome||'—'}</div><div style="font-size:10.5px;color:var(--text-muted)">${c.cargo||''}</div></td>
        <td>${c.empresa||'—'}</td>
        <td><span class="badge ${clientStatusClass(c.statusCli)}">${c.statusCli||'—'}</span></td>
        <td>${c.temp?tempEmoji(c.temp)+' '+c.temp:'—'}</td>
        <td style="color:var(--green);font-family:var(--mono)">${c.valor||'—'}</td>
        <td>${teams||'—'}</td>
        <td style="font-size:11px;color:var(--text-muted)">${c.tel||c.email||'—'}</td>
        <td onclick="event.stopPropagation()" style="white-space:nowrap">
          <button class="icon-btn" onclick="openClientDetail('${c.id}')">👁</button>
          <button class="icon-btn" onclick="openClientReg('${c.id}')">✏️</button>
          <button class="icon-btn" onclick="toggleArchiveClient('${c.id}')">${c.archived?'♻️':'📦'}</button>
          ${canSensitive?`<button class="icon-btn" style="color:var(--red)" onclick="deleteClientFull('${c.id}')">🗑</button>`:''}
        </td>
      </tr>`;
    });
    html += '</tbody></table></div>';
  }

  document.getElementById('main-content').innerHTML = html;
}

function renderClientCard(c, canSensitive) {
  const teams = (c.teams||[]).map(t=>`<span class="client-team-chip">${t.memberLabel}</span>`).join('');
  // Classificação e jornada (injetados diretamente)
  const _getEtapaInfo = (id) => ({ onboarding:{icon:'🎯',label:'Onboarding',color:'#7c5cfc'}, estruturacao:{icon:'🏗️',label:'Estruturação',color:'#06b6d4'}, execucao:{icon:'⚙️',label:'Execução',color:'#f59e0b'}, otimizacao:{icon:'📈',label:'Otimização',color:'#10b981'}, expansao:{icon:'🚀',label:'Expansão',color:'#a855f7'} }[id] || {icon:'🎯',label:'Onboarding',color:'#7c5cfc'});
  const _getClassifInfo = (id) => ({ basico:{label:'🔹 Básico',color:'#6b7280',bg:'rgba(107,114,128,.12)'}, intermediario:{label:'🔸 Intermediário',color:'#f59e0b',bg:'rgba(245,158,11,.12)'}, estrategico:{label:'🔶 Estratégico',color:'#f97316',bg:'rgba(249,115,22,.12)'}, premium:{label:'🔴 Premium',color:'#ef4444',bg:'rgba(239,68,68,.12)'} }[id] || null);
  const etapaCard = c.etapaJornada ? _getEtapaInfo(c.etapaJornada) : null;
  const nivelCard = c.classificacao ? _getClassifInfo(c.classificacao) : null;
  return `<div class="client-card-new ${c.archived?'archived':''}" onclick="openClientDetail('${c.id}')">
    <div class="client-card-status" style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
      <span class="badge ${clientStatusClass(c.statusCli)}" style="font-size:9.5px">${c.statusCli||'Lead'}</span>
      ${nivelCard?`<span style="font-size:9px;font-weight:700;padding:2px 6px;border-radius:5px;background:${nivelCard.bg};color:${nivelCard.color}">${nivelCard.label}</span>`:''}
      ${etapaCard?`<span style="font-size:9px;font-weight:600;color:${etapaCard.color};margin-left:auto">${etapaCard.icon} ${etapaCard.label}</span>`:''}
    </div>
    <div class="client-card-name">${c.nome||'Sem nome'}</div>
    <div class="client-card-company">${c.empresa||''} ${c.fantasia?'· '+c.fantasia:''}</div>
    ${c.tel?`<div class="client-card-row">📞 ${c.tel}</div>`:''}
    ${c.email?`<div class="client-card-row">✉️ ${c.email}</div>`:''}
    ${c.valor?`<div class="client-card-row" style="color:var(--green);font-family:var(--mono)">💰 ${c.valor}</div>`:''}
    ${c.temp?`<div class="client-card-row">${tempEmoji(c.temp)} ${c.temp}</div>`:''}
    ${teams?`<div class="client-card-teams">${teams}</div>`:''}
    <div class="client-card-actions" onclick="event.stopPropagation()">
      <button class="btn btn-ghost" style="font-size:11px;padding:4px 10px" onclick="openClientDetail('${c.id}')">👁 Ver ficha</button>
      <button class="btn btn-ghost" style="font-size:11px;padding:4px 10px" onclick="openClientReg('${c.id}')">✏️ Editar</button>
      <button class="btn btn-ghost" style="font-size:11px;padding:4px 10px" onclick="toggleArchiveClient('${c.id}')">${c.archived?'♻️ Restaurar':'📦 Arquivar'}</button>
      ${canSensitive?`<button class="icon-btn" style="color:var(--red);margin-left:auto" onclick="deleteClientFull('${c.id}')">🗑</button>`:''}
    </div>
  </div>`;
}

function clientStatusClass(s) {
  if (!s) return 's-default';
  const m = { 'Lead':'s-aguardar','Em negociação':'s-andamento','Ativo':'s-feito','Pausado':'s-pendente','Encerrado':'s-parado' };
  return m[s] || 's-default';
}

// ─── CLIENT REGISTRATION MODAL ────────────────────────────────────────────────
let _socialCount = 0;
const CLIENT_STEPS = 8;

function openClientReg(clientId) {
  editingClientId = clientId || null;
  clientModalStep = 1;
  _socialCount = 0;

  // Pre-fill if editing
  if (editingClientId) {
    const c = clientsData.find(x => x.id === editingClientId);
    if (c) prefillClientForm(c);
    document.getElementById('client-reg-title').textContent = 'Editar Cliente';
  } else {
    document.getElementById('client-reg-title').textContent = 'Novo Cliente';
    clearClientForm();
  }

  // Build services checkboxes
  const svcContainer = document.getElementById('svc-check-container');
  if (svcContainer && !svcContainer.querySelector('.svc-check')) {
    ['Social Media','Tráfego Pago','Design','Branding','Desenvolvimento de site','Consultoria','Automação'].forEach(s => {
      const lbl = document.createElement('label');
      lbl.style.cssText = 'display:flex;align-items:center;gap:6px;font-size:12px;cursor:pointer';
      lbl.innerHTML = `<input type="checkbox" class="svc-check" value="${s}" style="accent-color:var(--accent)"> ${s}`;
      svcContainer.appendChild(lbl);
    });
    const outro = document.createElement('div');
    outro.style.cssText = 'grid-column:1/-1;display:flex;gap:6px;align-items:center';
    outro.innerHTML = `<label style="font-size:12px;white-space:nowrap">Outro:</label><input id="c-svc-outro" type="text" style="flex:1;background:var(--bg-base);border:1px solid var(--border);border-radius:6px;padding:5px 8px;color:var(--text-primary);font-family:var(--font);font-size:12px;outline:none">`;
    svcContainer.appendChild(outro);
  }

  // Build onboarding checklist
  const onbContainer = document.getElementById('onb-check-container');
  if (onbContainer && !onbContainer.querySelector('.onb-check')) {
    ['Dados completos','Acessos recebidos','Pagamento confirmado','Planejamento iniciado','Reunião de alinhamento','Pasta no Drive criada','Boas-vindas enviadas'].forEach(item => {
      const lbl = document.createElement('label');
      lbl.style.cssText = 'display:flex;align-items:center;gap:8px;font-size:12.5px;cursor:pointer;padding:4px';
      lbl.innerHTML = `<input type="checkbox" class="onb-check" value="${item}" style="accent-color:var(--accent)"> ${item}`;
      onbContainer.appendChild(lbl);
    });
  }

  // Build team assign grid
  buildTeamAssignGrid(editingClientId ? clientsData.find(x=>x.id===editingClientId) : null);

  // Add default social rows if none
  const container = document.getElementById('social-rows-container');
  if (!container.children.length) addSocialRow();

  updateClientStepUI();
  document.getElementById('modal-client-reg').classList.add('open');
}

function closeClientReg() {
  document.getElementById('modal-client-reg').classList.remove('open');
  editingClientId = null;
}

function clearClientForm() {
  document.querySelectorAll('#modal-client-reg input, #modal-client-reg textarea, #modal-client-reg select').forEach(el => {
    if (el.type === 'checkbox') el.checked = false;
    else el.value = '';
  });
  document.getElementById('social-rows-container').innerHTML = '';
  _socialCount = 0;
  addSocialRow();
}

function prefillClientForm(c) {
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.value = val||''; };
  set('c-nome',c.nome); set('c-cpf',c.cpf); set('c-nasc',c.nasc); set('c-cargo',c.cargo);
  set('c-email',c.email); set('c-tel',c.tel); set('c-tel2',c.tel2); set('c-horario',c.horario);
  set('c-pref-com',c.prefCom); set('c-temp',c.temp); set('c-status-cli',c.statusCli);
  set('c-origem',c.origem); set('c-obs-rel',c.obsRel);
  set('c-empresa',c.empresa); set('c-fantasia',c.fantasia); set('c-cnpj',c.cnpj);
  set('c-ie',c.ie); set('c-dt-abertura',c.dtAbertura); set('c-site',c.site);
  set('c-email-emp',c.emailEmp); set('c-tel-emp',c.telEmp); set('c-end',c.end);
  set('c-cidade',c.cidade); set('c-estado',c.estado); set('c-cep',c.cep);
  set('c-segmento',c.segmento); set('c-categoria',c.categoria); set('c-servicos-emp',c.servicosEmp);
  set('c-ticket',c.ticket); set('c-regiao',c.regiao); set('c-publico',c.publico);
  set('c-diferencial',c.diferencial); set('c-concorrentes',c.concorrentes); set('c-modelo',c.modelo);
  set('c-gmail',c.gmail); set('c-gmail-senha',c.gmailSenha); set('c-gmn',c.gmn);
  set('c-meta-ads',c.metaAds); set('c-gads',c.gads); set('c-plat-site',c.platSite);
  set('c-site-login',c.siteLogin); set('c-site-senha',c.siteSenha);
  set('c-automacao',c.automacao); set('c-outros-acessos',c.outrosAcessos);
  set('c-plano',c.plano); set('c-entrega',c.entrega); set('c-frequencia',c.frequencia);
  set('c-responsaveis',c.responsaveis); set('c-objetivo',c.objetivo); set('c-metas',c.metas);
  set('c-problemas',c.problemas); set('c-historico',c.historico); set('c-tom',c.tom);
  set('c-refs',c.refs); set('c-restricoes',c.restricoes);
  set('c-valor',c.valor); set('c-forma-pag',c.formaPag); set('c-dia-pag',c.diaPag);
  set('c-pay-status',c.payStatus); set('c-tipo-cont',c.tipoCont); set('c-renovacao',c.renovacao);
  set('c-inicio',c.inicio); set('c-fim',c.fim);
  set('c-link-pasta',c.linkPasta); set('c-link-contrato',c.linkContrato);
  set('c-link-plan',c.linkPlan); set('c-etapa',c.etapa); set('c-obs',c.obs);
  // Checkboxes services
  document.querySelectorAll('.svc-check').forEach(cb => { cb.checked = (c.servicos||[]).includes(cb.value); });
  // Checkboxes onboarding
  document.querySelectorAll('.onb-check').forEach(cb => { cb.checked = (c.onboarding||[]).includes(cb.value); });
  // Social rows
  document.getElementById('social-rows-container').innerHTML = '';
  _socialCount = 0;
  (c.socials||[]).forEach(s => addSocialRow(s));
  if (!c.socials || !c.socials.length) addSocialRow();
}

function collectClientForm() {
  const get = id => { const el = document.getElementById(id); return el ? el.value.trim() : ''; };
  const servicos = [...document.querySelectorAll('.svc-check:checked')].map(c=>c.value);
  const outro = get('c-svc-outro'); if (outro) servicos.push(outro);
  const onboarding = [...document.querySelectorAll('.onb-check:checked')].map(c=>c.value);
  const socials = [];
  document.querySelectorAll('.social-row-item').forEach(row => {
    const inputs = row.querySelectorAll('input, select');
    const obj = {};
    inputs.forEach(inp => { if (inp.dataset.field) obj[inp.dataset.field] = inp.value.trim(); });
    if (obj.plataforma || obj.link || obj.usuario) socials.push(obj);
  });
  const teams = collectTeamAssign();
  return {
    nome:get('c-nome'), cpf:get('c-cpf'), nasc:get('c-nasc'), cargo:get('c-cargo'),
    email:get('c-email'), tel:get('c-tel'), tel2:get('c-tel2'), horario:get('c-horario'),
    prefCom:get('c-pref-com'), temp:get('c-temp'), statusCli:get('c-status-cli'),
    origem:get('c-origem'), obsRel:get('c-obs-rel'),
    empresa:get('c-empresa'), fantasia:get('c-fantasia'), cnpj:get('c-cnpj'),
    ie:get('c-ie'), dtAbertura:get('c-dt-abertura'), site:get('c-site'),
    emailEmp:get('c-email-emp'), telEmp:get('c-tel-emp'), end:get('c-end'),
    cidade:get('c-cidade'), estado:get('c-estado'), cep:get('c-cep'),
    segmento:get('c-segmento'), categoria:get('c-categoria'), servicosEmp:get('c-servicos-emp'),
    ticket:get('c-ticket'), regiao:get('c-regiao'), publico:get('c-publico'),
    diferencial:get('c-diferencial'), concorrentes:get('c-concorrentes'), modelo:get('c-modelo'),
    socials,
    gmail:get('c-gmail'), gmailSenha:get('c-gmail-senha'), gmn:get('c-gmn'),
    metaAds:get('c-meta-ads'), gads:get('c-gads'), platSite:get('c-plat-site'),
    siteLogin:get('c-site-login'), siteSenha:get('c-site-senha'),
    automacao:get('c-automacao'), outrosAcessos:get('c-outros-acessos'),
    plano:get('c-plano'), servicos, entrega:get('c-entrega'), frequencia:get('c-frequencia'),
    responsaveis:get('c-responsaveis'), objetivo:get('c-objetivo'), metas:get('c-metas'),
    problemas:get('c-problemas'), historico:get('c-historico'), tom:get('c-tom'),
    refs:get('c-refs'), restricoes:get('c-restricoes'),
    valor:get('c-valor'), formaPag:get('c-forma-pag'), diaPag:get('c-dia-pag'),
    payStatus:get('c-pay-status'), tipoCont:get('c-tipo-cont'), renovacao:get('c-renovacao'),
    inicio:get('c-inicio'), fim:get('c-fim'),
    linkPasta:get('c-link-pasta'), linkContrato:get('c-link-contrato'),
    linkPlan:get('c-link-plan'), etapa:get('c-etapa'), obs:get('c-obs'),
    onboarding, teams,
  };
}

function clientRegNext() {
  if (clientModalStep < CLIENT_STEPS) {
    clientModalStep++;
    updateClientStepUI();
  } else {
    saveClientReg();
  }
}
function clientRegPrev() {
  if (clientModalStep > 1) { clientModalStep--; updateClientStepUI(); }
}
function updateClientStepUI() {
  for (let i=1; i<=CLIENT_STEPS; i++) {
    const step = document.getElementById('cstep-'+i);
    const panel = document.getElementById('spanel-'+i);
    if (!step || !panel) continue;
    step.className = 'client-step' + (i===clientModalStep?' active':(i<clientModalStep?' done':''));
    panel.className = 'step-panel' + (i===clientModalStep?' active':'');
  }
  document.getElementById('client-reg-prev').style.display = clientModalStep > 1 ? '' : 'none';
  document.getElementById('client-reg-next').textContent = clientModalStep === CLIENT_STEPS ? 'Salvar cliente' : 'Próximo →';
  const exportBtn = document.getElementById('client-reg-export');
  if (exportBtn) exportBtn.style.display = clientModalStep === CLIENT_STEPS ? '' : 'none';
}

function saveClientReg() {
  const data = collectClientForm();
  if (!data.nome) { alert('Por favor, informe o nome do cliente.'); clientModalStep=1; updateClientStepUI(); return; }

  if (editingClientId) {
    const idx = clientsData.findIndex(c => c.id === editingClientId);
    if (idx >= 0) {
      const existing = clientsData[idx];
      clientsData[idx] = { ...existing, ...data };
      syncClientToBoards(clientsData[idx]);
    }
  } else {
    const newClient = { id: 'cli_' + Date.now(), ...data, archived: false, createdAt: new Date().toISOString() };
    clientsData.push(newClient);
    syncClientToBoards(newClient);
    // Auto-add to financeiro if valor provided
    if (data.valor) {
      finState.push({
        id: Date.now() + 1,
        client: data.nome,
        service: (data.servicos||[]).join(', ') || data.plano || '—',
        valor: data.valor,
        venc: data.diaPag || '',
        start: data.inicio || '',
        end: data.fim || '',
        paystatus: data.payStatus || 'Pendente',
        tipo: data.tipoCont || 'Mensal',
        notes: ''
      });
    }
  }

  saveState();
  closeClientReg();
  renderClients();
}

// ── Exportar ficha do cliente (sem dados de acesso/senhas) ─────────────────

function exportClientData(clientId) {
  // Use clientId if passed, otherwise grab current form data
  const c = clientId ? clientsData.find(x => x.id === clientId) : collectClientForm();
  if (!c || !c.nome) { addNotif('Preencha ao menos o nome do cliente antes de exportar', 'warn'); return; }

  const d = v => v || '—';
  const dt = v => v ? new Date(v).toLocaleDateString('pt-BR') : '—';

  const rows = (pairs) => pairs
    .filter(([,v]) => v && v !== '—')
    .map(([k, v]) => `<tr><td class="k">${k}</td><td class="v">${v}</td></tr>`)
    .join('');

  const sec = (title, pairs) => {
    const r = rows(pairs);
    if (!r) return '';
    return `<div class="sec"><div class="sec-title">${title}</div><table>${r}</table></div>`;
  };

  const socRow = (s) => `<tr>
    <td class="k">${d(s.plataforma)}</td>
    <td class="v">${s.usuario ? '@' + s.usuario : ''} ${s.link ? `<a href="${s.link}">${s.link}</a>` : ''}</td>
  </tr>`;

  const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Ficha — ${c.nome}</title>
  <style>
    *{margin:0;padding:0;box-sizing:border-box}
    body{font-family:'Inter',system-ui,sans-serif;font-size:12px;color:#1a1030;background:#fff;padding:32px 36px;max-width:900px;margin:0 auto}
    .header{display:flex;justify-content:space-between;align-items:flex-start;padding-bottom:18px;border-bottom:2px solid #a760fd;margin-bottom:28px}
    .header h1{font-size:22px;font-weight:800;color:#a760fd;margin-bottom:4px}
    .header .sub{font-size:13px;color:#666}
    .header .meta{font-size:11px;color:#888;text-align:right;line-height:1.8}
    .brand{color:#a760fd;font-weight:700}
    .sec{margin-bottom:22px;break-inside:avoid}
    .sec-title{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:1.2px;color:#7c22b4;border-left:3px solid #a760fd;padding:0 0 0 8px;margin-bottom:8px}
    table{width:100%;border-collapse:collapse}
    tr{border-bottom:1px solid #f3eeff}
    td{padding:6px 4px;vertical-align:top}
    .k{color:#888;width:160px;font-size:11px;flex-shrink:0}
    .v{color:#1a1030;font-weight:600;font-size:12px}
    a{color:#a760fd}
    .footer{margin-top:28px;font-size:10px;color:#bbb;text-align:center;border-top:1px solid #f0eaff;padding-top:14px}
    .cols{display:grid;grid-template-columns:1fr 1fr;gap:0 40px}
    @media print{body{padding:0} .no-print{display:none}}
    .print-btn{position:fixed;top:16px;right:16px;background:#a760fd;color:#fff;border:none;border-radius:8px;padding:8px 18px;font-size:13px;font-weight:700;cursor:pointer;z-index:9}
  </style>
</head>
<body>
  <button class="print-btn no-print" onclick="window.print()">Imprimir / Salvar PDF</button>

  <div class="header">
    <div>
      <h1>${d(c.nome)}</h1>
      <div class="sub">${d(c.empresa)}${c.fantasia ? ' — ' + c.fantasia : ''}</div>
      ${c.statusCli ? `<div class="sub" style="margin-top:4px;color:#a760fd;font-weight:700">${c.statusCli}</div>` : ''}
    </div>
    <div class="meta">
      <div>Ficha do cliente</div>
      <div>${new Date().toLocaleDateString('pt-BR', {day:'2-digit',month:'long',year:'numeric'})}</div>
      <div class="brand">DigitalCreate Hub</div>
    </div>
  </div>

  ${sec('Dados do Responsável', [
    ['Nome completo', d(c.nome)],
    ['Cargo', d(c.cargo)],
    ['E-mail', d(c.email)],
    ['WhatsApp / Telefone', d(c.tel)],
    ['Telefone 2', d(c.tel2)],
    ['Horário para contato', d(c.horario)],
    ['Preferência de contato', d(c.prefCom)],
    ['Temperatura', d(c.temp)],
    ['Status', d(c.statusCli)],
    ['Origem', d(c.origem)],
    ['Observações relacionamento', d(c.obsRel)],
  ])}

  ${sec('Dados da Empresa', [
    ['Razão social', d(c.empresa)],
    ['Nome fantasia', d(c.fantasia)],
    ['Site', d(c.site)],
    ['E-mail empresarial', d(c.emailEmp)],
    ['Telefone comercial', d(c.telEmp)],
    ['Endereço', d(c.end)],
    ['Cidade / Estado', c.cidade ? c.cidade + (c.estado ? ' — ' + c.estado : '') : '—'],
    ['Segmento', d(c.segmento)],
    ['Categoria', d(c.categoria)],
    ['Serviços / Produtos', d(c.servicosEmp)],
    ['Ticket médio', d(c.ticket)],
    ['Região de atuação', d(c.regiao)],
    ['Público-alvo', d(c.publico)],
    ['Diferencial', d(c.diferencial)],
    ['Concorrentes', d(c.concorrentes)],
    ['Modelo de atuação', d(c.modelo)],
  ])}

  ${(c.socials||[]).length > 0 ? `<div class="sec"><div class="sec-title">Redes Sociais</div><table>${(c.socials||[]).map(socRow).join('')}</table></div>` : ''}

  ${sec('Serviços Contratados', [
    ['Plano', d(c.plano)],
    ['Serviços', (c.servicos||[]).join(', ') || '—'],
    ['Entrega', d(c.entrega)],
    ['Frequência', d(c.frequencia)],
    ['Responsáveis', d(c.responsaveis)],
    ['Objetivo principal', d(c.objetivo)],
    ['Metas', d(c.metas)],
    ['Problemas atuais', d(c.problemas)],
    ['Histórico', d(c.historico)],
    ['Tom de comunicação', d(c.tom)],
    ['Referências', d(c.refs)],
    ['Restrições', d(c.restricoes)],
  ])}

  ${sec('Financeiro', [
    ['Valor do contrato', d(c.valor)],
    ['Forma de pagamento', d(c.formaPag)],
    ['Dia de vencimento', d(c.diaPag)],
    ['Status do pagamento', d(c.payStatus)],
    ['Tipo de contrato', d(c.tipoCont)],
    ['Renovação automática', d(c.renovacao)],
    ['Início', dt(c.inicio)],
    ['Término', dt(c.fim)],
    ['Link pasta Drive', d(c.linkPasta)],
    ['Link do contrato', d(c.linkContrato)],
    ['Link do planejamento', d(c.linkPlan)],
    ['Etapa atual', d(c.etapa)],
  ])}

  ${sec('Observações', [
    ['Observações gerais', d(c.obs)],
    ['Onboarding', (c.onboarding||[]).join(', ') || '—'],
  ])}

  <div class="footer">
    Ficha gerada automaticamente pelo DigitalCreate Hub &bull;
    Dados de acesso e senhas não são incluídos nesta exportação por segurança.
  </div>
</body>
</html>`;

  const win = window.open('', '_blank', 'width=960,height=800');
  if (!win) { addNotif('Permita pop-ups para exportar a ficha', 'warn'); return; }
  win.document.write(html);
  win.document.close();
}

function syncClientToBoards(client) {
  // For each team assignment, add/update a CRM item in the specified group
  (client.teams || []).forEach(assign => {
    const { boardKey, groupId } = assign;
    if (!boardKey || !groupId) return;
    const board = state[boardKey];
    if (!board) return;
    const group = board.groups.find(g => g.id === groupId);
    if (!group) return;

    // Check if item already exists (by clientId reference)
    const existing = group.items.find(i => i._clientId === client.id);
    const itemData = {
      name: client.nome,
      person: client.responsaveis || '',
      status: client.statusCli === 'Ativo' ? 'Em andamento' : 'Pendente',
      recorrencia: client.tipoCont || '',
      verba: client.valor || '',
      start: client.inicio || '',
      end: client.fim || '',
      temp: client.temp || '',
      perf: '',
      notes: client.obs || '',
      melhorias: '',
      proximos: '',
      type: 'cliente',
      links: [
        client.linkPasta ? { label: 'Drive', url: client.linkPasta } : null,
        client.linkContrato ? { label: 'Contrato', url: client.linkContrato } : null,
        client.site ? { label: 'Site', url: client.site } : null,
      ].filter(Boolean),
      subitems: existing ? existing.subitems : [],
      _clientId: client.id,
    };

    if (existing) {
      Object.assign(existing, itemData);
    } else {
      group.items.push({ id: Date.now() + Math.random(), ...itemData });
    }
  });
}

function toggleArchiveClient(clientId) {
  const c = clientsData.find(x => x.id === clientId);
  if (!c) return;
  const action = c.archived ? 'restaurar' : 'arquivar';
  if (!confirm(`Deseja ${action} o cliente "${c.nome}"?`)) return;
  c.archived = !c.archived;

  // Sync archived state to all board items linked to this client
  Object.values(state).forEach(board => {
    board.groups.forEach(g => {
      g.items.forEach(item => {
        if (item._clientId === clientId) {
          item._archived = c.archived;
        }
      });
    });
  });

  saveState();
  renderClients();
  renderCRM();
}

function deleteClientFull(clientId) {
  const c = clientsData.find(x => x.id === clientId);
  if (!c) return;
  if (!confirm(`Excluir permanentemente "${c.nome}" e remover dos boards da equipe? Esta ação não pode ser desfeita.`)) return;
  // Remove from boards
  Object.values(state).forEach(board => {
    board.groups.forEach(g => { g.items = g.items.filter(i => i._clientId !== clientId); });
  });
  clientsData = clientsData.filter(x => x.id !== clientId);
  saveState();
  renderClients();
}

// ─── SOCIAL ROWS ──────────────────────────────────────────────────────────────
function addSocialRow(prefill) {
  _socialCount++;
  const id = 'social-' + _socialCount;
  const plataformas = ['Instagram','Facebook','TikTok','LinkedIn','YouTube','Site','Outro'];
  const container = document.getElementById('social-rows-container');
  const div = document.createElement('div');
  div.className = 'social-row social-row-item';
  div.id = id;
  div.innerHTML = `
    <div class="social-row-title">
      <select data-field="plataforma" style="background:var(--bg-base);border:1px solid var(--border);border-radius:6px;color:var(--text-primary);font-family:var(--font);font-size:12px;padding:4px 8px;outline:none">
        ${plataformas.map(p=>`<option${prefill&&prefill.plataforma===p?' selected':''}>${p}</option>`).join('')}
      </select>
      <button onclick="document.getElementById('${id}').remove()" style="background:none;border:none;color:var(--red);cursor:pointer;font-size:14px;margin-left:auto">✕</button>
    </div>
    <div class="form-row"><label>Link do perfil</label><input data-field="link" type="url" value="${prefill&&prefill.link||''}" placeholder="https://..."></div>
    <div class="form-row"><label>Nome de usuário</label><input data-field="usuario" type="text" value="${prefill&&prefill.usuario||''}" placeholder="@usuario"></div>
    <div class="form-row"><label>E-mail vinculado</label><input data-field="emailSocial" type="email" value="${prefill&&prefill.emailSocial||''}"></div>
    <div class="form-row"><label>Login</label><div class="sensitive-field"><input data-field="login" type="text" value="${prefill&&prefill.login||''}"><button class="sensitive-toggle" onclick="this.previousElementSibling.type=this.previousElementSibling.type==='password'?'text':'password'" tabindex="-1">👁</button></div></div>
    <div class="form-row"><label>Senha</label><div class="sensitive-field"><input data-field="senha" type="password" value="${prefill&&prefill.senha||''}"><button class="sensitive-toggle" onclick="this.previousElementSibling.type=this.previousElementSibling.type==='password'?'text':'password'" tabindex="-1">👁</button></div></div>
    <div class="form-row"><label>2FA?</label><select data-field="twofa"><option${prefill&&prefill.twofa==='Não'?' selected':''}>Não</option><option${prefill&&prefill.twofa==='Sim'?' selected':''}>Sim</option></select></div>
    <div class="form-row"><label>Quem tem acesso?</label><input data-field="acesso" type="text" value="${prefill&&prefill.acesso||''}" placeholder="ex: Amanda, Gabriel"></div>
  `;
  container.appendChild(div);
}

// ─── TEAM ASSIGN ──────────────────────────────────────────────────────────────
function buildTeamAssignGrid(existingClient) {
  const grid = document.getElementById('team-assign-grid');
  const groupCont = document.getElementById('group-selects-container');
  grid.innerHTML = '';
  groupCont.innerHTML = '';

  teamMembers.forEach(m => {
    const isSelected = existingClient && (existingClient.teams||[]).some(t=>t.boardKey===m.key);
    const card = document.createElement('div');
    card.className = 'team-assign-card' + (isSelected?' selected':'');
    card.dataset.key = m.key;
    card.innerHTML = `<div class="t-name">${m.icon} ${m.label}</div><div class="t-role">${m.role||''}</div>`;
    card.onclick = () => toggleTeamAssign(m.key, card, existingClient);
    grid.appendChild(card);
    if (isSelected) buildGroupSelect(m, existingClient);
  });
}

function toggleTeamAssign(memberKey, card, existingClient) {
  card.classList.toggle('selected');
  const member = teamMembers.find(m=>m.key===memberKey);
  if (card.classList.contains('selected')) {
    buildGroupSelect(member, existingClient);
  } else {
    const el = document.getElementById('gsel-'+memberKey);
    if (el) el.remove();
  }
}

function buildGroupSelect(member, existingClient) {
  const cont = document.getElementById('group-selects-container');
  if (document.getElementById('gsel-'+member.key)) return;
  const board = state[member.key];
  if (!board) return;
  // Support multiple group assignments for same member
  const existingTeams = existingClient ? (existingClient.teams||[]).filter(t=>t.boardKey===member.key) : [];
  const div = document.createElement('div');
  div.className = 'group-select-block';
  div.id = 'gsel-'+member.key;
  div.dataset.memberKey = member.key;
  div.dataset.memberLabel = member.label;
  div.innerHTML = `
    <div class="team-label">${member.icon} ${member.label} — escolha os grupos:</div>
    <div id="gsel-rows-${member.key}"></div>
    <button onclick="addGroupRow('${member.key}')" style="background:none;border:1px dashed var(--border);color:var(--accent);border-radius:6px;padding:4px 12px;font-size:11.5px;cursor:pointer;margin-top:6px">+ Adicionar outro grupo</button>`;
  cont.appendChild(div);
  // Add existing rows or one default row
  if (existingTeams.length) {
    existingTeams.forEach(t => addGroupRow(member.key, t.groupId));
  } else {
    addGroupRow(member.key);
  }
}

function addGroupRow(memberKey, selectedGroupId) {
  const member = teamMembers.find(m=>m.key===memberKey);
  const board = state[memberKey];
  if (!board) return;
  const rowsContainer = document.getElementById('gsel-rows-'+memberKey);
  if (!rowsContainer) return;
  const row = document.createElement('div');
  row.style.cssText = 'display:flex;gap:6px;align-items:center;margin-bottom:6px';
  row.innerHTML = `
    <select class="group-selector" data-member-key="${memberKey}" style="flex:1;background:var(--bg-base);border:1px solid var(--border);border-radius:8px;color:var(--text-primary);font-family:var(--font);font-size:12px;padding:8px 12px;outline:none">
      ${board.groups.map(g=>`<option value="${g.id}" ${selectedGroupId===g.id?'selected':''}>${g.label}</option>`).join('')}
    </select>
    <button onclick="this.parentElement.remove()" style="background:none;border:none;color:var(--red);cursor:pointer;font-size:16px" title="Remover">✕</button>`;
  rowsContainer.appendChild(row);
}

function collectTeamAssign() {
  const teams = [];
  document.querySelectorAll('.group-selector').forEach(sel => {
    const memberKey = sel.dataset.memberKey || sel.closest('.group-select-block')?.dataset.memberKey;
    const memberLabel = teamMembers.find(m=>m.key===memberKey)?.label || memberKey;
    if (memberKey && sel.value) {
      teams.push({ boardKey: memberKey, memberLabel, groupId: sel.value });
    }
  });
  return teams;
}

// ─── CLIENT DETAIL VIEW ───────────────────────────────────────────────────────
let _detailClientId = null;
let _detailTab = 'geral';

function openClientDetail(clientId) {
  _detailClientId = clientId;
  _detailTab = 'geral';
  // Reset calendario state for new client
  _calYear  = new Date().getFullYear();
  _calMonth = new Date().getMonth();
  renderClientDetail();
  document.getElementById('modal-client-detail').classList.add('open');
}
function closeClientDetail() { document.getElementById('modal-client-detail').classList.remove('open'); }
function editClientFromDetail() { closeClientDetail(); openClientReg(_detailClientId); }

function switchDetailTab(tab, el) {
  _detailTab = tab;
  document.querySelectorAll('.client-detail-tab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  renderClientDetail();
}

function renderClientDetail() {
  const c = clientsData.find(x=>x.id===_detailClientId);
  if (!c) return;
  const canSensitive = window.currentRole==='admin'||window.currentRole==='gerente';
  document.getElementById('cd-title').textContent = c.nome||'—';
  document.getElementById('cd-company').textContent = [c.empresa,c.fantasia].filter(Boolean).join(' · ');

  const field = (label, val, sensitive) => {
    if (!val) return '';
    const cls = sensitive && !canSensitive ? 'blurred' : '';
    const valHtml = val.startsWith?.('http') ? `<a href="${val}" target="_blank">${val}</a>` : val;
    return `<div class="detail-field"><div class="detail-label">${label}</div><div class="detail-value ${cls}" title="${sensitive&&!canSensitive?'Clique para revelar':''}">${valHtml}</div></div>`;
  };

  const sections = {
    geral: `<div class="detail-grid">
      ${field('Nome completo',c.nome)}${field('Cargo',c.cargo)}
      ${field('E-mail',c.email)}${field('Telefone',c.tel)}
      ${field('WhatsApp secundário',c.tel2)}${field('Melhor horário',c.horario)}
      ${field('Preferência de contato',c.prefCom)}${field('Temperatura',c.temp?tempEmoji(c.temp)+' '+c.temp:'')}
      ${field('Status',c.statusCli)}${field('Origem',c.origem)}
      ${c.obsRel?`<div class="detail-field" style="grid-column:1/-1"><div class="detail-label">Observações</div><div class="detail-value">${c.obsRel}</div></div>`:''}
      ${(c.teams||[]).length?`<div class="detail-field" style="grid-column:1/-1"><div class="detail-label">Equipes</div><div class="detail-value">${(c.teams||[]).map(t=>`<span class="client-team-chip">${t.memberLabel}</span>`).join(' ')}</div></div>`:''}
    </div>`,
    empresa: `<div class="detail-grid">
      ${field('Empresa',c.empresa)}${field('Nome fantasia',c.fantasia)}
      ${field('CNPJ',c.cnpj,true)}${field('Inscrição estadual',c.ie,true)}
      ${field('Site',c.site)}${field('E-mail empresarial',c.emailEmp)}
      ${field('Telefone comercial',c.telEmp)}${field('Endereço',c.end)}
      ${field('Cidade',c.cidade)}${field('Estado',c.estado)}${field('CEP',c.cep)}
      ${field('Segmento',c.segmento)}${field('Categoria',c.categoria)}
      ${field('Ticket médio',c.ticket)}${field('Região de atuação',c.regiao)}
      ${field('Modelo',c.modelo)}
      ${c.publico?`<div class="detail-field" style="grid-column:1/-1"><div class="detail-label">Público-alvo</div><div class="detail-value">${c.publico}</div></div>`:''}
      ${c.diferencial?`<div class="detail-field" style="grid-column:1/-1"><div class="detail-label">Diferencial</div><div class="detail-value">${c.diferencial}</div></div>`:''}
      ${field('Concorrentes',c.concorrentes)}
    </div>`,
    redes: (c.socials||[]).length ? c.socials.map(s=>`
      <div style="background:var(--bg-card2);border-radius:10px;padding:14px;margin-bottom:10px;border:1px solid var(--border)">
        <div style="font-weight:700;font-size:13px;margin-bottom:10px">📱 ${s.plataforma||'Rede'}</div>
        <div class="detail-grid">
          ${field('Link',s.link)}${field('Usuário',s.usuario)}
          ${field('E-mail vinculado',s.emailSocial)}
          ${canSensitive?field('Login',s.login,true)+''+field('Senha',s.senha,true):'<div class="detail-field"><div class="detail-label">Login / Senha</div><div class="detail-value" style="color:var(--text-muted)">🔒 Visível apenas para Admin/Gerente</div></div>'}
          ${field('2FA',s.twofa)}${field('Quem tem acesso',s.acesso)}
        </div>
      </div>`).join('') : '<div style="color:var(--text-muted);padding:20px;text-align:center">Nenhuma rede social cadastrada.</div>',
    acessos: canSensitive ? `<div class="detail-grid">
      ${field('Gmail',c.gmail,true)}${field('Senha Google',c.gmailSenha,true)}
      ${field('Google Meu Negócio',c.gmn)}${field('Meta Ads',c.metaAds)}
      ${field('Google Ads',c.gads)}${field('Plataforma do site',c.platSite)}
      ${field('Login do site',c.siteLogin,true)}${field('Senha do site',c.siteSenha,true)}
      ${field('Automação',c.automacao)}
      ${c.outrosAcessos?`<div class="detail-field" style="grid-column:1/-1"><div class="detail-label">Outros acessos</div><div class="detail-value">${c.outrosAcessos}</div></div>`:''}
    </div>` : '<div style="padding:30px;text-align:center;color:var(--text-muted)">🔒 Seção restrita a Admin e Gerente.</div>',
    servicos: `<div class="detail-grid">
      ${field('Plano',c.plano)}${field('Frequência',c.frequencia)}
      ${field('Responsáveis',c.responsaveis)}${field('Etapa atual',c.etapa)}
      ${(c.servicos||[]).length?`<div class="detail-field" style="grid-column:1/-1"><div class="detail-label">Serviços contratados</div><div class="detail-value">${c.servicos.join(', ')}</div></div>`:''}
      ${c.entrega?`<div class="detail-field" style="grid-column:1/-1"><div class="detail-label">Detalhamento de entrega</div><div class="detail-value">${c.entrega}</div></div>`:''}
      ${c.linkPasta?field('Pasta Drive',c.linkPasta):''}${c.linkContrato?field('Contrato',c.linkContrato):''}${c.linkPlan?field('Planejamento',c.linkPlan):''}
      ${(c.onboarding||[]).length?`<div class="detail-field" style="grid-column:1/-1"><div class="detail-label">Onboarding</div><div class="detail-value">${c.onboarding.map(i=>`✅ ${i}`).join('<br>')}</div></div>`:''}
    </div>`,
    financeiro: `<div class="detail-grid">
      ${field('Valor do contrato',c.valor)}${field('Forma de pagamento',c.formaPag)}
      ${field('Dia de pagamento',c.diaPag)}${field('Status',c.payStatus)}
      ${field('Tipo de contrato',c.tipoCont)}${field('Renovação automática',c.renovacao)}
      ${field('Início',c.inicio?fmtDate(c.inicio):'')}${field('Término',c.fim?fmtDate(c.fim):'')}
    </div>`,
    briefing: `<div class="detail-grid">
      ${c.objetivo?`<div class="detail-field" style="grid-column:1/-1"><div class="detail-label">Objetivo</div><div class="detail-value">${c.objetivo}</div></div>`:''}
      ${c.metas?`<div class="detail-field" style="grid-column:1/-1"><div class="detail-label">Metas</div><div class="detail-value">${c.metas}</div></div>`:''}
      ${c.problemas?`<div class="detail-field" style="grid-column:1/-1"><div class="detail-label">Problemas atuais</div><div class="detail-value">${c.problemas}</div></div>`:''}
      ${c.historico?`<div class="detail-field" style="grid-column:1/-1"><div class="detail-label">Histórico</div><div class="detail-value">${c.historico}</div></div>`:''}
      ${field('Tom de comunicação',c.tom)}${field('Referências',c.refs)}
      ${c.restricoes?`<div class="detail-field" style="grid-column:1/-1"><div class="detail-label">Restrições</div><div class="detail-value">${c.restricoes}</div></div>`:''}
      ${c.obs?`<div class="detail-field" style="grid-column:1/-1"><div class="detail-label">Observações gerais</div><div class="detail-value">${c.obs}</div></div>`:''}
    </div>`,
  };

  // ── Novas abas (delegadas a funções assíncronas) ──
  const novasAbas = ['jornada360','avaliacao','calendario','alertas','notas360'];
  if (novasAbas.includes(_detailTab)) {
    document.getElementById('cd-body').innerHTML = '';
    if (_detailTab === 'jornada360')  _renderTabJornada(c);
    if (_detailTab === 'avaliacao')   _renderTabAvaliacao(c);
    if (_detailTab === 'calendario')  _renderTabCalendario(c);
    if (_detailTab === 'alertas')     _renderTabAlertas(c);
    if (_detailTab === 'notas360')    _renderTabNotas(c);
    return;
  }

  document.getElementById('cd-body').innerHTML = sections[_detailTab] || '';
}

function toggleSensitive(inputId, btn) {
  const inp = document.getElementById(inputId);
  if (!inp) return;
  inp.type = inp.type === 'password' ? 'text' : 'password';
}

// Keep old quickStatusFromCard for CRM board compatibility
function quickStatusFromCard(sel) {
  const [status, boardLabel, groupLabel, itemId] = sel.value.split('|');
  for (const [bk, board] of Object.entries(state)) {
    if (board.label === boardLabel) {
      for (const g of board.groups) {
        if (g.label === groupLabel) {
          const item = g.items.find(i => i.id == itemId);
          if (item) { item.status = status; saveState(); sel.className = `status-select-inline badge ${statusClass(status)}`; break; }
        }
      }
    }
  }
}

// ─── FINANCEIRO ───────────────────────────────────────────────────────────────
function renderFinanceiro() {
  const isAdmin = window.currentRole === 'admin';
  const fmt = n => 'R$ ' + n.toLocaleString('pt-BR', {minimumFractionDigits:2});

  // ── Tab switcher ──
  let html = `<div class="fin-tabs">
    <div class="fin-tab ${finTab==='contratos'?'active':''}" onclick="setFinTab('contratos')">💰 Contratos de Clientes</div>
    ${isAdmin ? `<div class="fin-tab admin-only ${finTab==='empresa'?'active':''}" onclick="setFinTab('empresa')">🏢 Financeiro da Empresa</div>` : ''}
  </div>`;

  if (finTab === 'contratos') {
    html += renderFinContratos(fmt);
  } else if (finTab === 'empresa' && isAdmin) {
    html += renderFinEmpresa(fmt);
  }

  document.getElementById('main-content').innerHTML = html;
}

function setFinTab(tab) {
  finTab = tab;
  renderFinanceiro();
}

// ── ABA 1: CONTRATOS (Gerente + Admin) ──
function renderFinContratos(fmt) {
  const parsVal = v => parseFloat((v||'').replace(/[^0-9,.]/g,'').replace(',','.')) || 0;
  let totalMensal = 0, totalPago = 0, totalPendente = 0, totalAtrasado = 0;
  finState.forEach(f => {
    const num = parsVal(f.valor);
    totalMensal += num;
    if (f.paystatus === 'Pago') totalPago += num;
    else if (f.paystatus === 'Atrasado') totalAtrasado += num;
    else totalPendente += num;
  });
  const totalPessoal = finState.filter(f=>f.classificacao==='pessoal'&&f.paystatus==='Pago').reduce((s,f)=>s+parsVal(f.valor),0);
  const totalEmpresa = finState.filter(f=>f.classificacao!=='pessoal'&&f.paystatus==='Pago').reduce((s,f)=>s+parsVal(f.valor),0);

  let html = `
  <div class="stats-row">
    <div class="stat-card"><div class="stat-label">Contratos ativos</div><div class="stat-val purple">${finState.length}</div></div>
    <div class="stat-card"><div class="stat-label">Faturamento total</div><div class="stat-val" style="font-size:17px;color:var(--text-primary)">${fmt(totalMensal)}</div></div>
    <div class="stat-card"><div class="stat-label">Recebido</div><div class="stat-val green" style="font-size:17px">${fmt(totalPago)}</div></div>
    <div class="stat-card"><div class="stat-label">A receber</div><div class="stat-val yellow" style="font-size:17px">${fmt(totalPendente)}</div></div>
    <div class="stat-card"><div class="stat-label">Atrasado</div><div class="stat-val red" style="font-size:17px">${fmt(totalAtrasado)}</div></div>
    <div class="stat-card"><div class="stat-label">👤 Pessoal (pago)</div><div class="stat-val" style="font-size:17px;color:#fb6340">${fmt(totalPessoal)}</div></div>
    <div class="stat-card"><div class="stat-label">🏢 Empresa (pago)</div><div class="stat-val" style="font-size:17px;color:var(--accent)">${fmt(totalEmpresa)}</div></div>
  </div>
  <div class="toolbar" style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
    <button class="btn btn-primary" onclick="openNewFinModal()">+ Novo contrato</button>
    <div style="display:flex;gap:4px;margin-left:auto;flex-wrap:wrap">
      ${['todos','empresa','pessoal','contrato','avulso'].map(f=>`<button class="btn btn-ghost" style="font-size:11px;padding:4px 10px" onclick="_finFilter('${f}')" id="finfil-${f}">${{todos:'Todos',empresa:'🏢 Empresa',pessoal:'👤 Pessoal',contrato:'📄 Contratos',avulso:'🧾 Avulsos'}[f]}</button>`).join('')}
    </div>
  </div>
  <div class="fin-grid">`;

  const _displayFin = finState.filter(f => {
    if (_finFilterVal === 'empresa') return f.classificacao !== 'pessoal';
    if (_finFilterVal === 'pessoal') return f.classificacao === 'pessoal';
    if (_finFilterVal === 'contrato') return !f.lancamentoTipo || f.lancamentoTipo === 'contrato';
    if (_finFilterVal === 'avulso') return f.lancamentoTipo === 'avulso' || f.lancamentoTipo === 'cobranca';
    return true;
  });

  _displayFin.forEach((f, idx) => {
    const color = accentColor(idx);
    html += `<div class="fin-card">
      <div class="fin-card-accent" style="background:linear-gradient(90deg,${color},${accentColor(idx+1)})"></div>
      <div class="fin-card-header">
        <div><div class="fin-client">${f.client}</div><div class="fin-service">${f.service}</div></div>
        <div style="display:flex;gap:4px">
          <button class="icon-btn" onclick="openFinModal(${f.id})">✏️</button>
          <button class="icon-btn" style="color:var(--red)" onclick="deleteFinItem(${f.id})">🗑</button>
        </div>
      </div>
      <div class="fin-amount">${f.valor}</div>
      <div style="margin-bottom:4px">
        ${f.classificacao==='pessoal'?'<span style="font-size:10px;background:rgba(251,99,64,.15);color:#fb6340;border-radius:5px;padding:2px 7px;font-weight:700">👤 Pessoal</span>':'<span style="font-size:10px;background:var(--accent-soft);color:var(--accent);border-radius:5px;padding:2px 7px;font-weight:700">🏢 Empresa</span>'}
        ${f.valorPessoal&&f.classificacao==='empresa'?`<span style="font-size:10px;color:var(--text-muted);margin-left:4px">Amanda: R$ ${f.valorPessoal}</span>`:''}
      </div>
      <div class="fin-details">
        <div class="fin-row"><span class="fin-key">Status</span>
          <select class="fin-status-pill ${payClass(f.paystatus)}" style="border:none;background:none;cursor:pointer;font-weight:600;font-size:10.5px" onchange="changeFinStatus(${f.id},this.value)">
            <option ${f.paystatus==='Pago'?'selected':''}>Pago</option>
            <option ${f.paystatus==='Pendente'?'selected':''}>Pendente</option>
            <option ${f.paystatus==='Atrasado'?'selected':''}>Atrasado</option>
          </select>
        </div>
        <div class="fin-row"><span class="fin-key">Tipo</span><span class="fin-val">${f.tipo}${f.lancamentoTipo&&f.lancamentoTipo!=='contrato'?` · <span style="color:var(--yellow);font-size:10px">${f.lancamentoTipo==='cobranca'?'💳 Cobrança em aberto':'🧾 Serviço avulso'}</span>`:''}</span></div>
        ${f.verbaCampanha?`<div class="fin-row"><span class="fin-key">💰 Verba campanha</span><span class="fin-val" style="color:var(--green);font-weight:600">R$ ${f.verbaCampanha}</span></div>`:''}
        ${f.venc?`<div class="fin-row"><span class="fin-key">Vencimento</span><span class="fin-val">Dia ${f.venc}</span></div>`:''}
        <div class="fin-row"><span class="fin-key">Vigência</span><span class="fin-val" style="font-size:10.5px">${fmtDate(f.start)} → ${fmtDate(f.end)}</span></div>
        ${f.notes?`<div style="margin-top:8px;font-size:10.5px;color:var(--text-muted);font-style:italic;border-top:1px solid var(--border);padding-top:8px">${f.notes}</div>`:''}
      </div>
    </div>`;
  });
  html += '</div>';
  return html;
}

// ── ABA 2: FINANCEIRO EMPRESA (Admin only) ──

function buildFerramentasSummary(despesas, fmt, parsVal) {
  if (!despesas || despesas.length === 0) {
    return '<div style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-lg);padding:16px;margin-bottom:20px"><div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:var(--text-muted);margin-bottom:8px">📦 Ferramentas & Assinaturas</div><div style="color:var(--text-muted);font-size:13px">Nenhuma ferramenta cadastrada ainda.</div></div>';
  }
  const totalFerramentas = despesas.reduce((s, d) => s + (parseFloat((d.valor||'').replace(/[^0-9,.]/g,'').replace(',','.')) || 0), 0);
  let cards = despesas.map(d => {
    const val = parseFloat((d.valor||'').replace(/[^0-9,.]/g,'').replace(',','.')) || 0;
    return '<div style="background:var(--bg-base);border:1px solid var(--border);border-radius:8px;padding:8px 12px;min-width:130px">' +
      '<div style="font-size:11px;font-weight:600">' + (d.nome||'—') + '</div>' +
      '<div style="font-size:10px;color:var(--text-muted)">' + (d.categoria||'') + '</div>' +
      '<div style="font-size:13px;font-weight:700;color:var(--orange);margin-top:4px">' + (val ? fmt(val) : 'R$ —') + '<span style="font-size:9px;color:var(--text-muted)">/mês</span></div>' +
      '</div>';
  }).join('');
  return '<div style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-lg);padding:16px;margin-bottom:20px">' +
    '<div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:var(--text-muted);margin-bottom:12px">📦 Resumo Total — Ferramentas & Assinaturas</div>' +
    '<div style="display:flex;flex-wrap:wrap;gap:8px">' + cards + '</div>' +
    '<div style="margin-top:12px;padding-top:10px;border-top:1px solid var(--border);font-size:12px;color:var(--text-muted)">💸 Total mensal em ferramentas/assinaturas: <strong style="color:var(--orange)">' + fmt(totalFerramentas) + '</strong></div>' +
    '</div>';
}

function renderFinEmpresa(fmt) {
  const despesas = empresaState.despesas || [];
  const equipe = empresaState.equipe || [];

  // Totais
  const parsVal = v => parseFloat((v||'').replace(/[^0-9,.]/g,'').replace(',','.')) || 0;
  const totalReceita = finState.reduce((s,f) => f.paystatus==='Pago' ? s + parsVal(f.valor) : s, 0);
  const totalDespesas = despesas.reduce((s,d) => s + parsVal(d.valor), 0);
  const totalEquipe = equipe.reduce((s,e) => s + parsVal(e.valor), 0);
  const totalSaidas = totalDespesas + totalEquipe;
  const margem = totalReceita - totalSaidas;
  const pct = totalReceita > 0 ? ((margem/totalReceita)*100).toFixed(1) : '0.0';

  // Tag helper
  const tagMap = { fixo:'tag-fixo', variavel:'tag-variavel', salario:'tag-salario', receita:'tag-receita', outro:'tag-outro' };
  const tagLabel = { fixo:'Fixo', variavel:'Variável', salario:'Salário/PJ', receita:'Receita', outro:'Outro' };

  let html = `
  <!-- MARGEM RESUMO -->
  <div class="margem-box">
    <div class="margem-item"><div class="margem-label">💚 Receita (pago)</div><div class="margem-val" style="color:var(--green)">${fmt(totalReceita)}</div></div>
    <div class="margem-divider"></div>
    <div class="margem-item"><div class="margem-label">🔴 Total saídas</div><div class="margem-val" style="color:var(--red)">${fmt(totalSaidas)}</div></div>
    <div class="margem-divider"></div>
    <div class="margem-item"><div class="margem-label">💛 Equipe</div><div class="margem-val" style="color:var(--yellow)">${fmt(totalEquipe)}</div></div>
    <div class="margem-divider"></div>
    <div class="margem-item"><div class="margem-label">📊 Margem bruta</div><div class="margem-val" style="color:${margem>=0?'var(--green)':'var(--red)'}">${fmt(margem)}</div></div>
    <div class="margem-divider"></div>
    <div class="margem-item"><div class="margem-label">% Margem</div><div class="margem-val" style="color:${margem>=0?'var(--green)':'var(--red)'}">${pct}%</div></div>
  </div>

  <!-- RESUMO FERRAMENTAS -->
  ${buildFerramentasSummary(despesas, fmt, parsVal)}


  <!-- GASTOS DE PLATAFORMA E SERVIÇOS -->
  <div class="empresa-section">
    <div class="empresa-section-title">
      🖥️ Gastos de Plataforma e Serviços
      <button class="btn btn-primary" style="margin-left:auto;font-size:11px;padding:5px 12px" onclick="openEmpresaModal('despesa',null)">+ Adicionar</button>
    </div>
    <div class="empresa-grid">`;

  if (despesas.length === 0) {
    html += `<div style="grid-column:1/-1;color:var(--text-muted);font-size:13px;text-align:center;padding:32px 0">Nenhum gasto cadastrado ainda.</div>`;
  }
  despesas.forEach((d,idx) => {
    const cor = accentColor(idx);
    html += `<div class="empresa-card">
      <div class="empresa-card-accent" style="background:linear-gradient(90deg,${cor},${accentColor(idx+1)})"></div>
      <div class="empresa-card-body">
        <div style="display:flex;align-items:flex-start;justify-content:space-between">
          <div>
            <div class="empresa-card-name">${d.nome}</div>
            <div class="empresa-card-cat">${d.categoria||'—'}</div>
          </div>
          <div style="display:flex;gap:4px">
            <button class="icon-btn" onclick="openEmpresaModal('despesa',${d.id})">✏️</button>
            <button class="icon-btn" style="color:var(--red)" onclick="deleteEmpresaItem('despesa',${d.id})">🗑</button>
          </div>
        </div>
        <div class="empresa-card-val saida">${d.valor}</div>
        ${d.venc?`<div style="font-size:10.5px;color:var(--text-muted)">Vence dia ${d.venc}</div>`:''}
        ${d.notas?`<div style="font-size:10.5px;color:var(--text-muted);margin-top:6px;font-style:italic">${d.notas}</div>`:''}
      </div>
      <div class="empresa-card-footer">
        <span class="empresa-card-tag ${tagMap[d.tipo]||'tag-outro'}">${tagLabel[d.tipo]||d.tipo}</span>
        <span style="font-size:10px;color:var(--text-muted)">/mês</span>
      </div>
    </div>`;
  });
  html += `</div></div>`;

  // EQUIPE / PAGAMENTOS
  html += `<div class="empresa-section">
    <div class="empresa-section-title">
      👥 Equipe — Pagamentos e Contratos
      <button class="btn btn-primary" style="margin-left:auto;font-size:11px;padding:5px 12px" onclick="openEmpresaModal('equipe',null)">+ Adicionar membro</button>
    </div>
    <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-lg);overflow:hidden">
    <table class="historico-table">
      <thead><tr>
        <th>Nome</th><th>Função</th><th>Contrato</th><th>Valor</th><th>Vencimento</th><th>Status</th><th></th>
      </tr></thead>
      <tbody>`;

  if (equipe.length === 0) {
    html += `<tr><td colspan="7" style="text-align:center;color:var(--text-muted);padding:28px">Nenhum membro cadastrado.</td></tr>`;
  }
  equipe.forEach(e => {
    const st = e.status || 'Ativo';
    const stColor = st==='Ativo'?'var(--green)':st==='Férias'?'var(--yellow)':'var(--red)';
    html += `<tr>
      <td><strong>${e.nome}</strong><br><span style="font-size:10.5px;color:var(--text-muted)">${e.email||''}</span></td>
      <td>${e.funcao||'—'}</td>
      <td><span class="empresa-card-tag ${tagMap[e.tipoContrato]||'tag-outro'}">${tagLabel[e.tipoContrato]||e.tipoContrato||'—'}</span></td>
      <td style="color:var(--red);font-family:var(--mono);font-weight:700">${e.valor}</td>
      <td>${e.venc?'Dia '+e.venc:'—'}</td>
      <td><span style="font-size:11px;font-weight:700;color:${stColor}">${st}</span></td>
      <td>
        <button class="icon-btn" onclick="openEmpresaModal('equipe',${e.id})">✏️</button>
        <button class="icon-btn" style="color:var(--red)" onclick="deleteEmpresaItem('equipe',${e.id})">🗑</button>
      </td>
    </tr>`;
  });
  html += `</tbody></table></div></div>`;

  // PRÓXIMOS INVESTIMENTOS
  const investimentos = empresaState.investimentos || [];
  const prioColors = { alta:'var(--red)', media:'var(--yellow)', baixa:'var(--green)' };
  html += `<div class="empresa-section">
    <div class="empresa-section-title">
      🚀 Próximos Investimentos
      <button class="btn btn-primary" style="margin-left:auto;font-size:11px;padding:5px 12px" onclick="openInvestimentoModal(null)">+ Adicionar</button>
    </div>`;
  if (!investimentos.length) {
    html += `<div style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-lg);padding:24px;text-align:center;color:var(--text-muted);font-size:13px">Nenhum investimento planejado ainda.<br><span style="font-size:11px">Ferramentas, assinaturas, equipamentos…</span></div>`;
  } else {
    html += `<div class="empresa-grid">`;
    investimentos.forEach(inv => {
      const prioColor = prioColors[inv.prioridade] || 'var(--text-muted)';
      html += `<div class="empresa-card" style="border-left:3px solid ${prioColor}">
        <div class="empresa-card-body">
          <div style="display:flex;align-items:flex-start;justify-content:space-between">
            <div>
              <div class="empresa-card-name">${inv.nome}</div>
              <div class="empresa-card-cat">${inv.tipo||'—'}${inv.data?' · Para: '+inv.data:''}</div>
            </div>
            <div style="display:flex;gap:4px">
              <button class="icon-btn" onclick="openInvestimentoModal('${inv.id}')">✏️</button>
              <button class="icon-btn" style="color:var(--red)" onclick="deleteInvestimento('${inv.id}')">🗑</button>
            </div>
          </div>
          ${inv.valor?`<div class="empresa-card-val" style="color:var(--accent)">~${inv.valor}</div>`:'<div style="height:6px"></div>'}
          <div style="display:flex;align-items:center;gap:6px;margin-top:6px">
            <span style="font-size:10px;font-weight:700;color:${prioColor};background:${prioColor}18;border-radius:5px;padding:2px 7px">● ${(inv.prioridade||'media').charAt(0).toUpperCase()+(inv.prioridade||'media').slice(1)} prioridade</span>
          </div>
          ${inv.notas?`<div style="font-size:10.5px;color:var(--text-muted);margin-top:6px;font-style:italic">${inv.notas}</div>`:''}
        </div>
      </div>`;
    });
    html += `</div>`;
  }
  html += `</div>`;

  // NOTAS GERAIS ADM
  html += `<div class="empresa-section">
    <div class="empresa-section-title">📝 Notas Internas (ADM)</div>
    <textarea style="width:100%;background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);padding:12px;color:var(--text-primary);font-family:var(--font);font-size:13px;resize:vertical;min-height:100px;outline:none" 
      placeholder="Anotações internas sobre finanças da empresa, metas, observações..."
      oninput="empresaState.notasGerais=this.value;saveState()">${empresaState.notasGerais||''}</textarea>
  </div>`;

  return html;
}

function changeFinStatus(id, val) {
  const f = finState.find(x => x.id === id);
  if (!f) return;
  f.paystatus = val;
  saveState();
}

function deleteFinItem(id) {
  if (!confirm('Remover este contrato?')) return;
  finState = finState.filter(f => f.id !== id);
  saveState(); renderFinanceiro();
}

// ─── MODAL CRM ────────────────────────────────────────────────────────────────
function populateModalBoards() {
  const sel = document.getElementById('f-dest-board');
  if (!sel) return;
  sel.innerHTML = teamMembers.map(m => `<option value="${m.key}">${m.icon} ${m.label}</option>`).join('');
  sel.value = currentBoard;
  populateModalGroups();
}

function populateModalGroups() {
  const boardSel = document.getElementById('f-dest-board');
  const groupSel = document.getElementById('f-dest-group');
  if (!boardSel || !groupSel) return;
  const bKey = boardSel.value;
  const board = state[bKey];
  if (!board) return;
  groupSel.innerHTML = board.groups.map(g => `<option value="${g.id}">${g.label}</option>`).join('');
  if (modalTarget?.groupId) {
    const match = board.groups.find(g => g.id === modalTarget.groupId);
    if (match) groupSel.value = match.id;
  }
}

function onModalClientSearch(val) {
  const list = document.getElementById('f-name-ac');
  const pulled = document.getElementById('f-client-pulled');
  if (!list) return;
  list.style.display = 'none';
  list.innerHTML = '';
  if (pulled) pulled.style.display = 'none';
  if (!val || val.length < 1) return;
  const matches = clientsData.filter(c =>
    (c.nome||'').toLowerCase().includes(val.toLowerCase()) ||
    (c.empresa||'').toLowerCase().includes(val.toLowerCase())
  ).slice(0, 8);
  if (!matches.length) return;
  matches.forEach(c => {
    const div = document.createElement('div');
    div.className = 'autocomplete-item';
    div.innerHTML = `<span class="ac-name">${c.nome||c.empresa||'—'}</span><span class="ac-company">${c.empresa||''}</span>`;
    div.addEventListener('mousedown', e => { e.preventDefault(); selectModalClient(c); });
    list.appendChild(div);
  });
  list.style.display = 'block';
}

function selectModalClient(c) {
  const list = document.getElementById('f-name-ac');
  if (list) list.style.display = 'none';
  document.getElementById('f-name').value = c.nome || c.empresa || '';
  if (c.responsaveis) document.getElementById('f-person').value = c.responsaveis;
  if (c.valor) document.getElementById('f-verba').value = c.valor;
  if (c.temp) document.getElementById('f-temp').value = c.temp;
  if (c.linkPasta) { document.getElementById('f-link-url').value = c.linkPasta; document.getElementById('f-link-label').value = 'Drive'; }
  else if (c.site) { document.getElementById('f-link-url').value = c.site; document.getElementById('f-link-label').value = 'Site'; }
  if (c.obs) document.getElementById('f-notes').value = c.obs;
  // Show pulled info
  const pulled = document.getElementById('f-client-pulled');
  const pulledText = document.getElementById('f-client-pulled-text');
  if (pulled && pulledText) {
    const info = [c.empresa, c.segmento, c.tel||c.email].filter(Boolean).join(' · ');
    pulledText.textContent = `Cliente vinculado: ${c.nome||''}${info?' · '+info:''}`;
    pulled.style.display = 'flex';
  }
}

// close autocomplete on outside click
document.addEventListener('click', e => {
  const list = document.getElementById('f-name-ac');
  const input = document.getElementById('f-name');
  if (list && input && !list.contains(e.target) && e.target !== input) list.style.display = 'none';
}, true);

function openModal(boardKey, groupId, itemId) {
  modalTarget = { boardKey, groupId, itemId };
  const isEdit = itemId !== null;
  document.getElementById('modal-title').textContent = isEdit ? 'Editar item' : 'Novo item';

  // Show/hide destination row
  const destRow = document.getElementById('f-dest-row');
  if (destRow) destRow.style.display = isEdit ? 'none' : '';

  // Populate board/group selectors for new items
  if (!isEdit) populateModalBoards();

  _selectedPersons = [];
  updatePersonsDisplay();
  let item = { name:'', person:'', status:'Pendente', recorrencia:'', verba:'', start:'', end:'', temp:'', perf:'', notes:'', melhorias:'', proximos:'', type:'tarefa', links:[] };
  if (isEdit) {
    const res = findItem(boardKey, itemId);
    if (res) item = { ...item, ...res.item };
  }
  document.getElementById('f-name').value = item.name||'';
  // Hide pulled info on open
  const pulled = document.getElementById('f-client-pulled');
  const acList = document.getElementById('f-name-ac');
  if (pulled) pulled.style.display = 'none';
  if (acList) acList.style.display = 'none';

  _selectedPersons = item.persons ? [...item.persons] : (item.person ? [item.person] : []);
  updatePersonsDisplay();
  document.getElementById('f-status').value = item.status||'Pendente';
  document.getElementById('f-recorrencia').value = item.recorrencia||'';
  document.getElementById('f-verba').value = item.verba||'';
  document.getElementById('f-start').value = item.start||'';
  document.getElementById('f-end').value = item.end||'';
  document.getElementById('f-temp').value = item.temp||'';
  document.getElementById('f-perf').value = item.perf||'';
  document.getElementById('f-notes').value = item.notes||'';
  document.getElementById('f-melhorias').value = item.melhorias||'';
  document.getElementById('f-proximos').value = item.proximos||'';
  document.getElementById('f-type').value = item.type||'tarefa';
  const firstLink = (item.links||[])[0];
  document.getElementById('f-link-url').value = firstLink?.url||'';
  document.getElementById('f-link-label').value = firstLink?.label||'';
  // Carrega pastas Drive do item
  window._itemDriveFolders = [...(item.driveFolders || [])];
  _renderItemDriveFolderChips();
  const picker = document.getElementById('f-drive-saved-picker');
  if (picker) picker.style.display = 'none';
  document.getElementById('modal').classList.add('open');
  setTimeout(() => document.getElementById('f-name').focus(), 80);
}

// ── Drive folder picker no modal de item ─────────────────────────────────────
window._itemDriveFolders = [];

function _renderItemDriveFolderChips() {
  const el = document.getElementById('f-drive-folders-chips');
  if (!el) return;
  if (!window._itemDriveFolders.length) { el.innerHTML = '<span style="font-size:11px;color:var(--text-muted)">Nenhuma pasta vinculada</span>'; return; }
  el.innerHTML = window._itemDriveFolders.map((f, i) => `
    <a href="${f.url}" target="_blank"
      style="display:inline-flex;align-items:center;gap:5px;padding:4px 10px;border-radius:8px;background:rgba(251,188,4,.12);border:1px solid rgba(251,188,4,.3);font-size:11.5px;font-weight:600;color:var(--text-primary);text-decoration:none;cursor:pointer">
      📁 ${f.name}
      <span onclick="event.preventDefault();window._itemDriveFolders.splice(${i},1);_renderItemDriveFolderChips()" style="color:var(--text-muted);font-size:10px;margin-left:2px;cursor:pointer">✕</span>
    </a>`).join('');
}

function _itemDrivePickSaved() {
  const picker = document.getElementById('f-drive-saved-picker');
  if (!picker) return;
  if (picker.style.display !== 'none') { picker.style.display = 'none'; return; }
  const links = _getDriveLinks();
  if (!links.length) { alert('Nenhuma pasta salva. Use "Colar link novo" para adicionar.'); return; }
  picker.innerHTML = links.map((lk, i) => `
    <div onclick="_itemDriveSelectSaved(${i})" style="display:flex;align-items:center;gap:8px;padding:7px 10px;border-radius:6px;cursor:pointer;hover:background:var(--bg-card)">
      <span>📁</span>
      <div style="flex:1;min-width:0">
        <div style="font-size:12px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${lk.name}</div>
        <div style="font-size:10px;color:var(--text-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${lk.url}</div>
      </div>
    </div>`).join('');
  picker.style.display = 'block';
}

function _itemDriveSelectSaved(idx) {
  const lk = _getDriveLinks()[idx];
  if (!lk) return;
  const already = window._itemDriveFolders.some(f => f.url === lk.url);
  if (!already) window._itemDriveFolders.push({ name: lk.name, url: lk.url });
  _renderItemDriveFolderChips();
  const picker = document.getElementById('f-drive-saved-picker');
  if (picker) picker.style.display = 'none';
}

function _showDriveLinkModal({ isDrive = false, title = '🔗 Adicionar link', onConfirm } = {}) {
  const existingOverlay = document.getElementById('drive-link-modal-overlay');
  if (existingOverlay) existingOverlay.remove();

  const urlPlaceholder = isDrive
    ? 'https://drive.google.com/drive/folders/...'
    : 'https://exemplo.com';

  const overlay = document.createElement('div');
  overlay.id = 'drive-link-modal-overlay';
  overlay.style.cssText = `
    position:fixed;inset:0;z-index:9999;
    background:rgba(0,0,0,0.65);backdrop-filter:blur(4px);
    display:flex;align-items:center;justify-content:center;
    padding:16px;
  `;

  overlay.innerHTML = `
    <div style="
      background:var(--bg-card);border:1px solid var(--border);
      border-radius:14px;padding:28px 28px 24px;
      width:100%;max-width:440px;box-shadow:0 20px 60px rgba(0,0,0,0.5);
    ">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <span style="font-size:16px;font-weight:600;color:var(--text)">${title}</span>
        <button id="dlm-close" style="background:none;border:none;cursor:pointer;color:var(--text-muted);font-size:20px;line-height:1;padding:2px 6px">✕</button>
      </div>

      <div style="margin-bottom:14px">
        <label style="display:block;font-size:12px;font-weight:500;color:var(--text-muted);margin-bottom:6px">URL ${isDrive ? 'da pasta' : 'do link'}</label>
        <input id="dlm-url" type="url" placeholder="${urlPlaceholder}" autocomplete="off"
          style="width:100%;box-sizing:border-box;background:var(--bg-card2);border:1px solid var(--border);
            border-radius:8px;padding:10px 12px;color:var(--text);font-size:13px;outline:none;
            transition:border-color .2s"
          onfocus="this.style.borderColor='var(--accent)'"
          onblur="this.style.borderColor='var(--border)'"
        />
        <div id="dlm-url-err" style="display:none;color:#f87171;font-size:11px;margin-top:4px"></div>
      </div>

      <div style="margin-bottom:24px">
        <label style="display:block;font-size:12px;font-weight:500;color:var(--text-muted);margin-bottom:6px">Nome (opcional)</label>
        <input id="dlm-name" type="text" placeholder="Ex: Pasta do Cliente X" autocomplete="off"
          style="width:100%;box-sizing:border-box;background:var(--bg-card2);border:1px solid var(--border);
            border-radius:8px;padding:10px 12px;color:var(--text);font-size:13px;outline:none;
            transition:border-color .2s"
          onfocus="this.style.borderColor='var(--accent)'"
          onblur="this.style.borderColor='var(--border)'"
        />
      </div>

      <div style="display:flex;gap:10px;justify-content:flex-end">
        <button id="dlm-cancel" style="
          background:var(--bg-card2);border:1px solid var(--border);border-radius:8px;
          padding:9px 20px;color:var(--text-muted);font-size:13px;cursor:pointer;
          transition:border-color .2s,color .2s
        " onmouseover="this.style.borderColor='var(--accent)';this.style.color='var(--text)'"
           onmouseout="this.style.borderColor='var(--border)';this.style.color='var(--text-muted)'">
          Cancelar
        </button>
        <button id="dlm-confirm" style="
          background:var(--accent);border:1px solid var(--accent);border-radius:8px;
          padding:9px 20px;color:#fff;font-size:13px;font-weight:600;cursor:pointer;
          transition:opacity .2s
        " onmouseover="this.style.opacity='.85'" onmouseout="this.style.opacity='1'">
          Confirmar
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  const urlInput  = overlay.querySelector('#dlm-url');
  const nameInput = overlay.querySelector('#dlm-name');
  const urlErr    = overlay.querySelector('#dlm-url-err');

  urlInput.focus();

  urlInput.addEventListener('input', () => {
    const v = urlInput.value.trim();
    if (v && nameInput.value === '') {
      try {
        const hostname = new URL(v).hostname.replace(/^www\./, '');
        nameInput.value = hostname;
      } catch (_) {}
    }
  });

  function close() { overlay.remove(); }

  function confirm() {
    const url  = urlInput.value.trim();
    const name = nameInput.value.trim() || url;

    urlErr.style.display = 'none';

    if (!url) {
      urlErr.textContent = 'Informe a URL.';
      urlErr.style.display = 'block';
      urlInput.focus();
      return;
    }
    if (isDrive && !url.includes('drive.google.com')) {
      urlErr.textContent = 'A URL deve ser do Google Drive (drive.google.com).';
      urlErr.style.display = 'block';
      urlInput.focus();
      return;
    }
    if (!isDrive && !url.startsWith('http')) {
      urlErr.textContent = 'A URL deve começar com http:// ou https://.';
      urlErr.style.display = 'block';
      urlInput.focus();
      return;
    }

    close();
    if (onConfirm) onConfirm({ url, name });
  }

  overlay.querySelector('#dlm-close').addEventListener('click', close);
  overlay.querySelector('#dlm-cancel').addEventListener('click', close);
  overlay.querySelector('#dlm-confirm').addEventListener('click', confirm);

  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });

  urlInput.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); confirm(); } });
  nameInput.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); confirm(); } });
}

function _itemDriveAddNew() {
  _showDriveLinkModal({ isDrive: true, title: '📁 Adicionar pasta do Drive', onConfirm: ({ url, name }) => {
    const already = window._itemDriveFolders.some(f => f.url === url);
    if (!already) {
      window._itemDriveFolders.push({ name, url });
      const links = _getDriveLinks();
      if (!links.some(l => l.url === url)) {
        links.push({ name, url, folderId: extractDriveFolderId(url) });
        _setDriveLinks(links);
      }
    }
    _renderItemDriveFolderChips();
  }});
}
function openNewModal() { openModal(currentBoard, null, null); }
function closeModal() { document.getElementById('modal').classList.remove('open'); modalTarget = null; }

function saveItem() {
  if (!modalTarget) return;
  let { boardKey, groupId, itemId } = modalTarget;
  const isEdit = itemId !== null;

  // For new items, use the destination selectors
  if (!isEdit) {
    const destBoard = document.getElementById('f-dest-board');
    const destGroup = document.getElementById('f-dest-group');
    if (destBoard && destBoard.value) boardKey = destBoard.value;
    if (destGroup && destGroup.value) groupId = destGroup.value;
  }

  const linkUrl = document.getElementById('f-link-url').value.trim();
  const linkLabel = document.getElementById('f-link-label').value.trim();
  const newItem = {
    id: isEdit ? itemId : Date.now(),
    name: document.getElementById('f-name').value.trim()||'Sem nome',
    persons: [..._selectedPersons],
    person: _selectedPersons[0] || '',
    status: document.getElementById('f-status').value,
    recorrencia: document.getElementById('f-recorrencia').value.trim(),
    verba: document.getElementById('f-verba').value.trim(),
    start: document.getElementById('f-start').value,
    end: document.getElementById('f-end').value,
    temp: document.getElementById('f-temp').value,
    perf: document.getElementById('f-perf').value,
    notes: document.getElementById('f-notes').value.trim(),
    melhorias: document.getElementById('f-melhorias').value.trim(),
    proximos: document.getElementById('f-proximos').value.trim(),
    type: document.getElementById('f-type').value,
    links: isEdit ? (findItem(boardKey,itemId)?.item?.links || []) : [],
    subitems: isEdit ? (findItem(boardKey,itemId)?.item?.subitems || []) : [],
    driveFolders: [...(window._itemDriveFolders || [])],
  };
  // Merge link from form
  if (linkUrl) {
    const existIdx = newItem.links.findIndex(l => l.url === linkUrl);
    if (existIdx >= 0) newItem.links[existIdx] = { url: linkUrl, label: linkLabel||linkUrl };
    else if (newItem.links.length === 0) newItem.links.push({ url: linkUrl, label: linkLabel||linkUrl });
    else newItem.links[0] = { url: linkUrl, label: linkLabel||linkUrl };
  }
  const board = state[boardKey];
  if (!board) { alert('Board não encontrado.'); return; }
  let targetGroup = groupId ? board.groups.find(g => g.id === groupId) : board.groups[0];
  if (!targetGroup) targetGroup = board.groups[0];
  if (isEdit) {
    const oldItem = findItem(boardKey, itemId)?.item || {};
    const idx = targetGroup.items.findIndex(i => i.id === itemId);
    if (idx >= 0) targetGroup.items[idx] = newItem;
    // Log automático de mudanças (#5)
    const logs = [];
    if ((oldItem.status||'') !== newItem.status) logs.push(`Status: "${oldItem.status||'—'}" → "${newItem.status}"`);
    const oldPerson = (oldItem.persons||[oldItem.person||'']).filter(Boolean).join(', ');
    const newPerson = newItem.persons.filter(Boolean).join(', ');
    if (oldPerson !== newPerson) logs.push(`Responsável: "${oldPerson||'—'}" → "${newPerson||'—'}"`);
    if ((oldItem.end||'') !== (newItem.end||'')) logs.push(`Prazo: "${oldItem.end||'—'}" → "${newItem.end||'—'}"`);
    if (logs.length) logActivity(newItem.id, logs.join(' | '));
  } else targetGroup.items.push(newItem);
  if (!isEdit) logActivity(newItem.id, 'criou o item');
  // Switch to destination board if different
  if (!isEdit && boardKey !== currentBoard) {
    currentBoard = boardKey;
    renderTeamNav();
  }
  saveState(); closeModal(); renderCRM();
}

// ─── MODAL FINANCEIRO ─────────────────────────────────────────────────────────
function openNewFinModal() { openFinModal(null); }
function openFinModal(id) {
  finModalTarget = id;
  const isEdit = id !== null;
  document.getElementById('modal-fin-title').textContent = isEdit ? 'Editar Contrato / Cobrança' : 'Novo Contrato / Cobrança';
  let f = { client:'', service:'', valor:'', venc:'', start:'', end:'', paystatus:'Pendente', tipo:'Mensal', notes:'', verbaCampanha:'', lancamentoTipo:'contrato' };
  if (isEdit) { const found = finState.find(x => x.id === id); if (found) f = {...f, ...found}; }
  document.getElementById('ff-client').value = f.client||'';
  document.getElementById('ff-service').value = f.service||'';
  document.getElementById('ff-valor').value = f.valor||'';
  document.getElementById('ff-venc').value = f.venc||'';
  document.getElementById('ff-start').value = f.start||'';
  document.getElementById('ff-end').value = f.end||'';
  document.getElementById('ff-paystatus').value = f.paystatus||'Pendente';
  document.getElementById('ff-tipo').value = f.tipo||'Mensal';
  document.getElementById('ff-notes').value = f.notes||'';
  document.getElementById('ff-verba-campanha').value = f.verbaCampanha||'';
  document.getElementById('ff-lancamento-tipo').value = f.lancamentoTipo||'contrato';
  document.getElementById('ff-classificacao').value = f.classificacao || 'empresa';
  document.getElementById('ff-valor-pessoal').value = f.valorPessoal || '';
  _toggleFinClassif();
  document.getElementById('modal-fin').classList.add('open');
}
function closeFinModal() { document.getElementById('modal-fin').classList.remove('open'); finModalTarget = null; }

function _toggleFinClassif() {
  const v = document.getElementById('ff-classificacao')?.value;
  const row = document.getElementById('ff-valor-pessoal-row');
  if (row) row.style.display = v === 'pessoal' ? '' : 'none';
}

function _finFilter(val) {
  _finFilterVal = val;
  renderFinanceiro();
}
function saveFinItem() {
  const isEdit = finModalTarget !== null;
  const newItem = {
    id: isEdit ? finModalTarget : Date.now(),
    client: document.getElementById('ff-client').value.trim()||'Cliente',
    service: document.getElementById('ff-service').value.trim(),
    valor: document.getElementById('ff-valor').value.trim(),
    venc: document.getElementById('ff-venc').value.trim(),
    start: document.getElementById('ff-start').value,
    end: document.getElementById('ff-end').value,
    paystatus: document.getElementById('ff-paystatus').value,
    tipo: document.getElementById('ff-tipo').value,
    notes: document.getElementById('ff-notes').value.trim(),
    verbaCampanha: document.getElementById('ff-verba-campanha').value.trim(),
    lancamentoTipo: document.getElementById('ff-lancamento-tipo').value,
    classificacao: document.getElementById('ff-classificacao').value || 'empresa',
    valorPessoal: document.getElementById('ff-valor-pessoal').value.trim(),
  };
  if (isEdit) { const idx = finState.findIndex(x => x.id === finModalTarget); if (idx>=0) finState[idx]=newItem; }
  else finState.push(newItem);
  saveState(); closeFinModal(); renderFinanceiro();
}

// ─── MODAL FINANCEIRO EMPRESA ─────────────────────────────────────────────────
function openEmpresaModal(tipo, id) {
  empresaModalTipo = tipo;
  empresaModalTarget = id;
  const isEdit = id !== null;

  if (tipo === 'despesa') {
    let d = { nome:'', categoria:'', tipo:'fixo', valor:'', venc:'', notas:'' };
    if (isEdit) { const found = (empresaState.despesas||[]).find(x=>x.id===id); if(found) d={...found}; }
    document.getElementById('emp-modal-title').textContent = isEdit ? 'Editar Gasto' : 'Novo Gasto / Plataforma';
    document.getElementById('emp-form-despesa').style.display='';
    document.getElementById('emp-form-equipe').style.display='none';
    document.getElementById('emp-nome').value = d.nome||'';
    document.getElementById('emp-categoria').value = d.categoria||'';
    document.getElementById('emp-tipo').value = d.tipo||'fixo';
    document.getElementById('emp-valor').value = d.valor||'';
    document.getElementById('emp-venc').value = d.venc||'';
    document.getElementById('emp-notas').value = d.notas||'';
  } else {
    let e = { nome:'', email:'', funcao:'', tipoContrato:'salario', valor:'', venc:'', status:'Ativo', entrega:'', notas:'' };
    if (isEdit) { const found = (empresaState.equipe||[]).find(x=>x.id===id); if(found) e={...found}; }
    document.getElementById('emp-modal-title').textContent = isEdit ? 'Editar Membro' : 'Novo Membro da Equipe';
    document.getElementById('emp-form-despesa').style.display='none';
    document.getElementById('emp-form-equipe').style.display='';
    document.getElementById('emp-eq-nome').value = e.nome||'';
    document.getElementById('emp-eq-email').value = e.email||'';
    document.getElementById('emp-eq-funcao').value = e.funcao||'';
    document.getElementById('emp-eq-contrato').value = e.tipoContrato||'salario';
    document.getElementById('emp-eq-valor').value = e.valor||'';
    document.getElementById('emp-eq-venc').value = e.venc||'';
    document.getElementById('emp-eq-status').value = e.status||'Ativo';
    document.getElementById('emp-eq-entrega').value = e.entrega||'';
    document.getElementById('emp-eq-notas').value = e.notas||'';
  }
  document.getElementById('modal-empresa').classList.add('open');
}
function closeEmpresaModal() { document.getElementById('modal-empresa').classList.remove('open'); empresaModalTarget=null; }

function saveEmpresaItem() {
  const isEdit = empresaModalTarget !== null;
  if (empresaModalTipo === 'despesa') {
    const item = {
      id: isEdit ? empresaModalTarget : Date.now(),
      nome: document.getElementById('emp-nome').value.trim()||'Sem nome',
      categoria: document.getElementById('emp-categoria').value.trim(),
      tipo: document.getElementById('emp-tipo').value,
      valor: document.getElementById('emp-valor').value.trim(),
      venc: document.getElementById('emp-venc').value.trim(),
      notas: document.getElementById('emp-notas').value.trim(),
    };
    if (!empresaState.despesas) empresaState.despesas=[];
    if (isEdit) { const idx=empresaState.despesas.findIndex(x=>x.id===empresaModalTarget); if(idx>=0) empresaState.despesas[idx]=item; }
    else empresaState.despesas.push(item);
  } else {
    const item = {
      id: isEdit ? empresaModalTarget : Date.now(),
      nome: document.getElementById('emp-eq-nome').value.trim()||'Sem nome',
      email: document.getElementById('emp-eq-email').value.trim(),
      funcao: document.getElementById('emp-eq-funcao').value.trim(),
      tipoContrato: document.getElementById('emp-eq-contrato').value,
      valor: document.getElementById('emp-eq-valor').value.trim(),
      venc: document.getElementById('emp-eq-venc').value.trim(),
      status: document.getElementById('emp-eq-status').value,
      entrega: document.getElementById('emp-eq-entrega').value.trim(),
      notas: document.getElementById('emp-eq-notas').value.trim(),
    };
    if (!empresaState.equipe) empresaState.equipe=[];
    if (isEdit) { const idx=empresaState.equipe.findIndex(x=>x.id===empresaModalTarget); if(idx>=0) empresaState.equipe[idx]=item; }
    else empresaState.equipe.push(item);
  }
  saveState(); closeEmpresaModal(); renderFinanceiro();
}

function deleteEmpresaItem(tipo, id) {
  if (!confirm('Remover este item?')) return;
  if (tipo==='despesa') empresaState.despesas=(empresaState.despesas||[]).filter(x=>x.id!==id);
  else empresaState.equipe=(empresaState.equipe||[]).filter(x=>x.id!==id);
  saveState(); renderFinanceiro();
}

function openInvestimentoModal(id) {
  const isEdit = id !== null && id !== undefined;
  const all = empresaState.investimentos || [];
  let inv = { id: Date.now().toString(36), nome:'', tipo:'Assinatura', valor:'', prioridade:'media', data:'', notas:'' };
  if (isEdit) { const found = all.find(x => x.id === id); if (found) inv = {...inv, ...found}; }

  const ov = document.createElement('div');
  ov.id = 'modal-investimento';
  ov.className = 'modal-overlay';
  ov.style.cssText = 'display:flex;z-index:9999';
  ov.innerHTML = `
    <div class="modal" style="width:440px;max-width:95vw">
      <div class="modal-header">
        <div class="modal-title">${isEdit?'Editar Investimento':'Novo Investimento Planejado'}</div>
        <button class="modal-close" onclick="document.getElementById('modal-investimento').remove()">✕</button>
      </div>
      <div class="form-grid">
        <div class="form-full form-row"><label>Nome</label><input id="inv-nome" value="${inv.nome}" placeholder="ex: Notion, Adobe, Câmera…"></div>
        <div class="form-row">
          <label>Tipo</label>
          <select id="inv-tipo">
            ${['Assinatura','Serviço','Equipamento','Treinamento','Software','Outro'].map(t=>`<option ${inv.tipo===t?'selected':''}>${t}</option>`).join('')}
          </select>
        </div>
        <div class="form-row"><label>Valor estimado (R$)</label><input id="inv-valor" value="${inv.valor}" placeholder="ex: R$ 150/mês"></div>
        <div class="form-row">
          <label>Prioridade</label>
          <select id="inv-prioridade">
            <option value="alta" ${inv.prioridade==='alta'?'selected':''}>🔴 Alta</option>
            <option value="media" ${inv.prioridade==='media'?'selected':''}>🟡 Média</option>
            <option value="baixa" ${inv.prioridade==='baixa'?'selected':''}>🟢 Baixa</option>
          </select>
        </div>
        <div class="form-full form-row"><label>Data planejada</label><input id="inv-data" type="month" value="${inv.data}"></div>
        <div class="form-full form-row"><label>Notas</label><textarea id="inv-notas" rows="2" placeholder="Por que precisa? Qual o impacto?">${inv.notas}</textarea></div>
      </div>
      <div class="modal-actions">
        <button class="btn btn-ghost" onclick="document.getElementById('modal-investimento').remove()">Cancelar</button>
        <button class="btn btn-primary" onclick="saveInvestimento('${isEdit?id:''}')">Salvar</button>
      </div>
    </div>`;
  ov.addEventListener('click', e => { if (e.target === ov) ov.remove(); });
  document.body.appendChild(ov);
  setTimeout(() => document.getElementById('inv-nome')?.focus(), 100);
}

function saveInvestimento(existingId) {
  const nome = document.getElementById('inv-nome')?.value.trim();
  if (!nome) { addNotif('Digite o nome do investimento', 'warn'); return; }
  if (!empresaState.investimentos) empresaState.investimentos = [];
  const item = {
    id: existingId || Date.now().toString(36),
    nome,
    tipo: document.getElementById('inv-tipo')?.value,
    valor: document.getElementById('inv-valor')?.value.trim(),
    prioridade: document.getElementById('inv-prioridade')?.value,
    data: document.getElementById('inv-data')?.value,
    notas: document.getElementById('inv-notas')?.value.trim(),
  };
  if (existingId) {
    const idx = empresaState.investimentos.findIndex(x => x.id === existingId);
    if (idx >= 0) empresaState.investimentos[idx] = item;
    else empresaState.investimentos.push(item);
  } else {
    empresaState.investimentos.push(item);
  }
  document.getElementById('modal-investimento')?.remove();
  saveState(); renderFinanceiro();
}

function deleteInvestimento(id) {
  if (!confirm('Remover este investimento planejado?')) return;
  empresaState.investimentos = (empresaState.investimentos||[]).filter(x => x.id !== id);
  saveState(); renderFinanceiro();
}

// ─── GROUP MODAL ──────────────────────────────────────────────────────────────
function openGroupModal() {
  newGroupColor = '#7c5cfc';
  document.getElementById('ng-name').value = '';
  document.querySelectorAll('.color-swatch').forEach(s => s.classList.toggle('active', s.dataset.color === newGroupColor));
  const picker = document.getElementById('ng-color-custom');
  if (picker) picker.value = newGroupColor;
  document.getElementById('modal-group').classList.add('open');
  setTimeout(() => document.getElementById('ng-name').focus(), 100);
}
function closeGroupModal() { document.getElementById('modal-group').classList.remove('open'); }
function selectGroupColor(color, el, fromPicker = false) {
  newGroupColor = color;
  document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
  if (el) el.classList.add('active');
  const picker = document.getElementById('ng-color-custom');
  if (picker && !fromPicker) picker.value = color;
}
function saveNewGroup() {
  const name = document.getElementById('ng-name').value.trim();
  if (!name) { document.getElementById('ng-name').focus(); return; }
  state[currentBoard].groups.push({ id: 'grp_' + Date.now(), label: name, color: newGroupColor, items: [] });
  saveState(); closeGroupModal(); renderCRM();
}

function deleteGroup(groupId, e) {
  e.stopPropagation();
  if (!confirm('Remover este grupo e todos os seus itens?')) return;
  state[currentBoard].groups = state[currentBoard].groups.filter(g => g.id !== groupId);
  saveState(); renderCRM();
}

function renameGroup(boardKey, groupId, e) {
  e.stopPropagation();
  const g = state[boardKey].groups.find(x => x.id === groupId);
  if (!g) return;
  const span = document.getElementById('glabel-' + groupId);
  if (!span) return;
  const oldLabel = g.label;
  // Replace span with inline input
  const input = document.createElement('input');
  input.value = oldLabel;
  input.style.cssText = 'background:transparent;border:none;border-bottom:1.5px solid currentColor;color:inherit;font-family:inherit;font-size:inherit;font-weight:inherit;outline:none;width:180px;padding:0 2px';
  span.replaceWith(input);
  input.focus();
  input.select();
  const confirm = () => {
    const newLabel = input.value.trim() || oldLabel;
    g.label = newLabel;
    saveState();
    renderCRM();
  };
  input.onblur = confirm;
  input.onkeydown = ev => {
    if (ev.key === 'Enter') { ev.preventDefault(); input.blur(); }
    if (ev.key === 'Escape') { input.value = oldLabel; input.blur(); }
    ev.stopPropagation();
  };
  input.onclick = ev => ev.stopPropagation();
}

// ─── TEAM MANAGEMENT ──────────────────────────────────────────────────────────
function renderTeamNav() {
  const nav = document.getElementById('team-nav-list');
  if (!nav) return;
  nav.innerHTML = teamMembers.map(m => `
    <div class="nav-item-wrap">
      <div class="nav-item ${m.key===currentBoard&&currentPage==='crm'?'active':''}" onclick="switchBoard('${m.key}')">
        <span class="nav-icon">${m.icon}</span> ${m.label}
      </div>
    </div>`).join('');
}

function openTeamModal() {
  renderTeamMembersModal();
  _nmInitGroups();
  document.getElementById('modal-team').classList.add('open');
}
function closeTeamModal() { document.getElementById('modal-team').classList.remove('open'); }

function renderTeamMembersModal() {
  document.getElementById('team-members-list').innerHTML = teamMembers.map(m => {
    const boardGroups = (state[m.key]?.groups || []);
    return `
    <div class="member-pill" style="flex-wrap:wrap;gap:6px">
      <span class="mp-icon">${m.icon}</span>
      <div style="flex:1;min-width:120px">
        <div class="mp-label">${m.label}</div>
        <div class="mp-role">${m.role||'Membro'} · <span style="color:var(--text-muted)">${boardGroups.length} grupo${boardGroups.length!==1?'s':''}</span></div>
      </div>
      <div style="display:flex;gap:4px;align-items:center">
        <button class="btn btn-ghost" style="font-size:11px;padding:3px 8px" onclick="renameBoardMember('${m.key}')" title="Renomear">✏️</button>
        <button class="btn btn-ghost" style="font-size:11px;padding:3px 8px" onclick="switchBoard('${m.key}');closeTeamModal();showPage('crm')" title="Abrir board">📋</button>
        <button class="mp-del" onclick="removeTeamMember('${m.key}')" title="Remover">✕</button>
      </div>
    </div>`;
  }).join('') || '<div style="font-size:12px;color:var(--text-muted);text-align:center;padding:16px">Nenhum membro cadastrado.</div>';
}

// ── Grupos iniciais no formulário de novo membro ──────────────────────────────
let _nmGroups = []; // [{label, color}]

function _nmInitGroups() {
  _nmGroups = [{ label: 'Tarefas', color: '#7c5cfc' }];
  _nmRenderGroups();
  document.getElementById('nm-name').value = '';
  document.getElementById('nm-role').value = '';
  document.getElementById('nm-icon').value = '👤';
}

function _nmRenderGroups() {
  const list = document.getElementById('nm-groups-list');
  if (!list) return;
  list.innerHTML = _nmGroups.map((g, i) => `
    <div style="display:flex;gap:6px;align-items:center">
      <input type="color" value="${g.color}" oninput="_nmGroups[${i}].color=this.value"
        style="width:32px;height:32px;border:2px solid var(--border);border-radius:7px;cursor:pointer;padding:2px;background:none">
      <input type="text" value="${g.label}" oninput="_nmGroups[${i}].label=this.value"
        placeholder="Nome do grupo"
        style="flex:1;background:var(--bg-card);border:1px solid var(--border);border-radius:7px;color:var(--text-primary);font-family:var(--font);font-size:12px;padding:6px 10px;outline:none">
      ${_nmGroups.length > 1 ? `<button onclick="_nmRemoveGroup(${i})" style="background:none;border:none;cursor:pointer;color:var(--red);font-size:16px;line-height:1;padding:2px 4px">✕</button>` : ''}
    </div>`).join('');
}

function _nmAddGroup() {
  const colors = ['#7c5cfc','#2dce89','#38b6ff','#f4c430','#fb6340','#f5365c','#00d4aa','#ff6ec7'];
  _nmGroups.push({ label: '', color: colors[_nmGroups.length % colors.length] });
  _nmRenderGroups();
}

function _nmRemoveGroup(i) {
  _nmGroups.splice(i, 1);
  _nmRenderGroups();
}

function addTeamMember() {
  const name = document.getElementById('nm-name').value.trim();
  const icon = document.getElementById('nm-icon').value;
  const role = document.getElementById('nm-role').value.trim();
  if (!name) { document.getElementById('nm-name').focus(); return; }

  const key = 'member_' + Date.now();
  teamMembers.push({ key, label: name, icon, role: role || 'Membro' });

  if (!state[key]) {
    const validGroups = _nmGroups.filter(g => g.label.trim());
    state[key] = {
      label: name,
      groups: validGroups.length
        ? validGroups.map((g, i) => ({ id: `grp_${key}_${i}`, label: g.label.trim(), color: g.color, items: [] }))
        : [{ id: 'tarefas_' + key, label: 'Tarefas', color: '#7c5cfc', items: [] }]
    };
  }

  saveState();
  _nmInitGroups();
  renderTeamMembersModal();
  renderTeamNav();
  addNotif(`Board "${name}" criado com sucesso!`, 'success');
  if (currentPage === 'crm') renderCRM();
}

function renameBoardMember(key) {
  const m = teamMembers.find(x => x.key === key);
  if (!m) return;
  const newName = prompt('Novo nome:', m.label);
  if (!newName || !newName.trim()) return;
  m.label = newName.trim();
  if (state[key]) state[key].label = newName.trim();
  saveState();
  renderTeamMembersModal();
  renderTeamNav();
  if (currentPage === 'crm') renderCRM();
}

function removeTeamMember(key) {
  if (teamMembers.length <= 1) { alert('Precisa ter ao menos um membro.'); return; }
  const m = teamMembers.find(x => x.key === key);
  if (!confirm(`Remover "${m?.label||key}" e apagar o board de tarefas?`)) return;
  teamMembers = teamMembers.filter(x => x.key !== key);
  if (currentBoard === key) currentBoard = teamMembers[0].key;
  saveState();
  renderTeamMembersModal();
  renderTeamNav();
  if (currentPage === 'crm') renderCRM();
}

// ─── MULTI-SELECT & BULK ACTIONS ──────────────────────────────────────────────
function itemSelKey(groupId, itemId) { return `${currentBoard}|${groupId}|${itemId}`; }
function subSelKey(groupId, itemId, subId) { return `${currentBoard}|${groupId}|${itemId}|${subId}`; }

function toggleItemSelect(groupId, itemId, e, groupItems, itemIndex) {
  const key = itemSelKey(groupId, itemId);
  if (e.shiftKey && lastClickedItemIdx && lastClickedItemIdx.groupId === groupId) {
    const from = Math.min(lastClickedItemIdx.index, itemIndex);
    const to = Math.max(lastClickedItemIdx.index, itemIndex);
    const shouldSelect = !selectedItems.has(itemSelKey(groupId, groupItems[itemIndex].id));
    for (let i = from; i <= to; i++) {
      const k = itemSelKey(groupId, groupItems[i].id);
      if (shouldSelect) selectedItems.add(k); else selectedItems.delete(k);
    }
  } else {
    if (selectedItems.has(key)) selectedItems.delete(key);
    else selectedItems.add(key);
  }
  lastClickedItemIdx = { groupId, index: itemIndex };
  updateBulkBar();
  renderCRM();
}

function toggleSubSelect(groupId, itemId, subId, e, subItems, subIndex) {
  const key = subSelKey(groupId, itemId, subId);
  if (e.shiftKey && lastClickedSubIdx && lastClickedSubIdx.groupId === groupId && lastClickedSubIdx.itemId == itemId) {
    const from = Math.min(lastClickedSubIdx.index, subIndex);
    const to = Math.max(lastClickedSubIdx.index, subIndex);
    const shouldSelect = !selectedSubitems.has(subSelKey(groupId, itemId, subItems[subIndex].id));
    for (let i = from; i <= to; i++) {
      const k = subSelKey(groupId, itemId, subItems[i].id);
      if (shouldSelect) selectedSubitems.add(k); else selectedSubitems.delete(k);
    }
  } else {
    if (selectedSubitems.has(key)) selectedSubitems.delete(key);
    else selectedSubitems.add(key);
  }
  lastClickedSubIdx = { groupId, itemId, index: subIndex };
  updateBulkBar();
  renderCRM();
}

function toggleGroupSelectAll(groupId, checkbox) {
  // Get items from state for this group
  const board = state[currentBoard];
  const group = board && board.groups.find(g => g.id === groupId);
  const groupItems = group ? group.items.filter(item => {
    const ms = !searchTerm || item.name.toLowerCase().includes(searchTerm.toLowerCase()) || (item.person||'').toLowerCase().includes(searchTerm.toLowerCase());
    const mf = !filterStatus || item.status === filterStatus;
    const mt = !filterType || (item.type || 'tarefa') === filterType;
    return ms && mf && mt;
  }) : [];
  if (checkbox.checked) {
    groupItems.forEach(item => selectedItems.add(itemSelKey(groupId, item.id)));
  } else {
    groupItems.forEach(item => selectedItems.delete(itemSelKey(groupId, item.id)));
  }
  lastClickedItemIdx = null;
  updateBulkBar();
  renderCRM();
}

function updateBulkBar() {
  const total = selectedItems.size + selectedSubitems.size;
  const bar = document.getElementById('bulk-action-bar');
  if (!bar) return;
  if (total > 0) {
    bar.classList.add('visible');
    document.getElementById('bulk-count-label').textContent = `${total} item${total!==1?'s':''} selecionado${total!==1?'s':''}`;
  } else {
    bar.classList.remove('visible');
  }
}

function clearSelection() {
  selectedItems.clear();
  selectedSubitems.clear();
  lastClickedItemIdx = null;
  lastClickedSubIdx = null;
  updateBulkBar();
  renderCRM();
}

function bulkDeleteSelected() {
  const total = selectedItems.size + selectedSubitems.size;
  if (total === 0) return;
  if (!confirm(`Remover ${total} item${total!==1?'s':''} selecionado${total!==1?'s':''}? Esta ação não pode ser desfeita.`)) return;
  selectedSubitems.forEach(key => {
    const parts = key.split('|');
    const [boardKey, groupId, itemId, subId] = parts;
    const g = state[boardKey]?.groups.find(x => x.id === groupId);
    if (!g) return;
    const item = g.items.find(i => i.id == itemId);
    if (item && item.subitems) item.subitems = item.subitems.filter(s => s.id != subId);
  });
  selectedItems.forEach(key => {
    const [boardKey, groupId, itemId] = key.split('|');
    const g = state[boardKey]?.groups.find(x => x.id === groupId);
    if (g) g.items = g.items.filter(i => i.id != itemId);
  });
  selectedItems.clear();
  selectedSubitems.clear();
  lastClickedItemIdx = null;
  lastClickedSubIdx = null;
  saveState();
  renderCRM();
}

function bulkMarkStatus(status) {
  selectedItems.forEach(key => {
    const [boardKey, groupId, itemId] = key.split('|');
    const g = state[boardKey]?.groups.find(x => x.id === groupId);
    if (!g) return;
    const item = g.items.find(i => i.id == itemId);
    if (item) item.status = status;
  });
  // Aplica também em subitems selecionados
  selectedSubitems.forEach(key => {
    const [boardKey, groupId, itemId, subId] = key.split('|');
    const g = state[boardKey]?.groups.find(x => x.id === groupId);
    if (!g) return;
    const item = g.items.find(i => i.id == itemId);
    if (item?.subitems) { const sub = item.subitems.find(s => s.id == subId); if (sub) sub.status = status; }
  });
  saveState();
  renderCRM();
}

function bulkSetDate(field) {
  // Usa input de data em um mini popup
  const d = prompt(`Data para ${field === 'start' ? 'INÍCIO' : 'FIM'} (formato AAAA-MM-DD):\nEx: 2026-06-15`);
  if (!d || !/^\d{4}-\d{2}-\d{2}$/.test(d)) { if (d !== null) alert('Formato inválido. Use AAAA-MM-DD.'); return; }
  selectedItems.forEach(key => {
    const [boardKey, groupId, itemId] = key.split('|');
    const g = state[boardKey]?.groups.find(x => x.id === groupId);
    if (!g) return;
    const item = g.items.find(i => i.id == itemId);
    if (item) item[field] = d;
  });
  // Para subitems (data guardada como start/end se existir)
  selectedSubitems.forEach(key => {
    const [boardKey, groupId, itemId, subId] = key.split('|');
    const g = state[boardKey]?.groups.find(x => x.id === groupId);
    if (!g) return;
    const item = g.items.find(i => i.id == itemId);
    if (item?.subitems) { const sub = item.subitems.find(s => s.id == subId); if (sub) sub[field] = d; }
  });
  saveState();
  renderCRM();
}

// ─── CLOSE ON BACKDROP ────────────────────────────────────────────────────────
// Modais com formulário NÃO fecham por clique fora — apenas pelo botão ✕
// Somente modais de leitura/painel fecham pelo backdrop:
[
  ['modal-drive', closeDrivePanel],
  ['modal-client-detail', closeClientDetail],
].forEach(([id, fn]) => {
  const el = document.getElementById(id);
  if (el) el.addEventListener('click', e => { if (e.target === el) fn(); });
});
// Pressionar Escape fecha apenas o modal de detalhes (não formulários)
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  if (document.getElementById('modal-client-detail')?.classList.contains('open')) closeClientDetail();
  if (document.getElementById('modal-drive')?.classList.contains('open')) closeDrivePanel();
});

// ─── FICHA DE MEMBRO ──────────────────────────────────────────────────────────
function openMemberFicha(key) {
  memberFichaTarget = key;
  const m = teamMembers.find(x => x.key === key) || {};
  const f = memberFichas[key] || {};
  document.getElementById('mf-modal-title').textContent = `📋 Ficha — ${m.label || key}`;
  // Geral
  document.getElementById('mf-nome').value = f.nome || m.label || '';
  document.getElementById('mf-funcao').value = f.funcao || m.role || '';
  document.getElementById('mf-email').value = f.email || '';
  document.getElementById('mf-whatsapp').value = f.whatsapp || '';
  document.getElementById('mf-social').value = f.social || '';
  document.getElementById('mf-inicio').value = f.inicio || '';
  document.getElementById('mf-obs').value = f.obs || '';
  // Contrato
  document.getElementById('mf-tipo-contrato').value = f.tipoContrato || 'PJ Fixo';
  document.getElementById('mf-valor').value = f.valor || '';
  document.getElementById('mf-dia-pag').value = f.diaPag || '';
  document.getElementById('mf-status').value = f.status || 'Ativo';
  document.getElementById('mf-contrato-inicio').value = f.contratoInicio || '';
  document.getElementById('mf-contrato-fim').value = f.contratoFim || '';
  document.getElementById('mf-link-contrato').value = f.linkContrato || '';
  document.getElementById('mf-notas-contrato').value = f.notasContrato || '';
  // Entregas
  document.getElementById('mf-entregas').value = f.entregas || '';
  document.getElementById('mf-ferramentas').value = f.ferramentas || '';
  document.getElementById('mf-pontos-fortes').value = f.pontosFortes || '';
  document.getElementById('mf-pontos-melhoria').value = f.pontosMelhoria || '';
  document.getElementById('mf-avaliacao').value = f.avaliacao || '';
  // Reset tabs
  switchFichaTab('geral', document.querySelector('.member-ficha-tab'));
  document.getElementById('modal-member-ficha').classList.add('open');
}

function closeMemberFicha() {
  document.getElementById('modal-member-ficha').classList.remove('open');
  memberFichaTarget = null;
}

function switchFichaTab(tab, el) {
  document.querySelectorAll('.member-ficha-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.member-ficha-panel').forEach(p => p.classList.remove('active'));
  if (el) el.classList.add('active');
  else {
    const tabs = document.querySelectorAll('.member-ficha-tab');
    const idx = ['geral','contrato','entregas'].indexOf(tab);
    if (tabs[idx]) tabs[idx].classList.add('active');
  }
  const panel = document.getElementById('mf-panel-' + tab);
  if (panel) panel.classList.add('active');
}

function saveMemberFicha() {
  if (!memberFichaTarget) return;
  memberFichas[memberFichaTarget] = {
    nome: document.getElementById('mf-nome').value.trim(),
    funcao: document.getElementById('mf-funcao').value.trim(),
    email: document.getElementById('mf-email').value.trim(),
    whatsapp: document.getElementById('mf-whatsapp').value.trim(),
    social: document.getElementById('mf-social').value.trim(),
    inicio: document.getElementById('mf-inicio').value,
    obs: document.getElementById('mf-obs').value.trim(),
    tipoContrato: document.getElementById('mf-tipo-contrato').value,
    valor: document.getElementById('mf-valor').value.trim(),
    diaPag: document.getElementById('mf-dia-pag').value,
    status: document.getElementById('mf-status').value,
    contratoInicio: document.getElementById('mf-contrato-inicio').value,
    contratoFim: document.getElementById('mf-contrato-fim').value,
    linkContrato: document.getElementById('mf-link-contrato').value.trim(),
    notasContrato: document.getElementById('mf-notas-contrato').value.trim(),
    entregas: document.getElementById('mf-entregas').value.trim(),
    ferramentas: document.getElementById('mf-ferramentas').value.trim(),
    pontosFortes: document.getElementById('mf-pontos-fortes').value.trim(),
    pontosMelhoria: document.getElementById('mf-pontos-melhoria').value.trim(),
    avaliacao: document.getElementById('mf-avaliacao').value,
  };
  // Sync label/role back to teamMembers if changed
  const m = teamMembers.find(x => x.key === memberFichaTarget);
  if (m) {
    const nomeSalvo = memberFichas[memberFichaTarget].nome;
    const funcaoSalva = memberFichas[memberFichaTarget].funcao;
    if (nomeSalvo) m.label = nomeSalvo;
    if (funcaoSalva) m.role = funcaoSalva;
  }
  saveState();
  renderTeamMembersModal();
  renderTeamNav();
  closeMemberFicha();
}

// Update renderTeamMembersModal to show ficha button
function renderTeamMembersModal() {
  const isAdmin = window.currentRole === 'admin';
  const allUsers = JSON.parse(localStorage.getItem('dc_all_users') || '[]');
  document.getElementById('team-members-list').innerHTML = teamMembers.map(m => {
    const f = memberFichas[m.key] || {};
    const statusColor = { Ativo:'var(--green)', Férias:'var(--yellow)', Afastado:'var(--orange)', Inativo:'var(--text-muted)' }[f.status] || 'var(--text-muted)';
    // Tenta encontrar o usuário Firebase pelo nome para pegar a foto de perfil
    const fbUser = allUsers.find(u => u.name && u.name.toLowerCase() === m.label.toLowerCase());
    const avatarHtml = (fbUser?.profilePhoto)
      ? `<img src="${fbUser.profilePhoto}" style="width:32px;height:32px;border-radius:50%;object-fit:cover;flex-shrink:0">`
      : `<span class="mp-icon" style="width:32px;height:32px;border-radius:50%;background:var(--accent-grad);display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;color:#fff;flex-shrink:0">${(m.label||'?')[0].toUpperCase()}</span>`;
    return `<div class="member-pill">
      ${avatarHtml}
      <div style="flex:1;min-width:0">
        <div class="mp-label">${m.label}</div>
        <div class="mp-role">${f.funcao || m.role || 'Membro'}${f.status ? ` · <span style="color:${statusColor};font-size:10px">${f.status}</span>` : ''}</div>
      </div>
      <button class="btn btn-ghost" style="font-size:11px;padding:4px 8px;margin-right:4px" onclick="verPerfilMembro('${fbUser?.uid || ''}','${m.key}')">👤</button>
      ${isAdmin ? `<button class="btn btn-ghost" style="font-size:11px;padding:4px 10px;margin-right:4px" onclick="openMemberFicha('${m.key}')">📋 Ficha</button>` : ''}
      <button class="mp-del" onclick="removeTeamMember('${m.key}')" title="Remover">✕</button>
    </div>`;
  }).join('') || '<div style="font-size:12px;color:var(--text-muted);text-align:center;padding:16px">Nenhum membro cadastrado.</div>';
}

// ─── PROSPECÇÃO ───────────────────────────────────────────────────────────────
function renderProspeccao() {
  const hoje = new Date().toISOString().split('T')[0];
  const total = prospLeads.length;
  const responderam = prospLeads.filter(l => l.status === 'Respondeu' || l.status === 'Agendou').length;
  const agendaram = prospLeads.filter(l => l.status === 'Agendou').length;
  const taxa = total > 0 ? ((responderam/total)*100).toFixed(0) : 0;
  const qualificados = prospLeads.filter(l => l.status === 'Qualificado').length;
  const fechados = prospLeads.filter(l => l.status === 'Fechado').length;

  if (!window._prspSelectedIds) window._prspSelectedIds = new Set();

  const statusClass = { 'Abordado':'prosp-abordado','Respondeu':'prosp-respondeu','Agendou':'prosp-agendou','Ignorou':'prosp-ignorou','Não quis':'prosp-nao-quis','Qualificado':'prosp-qualificado','Fechado':'prosp-fechado','Em negociação':'prosp-negociacao','Perdido':'prosp-perdido' };

  // Follow-up alert banner
  const followupsVencidos = prospLeads.filter(l => l.followup && l.followup <= hoje && l.followup !== '');
  let followupBanner = '';
  if (followupsVencidos.length > 0) {
    followupBanner = `<div style="background:rgba(244,196,48,.12);border:1px solid rgba(244,196,48,.3);border-radius:10px;padding:12px 16px;margin-bottom:16px;display:flex;align-items:center;gap:10px">
      <span style="font-size:18px">🔔</span>
      <div>
        <div style="font-weight:600;color:var(--yellow);font-size:13px">${followupsVencidos.length} follow-up${followupsVencidos.length>1?'s':''} pendente${followupsVencidos.length>1?'s':''}!</div>
        <div style="font-size:11.5px;color:var(--text-secondary);margin-top:2px">${followupsVencidos.slice(0,3).map(l=>`<strong>${l.nome}</strong> (${fmtDate(l.followup)})`).join(', ')}${followupsVencidos.length>3?` e mais ${followupsVencidos.length-3}...`:''}</div>
      </div>
      <button class="btn btn-ghost" style="margin-left:auto;font-size:11px;padding:4px 10px;border-color:var(--yellow);color:var(--yellow)" onclick="window._prspFilterFollowup=true;renderProspeccao()">Ver todos</button>
    </div>`;
  }

  const selectedCount = window._prspSelectedIds.size;
  const bulkBar = selectedCount > 0 ? `
  <div style="background:var(--bg-card);border:1px solid var(--accent);border-radius:10px;padding:10px 16px;margin-bottom:12px;display:flex;align-items:center;gap:10px;flex-wrap:wrap">
    <span style="font-weight:600;font-size:13px;color:var(--accent)">${selectedCount} lead${selectedCount!==1?'s':''} selecionado${selectedCount!==1?'s':''}</span>
    <button class="btn btn-danger" style="padding:4px 12px;font-size:11px" onclick="bulkDeleteLeads()">🗑 Excluir selecionados</button>
    <select onchange="bulkUpdateLeadStatus(this.value);this.value=''" style="background:var(--bg-base);border:1px solid var(--border);border-radius:6px;color:var(--text-primary);font-family:var(--font);font-size:11px;padding:5px 8px;outline:none">
      <option value="">Alterar status em massa...</option>
      <option value="Abordado">Abordado</option><option value="Respondeu">Respondeu</option><option value="Agendou">Agendou</option><option value="Em negociação">Em negociação</option><option value="Qualificado">Qualificado</option><option value="Fechado">Fechado</option><option value="Ignorou">Ignorou</option><option value="Não quis">Não quis</option><option value="Perdido">Perdido</option>
    </select>
    <button class="btn btn-ghost" style="padding:4px 10px;font-size:11px;margin-left:auto" onclick="window._prspSelectedIds=new Set();renderProspeccao()">✕ Limpar seleção</button>
  </div>` : '';

  let html = followupBanner + `
  <div class="prosp-stats">
    <div class="prosp-stat"><div class="prosp-stat-label">Total de leads</div><div class="prosp-stat-val" style="color:var(--blue)">${total}</div></div>
    <div class="prosp-stat"><div class="prosp-stat-label">Responderam</div><div class="prosp-stat-val" style="color:var(--green)">${responderam}</div></div>
    <div class="prosp-stat"><div class="prosp-stat-label">Agendaram</div><div class="prosp-stat-val" style="color:var(--purple)">${agendaram}</div></div>
    <div class="prosp-stat"><div class="prosp-stat-label">Qualificados</div><div class="prosp-stat-val" style="color:var(--green)">${qualificados}</div></div>
    <div class="prosp-stat"><div class="prosp-stat-label">Fechados 🏆</div><div class="prosp-stat-val" style="color:var(--accent)">${fechados}</div></div>
    <div class="prosp-stat"><div class="prosp-stat-label">Taxa de resposta</div><div class="prosp-stat-val" style="color:${taxa>=20?'var(--green)':'var(--orange)'}">${taxa}%</div></div>
  </div>
  <div class="toolbar" style="margin-bottom:12px;flex-wrap:wrap;gap:8px">
    <button class="btn btn-primary" onclick="openPrspModal(null)">+ Novo lead</button>
    <button class="btn btn-ghost" onclick="exportProspCSV()" title="Exportar para planilha">⬇️ Exportar CSV</button>
    <label class="btn btn-ghost" style="cursor:pointer;position:relative" title="Importar leads de planilha CSV">
      ⬆️ Importar CSV
      <input type="file" accept=".csv" style="position:absolute;inset:0;opacity:0;cursor:pointer" onchange="importProspCSV(this)">
    </label>
    <select onchange="filterPrspStatus(this.value)" id="prosp-status-select" style="background:var(--bg-card);border:1px solid var(--border);border-radius:8px;color:var(--text-primary);font-family:var(--font);font-size:12px;padding:7px 12px;outline:none">
      <option value="">Todos os status</option>
      <option value="Abordado">Abordado</option><option value="Respondeu">Respondeu</option><option value="Agendou">Agendou reunião</option><option value="Em negociação">Em negociação</option><option value="Qualificado">✅ Qualificado</option><option value="Fechado">🏆 Fechado</option><option value="Ignorou">Ignorou</option><option value="Não quis">Não quis</option><option value="Perdido">Perdido</option>
    </select>
    <input type="date" id="prosp-filter-date" onchange="renderProspeccao()" style="background:var(--bg-card);border:1px solid var(--border);border-radius:8px;color:var(--text-primary);font-family:var(--font);font-size:12px;padding:7px 12px;outline:none">
    <input type="text" id="prosp-search-wapp" placeholder="🔍 Nome ou WhatsApp..." oninput="window._prspSearchWapp=this.value;renderProspeccao()" value="${window._prspSearchWapp||''}" style="background:var(--bg-card);border:1px solid var(--border);border-radius:8px;color:var(--text-primary);font-family:var(--font);font-size:12px;padding:7px 12px;outline:none;min-width:200px">
    <button class="btn btn-ghost" style="font-size:11px" onclick="window._prspFilterStatus='';window._prspFilterFollowup=false;window._prspSearchWapp='';renderProspeccao()">Limpar filtro</button>
    ${window._prspFilterFollowup ? `<span style="background:rgba(244,196,48,.15);color:var(--yellow);border-radius:99px;padding:3px 10px;font-size:11px;font-weight:600">🔔 Follow-ups</span>` : ''}
  </div>
  ${bulkBar}`;

  // Filters
  const filterDate = document.getElementById('prosp-filter-date')?.value || '';
  const filterStatus = window._prspFilterStatus || '';
  const searchWapp = (window._prspSearchWapp || '').toLowerCase();
  let leads = [...prospLeads].filter(l => {
    if (filterDate && l.data !== filterDate) return false;
    if (filterStatus && l.status !== filterStatus) return false;
    if (window._prspFilterFollowup && (!l.followup || l.followup > hoje)) return false;
    if (searchWapp) {
      const wNum = (l.whatsapp||'').replace(/\D/g,'');
      if (!(l.nome||'').toLowerCase().includes(searchWapp) && !wNum.includes(searchWapp.replace(/\D/g,''))) return false;
    }
    return true;
  }).sort((a,b) => (b.data||'').localeCompare(a.data||''));

  const allLeadIds = leads.map(l => l.id);
  const allSelected = allLeadIds.length > 0 && allLeadIds.every(id => window._prspSelectedIds.has(id));

  if (leads.length === 0) {
    html += `<div style="text-align:center;padding:48px;color:var(--text-muted);font-size:13px">Nenhum lead encontrado.<br><br><button class="btn btn-primary" onclick="openPrspModal(null)">+ Registrar primeiro lead</button></div>`;
  } else {
    html += `<div class="prosp-table-wrap"><table class="prosp-table"><thead><tr>
      <th style="width:36px;text-align:center"><input type="checkbox" ${allSelected?'checked':''} title="Selecionar todos" onchange="prspToggleAll([${allLeadIds.join(',')}],this.checked)"></th>
      <th>Nome / Empresa</th><th>WhatsApp</th><th>Canal</th><th>Data</th><th>Follow-up</th><th>Status</th><th>⭐ Score</th><th>Nicho</th><th>Responsável</th><th>Links</th><th></th>
    </tr></thead><tbody>`;
    leads.forEach(l => {
      const sc = statusClass[l.status] || 'prosp-abordado';
      const isSelected = window._prspSelectedIds.has(l.id);
      const hasObs = l.obs || l.notas;
      const notasIcon = hasObs ? `<span title="${(l.obs||'').replace(/"/g,'&quot;')}" style="cursor:help;color:var(--text-muted)">📝</span>` : '';
      const followupStr = l.followup ? fmtDate(l.followup) : '—';
      const followupAlert = l.followup && l.followup <= hoje ? ' style="color:var(--yellow);font-weight:600"' : '';
      const wapp = l.whatsapp ? l.whatsapp.replace(/\D/g,'') : '';
      const wappLink = wapp ? `<a href="https://wa.me/55${wapp}" target="_blank" class="icon-btn" title="${l.whatsapp}" style="color:var(--green);text-decoration:none">📲</a>` : '—';
      const isFechado = l.status === 'Fechado';
      const isQualif = l.status === 'Qualificado';
      const rowBg = isFechado ? ' style="background:rgba(124,58,237,.05)"' : isQualif ? ' style="background:rgba(45,206,137,.04)"' : '';
      const socialLinks = (l.sociais||[]).filter(s=>s&&s.url).map(s=>`<a href="${s.url}" target="_blank" title="${s.net}" style="text-decoration:none;font-size:14px">${({'Instagram':'📸','Facebook':'👤','LinkedIn':'💼','TikTok':'🎵','YouTube':'▶️','Site':'🌐'})[s.net]||'🔗'}</a>`).join('');
      const mapsBtn = l.mapsLink ? `<a href="${l.mapsLink}" target="_blank" title="Google Maps" style="text-decoration:none;font-size:14px">🗺️</a>` : '';
      const linksCell = (socialLinks || mapsBtn) ? `<span style="display:flex;gap:3px;align-items:center">${socialLinks}${mapsBtn}${notasIcon}</span>` : notasIcon || '—';
      html += `<tr${rowBg}>
        <td style="text-align:center"><input type="checkbox" ${isSelected?'checked':''} onchange="prspToggleSelect(${l.id},this.checked)"></td>
        <td><strong>${l.nome||'—'}</strong></td>
        <td>${wappLink}</td>
        <td style="font-size:11px">${l.canal||'—'}</td>
        <td style="font-family:var(--mono);font-size:11px">${fmtDate(l.data)}</td>
        <td style="font-family:var(--mono);font-size:11px"${followupAlert}>${followupStr}</td>
        <td>
          <select class="prosp-status-badge ${sc}" onchange="changeLeadStatus(${l.id},this.value,this)" style="border:none;cursor:pointer;font-size:10px;font-weight:700;padding:3px 8px;border-radius:99px;outline:none;-webkit-appearance:auto;appearance:auto">
            ${['Abordado','Respondeu','Agendou','Em negociação','Qualificado','Fechado','Ignorou','Não quis','Perdido'].map(s=>`<option value="${s}"${l.status===s?' selected':''}>${s}</option>`).join('')}
          </select>
        </td>
        <td style="font-size:11px;color:var(--yellow)">${l.scoreGoogle||'—'}</td>
        <td style="color:var(--text-muted);font-size:11px">${l.nicho||'—'}</td>
        <td style="font-size:11.5px">${l.responsavel||'—'}</td>
        <td>${linksCell}</td>
        <td style="white-space:nowrap">
          <button class="icon-btn" onclick="openPrspModal(${l.id})">✏️</button>
          <button class="icon-btn" style="color:var(--red)" onclick="deletePrspLead(${l.id})">🗑</button>
        </td>
      </tr>`;
    });
    html += `</tbody></table></div>`;
  }

  document.getElementById('main-content').innerHTML = html;
  // Restore filter values after re-render
  const fdEl = document.getElementById('prosp-filter-date'); if (fdEl && filterDate) fdEl.value = filterDate;
  const fsEl = document.getElementById('prosp-status-select'); if (fsEl && filterStatus) fsEl.value = filterStatus;
}

function filterPrspStatus(val) { window._prspFilterStatus = val; renderProspeccao(); }

function changeLeadStatus(id, newStatus, selectEl) {
  const lead = prospLeads.find(x => x.id === id);
  if (!lead) return;
  lead.status = newStatus;
  // Immediately update the select's visual class without full re-render
  if (selectEl) {
    const scMap = {'Abordado':'prosp-abordado','Respondeu':'prosp-respondeu','Agendou':'prosp-agendou','Em negociação':'prosp-negociacao','Qualificado':'prosp-qualificado','Fechado':'prosp-fechado','Ignorou':'prosp-ignorou','Não quis':'prosp-nao-quis','Perdido':'prosp-perdido'};
    selectEl.className = 'prosp-status-badge ' + (scMap[newStatus] || 'prosp-abordado');
    // Also update the row background if needed
    const row = selectEl.closest('tr');
    if (row) {
      if (newStatus === 'Fechado') row.style.background = 'rgba(124,58,237,.05)';
      else if (newStatus === 'Qualificado') row.style.background = 'rgba(45,206,137,.04)';
      else row.style.background = '';
    }
  }
  saveState();
}

function prspToggleSelect(id, checked) {
  if (!window._prspSelectedIds) window._prspSelectedIds = new Set();
  if (checked) window._prspSelectedIds.add(id);
  else window._prspSelectedIds.delete(id);
  renderProspeccao();
}

function prspToggleAll(ids, checked) {
  if (!window._prspSelectedIds) window._prspSelectedIds = new Set();
  ids.forEach(id => { if (checked) window._prspSelectedIds.add(id); else window._prspSelectedIds.delete(id); });
  renderProspeccao();
}

function bulkDeleteLeads() {
  if (!window._prspSelectedIds || window._prspSelectedIds.size === 0) return;
  if (!confirm(`Excluir ${window._prspSelectedIds.size} lead(s)? Esta ação não pode ser desfeita.`)) return;
  prospLeads = prospLeads.filter(l => !window._prspSelectedIds.has(l.id));
  window._prspSelectedIds = new Set();
  saveState(); renderProspeccao();
}

function bulkUpdateLeadStatus(newStatus) {
  if (!newStatus || !window._prspSelectedIds || window._prspSelectedIds.size === 0) return;
  prospLeads.forEach(l => { if (window._prspSelectedIds.has(l.id)) l.status = newStatus; });
  saveState(); renderProspeccao();
}


// ─── GOOGLE DRIVE PANEL ───────────────────────────────────────────────────────
const DRIVE_API = 'https://www.googleapis.com/drive/v3';

function _driveToken() {
  return window._googleAccessToken || localStorage.getItem('dc_drive_token') || null;
}

function _getDriveLinks() {
  return JSON.parse(localStorage.getItem('dc_drive_links_v2') || '[]');
}
function _setDriveLinks(links) {
  localStorage.setItem('dc_drive_links_v2', JSON.stringify(links));
}

function extractDriveFolderId(url) {
  if (!url) return null;
  const m = url.match(/\/folders\/([a-zA-Z0-9_-]+)/);
  if (m) return m[1];
  const m2 = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (m2) return m2[1];
  // raw ID (no slashes, 25-50 chars)
  if (/^[a-zA-Z0-9_-]{25,50}$/.test(url.trim())) return url.trim();
  return null;
}

function openDrivePanel() {
  document.getElementById('modal-drive').classList.add('open');
  renderDrivePanel();
}
function closeDrivePanel() {
  document.getElementById('modal-drive').classList.remove('open');
}

function renderDrivePanel() {
  const el = document.getElementById('drive-panel-content');
  if (!el) return;
  const token = _driveToken();
  const links = _getDriveLinks();

  const connectSection = '';

  const addSection = `
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:var(--text-muted);margin-bottom:8px">Vincular pasta de cliente</div>
    <div style="display:flex;gap:8px;align-items:flex-end;margin-bottom:16px;flex-wrap:wrap">
      <div style="flex:1;min-width:160px">
        <label style="font-size:11px;color:var(--text-muted);display:block;margin-bottom:4px">Nome do cliente / projeto</label>
        <input id="drive-link-name" type="text" placeholder="ex: Clínica Aura Bem"
          style="width:100%;background:var(--bg-base);border:1px solid var(--border);border-radius:8px;color:var(--text-primary);font-family:var(--font);font-size:13px;padding:7px 10px;outline:none;box-sizing:border-box"
          list="drive-clients-list">
        <datalist id="drive-clients-list">${clientsData.map(c=>`<option value="${c.nome||c.empresa||''}"></option>`).join('')}</datalist>
      </div>
      <div style="flex:2;min-width:200px">
        <label style="font-size:11px;color:var(--text-muted);display:block;margin-bottom:4px">Link da pasta no Google Drive</label>
        <input id="drive-link-url" type="url" placeholder="https://drive.google.com/drive/folders/..."
          style="width:100%;background:var(--bg-base);border:1px solid var(--border);border-radius:8px;color:var(--text-primary);font-family:var(--font);font-size:13px;padding:7px 10px;outline:none;box-sizing:border-box">
      </div>
      <button class="btn btn-primary" style="white-space:nowrap" onclick="driveSaveLink()">💾 Salvar</button>
    </div>`;

  const savedSection = links.length === 0
    ? `<div style="font-size:12px;color:var(--text-muted);text-align:center;padding:16px">Nenhuma pasta vinculada ainda.</div>`
    : `<div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:var(--text-muted);margin-bottom:8px">Pastas vinculadas</div>` +
      links.map((lk, i) => `
      <div style="background:var(--bg-base);border:1px solid var(--border);border-radius:10px;margin-bottom:8px;overflow:hidden">
        <div style="display:flex;align-items:center;gap:10px;padding:10px 12px">
          <span style="font-size:18px">📁</span>
          <div style="flex:1;overflow:hidden">
            <div style="font-size:13px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${lk.name}</div>
            <div style="font-size:10px;color:var(--text-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${lk.url}</div>
          </div>
          <a href="${lk.url}" target="_blank" class="btn btn-ghost" style="font-size:11px;padding:4px 10px;text-decoration:none;white-space:nowrap">📂 Abrir no Drive</a>
          <button class="icon-btn" style="color:var(--red)" onclick="driveRemoveLink(${i})">✕</button>
        </div>
        <div id="drive-files-${i}" style="display:none;padding:0 12px 10px"></div>
      </div>`).join('');

  el.innerHTML = connectSection + addSection + savedSection;
}

async function driveConnect() {
  const el = document.getElementById('drive-panel-content');
  if (el) el.innerHTML = '<div style="padding:24px;text-align:center;color:var(--text-muted)">🔄 Aguardando autorização do Google...</div>';
  const ok = await window.refreshDriveToken();
  if (ok) {
    renderDrivePanel();
  } else {
    renderDrivePanel();
    setTimeout(() => alert('Não foi possível conectar ao Drive. Tente novamente.'), 50);
  }
}

async function driveReconnect() {
  await driveConnect();
}

function driveSaveLink() {
  const name = (document.getElementById('drive-link-name')?.value || '').trim();
  const url = (document.getElementById('drive-link-url')?.value || '').trim();
  if (!url) { alert('Cole o link da pasta do Google Drive.'); return; }
  if (!url.includes('drive.google.com')) { alert('O link deve ser do Google Drive.'); return; }
  const folderId = extractDriveFolderId(url);
  const links = _getDriveLinks();
  const matchedClient = clientsData.find(c => (c.nome||c.empresa||'').toLowerCase() === (name||'').toLowerCase().trim());
  links.push({ name: name || 'Pasta sem nome', url, folderId, clientId: matchedClient?.id || null });
  _setDriveLinks(links);
  renderDrivePanel();
}

function driveRemoveLink(idx) {
  const links = _getDriveLinks();
  links.splice(idx, 1);
  _setDriveLinks(links);
  renderDrivePanel();
}

async function driveShowFiles(idx) {
  const panel = document.getElementById(`drive-files-${idx}`);
  if (!panel) return;
  if (panel.style.display !== 'none') { panel.style.display = 'none'; return; }
  panel.style.display = 'block';
  panel.innerHTML = '<div style="font-size:12px;color:var(--text-muted);padding:8px 0">Carregando arquivos...</div>';

  const links = _getDriveLinks();
  const lk = links[idx];
  if (!lk || !lk.folderId) { panel.innerHTML = '<div style="font-size:12px;color:var(--red)">ID da pasta não encontrado.</div>'; return; }

  const files = await driveListFiles(lk.folderId);
  if (files === null) {
    panel.innerHTML = `<div style="font-size:12px;color:var(--red);padding:6px 0;line-height:1.6">
      ❌ <strong>Sessão do Drive expirada.</strong><br>
      <span style="color:var(--text-muted)">Reconecte para renovar o acesso e ver os arquivos.</span><br>
      <button class="btn btn-primary" style="font-size:11px;margin-top:8px" onclick="_driveReconnectAndShow(${idx})">🔄 Reconectar e ver arquivos</button>
    </div>`;
    return;
  }
  if (files.length === 0) {
    panel.innerHTML = '<div style="font-size:12px;color:var(--text-muted);padding:4px 0">Pasta vazia.</div>';
    return;
  }
  panel.innerHTML = `
    <div style="margin-bottom:8px">
      <div style="display:flex;gap:6px">
        <input id="drive-search-${idx}" type="text" placeholder="Buscar arquivos..." oninput="driveSearchFiles(${idx})"
          style="flex:1;background:var(--bg-card);border:1px solid var(--border);border-radius:6px;color:var(--text-primary);font-family:var(--font);font-size:12px;padding:5px 9px;outline:none">
      </div>
    </div>
    <div id="drive-file-list-${idx}" style="max-height:220px;overflow-y:auto">${renderDriveFileList(files)}</div>`;
  panel._allFiles = files;
}

async function _driveReconnectAndShow(idx) {
  const panel = document.getElementById(`drive-files-${idx}`);
  if (panel) panel.innerHTML = '<div style="font-size:12px;color:var(--text-muted);padding:8px 0">🔄 Reconectando ao Drive...</div>';
  const ok = await window.refreshDriveToken();
  if (ok) {
    renderDrivePanel();
    setTimeout(() => driveShowFiles(idx), 300);
  } else {
    if (panel) panel.innerHTML = '<div style="font-size:12px;color:var(--red);padding:6px 0">❌ Falha ao reconectar. Verifique se o popup foi bloqueado pelo navegador e tente de novo.</div>';
  }
}

async function driveListFiles(folderId) {
  const token = _driveToken();
  if (!token) return null;
  try {
    const q = encodeURIComponent(`'${folderId}' in parents and trashed=false`);
    const fields = encodeURIComponent('files(id,name,mimeType,size,modifiedTime,webViewLink,iconLink)');
    const res = await fetch(`${DRIVE_API}/files?q=${q}&fields=${fields}&orderBy=name&pageSize=100`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    if (res.status === 401) {
      // Token expirou — limpa e retorna null para o usuário reconectar manualmente
      window._googleAccessToken = null;
      localStorage.removeItem('dc_drive_token');
      return null;
    }
    if (!res.ok) return null;
    const data = await res.json();
    return data.files || [];
  } catch(e) { console.error('Drive list error:', e); return null; }
}

async function driveSearchFiles(idx) {
  const panel = document.getElementById(`drive-files-${idx}`);
  const input = document.getElementById(`drive-search-${idx}`);
  const listEl = document.getElementById(`drive-file-list-${idx}`);
  if (!panel || !input || !listEl) return;
  const q = input.value.trim().toLowerCase();
  const allFiles = panel._allFiles || [];
  const filtered = q ? allFiles.filter(f => f.name.toLowerCase().includes(q)) : allFiles;
  listEl.innerHTML = filtered.length ? renderDriveFileList(filtered) : '<div style="font-size:11px;color:var(--text-muted);padding:4px">Nenhum arquivo encontrado.</div>';
}

function renderDriveFileList(files) {
  const iconFor = (mime) => {
    if (mime === 'application/vnd.google-apps.folder') return '📁';
    if (mime.includes('image')) return '🖼️';
    if (mime.includes('video')) return '🎬';
    if (mime.includes('pdf')) return '📄';
    if (mime.includes('spreadsheet') || mime.includes('excel')) return '📊';
    if (mime.includes('document') || mime.includes('word')) return '📝';
    if (mime.includes('presentation') || mime.includes('powerpoint')) return '📊';
    if (mime.includes('zip') || mime.includes('rar')) return '🗜️';
    return '📎';
  };
  return files.map(f => `
    <div style="display:flex;align-items:center;gap:8px;padding:5px 4px;border-bottom:1px solid var(--border);font-size:12px">
      <span style="font-size:14px;flex-shrink:0">${iconFor(f.mimeType)}</span>
      <div style="flex:1;overflow:hidden;white-space:nowrap;text-overflow:ellipsis" title="${f.name}">${f.name}</div>
      <div style="font-size:10px;color:var(--text-muted);flex-shrink:0;margin-right:6px">${f.size ? formatDriveSize(+f.size) : ''}</div>
      ${f.webViewLink ? `<a href="${f.webViewLink}" target="_blank" style="font-size:10px;color:var(--accent);text-decoration:none;flex-shrink:0">Abrir</a>` : ''}
    </div>`).join('');
}

function formatDriveSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1048576) return (bytes/1024).toFixed(1) + ' KB';
  if (bytes < 1073741824) return (bytes/1048576).toFixed(1) + ' MB';
  return (bytes/1073741824).toFixed(2) + ' GB';
}

// legacy aliases kept so any old references don't crash
function saveDriveLink() { driveSaveLink(); }
function removeDriveLink(idx) { driveRemoveLink(idx); }
function openDriveFolderSaved() {
  const links = _getDriveLinks();
  if (links.length === 1) window.open(links[0].url, '_blank');
  else if (links.length > 1) alert('Use o botão "Abrir" ao lado da pasta desejada.');
  else alert('Nenhuma pasta vinculada ainda.');
}



function addPrspSocialRow() {
  const container = document.getElementById('pl-social-rows');
  if (!container) return;
  const div = document.createElement('div');
  div.style.cssText = 'display:flex;gap:6px;align-items:center';
  div.innerHTML = `<select style="background:var(--bg-base);border:1px solid var(--border);border-radius:6px;color:var(--text-primary);font-family:var(--font);font-size:12px;padding:5px 8px;outline:none;width:120px" class="pl-social-net">
    <option value="Instagram">Instagram</option><option value="Facebook">Facebook</option><option value="LinkedIn">LinkedIn</option><option value="TikTok">TikTok</option><option value="YouTube">YouTube</option><option value="Site">Site</option>
  </select>
  <input type="url" placeholder="https://..." class="pl-social-url" style="flex:1;background:var(--bg-base);border:1px solid var(--border);border-radius:6px;color:var(--text-primary);font-family:var(--font);font-size:12px;padding:5px 8px;outline:none">
  <button class="icon-btn" style="color:var(--red)" onclick="this.parentElement.remove()" title="Remover">✕</button>`;
  container.appendChild(div);
}

function openPrspModal(id) {
  prspModalTarget = id;
  const isEdit = id !== null;
  document.getElementById('prosp-lead-title').textContent = isEdit ? 'Editar Lead' : '+ Novo Lead';
  let l = { nome:'', whatsapp:'', canal:'Instagram', data: new Date().toISOString().split('T')[0], status:'Abordado', nicho:'', responsavel:'', followup:'', obs:'', notas:'', scoreGoogle:'', mapsLink:'', sociais:[] };
  if (isEdit) { const found = prospLeads.find(x => x.id === id); if (found) l = {...l, ...found}; }
  document.getElementById('pl-nome').value = l.nome||'';
  document.getElementById('pl-whatsapp').value = l.whatsapp||'';
  document.getElementById('pl-canal').value = l.canal||'Instagram';
  document.getElementById('pl-data').value = l.data||'';
  document.getElementById('pl-status').value = l.status||'Abordado';
  document.getElementById('pl-nicho').value = l.nicho||'';
  document.getElementById('pl-responsavel').value = l.responsavel||'';
  document.getElementById('pl-followup').value = l.followup||'';
  document.getElementById('pl-obs').value = l.obs||'';
  document.getElementById('pl-notas').value = l.notas||'';
  document.getElementById('pl-score-google').value = l.scoreGoogle||'';
  document.getElementById('pl-maps-link').value = l.mapsLink||'';
  // Reset social rows
  const socialContainer = document.getElementById('pl-social-rows');
  socialContainer.innerHTML = '';
  const sociais = l.sociais && l.sociais.length ? l.sociais : [{net:'Instagram', url:''}];
  sociais.forEach((s, i) => {
    const div = document.createElement('div');
    div.style.cssText = 'display:flex;gap:6px;align-items:center';
    const removeBtn = i === 0 ? `<button class="icon-btn" onclick="addPrspSocialRow()" title="Adicionar rede">➕</button>` : `<button class="icon-btn" style="color:var(--red)" onclick="this.parentElement.remove()" title="Remover">✕</button>`;
    div.innerHTML = `<select style="background:var(--bg-base);border:1px solid var(--border);border-radius:6px;color:var(--text-primary);font-family:var(--font);font-size:12px;padding:5px 8px;outline:none;width:120px" class="pl-social-net">
      <option value="Instagram"${s.net==='Instagram'?' selected':''}>Instagram</option><option value="Facebook"${s.net==='Facebook'?' selected':''}>Facebook</option><option value="LinkedIn"${s.net==='LinkedIn'?' selected':''}>LinkedIn</option><option value="TikTok"${s.net==='TikTok'?' selected':''}>TikTok</option><option value="YouTube"${s.net==='YouTube'?' selected':''}>YouTube</option><option value="Site"${s.net==='Site'?' selected':''}>Site</option>
    </select>
    <input type="url" placeholder="https://..." class="pl-social-url" value="${s.url||''}" style="flex:1;background:var(--bg-base);border:1px solid var(--border);border-radius:6px;color:var(--text-primary);font-family:var(--font);font-size:12px;padding:5px 8px;outline:none">
    ${removeBtn}`;
    socialContainer.appendChild(div);
  });
  document.getElementById('modal-prosp-lead').classList.add('open');
}
function closePrspModal() { document.getElementById('modal-prosp-lead').classList.remove('open'); prspModalTarget = null; }

function savePrspLead() {
  const isEdit = prspModalTarget !== null;
  const sociais = Array.from(document.querySelectorAll('#pl-social-rows > div')).map(row => ({
    net: row.querySelector('.pl-social-net')?.value || '',
    url: row.querySelector('.pl-social-url')?.value.trim() || ''
  })).filter(s => s.url);
  const item = {
    id: isEdit ? prspModalTarget : Date.now(),
    nome: document.getElementById('pl-nome').value.trim() || 'Sem nome',
    whatsapp: document.getElementById('pl-whatsapp').value.trim(),
    canal: document.getElementById('pl-canal').value,
    data: document.getElementById('pl-data').value,
    status: document.getElementById('pl-status').value,
    nicho: document.getElementById('pl-nicho').value.trim(),
    responsavel: document.getElementById('pl-responsavel').value.trim(),
    followup: document.getElementById('pl-followup').value,
    obs: document.getElementById('pl-obs').value.trim(),
    notas: document.getElementById('pl-notas').value.trim(),
    scoreGoogle: document.getElementById('pl-score-google').value,
    mapsLink: document.getElementById('pl-maps-link').value.trim(),
    sociais,
  };
  if (isEdit) { const idx = prospLeads.findIndex(x => x.id === prspModalTarget); if(idx>=0) prospLeads[idx]=item; }
  else prospLeads.push(item);
  saveState(); closePrspModal(); renderProspeccao();
}

function deletePrspLead(id) {
  if (!confirm('Remover este lead?')) return;
  prospLeads = prospLeads.filter(x => x.id !== id);
  saveState(); renderProspeccao();
}

function exportProspCSV() {
  if (!prospLeads.length) { alert('Nenhum lead para exportar.'); return; }
  const filterDate = document.getElementById('prosp-filter-date')?.value || '';
  const filterStatus = window._prspFilterStatus || '';
  let leads = prospLeads.filter(l => {
    if (filterDate && l.data !== filterDate) return false;
    if (filterStatus && l.status !== filterStatus) return false;
    return true;
  });
  const headers = ['Nome/Empresa','WhatsApp (link wa.me)','Canal','Data','Status','Follow-up','Nicho','Responsável','Score Google','Link Google Maps','Instagram','Facebook','LinkedIn','Site','Observação','Anotações'];
  const esc = v => `"${(v||'').replace(/"/g,'""')}"`;
  const rows = leads.map(l => {
    const wapp = (l.whatsapp||'').replace(/\D/g,'');
    const wappLink = wapp ? `https://wa.me/55${wapp}` : '';
    const getSocial = net => (l.sociais||[]).find(s=>s.net===net)?.url||'';
    return [
      esc(l.nome), esc(wappLink), esc(l.canal), esc(l.data), esc(l.status), esc(l.followup),
      esc(l.nicho), esc(l.responsavel), esc(l.scoreGoogle||''), esc(l.mapsLink||''),
      esc(getSocial('Instagram')), esc(getSocial('Facebook')), esc(getSocial('LinkedIn')), esc(getSocial('Site')),
      esc(l.obs), esc(l.notas),
    ].join(',');
  });
  const csv = '\uFEFF' + [headers.join(','), ...rows].join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  const hoje = new Date().toISOString().split('T')[0];
  a.download = `leads_prospeccao_${hoje}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

function importProspCSV(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    const text = e.target.result.replace(/^\uFEFF/, ''); // remove BOM
    const lines = text.split('\n').filter(l => l.trim());
    if (lines.length < 2) { alert('Arquivo CSV vazio ou inválido.'); return; }
    // Parse header to detect column order
    const parseCSVLine = (line) => {
      const result = [];
      let inQuotes = false, cur = '';
      for (let i = 0; i < line.length; i++) {
        const ch = line[i];
        if (ch === '"') { inQuotes = !inQuotes; }
        else if (ch === ',' && !inQuotes) { result.push(cur.trim()); cur = ''; }
        else { cur += ch; }
      }
      result.push(cur.trim());
      return result;
    };
    const headers = parseCSVLine(lines[0]).map(h => h.toLowerCase().replace(/[^a-záéíóúã]/g,''));
    const getCol = (aliases) => {
      for (const a of aliases) { const idx = headers.findIndex(h => h.includes(a)); if (idx >= 0) return idx; }
      return -1;
    };
    const colNome = getCol(['nome','empresa','company','name']);
    const colWapp = getCol(['whatsapp','wapp','telefone','phone','celular','tel']);
    const colCanal = getCol(['canal','channel','origem','source']);
    const colData = getCol(['data','date','dia']);
    const colStatus = getCol(['status']);
    const colFollowup = getCol(['followup','follow','acompanhamento']);
    const colNicho = getCol(['nicho','segmento','setor','niche']);
    const colResp = getCol(['responsavel','responsável','atendente','vendedor']);
    const colObs = getCol(['observacao','observação','obs','nota','note']);
    const colNotas = getCol(['anotacao','anotações','anotacoes','notas']);

    let importados = 0, ignorados = 0;
    const hoje = new Date().toISOString().split('T')[0];
    for (let i = 1; i < lines.length; i++) {
      const cols = parseCSVLine(lines[i]);
      const nome = colNome >= 0 ? (cols[colNome]||'').replace(/^"|"$/g,'').trim() : '';
      if (!nome) { ignorados++; continue; }
      const item = {
        id: Date.now() + i,
        nome,
        whatsapp: colWapp >= 0 ? (cols[colWapp]||'').replace(/^"|"$/g,'').trim() : '',
        canal: colCanal >= 0 ? (cols[colCanal]||'').replace(/^"|"$/g,'').trim() || 'Outro' : 'Outro',
        data: colData >= 0 ? (cols[colData]||'').replace(/^"|"$/g,'').trim() || hoje : hoje,
        status: colStatus >= 0 ? (cols[colStatus]||'').replace(/^"|"$/g,'').trim() || 'Abordado' : 'Abordado',
        followup: colFollowup >= 0 ? (cols[colFollowup]||'').replace(/^"|"$/g,'').trim() : '',
        nicho: colNicho >= 0 ? (cols[colNicho]||'').replace(/^"|"$/g,'').trim() : '',
        responsavel: colResp >= 0 ? (cols[colResp]||'').replace(/^"|"$/g,'').trim() : '',
        obs: colObs >= 0 ? (cols[colObs]||'').replace(/^"|"$/g,'').trim() : '',
        notas: colNotas >= 0 ? (cols[colNotas]||'').replace(/^"|"$/g,'').trim() : '',
      };
      prospLeads.push(item);
      importados++;
    }
    saveState();
    renderProspeccao();
    alert(`✅ Importação concluída!\n${importados} lead${importados!==1?'s':''} importado${importados!==1?'s':''}${ignorados?' · '+ignorados+' linha(s) ignorada(s) (sem nome)':''}\n\nAs colunas são detectadas automaticamente. Certifique-se de ter uma coluna "Nome" ou "Empresa".`);
  };
  reader.onerror = () => alert('Erro ao ler o arquivo.');
  reader.readAsText(file, 'utf-8');
  input.value = ''; // reset input
}




// ─── USERS MODAL ──────────────────────────────────────────────────────────────
async function openUsersModal() {
  if (window.currentRole !== 'admin') { alert('Apenas Admins podem gerenciar usuários.'); return; }
  document.getElementById('modal-users').classList.add('open');
  await renderUsersList();
  await renderPreCadList();
}
function closeUsersModal() { document.getElementById('modal-users').classList.remove('open'); }

async function renderUsersList() {
  const container = document.getElementById('users-list-container');
  const allUsers = await window.loadAllUsers();
  if (!allUsers.length) {
    container.innerHTML = '<div style="text-align:center;padding:20px;color:var(--text-muted);font-size:12px">Nenhum usuário encontrado.</div>';
    return;
  }
  const roleLabel = { admin: '👑 Admin', gerente: '⭐ Gerente', membro: '👤 Membro' };
  const roleClass = { admin: 'role-admin', gerente: 'role-gerente', membro: 'role-membro' };
  container.innerHTML = `<table class="users-table">
    <thead><tr><th></th><th>Nome</th><th>E-mail</th><th>Cargo</th><th></th></tr></thead>
    <tbody>
      ${allUsers.map(u => `<tr>
        <td>${u.photo ? `<img class="user-photo" src="${u.photo}">` : `<div class="user-photo-placeholder">${(u.name||'?').charAt(0)}</div>`}</td>
        <td style="font-weight:600">${u.name || '—'}</td>
        <td style="color:var(--text-muted);font-size:11.5px">${u.email}</td>
        <td><span class="role-badge ${roleClass[u.role]}">${roleLabel[u.role] || u.role}</span></td>
        <td style="display:flex;gap:6px;align-items:center">
          ${u.uid !== window.currentUser?.uid ? `
          <select style="background:var(--bg-card2);border:1px solid var(--border);border-radius:6px;color:var(--text-primary);font-family:var(--font);font-size:11px;padding:4px 8px;cursor:pointer" onchange="changeUserRole('${u.uid}', this.value, this)">
            <option value="admin" ${u.role==='admin'?'selected':''}>👑 Admin</option>
            <option value="gerente" ${u.role==='gerente'?'selected':''}>⭐ Gerente</option>
            <option value="membro" ${u.role==='membro'?'selected':''}>👤 Membro</option>
          </select>
          <button onclick="removeUser('${u.uid}','${u.name||u.email}')" style="background:none;border:1px solid var(--red);color:var(--red);border-radius:6px;padding:3px 8px;font-size:11px;cursor:pointer" title="Remover acesso">🚫</button>
          ` : '<span style="font-size:11px;color:var(--text-muted)">Você</span>'}
        </td>
      </tr>`).join('')}
    </tbody>
  </table>`;
}

async function changeUserRole(uid, newRole, selectEl) {
  selectEl.disabled = true;
  const allUsers = await window.loadAllUsers();
  const u = allUsers.find(x => x.uid === uid);
  if (u) {
    u.role = newRole;
    await window.saveUserRole(uid, { ...u, role: newRole });
    await window.saveAllUsers(allUsers);
  }
  selectEl.disabled = false;
  await renderUsersList();
}

async function removeUser(uid, name) {
  if (!confirm(`Remover o acesso de "${name}"?\n\nEla será bloqueada imediatamente e não conseguirá entrar novamente a menos que seja pré-cadastrada novamente.`)) return;
  const allUsers = await window.loadAllUsers();
  const filtered = allUsers.filter(u => u.uid !== uid);
  await window.saveAllUsers(filtered);
  // Also remove from crm_users document so they can't bypass
  try { await window.saveUserRole(uid, null); } catch(e) {}
  await renderUsersList();
  alert(`✅ Acesso de "${name}" removido com sucesso.`);
}

// ─── PRÉ-CADASTRO DE USUÁRIOS ─────────────────────────────────────────────────
async function renderPreCadList() {
  const list = await window.loadPreCad();
  const el = document.getElementById('precad-list');
  if (!el) return;
  if (!list.length) { el.innerHTML = '<span>Nenhum pré-cadastro pendente.</span>'; return; }
  const roleLabel = { admin: '👑 Admin', gerente: '⭐ Gerente', membro: '👤 Membro' };
  el.innerHTML = list.map((p, i) => `
    <div style="display:flex;align-items:center;justify-content:space-between;padding:5px 0;border-bottom:1px solid var(--border)">
      <span style="color:var(--text-primary)">${p.email}</span>
      <span style="margin:0 8px">${roleLabel[p.role]||p.role}</span>
      <button onclick="removePreCad(${i})" style="background:none;border:none;color:var(--text-muted);cursor:pointer;font-size:14px">✕</button>
    </div>`).join('');
}

async function preCadastrarUsuario() {
  const email = document.getElementById('precad-email').value.trim().toLowerCase();
  const role = document.getElementById('precad-role').value;
  if (!email || !email.includes('@')) { alert('Digite um e-mail válido.'); return; }
  const list = await window.loadPreCad();
  if (list.find(p => p.email === email)) { alert('Este e-mail já está pré-cadastrado.'); return; }
  list.push({ email, role });
  await window.savePreCad(list);
  document.getElementById('precad-email').value = '';
  await renderPreCadList();
}

async function removePreCad(index) {
  const list = await window.loadPreCad();
  list.splice(index, 1);
  await window.savePreCad(list);
  await renderPreCadList();
}

// ─── AUTOCOMPLETE NOME NO CADASTRO DE CLIENTE ─────────────────────────────────
function onClientRegSearch(val) {
  const list = document.getElementById('c-nome-ac');
  const pulled = document.getElementById('c-nome-pulled');
  if (!list) return;
  list.style.display = 'none';
  list.innerHTML = '';
  if (pulled) pulled.style.display = 'none';
  if (!val || val.length < 1) return;

  // Build combined source: existing clients + financeiro contracts
  const sources = [];
  clientsData.forEach(c => { if (c.nome) sources.push({ nome: c.nome, empresa: c.empresa, origem: 'cliente', data: c }); });
  finState.forEach(f => { if (f.client && !sources.find(s => s.nome === f.client)) sources.push({ nome: f.client, empresa: f.service||'', origem: 'contrato', data: f }); });

  const matches = sources.filter(s =>
    s.nome.toLowerCase().includes(val.toLowerCase()) ||
    (s.empresa||'').toLowerCase().includes(val.toLowerCase())
  ).slice(0, 8);

  if (!matches.length) return;
  matches.forEach(s => {
    const div = document.createElement('div');
    div.className = 'autocomplete-item';
    const tag = s.origem === 'contrato' ? '<span style="font-size:9px;background:rgba(124,92,252,.15);color:var(--accent);padding:1px 5px;border-radius:4px;margin-left:4px">contrato</span>' : '<span style="font-size:9px;background:rgba(45,206,137,.12);color:var(--green);padding:1px 5px;border-radius:4px;margin-left:4px">cadastrado</span>';
    div.innerHTML = `<span class="ac-name">${s.nome}</span>${tag}<span class="ac-company">${s.empresa||''}</span>`;
    div.addEventListener('mousedown', e => { e.preventDefault(); selectClientRegSource(s); });
    list.appendChild(div);
  });
  list.style.display = 'block';
}

function selectClientRegSource(s) {
  const list = document.getElementById('c-nome-ac');
  const pulled = document.getElementById('c-nome-pulled');
  const pulledText = document.getElementById('c-nome-pulled-text');
  if (list) list.style.display = 'none';

  const set = (id, val) => { const el = document.getElementById(id); if (el && val) el.value = val; };
  set('c-nome', s.nome);

  if (s.origem === 'cliente') {
    // Pre-fill from existing client data
    const c = s.data;
    prefillClientForm(c);
    if (pulled && pulledText) {
      pulledText.textContent = `Dados puxados do cliente "${c.nome}" — complete o que falta.`;
      pulled.style.display = 'flex';
    }
  } else if (s.origem === 'contrato') {
    // Pre-fill from financeiro
    const f = s.data;
    set('c-nome', f.client);
    set('c-valor', f.valor);
    set('c-dia-pag', f.venc);
    set('c-inicio', f.start);
    set('c-fim', f.end);
    set('c-pay-status', f.paystatus);
    set('c-tipo-cont', f.tipo);
    if (pulled && pulledText) {
      pulledText.textContent = `Dados puxados do contrato "${f.client}" — complete o restante das etapas.`;
      pulled.style.display = 'flex';
    }
  }
}

document.addEventListener('click', e => {
  const list = document.getElementById('c-nome-ac');
  const input = document.getElementById('c-nome');
  if (list && input && !list.contains(e.target) && e.target !== input) list.style.display = 'none';
}, true);
const _origDeleteItem = deleteItem;
window.deleteItem = function(boardKey, groupId, itemId, e) {
  if (!window._canDelete) { alert('Seu cargo não permite deletar itens.'); return; }
  _origDeleteItem(boardKey, groupId, itemId, e);
};
const _origDeleteSubitem = deleteSubitem;
window.deleteSubitem = function(boardKey, groupId, itemId, subId, e) {
  if (!window._canDelete) { alert('Seu cargo não permite deletar itens.'); return; }
  _origDeleteSubitem(boardKey, groupId, itemId, subId, e);
};

// ─── INIT ─────────────────────────────────────────────────────────────────────
(async () => {
  // Apply saved theme immediately
  if (localStorage.getItem('dc_theme') === 'light') {
    document.body.classList.add('light');
    document.getElementById('theme-icon').textContent = '☀️';
    document.getElementById('theme-label').textContent = 'Escuro';
    _applyLogoTheme(true);
  }
  // Update sidebar user avatar initial
  window.addEventListener('firebase-ready', async () => {
    const av = document.getElementById('sidebar-user-avatar');
    if (av && window.currentUser) av.textContent = (window.currentUser.name||'?').charAt(0).toUpperCase();
    renderTeamNav();
    renderCRM();
    await loadState();
    // Sincroniza lista de usuários no localStorage para lookup de menções
    if (window.loadAllUsers) {
      window.loadAllUsers().then(users => {
        if (users && users.length) localStorage.setItem('dc_all_users', JSON.stringify(users));
      });
    }
    loadNotifications();
    loadLabels();
    checkDeadlineAlerts();   // #1 alerta de prazo
    checkRecurringTasks();   // #4 tarefas recorrentes
    checkWeeklySummary();    // #6 resumo semanal
    checkScheduledUpdates();
    // Ask for browser notification permission
    if ('Notification' in window && Notification.permission === 'default') {
      setTimeout(() => Notification.requestPermission(), 3000);
    }
    setInterval(checkScheduledUpdates, 60000);

    // ── Real-time: sincronização automática do CRM entre usuários ─────────
    if (window.subscribeMainData) {
      let _isFirstSnapshot = true;
      window.subscribeMainData(data => {
        if (_isFirstSnapshot) { _isFirstSnapshot = false; return; } // ignora carga inicial (já veio do loadState)
        if (data.state) state = data.state;
        if (data.finState) finState = data.finState;
        if (data.updatesData) updatesData = data.updatesData;
        if (data.teamMembers) teamMembers = data.teamMembers;
        if (data.prospLeads) prospLeads = data.prospLeads;
        if (data.clientsData) clientsData = data.clientsData;
        saveState();
        if (currentPage === 'crm') renderCRM();
        else if (currentPage === 'financeiro') renderFinanceiro();
        else if (currentPage === 'prospeccao') renderProspeccao();
        else if (currentPage === 'clients') renderClients();
      });
    }

    // ── Real-time: notificações instantâneas (substitui polling de 30s) ──
    const _uid = window.currentUser?.uid;
    if (window.subscribeNotifications && _uid) {
      let _notifFirst = true;
      window.subscribeNotifications(_uid, (firebaseNotifs) => {
        if (_notifFirst) { _notifFirst = false; }
        // Mescla notificações locais (que ainda não foram salvas no Firebase) com as do Firebase
        const fbIds = new Set(firebaseNotifs.map(n => n.id));
        const localOnly = _notifications.filter(n => !fbIds.has(n.id) && n._local);
        _notifications = [...localOnly, ...firebaseNotifs];
        updateNotifBadge();
        renderNotifPanel();
      });
    } else {
      // Fallback: polling a cada 30s
      loadFirebaseNotifications();
      setInterval(loadFirebaseNotifications, 30000);
    }
  });
})();

// ─── BRIEFINGS PAGE ───────────────────────────────────────────────────────────
const BRIEFING_SECTIONS = [
  { label: '01 — Identificação', fields: [
    { key: 'nome_cargo',  label: 'Nome e cargo de quem respondeu' },
    { key: 'empresa',     label: 'Empresa / Produto / Serviço' },
    { key: 'descricao',   label: 'Descrição do negócio' },
  ]},
  { label: '02 — Objetivo da Campanha', fields: [
    { key: 'objetivo_principal', label: 'Objetivo principal' },
    { key: 'acao_usuario',       label: 'Ação desejada do usuário' },
    { key: 'meta_quantitativa',  label: 'Meta quantitativa' },
    { key: 'etapa_funil',        label: 'Etapa do funil' },
  ]},
  { label: '03 — Histórico de Campanhas', fields: [
    { key: 'rodou_antes', label: 'Já rodou campanhas antes?' },
    { key: 'historico',   label: 'Plataformas, resultados e aprendizados' },
  ]},
  { label: '04 — Público-Alvo', fields: [
    { key: 'cliente_ideal', label: 'Cliente ideal' },
    { key: 'dor',           label: 'Dor / Problema mais urgente' },
    { key: 'ja_tentou',     label: 'O que já tentou antes' },
    { key: 'nao_compraria', label: 'O que faria não converter' },
  ]},
  { label: '05 — Proposta de Valor e Oferta', fields: [
    { key: 'beneficio', label: 'Principal benefício e diferencial' },
    { key: 'oferta',    label: 'O que está incluso na oferta' },
    { key: 'urgencia',  label: 'Oferta especial / Urgência' },
  ]},
  { label: '06 — Comunicação e Mensagem', fields: [
    { key: 'mensagens',      label: 'Mensagens e argumentos principais' },
    { key: 'tom_voz',        label: 'Tom de voz' },
    { key: 'palavras_chave', label: 'Palavras-chave / Termos dos anúncios' },
    { key: 'nao_comunicar',  label: 'O que NÃO deve ser comunicado' },
  ]},
  { label: '07 — Objeções e Gatilhos Mentais', fields: [
    { key: 'objecoes',         label: 'Objeções e como quebrá-las' },
    { key: 'gatilhos',         label: 'Gatilhos mentais disponíveis' },
    { key: 'gatilhos_detalhe', label: 'Detalhe dos gatilhos' },
  ]},
  { label: '08 — Prova e Credibilidade', fields: [
    { key: 'depoimentos', label: 'Depoimentos, cases e resultados' },
    { key: 'credenciais', label: 'Credenciais e certificações' },
  ]},
  { label: '09 — Concorrência e Posicionamento', fields: [
    { key: 'concorrentes',   label: 'Principais concorrentes' },
    { key: 'posicionamento', label: 'Como se posiciona melhor' },
  ]},
  { label: '10 — Atendimento e Pós-Conversão', fields: [
    { key: 'cta_fluxo',    label: 'CTA principal e fluxo de conversão' },
    { key: 'atendimento',  label: 'Como atende o lead após entrar' },
    { key: 'lead_saiba',   label: 'O que o lead deve saber antes de contratar' },
    { key: 'transformacao',label: 'Transformação / Resultado prometido' },
  ]},
  { label: '11 — Investimento, Restrições e Branding', fields: [
    { key: 'investimento',      label: 'Investimento em mídia (R$/mês)' },
    { key: 'restricoes',        label: 'Restrições legais / Compliance' },
    { key: 'identidade_visual', label: 'Identidade visual / Manual de marca' },
  ]},
  { label: '12 — Informações Complementares', fields: [
    { key: 'faq',    label: 'Perguntas frequentes dos clientes' },
    { key: 'extras', label: 'Contexto adicional' },
  ]},
];

const GMB_SECTIONS = [
  { label: '01 — Identificação', fields: [
    { key: 'nome_empresa', label: 'Nome da empresa' },
    { key: 'endereco',     label: 'Endereço completo' },
    { key: 'email',        label: 'E-mail profissional' },
    { key: 'telefone',     label: 'Telefone / WhatsApp' },
    { key: 'data_abertura',label: 'Data de abertura' },
  ]},
  { label: '02 — Sobre o Negócio', fields: [
    { key: 'categorias',    label: 'Categorias do negócio' },
    { key: 'palavra_chave', label: 'Palavra-chave de busca' },
    { key: 'especialidades',label: 'Especialidades' },
    { key: 'busca_cliente', label: 'Como o cliente pesquisaria' },
    { key: 'ajuda_cliente', label: 'Como ajuda o cliente' },
  ]},
  { label: '03 — Presença Digital e Concorrência', fields: [
    { key: 'redes_sociais', label: 'Redes sociais / Site / Ficha atual' },
    { key: 'possui_site',   label: 'Possui site' },
    { key: 'concorrentes',  label: 'Principais concorrentes' },
  ]},
  { label: '04 — Localização e Cobertura', fields: [
    { key: 'localizacao',    label: 'Localização exata' },
    { key: 'areas_cobertura',label: 'Áreas de cobertura / regiões' },
  ]},
  { label: '05 — Funcionamento', fields: [
    { key: 'horario',           label: 'Horário de funcionamento' },
    { key: 'horario_especial',  label: 'Horários especiais / Feriados' },
    { key: 'agendamento_online',label: 'Agendamento on-line' },
    { key: 'idiomas',           label: 'Idiomas de atendimento' },
    { key: 'empreendedoras',    label: 'Empresa de empreendedoras' },
  ]},
  { label: '06 — Acessibilidade e Estacionamento', fields: [
    { key: 'aro_inducao',          label: 'Aro de indução magnética' },
    { key: 'entrada_acessivel',    label: 'Entrada acessível' },
    { key: 'dispositivos_auditivos',label: 'Dispositivos para deficientes auditivos' },
    { key: 'assento_cadeirante',   label: 'Assento para cadeirantes' },
    { key: 'banheiro_cadeirante',  label: 'Banheiro acessível' },
    { key: 'estacionamento',       label: 'Estacionamento' },
  ]},
  { label: '07 — Serviços e Demanda', fields: [
    { key: 'servicos_aumentar',     label: 'Serviços que quer aumentar demanda' },
    { key: 'servicos_nao_aumentar', label: 'Serviços que não quer aumentar' },
    { key: 'mais_procurado',        label: 'Serviços mais procurados' },
    { key: 'produtos_mostrar',      label: 'Produtos/serviços para mostrar na ficha' },
  ]},
];

const CONTRATO_SECTIONS = [
  { label: '01 — Dados Básicos', fields: [
    { key: 'nome_razao',    label: 'Nome completo / Razão social' },
    { key: 'nome_fantasia', label: 'Nome fantasia' },
    { key: 'cpf_cnpj',     label: 'CPF / CNPJ' },
    { key: 'whatsapp',     label: 'WhatsApp' },
    { key: 'email',        label: 'E-mail principal' },
    { key: 'endereco',     label: 'Endereço completo' },
  ]},
  { label: '02 — Sobre o Negócio', fields: [
    { key: 'segmento',          label: 'Segmento de atuação' },
    { key: 'descricao_empresa', label: 'Descrição da empresa' },
    { key: 'tempo_mercado',     label: 'Tempo no mercado' },
    { key: 'produtos_servicos', label: 'Principais produtos / serviços' },
    { key: 'publico_alvo',      label: 'Público-alvo' },
  ]},
  { label: '03 — Posicionamento e Objetivos', fields: [
    { key: 'objetivo_principal',   label: 'Objetivo principal' },
    { key: 'expectativas',         label: 'Expectativas para os próximos meses' },
    { key: 'experiencia_anterior', label: 'Experiência anterior com o serviço' },
    { key: 'diferenciais',         label: 'Diferenciais competitivos' },
  ]},
  { label: '04 — Presença Digital', fields: [
    { key: 'redes_sociais',       label: 'Redes sociais ativas' },
    { key: 'possui_site',         label: 'Site' },
    { key: 'investe_anuncios',    label: 'Investe em anúncios pagos' },
    { key: 'frequencia_conteudo', label: 'Frequência de publicação' },
  ]},
  { label: '05 — Identidade e Comunicação', fields: [
    { key: 'percepcao_marca', label: 'Como quer que a marca seja percebida' },
    { key: 'cores_estilos',   label: 'Cores, estilos e referências visuais' },
    { key: 'nao_quero',       label: 'O que NÃO quer na comunicação' },
  ]},
  { label: '06 — Operacional', fields: [
    { key: 'responsavel_aprovacao', label: 'Responsável pelas aprovações' },
    { key: 'melhor_contato',        label: 'Melhor horário para contato' },
    { key: 'prazo_lancamento',      label: 'Prazos importantes / Data de lançamento' },
  ]},
  { label: '07 — Contratação', fields: [
    { key: 'plano_escolhido',  label: 'Plano / Serviço contratado' },
    { key: 'forma_pagamento',  label: 'Forma de pagamento' },
    { key: 'data_inicio',      label: 'Data de início desejada' },
  ]},
];

const SATISFACAO_SECTIONS = [
  { label: '01 — Identificação', fields: [
    { key: 'nome_cliente',    label: 'Nome do cliente' },
    { key: 'empresa_cliente', label: 'Empresa' },
    { key: 'servico_avaliado',label: 'Serviço avaliado' },
  ]},
  { label: '02 — Avaliações por Estrelas', fields: [
    { key: 'exp_geral',   label: 'Experiência geral', type: 'stars' },
    { key: 'qualidade',   label: 'Qualidade do serviço', type: 'stars' },
    { key: 'comunicacao', label: 'Comunicação', type: 'stars' },
    { key: 'prazo',       label: 'Cumprimento de prazos', type: 'stars' },
    { key: 'resultado',   label: 'Satisfação com os resultados', type: 'stars' },
    { key: 'atendimento', label: 'Atendimento', type: 'stars' },
    { key: 'facilidade',  label: 'Facilidade no processo', type: 'stars' },
  ]},
  { label: '03 — Perguntas Abertas', fields: [
    { key: 'mais_gostou',      label: 'O que mais gostou' },
    { key: 'poderia_melhorar', label: 'O que poderia melhorar' },
    { key: 'indicaria',        label: 'Indicaria o serviço? Por quê?' },
    { key: 'maior_resultado',  label: 'Maior resultado ou benefício percebido' },
    { key: 'futuro',           label: 'O que gostaria no futuro' },
  ]},
  { label: '04 — Extras Estratégicos', fields: [
    { key: 'continua_investindo', label: 'Pretende continuar investindo' },
    { key: 'proximo_passo',       label: 'Próximo passo ideal' },
    { key: 'usar_feedback',       label: 'Autoriza uso do feedback como depoimento' },
    { key: 'autoriza_nome',       label: 'Autoriza uso do nome/marca' },
  ]},
];

const SITES_SECTIONS = [
  { label: '01 — Informações Gerais do Negócio', fields: [
    { key: 'nome_empresa',      label: 'Nome da empresa' },
    { key: 'nome_responsavel',  label: 'Nome do responsável' },
    { key: 'whatsapp',          label: 'WhatsApp' },
    { key: 'email',             label: 'E-mail' },
    { key: 'instagram',         label: 'Instagram' },
    { key: 'site_atual',        label: 'Site atual' },
    { key: 'cidade',            label: 'Cidade / Região de atuação' },
    { key: 'tempo_negocio',     label: 'Há quanto tempo o negócio existe?' },
    { key: 'descricao_negocio', label: 'Descrição do negócio' },
  ]},
  { label: '02 — Objetivo do Site', fields: [
    { key: 'objetivo_site',  label: 'Principal objetivo do site' },
    { key: 'acao_desejada',  label: 'Ação desejada do visitante' },
    { key: 'meta_resultado', label: 'Meta de resultado' },
  ]},
  { label: '03 — Público-Alvo', fields: [
    { key: 'cliente_ideal',    label: 'Cliente ideal' },
    { key: 'idade_media',      label: 'Idade média' },
    { key: 'genero',           label: 'Gênero predominante' },
    { key: 'regiao_publico',   label: 'Região' },
    { key: 'poder_aquisitivo', label: 'Poder aquisitivo' },
    { key: 'dores_publico',    label: 'Maiores dores do público' },
    { key: 'busca_publico',    label: 'O que o público busca' },
    { key: 'confianca_publico',label: 'O que gera confiança' },
  ]},
  { label: '04 — Produtos / Serviços', fields: [
    { key: 'servicos',          label: 'Serviços / produtos oferecidos' },
    { key: 'carro_chefe',       label: 'Carro-chefe' },
    { key: 'ticket_medio',      label: 'Ticket médio' },
    { key: 'pacotes',           label: 'Variações ou pacotes' },
    { key: 'diferencial_servico',label: 'Diferencial dos serviços' },
  ]},
  { label: '05 — Diferenciais e Posicionamento', fields: [
    { key: 'porque_voce',  label: 'Por que escolher você?' },
    { key: 'diferenciais', label: 'Maiores diferenciais' },
    { key: 'exclusivo',    label: 'Algo exclusivo que só você oferece' },
    { key: 'certificacoes',label: 'Certificações / prêmios / experiência' },
  ]},
  { label: '06 — Concorrentes e Referências', fields: [
    { key: 'concorrentes',          label: 'Concorrentes diretos' },
    { key: 'gosta_concorrentes',    label: 'O que gosta neles' },
    { key: 'nao_gosta_concorrentes',label: 'O que NÃO gosta neles' },
    { key: 'sites_referencia',      label: 'Sites de referência' },
    { key: 'atencao_referencias',   label: 'O que chama atenção nessas referências' },
  ]},
  { label: '07 — Estrutura do Site', fields: [
    { key: 'tipo_site',     label: 'Tipo de site' },
    { key: 'paginas',       label: 'Páginas desejadas' },
    { key: 'estrutura_obs', label: 'Observações sobre a estrutura' },
  ]},
  { label: '08 — Conteúdo', fields: [
    { key: 'tem_textos',  label: 'Possui textos prontos?' },
    { key: 'precisa_copy',label: 'Precisa de copywriting?' },
    { key: 'tem_fotos',   label: 'Possui fotos profissionais?' },
    { key: 'tem_videos',  label: 'Possui vídeos?' },
    { key: 'depoimentos', label: 'Depoimentos de clientes' },
  ]},
  { label: '09 — Identidade Visual', fields: [
    { key: 'tem_logo',     label: 'Possui logo?' },
    { key: 'tem_manual',   label: 'Possui manual de marca?' },
    { key: 'cores_marca',  label: 'Cores da marca' },
    { key: 'tipografia',   label: 'Tipografia' },
    { key: 'estilo_visual',label: 'Estilo visual desejado' },
  ]},
  { label: '10 — Funcionalidades', fields: [
    { key: 'funcionalidades',       label: 'Funcionalidades necessárias' },
    { key: 'funcionalidades_outras',label: 'Funcionalidades específicas não listadas' },
  ]},
  { label: '11 — SEO e Tráfego', fields: [
    { key: 'faz_anuncios',      label: 'Já faz anúncios pagos?' },
    { key: 'pretende_trafego',  label: 'Pretende investir em tráfego pago?' },
    { key: 'quer_seo',          label: 'Quer otimização para Google (SEO)?' },
    { key: 'palavras_chave_seo',label: 'Palavras-chave para SEO' },
  ]},
  { label: '12 — Domínio e Hospedagem', fields: [
    { key: 'tem_dominio',   label: 'Já possui domínio?' },
    { key: 'qual_dominio',  label: 'Qual domínio?' },
    { key: 'tem_hospedagem',label: 'Já possui hospedagem?' },
  ]},
  { label: '13 — Expectativas e Observações Finais', fields: [
    { key: 'expectativas_projeto',  label: 'Expectativas com o projeto' },
    { key: 'nao_mencionado',        label: 'Algo importante não mencionado' },
    { key: 'preferencias_restricoes',label: 'Preferências ou restrições específicas' },
  ]},
];

const FORM_CONFIGS = {
  trafego:   { title: 'Tráfego Pago',          sections: BRIEFING_SECTIONS,  file: 'briefing-trafego.html',     icon: '📊' },
  gmb:       { title: 'Google Meu Negócio',    sections: GMB_SECTIONS,       file: 'ficha-gmb.html',            icon: '📍' },
  contrato:  { title: 'Contrato',              sections: CONTRATO_SECTIONS,  file: 'formulario-contrato.html',  icon: '📄' },
  satisfacao:{ title: 'Satisfação',            sections: SATISFACAO_SECTIONS,file: 'formulario-satisfacao.html',icon: '⭐' },
  sites:     { title: 'Sites / Landing Pages', sections: SITES_SECTIONS,     file: 'briefing-sites.html',       icon: '🌐' },
};

let _briefings = [];
let _currentFormType = 'trafego';
let _briefingsUnsub = null; // real-time listener handle

function _stopBriefingsListener() {
  if (_briefingsUnsub) { _briefingsUnsub(); _briefingsUnsub = null; }
}

function renderBriefingsPage(formType) {
  _currentFormType = formType || _currentFormType;
  const el = document.getElementById('main-content');
  el.innerHTML = `<div style="padding:24px;text-align:center;color:var(--text-muted)">⏳ Conectando em tempo real...</div>`;

  // Cancel any previous listener before creating a new one
  _stopBriefingsListener();

  if (window.subscribeBriefings) {
    // Real-time: atualiza automaticamente sempre que um formulário for enviado
    _briefingsUnsub = window.subscribeBriefings(_currentFormType, (briefings) => {
      _briefings = briefings;
      _renderBriefingsList();
    });
  } else {
    // Fallback: carga única
    (window.loadBriefings ? window.loadBriefings() : Promise.resolve([]))
      .then(all => {
        _briefings = all.filter(b => (b.type || 'trafego') === _currentFormType);
        _renderBriefingsList();
      });
  }
}

function _renderBriefingsList() {
  const el = document.getElementById('main-content');
  const cfg = FORM_CONFIGS[_currentFormType];

  // Identificador principal de cada tipo
  const primaryKey = {
    trafego:   b => b.empresa || b.nome_cargo,
    gmb:       b => b.nome_empresa,
    contrato:  b => b.nome_razao || b.nome_fantasia,
    satisfacao:b => b.nome_cliente,
    sites:     b => b.nome_empresa,
  }[_currentFormType] || (b => b.nome_empresa || b.empresa || b.nome_cargo || '');

  const subKey = {
    trafego:   b => b.nome_cargo,
    gmb:       b => b.categorias,
    contrato:  b => b.segmento,
    satisfacao:b => b.servico_avaliado,
    sites:     b => b.nome_responsavel,
  }[_currentFormType] || (() => '');

  const liveBadge = _briefingsUnsub
    ? `<span style="display:inline-flex;align-items:center;gap:4px;font-size:10px;font-weight:600;color:#10b981;background:rgba(16,185,129,.1);border:1px solid rgba(16,185,129,.25);border-radius:20px;padding:2px 8px"><span style="width:6px;height:6px;border-radius:50%;background:#10b981;animation:pulse 1.5s infinite"></span>Tempo real</span>`
    : '';

  if (!_briefings.length) {
    el.innerHTML = `
      <div style="padding:40px;text-align:center">
        <div style="font-size:48px;margin-bottom:16px">${cfg.icon}</div>
        <div style="font-size:16px;font-weight:600;margin-bottom:8px">Nenhuma resposta recebida ainda</div>
        <div style="font-size:13px;color:var(--text-muted);margin-bottom:20px">Aguardando respostas em tempo real... ${liveBadge}</div>
        <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
          <a href="${cfg.file}" target="_blank" class="btn btn-primary" style="display:inline-block;text-decoration:none">🔗 Abrir formulário de ${cfg.title}</a>
          <button class="btn btn-ghost" onclick="renderFormEditor('${_currentFormType}')">✏️ Editar formulário</button>
        </div>
      </div>`;
    return;
  }

  el.innerHTML = `
    <div style="padding:20px 24px">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;flex-wrap:wrap;gap:8px">
        <div>
          <div style="display:flex;align-items:center;gap:8px;font-size:18px;font-weight:700">${cfg.icon} ${cfg.title} ${liveBadge}</div>
          <div style="font-size:12px;color:var(--text-muted);margin-top:2px">${_briefings.length} resposta${_briefings.length !== 1 ? 's' : ''} recebida${_briefings.length !== 1 ? 's' : ''}</div>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          <button class="btn btn-ghost" style="font-size:12px" onclick="renderFormEditor('${_currentFormType}')">✏️ Editar formulário</button>
          <a href="${cfg.file}" target="_blank" class="btn btn-ghost" style="font-size:12px;text-decoration:none">🔗 Link do formulário</a>
        </div>
      </div>
      <div style="display:grid;gap:12px">
        ${_briefings.map((b, i) => {
          const date = b.submittedAt ? new Date(b.submittedAt).toLocaleDateString('pt-BR', {day:'2-digit',month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit'}) : '—';
          const sections = cfg.sections;
          const filled = sections.reduce((acc, s) => acc + s.fields.filter(f => b[f.key] && String(b[f.key]).trim()).length, 0);
          const total  = sections.reduce((acc, s) => acc + s.fields.length, 0);
          const pct = Math.round((filled / total) * 100);
          const primary = primaryKey(b) || 'Sem identificação';
          const sub = subKey(b) || '';

          // Estrelas para satisfação
          const avgStars = _currentFormType === 'satisfacao' ? (() => {
            const keys = ['exp_geral','qualidade','comunicacao','prazo','resultado','atendimento','facilidade'];
            const vals = keys.map(k => Number(b[k])).filter(v => v > 0);
            if (!vals.length) return '';
            const avg = (vals.reduce((a,c) => a+c, 0) / vals.length).toFixed(1);
            return `<span style="color:#f59e0b;font-size:13px">★ ${avg}</span> `;
          })() : '';

          return `
          <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:18px 20px;display:flex;align-items:center;gap:16px;cursor:pointer;transition:box-shadow .2s" onclick="openBriefingDetail(${i})" onmouseover="this.style.boxShadow='0 4px 20px rgba(0,0,0,.15)'" onmouseout="this.style.boxShadow=''">
            <div style="width:44px;height:44px;border-radius:12px;background:linear-gradient(135deg,var(--accent),#a855f7);display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">${cfg.icon}</div>
            <div style="flex:1;min-width:0">
              <div style="font-size:14px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${primary}</div>
              <div style="font-size:12px;color:var(--text-muted);margin-top:2px">${avgStars}${sub ? sub + ' • ' : ''}${date}</div>
              <div style="margin-top:8px;display:flex;align-items:center;gap:8px">
                <div style="flex:1;height:4px;background:var(--border);border-radius:2px;overflow:hidden"><div style="height:100%;width:${pct}%;background:linear-gradient(90deg,var(--accent),#a855f7);border-radius:2px"></div></div>
                <span style="font-size:11px;color:var(--text-muted);flex-shrink:0">${pct}% preenchido</span>
              </div>
            </div>
            <div style="display:flex;gap:8px;flex-shrink:0">
              <button class="btn btn-primary" style="font-size:11px;padding:6px 14px" onclick="event.stopPropagation();openBriefingDetail(${i})">Ver respostas</button>
              <button class="btn btn-ghost" style="font-size:11px;padding:6px 10px;color:var(--red)" onclick="event.stopPropagation();confirmDeleteBriefing(${i})" title="Excluir">🗑️</button>
            </div>
          </div>`;
        }).join('')}
      </div>
    </div>`;
}

function _renderStars(val) {
  const n = Number(val) || 0;
  return [1,2,3,4,5].map(i => `<span style="color:${i<=n?'#f59e0b':'#d1d5db'};font-size:20px">★</span>`).join('') + `<span style="font-size:12px;color:var(--text-muted);margin-left:6px">${n}/5</span>`;
}

function openBriefingDetail(idx) {
  const b = _briefings[idx];
  if (!b) return;
  const cfg = FORM_CONFIGS[_currentFormType];
  const date = b.submittedAt ? new Date(b.submittedAt).toLocaleDateString('pt-BR', {day:'2-digit',month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit'}) : '—';
  const titleName = b.empresa || b.nome_empresa || b.nome_razao || b.nome_cliente || 'Sem identificação';
  const el = document.getElementById('main-content');
  el.innerHTML = `
    <div style="padding:20px 24px" id="briefing-detail-view">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:24px;flex-wrap:wrap;gap:8px">
        <button class="btn btn-ghost" style="font-size:12px" onclick="renderBriefingsPage('${_currentFormType}')">← Voltar</button>
        <div style="flex:1">
          <div style="font-size:18px;font-weight:700">${cfg.icon} ${titleName}</div>
          <div style="font-size:12px;color:var(--text-muted);margin-top:2px">Recebido em ${date} • ${cfg.title}</div>
        </div>
        <button class="btn btn-primary" onclick="exportBriefingPDF(${idx})">🖨️ Exportar PDF</button>
      </div>
      <div id="briefing-print-area">
        <div style="text-align:center;margin-bottom:28px;padding-bottom:20px;border-bottom:2px solid var(--border)">
          <div style="font-size:22px;font-weight:800;margin-bottom:4px">${titleName}</div>
          <div style="font-size:13px;color:var(--text-muted)">${cfg.title} • Recebido em ${date}</div>
        </div>
        ${cfg.sections.map(sec => {
          const hasContent = sec.fields.some(f => b[f.key] && String(b[f.key]).trim());
          if (!hasContent) return '';
          return `
          <div style="margin-bottom:24px;background:var(--bg-card);border:1px solid var(--border);border-radius:12px;overflow:hidden">
            <div style="padding:14px 18px;background:linear-gradient(135deg,rgba(124,92,252,.12),rgba(168,85,247,.08));border-bottom:1px solid var(--border)">
              <div style="font-size:13px;font-weight:700;color:var(--accent)">${sec.label}</div>
            </div>
            <div style="padding:16px 18px;display:grid;gap:14px">
              ${sec.fields.map(f => {
                const val = b[f.key];
                const empty = !val || !String(val).trim();
                if (empty) return `<div style="opacity:.35"><div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.6px;color:var(--text-muted);margin-bottom:3px">${f.label}</div><div style="font-size:12px;font-style:italic;color:var(--text-muted)">Não respondido</div></div>`;
                const display = f.type === 'stars' ? _renderStars(val) : `<div style="font-size:13.5px;color:var(--text-primary);line-height:1.6;white-space:pre-wrap">${val}</div>`;
                return `<div><div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--text-muted);margin-bottom:4px">${f.label}</div>${display}</div>`;
              }).join('')}
            </div>
          </div>`;
        }).join('')}
      </div>
      ${(() => {
        // Custom questions (keys starting with cq_)
        const cqEntries = Object.entries(b).filter(([k]) => k.startsWith('cq_') && String(b[k]).trim());
        if (!cqEntries.length) return '';
        return `<div style="margin-bottom:24px;background:var(--bg-card);border:1px solid var(--border);border-radius:12px;overflow:hidden">
          <div style="padding:14px 18px;background:linear-gradient(135deg,rgba(124,92,252,.12),rgba(168,85,247,.08));border-bottom:1px solid var(--border)">
            <div style="font-size:13px;font-weight:700;color:var(--accent)">✨ Perguntas Personalizadas</div>
          </div>
          <div style="padding:16px 18px;display:grid;gap:14px">
            ${cqEntries.map(([k,v]) => `<div><div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--text-muted);margin-bottom:4px">${k.replace('cq_','').replace(/_/g,' ')}</div><div style="font-size:13.5px;color:var(--text-primary);line-height:1.6;white-space:pre-wrap">${v}</div></div>`).join('')}
          </div>
        </div>`;
      })()}
    </div>`;
}

function exportBriefingPDF(idx) {
  const b = _briefings[idx];
  if (!b) return;
  const cfg = FORM_CONFIGS[_currentFormType];
  const date = b.submittedAt ? new Date(b.submittedAt).toLocaleDateString('pt-BR') : '';
  const titleName = b.empresa || b.nome_empresa || b.nome_razao || b.nome_cliente || 'Sem identificação';

  const renderStarsPDF = (val) => {
    const n = Number(val) || 0;
    return [1,2,3,4,5].map(i => `<span style="color:${i<=n?'#f59e0b':'#d1d5db'};font-size:18px">★</span>`).join('') + ` ${n}/5`;
  };

  const sectionsHTML = cfg.sections.map(sec => {
    const hasContent = sec.fields.some(f => b[f.key] && String(b[f.key]).trim());
    if (!hasContent) return '';
    return `
    <div class="pdf-section">
      <div class="pdf-section-title">${sec.label}</div>
      ${sec.fields.map(f => {
        const val = b[f.key];
        if (!val || !String(val).trim()) return '';
        const display = f.type === 'stars' ? renderStarsPDF(val) : String(val).replace(/\n/g,'<br>');
        return `<div class="pdf-field"><div class="pdf-label">${f.label}</div><div class="pdf-value">${display}</div></div>`;
      }).join('')}
    </div>`;
  }).join('');

  const win = window.open('', '_blank');
  win.document.write(`<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8">
  <title>${cfg.title} – ${titleName}</title>
  <style>
    * { margin:0; padding:0; box-sizing:border-box; }
    body { font-family:'Segoe UI',system-ui,sans-serif; color:#111; background:#fff; padding:32px 40px; }
    .pdf-header { text-align:center; padding-bottom:20px; margin-bottom:28px; border-bottom:2px solid #e5e7eb; }
    .pdf-header h1 { font-size:22px; font-weight:800; color:#1e1040; }
    .pdf-header p { font-size:12px; color:#6b7280; margin-top:4px; }
    .pdf-section { margin-bottom:22px; border:1px solid #e5e7eb; border-radius:10px; overflow:hidden; page-break-inside:avoid; }
    .pdf-section-title { background:linear-gradient(135deg,#ede9fe,#f5f3ff); padding:11px 16px; font-size:12px; font-weight:700; color:#5b21b6; text-transform:uppercase; letter-spacing:.6px; border-bottom:1px solid #e5e7eb; }
    .pdf-field { padding:10px 16px; border-bottom:1px solid #f3f4f6; }
    .pdf-field:last-child { border-bottom:none; }
    .pdf-label { font-size:10px; font-weight:700; text-transform:uppercase; letter-spacing:.5px; color:#9ca3af; margin-bottom:3px; }
    .pdf-value { font-size:13px; color:#111827; line-height:1.6; }
    .pdf-footer { text-align:center; font-size:10px; color:#9ca3af; margin-top:32px; padding-top:16px; border-top:1px solid #e5e7eb; }
    @media print { body { padding:16px 24px; } }
  </style>
  </head><body>
  <div class="pdf-header">
    <h1>${titleName}</h1>
    <p>${cfg.title} &nbsp;•&nbsp; Recebido em ${date} &nbsp;•&nbsp; DigitalCreate</p>
  </div>
  ${sectionsHTML}
  ${(() => {
    const cqEntries = Object.entries(b).filter(([k]) => k.startsWith('cq_') && String(b[k]).trim());
    if (!cqEntries.length) return '';
    return `<div class="pdf-section"><div class="pdf-section-title">✨ Perguntas Personalizadas</div>${cqEntries.map(([k,v]) => `<div class="pdf-field"><div class="pdf-label">${k.replace('cq_','').replace(/_/g,' ')}</div><div class="pdf-value">${String(v).replace(/\n/g,'<br>')}</div></div>`).join('')}</div>`;
  })()}
  <div class="pdf-footer">DigitalCreate — ${cfg.title} • Gerado em ${new Date().toLocaleDateString('pt-BR')}</div>
  <script>window.onload = () => { window.print(); }<\/script>
  </body></html>`);
  win.document.close();
}

async function confirmDeleteBriefing(idx) {
  const b = _briefings[idx];
  if (!b) return;
  const _delName = b.nome_empresa || b.empresa || b.nome_razao || b.nome_cliente || b.nome_cargo || 'este cliente';
  if (!confirm(`Excluir o briefing de "${_delName}"? Esta ação não pode ser desfeita.`)) return;
  await window.deleteBriefing(b.id);
  _briefings.splice(idx, 1);
  _renderBriefingsList();
}

// ─── FORM EDITOR (Google Forms–style) ────────────────────────────────────────
let _feType = 'trafego';
let _feQuestions = [];
let _feNextId = 1;

async function renderFormEditor(formType) {
  _feType = formType || _currentFormType || 'trafego';
  const el = document.getElementById('main-content');
  el.innerHTML = `<div style="padding:32px;text-align:center;color:var(--text-muted)">⏳ Carregando editor...</div>`;
  _feQuestions = window.loadFormConfig ? await window.loadFormConfig(_feType) : [];
  _feNextId = (_feQuestions.reduce((m,q) => Math.max(m, parseInt(q.id)||0), 0)) + 1;
  _feRender();
}

function _feRender() {
  const el = document.getElementById('main-content');
  const typeLabels = { trafego:'Tráfego Pago', gmb:'Google Meu Negócio', contrato:'Contrato', satisfacao:'Satisfação', sites:'Sites & Landing Pages' };
  const typeIcons  = { trafego:'📊', gmb:'📍', contrato:'📄', satisfacao:'⭐', sites:'🌐' };
  const cfg = FORM_CONFIGS[_feType];

  const tabs = Object.keys(typeLabels).map(k => `
    <button onclick="renderFormEditor('${k}')" style="padding:7px 16px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;border:1px solid ${k===_feType?'transparent':'var(--border)'};background:${k===_feType?'linear-gradient(135deg,var(--accent),#a855f7)':'var(--bg-card)'};color:${k===_feType?'#fff':'var(--text-secondary)'};white-space:nowrap">
      ${typeIcons[k]} ${typeLabels[k]}
    </button>`).join('');

  const originalSummary = cfg.sections.map(s => `
    <details style="background:var(--bg-card);border:1px solid var(--border);border-radius:10px;margin-bottom:8px;overflow:hidden">
      <summary style="padding:11px 14px;cursor:pointer;font-size:12.5px;font-weight:600;list-style:none;display:flex;align-items:center;gap:8px;color:var(--text-secondary)">
        <span style="font-size:10px">▶</span> ${s.label}
        <span style="margin-left:auto;font-size:11px;color:var(--text-muted);font-weight:400">${s.fields.length} campo${s.fields.length!==1?'s':''}</span>
      </summary>
      <div style="padding:10px 14px 14px;border-top:1px solid var(--border)">
        ${s.fields.map(f => `<div style="padding:5px 0;font-size:12px;color:var(--text-muted);display:flex;align-items:center;gap:7px"><span style="width:5px;height:5px;border-radius:50%;background:var(--border);flex-shrink:0"></span>${f.label}</div>`).join('')}
      </div>
    </details>`).join('');

  const customList = _feQuestions.length
    ? _feQuestions.map(_feRenderCard).join('')
    : `<div style="padding:28px 20px;text-align:center;background:var(--bg-card);border:2px dashed var(--border);border-radius:12px;color:var(--text-muted);font-size:13px">Nenhuma pergunta personalizada ainda.<br><span style="font-size:12px">Clique em "+ Adicionar pergunta" para começar.</span></div>`;

  el.innerHTML = `
    <div style="padding:20px 24px">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px;flex-wrap:wrap">
        <button class="btn btn-ghost" style="font-size:12px" onclick="renderBriefingsPage(_feType)">← Voltar</button>
        <div style="flex:1">
          <div style="font-size:18px;font-weight:700">✏️ Editor de Formulários</div>
          <div style="font-size:12px;color:var(--text-muted)">Adicione perguntas extras que os clientes verão ao preencher o formulário</div>
        </div>
        <button class="btn btn-primary" onclick="_feSave()">💾 Salvar alterações</button>
      </div>

      <div style="display:flex;gap:8px;margin-bottom:24px;flex-wrap:wrap;overflow-x:auto">${tabs}</div>

      <div class="fe-grid">
        <div>
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.7px;color:var(--text-muted);margin-bottom:10px">🔒 Perguntas originais (somente leitura)</div>
          ${originalSummary}
        </div>
        <div>
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.7px;color:var(--text-muted);margin-bottom:10px">✨ Perguntas personalizadas (${_feQuestions.length})</div>
          <div id="fe-list">${customList}</div>
          <button class="btn btn-ghost" style="margin-top:12px;width:100%;display:flex;align-items:center;justify-content:center;gap:6px" onclick="_feAddQuestion()">
            ＋ Adicionar pergunta
          </button>
        </div>
      </div>
    </div>`;
}

function _feRenderCard(q) {
  const typeOpts = [['text','Resposta curta'],['textarea','Parágrafo'],['radio','Múltipla escolha'],['checkbox','Caixas de seleção']]
    .map(([v,l]) => `<option value="${v}" ${q.type===v?'selected':''}>${l}</option>`).join('');
  const hasOpts = q.type === 'radio' || q.type === 'checkbox';
  const sym = q.type === 'radio' ? '○' : '☐';

  const optionsEditor = hasOpts ? `
    <div style="margin-top:12px;padding-top:12px;border-top:1px solid var(--border)">
      <div style="font-size:11px;font-weight:600;color:var(--text-muted);margin-bottom:8px;text-transform:uppercase;letter-spacing:.5px">Opções</div>
      <div id="fe-opts-${q.id}">
        ${(q.options||[]).map((opt,i) => `
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
            <span style="color:var(--text-muted);font-size:14px">${sym}</span>
            <input type="text" value="${opt.replace(/"/g,'&quot;')}" placeholder="Opção..." style="flex:1;padding:6px 10px;border:1px solid var(--border);border-radius:6px;font-size:12.5px;background:var(--bg-card);color:var(--text-primary);outline:none;font-family:inherit" oninput="_feUpdateOpt('${q.id}',${i},this.value)">
            <button onclick="_feRemoveOpt('${q.id}',${i})" style="background:none;border:none;cursor:pointer;color:var(--text-muted);font-size:14px;padding:2px 6px;line-height:1">✕</button>
          </div>`).join('')}
      </div>
      <button onclick="_feAddOpt('${q.id}')" style="background:none;border:1px dashed var(--border);border-radius:6px;padding:5px 12px;font-size:12px;cursor:pointer;color:var(--text-muted);margin-top:4px;font-family:inherit">+ Adicionar opção</button>
    </div>` : '';

  return `
    <div id="fe-card-${q.id}" style="background:var(--bg-card);border:2px solid var(--accent);border-radius:12px;padding:16px;margin-bottom:12px">
      <div style="display:flex;gap:8px;margin-bottom:10px">
        <input type="text" value="${q.label.replace(/"/g,'&quot;')}" placeholder="Texto da pergunta..." style="flex:1;padding:8px 12px;border:1px solid var(--border);border-radius:8px;font-size:13px;background:var(--bg-card);color:var(--text-primary);outline:none;font-family:inherit" oninput="_feUpdateQ('${q.id}','label',this.value)">
        <select onchange="_feUpdateQ('${q.id}','type',this.value);_feRender()" style="padding:8px 10px;border:1px solid var(--border);border-radius:8px;font-size:12px;background:var(--bg-card);color:var(--text-primary);cursor:pointer;outline:none;font-family:inherit">
          ${typeOpts}
        </select>
        <button onclick="_feRemoveQ('${q.id}')" style="background:none;border:none;cursor:pointer;color:#ef4444;font-size:16px;padding:4px 6px;line-height:1" title="Remover">🗑️</button>
      </div>
      <div style="display:flex;gap:8px;align-items:center">
        <input type="text" value="${(q.hint||'').replace(/"/g,'&quot;')}" placeholder="Texto de ajuda (opcional)..." style="flex:1;padding:6px 10px;border:1px solid var(--border);border-radius:8px;font-size:12px;background:var(--bg-card);color:var(--text-secondary);outline:none;font-family:inherit" oninput="_feUpdateQ('${q.id}','hint',this.value)">
        <label style="display:flex;align-items:center;gap:5px;font-size:12px;cursor:pointer;white-space:nowrap;color:var(--text-secondary)">
          <input type="checkbox" ${q.required?'checked':''} onchange="_feUpdateQ('${q.id}','required',this.checked)" style="accent-color:var(--accent)"> Obrigatória
        </label>
      </div>
      ${optionsEditor}
    </div>`;
}

function _feAddQuestion() {
  const id = String(_feNextId++);
  _feQuestions.push({ id, label: '', type: 'text', required: false, hint: '', options: [] });
  _feRender();
  setTimeout(() => {
    const card = document.getElementById(`fe-card-${id}`);
    if (card) { const inp = card.querySelector('input[type=text]'); if (inp) { inp.focus(); inp.scrollIntoView({ behavior: 'smooth', block: 'center' }); } }
  }, 60);
}

function _feRemoveQ(id) {
  if (!confirm('Remover esta pergunta do formulário?')) return;
  _feQuestions = _feQuestions.filter(q => q.id !== id);
  _feRender();
}

function _feUpdateQ(id, field, value) {
  const q = _feQuestions.find(q => q.id === id);
  if (q) q[field] = value;
}

function _feAddOpt(id) {
  const q = _feQuestions.find(q => q.id === id);
  if (!q) return;
  if (!q.options) q.options = [];
  q.options.push('');
  _feRender();
  setTimeout(() => {
    const opts = document.getElementById(`fe-opts-${id}`);
    if (opts) { const last = opts.querySelectorAll('input[type=text]'); if (last.length) last[last.length-1].focus(); }
  }, 60);
}

function _feRemoveOpt(id, idx) {
  const q = _feQuestions.find(q => q.id === id);
  if (q && q.options) { q.options.splice(idx, 1); _feRender(); }
}

function _feUpdateOpt(id, idx, value) {
  const q = _feQuestions.find(q => q.id === id);
  if (q && q.options) q.options[idx] = value;
}

async function _feSave() {
  // Sync in-memory input values (in case oninput missed anything)
  document.querySelectorAll('[id^="fe-card-"]').forEach(card => {
    const id = card.id.replace('fe-card-','');
    const q = _feQuestions.find(q => q.id === id);
    if (!q) return;
    const inputs = card.querySelectorAll('input[type=text], textarea');
    if (inputs[0]) q.label = inputs[0].value;
    if (inputs[1]) q.hint  = inputs[1].value;
    const sel = card.querySelector('select');
    if (sel) q.type = sel.value;
    const chk = card.querySelector('input[type=checkbox]');
    if (chk) q.required = chk.checked;
    const optInputs = card.querySelectorAll(`#fe-opts-${id} input[type=text]`);
    if (optInputs.length) q.options = [...optInputs].map(i => i.value);
  });

  const invalid = _feQuestions.filter(q => !q.label.trim());
  if (invalid.length) { alert(`${invalid.length} pergunta(s) sem texto. Preencha o título de todas as perguntas.`); return; }

  const noOpts = _feQuestions.filter(q => (q.type==='radio'||q.type==='checkbox') && (q.options||[]).filter(o=>o.trim()).length < 2);
  if (noOpts.length) { alert('Perguntas de múltipla escolha e caixas de seleção precisam ter pelo menos 2 opções.'); return; }

  if (!window.saveFormConfig) { alert('Firebase não disponível.'); return; }

  const cleanQs = _feQuestions.map(q => ({
    ...q,
    label: q.label.trim(),
    hint:  (q.hint||'').trim(),
    options: (q.options||[]).filter(o => o.trim()),
  }));

  const ok = await window.saveFormConfig(_feType, cleanQs);
  if (ok !== false) {
    _feQuestions = cleanQs;
    const toast = document.createElement('div');
    toast.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#10b981;color:#fff;padding:12px 24px;border-radius:10px;font-size:13px;font-weight:600;z-index:9999;box-shadow:0 4px 20px rgba(0,0,0,.2)';
    toast.textContent = '✓ Alterações salvas! Clientes verão as novas perguntas no formulário.';
    document.body.appendChild(toast);
    setTimeout(() => { toast.style.opacity='0'; toast.style.transition='opacity .4s'; setTimeout(()=>toast.remove(),400); }, 3000);
  } else {
    alert('Erro ao salvar. Tente novamente.');
  }
}

function toggleTheme() {
  const isLight = document.body.classList.toggle('light');
  document.getElementById('theme-icon').textContent = isLight ? '☀️' : '🌙';
  document.getElementById('theme-label').textContent = isLight ? 'Escuro' : 'Claro';
  localStorage.setItem('dc_theme', isLight ? 'light' : 'dark');
  _applyLogoTheme(isLight);
}

function _applyLogoTheme(isLight) {
  // If switching to light mode and the light logo failed to load,
  // the CSS fallback (logo-invert-fallback class + purple bg) handles it.
  // This function ensures onerror fires correctly on first switch.
  const ll = document.getElementById('sidebar-logo-light');
  const lll = document.getElementById('login-logo-light');
  if (isLight) {
    // Re-trigger onerror check in case image wasn't tested yet
    if (ll && !ll.complete) { ll.src = ll.src; }
    if (lll && !lll.complete) { lll.src = lll.src; }
  }
}

// ─── MOBILE NAVIGATION ────────────────────────────────────────────────────────
function toggleMobileSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.getElementById('mobile-overlay');
  const isOpen = sidebar.classList.toggle('mobile-open');
  overlay.classList.toggle('open', isOpen);
}
function closeMobileSidebar() {
  document.querySelector('.sidebar').classList.remove('mobile-open');
  document.getElementById('mobile-overlay').classList.remove('open');
}
function setMobActive(id) {
  document.querySelectorAll('.mob-nav-item').forEach(el => el.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) el.classList.add('active');
  closeMobileSidebar();
}

// ─── DOCUMENTS MODULE ──────────────────────────────────────────────────────
let _docs = [];
let _currentDoc = null;
let _docSaveTimer = null;
let _docSavedState = true;
let _docSavedRange = null;
let _docsFilter = 'todos';
let _docsSearch = '';

const _DOC_SIZES = [8,9,10,11,12,14,16,18,20,24,28,32,36,48,72];
const _DOC_FONTS = [
  // Sans-serif modernas
  'Inter','Poppins','Montserrat','Raleway','Nunito','Lato','Open Sans','Ubuntu','Roboto','Sora',
  // Clássicas / sistema
  'Arial','Verdana','Trebuchet MS',
  // Serif
  'Georgia','Times New Roman','Playfair Display','Merriweather',
  // Monoespaçada
  'Courier New',
  // Display / decorativa
  'Oswald','Dancing Script','Pacifico'
];
const _DOC_TYPES = { geral:'Geral', contrato:'Contrato', estrategia:'Estratégia', cliente:'Cliente' };
const _DOC_COLORS = { geral:'#6b7280', contrato:'#7c3aed', estrategia:'#2563eb', cliente:'#059669' };

let _docFolders = [];
let _docCurrentFolder = null; // null = raiz

async function renderDocsPage() {
  const el = document.getElementById('main-content');
  el.innerHTML = '<div style="padding:32px;text-align:center;color:var(--text-muted)">⏳ Carregando documentos...</div>';
  [_docs, _docFolders] = await Promise.all([
    window.loadCrmDocs ? window.loadCrmDocs() : [],
    window.loadDocFolders ? window.loadDocFolders() : []
  ]);
  _docCurrentFolder = null;
  _renderDocsList();
}

function _renderDocsList() {
  const el = document.getElementById('main-content');
  // Filtra docs da pasta atual
  const folderDocs = _docCurrentFolder
    ? _docs.filter(d => d.folderId === _docCurrentFolder)
    : _docs.filter(d => !d.folderId);

  const filtered = folderDocs.filter(d => {
    const mt = _docsFilter === 'todos' || d.type === _docsFilter;
    const ms = !_docsSearch || (d.title||'').toLowerCase().includes(_docsSearch.toLowerCase()) || (d.clientName||'').toLowerCase().includes(_docsSearch.toLowerCase());
    return mt && ms;
  });

  const currentFolderObj = _docFolders.find(f => f.id === _docCurrentFolder);

  // Pastas na raiz
  const foldersHtml = (!_docCurrentFolder && !_docsSearch) ? `
    <div style="margin-bottom:20px">
      <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:var(--text-muted);margin-bottom:10px">📁 Pastas</div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:10px;margin-bottom:4px">
        ${_docFolders.map(f => {
          const cnt = _docs.filter(d => d.folderId === f.id).length;
          return `<div class="doc-folder-card" onclick="_docCurrentFolder='${f.id}';_renderDocsList()">
            <div style="font-size:22px">📁</div>
            <div style="flex:1;min-width:0">
              <div style="font-size:13px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${f.name}</div>
              <div style="font-size:11px;color:var(--text-muted)">${cnt} doc${cnt!==1?'s':''}</div>
            </div>
            <button onclick="event.stopPropagation();_deleteDocFolder('${f.id}')" style="background:none;border:none;cursor:pointer;color:var(--text-muted);font-size:13px;padding:2px 5px" title="Excluir pasta">✕</button>
          </div>`;
        }).join('')}
        <div class="doc-folder-card" onclick="_createDocFolder()" style="border:2px dashed var(--border);background:transparent;justify-content:center;gap:6px;color:var(--text-muted)">
          <span style="font-size:18px">＋</span>
          <span style="font-size:12px;font-weight:600">Nova pasta</span>
        </div>
      </div>
    </div>` : '';

  el.innerHTML = `
    <div style="padding:20px 24px">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;flex-wrap:wrap;gap:10px">
        <div>
          <div style="display:flex;align-items:center;gap:8px">
            ${_docCurrentFolder ? `<button onclick="_docCurrentFolder=null;_renderDocsList()" style="background:none;border:none;cursor:pointer;font-size:18px;color:var(--text-muted)" title="Voltar">←</button>` : ''}
            <div style="font-size:18px;font-weight:700">${currentFolderObj ? `📁 ${currentFolderObj.name}` : '📝 Documentos'}</div>
          </div>
          <div style="font-size:12px;color:var(--text-muted);margin-top:2px">${_docs.length} documento${_docs.length!==1?'s':''} no total</div>
        </div>
        <div style="display:flex;gap:8px">
          ${_docCurrentFolder ? `<button class="btn btn-ghost" style="font-size:12px" onclick="_docCurrentFolder=null;_renderDocsList()">← Todos os documentos</button>` : ''}
          <button class="btn btn-primary" onclick="openNewDoc()">+ Novo documento</button>
        </div>
      </div>
      <div style="display:flex;gap:10px;margin-bottom:20px;flex-wrap:wrap;align-items:center">
        <div style="position:relative;flex:1;min-width:180px">
          <span style="position:absolute;left:10px;top:50%;transform:translateY(-50%);color:var(--text-muted);font-size:13px">🔍</span>
          <input type="text" placeholder="Buscar documento ou cliente..." value="${_docsSearch}" style="width:100%;padding:8px 12px 8px 32px;border:1px solid var(--border);border-radius:8px;background:var(--bg-card);color:var(--text-primary);font-size:13px;outline:none;font-family:inherit;box-sizing:border-box" oninput="_docsSearch=this.value;_renderDocsList()">
        </div>
        <div style="display:flex;gap:6px;flex-wrap:wrap">
          ${['todos','geral','contrato','estrategia','cliente'].map(k => {
            const l = k==='todos' ? 'Todos' : _DOC_TYPES[k];
            const active = k===_docsFilter;
            return `<button onclick="_docsFilter='${k}';_renderDocsList()" style="padding:6px 14px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;border:1px solid ${active?'transparent':'var(--border)'};background:${active?'var(--accent)':'var(--bg-card)'};color:${active?'#fff':'var(--text-secondary)'}">${l}</button>`;
          }).join('')}
        </div>
      </div>
      ${foldersHtml}
      ${filtered.length ? `
        <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:var(--text-muted);margin-bottom:10px">📄 Documentos</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:14px">
          ${filtered.map(d => _renderDocCard(d)).join('')}
        </div>` : `
        <div style="padding:56px 24px;text-align:center;background:var(--bg-card);border:2px dashed var(--border);border-radius:16px">
          <div style="font-size:44px;margin-bottom:14px">📄</div>
          <div style="font-size:15px;font-weight:600;margin-bottom:8px">${_docs.length?'Nenhum resultado':'Nenhum documento ainda'}</div>
          <div style="font-size:13px;color:var(--text-muted);margin-bottom:20px">${_docs.length?'Tente ajustar o filtro ou a busca':'Comece criando seu primeiro documento'}</div>
          ${!_docs.length?'<button class="btn btn-primary" onclick="openNewDoc()">+ Criar primeiro documento</button>':''}
        </div>`}
    </div>`;
}

async function _createDocFolder() {
  const name = prompt('Nome da pasta:');
  if (!name?.trim()) return;
  const folder = { id: 'folder_' + Date.now(), name: name.trim(), createdAt: new Date().toISOString() };
  _docFolders.push(folder);
  await window.saveDocFolders(_docFolders);
  _renderDocsList();
}
async function _deleteDocFolder(id) {
  if (!confirm('Excluir esta pasta? Os documentos dentro dela voltarão para a raiz.')) return;
  // Move docs de volta para a raiz
  const docsInFolder = _docs.filter(d => d.folderId === id);
  for (const d of docsInFolder) {
    d.folderId = null;
    if (window.saveCrmDoc) await window.saveCrmDoc(d);
  }
  _docFolders = _docFolders.filter(f => f.id !== id);
  await window.saveDocFolders(_docFolders);
  _renderDocsList();
}

function _renderDocCard(d) {
  const date = d.updatedAt ? new Date(d.updatedAt).toLocaleDateString('pt-BR',{day:'2-digit',month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit'}) : '—';
  const color = _DOC_COLORS[d.type] || '#6b7280';
  const label = _DOC_TYPES[d.type] || 'Geral';
  const preview = d.content ? d.content.replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim().slice(0,90) : 'Documento vazio';
  const createdBy = d.createdByName || '';
  return `
    <div class="doc-card" onclick="openDocEditor('${d.id}')">
      <div style="height:110px;background:linear-gradient(145deg,#f0f2ff,#e8ecff);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;border-bottom:1px solid var(--border)">
        <div style="width:72px;height:92px;background:#fff;border-radius:2px;box-shadow:0 2px 8px rgba(0,0,0,.18);padding:7px 6px;overflow:hidden;font-size:4.5px;line-height:1.5;color:#555;word-break:break-all">${preview}</div>
        <div style="position:absolute;top:8px;right:8px;background:${color};color:#fff;font-size:9px;font-weight:700;padding:2px 8px;border-radius:20px;text-transform:uppercase;letter-spacing:.4px">${label}</div>
      </div>
      <div style="padding:12px 14px">
        <div style="font-size:13.5px;font-weight:700;margin-bottom:4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${d.title||'Documento sem título'}</div>
        ${d.clientName?`<div style="font-size:11px;color:${color};font-weight:600;margin-bottom:4px">👤 ${d.clientName}</div>`:''}
        <div style="font-size:11.5px;color:var(--text-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-bottom:10px">${preview}</div>
        <div style="display:flex;align-items:center;justify-content:space-between">
          <div>
            <div style="font-size:10.5px;color:var(--text-muted)">${date}</div>
            ${createdBy?`<div style="font-size:10px;color:var(--text-muted)">${createdBy}</div>`:''}
          </div>
          <div style="display:flex;gap:4px">
            <button onclick="event.stopPropagation();_docMoveToFolder('${d.id}')" style="background:none;border:none;cursor:pointer;color:var(--text-muted);font-size:13px;padding:3px 6px;border-radius:4px" title="Mover para pasta" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='var(--text-muted)'">📁</button>
            <button onclick="event.stopPropagation();_confirmDeleteDoc('${d.id}')" style="background:none;border:none;cursor:pointer;color:var(--text-muted);font-size:14px;padding:3px 6px;border-radius:4px" title="Excluir" onmouseover="this.style.color='#ef4444'" onmouseout="this.style.color='var(--text-muted)'">🗑️</button>
          </div>
        </div>
      </div>
    </div>`;
}

async function openNewDoc() {
  _currentDoc = { title:'', type:'geral', clientId:'', clientName:'', content:'', createdBy: window.currentUser?.uid||'', createdByName: window.currentUser?.name||'' };
  _docSavedState = false;
  _renderDocEditorUI();
}

async function openDocEditor(docId) {
  const found = _docs.find(d => d.id === docId);
  _currentDoc = found ? { ...found } : null;
  if (!_currentDoc) { renderDocsPage(); return; }
  _docSavedState = true;
  _renderDocEditorUI();
}

function _renderDocEditorUI() {
  currentPage = 'doc-editor';
  document.getElementById('page-title').innerHTML = '<span>Documentos</span> — Editor';
  document.getElementById('top-new-btn').style.display = 'none';
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));

  const typeOpts = Object.entries(_DOC_TYPES).map(([k,l]) => `<option value="${k}" ${_currentDoc.type===k?'selected':''}>${l}</option>`).join('');
  const clientOpts = (clientsData||[]).map(c => `<option value="${c.id||c.name}" data-name="${(c.name||'').replace(/"/g,'&quot;')}" ${_currentDoc.clientId===String(c.id||c.name)?'selected':''}>${c.name}</option>`).join('');

  document.getElementById('main-content').innerHTML = `
    <div style="display:flex;flex-direction:column;height:calc(100vh - 60px);overflow:hidden">

      <!-- Top meta bar -->
      <div style="background:var(--bg-card);border-bottom:1px solid var(--border);padding:7px 14px;display:flex;align-items:center;gap:10px;flex-wrap:wrap;flex-shrink:0;z-index:10">
        <button class="btn btn-ghost" style="font-size:12px;flex-shrink:0;padding:5px 12px" onclick="renderDocsPage()">← Documentos</button>
        <input type="text" id="doc-title-inp" value="${(_currentDoc.title||'').replace(/"/g,'&quot;')}" placeholder="Documento sem título" style="flex:1;min-width:130px;font-size:15px;font-weight:600;border:none;background:transparent;color:var(--text-primary);outline:none;font-family:var(--font);padding:3px 0" oninput="_docOnTitleChange(this.value)">
        <select id="doc-type-sel" onchange="_docOnTypeChange(this.value)" style="padding:5px 10px;border:1px solid var(--border);border-radius:7px;font-size:12px;background:var(--bg-card);color:var(--text-primary);cursor:pointer;outline:none;font-family:var(--font)">${typeOpts}</select>
        <div id="doc-client-wrap" style="${_currentDoc.type==='cliente'?'':'display:none'}">
          <select id="doc-client-sel" onchange="_docOnClientChange(this.value)" style="padding:5px 10px;border:1px solid var(--border);border-radius:7px;font-size:12px;background:var(--bg-card);color:var(--text-primary);cursor:pointer;outline:none;font-family:var(--font)">
            <option value="">— Selecionar cliente —</option>
            ${clientOpts}
          </select>
        </div>
        <select id="doc-folder-sel" onchange="_docOnFolderChange(this.value)" style="padding:5px 10px;border:1px solid var(--border);border-radius:7px;font-size:12px;background:var(--bg-card);color:var(--text-primary);cursor:pointer;outline:none;font-family:var(--font)" title="Pasta do documento">
          <option value="">📂 Sem pasta</option>
          ${_docFolders.map(f => `<option value="${f.id}" ${_currentDoc.folderId===f.id?'selected':''}>📁 ${f.name}</option>`).join('')}
        </select>
        <span id="doc-status" style="font-size:11px;color:#10b981;flex-shrink:0">${_currentDoc.id?'✓ Salvo':'● Novo'}</span>
        <button class="btn btn-primary" style="font-size:12px;padding:5px 14px;flex-shrink:0" onclick="_docSaveNow()">💾 Salvar</button>
      </div>

      <!-- Google Docs–style toolbar -->
      <div id="doc-toolbar" style="background:#f8f9fa;border-bottom:1px solid #e0e0e0;padding:3px 8px;display:flex;align-items:center;gap:2px;flex-wrap:wrap;flex-shrink:0">
        <button class="dtb" title="Desfazer (Ctrl+Z)" onclick="docExec('undo')"><span style="font-size:15px">↩</span></button>
        <button class="dtb" title="Refazer (Ctrl+Y)" onclick="docExec('redo')"><span style="font-size:15px">↪</span></button>
        <div class="dtb-sep"></div>

        <select class="dtb-sel" id="doc-block-sel" style="width:120px" onmousedown="_docSaveRange()" onchange="docFormatBlock(this.value)" title="Estilo do texto">
          <option value="p">Texto normal</option>
          <option value="h1">Título 1</option>
          <option value="h2">Título 2</option>
          <option value="h3">Título 3</option>
          <option value="h4">Título 4</option>
          <option value="blockquote">Citação</option>
          <option value="pre">Código</option>
        </select>
        <div class="dtb-sep"></div>

        <select class="dtb-sel" id="doc-font-sel" style="width:130px" onmousedown="_docSaveRange()" onchange="docSetFont(this.value)" title="Fonte">
          ${_DOC_FONTS.map(f=>`<option value="${f}" style="font-family:${f}">${f}</option>`).join('')}
        </select>

        <div style="display:flex;align-items:center;border:1px solid #d0d0d0;border-radius:4px;overflow:hidden;flex-shrink:0">
          <button class="dtb" style="border-radius:0;border:none;padding:3px 7px;font-size:14px" onclick="docSizeStep(-1)" title="Diminuir tamanho">−</button>
          <select class="dtb-sel" id="doc-size-sel" style="border-radius:0;border:none;border-left:1px solid #d0d0d0;border-right:1px solid #d0d0d0;width:46px;text-align:center;padding:3px 2px" onmousedown="_docSaveRange()" onchange="docSetSizePt(parseInt(this.value))" title="Tamanho da fonte">
            ${_DOC_SIZES.map(s=>`<option value="${s}" ${s===11?'selected':''}>${s}</option>`).join('')}
          </select>
          <button class="dtb" style="border-radius:0;border:none;padding:3px 7px;font-size:14px" onclick="docSizeStep(1)" title="Aumentar tamanho">+</button>
        </div>
        <div class="dtb-sep"></div>

        <button class="dtb" id="dtb-bold"      title="Negrito (Ctrl+B)"    onclick="docExec('bold')"><b style="font-size:13px">B</b></button>
        <button class="dtb" id="dtb-italic"    title="Itálico (Ctrl+I)"   onclick="docExec('italic')"><i style="font-size:13px;font-family:Georgia">I</i></button>
        <button class="dtb" id="dtb-underline" title="Sublinhado (Ctrl+U)" onclick="docExec('underline')"><u style="font-size:13px">U</u></button>
        <button class="dtb" id="dtb-strike"    title="Tachado"             onclick="docExec('strikeThrough')"><s style="font-size:13px">S</s></button>
        <div class="dtb-sep"></div>

        <label class="dtb" title="Cor do texto" style="cursor:pointer;flex-direction:column;gap:1px;height:auto;padding:3px 7px">
          <span style="font-size:12px;font-weight:700">A</span>
          <div id="doc-tc-bar" style="height:3px;width:16px;background:#000;border-radius:2px"></div>
          <input type="color" id="doc-tc-inp" value="#000000" style="position:absolute;opacity:0;width:0;height:0" onchange="docExec('foreColor',this.value);document.getElementById('doc-tc-bar').style.background=this.value">
        </label>
        <label class="dtb" title="Cor de destaque" style="cursor:pointer;flex-direction:column;gap:1px;height:auto;padding:3px 7px">
          <span style="font-size:12px;font-weight:700;background:var(--doc-hl,#ffff00);padding:0 3px">A</span>
          <div style="height:3px;width:16px;background:transparent;border-radius:2px"></div>
          <input type="color" id="doc-hl-inp" value="#ffff00" style="position:absolute;opacity:0;width:0;height:0" onchange="docExec('hiliteColor',this.value);this.previousElementSibling.previousElementSibling.style.background=this.value">
        </label>
        <div class="dtb-sep"></div>

        <button class="dtb" id="dtb-al" title="Alinhar à esquerda"  onclick="docExec('justifyLeft')"   style="font-size:10px;letter-spacing:-1px">▌≡</button>
        <button class="dtb" id="dtb-ac" title="Centralizar"          onclick="docExec('justifyCenter')" style="font-size:10px;letter-spacing:-1px">≡|≡</button>
        <button class="dtb" id="dtb-ar" title="Alinhar à direita"   onclick="docExec('justifyRight')"  style="font-size:10px;letter-spacing:-1px">≡▐</button>
        <button class="dtb" id="dtb-aj" title="Justificar"          onclick="docExec('justifyFull')"   style="font-size:10px">⬛</button>
        <div class="dtb-sep"></div>

        <button class="dtb" title="Lista de tópicos"  onclick="docExec('insertUnorderedList')" style="font-size:11px">•≡</button>
        <button class="dtb" title="Lista numerada"   onclick="docExec('insertOrderedList')"   style="font-size:11px">1≡</button>
        <div class="dtb-sep"></div>

        <button class="dtb" title="Diminuir recuo"  onclick="docExec('outdent')" style="font-size:12px">⇤</button>
        <button class="dtb" title="Aumentar recuo"  onclick="docExec('indent')"  style="font-size:12px">⇥</button>
        <div class="dtb-sep"></div>

        <button class="dtb" title="Inserir link"    onclick="_docInsertLink()"  style="font-size:13px">🔗</button>
        <button class="dtb" title="Inserir imagem"  onclick="_docInsertImage()" style="font-size:13px">🖼️</button>
        <button class="dtb" title="Inserir linha horizontal" onclick="docExec('insertHorizontalRule')" style="font-size:10px;padding:3px 5px">―</button>
        <div class="dtb-sep"></div>
        <button class="dtb" title="Limpar formatação" onclick="docExec('removeFormat')" style="font-size:10px">✕ fmt</button>
        <button class="dtb" title="Inserir quebra de página" onclick="_docInsertPageBreak()" style="font-size:10px;padding:3px 6px" >⊟ pág</button>
        <div class="dtb-sep"></div>
        <button class="dtb" title="Baixar como PDF" onclick="_docPrintPDF()" style="font-size:11px;padding:3px 9px;color:#c62828;font-weight:600">⬇ PDF</button>
        <button class="dtb" title="Baixar como .doc (Word / Google Docs)" onclick="_docDownloadDocx()" style="font-size:11px;padding:3px 9px;color:#1565c0;font-weight:600">⬇ DOC</button>
      </div>

      <!-- Editor paper -->
      <div style="flex:1;overflow-y:auto;background:#e8eaed;padding:28px 16px" id="doc-scroll-wrap">
        <div id="doc-print-wrap" style="position:relative">
          <div id="doc-editor" class="doc-editor-area" contenteditable="true" spellcheck="true"
            data-placeholder="Comece a digitar aqui..."
            onkeyup="_docUpdateTB()" onclick="_docUpdateTB()" onmouseup="_docUpdateTB()"
            oninput="_docOnInput()">${_currentDoc.content||''}</div>
        </div>
      </div>
    </div>`;

  setTimeout(() => {
    const ed = document.getElementById('doc-editor');
    if (!ed) return;
    ed.focus();
    if (!_currentDoc.content) {
      const r = document.createRange(); r.setStart(ed, 0); r.collapse(true);
      const s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
    } else {
      const r = document.createRange(); r.selectNodeContents(ed); r.collapse(false);
      const s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
    }
    _docUpdateTB();

    // ── Paste handler: limpa HTML colado do Google Docs / Word ──────────────
    ed.addEventListener('paste', e => {
      e.preventDefault();
      const html = e.clipboardData.getData('text/html');
      const text = e.clipboardData.getData('text/plain');
      if (html) {
        const tmp = document.createElement('div');
        tmp.innerHTML = html;
        // Remove elementos desnecessários do Google Docs
        tmp.querySelectorAll('meta,style,script,link,title,[class*="gmail"],[class*="goog"]').forEach(n => n.remove());
        // Limpa atributos problemáticos em todos os elementos
        const BLOCK_PROPS = ['width','height','max-width','min-width','overflow','overflow-x','overflow-y',
          'page-break','mso-','margin-left','margin-right','background-color','border'];
        tmp.querySelectorAll('[style]').forEach(el => {
          const cleaned = el.getAttribute('style').split(';')
            .filter(s => { const p = s.split(':')[0].trim().toLowerCase();
              return p && !BLOCK_PROPS.some(bad => p.startsWith(bad)); })
            .join(';');
          if (cleaned.trim()) el.setAttribute('style', cleaned);
          else el.removeAttribute('style');
        });
        // Remove id/class/data- attrs que poluem o HTML
        tmp.querySelectorAll('[id],[class],[data-sheets-value],[data-sheets-formula]').forEach(el => {
          el.removeAttribute('id'); el.removeAttribute('class');
          [...el.attributes].filter(a => a.name.startsWith('data-')).forEach(a => el.removeAttribute(a.name));
        });
        document.execCommand('insertHTML', false, tmp.innerHTML);
      } else {
        document.execCommand('insertText', false, text);
      }
      _docScheduleSave();
    });
  }, 80);
}

// ─── PDF / DOCX download ─────────────────────────────────────────────────────
function _docPrintPDF() {
  const doc = _currentDoc; if (!doc) return;
  // Salva o conteúdo atual primeiro
  const ed = document.getElementById('doc-editor');
  if (ed) doc.content = ed.innerHTML;
  // Abre janela de impressão com CSS limpo
  const win = window.open('', '_blank', 'width=900,height=700');
  if (!win) { alert('Permita pop-ups para baixar o PDF.'); return; }
  // Coleta fontes carregadas
  const fontLink = document.querySelector('link[href*="fonts.googleapis"]')?.href || '';
  win.document.write(`<!DOCTYPE html><html><head>
    <meta charset="UTF-8"><title>${doc.title || 'Documento'}</title>
    ${fontLink ? `<link rel="stylesheet" href="${fontLink}">` : ''}
    <style>
      @page { margin: 2.54cm; size: A4; }
      * { box-sizing: border-box; }
      body { font-family: Arial, sans-serif; font-size: 11pt; color: #1a1a1a; line-height: 1.65; margin: 0; padding: 0; }
      h1{font-size:24pt;font-weight:700;margin:16px 0 8px}
      h2{font-size:18pt;font-weight:700;margin:14px 0 6px}
      h3{font-size:14pt;font-weight:700;margin:12px 0 4px}
      h4{font-size:12pt;font-weight:700;margin:10px 0 4px}
      img{max-width:100%;height:auto}
      table{border-collapse:collapse;max-width:100%;width:auto}
      td,th{border:1px solid #e0e0e0;padding:6px 10px;word-break:break-word}
      pre{background:#f8f9fa;border:1px solid #e0e0e0;padding:12px;font-size:10pt;white-space:pre-wrap}
      blockquote{border-left:4px solid #d0d0d0;margin:12px 0;padding:6px 16px;color:#5f6368}
      .doc-page-break{page-break-before:always;height:0;margin:0;border:none}
      ul,ol{padding-left:28px;margin:8px 0}
      li{margin:3px 0}
      a{color:#1a73e8}
    </style>
  </head><body>${doc.content || ''}</body></html>`);
  win.document.close();
  setTimeout(() => { win.focus(); win.print(); }, 400);
}

function _docDownloadDocx() {
  const doc = _currentDoc; if (!doc) return;
  const ed = document.getElementById('doc-editor');
  if (ed) doc.content = ed.innerHTML;
  // Formato HTML com namespace Word — abre no Word e pode ser importado no Google Docs
  const html = `<!DOCTYPE html>
<html xmlns:o='urn:schemas-microsoft-com:office:office'
      xmlns:w='urn:schemas-microsoft-com:office:word'
      xmlns='http://www.w3.org/TR/REC-html40'>
<head><meta charset='utf-8'><title>${(doc.title||'Documento').replace(/</g,'&lt;')}</title>
<!--[if gte mso 9]><xml><w:WordDocument><w:View>Print</w:View><w:Zoom>100</w:Zoom>
<w:DoNotOptimizeForBrowser/></w:WordDocument></xml><![endif]-->
<style>
  @page { margin: 2.54cm; }
  body { font-family: Arial, sans-serif; font-size: 11pt; color: #1a1a1a; line-height: 1.65; }
  h1{font-size:24pt;font-weight:bold} h2{font-size:18pt;font-weight:bold}
  h3{font-size:14pt;font-weight:bold} h4{font-size:12pt;font-weight:bold}
  img{max-width:100%;height:auto}
  table{border-collapse:collapse;width:auto}
  td,th{border:1px solid #e0e0e0;padding:6px 10px}
  pre{font-family:Courier New,monospace;font-size:10pt;background:#f8f9fa;padding:12px}
  blockquote{border-left:4px solid #d0d0d0;margin:12px 0;padding:6px 16px;color:#5f6368}
  .doc-page-break{page-break-before:always}
</style>
</head><body>${doc.content || ''}</body></html>`;
  const blob = new Blob(['﻿', html], { type: 'application/msword' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = (doc.title || 'documento').replace(/[/\\?%*:|"<>]/g, '_') + '.doc';
  document.body.appendChild(a); a.click();
  setTimeout(() => { document.body.removeChild(a); URL.revokeObjectURL(url); }, 500);
}

function _docInsertPageBreak() {
  _docRestoreRange();
  document.execCommand('insertHTML', false, '<div class="doc-page-break" contenteditable="false">&nbsp;</div><p><br></p>');
  _docSaveRange();
  _docScheduleSave();
}

// ─── Toolbar helpers ───────────────────────────────────────────────────────
function _docSaveRange() {
  const sel = window.getSelection();
  if (sel && sel.rangeCount) _docSavedRange = sel.getRangeAt(0).cloneRange();
}

function _docRestoreRange() {
  const ed = document.getElementById('doc-editor');
  if (!ed) return false;
  ed.focus();
  if (_docSavedRange) {
    try {
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(_docSavedRange);
      return true;
    } catch(_) {}
  }
  return false;
}

function docExec(cmd, val) {
  _docRestoreRange();
  document.execCommand(cmd, false, val !== undefined ? val : null);
  _docSaveRange();
  _docUpdateTB();
  _docScheduleSave();
}

function docFormatBlock(tag) {
  _docRestoreRange();
  document.execCommand('formatBlock', false, tag);
  _docSaveRange();
  _docUpdateTB();
  _docScheduleSave();
}

function docSetFont(family) {
  _docRestoreRange();
  document.execCommand('fontName', false, family);
  _docSaveRange();
  _docScheduleSave();
}

function docSetSizePt(pt) {
  _docRestoreRange();
  // Use font[size=7] trick then replace with real px
  document.execCommand('fontSize', false, '7');
  const ed = document.getElementById('doc-editor');
  if (ed) ed.querySelectorAll('font[size="7"]').forEach(f => { f.removeAttribute('size'); f.style.fontSize = pt + 'pt'; });
  _docSaveRange();
  _docScheduleSave();
}

function docSizeStep(delta) {
  const sel = document.getElementById('doc-size-sel');
  if (!sel) return;
  const cur = parseInt(sel.value) || 11;
  const idx = _DOC_SIZES.indexOf(cur);
  const ni = Math.max(0, Math.min(_DOC_SIZES.length - 1, idx + delta));
  sel.value = _DOC_SIZES[ni];
  docSetSizePt(_DOC_SIZES[ni]);
}

function _docUpdateTB() {
  // Active states
  [['bold','dtb-bold'],['italic','dtb-italic'],['underline','dtb-underline'],['strikeThrough','dtb-strike']].forEach(([cmd,id]) => {
    const b = document.getElementById(id);
    if (b) b.classList.toggle('dtb-active', !!document.queryCommandState(cmd));
  });
  [['justifyLeft','dtb-al'],['justifyCenter','dtb-ac'],['justifyRight','dtb-ar'],['justifyFull','dtb-aj']].forEach(([cmd,id]) => {
    const b = document.getElementById(id);
    if (b) b.classList.toggle('dtb-active', !!document.queryCommandState(cmd));
  });
  // Block selector
  const bs = document.getElementById('doc-block-sel');
  if (bs) {
    const v = (document.queryCommandValue('formatBlock')||'p').toLowerCase().replace(/[<>]/g,'');
    if (['p','h1','h2','h3','h4','blockquote','pre'].includes(v)) bs.value = v;
    else bs.value = 'p';
  }
  // Font selector — sincroniza com a fonte no cursor
  const fs = document.getElementById('doc-font-sel');
  if (fs) {
    const rawFont = document.queryCommandValue('fontName') || '';
    // queryCommandValue pode retornar múltiplas fontes separadas por vírgula
    const firstFont = rawFont.split(',')[0].replace(/['"]/g,'').trim();
    const matched = _DOC_FONTS.find(f => f.toLowerCase() === firstFont.toLowerCase());
    if (matched) fs.value = matched;
  }
  _docSaveRange();
}

function _docInsertLink() {
  _docSaveRange();
  const url = prompt('URL do link (ex: https://...):');
  if (!url || !url.trim()) return;
  _docRestoreRange();
  document.execCommand('createLink', false, url.trim());
  const ed = document.getElementById('doc-editor');
  if (ed) ed.querySelectorAll(`a[href="${url.trim()}"]`).forEach(a => { a.target = '_blank'; a.rel = 'noopener noreferrer'; });
  _docSaveRange();
  _docScheduleSave();
}

function _docInsertImage() {
  _docSaveRange();

  // Build Google Docs–style image insert modal
  const modal = document.createElement('div');
  modal.id = 'doc-img-modal';
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:99999;display:flex;align-items:center;justify-content:center;animation:fadeIn .15s ease';
  modal.innerHTML = `
    <div style="background:#fff;border-radius:12px;width:500px;max-width:calc(100vw - 32px);box-shadow:0 8px 40px rgba(0,0,0,.3);overflow:hidden">
      <div style="padding:18px 22px 0">
        <div style="font-size:15px;font-weight:600;color:#202124;margin-bottom:14px">Inserir imagem</div>
        <div style="display:flex;border-bottom:2px solid #e8eaed;gap:0;margin-bottom:0">
          <button id="dimg-tab-up" onclick="_docImgTab('up')" style="padding:9px 18px;border:none;background:none;font-size:13px;cursor:pointer;color:#1a73e8;font-weight:600;border-bottom:2px solid #1a73e8;margin-bottom:-2px;font-family:inherit">Do computador</button>
          <button id="dimg-tab-url" onclick="_docImgTab('url')" style="padding:9px 18px;border:none;background:none;font-size:13px;cursor:pointer;color:#5f6368;font-family:inherit">Por URL</button>
        </div>
      </div>

      <div style="padding:20px 22px">
        <!-- Upload tab -->
        <div id="dimg-panel-up">
          <div id="dimg-drop" onclick="document.getElementById('dimg-file-inp').click()"
            ondragover="event.preventDefault();this.style.borderColor='#1a73e8';this.style.background='#f0f4ff'"
            ondragleave="this.style.borderColor='#dadce0';this.style.background='#fafafa'"
            ondrop="_docImgDrop(event)"
            style="border:2px dashed #dadce0;border-radius:10px;padding:36px 20px;text-align:center;cursor:pointer;background:#fafafa;transition:all .2s">
            <div style="font-size:40px;margin-bottom:10px">🖼️</div>
            <div style="font-size:13.5px;color:#202124;font-weight:500">Clique para selecionar uma imagem</div>
            <div style="font-size:12px;color:#9aa0a6;margin-top:5px">ou arraste e solte aqui</div>
            <div style="font-size:11px;color:#bdc1c6;margin-top:3px">JPG, PNG, GIF, WebP</div>
          </div>
          <input type="file" id="dimg-file-inp" accept="image/*" style="display:none" onchange="_docImgFromFile(this)">
          <div id="dimg-up-preview" style="margin-top:14px;text-align:center"></div>
        </div>

        <!-- URL tab -->
        <div id="dimg-panel-url" style="display:none">
          <label style="display:block;font-size:12px;font-weight:600;color:#5f6368;margin-bottom:6px;text-transform:uppercase;letter-spacing:.4px">URL da imagem</label>
          <input type="text" id="dimg-url-inp" placeholder="https://..." autocomplete="off"
            style="width:100%;padding:10px 13px;border:1px solid #dadce0;border-radius:8px;font-size:13px;outline:none;box-sizing:border-box;font-family:inherit;color:#202124"
            oninput="_docImgUrlPreview(this.value)" onfocus="this.style.borderColor='#1a73e8'" onblur="this.style.borderColor='#dadce0'">
          <div id="dimg-url-preview" style="margin-top:14px;min-height:60px;text-align:center"></div>
        </div>
      </div>

      <div style="padding:0 22px 18px;display:flex;justify-content:flex-end;gap:8px">
        <button onclick="document.getElementById('doc-img-modal').remove()" style="padding:8px 22px;border:1px solid #dadce0;border-radius:6px;background:transparent;font-size:13px;cursor:pointer;font-family:inherit;color:#3c4043">Cancelar</button>
        <button id="dimg-ok-btn" onclick="_docImgInsertUrl()" style="padding:8px 22px;border:none;border-radius:6px;background:#1a73e8;color:#fff;font-size:13px;cursor:pointer;font-family:inherit;display:none">Inserir</button>
      </div>
    </div>`;

  document.body.appendChild(modal);
  modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
}

window._docImgTab = function(tab) {
  document.getElementById('dimg-panel-up').style.display  = tab === 'up'  ? 'block' : 'none';
  document.getElementById('dimg-panel-url').style.display = tab === 'url' ? 'block' : 'none';
  const tabUp  = document.getElementById('dimg-tab-up');
  const tabUrl = document.getElementById('dimg-tab-url');
  if (tabUp)  { tabUp.style.color  = tab==='up'  ? '#1a73e8' : '#5f6368'; tabUp.style.borderBottom  = tab==='up'  ? '2px solid #1a73e8' : 'none'; tabUp.style.fontWeight  = tab==='up'  ? '600' : '400'; tabUp.style.marginBottom  = tab==='up'  ? '-2px' : '0'; }
  if (tabUrl) { tabUrl.style.color = tab==='url' ? '#1a73e8' : '#5f6368'; tabUrl.style.borderBottom = tab==='url' ? '2px solid #1a73e8' : 'none'; tabUrl.style.fontWeight = tab==='url' ? '600' : '400'; tabUrl.style.marginBottom = tab==='url' ? '-2px' : '0'; }
  const ok = document.getElementById('dimg-ok-btn');
  if (ok) ok.style.display = tab === 'url' ? 'inline-block' : 'none';
  if (tab === 'url') setTimeout(() => document.getElementById('dimg-url-inp')?.focus(), 50);
};

function _docImgProcess(file) {
  if (!file || !file.type.startsWith('image/')) return;

  // Show progress indicator in the upload panel
  const prev = document.getElementById('dimg-up-preview');
  if (prev) {
    prev.innerHTML = `
      <div style="display:flex;flex-direction:column;align-items:center;gap:8px;padding:12px 0">
        <div style="width:180px;height:6px;background:#e8eaed;border-radius:3px;overflow:hidden">
          <div id="dimg-progress-bar" style="height:100%;width:0%;background:#1a73e8;border-radius:3px;transition:width 0.2s"></div>
        </div>
        <div id="dimg-progress-label" style="font-size:12px;color:#5f6368">Enviando... 0%</div>
      </div>`;
  }

  // Upload to Firebase Storage and insert download URL
  if (window.storageUpload && window.storageGenId) {
    const ext = file.type === 'image/png' ? 'png' : file.type === 'image/gif' ? 'gif' : file.type === 'image/webp' ? 'webp' : 'jpg';
    const path = 'docs/images/' + window.storageGenId() + '.' + ext;

    window.storageUpload(file, path, (pct) => {
      const bar   = document.getElementById('dimg-progress-bar');
      const label = document.getElementById('dimg-progress-label');
      if (bar)   bar.style.width = pct + '%';
      if (label) label.textContent = 'Enviando... ' + pct + '%';
    }).then(downloadUrl => {
      const modal = document.getElementById('doc-img-modal');
      if (modal) modal.remove();
      _docRestoreRange();
      document.execCommand('insertImage', false, downloadUrl);
      _docImgStyleInserted();
      _docSaveRange();
      _docScheduleSave();
    }).catch(err => {
      console.error('Storage upload error, falling back to base64:', err);
      _docImgProcessBase64(file);
    });
  } else {
    // Fallback to base64 when Storage is not available
    _docImgProcessBase64(file);
  }
}

function _docImgProcessBase64(file) {
  const reader = new FileReader();
  reader.onload = e => {
    const img = new Image();
    img.onload = () => {
      // Compress: cap at 1200px wide, 85% JPEG quality
      const maxW = 1200, maxH = 1200;
      let w = img.width, h = img.height;
      if (w > maxW) { h = Math.round(h * maxW / w); w = maxW; }
      if (h > maxH) { w = Math.round(w * maxH / h); h = maxH; }
      const canvas = document.createElement('canvas');
      canvas.width = w; canvas.height = h;
      canvas.getContext('2d').drawImage(img, 0, 0, w, h);
      const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
      const modal = document.getElementById('doc-img-modal');
      if (modal) modal.remove();
      _docRestoreRange();
      document.execCommand('insertImage', false, dataUrl);
      _docImgStyleInserted();
      _docSaveRange();
      _docScheduleSave();
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

window._docImgFromFile = function(input) {
  const file = input.files[0];
  if (!file) return;
  // Show preview while processing
  const prev = document.getElementById('dimg-up-preview');
  if (prev) {
    const tmpUrl = URL.createObjectURL(file);
    prev.innerHTML = `<img src="${tmpUrl}" style="max-height:140px;max-width:100%;border-radius:8px;object-fit:contain;box-shadow:0 2px 8px rgba(0,0,0,.12)">
      <div style="font-size:11px;color:#9aa0a6;margin-top:6px">Processando...</div>`;
  }
  _docImgProcess(file);
};

window._docImgDrop = function(e) {
  e.preventDefault();
  const drop = document.getElementById('dimg-drop');
  if (drop) { drop.style.borderColor = '#dadce0'; drop.style.background = '#fafafa'; }
  const file = e.dataTransfer.files[0];
  if (file) _docImgProcess(file);
};

window._docImgUrlPreview = function(url) {
  const prev = document.getElementById('dimg-url-preview');
  const ok   = document.getElementById('dimg-ok-btn');
  if (!url || !url.startsWith('http')) { if (prev) prev.innerHTML = ''; if (ok) ok.style.display = 'none'; return; }
  if (prev) prev.innerHTML = `<img src="${url}" style="max-width:100%;max-height:160px;border-radius:8px;object-fit:contain;box-shadow:0 2px 8px rgba(0,0,0,.12)" onerror="this.parentElement.innerHTML='<span style=color:#ef4444;font-size:12px>Não foi possível carregar a imagem</span>'">`;
  if (ok) ok.style.display = 'inline-block';
};

window._docImgInsertUrl = function() {
  const url = document.getElementById('dimg-url-inp')?.value?.trim();
  if (!url) return;
  const modal = document.getElementById('doc-img-modal');
  if (modal) modal.remove();
  _docRestoreRange();
  document.execCommand('insertImage', false, url);
  _docImgStyleInserted();
  _docSaveRange();
  _docScheduleSave();
};

function _docImgStyleInserted() {
  const ed = document.getElementById('doc-editor');
  if (!ed) return;
  ed.querySelectorAll('img:not([data-dstyled])').forEach(img => {
    img.dataset.dstyled = '1';
    img.style.maxWidth = '100%';
    img.style.borderRadius = '4px';
    img.style.cursor = 'default';
    img.style.display = 'block';
    img.style.margin = '8px 0';
  });
}

// ─── Metadata change handlers ─────────────────────────────────────────────
function _docOnTitleChange(val) {
  if (!_currentDoc) return;
  _currentDoc.title = val;
  _docScheduleSave();
}

function _docOnFolderChange(val) {
  if (!_currentDoc) return;
  _currentDoc.folderId = val || null;
  _docScheduleSave();
}

function _docOnTypeChange(val) {
  if (!_currentDoc) return;
  _currentDoc.type = val;
  const wrap = document.getElementById('doc-client-wrap');
  if (wrap) wrap.style.display = val === 'cliente' ? 'block' : 'none';
  if (val !== 'cliente') { _currentDoc.clientId = ''; _currentDoc.clientName = ''; }
  _docScheduleSave();
}

function _docOnClientChange(val) {
  if (!_currentDoc) return;
  const sel = document.getElementById('doc-client-sel');
  const opt = sel ? sel.options[sel.selectedIndex] : null;
  _currentDoc.clientId = val;
  _currentDoc.clientName = opt ? (opt.dataset.name || opt.textContent.trim()) : '';
  _docScheduleSave();
}

function _docOnInput() {
  const ed = document.getElementById('doc-editor');
  if (!_currentDoc || !ed) return;
  _currentDoc.content = ed.innerHTML;
  const st = document.getElementById('doc-status');
  if (st) { st.textContent = '● Não salvo'; st.style.color = '#f59e0b'; }
  _docScheduleSave();
}

// ─── Save ─────────────────────────────────────────────────────────────────
function _docScheduleSave() {
  if (_docSaveTimer) clearTimeout(_docSaveTimer);
  _docSaveTimer = setTimeout(_docSaveNow, 2000);
}

async function _docSaveNow() {
  if (!_currentDoc || !window.saveCrmDoc) return;
  if (_docSaveTimer) { clearTimeout(_docSaveTimer); _docSaveTimer = null; }

  // Grab latest content from DOM
  const ed = document.getElementById('doc-editor');
  if (ed) _currentDoc.content = ed.innerHTML;
  const ti = document.getElementById('doc-title-inp');
  if (ti) _currentDoc.title = ti.value;

  const st = document.getElementById('doc-status');
  if (st) { st.textContent = '⏳ Salvando...'; st.style.color = 'var(--text-muted)'; }

  const id = await window.saveCrmDoc(_currentDoc);
  if (id) {
    if (!_currentDoc.id) {
      _currentDoc.id = id;
      _docs.unshift({ ..._currentDoc });
    } else {
      const idx = _docs.findIndex(d => d.id === id);
      if (idx >= 0) _docs[idx] = { ..._currentDoc };
      else _docs.unshift({ ..._currentDoc });
    }
    if (st) { st.textContent = '✓ Salvo'; st.style.color = '#10b981'; }
  } else {
    if (st) { st.textContent = '✕ Erro ao salvar'; st.style.color = '#ef4444'; }
  }
}

async function _docMoveToFolder(docId) {
  if (!_docFolders.length) {
    if (!confirm('Nenhuma pasta criada. Criar uma agora?')) return;
    await _createDocFolder();
  }
  const opts = ['(Raiz — sem pasta)', ..._docFolders.map(f => f.name)];
  const idx = _docFolders.length === 1 ? 1 : parseInt(prompt(
    'Escolha a pasta (número):\n' + opts.map((o,i) => `${i}: ${o}`).join('\n')
  ));
  if (isNaN(idx) || idx < 0 || idx > _docFolders.length) return;
  const doc = _docs.find(d => d.id === docId);
  if (!doc) return;
  doc.folderId = idx === 0 ? null : _docFolders[idx - 1].id;
  if (window.saveCrmDoc) await window.saveCrmDoc(doc);
  _renderDocsList();
}

async function _confirmDeleteDoc(id) {
  const d = _docs.find(x => x.id === id);
  if (!confirm(`Excluir "${d?.title||'este documento'}"? Esta ação não pode ser desfeita.`)) return;
  if (window.deleteCrmDoc) await window.deleteCrmDoc(id);
  _docs = _docs.filter(x => x.id !== id);
  _renderDocsList();
}

// ─── ARQUIVOS (Firebase Storage) ───────────────────────────────────────────────
let _filesData = [];
let _filesSearch = '';
let _filesUploading = false;
let _filesClientView = null; // null = all, string = clientId being viewed

async function renderFilesPage() {
  _filesClientView = null;
  const el = document.getElementById('main-content');
  el.innerHTML = '<div style="padding:32px;text-align:center;color:var(--text-muted)">⏳ Carregando arquivos...</div>';
  try {
    _filesData = window.loadCrmFiles ? (await window.loadCrmFiles()) : [];
  } catch(e) {
    _filesData = [];
  }
  _renderFilesList();
}

function _renderFilesList() {
  const el = document.getElementById('main-content');
  if (!el) return;

  const tsOf = v => { if (!v) return 0; if (typeof v === 'number') return v; return new Date(v).getTime() || 0; };
  const q = _filesSearch.toLowerCase();

  // ── Vista de pasta de cliente específico ──────────────────────────────────
  if (_filesClientView) {
    const client = clientsData.find(c => c.id === _filesClientView);
    const clientName = client?.nome || client?.empresa || 'Cliente';
    const clientFiles = _filesData.filter(f => f.clientId === _filesClientView);
    const atualizacoes = clientFiles.filter(f => f.category === 'atualizacao');
    const documentos   = clientFiles.filter(f => f.category !== 'atualizacao');
    const driveFolders = _getDriveLinks().filter(l => l.clientId === _filesClientView || (l.name && l.name === clientName));

    const fileSection = (title, files) => !files.length ? '' : `
      <div style="margin-bottom:24px">
        <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.7px;color:var(--text-muted);margin-bottom:12px">${title}</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px">
          ${files.map(f => _filesCard(f)).join('')}
        </div>
      </div>`;

    el.innerHTML = `
    <div class="page-wrap">
      <!-- Breadcrumb -->
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:20px;flex-wrap:wrap">
        <button onclick="_filesClientView=null;_renderFilesList()" class="btn btn-ghost" style="font-size:12px;padding:4px 10px">← Arquivos</button>
        <span style="color:var(--text-muted);font-size:13px">/</span>
        <span style="font-size:15px;font-weight:700">📁 ${clientName}</span>
        <div style="margin-left:auto;display:flex;gap:8px">
          <button onclick="_filesOpenUpload()" style="padding:7px 14px;background:var(--accent);color:#fff;border:none;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;font-family:var(--font)">⬆️ Enviar para esta pasta</button>
        </div>
      </div>
      <div id="files-upload-progress" style="display:none;margin-bottom:16px"></div>
      <input type="file" id="files-input" multiple style="display:none" onchange="_filesOnInputChange(this)">

      <!-- Pastas Drive vinculadas -->
      ${driveFolders.length ? `
      <div style="margin-bottom:24px">
        <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.7px;color:var(--text-muted);margin-bottom:12px">📁 Pastas Google Drive</div>
        <div style="display:flex;flex-wrap:wrap;gap:10px">
          ${driveFolders.map(l => `
            <a href="${l.url}" target="_blank" style="display:inline-flex;align-items:center;gap:8px;padding:10px 16px;border-radius:10px;background:rgba(251,188,4,.1);border:1.5px solid rgba(251,188,4,.3);text-decoration:none;color:var(--text-primary)">
              <span style="font-size:22px">📁</span>
              <div>
                <div style="font-size:13px;font-weight:700">${l.name}</div>
                <div style="font-size:10px;color:var(--text-muted)">Abrir no Google Drive ↗</div>
              </div>
            </a>`).join('')}
        </div>
      </div>` : ''}

      ${fileSection('📢 Atualizações', atualizacoes)}
      ${fileSection('📄 Documentos', documentos)}

      ${!clientFiles.length && !driveFolders.length ? `
        <div style="text-align:center;padding:48px 20px;color:var(--text-muted)">
          <div style="font-size:36px;margin-bottom:12px">📂</div>
          <div style="font-size:14px">Nenhum arquivo ainda para ${clientName}.</div>
          <div style="font-size:12px;margin-top:6px">Envie arquivos ou adicione pastas do Drive nos elementos deste cliente.</div>
        </div>` : ''}
    </div>`;
    return;
  }

  // ── Vista principal ───────────────────────────────────────────────────────
  const filtered = q
    ? _filesData.filter(f => f.name.toLowerCase().includes(q) || (f.uploaderName||'').toLowerCase().includes(q) || (f.clientNome||'').toLowerCase().includes(q))
    : _filesData;
  const sorted = [...filtered].sort((a,b) => tsOf(b.createdAt) - tsOf(a.createdAt));
  const totalSize = _filesData.reduce((s, f) => s + (f.size||0), 0);

  // Clientes que têm arquivos ou pastas Drive
  const clientIdsWithFiles = [...new Set(_filesData.map(f => f.clientId).filter(Boolean))];
  const driveLinks = _getDriveLinks();
  const activeClients = clientsData.filter(c => !c.archived && (
    clientIdsWithFiles.includes(c.id) || driveLinks.some(l => l.clientId === c.id || l.name === (c.nome||c.empresa||''))
  ));
  // Sempre mostrar todos os clientes ativos como pastas
  const allActiveClients = clientsData.filter(c => !c.archived);

  el.innerHTML = `
  <div class="page-wrap">
    <!-- Header bar -->
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px;flex-wrap:wrap">
      <div style="flex:1;min-width:200px">
        <div style="font-size:20px;font-weight:700;color:var(--text-primary)">🗂️ Arquivos da Equipe</div>
        <div style="font-size:12px;color:var(--text-muted);margin-top:2px">${_filesData.length} arquivo${_filesData.length!==1?'s':''} · ${_fmtBytes(totalSize)} usado${totalSize!==1?'s':''}</div>
      </div>
      <div style="position:relative;flex-shrink:0">
        <span style="position:absolute;left:10px;top:50%;transform:translateY(-50%);font-size:14px;pointer-events:none">🔍</span>
        <input type="text" placeholder="Buscar arquivos..." value="${_filesSearch}"
          oninput="_filesSearch=this.value;_renderFilesList()"
          style="padding:8px 12px 8px 32px;border:1.5px solid var(--border);border-radius:8px;background:var(--bg-card2);color:var(--text-primary);font-family:var(--font);font-size:13px;outline:none;width:200px">
      </div>
      <button onclick="_filesOpenUpload()"
        style="padding:9px 18px;background:var(--accent);color:#fff;border:none;border-radius:8px;font-family:var(--font);font-size:13px;font-weight:600;cursor:pointer;flex-shrink:0">
        ⬆️ Enviar arquivo
      </button>
      <button onclick="_filesAddLink()"
        style="padding:9px 14px;background:var(--bg-card2);color:var(--text-primary);border:1.5px solid var(--border);border-radius:8px;font-family:var(--font);font-size:13px;font-weight:600;cursor:pointer;flex-shrink:0">
        🔗 Adicionar link
      </button>
    </div>

    <!-- Drop zone -->
    <div id="files-dropzone" ondragover="_filesOnDragOver(event)" ondragleave="_filesOnDragLeave(event)" ondrop="_filesOnDrop(event)"
      style="border:2px dashed var(--border);border-radius:12px;padding:24px;text-align:center;margin-bottom:24px;background:var(--bg-card2);transition:all .2s;cursor:pointer"
      onclick="document.getElementById('files-input').click()">
      <div style="font-size:24px;margin-bottom:6px">📁</div>
      <div style="font-size:13px;color:var(--text-muted)">Arraste arquivos aqui ou <span style="color:var(--accent);font-weight:600">clique para selecionar</span></div>
      <div style="font-size:11px;color:var(--text-muted);margin-top:3px">PDF, imagens, planilhas, apresentações, vídeos — até 50 MB</div>
      <input type="file" id="files-input" multiple style="display:none" onchange="_filesOnInputChange(this)">
    </div>
    <div id="files-upload-progress" style="display:none;margin-bottom:16px"></div>

    <!-- Pastas de clientes -->
    ${allActiveClients.length ? `
    <div style="margin-bottom:28px">
      <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.7px;color:var(--text-muted);margin-bottom:12px">👥 Pastas de Clientes</div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:10px">
        ${allActiveClients.map(c => {
          const count = _filesData.filter(f => f.clientId === c.id).length;
          const hasDrive = driveLinks.some(l => l.clientId === c.id || l.name === (c.nome||c.empresa||''));
          return `
          <div onclick="_filesClientView='${c.id}';_renderFilesList()"
            style="background:var(--bg-card);border:1.5px solid var(--border);border-radius:12px;padding:14px;cursor:pointer;transition:all .15s;display:flex;flex-direction:column;gap:6px"
            onmouseover="this.style.borderColor='var(--accent)';this.style.boxShadow='0 4px 14px rgba(124,92,252,.1)'"
            onmouseout="this.style.borderColor='var(--border)';this.style.boxShadow=''">
            <div style="font-size:24px">📁</div>
            <div style="font-size:12px;font-weight:700;color:var(--text-primary);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${c.nome||c.empresa||'—'}</div>
            <div style="font-size:10.5px;color:var(--text-muted);display:flex;gap:8px;flex-wrap:wrap">
              ${count ? `<span>📎 ${count} arquivo${count!==1?'s':''}</span>` : '<span style="opacity:.6">Sem arquivos</span>'}
              ${hasDrive ? '<span>📁 Drive</span>' : ''}
            </div>
          </div>`;
        }).join('')}
      </div>
    </div>` : ''}

    <!-- Arquivos gerais (sem cliente vinculado) -->
    ${sorted.filter(f => !f.clientId || q).length > 0 ? `
    <div>
      <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.7px;color:var(--text-muted);margin-bottom:12px">
        ${q ? '🔍 Resultados da busca' : '📎 Arquivos gerais'}
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:14px">
        ${(q ? sorted : sorted.filter(f => !f.clientId)).map(f => _filesCard(f)).join('')}
      </div>
    </div>` : (!allActiveClients.length && !sorted.length ? `
      <div style="text-align:center;padding:48px 20px;color:var(--text-muted)">
        <div style="font-size:36px;margin-bottom:12px">📂</div>
        <div style="font-size:14px">Nenhum arquivo enviado ainda.</div>
        <div style="font-size:12px;margin-top:6px">Use o botão acima para enviar o primeiro arquivo.</div>
      </div>` : '')}
  </div>`;
}

function _filesCard(f) {
  const icon = _filesIcon(f.type || '');
  const date = f.createdAt ? new Date(f.createdAt).toLocaleDateString('pt-BR') : '—';
  const size = _fmtBytes(f.size || 0);
  const uploader = f.uploaderName || f.uploaderEmail || 'Equipe';
  const safeName = (f.name||'Arquivo').replace(/</g,'&lt;').replace(/>/g,'&gt;');

  return `
  <div style="background:var(--bg-card);border:1.5px solid var(--border);border-radius:12px;padding:16px;display:flex;flex-direction:column;gap:10px;transition:box-shadow .15s" onmouseover="this.style.boxShadow='0 4px 16px rgba(0,0,0,.1)'" onmouseout="this.style.boxShadow=''">
    <div style="display:flex;align-items:flex-start;gap:10px">
      <div style="font-size:28px;flex-shrink:0;line-height:1">${icon}</div>
      <div style="min-width:0;flex:1">
        <div style="font-size:13px;font-weight:600;color:var(--text-primary);overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${safeName}">${safeName}</div>
        <div style="font-size:11px;color:var(--text-muted);margin-top:2px">${size} · ${date}</div>
        <div style="font-size:11px;color:var(--text-muted)">por ${uploader}</div>
      </div>
    </div>
    <div style="display:flex;gap:8px;margin-top:auto">
      <a href="${f.url}" target="_blank" download="${safeName}"
        style="flex:1;text-align:center;padding:7px 10px;background:var(--accent);color:#fff;text-decoration:none;border-radius:7px;font-size:12px;font-weight:600">
        ⬇ Baixar
      </a>
      ${_filesIsPreviewable(f.type) ? `
        <a href="${f.url}" target="_blank"
          style="padding:7px 12px;border:1.5px solid var(--border);background:var(--bg-card2);color:var(--text-primary);text-decoration:none;border-radius:7px;font-size:12px">
          👁 Ver
        </a>
      ` : ''}
      <button onclick="_filesDelete('${f.id}')"
        style="padding:7px 10px;border:1.5px solid #fca5a5;background:transparent;color:#ef4444;border-radius:7px;font-size:12px;cursor:pointer;font-family:var(--font)">
        🗑
      </button>
    </div>
  </div>`;
}

function _filesIcon(mimeType) {
  if (!mimeType) return '📎';
  if (mimeType.startsWith('image/'))   return '🖼️';
  if (mimeType.startsWith('video/'))   return '🎬';
  if (mimeType.startsWith('audio/'))   return '🎵';
  if (mimeType.includes('pdf'))        return '📕';
  if (mimeType.includes('word') || mimeType.includes('document'))  return '📝';
  if (mimeType.includes('sheet') || mimeType.includes('excel') || mimeType.includes('csv')) return '📊';
  if (mimeType.includes('presentation') || mimeType.includes('powerpoint')) return '📊';
  if (mimeType.includes('zip') || mimeType.includes('rar') || mimeType.includes('archive')) return '🗜️';
  if (mimeType.includes('text/'))      return '📄';
  return '📎';
}

function _filesIsPreviewable(mimeType) {
  if (!mimeType) return false;
  return mimeType.startsWith('image/') || mimeType.includes('pdf');
}

function _fmtBytes(bytes) {
  if (!bytes) return '0 B';
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024*1024) return (bytes/1024).toFixed(1) + ' KB';
  if (bytes < 1024*1024*1024) return (bytes/(1024*1024)).toFixed(1) + ' MB';
  return (bytes/(1024*1024*1024)).toFixed(2) + ' GB';
}

function _filesOpenUpload() {
  document.getElementById('files-input')?.click();
}

function _filesAddLink() {
  _showDriveLinkModal({ isDrive: false, title: '🔗 Adicionar link de documento', onConfirm: async ({ url, name }) => {
    const meta = {
      id: window.storageGenId ? window.storageGenId() : Date.now().toString(36),
      name, url, fullPath: url, size: 0, type: 'link',
      uploadedBy: window.currentUser?.uid || '',
      uploadedByName: window.currentUser?.name || '',
      folderId: '', createdAt: Date.now(),
    };
    if (window.saveCrmFile) { const fid = await window.saveCrmFile(meta); if (fid) meta.id = fid; }
    _filesData.unshift(meta);
    _renderFilesList();
    addNotif('Link "' + name + '" adicionado', 'success');
  }});
}

function _filesOnDragOver(e) {
  e.preventDefault();
  const dz = document.getElementById('files-dropzone');
  if (dz) { dz.style.borderColor = 'var(--accent)'; dz.style.background = 'rgba(26,115,232,.06)'; }
}

function _filesOnDragLeave(e) {
  const dz = document.getElementById('files-dropzone');
  if (dz) { dz.style.borderColor = 'var(--border)'; dz.style.background = 'var(--bg-card2)'; }
}

function _filesOnDrop(e) {
  e.preventDefault();
  _filesOnDragLeave(e);
  const files = Array.from(e.dataTransfer.files);
  if (files.length) _filesUploadAll(files);
}

function _filesOnInputChange(input) {
  const files = Array.from(input.files);
  if (files.length) _filesUploadAll(files);
  input.value = ''; // Reset so same file can be uploaded again
}

async function _filesUploadAll(files) {
  if (_filesUploading) return;
  if (!window.storageUpload || !window.storageGenId) {
    alert('Serviço de armazenamento não disponível. Aguarde o carregamento da página e tente novamente.');
    return;
  }

  const MAX_SIZE = 50 * 1024 * 1024; // 50 MB
  const oversized = files.filter(f => f.size > MAX_SIZE);
  if (oversized.length) {
    alert(`Arquivo(s) muito grande(s):\n${oversized.map(f => f.name + ' (' + _fmtBytes(f.size) + ')').join('\n')}\n\nLimite: 50 MB por arquivo.`);
    return;
  }

  _filesUploading = true;
  const progressEl = document.getElementById('files-upload-progress');
  if (progressEl) progressEl.style.display = 'block';

  for (const file of files) {
    const fileId = window.storageGenId();
    const ext = file.name.split('.').pop();
    const path = 'shared/' + fileId + '.' + ext;

    // Show per-file progress
    if (progressEl) {
      progressEl.innerHTML = `
        <div style="background:var(--bg-card);border:1.5px solid var(--border);border-radius:10px;padding:14px 16px;display:flex;align-items:center;gap:14px">
          <div style="font-size:22px">${_filesIcon(file.type)}</div>
          <div style="flex:1;min-width:0">
            <div style="font-size:13px;font-weight:500;color:var(--text-primary);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${file.name}</div>
            <div style="margin-top:6px;height:5px;background:#e8eaed;border-radius:3px;overflow:hidden">
              <div id="fupload-bar" style="height:100%;width:0%;background:var(--accent);border-radius:3px;transition:width 0.2s"></div>
            </div>
            <div id="fupload-label" style="font-size:11px;color:var(--text-muted);margin-top:3px">0%</div>
          </div>
        </div>`;
    }

    try {
      const downloadUrl = await window.storageUpload(file, path, (pct) => {
        const bar = document.getElementById('fupload-bar');
        const lbl = document.getElementById('fupload-label');
        if (bar) bar.style.width = pct + '%';
        if (lbl) lbl.textContent = pct + '%';
      });

      // Save metadata to Firestore
      const user = window.currentUser;
      const meta = {
        id: fileId,
        name: file.name,
        url: downloadUrl,
        fullPath: path,
        size: file.size,
        type: file.type || '',
        uploaderEmail: user?.email || '',
        uploaderName: user?.name || user?.email || 'Equipe',
        createdAt: Date.now(),
      };

      if (window.saveCrmFile) {
        const firestoreId = await window.saveCrmFile(meta);
        // Use Firestore doc ID so deletion works correctly
        if (firestoreId) meta.id = firestoreId;
      }
      _filesData.unshift(meta);

    } catch(err) {
      console.error('Upload error:', err);
      const isPresetErr = err.message && (err.message.includes('preset') || err.message.includes('400') || err.message.includes('unsigned'));
      const helpText = isPresetErr
        ? ' — Verifique se o upload preset <b>upload_crm</b> está como <b>Unsigned</b> no painel Cloudinary, ou use "🔗 Adicionar link" como alternativa.'
        : '';
      if (progressEl) progressEl.innerHTML = `<div style="padding:10px;background:#fef2f2;border:1.5px solid #fca5a5;border-radius:8px;color:#dc2626;font-size:13px">❌ Falha ao enviar "${file.name}": ${err.message || 'erro desconhecido'}${helpText}</div>`;
      await new Promise(r => setTimeout(r, 4000));
    }
  }

  _filesUploading = false;
  if (progressEl) progressEl.style.display = 'none';
  _renderFilesList();
}

async function _filesDelete(id) {
  const f = _filesData.find(x => x.id === id);
  if (!f) return;
  if (!confirm(`Excluir "${f.name}"?\n\nEsta ação não pode ser desfeita.`)) return;

  try {
    // Prefer fullPath for Storage deletion; fall back to URL
    if (window.storageDelete) await window.storageDelete(f.fullPath || f.url);
    if (window.deleteCrmFile) await window.deleteCrmFile(id);
    _filesData = _filesData.filter(x => x.id !== id);
    _renderFilesList();
  } catch(err) {
    console.error('Delete error:', err);
    alert('Erro ao excluir arquivo: ' + (err.message || err));
  }
}

// ─── FORMULÁRIOS PERSONALIZADOS ────────────────────────────────────────────────
let _cfForms = [];
let _cfEditing = null; // form being edited
let _cfFields  = [];   // fields being edited

async function renderCustomFormsPage() {
  const el = document.getElementById('main-content');
  el.innerHTML = '<div style="padding:32px;text-align:center;color:var(--text-muted)">⏳ Carregando...</div>';
  _cfForms = window.loadCustomForms ? (await window.loadCustomForms()) : [];
  _renderCustomFormsList();
}

function _renderCustomFormsList() {
  const el = document.getElementById('main-content');
  if (!el) return;
  const base = window.location.origin;
  el.innerHTML = `
  <div style="padding:24px 28px;max-width:1000px">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:24px;flex-wrap:wrap;gap:12px">
      <div>
        <div style="font-size:20px;font-weight:700;color:var(--text-primary)">✨ Meus Formulários</div>
        <div style="font-size:12px;color:var(--text-muted);margin-top:2px">${_cfForms.length} formulário${_cfForms.length!==1?'s':''} criado${_cfForms.length!==1?'s':''}</div>
      </div>
      <button onclick="_cfOpenEditor(null)"
        style="padding:10px 20px;background:var(--accent);color:#fff;border:none;border-radius:8px;font-family:var(--font);font-size:13px;font-weight:600;cursor:pointer">
        ✨ Criar novo formulário
      </button>
    </div>
    ${_cfForms.length === 0 ? `
      <div style="text-align:center;padding:64px 20px;color:var(--text-muted)">
        <div style="font-size:48px;margin-bottom:16px">📋</div>
        <div style="font-size:16px;font-weight:600;margin-bottom:8px">Nenhum formulário criado ainda</div>
        <div style="font-size:13px">Clique em "Criar novo formulário" para começar</div>
      </div>
    ` : `
      <div style="display:flex;flex-direction:column;gap:12px">
        ${_cfForms.map(f => `
          <div style="background:var(--bg-card);border:1.5px solid var(--border);border-radius:12px;padding:18px 20px;display:flex;align-items:center;gap:16px;flex-wrap:wrap">
            <div style="flex:1;min-width:200px">
              <div style="font-size:15px;font-weight:700;color:var(--text-primary)">${f.title||'Sem título'}</div>
              ${f.description ? `<div style="font-size:12px;color:var(--text-muted);margin-top:3px">${f.description}</div>` : ''}
              <div style="font-size:11px;color:var(--text-muted);margin-top:6px">${(f.fields||[]).length} campo${(f.fields||[]).length!==1?'s':''} · criado em ${f.createdAt ? new Date(f.createdAt).toLocaleDateString('pt-BR') : '—'}</div>
            </div>
            <div style="display:flex;gap:8px;flex-wrap:wrap;flex-shrink:0">
              <button onclick="_cfCopyLink('${f.id}')"
                style="padding:7px 14px;background:var(--bg-card2);border:1.5px solid var(--border);border-radius:7px;font-family:var(--font);font-size:12px;cursor:pointer;color:var(--text-primary)">
                🔗 Copiar link
              </button>
              <button onclick="_cfViewResponses('${f.id}')"
                style="padding:7px 14px;background:var(--bg-card2);border:1.5px solid var(--border);border-radius:7px;font-family:var(--font);font-size:12px;cursor:pointer;color:var(--text-primary)">
                📥 Respostas
              </button>
              <button onclick="_cfOpenEditor('${f.id}')"
                style="padding:7px 14px;background:var(--accent);color:#fff;border:none;border-radius:7px;font-family:var(--font);font-size:12px;cursor:pointer">
                ✏️ Editar
              </button>
              <button onclick="_cfDelete('${f.id}')"
                style="padding:7px 10px;background:transparent;border:1.5px solid #fca5a5;color:#ef4444;border-radius:7px;font-family:var(--font);font-size:12px;cursor:pointer">
                🗑
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    `}
  </div>`;
}

function _cfOpenEditor(formId) {
  const existing = formId ? _cfForms.find(f => f.id === formId) : null;
  _cfEditing = existing || null;
  _cfFields  = existing ? JSON.parse(JSON.stringify(existing.fields || [])) : [];
  renderCustomFormEditor(existing);
}

function renderCustomFormEditor(existing) {
  currentPage = 'custom-form-editor';
  const el = document.getElementById('main-content');
  el.innerHTML = `
  <div style="padding:24px 28px;max-width:800px">
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:24px">
      <button onclick="showPage('custom-forms')"
        style="padding:7px 14px;background:var(--bg-card2);border:1.5px solid var(--border);border-radius:8px;font-family:var(--font);font-size:12px;cursor:pointer;color:var(--text-primary)">
        ← Voltar
      </button>
      <div style="font-size:18px;font-weight:700;color:var(--text-primary)">${existing ? 'Editar formulário' : 'Novo formulário'}</div>
    </div>

    <!-- Título e descrição -->
    <div style="background:var(--bg-card);border:1.5px solid var(--border);border-radius:12px;padding:20px;margin-bottom:16px">
      <div style="font-size:11px;font-weight:700;color:var(--text-muted);letter-spacing:.8px;text-transform:uppercase;margin-bottom:12px">Informações do formulário</div>
      <input id="cf-title" placeholder="Título do formulário *" value="${existing?.title||''}"
        style="width:100%;padding:10px 14px;border:1.5px solid var(--border);border-radius:8px;background:var(--bg-card2);color:var(--text-primary);font-family:var(--font);font-size:14px;font-weight:600;outline:none;margin-bottom:10px;box-sizing:border-box">
      <textarea id="cf-desc" placeholder="Descrição (opcional — aparece no topo do formulário para o cliente)"
        style="width:100%;padding:10px 14px;border:1.5px solid var(--border);border-radius:8px;background:var(--bg-card2);color:var(--text-primary);font-family:var(--font);font-size:13px;outline:none;resize:vertical;min-height:70px;box-sizing:border-box">${existing?.description||''}</textarea>
    </div>

    <!-- Campos -->
    <div style="background:var(--bg-card);border:1.5px solid var(--border);border-radius:12px;padding:20px;margin-bottom:16px">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
        <div style="font-size:11px;font-weight:700;color:var(--text-muted);letter-spacing:.8px;text-transform:uppercase">Campos do formulário</div>
        <div style="position:relative">
          <button onclick="_cfToggleAddField()"
            style="padding:7px 14px;background:var(--accent);color:#fff;border:none;border-radius:7px;font-family:var(--font);font-size:12px;font-weight:600;cursor:pointer">
            + Adicionar campo
          </button>
          <div id="cf-field-menu" style="display:none;position:absolute;right:0;top:36px;background:var(--bg-card);border:1.5px solid var(--border);border-radius:10px;box-shadow:0 8px 32px rgba(0,0,0,.2);padding:6px;min-width:200px;z-index:100">
            ${[
              ['text','📝','Texto curto'],
              ['textarea','📄','Texto longo'],
              ['email','📧','E-mail'],
              ['phone','📱','Telefone'],
              ['number','🔢','Número'],
              ['date','📅','Data'],
              ['radio','⚪','Múltipla escolha (radio)'],
              ['checkbox','☑️','Caixas de seleção'],
              ['select','🔽','Lista suspensa'],
            ].map(([type,icon,label]) =>
              `<div onclick="_cfAddField('${type}');_cfToggleAddField()"
                style="padding:8px 12px;border-radius:7px;cursor:pointer;font-size:13px;display:flex;align-items:center;gap:8px;transition:background .12s"
                onmouseenter="this.style.background='var(--bg-card2)'" onmouseleave="this.style.background='none'">
                ${icon} ${label}
              </div>`
            ).join('')}
          </div>
        </div>
      </div>
      <div id="cf-fields-list">
        ${_cfFields.length === 0
          ? `<div style="text-align:center;padding:32px;color:var(--text-muted);font-size:13px">Nenhum campo ainda.<br>Use "Adicionar campo" para começar.</div>`
          : _cfFields.map((f,i) => _cfFieldCard(f,i)).join('')
        }
      </div>
    </div>

    <!-- Salvar -->
    <div style="display:flex;gap:10px">
      <button onclick="_cfSave()"
        style="flex:1;padding:12px;background:var(--accent);color:#fff;border:none;border-radius:8px;font-family:var(--font);font-size:14px;font-weight:700;cursor:pointer">
        💾 Salvar formulário
      </button>
      <button onclick="showPage('custom-forms')"
        style="padding:12px 20px;background:var(--bg-card2);border:1.5px solid var(--border);color:var(--text-primary);border-radius:8px;font-family:var(--font);font-size:13px;cursor:pointer">
        Cancelar
      </button>
    </div>
  </div>`;
}

function _cfToggleAddField() {
  const m = document.getElementById('cf-field-menu');
  if (m) m.style.display = m.style.display === 'none' ? 'block' : 'none';
  setTimeout(() => {
    document.addEventListener('click', e => {
      const m = document.getElementById('cf-field-menu');
      if (m && !m.contains(e.target)) m.style.display = 'none';
    }, {once:true});
  }, 10);
}

function _cfAddField(type) {
  const hasOptions = ['radio','checkbox','select'].includes(type);
  _cfFields.push({
    id: 'f' + Date.now(),
    type,
    label: '',
    hint: '',
    required: false,
    options: hasOptions ? ['Opção 1','Opção 2'] : []
  });
  _cfRenderFieldsList();
}

function _cfFieldCard(f, i) {
  const typeLabels = { text:'Texto curto', textarea:'Texto longo', email:'E-mail', phone:'Telefone', number:'Número', date:'Data', radio:'Múltipla escolha', checkbox:'Caixas de seleção', select:'Lista suspensa' };
  const hasOptions = ['radio','checkbox','select'].includes(f.type);
  return `
  <div style="background:var(--bg-base);border:1.5px solid var(--border);border-radius:10px;padding:14px 16px;margin-bottom:10px" id="cff-${f.id}">
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;flex-wrap:wrap">
      <span style="font-size:11px;font-weight:700;color:var(--accent);background:rgba(26,115,232,.1);padding:2px 8px;border-radius:20px">${typeLabels[f.type]||f.type}</span>
      <div style="flex:1"></div>
      <label style="display:flex;align-items:center;gap:5px;font-size:12px;color:var(--text-muted);cursor:pointer">
        <input type="checkbox" ${f.required?'checked':''} onchange="_cfFieldProp('${f.id}','required',this.checked)" style="cursor:pointer">
        Obrigatório
      </label>
      <button onclick="_cfMoveField('${f.id}',-1)" style="border:none;background:none;cursor:pointer;color:var(--text-muted);font-size:14px;padding:2px 4px" title="Mover para cima">↑</button>
      <button onclick="_cfMoveField('${f.id}',1)" style="border:none;background:none;cursor:pointer;color:var(--text-muted);font-size:14px;padding:2px 4px" title="Mover para baixo">↓</button>
      <button onclick="_cfRemoveField('${f.id}')" style="border:none;background:none;cursor:pointer;color:#ef4444;font-size:14px;padding:2px 4px" title="Remover">✕</button>
    </div>
    <input placeholder="Pergunta / label do campo *" value="${f.label.replace(/"/g,'&quot;')}"
      onchange="_cfFieldProp('${f.id}','label',this.value)"
      style="width:100%;padding:8px 10px;border:1.5px solid var(--border);border-radius:7px;background:var(--bg-card);color:var(--text-primary);font-family:var(--font);font-size:13px;outline:none;margin-bottom:6px;box-sizing:border-box">
    <input placeholder="Dica / subtítulo (opcional)" value="${(f.hint||'').replace(/"/g,'&quot;')}"
      onchange="_cfFieldProp('${f.id}','hint',this.value)"
      style="width:100%;padding:7px 10px;border:1.5px solid var(--border);border-radius:7px;background:var(--bg-card);color:var(--text-muted);font-family:var(--font);font-size:12px;outline:none;margin-bottom:${hasOptions?'8px':'0'};box-sizing:border-box">
    ${hasOptions ? `
      <div style="font-size:11px;color:var(--text-muted);margin-bottom:5px;font-weight:600">Opções:</div>
      <div id="cff-opts-${f.id}">
        ${(f.options||[]).map((o,oi) => `
          <div style="display:flex;gap:6px;margin-bottom:5px">
            <input value="${o.replace(/"/g,'&quot;')}" placeholder="Opção ${oi+1}"
              onchange="_cfFieldOption('${f.id}',${oi},this.value)"
              style="flex:1;padding:6px 10px;border:1.5px solid var(--border);border-radius:6px;background:var(--bg-card);color:var(--text-primary);font-family:var(--font);font-size:12px;outline:none">
            <button onclick="_cfRemoveOption('${f.id}',${oi})" style="border:none;background:none;cursor:pointer;color:#ef4444;font-size:13px;padding:0 4px">✕</button>
          </div>`).join('')}
      </div>
      <button onclick="_cfAddOption('${f.id}')" style="font-size:11px;color:var(--accent);border:none;background:none;cursor:pointer;font-family:var(--font);padding:2px 0;font-weight:600">+ Adicionar opção</button>
    ` : ''}
  </div>`;
}

function _cfRenderFieldsList() {
  const el = document.getElementById('cf-fields-list');
  if (!el) return;
  el.innerHTML = _cfFields.length === 0
    ? `<div style="text-align:center;padding:32px;color:var(--text-muted);font-size:13px">Nenhum campo ainda.<br>Use "Adicionar campo" para começar.</div>`
    : _cfFields.map((f,i) => _cfFieldCard(f,i)).join('');
}

function _cfFieldProp(id, prop, val) {
  const f = _cfFields.find(x => x.id === id);
  if (f) f[prop] = val;
}
function _cfFieldOption(id, idx, val) {
  const f = _cfFields.find(x => x.id === id);
  if (f && f.options) f.options[idx] = val;
}
function _cfAddOption(id) {
  const f = _cfFields.find(x => x.id === id);
  if (f) { f.options = f.options || []; f.options.push('Nova opção'); _cfRenderFieldsList(); }
}
function _cfRemoveOption(id, idx) {
  const f = _cfFields.find(x => x.id === id);
  if (f && f.options) { f.options.splice(idx, 1); _cfRenderFieldsList(); }
}
function _cfRemoveField(id) {
  _cfFields = _cfFields.filter(x => x.id !== id);
  _cfRenderFieldsList();
}
function _cfMoveField(id, dir) {
  const idx = _cfFields.findIndex(x => x.id === id);
  const newIdx = idx + dir;
  if (newIdx < 0 || newIdx >= _cfFields.length) return;
  [_cfFields[idx], _cfFields[newIdx]] = [_cfFields[newIdx], _cfFields[idx]];
  _cfRenderFieldsList();
}

async function _cfSave() {
  const title = document.getElementById('cf-title')?.value?.trim();
  const desc  = document.getElementById('cf-desc')?.value?.trim();
  if (!title) { alert('Digite o título do formulário.'); document.getElementById('cf-title')?.focus(); return; }
  if (_cfFields.length === 0) { alert('Adicione pelo menos um campo.'); return; }
  const emptyLabel = _cfFields.find(f => !f.label.trim());
  if (emptyLabel) { alert('Preencha o label de todos os campos.'); return; }

  const user = window.currentUser;
  const formData = {
    title, description: desc || '',
    fields: _cfFields,
    createdBy: user?.email || '',
    createdByName: user?.name || 'Equipe',
    ...(_cfEditing ? { id: _cfEditing.id } : {})
  };

  const id = await window.saveCustomForm(formData);
  if (!id) { alert('Erro ao salvar formulário. Tente novamente.'); return; }

  formData.id = id;
  if (_cfEditing) {
    const idx = _cfForms.findIndex(f => f.id === id);
    if (idx >= 0) _cfForms[idx] = { ..._cfForms[idx], ...formData };
  } else {
    _cfForms.unshift({ ...formData, createdAt: new Date().toISOString() });
  }
  showPage('custom-forms');
}

function _cfCopyLink(id) {
  const url = window.location.origin + '/form.html?id=' + id;
  navigator.clipboard.writeText(url).then(() => {
    alert('Link copiado!\n\n' + url + '\n\nCompartilhe com o cliente.');
  }).catch(() => {
    prompt('Copie o link abaixo:', url);
  });
}

async function _cfViewResponses(formId) {
  const form = _cfForms.find(f => f.id === formId);
  const el = document.getElementById('main-content');
  el.innerHTML = '<div style="padding:32px;text-align:center;color:var(--text-muted)">⏳ Carregando respostas...</div>';
  const responses = window.loadFormResponses ? (await window.loadFormResponses(formId)) : [];

  el.innerHTML = `
  <div style="padding:24px 28px;max-width:900px">
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:24px">
      <button onclick="showPage('custom-forms')"
        style="padding:7px 14px;background:var(--bg-card2);border:1.5px solid var(--border);border-radius:8px;font-family:var(--font);font-size:12px;cursor:pointer;color:var(--text-primary)">
        ← Voltar
      </button>
      <div>
        <div style="font-size:18px;font-weight:700">📥 Respostas — ${form?.title||'Formulário'}</div>
        <div style="font-size:12px;color:var(--text-muted)">${responses.length} resposta${responses.length!==1?'s':''}</div>
      </div>
    </div>
    ${responses.length === 0 ? `
      <div style="text-align:center;padding:48px;color:var(--text-muted)">
        <div style="font-size:36px;margin-bottom:12px">📭</div>
        <div>Nenhuma resposta ainda.</div>
        <div style="font-size:12px;margin-top:6px">Compartilhe o link do formulário com os clientes.</div>
      </div>
    ` : responses.map((r,i) => `
      <div style="background:var(--bg-card);border:1.5px solid var(--border);border-radius:12px;padding:16px 20px;margin-bottom:12px">
        <div style="font-size:11px;color:var(--text-muted);margin-bottom:10px;font-weight:600">
          Resposta #${responses.length - i} · ${r.submittedAt ? new Date(r.submittedAt).toLocaleString('pt-BR') : '—'}
        </div>
        ${Object.entries(r.data || r).filter(([k]) => !['formId','submittedAt','id','formTitle','data'].includes(k)).map(([k,v]) => `
          <div style="margin-bottom:8px">
            <div style="font-size:11px;color:var(--text-muted);font-weight:600">${k}</div>
            <div style="font-size:13px;color:var(--text-primary)">${v||'—'}</div>
          </div>
        `).join('')}
      </div>
    `).join('')}
  </div>`;
}

async function _cfDelete(id) {
  const f = _cfForms.find(x => x.id === id);
  if (!confirm(`Excluir "${f?.title||'este formulário'}"?\n\nAs respostas também serão perdidas.`)) return;
  await window.deleteCustomForm(id);
  _cfForms = _cfForms.filter(x => x.id !== id);
  _renderCustomFormsList();
}

// ═══════════════════════════════════════════════════════════════════════════════
// ██████████████████████ NOVOS MÓDULOS CRM ████████████████████████████████████
// ═══════════════════════════════════════════════════════════════════════════════

// ─── CONSTANTES ───────────────────────────────────────────────────────────────
const JORNADA_ETAPAS = [
  { id: 'onboarding',    label: 'Onboarding',     icon: '🎯', color: '#7c5cfc', desc: 'Integração e primeiros passos' },
  { id: 'estruturacao',  label: 'Estruturação',    icon: '🏗️', color: '#06b6d4', desc: 'Base sendo construída' },
  { id: 'execucao',      label: 'Execução',        icon: '⚙️', color: '#f59e0b', desc: 'Campanhas em andamento' },
  { id: 'otimizacao',    label: 'Otimização',      icon: '📈', color: '#10b981', desc: 'Resultados sendo escalados' },
  { id: 'expansao',      label: 'Expansão 🚀',     icon: '🚀', color: '#a855f7', desc: 'Alto crescimento e upsell' },
];

const CLASSIFICACAO_NIVEIS = [
  { id: 'basico',        label: '🔹 Básico',       color: '#6b7280', bg: 'rgba(107,114,128,.12)' },
  { id: 'intermediario', label: '🔸 Intermediário', color: '#f59e0b', bg: 'rgba(245,158,11,.12)'  },
  { id: 'estrategico',   label: '🔶 Estratégico',  color: '#f97316', bg: 'rgba(249,115,22,.12)'  },
  { id: 'premium',       label: '🔴 Premium',       color: '#ef4444', bg: 'rgba(239,68,68,.12)'   },
];

const LEMBRETE_TIPOS = [
  { id: 'follow-up', label: '🔄 Follow-up', color: '#7c5cfc' },
  { id: 'reuniao',   label: '📅 Reunião',   color: '#06b6d4' },
  { id: 'cobranca',  label: '💳 Cobrança',  color: '#ef4444' },
  { id: 'entrega',   label: '📦 Entrega',   color: '#f59e0b' },
  { id: 'feedback',  label: '💬 Feedback',  color: '#10b981' },
  { id: 'alerta',    label: '🚨 Alerta',    color: '#f97316' },
];

function _nivelInfo(id) {
  return CLASSIFICACAO_NIVEIS.find(n => n.id === id) || CLASSIFICACAO_NIVEIS[0];
}
function _etapaInfo(id) {
  return JORNADA_ETAPAS.find(e => e.id === id) || JORNADA_ETAPAS[0];
}
function _lembrTipoInfo(id) {
  return LEMBRETE_TIPOS.find(t => t.id === id) || { label: id || '—', color: '#6b7280' };
}

// ─── CLASSIFICAÇÃO BADGE ──────────────────────────────────────────────────────
function _classifBadge(nivel) {
  if (!nivel) return '';
  const n = _nivelInfo(nivel);
  return `<span style="font-size:10px;font-weight:700;padding:2px 8px;border-radius:6px;background:${n.bg};color:${n.color};white-space:nowrap">${n.label}</span>`;
}

// ─── SHOW PAGE — new routes already added directly to original showPage above ─

// ═══════════════════════════════════════════════════════════════════════════════
// ██ DASHBOARD ████████████████████████████████████████████████████████████████
// ═══════════════════════════════════════════════════════════════════════════════
async function renderDashboard() {
  const el = document.getElementById('main-content');
  el.innerHTML = `<div style="padding:28px 24px">
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:24px">
      <div style="font-size:22px;font-weight:800">📊 Dashboard Geral</div>
      <span style="font-size:12px;color:var(--text-muted)">Visão macro da operação</span>
    </div>
    <div style="text-align:center;padding:40px;color:var(--text-muted)">⏳ Carregando dados...</div>
  </div>`;

  // Carregar dados em paralelo
  const [lembretes] = await Promise.all([
    window.loadLembretes ? window.loadLembretes() : Promise.resolve([])
  ]);

  const ativos     = clientsData.filter(c => !c.archived && c.statusCli === 'Ativo');
  const emRisco    = clientsData.filter(c => !c.archived && (c.statusCli === 'Pausado' || c.temp === 'Frio'));
  const crescendo  = clientsData.filter(c => !c.archived && (c.etapaJornada === 'otimizacao' || c.etapaJornada === 'expansao'));
  const inadimpl   = clientsData.filter(c => !c.archived && (c.payStatus === 'Atrasado' || c.payStatus === 'Não pagou'));

  // Contratos vencendo em 30 dias
  const hoje = new Date();
  const em30 = new Date(); em30.setDate(hoje.getDate() + 30);
  const vencendo = clientsData.filter(c => {
    if (!c.fim || c.archived) return false;
    const d = new Date(c.fim);
    return d >= hoje && d <= em30;
  });

  // Lembretes de hoje/atrasados
  const lembrHoje = lembretes.filter(l => {
    const d = new Date(l.dataHora);
    return !l.feito && d <= new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate(), 23, 59, 59);
  });

  // Distribuição por classificação
  const classifCount = {};
  CLASSIFICACAO_NIVEIS.forEach(n => classifCount[n.id] = 0);
  clientsData.filter(c => !c.archived).forEach(c => {
    if (c.classificacao && classifCount[c.classificacao] !== undefined) classifCount[c.classificacao]++;
    else classifCount['basico']++;
  });

  // Distribuição por jornada
  const etapaCount = {};
  JORNADA_ETAPAS.forEach(e => etapaCount[e.id] = 0);
  clientsData.filter(c => !c.archived).forEach(c => {
    const e = c.etapaJornada || 'onboarding';
    if (etapaCount[e] !== undefined) etapaCount[e]++;
    else etapaCount['onboarding']++;
  });

  const kpiCard = (icon, label, val, color, sub, onclick) => `
    <div class="dash-kpi-card" onclick="${onclick||''}" style="${onclick?'cursor:pointer':''}">
      <div style="font-size:28px;margin-bottom:6px">${icon}</div>
      <div style="font-size:26px;font-weight:800;color:${color||'var(--text-primary)'}">${val}</div>
      <div style="font-size:12px;font-weight:600;color:var(--text-primary);margin-top:2px">${label}</div>
      ${sub?`<div style="font-size:10.5px;color:var(--text-muted);margin-top:2px">${sub}</div>`:''}
    </div>`;

  el.innerHTML = `
  <div class="page-wrap">

    <!-- Header -->
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:28px;flex-wrap:wrap;gap:12px">
      <div>
        <div style="font-size:22px;font-weight:800">📊 Dashboard Geral</div>
        <div style="font-size:12px;color:var(--text-muted);margin-top:2px">${new Date().toLocaleDateString('pt-BR',{weekday:'long',day:'numeric',month:'long',year:'numeric'})}</div>
      </div>
      <div style="display:flex;gap:8px">
        <button class="btn btn-ghost" style="font-size:12px" onclick="showPage('jornada')">🚀 Ver Jornada</button>
        <button class="btn btn-ghost" style="font-size:12px" onclick="showPage('lembretes')">🔔 Lembretes</button>
        <button class="btn btn-primary" style="font-size:12px" onclick="showPage('clients')">👥 Clientes</button>
      </div>
    </div>

    <!-- KPIs -->
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:14px;margin-bottom:28px">
      ${kpiCard('👥', 'Clientes Ativos', ativos.length, 'var(--accent)', `de ${clientsData.filter(c=>!c.archived).length} total`, "showPage('clients')")}
      ${kpiCard('⚠️', 'Em Risco', emRisco.length, emRisco.length>0?'var(--red)':'var(--green)', 'Pausados ou frios', "showPage('clients')")}
      ${kpiCard('📈', 'Em Crescimento', crescendo.length, 'var(--green)', 'Otimização/Expansão', "showPage('jornada')")}
      ${kpiCard('📅', 'Vencendo em 30d', vencendo.length, vencendo.length>0?'var(--yellow)':'var(--text-muted)', 'Contratos', '')}
      ${kpiCard('💳', 'Inadimplentes', inadimpl.length, inadimpl.length>0?'var(--red)':'var(--text-muted)', 'Atrasados/Não pagaram', "showPage('financeiro')")}
      ${kpiCard('🔔', 'Alertas Hoje', lembrHoje.length, lembrHoje.length>0?'var(--yellow)':'var(--text-muted)', 'Lembretes pendentes', "showPage('lembretes')")}
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:24px">

      <!-- Jornada breakdown -->
      <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-lg);padding:20px">
        <div style="font-size:13px;font-weight:700;margin-bottom:16px;display:flex;align-items:center;gap:8px">🚀 Clientes por Etapa
          <button class="btn btn-ghost" style="font-size:10px;padding:3px 8px;margin-left:auto" onclick="showPage('jornada')">Ver tudo</button>
        </div>
        ${JORNADA_ETAPAS.map(e => {
          const cnt = etapaCount[e.id] || 0;
          const total = clientsData.filter(c=>!c.archived).length || 1;
          const pct = Math.round(cnt / total * 100);
          return `<div style="margin-bottom:10px">
            <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px">
              <span>${e.icon} ${e.label}</span><span style="font-weight:700;color:${e.color}">${cnt}</span>
            </div>
            <div style="height:6px;background:var(--bg-card2);border-radius:3px;overflow:hidden">
              <div style="height:100%;width:${pct}%;background:${e.color};border-radius:3px;transition:width .6s"></div>
            </div>
          </div>`;
        }).join('')}
      </div>

      <!-- Classificação breakdown -->
      <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-lg);padding:20px">
        <div style="font-size:13px;font-weight:700;margin-bottom:16px">🏷️ Classificação de Clientes</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          ${CLASSIFICACAO_NIVEIS.map(n => {
            const cnt = classifCount[n.id] || 0;
            return `<div style="background:${n.bg};border-radius:10px;padding:12px;text-align:center">
              <div style="font-size:20px;font-weight:800;color:${n.color}">${cnt}</div>
              <div style="font-size:10.5px;font-weight:600;color:${n.color};margin-top:2px">${n.label}</div>
            </div>`;
          }).join('')}
        </div>
        <div style="margin-top:14px;padding-top:14px;border-top:1px solid var(--border)">
          <button class="btn btn-ghost" style="font-size:11px;width:100%" onclick="showPage('clients')">👥 Gerenciar clientes</button>
        </div>
      </div>
    </div>

    <!-- Lembretes próximos -->
    <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-lg);padding:20px;margin-bottom:24px">
      <div style="font-size:13px;font-weight:700;margin-bottom:16px;display:flex;align-items:center;gap:8px">🔔 Próximos Lembretes
        <button class="btn btn-ghost" style="font-size:10px;padding:3px 8px;margin-left:auto" onclick="showPage('lembretes')">Ver todos</button>
        <button class="btn btn-primary" style="font-size:10px;padding:3px 8px" onclick="openLembreteModal()">+ Novo</button>
      </div>
      ${lembretes.filter(l => !l.feito).slice(0,6).length === 0 ?
        `<div style="text-align:center;padding:20px;color:var(--text-muted);font-size:12px">✅ Nenhum lembrete pendente</div>` :
        lembretes.filter(l => !l.feito).slice(0,6).map(l => {
          const d = new Date(l.dataHora);
          const atrasado = d < new Date();
          const tipo = _lembrTipoInfo(l.tipo);
          return `<div style="display:flex;align-items:center;gap:12px;padding:10px;border-radius:8px;background:${atrasado?'rgba(239,68,68,.06)':'var(--bg-card2)'};margin-bottom:6px;border:1px solid ${atrasado?'rgba(239,68,68,.2)':'var(--border)'}">
            <div style="font-size:18px">${tipo.label.split(' ')[0]}</div>
            <div style="flex:1;min-width:0">
              <div style="font-size:12px;font-weight:600;color:${atrasado?'var(--red)':'var(--text-primary)'}">${l.titulo||'Lembrete'}</div>
              <div style="font-size:10.5px;color:var(--text-muted)">${l.clienteNome||''} · ${d.toLocaleDateString('pt-BR')} ${d.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'})}</div>
            </div>
            ${atrasado?'<span style="font-size:9px;background:var(--red);color:#fff;padding:2px 6px;border-radius:4px;font-weight:700">ATRASADO</span>':''}
            <button class="icon-btn" onclick="_marcarLembreteFeito('${l.id}')" title="Marcar como feito">✅</button>
          </div>`;
        }).join('')
      }
    </div>

    <!-- Clientes em destaque -->
    <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-lg);padding:20px">
      <div style="font-size:13px;font-weight:700;margin-bottom:16px;display:flex;align-items:center;gap:8px">⭐ Clientes em Destaque
        <span style="font-size:10.5px;color:var(--text-muted);font-weight:400">Premium e Estratégicos ativos</span>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:10px">
        ${clientsData.filter(c => !c.archived && (c.classificacao === 'premium' || c.classificacao === 'estrategico')).slice(0,6).map(c => {
          const etapa = _etapaInfo(c.etapaJornada || 'onboarding');
          return `<div style="background:var(--bg-card2);border-radius:10px;padding:12px;border:1px solid var(--border);cursor:pointer" onclick="openClientDetail('${c.id}')">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">
              <div style="font-size:12px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:140px">${c.nome||'—'}</div>
              ${_classifBadge(c.classificacao)}
            </div>
            <div style="font-size:10.5px;color:var(--text-muted);margin-bottom:6px">${c.empresa||'—'}</div>
            <div style="font-size:10px;color:${etapa.color};font-weight:600">${etapa.icon} ${etapa.label}</div>
          </div>`;
        }).join('') || '<div style="color:var(--text-muted);font-size:12px;padding:20px;text-align:center">Nenhum cliente Premium/Estratégico. <a href="#" onclick="showPage(\'clients\')" style="color:var(--accent)">Classificar clientes</a></div>'}
      </div>
    </div>

  </div>`;
}

// ═══════════════════════════════════════════════════════════════════════════════
// ██ JORNADA DO CLIENTE ███████████████████████████████████████████████████████
// ═══════════════════════════════════════════════════════════════════════════════
async function renderJornada() {
  const el = document.getElementById('main-content');

  const ativos = clientsData.filter(c => !c.archived);
  if (!ativos.length) {
    el.innerHTML = `<div style="padding:48px;text-align:center;color:var(--text-muted)">
      <div style="font-size:48px;margin-bottom:16px">🚀</div>
      <div style="font-size:16px;font-weight:700;margin-bottom:8px">Nenhum cliente cadastrado</div>
      <button class="btn btn-primary" onclick="showPage('clients')">+ Cadastrar cliente</button>
    </div>`;
    return;
  }

  // Group by etapa
  const grupos = {};
  JORNADA_ETAPAS.forEach(e => grupos[e.id] = []);
  ativos.forEach(c => {
    const e = c.etapaJornada || 'onboarding';
    if (grupos[e]) grupos[e].push(c);
    else grupos['onboarding'].push(c);
  });

  el.innerHTML = `
  <div class="page-wrap">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;flex-wrap:wrap;gap:10px">
      <div>
        <div style="font-size:20px;font-weight:800">🚀 Jornada do Cliente</div>
        <div style="font-size:12px;color:var(--text-muted);margin-top:2px">Pipeline evolutivo — ${ativos.length} cliente${ativos.length!==1?'s':''}  ativos</div>
      </div>
      <div style="display:flex;gap:6px;align-items:center">
        <span style="font-size:11px;color:var(--text-muted)">Quanto mais à direita, maior o crescimento →</span>
        <button class="btn btn-primary" style="font-size:12px" onclick="showPage('clients')">👥 Clientes</button>
      </div>
    </div>

    <!-- Pipeline horizontal -->
    <div style="overflow-x:auto;margin:0 -4px;padding-bottom:8px">
    <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:12px;min-width:860px">
      ${JORNADA_ETAPAS.map((etapa, etIdx) => {
        const cols = grupos[etapa.id] || [];
        return `
        <div style="background:var(--bg-card);border:2px solid ${etapa.color}22;border-radius:14px;overflow:hidden;min-height:300px">
          <!-- Header da coluna -->
          <div style="background:${etapa.color}18;border-bottom:2px solid ${etapa.color}33;padding:12px 14px">
            <div style="display:flex;align-items:center;gap:8px">
              <span style="font-size:20px">${etapa.icon}</span>
              <div>
                <div style="font-size:12px;font-weight:700;color:${etapa.color}">${etapa.label}</div>
                <div style="font-size:10px;color:var(--text-muted)">${etapa.desc}</div>
              </div>
              <span style="margin-left:auto;background:${etapa.color};color:#fff;font-size:11px;font-weight:700;padding:2px 8px;border-radius:8px">${cols.length}</span>
            </div>
          </div>
          <!-- Cards dos clientes -->
          <div style="padding:10px;display:flex;flex-direction:column;gap:8px">
            ${cols.map(c => _jornadaClientCard(c, etapa)).join('')}
            ${cols.length === 0 ? `<div style="text-align:center;padding:24px 8px;color:var(--text-muted);font-size:11px;opacity:.6">Nenhum cliente nesta etapa</div>` : ''}
          </div>
        </div>`;
      }).join('')}
    </div></div>

    <!-- Legenda -->
    <div style="margin-top:20px;display:flex;align-items:center;gap:16px;flex-wrap:wrap">
      <span style="font-size:11px;color:var(--text-muted)">Classificação:</span>
      ${CLASSIFICACAO_NIVEIS.map(n => `<span style="font-size:10.5px;font-weight:600;color:${n.color}">${n.label}</span>`).join('')}
    </div>
  </div>`;
}

function _jornadaClientCard(c, etapa) {
  const nivel = _nivelInfo(c.classificacao || 'basico');
  const statusColor = { 'Ativo': 'var(--green)', 'Pausado': 'var(--yellow)', 'Encerrado': 'var(--red)', 'Em negociação': 'var(--accent)' }[c.statusCli] || 'var(--text-muted)';
  return `
  <div style="background:var(--bg-card2);border:1px solid ${etapa.color}22;border-radius:10px;padding:10px;cursor:pointer;transition:box-shadow .2s"
    onclick="openClientDetail('${c.id}')" onmouseover="this.style.boxShadow='0 4px 14px rgba(0,0,0,.15)'" onmouseout="this.style.boxShadow='none'">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:6px;margin-bottom:4px">
      <div style="font-size:11.5px;font-weight:700;line-height:1.3;flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${c.nome||'—'}</div>
      ${_classifBadge(c.classificacao)}
    </div>
    <div style="font-size:10px;color:var(--text-muted);margin-bottom:6px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${c.empresa||'—'}</div>
    <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
      <span style="font-size:9.5px;color:${statusColor};font-weight:600">● ${c.statusCli||'—'}</span>
      ${c.valor?`<span style="font-size:9px;color:var(--text-muted);margin-left:auto;font-family:var(--mono)">${c.valor}</span>`:''}
    </div>
    <!-- Mover etapa -->
    <div style="display:flex;gap:3px;margin-top:6px" onclick="event.stopPropagation()">
      ${JORNADA_ETAPAS.map(e => `
        <button title="${e.label}" onclick="_moverJornada('${c.id}','${e.id}')"
          style="flex:1;height:4px;border-radius:2px;border:none;background:${e.id===c.etapaJornada?e.color:'var(--border)'};cursor:pointer;transition:background .2s;padding:0"
          onmouseover="this.style.background='${e.color}'" onmouseout="this.style.background='${e.id===(c.etapaJornada||'onboarding')?e.color:'var(--border)'}'"></button>
      `).join('')}
    </div>
  </div>`;
}

async function _moverJornada(clientId, etapaId) {
  const c = clientsData.find(x => x.id === clientId);
  if (!c) return;
  const anterior = c.etapaJornada || 'onboarding';
  if (anterior === etapaId) return;
  c.etapaJornada = etapaId;
  saveState();
  renderJornada();
  const etapa = _etapaInfo(etapaId);
  addNotif(`${c.nome} movido para ${etapa.label} ${etapa.icon}`, 'info');
}

// ═══════════════════════════════════════════════════════════════════════════════
// ██ LEMBRETES ████████████████████████████████████████████████████████████████
// ═══════════════════════════════════════════════════════════════════════════════
let _lembretes = [];
let _lembrEditId = null;

async function renderLembretes() {
  const el = document.getElementById('main-content');
  el.innerHTML = `<div style="padding:28px;text-align:center;color:var(--text-muted)">⏳ Carregando lembretes...</div>`;
  _lembretes = window.loadLembretes ? (await window.loadLembretes()) : [];
  _renderLembretesList();
  _atualizarLembreteBadge();
}

function _renderLembretesList() {
  const el = document.getElementById('main-content');
  const hoje = new Date();
  const pendentes = _lembretes.filter(l => !l.feito);
  const feitos    = _lembretes.filter(l => l.feito);

  const atrasados = pendentes.filter(l => new Date(l.dataHora) < hoje);
  const futuros   = pendentes.filter(l => new Date(l.dataHora) >= hoje);

  el.innerHTML = `
  <div class="page-wrap" style="max-width:860px">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;flex-wrap:wrap;gap:10px">
      <div>
        <div style="font-size:20px;font-weight:800">🔔 Lembretes</div>
        <div style="font-size:12px;color:var(--text-muted);margin-top:2px">${pendentes.length} pendente${pendentes.length!==1?'s':''} · ${atrasados.length} atrasado${atrasados.length!==1?'s':''}</div>
      </div>
      <button class="btn btn-primary" onclick="openLembreteModal()">+ Novo lembrete</button>
    </div>

    ${atrasados.length ? `
    <div style="margin-bottom:20px">
      <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--red);margin-bottom:10px">⚠️ Atrasados (${atrasados.length})</div>
      ${atrasados.map(l => _lembreteCard(l, true)).join('')}
    </div>` : ''}

    <div style="margin-bottom:20px">
      <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--text-muted);margin-bottom:10px">📅 Próximos (${futuros.length})</div>
      ${futuros.length ? futuros.map(l => _lembreteCard(l, false)).join('') :
        `<div style="text-align:center;padding:32px;color:var(--text-muted);background:var(--bg-card);border-radius:var(--radius-lg);border:1px solid var(--border)">
          <div style="font-size:36px;margin-bottom:10px">🎉</div>
          <div>Nenhum lembrete futuro pendente</div>
          <button class="btn btn-primary" style="margin-top:12px" onclick="openLembreteModal()">+ Criar lembrete</button>
        </div>`}
    </div>

    ${feitos.length ? `
    <div>
      <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--text-muted);margin-bottom:10px;cursor:pointer" onclick="_toggleLembrFeitos(this)">
        ✅ Concluídos (${feitos.length}) <span style="font-size:10px">▼</span>
      </div>
      <div id="lembr-feitos" style="display:none">
        ${feitos.slice(0,20).map(l => _lembreteCard(l, false)).join('')}
      </div>
    </div>` : ''}
  </div>`;
}

function _toggleLembrFeitos(el) {
  const div = document.getElementById('lembr-feitos');
  if (!div) return;
  div.style.display = div.style.display === 'none' ? '' : 'none';
}

function _lembreteCard(l, atrasado) {
  const d = new Date(l.dataHora);
  const tipo = _lembrTipoInfo(l.tipo);
  const bgColor = l.feito ? 'var(--bg-card)' : atrasado ? 'rgba(239,68,68,.05)' : 'var(--bg-card)';
  const borderColor = l.feito ? 'var(--border)' : atrasado ? 'rgba(239,68,68,.25)' : 'var(--border)';
  return `
  <div style="background:${bgColor};border:1px solid ${borderColor};border-radius:12px;padding:14px;margin-bottom:8px;display:flex;gap:12px;align-items:flex-start;${l.feito?'opacity:.6':''}">
    <div style="width:38px;height:38px;border-radius:10px;background:${tipo.color}18;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">${tipo.label.split(' ')[0]}</div>
    <div style="flex:1;min-width:0">
      <div style="font-size:13px;font-weight:700;color:${atrasado&&!l.feito?'var(--red)':'var(--text-primary)'}">${l.titulo||'Lembrete'}</div>
      <div style="font-size:11px;color:var(--text-muted);margin-top:2px;display:flex;gap:10px;flex-wrap:wrap">
        ${l.clienteNome?`<span>👤 ${l.clienteNome}</span>`:''}
        <span>📅 ${d.toLocaleDateString('pt-BR')} às ${d.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'})}</span>
        <span style="color:${tipo.color};font-weight:600">${tipo.label}</span>
      </div>
      ${l.descricao?`<div style="font-size:11px;color:var(--text-muted);margin-top:4px;font-style:italic">${l.descricao}</div>`:''}
      ${l.mencionados?.length ? `<div style="margin-top:5px;display:flex;flex-wrap:wrap;gap:4px">${l.mencionados.map(m=>`<span style="font-size:10.5px;font-weight:600;color:var(--accent);background:var(--accent-soft);padding:1px 7px;border-radius:10px">@${(m.name||'').split(' ')[0]}</span>`).join('')}</div>` : ''}
    </div>
    <div style="display:flex;flex-direction:column;gap:4px;flex-shrink:0">
      ${!l.feito ? `<button class="icon-btn" title="Marcar feito" onclick="_marcarLembreteFeito('${l.id}')">✅</button>` : ''}
      <button class="icon-btn" title="Editar" onclick="openLembreteModal('${l.id}')">✏️</button>
      <button class="icon-btn" title="Excluir" onclick="_deletarLembrete('${l.id}')">🗑</button>
    </div>
  </div>`;
}

function openLembreteModal(id) {
  _lembrEditId = id || null;
  const l = id ? _lembretes.find(x => x.id === id) : null;

  // Build client options
  const clientOpts = clientsData.filter(c => !c.archived)
    .map(c => `<option value="${c.id}" ${l?.clienteId===c.id?'selected':''}>${c.nome||c.empresa||'—'}</option>`).join('');

  // Build type options
  const tipoOpts = LEMBRETE_TIPOS.map(t => `<option value="${t.id}" ${l?.tipo===t.id?'selected':''}>${t.label}</option>`).join('');

  // Default datetime = now + 1h
  const defaultDT = new Date(); defaultDT.setHours(defaultDT.getHours()+1);
  const dtVal = l?.dataHora ? l.dataHora.slice(0,16) : defaultDT.toISOString().slice(0,16);

  // Build team member chips for @mention
  const allUsersRaw = JSON.parse(localStorage.getItem('dc_all_users') || '[]');
  const existingMencions = l?.mencionados || [];
  const teamChips = allUsersRaw.map(u => {
    const sel = existingMencions.some(m => m.uid === u.uid);
    return `<span class="lemb-mention-chip" data-uid="${u.uid}" data-name="${u.name||u.email}" data-sel="${sel?'1':'0'}"
      onclick="const s=this.dataset.sel==='1';this.dataset.sel=s?'0':'1';this.style.background=s?'':'var(--accent)';this.style.color=s?'':'#fff';this.style.borderColor=s?'':'var(--accent)'"
      style="display:inline-flex;align-items:center;gap:4px;padding:5px 12px;border-radius:16px;font-size:12px;font-weight:600;cursor:pointer;border:1.5px solid ${sel?'var(--accent)':'var(--border)'};background:${sel?'var(--accent)':'var(--bg-card2)'};color:${sel?'#fff':'var(--text-primary)'};transition:all .15s;user-select:none">
      ${(u.photo?`<img src="${u.photo}" style="width:16px;height:16px;border-radius:50%;object-fit:cover;pointer-events:none">`:'👤')} @${(u.name||u.email||'').split(' ')[0]}
    </span>`;
  }).join('');

  const html = `
  <div class="modal-overlay" id="modal-lembrete" onclick="if(event.target===this)closeLembreteModal()" style="display:flex;z-index:9999">
    <div class="modal" style="max-width:480px">
      <div class="modal-header">
        <div class="modal-title">${id?'✏️ Editar':'🔔 Novo'} Lembrete</div>
        <button class="modal-close" onclick="closeLembreteModal()">✕</button>
      </div>
      <div style="padding:20px;display:flex;flex-direction:column;gap:14px">
        <div>
          <label style="font-size:11px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:5px">Título *</label>
          <input id="lemb-titulo" type="text" value="${l?.titulo||''}" placeholder="Ex: Ligar para cliente..." style="width:100%;padding:9px 12px;border:1.5px solid var(--border);border-radius:8px;background:var(--bg-card2);color:var(--text-primary);font-family:var(--font);font-size:13px;outline:none;box-sizing:border-box">
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
          <div>
            <label style="font-size:11px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:5px">Tipo</label>
            <select id="lemb-tipo" style="width:100%;padding:9px 12px;border:1.5px solid var(--border);border-radius:8px;background:var(--bg-card2);color:var(--text-primary);font-family:var(--font);font-size:13px;outline:none">${tipoOpts}</select>
          </div>
          <div>
            <label style="font-size:11px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:5px">Data e Hora *</label>
            <input id="lemb-datahora" type="datetime-local" value="${dtVal}" style="width:100%;padding:9px 12px;border:1.5px solid var(--border);border-radius:8px;background:var(--bg-card2);color:var(--text-primary);font-family:var(--font);font-size:13px;outline:none;box-sizing:border-box">
          </div>
        </div>
        <div>
          <label style="font-size:11px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:5px">Cliente</label>
          <select id="lemb-cliente" style="width:100%;padding:9px 12px;border:1.5px solid var(--border);border-radius:8px;background:var(--bg-card2);color:var(--text-primary);font-family:var(--font);font-size:13px;outline:none">
            <option value="">— Nenhum —</option>${clientOpts}
          </select>
        </div>
        ${teamChips ? `
        <div>
          <label style="font-size:11px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:7px">📣 Mencionar equipe</label>
          <div id="lemb-mencoes" style="display:flex;flex-wrap:wrap;gap:6px">${teamChips}</div>
        </div>` : ''}
        <div>
          <label style="font-size:11px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:5px">Descrição</label>
          <textarea id="lemb-desc" rows="2" placeholder="Detalhes opcionais..." style="width:100%;padding:9px 12px;border:1.5px solid var(--border);border-radius:8px;background:var(--bg-card2);color:var(--text-primary);font-family:var(--font);font-size:13px;outline:none;resize:none;box-sizing:border-box">${l?.descricao||''}</textarea>
        </div>
        <div style="display:flex;gap:8px">
          <button onclick="closeLembreteModal()" class="btn btn-ghost" style="flex:1">Cancelar</button>
          <button onclick="salvarLembrete()" class="btn btn-primary" style="flex:2">💾 Salvar lembrete</button>
        </div>
      </div>
    </div>
  </div>`;

  const wrap = document.createElement('div');
  wrap.id = 'lembrete-modal-wrap';
  wrap.innerHTML = html;
  document.body.appendChild(wrap);
}

function closeLembreteModal() {
  const w = document.getElementById('lembrete-modal-wrap');
  if (w) w.remove();
}

async function salvarLembrete() {
  const titulo   = document.getElementById('lemb-titulo')?.value.trim();
  const tipo     = document.getElementById('lemb-tipo')?.value;
  const dataHora = document.getElementById('lemb-datahora')?.value;
  const cliSel   = document.getElementById('lemb-cliente');
  const clienteId   = cliSel?.value || '';
  const clienteNome = cliSel?.options[cliSel?.selectedIndex]?.text || '';
  const descricao   = document.getElementById('lemb-desc')?.value.trim();

  // Coletar menções selecionadas
  const mencionados = [];
  document.querySelectorAll('#lemb-mencoes .lemb-mention-chip').forEach(chip => {
    if (chip.dataset.sel === '1') mencionados.push({ uid: chip.dataset.uid, name: chip.dataset.name });
  });

  if (!titulo || !dataHora) { alert('Preencha o título e a data.'); return; }

  const data = { titulo, tipo, dataHora, clienteId, clienteNome, descricao, mencionados, feito: false };
  if (_lembrEditId) data.id = _lembrEditId;

  const id = await window.saveLembrete(data);
  if (!id) { alert('Erro ao salvar lembrete.'); return; }

  // Notificar mencionados via Firebase
  const authorName = window.currentUser?.name || 'Alguém';
  for (const m of mencionados) {
    if (m.uid === window.currentUser?.uid) continue;
    if (window.sendFirebaseNotif) {
      await window.sendFirebaseNotif(m.uid, {
        id: Date.now() + Math.random(),
        title: `🔔 ${authorName} te mencionou em um lembrete`,
        body: `"${titulo}"${descricao ? ': ' + descricao.substring(0, 60) : ''}`,
        type: 'mention',
        time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
        read: false,
      });
    }
  }

  closeLembreteModal();
  if (currentPage === 'lembretes') {
    _lembretes = window.loadLembretes ? (await window.loadLembretes()) : [];
    _renderLembretesList();
  }
  _atualizarLembreteBadge();
  addNotif(`Lembrete "${titulo}" salvo`, 'info');
}

async function _marcarLembreteFeito(id) {
  const l = _lembretes.find(x => x.id === id);
  if (!l) return;
  l.feito = true;
  await window.saveLembrete({ ...l });
  if (currentPage === 'lembretes') _renderLembretesList();
  else if (currentPage === 'dashboard') renderDashboard();
  _atualizarLembreteBadge();
}

async function _deletarLembrete(id) {
  if (!confirm('Excluir este lembrete?')) return;
  await window.deleteLembrete(id);
  _lembretes = _lembretes.filter(x => x.id !== id);
  if (currentPage === 'lembretes') _renderLembretesList();
  _atualizarLembreteBadge();
}

async function _atualizarLembreteBadge() {
  if (!window.loadLembretes) return;
  const all = _lembretes.length ? _lembretes : (await window.loadLembretes());
  const atrasados = all.filter(l => !l.feito && new Date(l.dataHora) < new Date()).length;
  const badge = document.getElementById('lembrete-badge');
  if (badge) {
    badge.style.display = atrasados > 0 ? '' : 'none';
    badge.textContent = atrasados;
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// ██ NOTAS RÁPIDAS ████████████████████████████████████████████████████████████
// ═══════════════════════════════════════════════════════════════════════════════
let _qnStarValue = 0;

function openQuickNote() {
  const modal = document.getElementById('modal-quick-note');
  if (!modal) return;
  modal.style.display = 'flex';

  // Populate client select
  const sel = document.getElementById('qn-client');
  if (sel) {
    while (sel.options.length > 1) sel.remove(1);
    clientsData.filter(c => !c.archived).forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.id;
      opt.textContent = c.nome || c.empresa || '—';
      sel.appendChild(opt);
    });
  }

  // Build star rating
  _qnStarValue = 0;
  _renderQnStars(0);
}

function closeQuickNote() {
  const modal = document.getElementById('modal-quick-note');
  if (modal) { modal.style.display = 'none'; }
  const txt = document.getElementById('qn-text');
  if (txt) txt.value = '';
  _qnStarValue = 0;
  _renderQnStars(0);
}

function _renderQnStars(hovered) {
  const wrap = document.getElementById('qn-stars');
  if (!wrap) return;
  const cur = hovered || _qnStarValue;
  let h = '';
  for (let i = 1; i <= 10; i++) {
    h += `<span style="font-size:20px;cursor:pointer;color:${i<=cur?'#f59e0b':'var(--border)'};transition:color .1s"
      onmouseover="_renderQnStars(${i})" onmouseout="_renderQnStars(0)"
      onclick="_setQnStar(${i})">★</span>`;
  }
  wrap.innerHTML = h;
}

function _setQnStar(n) {
  _qnStarValue = n;
  const inp = document.getElementById('qn-star-val');
  if (inp) inp.value = n;
  _renderQnStars(0);
}

async function saveQuickNote() {
  const clientSel = document.getElementById('qn-client');
  const texto = document.getElementById('qn-text')?.value.trim();
  const tag = document.getElementById('qn-tag')?.value;
  if (!texto) { alert('Escreva uma anotação.'); return; }

  const clienteId = clientSel?.value || '';
  const clienteNome = clientSel?.options[clientSel?.selectedIndex]?.text || '';

  const data = {
    clienteId, clienteNome, texto, tag,
    estrelas: _qnStarValue,
    autor: window.currentUser?.displayName || 'Equipe'
  };

  const id = await window.saveNotaRapida(data);
  if (id) {
    closeQuickNote();
    addNotif('Nota salva com sucesso', 'info');
  } else {
    alert('Erro ao salvar nota.');
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// ██ NOVAS ABAS DO CLIENTE — JORNADA, AVALIAÇÃO, CALENDÁRIO, ALERTAS, NOTAS ████
// ═══════════════════════════════════════════════════════════════════════════════

// ── ABA JORNADA ──────────────────────────────────────────────────────────────
function _renderTabJornada(c) {
  const etapaAtual = c.etapaJornada || 'onboarding';
  const nivel = c.classificacao || 'basico';

  const html = `
  <div style="padding:20px;display:flex;flex-direction:column;gap:20px">

    <!-- Etapa atual -->
    <div style="background:var(--bg-card2);border-radius:12px;padding:18px;border:1px solid var(--border)">
      <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--text-muted);margin-bottom:12px">Etapa Atual da Jornada</div>
      <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap">
        ${JORNADA_ETAPAS.map(e => {
          const active = e.id === etapaAtual;
          return `<button onclick="_moverJornadaModal('${c.id}','${e.id}')"
            style="padding:8px 14px;border-radius:10px;border:2px solid ${active?e.color:'var(--border)'};background:${active?e.color+'22':'transparent'};color:${active?e.color:'var(--text-muted)'};font-size:12px;font-weight:${active?'700':'500'};cursor:pointer;transition:all .2s;font-family:var(--font)">
            ${e.icon} ${e.label}
          </button>`;
        }).join('')}
      </div>
      ${c.etapaJornada ? `<div style="margin-top:12px;font-size:11.5px;color:var(--text-muted)">${_etapaInfo(etapaAtual).desc}</div>` : ''}
    </div>

    <!-- Classificação -->
    <div style="background:var(--bg-card2);border-radius:12px;padding:18px;border:1px solid var(--border)">
      <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--text-muted);margin-bottom:12px">Classificação do Cliente</div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        ${CLASSIFICACAO_NIVEIS.map(n => {
          const active = n.id === nivel;
          return `<button onclick="_setClassificacaoModal('${c.id}','${n.id}')"
            style="padding:8px 16px;border-radius:10px;border:2px solid ${active?n.color:'var(--border)'};background:${active?n.bg:'transparent'};color:${active?n.color:'var(--text-muted)'};font-size:12px;font-weight:${active?'700':'500'};cursor:pointer;transition:all .2s;font-family:var(--font)">
            ${n.label}
          </button>`;
        }).join('')}
      </div>
    </div>

    <!-- Visão 360 rápida -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
      <div style="background:var(--bg-card2);border-radius:12px;padding:14px;border:1px solid var(--border)">
        <div style="font-size:10.5px;color:var(--text-muted);margin-bottom:4px">Status do cliente</div>
        <div style="font-size:14px;font-weight:700">${c.statusCli||'—'}</div>
      </div>
      <div style="background:var(--bg-card2);border-radius:12px;padding:14px;border:1px solid var(--border)">
        <div style="font-size:10.5px;color:var(--text-muted);margin-bottom:4px">Temperatura</div>
        <div style="font-size:14px;font-weight:700">${c.temp?tempEmoji(c.temp)+' '+c.temp:'—'}</div>
      </div>
      <div style="background:var(--bg-card2);border-radius:12px;padding:14px;border:1px solid var(--border)">
        <div style="font-size:10.5px;color:var(--text-muted);margin-bottom:4px">Contrato</div>
        <div style="font-size:14px;font-weight:700">${c.inicio?fmtDate(c.inicio):''} → ${c.fim?fmtDate(c.fim):'—'}</div>
      </div>
      <div style="background:var(--bg-card2);border-radius:12px;padding:14px;border:1px solid var(--border)">
        <div style="font-size:10.5px;color:var(--text-muted);margin-bottom:4px">Pagamento</div>
        <div style="font-size:14px;font-weight:700">${c.payStatus||c.valor||'—'}</div>
      </div>
    </div>

    <!-- Ação rápida -->
    <div style="display:flex;gap:8px;flex-wrap:wrap">
      <button class="btn btn-ghost" style="font-size:12px" onclick="openLembreteModal();closeLembreteModal();openLembreteModalPrefilled('${c.id}','${c.nome}')">🔔 Criar lembrete</button>
      <button class="btn btn-ghost" style="font-size:12px" onclick="_detailTab='avaliacao';switchDetailTab('avaliacao',document.querySelector('.client-detail-tab:nth-child(9)'))">⭐ Avaliar</button>
    </div>
  </div>`;

  document.getElementById('cd-body').innerHTML = html;
}

function _moverJornadaModal(clientId, etapaId) {
  const c = clientsData.find(x => x.id === clientId);
  if (!c) return;
  c.etapaJornada = etapaId;
  saveState();
  _renderTabJornada(c);
}

function _setClassificacaoModal(clientId, nivelId) {
  const c = clientsData.find(x => x.id === clientId);
  if (!c) return;
  c.classificacao = nivelId;
  saveState();
  _renderTabJornada(c);
}

function openLembreteModalPrefilled(clienteId, clienteNome) {
  openLembreteModal();
  setTimeout(() => {
    const sel = document.getElementById('lemb-cliente');
    if (sel) sel.value = clienteId;
  }, 50);
}

// ── ABA AVALIAÇÃO ─────────────────────────────────────────────────────────────
let _avaliacaoCache = {};
const AVAL_CATEGORIAS = [
  { id: 'performance',   label: 'Performance',  icon: '📈', desc: 'Evolução e engajamento com as estratégias' },
  { id: 'comunicacao',   label: 'Comunicação',  icon: '💬', desc: 'Velocidade de resposta e organização' },
  { id: 'financeiro',    label: 'Financeiro',   icon: '💰', desc: 'Pagamentos em dia' },
  { id: 'operacional',   label: 'Operacional',  icon: '⚙️', desc: 'Entrega de materiais e colaboração' },
  { id: 'potencial',     label: 'Potencial',    icon: '🚀', desc: 'Crescimento e abertura a novas propostas' },
];

async function _renderTabAvaliacao(c) {
  const bodyEl = document.getElementById('cd-body');
  bodyEl.innerHTML = '<div style="padding:24px;text-align:center;color:var(--text-muted)">⏳ Carregando avaliações...</div>';

  const avaliacoes = window.loadAvaliacoes ? (await window.loadAvaliacoes(c.id)) : [];
  _avaliacaoCache[c.id] = avaliacoes;

  const ultima = avaliacoes[0];
  const notas = ultima ? ultima.notas || {} : {};

  // Calcular média geral de todas as avaliações
  const mediaGeral = avaliacoes.length ? (
    avaliacoes.reduce((sum, av) => {
      const ns = Object.values(av.notas || {}).filter(n => n > 0);
      return sum + (ns.length ? ns.reduce((a,b)=>a+b,0)/ns.length : 0);
    }, 0) / avaliacoes.length
  ).toFixed(1) : '—';

  const starsHtml = (cat, val) => {
    let h = '';
    for (let i = 1; i <= 10; i++) {
      h += `<span style="font-size:17px;cursor:pointer;color:${i<=val?'#f59e0b':'var(--border)'};transition:color .1s"
        onmouseover="_avalHover('${cat}',${i})" onmouseout="_avalRestore('${cat}')"
        onclick="_avalSet('${cat}',${i},this)">★</span>`;
    }
    return `<div id="aval-stars-${cat}" data-val="${val||0}" style="display:flex;gap:1px;flex-wrap:wrap">${h}</div>`;
  };

  bodyEl.innerHTML = `
  <div style="padding:20px;display:flex;flex-direction:column;gap:20px">

    <!-- Média geral -->
    ${avaliacoes.length ? `
    <div style="background:linear-gradient(135deg,var(--accent)18,#a855f722);border:1px solid var(--accent)33;border-radius:14px;padding:18px;display:flex;align-items:center;gap:16px">
      <div style="font-size:42px;font-weight:900;color:var(--accent)">${mediaGeral}</div>
      <div>
        <div style="font-size:13px;font-weight:700">Média Geral do Cliente</div>
        <div style="font-size:11px;color:var(--text-muted);margin-top:2px">${avaliacoes.length} avaliação${avaliacoes.length!==1?'ões':''} registradas</div>
        <div style="font-size:11px;color:var(--text-muted);margin-top:1px">Qualidade: ${Number(mediaGeral)>=8?'🌟 Excelente':Number(mediaGeral)>=6?'✅ Bom':Number(mediaGeral)>=4?'⚠️ Regular':'🔴 Crítico'}</div>
      </div>
    </div>` : ''}

    <!-- Formulário de nova avaliação -->
    <div style="background:var(--bg-card2);border-radius:14px;padding:18px;border:1px solid var(--border)">
      <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--text-muted);margin-bottom:16px">
        ${ultima ? '✏️ Nova Avaliação Mensal' : '⭐ Primeira Avaliação'}
      </div>
      ${AVAL_CATEGORIAS.map(cat => `
        <div style="margin-bottom:14px" id="aval-row-${cat.id}">
          <div style="display:flex;align-items:center;gap:6px;margin-bottom:5px">
            <span>${cat.icon}</span>
            <span style="font-size:12px;font-weight:600">${cat.label}</span>
            <span style="font-size:10.5px;color:var(--text-muted)">— ${cat.desc}</span>
            <span style="margin-left:auto;font-size:11px;font-weight:700;color:var(--accent)" id="aval-val-${cat.id}">${notas[cat.id]||0}/10</span>
          </div>
          ${starsHtml(cat.id, notas[cat.id]||0)}
        </div>`).join('')}
      <div style="margin-top:10px">
        <label style="font-size:11px;font-weight:600;color:var(--text-muted);display:block;margin-bottom:4px">Observações</label>
        <textarea id="aval-obs" rows="2" placeholder="Pontos positivos, de atenção..." style="width:100%;padding:8px 10px;border:1.5px solid var(--border);border-radius:8px;background:var(--bg-card);color:var(--text-primary);font-family:var(--font);font-size:12px;outline:none;resize:none;box-sizing:border-box">${ultima?.obs||''}</textarea>
      </div>
      <button class="btn btn-primary" style="width:100%;margin-top:12px" onclick="_salvarAvaliacao('${c.id}')">💾 Salvar Avaliação</button>
    </div>

    <!-- Histórico -->
    ${avaliacoes.length > 1 ? `
    <div style="background:var(--bg-card2);border-radius:14px;padding:18px;border:1px solid var(--border)">
      <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--text-muted);margin-bottom:14px">📋 Histórico de Avaliações</div>
      ${avaliacoes.slice(0,10).map((av,i) => {
        const ns = Object.values(av.notas||{}).filter(n=>n>0);
        const med = ns.length ? (ns.reduce((a,b)=>a+b,0)/ns.length).toFixed(1) : '—';
        const d = av.createdAt ? new Date(av.createdAt).toLocaleDateString('pt-BR') : '—';
        return `<div style="display:flex;align-items:center;gap:12px;padding:8px 0;border-bottom:1px solid var(--border)${i===avaliacoes.length-2?';border-bottom:none':''}">
          <div style="font-size:11px;color:var(--text-muted);min-width:80px">${d}</div>
          <div style="font-size:18px;font-weight:800;color:${Number(med)>=8?'var(--green)':Number(med)>=6?'var(--accent)':Number(med)>=4?'var(--yellow)':'var(--red)'}">${med}</div>
          <div style="flex:1;font-size:11px;color:var(--text-muted);font-style:italic;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${av.obs||'—'}</div>
          <button class="icon-btn" style="color:var(--red)" onclick="_deleteAvaliacao('${av.id}','${c.id}')">🗑</button>
        </div>`;
      }).join('')}
    </div>` : ''}
  </div>`;
}

let _avalNotas = {};

function _avalHover(cat, val) {
  const wrap = document.getElementById(`aval-stars-${cat}`);
  if (!wrap) return;
  const stars = wrap.querySelectorAll('span');
  stars.forEach((s, i) => { s.style.color = i < val ? '#f59e0b' : 'var(--border)'; });
}
function _avalRestore(cat) {
  const wrap = document.getElementById(`aval-stars-${cat}`);
  if (!wrap) return;
  const val = parseInt(wrap.dataset.val || 0);
  const stars = wrap.querySelectorAll('span');
  stars.forEach((s, i) => { s.style.color = i < val ? '#f59e0b' : 'var(--border)'; });
}
function _avalSet(cat, val) {
  _avalNotas[cat] = val;
  const wrap = document.getElementById(`aval-stars-${cat}`);
  if (wrap) { wrap.dataset.val = val; _avalRestore(cat); }
  const valEl = document.getElementById(`aval-val-${cat}`);
  if (valEl) valEl.textContent = val + '/10';
}

async function _salvarAvaliacao(clientId) {
  const notas = {};
  AVAL_CATEGORIAS.forEach(cat => {
    const wrap = document.getElementById(`aval-stars-${cat.id}`);
    notas[cat.id] = wrap ? parseInt(wrap.dataset.val || 0) : 0;
  });
  const obs = document.getElementById('aval-obs')?.value.trim();
  const hasNote = Object.values(notas).some(v => v > 0);
  if (!hasNote) { alert('Dê pelo menos uma nota antes de salvar.'); return; }

  const data = { clientId, notas, obs, mes: new Date().toISOString().slice(0,7) };
  const id = await window.saveAvaliacao(data);
  if (id) {
    addNotif('Avaliação salva!', 'info');
    const c = clientsData.find(x => x.id === clientId);
    if (c) _renderTabAvaliacao(c);
  } else {
    alert('Erro ao salvar avaliação.');
  }
}

async function _deleteAvaliacao(id, clientId) {
  if (!confirm('Excluir esta avaliação?')) return;
  await window.deleteAvaliacao(id);
  const c = clientsData.find(x => x.id === clientId);
  if (c) _renderTabAvaliacao(c);
}

// ── ABA CALENDÁRIO ────────────────────────────────────────────────────────────
let _calNotes = {};
let _calYear  = new Date().getFullYear();
let _calMonth = new Date().getMonth();

async function _renderTabCalendario(c) {
  const bodyEl = document.getElementById('cd-body');
  bodyEl.innerHTML = '<div style="padding:24px;text-align:center;color:var(--text-muted)">⏳ Carregando calendário...</div>';

  const notes = window.loadCalNotes ? (await window.loadCalNotes(c.id)) : [];
  _calNotes[c.id] = {};
  notes.forEach(n => { _calNotes[c.id][n.data] = n; });

  // _calYear and _calMonth are already initialized or reset by openClientDetail

  _renderCalHTML(c);
}

function _renderCalHTML(c) {
  const bodyEl = document.getElementById('cd-body');
  const y = _calYear, m = _calMonth;
  const firstDay = new Date(y, m, 1).getDay(); // 0=dom
  const daysInMonth = new Date(y, m+1, 0).getDate();
  const monthName = new Date(y, m, 1).toLocaleDateString('pt-BR', {month:'long',year:'numeric'});
  const today = new Date().toISOString().slice(0,10);

  const notesMap = _calNotes[c.id] || {};

  let calHtml = `
  <div style="padding:16px">
    <!-- Nav mês -->
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
      <button class="icon-btn" onclick="_calNav(-1,'${c.id}')">‹</button>
      <div style="font-size:14px;font-weight:700;text-transform:capitalize">${monthName}</div>
      <button class="icon-btn" onclick="_calNav(1,'${c.id}')">›</button>
    </div>
    <!-- Grid dias da semana -->
    <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:3px;margin-bottom:3px">
      ${['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'].map(d=>`<div style="text-align:center;font-size:10px;font-weight:700;color:var(--text-muted);padding:4px">${d}</div>`).join('')}
    </div>
    <!-- Grid dias -->
    <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:3px">`;

  // Empty cells before first day
  for (let i = 0; i < firstDay; i++) {
    calHtml += `<div style="min-height:52px"></div>`;
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${y}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const note = notesMap[dateStr];
    const isToday = dateStr === today;
    const hasNote = !!note;

    calHtml += `
    <div onclick="_openCalDay('${c.id}','${dateStr}')"
      style="min-height:52px;border-radius:8px;border:1.5px solid ${isToday?'var(--accent)':hasNote?'var(--accent)44':'var(--border)'};background:${isToday?'var(--accent)18':hasNote?'var(--accent)08':'var(--bg-card2)'};padding:5px;cursor:pointer;transition:all .2s;position:relative"
      onmouseover="this.style.borderColor='var(--accent)'" onmouseout="this.style.borderColor='${isToday?'var(--accent)':hasNote?'var(--accent)44':'var(--border)'}'">
      <div style="font-size:11px;font-weight:${isToday?'800':'500'};color:${isToday?'var(--accent)':'var(--text-primary)'}">${d}</div>
      ${hasNote ? `
        <div style="font-size:9px;color:var(--text-muted);margin-top:2px;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;line-height:1.3">${note.texto}</div>
        ${note.estrelas ? `<div style="font-size:8px;color:#f59e0b">★ ${note.estrelas}/10</div>` : ''}
      ` : ''}
    </div>`;
  }

  calHtml += `</div>

  <!-- Notas do mês -->
  <div style="margin-top:16px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--text-muted);margin-bottom:8px">📝 Notas do mês</div>
    ${Object.entries(notesMap).filter(([d]) => d.startsWith(`${y}-${String(m+1).padStart(2,'0')}`))
      .sort(([a],[b]) => a.localeCompare(b))
      .map(([d, n]) => `
        <div style="display:flex;gap:8px;padding:8px;background:var(--bg-card2);border-radius:8px;margin-bottom:6px;border:1px solid var(--border);align-items:flex-start">
          <div style="font-size:11px;color:var(--accent);font-weight:700;min-width:30px">${new Date(d+'T12:00:00').getDate()}</div>
          <div style="flex:1;font-size:12px">${n.texto||'—'}</div>
          ${n.estrelas?`<span style="font-size:10px;color:#f59e0b">★${n.estrelas}</span>`:''}
          <button class="icon-btn" style="font-size:11px" onclick="_deleteCalNote('${n.id}','${c.id}')">🗑</button>
        </div>`).join('') || `<div style="font-size:11px;color:var(--text-muted);text-align:center;padding:12px">Clique em um dia para adicionar uma nota</div>`}
  </div>
  </div>`;

  bodyEl.innerHTML = calHtml;
}

function _calNav(dir, clientId) {
  _calMonth += dir;
  if (_calMonth < 0) { _calMonth = 11; _calYear--; }
  if (_calMonth > 11) { _calMonth = 0; _calYear++; }
  const c = clientsData.find(x => x.id === clientId);
  if (c) _renderCalHTML(c);
}

function _openCalDay(clientId, dateStr) {
  const c = clientsData.find(x => x.id === clientId);
  if (!c) return;
  const note = (_calNotes[clientId] || {})[dateStr];
  const existing = note || {};

  const dt = new Date(dateStr + 'T12:00:00');
  const label = dt.toLocaleDateString('pt-BR', {weekday:'long',day:'numeric',month:'long'});

  const wrap = document.createElement('div');
  wrap.id = 'cal-day-modal';
  wrap.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:99999;display:flex;align-items:center;justify-content:center';
  wrap.onclick = e => { if(e.target===wrap) wrap.remove(); };
  wrap.innerHTML = `
    <div class="modal" style="max-width:400px;position:relative">
      <div class="modal-header">
        <div class="modal-title">📅 ${label}</div>
        <button class="modal-close" onclick="document.getElementById('cal-day-modal').remove()">✕</button>
      </div>
      <div style="padding:16px;display:flex;flex-direction:column;gap:12px">
        <textarea id="cal-note-text" rows="4" placeholder="Anotação do dia..." style="width:100%;padding:9px;border:1.5px solid var(--border);border-radius:8px;background:var(--bg-card2);color:var(--text-primary);font-family:var(--font);font-size:13px;outline:none;resize:none;box-sizing:border-box">${existing.texto||''}</textarea>
        <div>
          <label style="font-size:11px;font-weight:600;color:var(--text-muted);display:block;margin-bottom:5px">Avaliação do dia (opcional)</label>
          <div id="cal-stars" style="display:flex;gap:3px"></div>
          <input type="hidden" id="cal-star-val" value="${existing.estrelas||0}">
        </div>
        <div style="display:flex;gap:8px">
          ${existing.id?`<button onclick="_deleteCalNote('${existing.id}','${clientId}')" class="btn btn-ghost" style="flex:1;color:var(--red)">🗑 Excluir</button>`:''}
          <button onclick="_saveCalDay('${clientId}','${dateStr}','${existing.id||''}')" class="btn btn-primary" style="flex:2">💾 Salvar</button>
        </div>
      </div>
    </div>`;
  document.body.appendChild(wrap);

  // Render stars
  _renderCalStars(parseInt(existing.estrelas||0));
}

let _calStarVal = 0;
function _renderCalStars(val) {
  _calStarVal = val;
  const wrap = document.getElementById('cal-stars');
  if (!wrap) return;
  let h = '';
  for (let i = 1; i <= 10; i++) {
    h += `<span style="font-size:18px;cursor:pointer;color:${i<=val?'#f59e0b':'var(--border)'}"
      onmouseover="this.parentElement.querySelectorAll('span').forEach((s,j)=>s.style.color=j<${i}?'#f59e0b':'var(--border)')"
      onmouseout="_renderCalStars(${val})"
      onclick="_setCalStar(${i})">★</span>`;
  }
  wrap.innerHTML = h;
  const inp = document.getElementById('cal-star-val');
  if (inp) inp.value = val;
}
function _setCalStar(n) { _calStarVal = n; _renderCalStars(n); }

async function _saveCalDay(clientId, dateStr, existingId) {
  const texto = document.getElementById('cal-note-text')?.value.trim();
  if (!texto) { alert('Escreva uma anotação antes de salvar.'); return; }
  const estrelas = parseInt(document.getElementById('cal-star-val')?.value || 0);
  const data = { clientId, data: dateStr, texto, estrelas };
  if (existingId) data.id = existingId;

  const id = await window.saveCalNote(data);
  if (id) {
    document.getElementById('cal-day-modal')?.remove();
    // Reload notes
    const notes = window.loadCalNotes ? (await window.loadCalNotes(clientId)) : [];
    _calNotes[clientId] = {};
    notes.forEach(n => { _calNotes[clientId][n.data] = n; });
    const c = clientsData.find(x => x.id === clientId);
    if (c) _renderCalHTML(c);
  }
}

async function _deleteCalNote(id, clientId) {
  document.getElementById('cal-day-modal')?.remove();
  await window.deleteCalNote(id);
  if (_calNotes[clientId]) delete _calNotes[clientId][Object.keys(_calNotes[clientId]).find(k => _calNotes[clientId][k]?.id === id)];
  const c = clientsData.find(x => x.id === clientId);
  if (c) _renderCalHTML(c);
}

// ── ABA ALERTAS ──────────────────────────────────────────────────────────────
const ALERTA_GRAVIDADES = [
  { id: 'leve',   label: '🟡 Leve',   color: '#f59e0b' },
  { id: 'medio',  label: '🟠 Médio',  color: '#f97316' },
  { id: 'grave',  label: '🔴 Grave',  color: '#ef4444' },
];

async function _renderTabAlertas(c) {
  const bodyEl = document.getElementById('cd-body');
  bodyEl.innerHTML = '<div style="padding:24px;text-align:center;color:var(--text-muted)">⏳ Carregando alertas...</div>';

  const alertas = window.loadAlertas ? (await window.loadAlertas(c.id)) : [];

  bodyEl.innerHTML = `
  <div style="padding:20px;display:flex;flex-direction:column;gap:16px">

    <!-- Formulário novo alerta -->
    <div style="background:var(--bg-card2);border-radius:12px;padding:16px;border:1px solid var(--border)">
      <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--text-muted);margin-bottom:12px">🚨 Registrar Alerta / Problema</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        <input id="alerta-titulo" type="text" placeholder="Título do alerta..." style="width:100%;padding:9px 12px;border:1.5px solid var(--border);border-radius:8px;background:var(--bg-card);color:var(--text-primary);font-family:var(--font);font-size:13px;outline:none;box-sizing:border-box">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <select id="alerta-gravidade" style="padding:9px 12px;border:1.5px solid var(--border);border-radius:8px;background:var(--bg-card);color:var(--text-primary);font-family:var(--font);font-size:13px;outline:none">
            ${ALERTA_GRAVIDADES.map(g => `<option value="${g.id}">${g.label}</option>`).join('')}
          </select>
          <select id="alerta-tipo" style="padding:9px 12px;border:1.5px solid var(--border);border-radius:8px;background:var(--bg-card);color:var(--text-primary);font-family:var(--font);font-size:13px;outline:none">
            <option value="comunicacao">💬 Comunicação</option>
            <option value="financeiro">💰 Financeiro</option>
            <option value="operacional">⚙️ Operacional</option>
            <option value="tecnico">🔧 Técnico</option>
            <option value="relacionamento">🤝 Relacionamento</option>
            <option value="outro">📌 Outro</option>
          </select>
        </div>
        <textarea id="alerta-desc" rows="3" placeholder="Descreva o problema ou situação..." style="width:100%;padding:9px 12px;border:1.5px solid var(--border);border-radius:8px;background:var(--bg-card);color:var(--text-primary);font-family:var(--font);font-size:13px;outline:none;resize:none;box-sizing:border-box"></textarea>
        <button onclick="_salvarAlerta('${c.id}')" class="btn btn-primary" style="width:100%">💾 Registrar alerta</button>
      </div>
    </div>

    <!-- Lista de alertas -->
    <div>
      <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--text-muted);margin-bottom:12px">📋 Histórico de Alertas (${alertas.length})</div>
      ${alertas.length === 0 ?
        `<div style="text-align:center;padding:32px;color:var(--text-muted);background:var(--bg-card);border-radius:12px;border:1px solid var(--border)">
          <div style="font-size:32px;margin-bottom:8px">✅</div>
          <div style="font-size:13px">Nenhum alerta registrado</div>
          <div style="font-size:11px;margin-top:4px">Registre problemas ou pontos de atenção acima</div>
        </div>` :
        alertas.map(a => {
          const g = ALERTA_GRAVIDADES.find(x => x.id === a.gravidade) || ALERTA_GRAVIDADES[0];
          const d = a.createdAt ? new Date(a.createdAt).toLocaleDateString('pt-BR') : '—';
          return `
          <div style="background:var(--bg-card);border:1.5px solid ${g.color}44;border-radius:12px;padding:14px;margin-bottom:8px;border-left:4px solid ${g.color}">
            <div style="display:flex;align-items:flex-start;gap:10px">
              <div style="flex:1">
                <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
                  <span style="font-size:12px;font-weight:700">${a.titulo||'Alerta'}</span>
                  <span style="font-size:9.5px;font-weight:700;color:${g.color};background:${g.color}15;padding:2px 7px;border-radius:5px">${g.label}</span>
                  ${a.tipo?`<span style="font-size:9.5px;color:var(--text-muted)">${a.tipo}</span>`:''}
                </div>
                ${a.desc?`<div style="font-size:11.5px;color:var(--text-muted);line-height:1.5">${a.desc}</div>`:''}
                <div style="font-size:10px;color:var(--text-muted);margin-top:4px">${d}</div>
              </div>
              <button class="icon-btn" style="color:var(--red)" onclick="_deleteAlerta('${a.id}','${c.id}')">🗑</button>
            </div>
          </div>`;
        }).join('')
      }
    </div>
  </div>`;
}

async function _salvarAlerta(clientId) {
  const titulo = document.getElementById('alerta-titulo')?.value.trim();
  const gravidade = document.getElementById('alerta-gravidade')?.value;
  const tipo = document.getElementById('alerta-tipo')?.value;
  const desc = document.getElementById('alerta-desc')?.value.trim();
  if (!titulo) { alert('Informe um título para o alerta.'); return; }

  const data = { clientId, titulo, gravidade, tipo, desc };
  const id = await window.saveAlerta(data);
  if (id) {
    addNotif(`Alerta "${titulo}" registrado`, 'info');
    const c = clientsData.find(x => x.id === clientId);
    if (c) _renderTabAlertas(c);
  } else {
    alert('Erro ao salvar alerta.');
  }
}

async function _deleteAlerta(id, clientId) {
  if (!confirm('Excluir este alerta?')) return;
  await window.deleteAlerta(id);
  const c = clientsData.find(x => x.id === clientId);
  if (c) _renderTabAlertas(c);
}

// ── ABA NOTAS ─────────────────────────────────────────────────────────────────
async function _renderTabNotas(c) {
  const bodyEl = document.getElementById('cd-body');
  bodyEl.innerHTML = '<div style="padding:24px;text-align:center;color:var(--text-muted)">⏳ Carregando notas...</div>';

  const notas = window.loadNotasRapidas ? (await window.loadNotasRapidas()) : [];
  const clienteNotas = notas.filter(n => n.clienteId === c.id);

  const tagColors = { 'follow-up':'var(--accent)','reuniao':'var(--cyan)','cobranca':'var(--red)','entrega':'var(--yellow)','feedback':'var(--green)','alerta':'var(--red)' };
  const tagLabels = { 'follow-up':'🔄 Follow-up','reuniao':'📅 Reunião','cobranca':'💳 Cobrança','entrega':'📦 Entrega','feedback':'💬 Feedback','alerta':'🚨 Alerta' };

  bodyEl.innerHTML = `
  <div style="padding:20px">
    <!-- Nova nota rápida inline -->
    <div style="background:var(--bg-card2);border-radius:12px;padding:16px;border:1px solid var(--border);margin-bottom:20px">
      <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--text-muted);margin-bottom:10px">📝 Nova Nota</div>
      <textarea id="nota-inline-text" rows="3" placeholder="Escreva sua anotação..." style="width:100%;padding:9px 12px;border:1.5px solid var(--border);border-radius:8px;background:var(--bg-card);color:var(--text-primary);font-family:var(--font);font-size:13px;outline:none;resize:none;box-sizing:border-box;margin-bottom:10px"></textarea>
      <div style="display:flex;gap:8px;align-items:center">
        <select id="nota-inline-tag" style="padding:7px 10px;border:1.5px solid var(--border);border-radius:8px;background:var(--bg-card);color:var(--text-primary);font-family:var(--font);font-size:12px;outline:none">
          <option value="">— Etiqueta —</option>
          ${Object.entries(tagLabels).map(([k,v]) => `<option value="${k}">${v}</option>`).join('')}
        </select>
        <button class="btn btn-primary" style="flex:1" onclick="_saveNotaInline('${c.id}','${c.nome}')">💾 Salvar</button>
      </div>
    </div>

    <!-- Lista de notas -->
    <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--text-muted);margin-bottom:12px">📋 Notas Registradas (${clienteNotas.length})</div>
    ${clienteNotas.length === 0 ?
      `<div style="text-align:center;padding:32px;color:var(--text-muted);background:var(--bg-card);border-radius:12px;border:1px solid var(--border)">
        <div style="font-size:32px;margin-bottom:8px">📝</div>Nenhuma nota registrada para este cliente.
      </div>` :
      clienteNotas.map(n => {
        const d = n.createdAt ? new Date(n.createdAt).toLocaleDateString('pt-BR') : '—';
        const tagColor = tagColors[n.tag] || 'var(--text-muted)';
        const tagLabel = tagLabels[n.tag] || '';
        return `
        <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:14px;margin-bottom:8px">
          <div style="display:flex;align-items:flex-start;gap:8px">
            <div style="flex:1">
              ${tagLabel?`<span style="font-size:9.5px;font-weight:700;color:${tagColor};background:${tagColor}18;padding:2px 7px;border-radius:5px;display:inline-block;margin-bottom:6px">${tagLabel}</span>`:''}
              <div style="font-size:13px;line-height:1.55;white-space:pre-wrap">${n.texto}</div>
              <div style="display:flex;gap:10px;align-items:center;margin-top:6px">
                <span style="font-size:10px;color:var(--text-muted)">${d}</span>
                ${n.estrelas?`<span style="font-size:10px;color:#f59e0b">★ ${n.estrelas}/10</span>`:''}
                ${n.autor?`<span style="font-size:10px;color:var(--text-muted)">${n.autor}</span>`:''}
              </div>
            </div>
            <button class="icon-btn" style="color:var(--red)" onclick="_deleteNotaInline('${n.id}','${c.id}')">🗑</button>
          </div>
        </div>`;
      }).join('')
    }
  </div>`;
}

async function _saveNotaInline(clientId, clienteNome) {
  const texto = document.getElementById('nota-inline-text')?.value.trim();
  if (!texto) { alert('Escreva uma nota antes de salvar.'); return; }
  const tag = document.getElementById('nota-inline-tag')?.value;
  const data = {
    clienteId: clientId, clienteNome,
    texto, tag, estrelas: 0,
    autor: window.currentUser?.displayName || 'Equipe'
  };
  const id = await window.saveNotaRapida(data);
  if (id) {
    const c = clientsData.find(x => x.id === clientId);
    if (c) _renderTabNotas(c);
  }
}

async function _deleteNotaInline(id, clientId) {
  if (!confirm('Excluir esta nota?')) return;
  await window.deleteNotaRapida(id);
  const c = clientsData.find(x => x.id === clientId);
  if (c) _renderTabNotas(c);
}

// ═══════════════════════════════════════════════════════════════════════════════
// ██ INICIALIZAÇÃO DOS MÓDULOS NOVOS ██████████████████████████████████████████
// ═══════════════════════════════════════════════════════════════════════════════

function _initNovosModulos() {
  // Mostrar FAB de nota rápida após login
  const fab = document.getElementById('quick-note-fab');
  if (fab) fab.style.display = 'flex';

  // Carregar badge de lembretes
  setTimeout(_atualizarLembreteBadge, 2000);

  // Adicionar classificação e etapa da jornada aos cards de clientes existentes
  _patchClientCards();
}

function _patchClientCards() {
  // Adiciona campo classificação e etapaJornada ao openClientReg quando necessário
  // (os campos já estão no cliente data — só precisamos exibi-los)
}

// Chamar inicialização quando o usuário logar
const _origInitApp = typeof initApp === 'function' ? initApp : null;

// Hook no evento de autenticação já existente
document.addEventListener('crm-ready', () => {
  _initNovosModulos();
});

// Fallback: tentar inicializar após 3s caso o evento não dispare
setTimeout(() => {
  const fab = document.getElementById('quick-note-fab');
  if (fab && fab.style.display === 'none') {
    if (window.currentUser) _initNovosModulos();
  }
}, 3000);

// ── renderClientCard badge injection: handled inline in the original function ──
// ── saveClientData: agora usa saveState() que já persiste clientsData ─────────

// ═══════════════════════════════════════════════════════
// PERFIL DO USUÁRIO
// ═══════════════════════════════════════════════════════

async function openProfileModal() {
  const user = window.currentUser;
  if (!user) return;

  // Carrega dados salvos do perfil
  const saved = window.loadUserRole ? (await window.loadUserRole(user.uid)) : null;

  document.getElementById('perfil-nome').value       = saved?.name        || user.name || '';
  document.getElementById('perfil-cargo').value      = saved?.cargo       || '';
  document.getElementById('perfil-nascimento').value = saved?.nascimento  || '';
  document.getElementById('perfil-whatsapp').value   = saved?.whatsapp    || '';
  document.getElementById('perfil-sobre').value      = saved?.sobre       || '';

  const foto     = saved?.profilePhoto || user.photo || '';
  const preview  = document.getElementById('perfil-foto-preview');
  const ph       = document.getElementById('perfil-foto-placeholder');
  const status   = document.getElementById('perfil-foto-status');

  if (foto) {
    preview.src = foto;
    preview.style.display = 'block';
    ph.style.display = 'none';
  } else {
    preview.style.display = 'none';
    ph.style.display = 'flex';
    ph.textContent = (user.name || '?')[0].toUpperCase();
  }
  status.textContent = foto ? 'Foto atual carregada' : 'Clique em 📷 para adicionar';

  window._perfilNovaFotoBlob = null;
  document.getElementById('modal-perfil').classList.add('open');
}

function previewPerfilFoto(input) {
  const file = input.files[0];
  if (!file) return;
  if (file.size > 5 * 1024 * 1024) { alert('A foto deve ter no máximo 5MB.'); return; }

  window._perfilNovaFotoBlob = file;
  const reader = new FileReader();
  reader.onload = e => {
    const preview = document.getElementById('perfil-foto-preview');
    const ph      = document.getElementById('perfil-foto-placeholder');
    preview.src   = e.target.result;
    preview.style.display = 'block';
    ph.style.display      = 'none';
    document.getElementById('perfil-foto-status').textContent = 'Nova foto selecionada (não salva ainda)';
  };
  reader.readAsDataURL(file);
}

async function salvarPerfil() {
  const user = window.currentUser;
  if (!user) return;

  const btn = document.querySelector('#modal-perfil .btn-primary');
  btn.disabled = true;
  btn.textContent = 'Salvando...';

  let photoUrl = user.photo || '';

  // Upload da foto se houver nova
  if (window._perfilNovaFotoBlob && window.storageUpload) {
    try {
      document.getElementById('perfil-foto-status').textContent = 'Enviando foto...';
      const ext  = window._perfilNovaFotoBlob.name.split('.').pop() || 'jpg';
      const path = `profiles/${user.uid}/foto.${ext}`;
      photoUrl   = await window.storageUpload(window._perfilNovaFotoBlob, path);
      document.getElementById('perfil-foto-status').textContent = 'Foto enviada!';
    } catch(e) {
      document.getElementById('perfil-foto-status').textContent = 'Erro ao enviar foto: ' + e.message;
      btn.disabled = false;
      btn.textContent = '💾 Salvar perfil';
      return;
    }
  }

  const dados = {
    uid:          user.uid,
    email:        user.email,
    role:         user.role,
    name:         document.getElementById('perfil-nome').value.trim()  || user.name,
    cargo:        document.getElementById('perfil-cargo').value.trim(),
    nascimento:   document.getElementById('perfil-nascimento').value,
    whatsapp:     document.getElementById('perfil-whatsapp').value.trim(),
    sobre:        document.getElementById('perfil-sobre').value.trim(),
    profilePhoto: photoUrl,
    photo:        photoUrl,
  };

  await window.saveUserRole(user.uid, dados);

  // Atualiza currentUser em memória
  window.currentUser = { ...window.currentUser, ...dados };

  // Atualiza sidebar
  const sPhoto  = document.getElementById('sidebar-user-photo');
  const sAvatar = document.getElementById('sidebar-user-avatar');
  const sName   = document.getElementById('sidebar-user-name');
  if (photoUrl) {
    sPhoto.src = photoUrl;
    sPhoto.style.display = 'block';
    if (sAvatar) sAvatar.style.display = 'none';
  }
  if (sName) sName.textContent = dados.name;

  // Atualiza lista de usuários no localStorage para a equipe ver
  const allUsers = JSON.parse(localStorage.getItem('dc_all_users') || '[]');
  const idx = allUsers.findIndex(u => u.uid === user.uid);
  if (idx >= 0) {
    allUsers[idx] = { ...allUsers[idx], name: dados.name, profilePhoto: photoUrl, cargo: dados.cargo };
    localStorage.setItem('dc_all_users', JSON.stringify(allUsers));
  }

  btn.disabled = false;
  btn.textContent = '💾 Salvar perfil';
  document.getElementById('modal-perfil').classList.remove('open');
  addNotif('Perfil atualizado com sucesso!', 'success');
}

async function verPerfilMembro(uid, teamKey) {
  const allUsers = JSON.parse(localStorage.getItem('dc_all_users') || '[]');
  const teamMembers2 = window._getTeamMembers ? window._getTeamMembers() : teamMembers;

  let dados = null;
  if (uid && window.loadUserRole) {
    dados = await window.loadUserRole(uid);
  }
  const fbUser = allUsers.find(u => u.uid === uid) || {};
  const tm     = teamMembers2.find(m => m.key === teamKey) || {};
  const ficha  = (window.memberFichas || {})[teamKey] || {};

  const nome   = dados?.name || fbUser?.name || tm?.label || '—';
  const cargo  = dados?.cargo || ficha?.funcao || tm?.role || '—';
  const foto   = dados?.profilePhoto || fbUser?.profilePhoto || fbUser?.photo || '';
  const sobre  = dados?.sobre || '';
  const nasc   = dados?.nascimento || '';
  const wpp    = dados?.whatsapp || '';

  document.getElementById('ver-perfil-titulo').textContent = nome;
  document.getElementById('ver-perfil-nome').textContent   = nome;
  document.getElementById('ver-perfil-cargo').textContent  = cargo;

  const vFoto   = document.getElementById('ver-perfil-foto');
  const vAvatar = document.getElementById('ver-perfil-avatar');
  if (foto) {
    vFoto.src = foto; vFoto.style.display = 'block'; vAvatar.style.display = 'none';
  } else {
    vFoto.style.display = 'none'; vAvatar.style.display = 'flex';
    vAvatar.textContent = nome[0]?.toUpperCase() || '?';
  }

  const det = document.getElementById('ver-perfil-detalhes');
  const row = (icon, label, val) => val
    ? `<div style="display:flex;gap:10px;align-items:flex-start;padding:8px 12px;background:var(--bg-card2);border-radius:8px">
        <span style="font-size:15px">${icon}</span>
        <div><div style="font-size:10px;color:var(--text-muted);font-weight:600;text-transform:uppercase;letter-spacing:.5px">${label}</div>
        <div style="font-size:12.5px;color:var(--text-primary);margin-top:2px">${val}</div></div></div>`
    : '';

  let nascFormatado = '';
  if (nasc) {
    const [y, m, d] = nasc.split('-');
    nascFormatado = `${d}/${m}/${y}`;
    const hoje = new Date();
    const dn   = new Date(Number(y), Number(m) - 1, Number(d));
    const prox = new Date(hoje.getFullYear(), dn.getMonth(), dn.getDate());
    if (prox < hoje) prox.setFullYear(hoje.getFullYear() + 1);
    const dias = Math.round((prox - hoje) / 86400000);
    if (dias <= 7) nascFormatado += ` 🎂 Aniversário em ${dias === 0 ? 'hoje!' : dias + ' dias!'}`;
  }

  det.innerHTML = [
    row('📋', 'Cargo', cargo),
    row('🎂', 'Aniversário', nascFormatado),
    row('📱', 'WhatsApp', wpp ? `<a href="https://wa.me/55${wpp.replace(/\D/g,'')}" target="_blank" style="color:var(--accent)">${wpp}</a>` : ''),
    row('💬', 'Sobre', sobre),
  ].filter(Boolean).join('');

  if (!det.innerHTML) det.innerHTML = '<div style="font-size:12px;color:var(--text-muted);text-align:center;padding:12px">Perfil ainda não preenchido.</div>';

  document.getElementById('modal-ver-perfil').classList.add('open');
}

// ═══════════════════════════════════════════════════════
// IA DA AGÊNCIA
// ═══════════════════════════════════════════════════════

let _iaMsgs        = [];
let _iaClientId    = '';
let _iaItemKey     = '';
let _iaLoading     = false;
let _iaChatId      = null;
let _iaAttachments = [];  // [{name, text}]

// ── Persistência ────────────────────────────────────────
function _iaGetChats()         { return JSON.parse(localStorage.getItem('dc_ia_chats')   || '[]'); }
function _iaSetChats(c)        { localStorage.setItem('dc_ia_chats', JSON.stringify(c)); }
function _iaGetPrompts()       { return JSON.parse(localStorage.getItem('dc_ia_prompts') || '[]'); }
function _iaSetPrompts(p)      { localStorage.setItem('dc_ia_prompts', JSON.stringify(p)); }

function _iaSaveChatNow() {
  if (!_iaMsgs.length) return;
  const chats = _iaGetChats();
  const client = (clientsData || []).find(x => x.id === _iaClientId);
  const title = client ? `${client.name} — ${new Date().toLocaleDateString('pt-BR')}` : `Conversa — ${new Date().toLocaleDateString('pt-BR')}`;
  if (_iaChatId) {
    const idx = chats.findIndex(c => c.id === _iaChatId);
    if (idx >= 0) { chats[idx].messages = [..._iaMsgs]; chats[idx].updatedAt = Date.now(); if (!chats[idx].customTitle) chats[idx].title = title; }
    else chats.unshift({ id: _iaChatId, title, clientId: _iaClientId, itemKey: _iaItemKey, messages: [..._iaMsgs], createdAt: Date.now(), updatedAt: Date.now() });
  } else {
    _iaChatId = Date.now().toString(36) + Math.random().toString(36).slice(2);
    chats.unshift({ id: _iaChatId, title, clientId: _iaClientId, itemKey: _iaItemKey, messages: [..._iaMsgs], createdAt: Date.now(), updatedAt: Date.now() });
  }
  _iaSetChats(chats.slice(0, 50));
  _iaRenderChatList();
}

function renderIAPage() {
  const clientes = (clientsData || []).filter(c => !c.archived && c.name);
  const clienteOpts = clientes.map(c =>
    `<option value="${c.id}">${c.name}${c.company ? ' — ' + c.company : ''}</option>`
  ).join('');

  document.getElementById('main-content').innerHTML = `
    <div style="display:flex;height:calc(100vh - 60px);overflow:hidden">

      <!-- Sidebar: histórico -->
      <div id="ia-sidebar" style="width:230px;min-width:230px;border-right:1px solid var(--border);display:flex;flex-direction:column;overflow:hidden;background:var(--bg-sidebar)">
        <div style="padding:10px;border-bottom:1px solid var(--border)">
          <button class="btn btn-primary" onclick="_iaClearChat(true)" style="width:100%;justify-content:center;font-size:12px">＋ Nova conversa</button>
        </div>
        <div style="padding:8px 8px 4px">
          <input type="text" id="ia-search" placeholder="🔍 Buscar..." oninput="_iaRenderChatList(this.value)"
            style="width:100%;background:var(--bg-card);border:1px solid var(--border);border-radius:7px;color:var(--text-primary);font-size:11px;padding:5px 9px;outline:none;box-sizing:border-box">
        </div>
        <div id="ia-chat-list" style="flex:1;overflow-y:auto;padding:2px 6px 10px"></div>
      </div>

      <!-- Área principal -->
      <div style="flex:1;display:flex;flex-direction:column;overflow:hidden;min-width:0">

        <!-- Header -->
        <div style="padding:10px 14px;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:8px;flex-wrap:wrap;flex-shrink:0">
          <button id="ia-mob-sidebar-btn" onclick="_iaToggleSidebar()" style="display:none;background:none;border:none;cursor:pointer;color:var(--text-primary);font-size:18px;padding:2px 4px" title="Histórico de chats">☰</button>
          <span style="font-size:14px;font-weight:700;white-space:nowrap">🤖 IA da Agência</span>
          <select id="ia-cliente-sel" onchange="_iaSetCliente(this.value)"
            style="background:var(--bg-card);border:1px solid var(--border);border-radius:8px;color:var(--text-primary);font-family:var(--font);font-size:12px;padding:5px 10px;outline:none;max-width:190px">
            <option value="">🌐 Modo geral</option>
            ${clienteOpts}
          </select>
          <select id="ia-item-sel" onchange="_iaSetItem(this.value)"
            style="display:none;background:var(--bg-card);border:1px solid var(--border);border-radius:8px;color:var(--text-primary);font-family:var(--font);font-size:12px;padding:5px 10px;outline:none;max-width:190px">
            <option value="">📋 Item/tarefa (opcional)</option>
          </select>
          <div style="flex:1"></div>
          <button class="btn btn-ghost" onclick="_iaOpenPrompts()" style="font-size:11px;padding:4px 9px" title="Biblioteca de prompts">📌 Prompts</button>
          <button class="btn btn-ghost" onclick="_iaClearChat(true)" style="font-size:11px;padding:4px 9px" title="Iniciar nova conversa">🗑️ Novo</button>
        </div>

        <!-- Banner de contexto do cliente/item -->
        <div id="ia-context-banner" style="display:none;background:var(--accent-soft);border-bottom:1px solid rgba(124,92,252,.18);padding:7px 14px;font-size:11px;color:var(--text-secondary);flex-shrink:0"></div>

        <!-- Mensagens -->
        <div id="ia-msgs" style="flex:1;overflow-y:auto;display:flex;flex-direction:column;gap:12px;padding:16px;min-height:0">
          <div id="ia-welcome" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:14px;padding:40px 20px;text-align:center">
            <div style="font-size:44px">🤖</div>
            <div style="font-size:15px;font-weight:600">Olá! Sou a IA da DigitalCreate.</div>
            <div style="font-size:13px;color:var(--text-muted);max-width:380px">Selecione um cliente para eu ter contexto completo sobre ele, ou converse em modo geral sobre marketing e estratégias.</div>
            <div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin-top:4px">
              ${['Crie uma legenda para Instagram','Analise o cliente selecionado','Sugira estratégia de conteúdo','Me ajude a escrever um e-mail'].map(s =>
                `<button class="btn btn-ghost" style="font-size:11px;padding:5px 10px" onclick="_iaSendSuggestion(\`${s}\`)">${s}</button>`
              ).join('')}
            </div>
          </div>
        </div>

        <!-- Barra de anexos -->
        <div id="ia-attach-bar" style="display:none;padding:5px 14px;gap:6px;flex-wrap:wrap;background:var(--bg-sidebar);border-top:1px solid var(--border);flex-shrink:0;align-items:center"></div>

        <!-- Input -->
        <div style="padding:10px 14px;border-top:1px solid var(--border);flex-shrink:0">
          <div style="background:var(--bg-card);border:1px solid var(--border-bright);border-radius:12px;overflow:hidden">
            <textarea id="ia-input" placeholder="Digite sua mensagem… (Enter envia · Shift+Enter nova linha)"
              style="width:100%;background:none;border:none;outline:none;color:var(--text-primary);font-family:var(--font);font-size:13px;padding:11px 14px 4px;resize:none;min-height:46px;max-height:140px;line-height:1.6;box-sizing:border-box"
              onkeydown="_iaKeyDown(event)" oninput="_iaAutoResize(this)"></textarea>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:5px 10px">
              <div style="display:flex;align-items:center;gap:4px">
                <button class="btn btn-ghost" onclick="_iaAttachFile()" style="font-size:12px;padding:3px 8px" title="Anexar arquivo (.txt, .md, .csv, .js, .py…)">📎 Anexar</button>
                <input type="file" id="ia-file-input" accept=".txt,.md,.csv,.json,.js,.ts,.py,.html,.css,.xml" multiple style="display:none" onchange="_iaHandleFile(this)">
                <button class="btn btn-ghost" onclick="_iaSavePromptModal()" style="font-size:12px;padding:3px 8px" title="Salvar mensagem atual como prompt">📌 Salvar prompt</button>
              </div>
              <button class="btn btn-primary" onclick="_iaSend()" id="ia-send-btn" style="font-size:12px;padding:5px 16px">Enviar ↑</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  `;

  _iaRenderChatList();

  if (_iaClientId) {
    const sel = document.getElementById('ia-cliente-sel');
    if (sel) sel.value = _iaClientId;
    _iaSetCliente(_iaClientId, true);
  }
  if (_iaMsgs.length > 0) _iaRenderAllMsgs();

  // Overlay para fechar sidebar no mobile
  const ov = document.createElement('div');
  ov.id = 'ia-mob-sidebar-overlay';
  ov.onclick = _iaToggleSidebar;
  document.getElementById('main-content').appendChild(ov);
}

function _iaToggleSidebar() {
  const sb = document.getElementById('ia-sidebar');
  const ov = document.getElementById('ia-mob-sidebar-overlay');
  if (!sb) return;
  const open = sb.classList.toggle('open');
  if (ov) ov.classList.toggle('open', open);
}

// ── Chat list ────────────────────────────────────────────
function _iaRenderChatList(filter = '') {
  const el = document.getElementById('ia-chat-list');
  if (!el) return;
  let chats = _iaGetChats();
  if (filter) {
    const f = filter.toLowerCase();
    chats = chats.filter(c => (c.customTitle || c.title).toLowerCase().includes(f));
  }
  // Pinned first
  chats.sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0));

  if (!chats.length) {
    el.innerHTML = `<div style="padding:16px 8px;text-align:center;font-size:11px;color:var(--text-muted)">Nenhuma conversa salva</div>`;
    return;
  }
  el.innerHTML = chats.map(c => {
    const active = c.id === _iaChatId;
    const date = new Date(c.updatedAt || c.createdAt).toLocaleDateString('pt-BR', { day:'2-digit', month:'2-digit' });
    const displayTitle = c.customTitle || c.title;
    return `<div onclick="_iaLoadChat('${c.id}')" style="padding:8px 10px;border-radius:8px;margin:2px 0;cursor:pointer;background:${active ? 'var(--accent-soft)' : 'transparent'};border:1px solid ${active ? 'rgba(124,92,252,.3)' : 'transparent'};transition:.15s;position:relative" class="ia-chat-row">
      ${c.pinned ? '<span style="position:absolute;top:5px;left:6px;font-size:9px">📌</span>' : ''}
      <div style="font-size:11.5px;font-weight:${active ? '600' : '400'};color:var(--text-primary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding-right:44px;${c.pinned?'padding-left:14px':''}">${c.starred ? '⭐ ' : ''}${displayTitle}</div>
      <div style="font-size:10px;color:var(--text-muted);margin-top:2px;${c.pinned?'padding-left:14px':''}">${date} · ${c.messages.length} msg${c.messages.length !== 1 ? 's' : ''}</div>
      <div style="position:absolute;top:5px;right:4px;display:flex;gap:1px">
        <button onclick="event.stopPropagation();_iaRenameChat('${c.id}')" title="Renomear" style="background:none;border:none;cursor:pointer;font-size:11px;opacity:.45;transition:.15s;padding:2px" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=.45">✏️</button>
        <button onclick="event.stopPropagation();_iaToggleStar('${c.id}')" title="${c.starred?'Remover favorito':'Favoritar'}" style="background:none;border:none;cursor:pointer;font-size:11px;opacity:${c.starred?'1':'.45'};transition:.15s;padding:2px" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=${c.starred?'1':'.45'}">⭐</button>
        <button onclick="event.stopPropagation();_iaTogglePin('${c.id}')" title="${c.pinned?'Desafixar':'Fixar'}" style="background:none;border:none;cursor:pointer;font-size:11px;opacity:${c.pinned?'1':'.45'};transition:.15s;padding:2px" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=${c.pinned?'1':'.45'}">📌</button>
        <button onclick="event.stopPropagation();_iaDeleteChat('${c.id}')" title="Apagar" style="background:none;border:none;cursor:pointer;font-size:13px;opacity:.45;transition:.15s;padding:2px" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=.45">✕</button>
      </div>
    </div>`;
  }).join('');
}

function _iaLoadChat(id) {
  const chats = _iaGetChats();
  const chat = chats.find(c => c.id === id);
  if (!chat) return;
  _iaChatId    = chat.id;
  _iaMsgs      = [...chat.messages];
  _iaClientId  = chat.clientId || '';
  _iaItemKey   = chat.itemKey  || '';
  _iaAttachments = [];

  const sel = document.getElementById('ia-cliente-sel');
  if (sel) sel.value = _iaClientId;

  if (_iaClientId) _iaSetCliente(_iaClientId, true);
  else {
    const banner = document.getElementById('ia-context-banner');
    if (banner) banner.style.display = 'none';
    const itemSel = document.getElementById('ia-item-sel');
    if (itemSel) itemSel.style.display = 'none';
  }

  _iaRenderAllMsgs();
  _iaRenderChatList();
}

function _iaDeleteChat(id) {
  const chats = _iaGetChats().filter(c => c.id !== id);
  _iaSetChats(chats);
  if (_iaChatId === id) {
    _iaChatId = null; _iaMsgs = [];
    _iaClearChat(false);
  }
  _iaRenderChatList();
}

function _iaTogglePin(id) {
  const chats = _iaGetChats();
  const c = chats.find(x => x.id === id);
  if (c) { c.pinned = !c.pinned; _iaSetChats(chats); _iaRenderChatList(); }
}

function _iaToggleStar(id) {
  const chats = _iaGetChats();
  const c = chats.find(x => x.id === id);
  if (c) { c.starred = !c.starred; _iaSetChats(chats); _iaRenderChatList(); }
}

function _iaRenameChat(id) {
  const chats = _iaGetChats();
  const c = chats.find(x => x.id === id);
  if (!c) return;
  const current = c.customTitle || c.title;
  const name = prompt('Renomear conversa:', current);
  if (name && name.trim()) {
    c.customTitle = name.trim();
    _iaSetChats(chats);
    _iaRenderChatList();
  }
}

// ── Cliente / Item ───────────────────────────────────────
function _iaSetCliente(clientId, silent = false) {
  _iaClientId = clientId;
  _iaItemKey  = '';
  const banner  = document.getElementById('ia-context-banner');
  const itemSel = document.getElementById('ia-item-sel');

  if (!clientId) {
    if (banner)  banner.style.display  = 'none';
    if (itemSel) itemSel.style.display = 'none';
    return;
  }

  const c = (clientsData || []).find(x => x.id === clientId);
  if (!c) return;

  // Coleta itens do cliente para o dropdown
  const itens = [];
  Object.entries(boards || {}).forEach(([bk, b]) => {
    (b.groups || []).forEach(g => {
      (g.items || []).forEach(i => {
        if (i._clientId === clientId || i.cliente === c.name) {
          itens.push({ key: `${bk}::${g.id}::${i.id}`, label: `[${g.label}] ${i.name}` });
        }
      });
    });
  });

  if (itemSel) {
    itemSel.innerHTML = `<option value="">📋 Item/tarefa (opcional)</option>` +
      itens.map(x => `<option value="${x.key}">${x.label}</option>`).join('');
    if (_iaItemKey) itemSel.value = _iaItemKey;
    itemSel.style.display = itens.length ? '' : 'none';
  }

  let tarefaCount = itens.length;
  if (banner) {
    banner.style.display = 'flex';
    banner.style.alignItems = 'center';
    banner.style.justifyContent = 'space-between';
    banner.innerHTML = `<span><strong style="color:var(--accent)">${c.name}</strong>${c.company ? ` · ${c.company}` : ''}${c.segment ? ` · ${c.segment}` : ''} · <span style="color:var(--text-muted)">${tarefaCount} tarefa${tarefaCount !== 1 ? 's' : ''}</span></span>
      <span style="font-size:10px;color:var(--text-muted)">Contexto carregado ✓</span>`;
  }

  if (!silent) addNotif(`Contexto de ${c.name} carregado na IA`, 'info');
}

function _iaSetItem(itemKey) {
  _iaItemKey = itemKey;
  const banner = document.getElementById('ia-context-banner');
  if (!itemKey || !banner) return;

  let foundItem = null, foundGroup = '';
  Object.entries(boards || {}).forEach(([bk, b]) => {
    (b.groups || []).forEach(g => {
      (g.items || []).forEach(i => {
        if (`${bk}::${g.id}::${i.id}` === itemKey) { foundItem = i; foundGroup = g.label; }
      });
    });
  });

  if (foundItem) {
    const c = (clientsData || []).find(x => x.id === _iaClientId);
    const clientName = c ? c.name : '';
    const extra = `<span style="margin-left:8px;background:rgba(124,92,252,.15);border-radius:5px;padding:2px 7px;font-size:10px">📌 ${foundGroup}: ${foundItem.name}</span>`;
    banner.innerHTML = banner.innerHTML.replace(/<span style="margin-left:8px.*?<\/span>/, '') + extra;
  }
}

// ── Nova conversa / Limpar ───────────────────────────────
function _iaClearChat(newConversation = false) {
  _iaMsgs = [];
  _iaAttachments = [];
  if (newConversation) { _iaChatId = null; }

  const container = document.getElementById('ia-msgs');
  if (container) {
    container.innerHTML = `<div id="ia-welcome" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:14px;padding:40px 20px;text-align:center">
      <div style="font-size:44px">🤖</div>
      <div style="font-size:15px;font-weight:600">Pronto para uma nova conversa!</div>
      <div style="font-size:13px;color:var(--text-muted)">Selecione um cliente ou comece a digitar.</div>
    </div>`;
  }
  _iaUpdateAttachBar();
  _iaRenderChatList();
}

// ── System prompt ────────────────────────────────────────
function _iaBuildSystemPrompt() {
  const agencia = `Você é a IA assistente interna da agência DigitalCreate, uma agência de marketing digital brasileira.
Você ajuda a equipe com: criação de conteúdo, análise de clientes, estratégias de marketing, copywriting, gestão de redes sociais, tráfego pago e Google Meu Negócio.
Responda sempre em português brasileiro. Seja objetivo, criativo e prático.`;

  if (!_iaClientId) return agencia;

  const c = (clientsData || []).find(x => x.id === _iaClientId);
  if (!c) return agencia;

  const tarefas = [];
  Object.entries(boards || {}).forEach(([bk, b]) => {
    (b.groups || []).forEach(g => {
      (g.items || []).forEach(i => {
        if (i._clientId === _iaClientId || i.cliente === c.name) {
          tarefas.push(`- [${i.status || 'Pendente'}] ${g.label}: ${i.name}${i.notes ? ' | ' + i.notes.substring(0, 60) : ''}`);
        }
      });
    });
  });

  let itemCtx = '';
  if (_iaItemKey) {
    Object.entries(boards || {}).forEach(([bk, b]) => {
      (b.groups || []).forEach(g => {
        (g.items || []).forEach(i => {
          if (`${bk}::${g.id}::${i.id}` === _iaItemKey) {
            itemCtx = `\n\nITEM EM FOCO:\nNome: ${i.name}\nStatus: ${i.status || '—'}\nResponsável: ${i.person || '—'}\nNotas: ${i.notes || '—'}\nMelhorias: ${i.melhorias || '—'}\nPróximos passos: ${i.proximos || '—'}`;
          }
        });
      });
    });
  }

  const clienteCtx = `

CLIENTE ATUAL: ${c.name}
Empresa: ${c.company || '—'}
Segmento: ${c.segment || '—'}
Status: ${c.status || '—'}
Plano: ${c.plan || '—'}
Email: ${c.email || '—'}
Telefone: ${c.phone || '—'}
Cidade: ${c.city || '—'}
${c.notes ? 'Observações: ' + c.notes.substring(0, 300) : ''}
${c.instagram ? 'Instagram: ' + c.instagram : ''}
${c.website ? 'Site: ' + c.website : ''}

TAREFAS NO CRM (${tarefas.length}):
${tarefas.slice(0, 20).join('\n') || 'Nenhuma tarefa cadastrada.'}${itemCtx}

Use estas informações para respostas contextualizadas e precisas sobre este cliente.`;

  return agencia + clienteCtx;
}

// ── Render mensagens ─────────────────────────────────────
function _iaMsgHtml(msg) {
  const isUser = msg.role === 'user';
  const text = (msg.content || '')
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/\n/g,'<br>')
    .replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>')
    .replace(/\*(.*?)\*/g,'<em>$1</em>')
    .replace(/`([^`]+)`/g,'<code style="background:rgba(255,255,255,.08);border-radius:4px;padding:1px 5px;font-size:12px">$1</code>');
  const avatarHtml = isUser
    ? `<div style="width:28px;height:28px;border-radius:50%;background:var(--accent-grad);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#fff">${(window.currentUser?.name || 'U')[0].toUpperCase()}</div>`
    : `<div style="width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#7c5cfc,#38b6ff);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:14px">🤖</div>`;
  return `<div style="display:flex;gap:9px;align-items:flex-start;${isUser ? 'flex-direction:row-reverse' : ''}">
    ${avatarHtml}
    <div style="max-width:76%;background:${isUser ? 'var(--accent-soft)' : 'var(--bg-card)'};border:1px solid ${isUser ? 'rgba(124,92,252,.25)' : 'var(--border)'};border-radius:${isUser ? '12px 4px 12px 12px' : '4px 12px 12px 12px'};padding:9px 13px;font-size:13px;line-height:1.65;color:var(--text-primary)">${text}</div>
  </div>`;
}

function _iaRenderAllMsgs() {
  const container = document.getElementById('ia-msgs');
  if (!container) return;
  document.getElementById('ia-welcome')?.remove();
  container.innerHTML = _iaMsgs.map(_iaMsgHtml).join('');
  container.scrollTop = container.scrollHeight;
}

function _iaRenderMsgs() {
  const container = document.getElementById('ia-msgs');
  if (!container) return;
  document.getElementById('ia-welcome')?.remove();
  const last = _iaMsgs[_iaMsgs.length - 1];
  if (!last) return;
  const div = document.createElement('div');
  div.innerHTML = _iaMsgHtml(last);
  container.appendChild(div.firstElementChild);
  container.scrollTop = container.scrollHeight;
}

function _iaShowLoading() {
  const container = document.getElementById('ia-msgs');
  if (!container) return;
  const div = document.createElement('div');
  div.id = 'ia-loading-bubble';
  div.style.cssText = 'display:flex;gap:9px;align-items:flex-start';
  div.innerHTML = `<div style="width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#7c5cfc,#38b6ff);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:14px">🤖</div>
    <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:4px 12px 12px 12px;padding:11px 15px;display:flex;gap:5px;align-items:center">
      <span style="width:7px;height:7px;border-radius:50%;background:var(--accent);display:inline-block;animation:pulse 1s infinite"></span>
      <span style="width:7px;height:7px;border-radius:50%;background:var(--accent);display:inline-block;animation:pulse 1s .2s infinite"></span>
      <span style="width:7px;height:7px;border-radius:50%;background:var(--accent);display:inline-block;animation:pulse 1s .4s infinite"></span>
    </div>`;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

// ── Envio ────────────────────────────────────────────────
async function _iaSend(text) {
  if (_iaLoading) return;
  const input  = document.getElementById('ia-input');
  const typed  = text != null ? String(text) : (input?.value.trim() || '');

  let content = typed;
  if (_iaAttachments.length) {
    const attachTxt = _iaAttachments.map(a => `\n\n[Arquivo: ${a.name}]\n${a.text}`).join('');
    content = (typed ? typed + '\n' : '') + attachTxt;
    _iaAttachments = [];
    _iaUpdateAttachBar();
  }

  if (!content.trim()) return;
  if (input) input.value = '';

  _iaMsgs.push({ role: 'user', content });
  _iaRenderMsgs();
  _iaShowLoading();
  _iaLoading = true;

  const sendBtn = document.getElementById('ia-send-btn');
  if (sendBtn) { sendBtn.disabled = true; sendBtn.textContent = '…'; }

  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemPrompt: _iaBuildSystemPrompt(),
        messages: _iaMsgs.map(m => ({ role: m.role, content: m.content })),
      }),
    });
    const data = await res.json();
    document.getElementById('ia-loading-bubble')?.remove();
    if (data.error) throw new Error(data.error);
    _iaMsgs.push({ role: 'assistant', content: data.content });
    _iaRenderMsgs();
    _iaSaveChatNow();
  } catch(e) {
    document.getElementById('ia-loading-bubble')?.remove();
    _iaMsgs.push({ role: 'assistant', content: `❌ Erro: ${e.message}` });
    _iaRenderMsgs();
  }

  _iaLoading = false;
  if (sendBtn) { sendBtn.disabled = false; sendBtn.textContent = 'Enviar ↑'; }
  if (input) { input.style.height = 'auto'; input.focus(); }
}

function _iaSendSuggestion(text) {
  _iaSend(text);
}

function _iaKeyDown(e) {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); _iaSend(); }
}

function _iaAutoResize(el) {
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 140) + 'px';
}

// ── Anexos ───────────────────────────────────────────────
function _iaAttachFile() {
  document.getElementById('ia-file-input')?.click();
}

function _iaHandleFile(input) {
  const files = Array.from(input.files || []);
  if (!files.length) return;
  const MAX = 150 * 1024; // 150 KB por arquivo
  files.forEach(file => {
    if (file.size > MAX) { addNotif(`Arquivo "${file.name}" muito grande (máx 150 KB)`, 'warn'); return; }
    const reader = new FileReader();
    reader.onload = e => {
      _iaAttachments.push({ name: file.name, text: e.target.result });
      _iaUpdateAttachBar();
    };
    reader.readAsText(file, 'UTF-8');
  });
  input.value = '';
}

function _iaRemoveAttachment(i) {
  _iaAttachments.splice(i, 1);
  _iaUpdateAttachBar();
}

function _iaUpdateAttachBar() {
  const bar = document.getElementById('ia-attach-bar');
  if (!bar) return;
  if (!_iaAttachments.length) { bar.style.display = 'none'; bar.innerHTML = ''; return; }
  bar.style.display = 'flex';
  bar.innerHTML = `<span style="font-size:11px;color:var(--text-muted);margin-right:4px">Anexos:</span>` +
    _iaAttachments.map((a, i) =>
      `<span style="background:var(--accent-soft);border:1px solid rgba(124,92,252,.3);border-radius:6px;padding:2px 8px;font-size:11px;display:inline-flex;align-items:center;gap:5px">
        📄 ${a.name}
        <button onclick="_iaRemoveAttachment(${i})" style="background:none;border:none;cursor:pointer;color:var(--text-muted);font-size:12px;line-height:1;padding:0">✕</button>
      </span>`
    ).join('');
}

// ── Biblioteca de Prompts ────────────────────────────────
function _iaOpenPrompts() {
  const prompts = _iaGetPrompts();
  const folders = [...new Set(prompts.map(p => p.folder || 'Geral'))].sort();
  if (!folders.includes('Geral')) folders.unshift('Geral');

  let activeFolder = folders[0] || 'Geral';

  function renderModal() {
    const filtered = prompts.filter(p => (p.folder || 'Geral') === activeFolder);
    const tabsHtml = folders.map(f => `
      <button onclick="(()=>{window._iaActiveFolder='${f}';document.getElementById('ia-prompts-modal').querySelector('[data-prompts]').innerHTML=window._iaPromptsListHtml('${f}');document.querySelectorAll('.ia-folder-tab').forEach(t=>t.style.fontWeight=t.dataset.folder==='${f}'?'700':'400')})()"
        class="ia-folder-tab" data-folder="${f}"
        style="background:none;border:none;border-bottom:2px solid ${f === activeFolder ? 'var(--accent)' : 'transparent'};color:${f === activeFolder ? 'var(--accent)' : 'var(--text-muted)'};cursor:pointer;font-size:12px;padding:6px 12px;font-weight:${f === activeFolder ? '700' : '400'};font-family:var(--font)">${f}</button>
    `).join('');

    const listHtml = filtered.length
      ? filtered.map(p => `
          <div style="background:var(--bg-sidebar);border:1px solid var(--border);border-radius:8px;padding:10px 12px;margin-bottom:8px">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px">
              <div>
                <div style="font-size:12px;font-weight:600;margin-bottom:4px">${p.name}</div>
                <div style="font-size:11.5px;color:var(--text-muted);line-height:1.5">${(p.text||'').substring(0,120)}${p.text?.length > 120 ? '…' : ''}</div>
              </div>
              <div style="display:flex;gap:5px;flex-shrink:0">
                <button onclick="_iaUsePrompt('${(p.text||'').replace(/'/g,'\\\'').replace(/\n/g,'\\n')}')" class="btn btn-primary" style="font-size:11px;padding:4px 9px">Usar</button>
                <button onclick="_iaDeletePrompt('${p.id}')" class="btn btn-ghost" style="font-size:11px;padding:4px 9px">🗑️</button>
              </div>
            </div>
          </div>
        `).join('')
      : `<div style="text-align:center;padding:24px;color:var(--text-muted);font-size:12px">Nenhum prompt nesta pasta</div>`;

    const existing = document.getElementById('ia-prompts-modal');
    if (existing) existing.remove();

    const ov = document.createElement('div');
    ov.id = 'ia-prompts-modal';
    ov.className = 'modal-overlay';
    ov.style.cssText = 'display:flex;z-index:9999';
    ov.innerHTML = `
      <div class="modal" style="width:500px;max-width:95vw;max-height:85vh;display:flex;flex-direction:column">
        <div class="modal-header" style="display:flex;justify-content:space-between;align-items:center">
          <span style="font-weight:700">📌 Biblioteca de Prompts</span>
          <button onclick="document.getElementById('ia-prompts-modal').remove()" style="background:none;border:none;cursor:pointer;font-size:18px;color:var(--text-muted)">✕</button>
        </div>
        <div style="display:flex;gap:2px;border-bottom:1px solid var(--border);padding:0 16px;flex-shrink:0">${tabsHtml}</div>
        <div data-prompts style="flex:1;overflow-y:auto;padding:14px 16px">${listHtml}</div>
        <div style="padding:12px 16px;border-top:1px solid var(--border);display:flex;gap:8px;flex-shrink:0">
          <button onclick="_iaSavePromptModal()" class="btn btn-primary" style="font-size:12px">＋ Novo prompt</button>
          <button onclick="document.getElementById('ia-prompts-modal').remove()" class="btn btn-ghost" style="font-size:12px">Fechar</button>
        </div>
      </div>
    `;
    ov.addEventListener('click', e => { if (e.target === ov) ov.remove(); });
    document.body.appendChild(ov);

    window._iaActiveFolder = activeFolder;
    window._iaPromptsListHtml = (folder) => {
      const fPrompts = _iaGetPrompts().filter(p => (p.folder || 'Geral') === folder);
      return fPrompts.length
        ? fPrompts.map(p => `
            <div style="background:var(--bg-sidebar);border:1px solid var(--border);border-radius:8px;padding:10px 12px;margin-bottom:8px">
              <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px">
                <div>
                  <div style="font-size:12px;font-weight:600;margin-bottom:4px">${p.name}</div>
                  <div style="font-size:11.5px;color:var(--text-muted);line-height:1.5">${(p.text||'').substring(0,120)}${p.text?.length > 120 ? '…' : ''}</div>
                </div>
                <div style="display:flex;gap:5px;flex-shrink:0">
                  <button onclick="_iaUsePrompt(\`${(p.text||'').replace(/`/g,'\\`')}\`)" class="btn btn-primary" style="font-size:11px;padding:4px 9px">Usar</button>
                  <button onclick="_iaDeletePrompt('${p.id}')" class="btn btn-ghost" style="font-size:11px;padding:4px 9px">🗑️</button>
                </div>
              </div>
            </div>
          `).join('')
        : `<div style="text-align:center;padding:24px;color:var(--text-muted);font-size:12px">Nenhum prompt nesta pasta</div>`;
    };
  }

  renderModal();
}

function _iaSavePromptModal() {
  const input = document.getElementById('ia-input');
  const prefill = input?.value.trim() || '';
  const prompts = _iaGetPrompts();
  const folders = [...new Set(prompts.map(p => p.folder || 'Geral'))];
  if (!folders.includes('Geral')) folders.unshift('Geral');

  const existing = document.getElementById('ia-save-prompt-modal');
  if (existing) existing.remove();

  const ov = document.createElement('div');
  ov.id = 'ia-save-prompt-modal';
  ov.className = 'modal-overlay';
  ov.style.cssText = 'display:flex;z-index:10000';
  ov.innerHTML = `
    <div class="modal" style="width:420px;max-width:95vw">
      <div class="modal-header" style="display:flex;justify-content:space-between;align-items:center">
        <span style="font-weight:700">📌 Salvar Prompt</span>
        <button onclick="document.getElementById('ia-save-prompt-modal').remove()" style="background:none;border:none;cursor:pointer;font-size:18px;color:var(--text-muted)">✕</button>
      </div>
      <div class="modal-body" style="display:flex;flex-direction:column;gap:12px">
        <div>
          <label style="font-size:11px;color:var(--text-muted);display:block;margin-bottom:5px">Nome do prompt</label>
          <input id="sp-name" type="text" placeholder="Ex: Legenda Instagram produto" class="form-input" style="width:100%;box-sizing:border-box">
        </div>
        <div>
          <label style="font-size:11px;color:var(--text-muted);display:block;margin-bottom:5px">Pasta</label>
          <div style="display:flex;gap:6px">
            <select id="sp-folder" class="form-input" style="flex:1">
              ${folders.map(f => `<option value="${f}">${f}</option>`).join('')}
              <option value="__new__">+ Nova pasta…</option>
            </select>
            <input id="sp-folder-new" type="text" placeholder="Nome da pasta" class="form-input" style="display:none;flex:1">
          </div>
        </div>
        <div>
          <label style="font-size:11px;color:var(--text-muted);display:block;margin-bottom:5px">Texto do prompt</label>
          <textarea id="sp-text" rows="5" class="form-input" style="width:100%;resize:vertical;box-sizing:border-box;line-height:1.5">${prefill}</textarea>
        </div>
      </div>
      <div class="modal-footer" style="display:flex;gap:8px;justify-content:flex-end">
        <button onclick="document.getElementById('ia-save-prompt-modal').remove()" class="btn btn-ghost">Cancelar</button>
        <button onclick="_iaConfirmSavePrompt()" class="btn btn-primary">Salvar</button>
      </div>
    </div>
  `;
  ov.addEventListener('click', e => { if (e.target === ov) ov.remove(); });
  document.body.appendChild(ov);

  document.getElementById('sp-folder').addEventListener('change', function() {
    const newInput = document.getElementById('sp-folder-new');
    newInput.style.display = this.value === '__new__' ? '' : 'none';
    if (this.value === '__new__') newInput.focus();
  });
}

function _iaConfirmSavePrompt() {
  const name   = document.getElementById('sp-name')?.value.trim();
  const text   = document.getElementById('sp-text')?.value.trim();
  const folSel = document.getElementById('sp-folder')?.value;
  const folNew = document.getElementById('sp-folder-new')?.value.trim();
  const folder = folSel === '__new__' ? (folNew || 'Geral') : (folSel || 'Geral');

  if (!name) { addNotif('Digite um nome para o prompt', 'warn'); return; }
  if (!text) { addNotif('O texto do prompt está vazio', 'warn'); return; }

  const prompts = _iaGetPrompts();
  prompts.unshift({ id: Date.now().toString(36), name, folder, text, createdAt: Date.now() });
  _iaSetPrompts(prompts);

  document.getElementById('ia-save-prompt-modal')?.remove();
  addNotif(`Prompt "${name}" salvo em "${folder}"`, 'success');
}

function _iaDeletePrompt(id) {
  const prompts = _iaGetPrompts().filter(p => p.id !== id);
  _iaSetPrompts(prompts);
  // Reabrir modal atualizado
  document.getElementById('ia-prompts-modal')?.remove();
  _iaOpenPrompts();
}

function _iaUsePrompt(text) {
  const input = document.getElementById('ia-input');
  if (input) { input.value = text; _iaAutoResize(input); input.focus(); }
  document.getElementById('ia-prompts-modal')?.remove();
}

// ═══════════════════════════════════════════════════════
// AGENTE IA — CONTRATOS (v2)
// ═══════════════════════════════════════════════════════

let _ctaTemplates        = [];   // [{id,name,text}]
let _ctaEditingId        = null; // id do template em edição
let _ctaClientSource     = 'base'; // 'base' | 'form' | 'manual'
let _ctaSelectedClient   = null;
let _ctaSelectedForm     = null;
let _ctaSelectedSvcIds   = new Set();
let _ctaGenerating       = false;
let _ctaAllFormResponses = [];

function _ctaLoadTpls()    { return JSON.parse(localStorage.getItem('dc_contract_tpls_v2') || '[]'); }
function _ctaSaveTplsLS(t) { localStorage.setItem('dc_contract_tpls_v2', JSON.stringify(t)); }

let _ctaChatMsgs    = [];
let _ctaChatLoading = false;
let _ctaCurrentHistId = null;

function _ctaLoadHistory()    { return JSON.parse(localStorage.getItem('dc_contract_history') || '[]'); }
function _ctaSaveHistory(h)   { localStorage.setItem('dc_contract_history', JSON.stringify(h)); }

function _ctaSaveToHistory(msgs) {
  if (!msgs.length) return;
  const history = _ctaLoadHistory();
  const first = msgs.find(m => m.role === 'user');
  const title = first ? first.content.split('\n')[0].replace('Redija o contrato de prestação de serviços:', '').replace('SERVIÇOS:', '').trim().slice(0, 50) : 'Contrato';
  const date = new Date().toLocaleDateString('pt-BR');
  if (_ctaCurrentHistId) {
    const idx = history.findIndex(h => h.id === _ctaCurrentHistId);
    if (idx >= 0) { history[idx].msgs = msgs; history[idx].updatedAt = date; _ctaSaveHistory(history); _ctaRenderHistory(); return; }
  }
  const id = Date.now().toString(36);
  _ctaCurrentHistId = id;
  history.unshift({ id, title, date, msgs });
  _ctaSaveHistory(history.slice(0, 50));
  _ctaRenderHistory();
}

function _ctaRenderHistory() {
  const el = document.getElementById('cta-history-list');
  if (!el) return;
  const history = _ctaLoadHistory();
  if (!history.length) {
    el.innerHTML = '<div style="text-align:center;padding:20px 10px;font-size:11px;color:var(--text-muted)">Nenhum contrato<br>gerado ainda.</div>';
    return;
  }
  el.innerHTML = history.map(h => {
    const active = h.id === _ctaCurrentHistId;
    return `<div onclick="_ctaLoadFromHistory('${h.id}')"
      style="padding:9px 10px;border-radius:8px;border:1px solid ${active ? 'var(--accent)' : 'var(--border)'};background:${active ? 'var(--accent-soft)' : 'transparent'};cursor:pointer;transition:.15s;margin-bottom:5px">
      <div style="font-size:11px;font-weight:600;line-height:1.3;margin-bottom:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${h.title || 'Contrato'}</div>
      <div style="display:flex;align-items:center;justify-content:space-between">
        <span style="font-size:10px;color:var(--text-muted)">${h.updatedAt || h.date}</span>
        <button onclick="event.stopPropagation();_ctaDeleteHistory('${h.id}')" style="background:none;border:none;color:var(--text-muted);cursor:pointer;font-size:11px;padding:0 2px" title="Excluir">✕</button>
      </div>
    </div>`;
  }).join('');
}

function _ctaLoadFromHistory(id) {
  const history = _ctaLoadHistory();
  const entry = history.find(h => h.id === id);
  if (!entry) return;
  _ctaCurrentHistId = id;
  _ctaChatMsgs = entry.msgs || [];
  _ctaRenderChatMsgs();
  _ctaRenderHistory();
}

function _ctaDeleteHistory(id) {
  const history = _ctaLoadHistory().filter(h => h.id !== id);
  _ctaSaveHistory(history);
  if (_ctaCurrentHistId === id) { _ctaCurrentHistId = null; _ctaChatMsgs = []; _ctaRenderChatMsgs(); }
  _ctaRenderHistory();
}

function renderContratoIAPage() {
  _ctaTemplates      = _ctaLoadTpls();
  _ctaEditingId      = null;
  _ctaClientSource   = 'base';
  _ctaSelectedClient = null;
  _ctaSelectedForm   = null;
  _ctaSelectedSvcIds = new Set();
  _ctaChatMsgs       = [];
  _ctaChatLoading    = false;

  document.getElementById('main-content').innerHTML = `
    <div style="display:flex;height:calc(100vh - 56px);overflow:hidden">

      <!-- PAINEL ESQUERDO: Configuração -->
      <div style="width:340px;flex-shrink:0;display:flex;flex-direction:column;border-right:1px solid var(--border);overflow-y:auto;background:var(--bg-sidebar)">
        <div style="padding:16px;border-bottom:1px solid var(--border)">
          <div style="font-size:15px;font-weight:700;margin-bottom:2px">📄 Agente de Contratos</div>
          <div style="font-size:11px;color:var(--text-muted)">Preencha e gere via chat com IA</div>
        </div>

        <div style="padding:14px;display:flex;flex-direction:column;gap:14px">

          <!-- Modelos -->
          <div>
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
              <div style="font-size:11px;font-weight:700;color:var(--accent);text-transform:uppercase;letter-spacing:.7px">📁 Modelos</div>
              <button class="btn btn-primary" style="font-size:10px;padding:3px 9px" onclick="_ctaNewTemplate()">+ Novo</button>
            </div>
            <div id="cta-tpl-list" style="display:flex;flex-direction:column;gap:5px"></div>
          </div>

          <!-- Editor de template -->
          <div id="cta-tpl-editor" style="display:none;background:var(--bg-card);border:1px solid var(--accent);border-radius:12px;padding:14px">
            <div style="font-size:11px;font-weight:700;color:var(--accent);margin-bottom:10px" id="cta-tpl-editor-title">✏️ Novo modelo</div>
            <div style="display:flex;flex-direction:column;gap:8px">
              <div class="form-row" style="margin:0"><label style="font-size:11px">Nome do serviço</label>
                <input id="cta-tpl-name" type="text" placeholder="ex: Tráfego Pago">
              </div>
              <div class="form-row" style="margin:0"><label style="font-size:11px">Texto base</label>
                <textarea id="cta-tpl-text" rows="8" placeholder="Cole o contrato modelo aqui…" style="resize:vertical;line-height:1.5;font-size:11px"></textarea>
              </div>
              <div style="display:flex;gap:6px">
                <button class="btn btn-primary" style="flex:1;font-size:11px" onclick="_ctaSaveTpl()">💾 Salvar</button>
                <button class="btn btn-ghost" style="font-size:11px" onclick="_ctaCancelTpl()">✕</button>
              </div>
            </div>
          </div>

          <div style="height:1px;background:var(--border)"></div>

          <!-- Cliente -->
          <div>
            <div style="font-size:11px;font-weight:700;color:var(--accent);text-transform:uppercase;letter-spacing:.7px;margin-bottom:8px">1 — Cliente</div>
            <div style="display:flex;gap:4px;margin-bottom:8px">
              <button id="ctab-base"   onclick="_ctaSetSrc('base')"   class="btn btn-ghost" style="flex:1;font-size:10px;padding:5px 4px">👥 Base</button>
              <button id="ctab-form"   onclick="_ctaSetSrc('form')"   class="btn btn-ghost" style="flex:1;font-size:10px;padding:5px 4px">📋 Form</button>
              <button id="ctab-manual" onclick="_ctaSetSrc('manual')" class="btn btn-ghost" style="flex:1;font-size:10px;padding:5px 4px">✍️ Manual</button>
            </div>
            <div id="cta-src-panel"></div>
            <div id="cta-client-badge" style="display:none;margin-top:6px;background:var(--accent-soft);border:1px solid rgba(124,92,252,.3);border-radius:7px;padding:6px 10px;font-size:11px;color:var(--accent)"></div>
          </div>

          <div style="height:1px;background:var(--border)"></div>

          <!-- Serviços -->
          <div>
            <div style="font-size:11px;font-weight:700;color:var(--accent);text-transform:uppercase;letter-spacing:.7px;margin-bottom:8px">2 — Serviços</div>
            <div id="cta-svc-list" style="display:flex;flex-direction:column;gap:5px"></div>
          </div>

          <div style="height:1px;background:var(--border)"></div>

          <!-- Detalhes -->
          <div>
            <div style="font-size:11px;font-weight:700;color:var(--accent);text-transform:uppercase;letter-spacing:.7px;margin-bottom:8px">3 — Detalhes</div>
            <div style="display:flex;flex-direction:column;gap:7px">
              <div class="form-row" style="margin:0"><label style="font-size:11px">Valor</label><input id="cta-valor" type="text" placeholder="R$ 1.800,00/mês"></div>
              <div class="form-row" style="margin:0"><label style="font-size:11px">Vencimento</label><input id="cta-venc" type="text" placeholder="todo dia 10"></div>
              <div class="form-row" style="margin:0"><label style="font-size:11px">Vigência</label><input id="cta-vigencia" type="text" placeholder="12 meses a partir de…"></div>
              <div class="form-row" style="margin:0"><label style="font-size:11px">Observações</label>
                <textarea id="cta-obs" rows="2" placeholder="Cláusulas especiais…" style="resize:vertical;font-size:11px"></textarea>
              </div>
            </div>
          </div>

          <button id="cta-gen-btn" onclick="_ctaGenerate()"
            style="width:100%;padding:12px;background:var(--accent-grad);color:#fff;border:none;border-radius:10px;font-size:13px;font-weight:700;cursor:pointer;font-family:var(--font);box-shadow:0 4px 16px rgba(124,92,252,.35);transition:.2s">
            ✨ Gerar Contrato
          </button>
        </div>
      </div>

      <!-- PAINEL CENTRAL: Chat -->
      <div style="flex:1;display:flex;flex-direction:column;min-width:0">
        <!-- Cabeçalho do chat -->
        <div style="padding:12px 16px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;background:var(--bg-card)">
          <div style="font-size:13px;font-weight:600" id="cta-chat-title">💬 Chat do Contrato</div>
          <div style="display:flex;gap:6px">
            <button class="btn btn-ghost" style="font-size:11px;padding:4px 10px" onclick="_ctaCopyLast()">📋 Copiar último</button>
            <button class="btn btn-ghost" style="font-size:11px;padding:4px 10px" onclick="_ctaOpenDocs()">📝 Google Docs</button>
            <button class="btn btn-ghost" style="font-size:11px;padding:4px 10px" onclick="_ctaClearChat()">🗑️ Limpar</button>
          </div>
        </div>

        <!-- Mensagens -->
        <div id="cta-chat-msgs" style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:12px">
          <div style="text-align:center;color:var(--text-muted);font-size:13px;margin-top:60px">
            <div style="font-size:32px;margin-bottom:12px">📄</div>
            Preencha as informações ao lado e clique em<br>
            <strong style="color:var(--accent)">✨ Gerar Contrato</strong> para começar.
          </div>
        </div>

        <!-- Input do chat -->
        <div style="padding:12px 16px;border-top:1px solid var(--border);background:var(--bg-card)">
          <div style="display:flex;gap:8px;align-items:flex-end">
            <textarea id="cta-chat-input" rows="2" placeholder="Peça ajustes ao contrato… ex: &quot;adicione uma cláusula de multa&quot;, &quot;torne mais formal&quot;"
              style="flex:1;background:var(--bg-base);border:1px solid var(--border);border-radius:10px;color:var(--text-primary);font-family:var(--font);font-size:13px;padding:10px 12px;resize:none;outline:none;line-height:1.5"
              onkeydown="if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();_ctaChatSend()}"></textarea>
            <button onclick="_ctaChatSend()"
              style="background:var(--accent);color:#fff;border:none;border-radius:10px;width:40px;height:40px;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0">
              ➤
            </button>
          </div>
        </div>
      </div>

      <!-- PAINEL DIREITO: Histórico -->
      <div style="width:220px;flex-shrink:0;display:flex;flex-direction:column;border-left:1px solid var(--border);background:var(--bg-sidebar)">
        <div style="padding:12px 14px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between">
          <div style="font-size:12px;font-weight:700;color:var(--accent)">🕓 Histórico</div>
          <button onclick="_ctaNewChat()" class="btn btn-ghost" style="font-size:10px;padding:3px 8px" title="Nova conversa">+ Novo</button>
        </div>
        <div id="cta-history-list" style="flex:1;overflow-y:auto;padding:10px"></div>
      </div>
    </div>
  `;

  _ctaRenderTplList();
  _ctaRenderSvcList();
  _ctaSetSrc('base');
  _ctaRenderHistory();
}

function _ctaNewChat() {
  _ctaCurrentHistId = null;
  _ctaChatMsgs = [];
  _ctaRenderChatMsgs();
  _ctaRenderHistory();
}

// ── Template management ──────────────────────────────

function _ctaRenderTplList() {
  const el = document.getElementById('cta-tpl-list');
  if (!el) return;
  if (!_ctaTemplates.length) {
    el.innerHTML = '<div style="text-align:center;padding:16px;font-size:12px;color:var(--text-muted)">Nenhum modelo salvo ainda.<br>Clique em "+ Novo modelo" para começar.</div>';
    return;
  }
  el.innerHTML = _ctaTemplates.map(t => `
    <div style="display:flex;align-items:center;gap:8px;padding:10px 12px;background:var(--bg-base);border:1px solid var(--border);border-radius:9px">
      <div style="flex:1;font-size:13px;font-weight:600">📝 ${t.name}</div>
      <span style="font-size:10px;color:var(--text-muted)">${t.text ? t.text.length + ' chars' : 'vazio'}</span>
      <button class="btn btn-ghost" style="padding:3px 7px;font-size:11px" onclick="_ctaEditTpl('${t.id}')">✏️</button>
      <button class="btn btn-ghost" style="padding:3px 7px;font-size:11px;color:var(--red)" onclick="_ctaDeleteTpl('${t.id}')">✕</button>
    </div>
  `).join('');
}

function _ctaRenderSvcList() {
  const el = document.getElementById('cta-svc-list');
  if (!el) return;
  if (!_ctaTemplates.length) {
    el.innerHTML = `<div style="font-size:12px;color:var(--text-muted);margin-bottom:8px">Nenhum modelo salvo ainda. Você pode digitar os serviços manualmente:</div>
      <input id="cta-svc-manual" type="text" placeholder="ex: Tráfego Pago, Google Meu Negócio"
        style="width:100%;background:var(--bg-base);border:1px solid var(--border);border-radius:8px;color:var(--text-primary);font-family:var(--font);font-size:12px;padding:8px 12px;outline:none;box-sizing:border-box">`;
    return;
  }
  el.innerHTML = _ctaTemplates.map(t => {
    const checked = _ctaSelectedSvcIds.has(t.id);
    return `<div onclick="_ctaToggleSvc('${t.id}')" id="ctasvc-${t.id}"
      style="display:flex;align-items:center;gap:10px;cursor:pointer;padding:9px 12px;border-radius:8px;border:1px solid ${checked ? 'var(--accent)' : 'var(--border)'};background:${checked ? 'var(--accent-soft)' : 'transparent'};transition:.15s;user-select:none">
      <div style="width:16px;height:16px;border-radius:4px;border:2px solid ${checked ? 'var(--accent)' : 'var(--border)'};background:${checked ? 'var(--accent)' : 'transparent'};display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:.15s">
        ${checked ? '<span style="color:#fff;font-size:11px;line-height:1">✓</span>' : ''}
      </div>
      <span style="font-size:13px;font-weight:500">📝 ${t.name}</span>
    </div>`;
  }).join('');
}

function _ctaToggleSvc(id) {
  if (_ctaSelectedSvcIds.has(id)) {
    _ctaSelectedSvcIds.delete(id);
  } else {
    _ctaSelectedSvcIds.add(id);
  }
  const el = document.getElementById('ctasvc-' + id);
  if (!el) return;
  const on = _ctaSelectedSvcIds.has(id);
  el.style.borderColor = on ? 'var(--accent)' : 'var(--border)';
  el.style.background   = on ? 'var(--accent-soft)' : 'transparent';
  const box = el.querySelector('div');
  if (box) {
    box.style.borderColor = on ? 'var(--accent)' : 'var(--border)';
    box.style.background  = on ? 'var(--accent)' : 'transparent';
    box.innerHTML = on ? '<span style="color:#fff;font-size:11px;line-height:1">✓</span>' : '';
  }
}

function _ctaNewTemplate() {
  _ctaEditingId = null;
  const ed = document.getElementById('cta-tpl-editor');
  const title = document.getElementById('cta-tpl-editor-title');
  if (ed) ed.style.display = 'block';
  if (title) title.textContent = '✏️ Novo modelo';
  const name = document.getElementById('cta-tpl-name');
  const text = document.getElementById('cta-tpl-text');
  if (name) name.value = '';
  if (text) text.value = '';
  ed?.scrollIntoView({ behavior: 'smooth' });
}

function _ctaEditTpl(id) {
  const tpl = _ctaTemplates.find(t => t.id === id);
  if (!tpl) return;
  _ctaEditingId = id;
  const ed = document.getElementById('cta-tpl-editor');
  const title = document.getElementById('cta-tpl-editor-title');
  if (ed) ed.style.display = 'block';
  if (title) title.textContent = `✏️ Editando: ${tpl.name}`;
  const name = document.getElementById('cta-tpl-name');
  const text = document.getElementById('cta-tpl-text');
  if (name) name.value = tpl.name;
  if (text) text.value = tpl.text;
  ed?.scrollIntoView({ behavior: 'smooth' });
}

function _ctaSaveTpl() {
  const name = document.getElementById('cta-tpl-name')?.value.trim();
  const text = document.getElementById('cta-tpl-text')?.value.trim();
  if (!name) { addNotif('Digite o nome do serviço', 'warn'); return; }
  if (_ctaEditingId) {
    const idx = _ctaTemplates.findIndex(t => t.id === _ctaEditingId);
    if (idx >= 0) { _ctaTemplates[idx].name = name; _ctaTemplates[idx].text = text; }
  } else {
    _ctaTemplates.push({ id: Date.now().toString(36), name, text: text || '' });
  }
  _ctaSaveTplsLS(_ctaTemplates);
  _ctaEditingId = null;
  document.getElementById('cta-tpl-editor').style.display = 'none';
  _ctaRenderTplList();
  _ctaRenderSvcList();
  addNotif('Modelo salvo!', 'success');
}

function _ctaCancelTpl() {
  _ctaEditingId = null;
  document.getElementById('cta-tpl-editor').style.display = 'none';
}

function _ctaDeleteTpl(id) {
  if (!confirm('Excluir este modelo?')) return;
  _ctaTemplates = _ctaTemplates.filter(t => t.id !== id);
  _ctaSelectedSvcIds.delete(id);
  _ctaSaveTplsLS(_ctaTemplates);
  _ctaRenderTplList();
  _ctaRenderSvcList();
}

// ── Client source ────────────────────────────────────

function _ctaSetSrc(src) {
  _ctaClientSource = src;
  _ctaSelectedClient = null;
  _ctaSelectedForm = null;
  ['base','form','manual'].forEach(s => {
    const btn = document.getElementById('ctab-' + s);
    if (!btn) return;
    btn.style.background = s === src ? 'var(--accent)' : '';
    btn.style.color = s === src ? '#fff' : '';
    btn.style.borderColor = s === src ? 'var(--accent)' : '';
  });
  const badge = document.getElementById('cta-client-badge');
  if (badge) badge.style.display = 'none';
  const panel = document.getElementById('cta-src-panel');
  if (!panel) return;

  if (src === 'base') {
    const clients = (clientsData || []).filter(c => !c.archived && c.nome);
    panel.innerHTML = `<input type="text" placeholder="🔍 Buscar cliente da base..." oninput="_ctaFilterBase(this.value)"
      style="width:100%;background:var(--bg-base);border:1px solid var(--border);border-radius:8px;color:var(--text-primary);font-family:var(--font);font-size:12px;padding:7px 10px;outline:none;box-sizing:border-box;margin-bottom:8px">
      <div id="cta-base-list" style="display:flex;flex-direction:column;gap:5px;max-height:180px;overflow-y:auto"></div>`;
    _ctaRenderBaseList(clients, '');
  } else if (src === 'form') {
    panel.innerHTML = `<input type="text" placeholder="🔍 Buscar por nome..." oninput="_ctaFilterForm(this.value)"
      style="width:100%;background:var(--bg-base);border:1px solid var(--border);border-radius:8px;color:var(--text-primary);font-family:var(--font);font-size:12px;padding:7px 10px;outline:none;box-sizing:border-box;margin-bottom:8px">
      <div id="cta-form-list" style="display:flex;flex-direction:column;gap:5px;max-height:180px;overflow-y:auto">
        <div style="text-align:center;padding:14px;font-size:12px;color:var(--text-muted)">⏳ Carregando…</div>
      </div>`;
    _ctaLoadFormResponses();
  } else {
    panel.innerHTML = `<div style="display:flex;flex-direction:column;gap:8px">
      <div class="form-row" style="margin:0"><label>Nome / Razão Social</label><input id="cta-m-nome" type="text" placeholder="Nome completo ou Razão Social"></div>
      <div class="form-row" style="margin:0"><label>CPF / CNPJ</label><input id="cta-m-doc" type="text" placeholder="000.000.000-00"></div>
      <div class="form-row" style="margin:0"><label>E-mail</label><input id="cta-m-email" type="email" placeholder="cliente@email.com"></div>
      <div class="form-row" style="margin:0"><label>WhatsApp</label><input id="cta-m-wpp" type="text" placeholder="(11) 99999-9999"></div>
      <div class="form-row" style="margin:0"><label>Endereço</label><input id="cta-m-end" type="text" placeholder="Rua, número, cidade/UF"></div>
    </div>`;
  }
}

function _ctaRenderBaseList(clients, filter) {
  const el = document.getElementById('cta-base-list');
  if (!el) return;
  const filtered = filter ? clients.filter(c => (c.nome||'').toLowerCase().includes(filter.toLowerCase())) : clients;
  if (!filtered.length) {
    el.innerHTML = '<div style="text-align:center;padding:12px;font-size:12px;color:var(--text-muted)">Nenhum cliente encontrado.</div>';
    return;
  }
  el.innerHTML = filtered.map(c => {
    const sel = _ctaSelectedClient && _ctaSelectedClient.id === c.id;
    return `<div onclick="_ctaPickBase('${c.id}')" style="padding:8px 12px;border-radius:8px;border:1px solid ${sel ? 'var(--accent)' : 'var(--border)'};background:${sel ? 'var(--accent-soft)' : 'transparent'};cursor:pointer;transition:.15s">
      <div style="font-size:12px;font-weight:600">${c.nome}</div>
      ${c.empresa ? `<div style="font-size:10.5px;color:var(--text-muted)">${c.empresa}</div>` : ''}
    </div>`;
  }).join('');
}

function _ctaFilterBase(val) {
  const clients = (clientsData || []).filter(c => !c.archived && c.nome);
  _ctaRenderBaseList(clients, val);
}

function _ctaPickBase(id) {
  _ctaSelectedClient = (clientsData || []).find(c => c.id === id) || null;
  const clients = (clientsData || []).filter(c => !c.archived && c.nome);
  _ctaRenderBaseList(clients, '');
  const badge = document.getElementById('cta-client-badge');
  if (badge && _ctaSelectedClient) {
    badge.style.display = 'block';
    badge.innerHTML = `✅ <strong>${_ctaSelectedClient.nome}</strong> selecionado`;
  }
}

async function _ctaLoadFormResponses() {
  try {
    const all = await window.loadBriefings();
    _ctaAllFormResponses = all.filter(b => (b.type || 'trafego') === 'contrato');
  } catch(e) {
    _ctaAllFormResponses = [];
  }
  _ctaRenderFormList('');
}

function _ctaRenderFormList(filter) {
  const list = document.getElementById('cta-form-list');
  if (!list) return;
  const items = filter
    ? _ctaAllFormResponses.filter(r => (r.nome_razao || r.title || '').toLowerCase().includes(filter.toLowerCase()))
    : _ctaAllFormResponses;
  if (!items.length) {
    list.innerHTML = '<div style="text-align:center;padding:14px;font-size:12px;color:var(--text-muted)">Nenhuma resposta de formulário de contrato encontrada.</div>';
    return;
  }
  list.innerHTML = items.map(r => {
    const name = r.nome_razao || r.title || 'Sem nome';
    const date = r.submittedAt ? new Date(r.submittedAt.seconds ? r.submittedAt.seconds * 1000 : r.submittedAt).toLocaleDateString('pt-BR') : '—';
    const sel  = _ctaSelectedForm && _ctaSelectedForm.id === r.id;
    return `<div onclick="_ctaPickForm('${r.id}')" style="padding:8px 12px;border-radius:8px;border:1px solid ${sel ? 'var(--accent)' : 'var(--border)'};background:${sel ? 'var(--accent-soft)' : 'transparent'};cursor:pointer;transition:.15s">
      <div style="font-size:12px;font-weight:600">${name}</div>
      <div style="font-size:10.5px;color:var(--text-muted)">${date}${r.plano_escolhido ? ' · ' + r.plano_escolhido : ''}</div>
    </div>`;
  }).join('');
}

function _ctaFilterForm(val) { _ctaRenderFormList(val); }

function _ctaPickForm(id) {
  _ctaSelectedForm = _ctaAllFormResponses.find(r => r.id === id) || null;
  _ctaRenderFormList('');
  const badge = document.getElementById('cta-client-badge');
  if (badge && _ctaSelectedForm) {
    badge.style.display = 'block';
    badge.innerHTML = `✅ <strong>${_ctaSelectedForm.nome_razao || _ctaSelectedForm.title || 'Cliente'}</strong> — dados do formulário incluídos`;
  }
}

function _ctaBuildSystemPrompt() {
  return `Você é redator jurídico especializado em contratos de marketing digital para a agência DigitalCreate.
CONTRATADA (fixo): DigitalCreate — Agência de Marketing Digital. Responsável: Amanda Estren Silveira.

REGRAS DE FORMATAÇÃO — SEGUIR RIGOROSAMENTE:
1. TEXTO PURO APENAS. Zero markdown. Zero símbolos de formatação.
2. PROIBIDO usar: ** ** __ __ * * # ## ### \\ / tabelas | --- qualquer outro símbolo markdown.
3. Títulos de cláusulas: APENAS EM MAIÚSCULAS SIMPLES, sem nenhum símbolo antes ou depois. Exemplo: "CLÁUSULA 1 — OBJETO DO CONTRATO"
4. Subitens numerados: 1.1, 1.2, 2.1, 2.2 etc.
5. Listas simples com letras: a) b) c) sem recuo excessivo.
6. NÃO inclua espaço de assinaturas, local, data ou linhas de assinatura. O contrato termina após a última cláusula.
7. Use [CAMPO] para dados faltantes.
8. Se você usar qualquer símbolo markdown (**, \\, tabela, etc.), a resposta será considerada inválida.

CONTEÚDO:
- Inclua: identificação das partes, objeto, obrigações, valor/pagamento, vigência e rescisão.
- Quando houver múltiplos serviços, una-os em um único contrato com linguagem consistente.
- Responda com o contrato completo quando solicitado, ou aplique apenas os ajustes pedidos mantendo o restante.`;
}

function _ctaRenderChatMsgs() {
  const el = document.getElementById('cta-chat-msgs');
  if (!el) return;
  if (!_ctaChatMsgs.length) {
    el.innerHTML = `<div style="text-align:center;color:var(--text-muted);font-size:13px;margin-top:60px">
      <div style="font-size:32px;margin-bottom:12px">📄</div>
      Preencha as informações ao lado e clique em<br>
      <strong style="color:var(--accent)">✨ Gerar Contrato</strong> para começar.
    </div>`;
    return;
  }
  el.innerHTML = _ctaChatMsgs.map(m => {
    const isUser = m.role === 'user';
    const text = (m.content || '').replace(/\n/g, '<br>');
    return `<div style="display:flex;flex-direction:column;align-items:${isUser ? 'flex-end' : 'flex-start'};gap:4px">
      <div style="font-size:10px;color:var(--text-muted);padding:0 4px">${isUser ? 'Você' : '🤖 IA'}</div>
      <div style="max-width:90%;padding:12px 14px;border-radius:${isUser ? '14px 14px 4px 14px' : '14px 14px 14px 4px'};background:${isUser ? 'var(--accent)' : 'var(--bg-card)'};color:${isUser ? '#fff' : 'var(--text-primary)'};font-size:13px;line-height:1.65;border:${isUser ? 'none' : '1px solid var(--border)'};white-space:pre-wrap;word-break:break-word">
        ${text}
      </div>
    </div>`;
  }).join('');
  if (_ctaChatLoading) {
    el.innerHTML += `<div style="display:flex;align-items:flex-start;gap:4px;flex-direction:column">
      <div style="font-size:10px;color:var(--text-muted);padding:0 4px">🤖 IA</div>
      <div style="padding:12px 16px;background:var(--bg-card);border:1px solid var(--border);border-radius:14px 14px 14px 4px">
        <span style="display:inline-flex;gap:4px">
          <span style="width:7px;height:7px;background:var(--accent);border-radius:50%;animation:ia-dot 1.2s ease-in-out infinite"></span>
          <span style="width:7px;height:7px;background:var(--accent);border-radius:50%;animation:ia-dot 1.2s ease-in-out .4s infinite"></span>
          <span style="width:7px;height:7px;background:var(--accent);border-radius:50%;animation:ia-dot 1.2s ease-in-out .8s infinite"></span>
        </span>
      </div>
    </div>`;
  }
  el.scrollTop = el.scrollHeight;
}

async function _ctaCallAI(userMsg) {
  _ctaChatMsgs.push({ role: 'user', content: userMsg });
  _ctaChatLoading = true;
  _ctaRenderChatMsgs();
  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemPrompt: _ctaBuildSystemPrompt(),
        messages: _ctaChatMsgs.filter(m => m.content && m.content.trim()).map(m => ({ role: m.role, content: m.content }))
      }),
    });
    const data = await res.json();
    if (data.error) throw new Error(data.error);
    _ctaChatMsgs.push({ role: 'assistant', content: data.content || '(sem resposta)' });
  } catch(e) {
    _ctaChatMsgs.push({ role: 'assistant', content: '❌ Erro: ' + e.message });
  }
  _ctaChatLoading = false;
  _ctaRenderChatMsgs();
  _ctaSaveToHistory(_ctaChatMsgs);
}

async function _ctaChatSend() {
  const inp = document.getElementById('cta-chat-input');
  const text = inp?.value.trim();
  if (!text || _ctaChatLoading) return;
  inp.value = '';
  await _ctaCallAI(text);
}

function _ctaClearChat() {
  _ctaChatMsgs = [];
  _ctaRenderChatMsgs();
}

function _ctaCopyLast() {
  const last = [..._ctaChatMsgs].reverse().find(m => m.role === 'assistant');
  if (!last) { addNotif('Nenhum contrato gerado ainda', 'warn'); return; }
  navigator.clipboard.writeText(last.content).then(() => addNotif('Copiado!', 'success'));
}

async function _ctaGenerate() {
  if (_ctaChatLoading) return;
  const servIds = [..._ctaSelectedSvcIds];
  const manualSvc = document.getElementById('cta-svc-manual')?.value.trim();
  if (!servIds.length && !manualSvc) { addNotif('Selecione ou digite pelo menos um serviço', 'warn'); return; }

  const btn = document.getElementById('cta-gen-btn');
  if (btn) { btn.disabled = true; btn.textContent = '⏳ Gerando…'; }

  // Dados do cliente
  let clienteCtx = '';
  if (_ctaClientSource === 'base' && _ctaSelectedClient) {
    const c = _ctaSelectedClient;
    clienteCtx = `\nDADOS DO CONTRATANTE:\nNome: ${c.nome || '[NOME]'}\nEmpresa: ${c.empresa || '—'}\nCPF/CNPJ: ${c.cpfCnpj || c.doc || '—'}\nE-mail: ${c.email || '—'}\nWhatsApp: ${c.whatsapp || c.fone || '—'}\nEndereço: ${c.endereco || '—'}`;
  } else if (_ctaClientSource === 'form' && _ctaSelectedForm) {
    const r = _ctaSelectedForm;
    clienteCtx = `\nDADOS DO CONTRATANTE:\nNome/Razão Social: ${r.nome_razao || '[NOME]'}\nNome Fantasia: ${r.nome_fantasia || '—'}\nCPF/CNPJ: ${r.cpf_cnpj || '[CPF/CNPJ]'}\nE-mail: ${r.email || '—'}\nWhatsApp: ${r.whatsapp || '—'}\nEndereço: ${r.endereco || '[ENDEREÇO]'}\nSegmento: ${r.segmento || '—'}\nForma de pagamento: ${r.forma_pagamento || '—'}\nData início: ${r.data_inicio || '—'}`;
  } else if (_ctaClientSource === 'manual') {
    const nome  = document.getElementById('cta-m-nome')?.value.trim();
    const doc   = document.getElementById('cta-m-doc')?.value.trim();
    const email = document.getElementById('cta-m-email')?.value.trim();
    const wpp   = document.getElementById('cta-m-wpp')?.value.trim();
    const end   = document.getElementById('cta-m-end')?.value.trim();
    clienteCtx = `\nDADOS DO CONTRATANTE:\nNome/Razão Social: ${nome || '[NOME]'}\nCPF/CNPJ: ${doc || '[CPF/CNPJ]'}\nE-mail: ${email || '—'}\nWhatsApp: ${wpp || '—'}\nEndereço: ${end || '[ENDEREÇO]'}`;
  }

  // Templates dos serviços selecionados
  let templatesCtx = '';
  let servicosList = manualSvc || '';
  servIds.forEach(id => {
    const tpl = _ctaTemplates.find(t => t.id === id);
    if (!tpl) return;
    servicosList += (servicosList ? ', ' : '') + tpl.name;
    if (tpl.text && tpl.text.trim()) {
      templatesCtx += `\n\n=== CONTRATO BASE — ${tpl.name.toUpperCase()} ===\n${tpl.text.substring(0, 3500)}`;
    }
  });

  const valor    = document.getElementById('cta-valor')?.value.trim();
  const venc     = document.getElementById('cta-venc')?.value.trim();
  const vigencia = document.getElementById('cta-vigencia')?.value.trim();
  const obs      = document.getElementById('cta-obs')?.value.trim();

  const userMsg = `Redija o contrato de prestação de serviços:\nSERVIÇOS: ${servicosList}${valor ? '\nVALOR: ' + valor : ''}${venc ? '\nVENCIMENTO: ' + venc : ''}${vigencia ? '\nVIGÊNCIA: ' + vigencia : ''}${obs ? '\nOBSERVAÇÕES: ' + obs : ''}${clienteCtx}${templatesCtx || '\n(Use estrutura padrão profissional para agência de marketing digital)'}`;

  _ctaChatMsgs = [];
  await _ctaCallAI(userMsg);

  if (btn) { btn.disabled = false; btn.textContent = '✨ Gerar Contrato'; }
}

function _ctaOpenDocs() {
  window.open('https://docs.new', '_blank');
  addNotif('Google Docs aberto! Cole o contrato com Ctrl+V', 'info');
}

// ═══════════════════════════════════════════════════════════════════
// CONFIGURAÇÕES — Controle de visibilidade por role (Feature 5)
// ═══════════════════════════════════════════════════════════════════

const _SETTINGS_NAV_ITEMS = [
  { section: 'Visão Geral',  items: [
    { key: 'dashboard',  label: '📊 Dashboard' },
    { key: 'crm',        label: '📋 CRM / Tarefas' },
    { key: 'jornada',    label: '🚀 Jornada' },
    { key: 'lembretes',  label: '🔔 Lembretes' },
    { key: 'calendario', label: '📅 Calendário' },
  ]},
  { section: 'Gestão', items: [
    { key: 'clients',    label: '👥 Clientes' },
    { key: 'financeiro', label: '💰 Financeiro' },
    { key: 'prospeccao', label: '🎯 Prospecção' },
    { key: 'docs',       label: '📝 Documentos' },
    { key: 'files',      label: '🗂️ Arquivos' },
  ]},
  { section: 'Formulários', items: [
    { key: 'custom-forms',          label: '✨ Meus Formulários' },
    { key: 'briefings-trafego',     label: '📊 Tráfego Pago' },
    { key: 'briefings-gmb',         label: '📍 Google Meu Negócio' },
    { key: 'briefings-contrato',    label: '📄 Contrato' },
    { key: 'briefings-satisfacao',  label: '⭐ Satisfação' },
    { key: 'briefings-sites',       label: '🌐 Sites / Landing Pages' },
  ]},
  { section: 'Inteligência', items: [
    { key: 'ia',           label: '🤖 IA da Agência' },
    { key: 'contratos-ia', label: '📄 Agente de Contratos' },
  ]},
  { section: 'Integrações', items: [
    { key: 'drive', label: '📁 Google Drive' },
  ]},
];

const _SETTINGS_DEFAULTS = {
  financeiro: { gerente: true,  membro: false },
  drive:      { gerente: false, membro: false },
};

function _settingsGet(key, role, settings) {
  const s = settings?.[key];
  const def = _SETTINGS_DEFAULTS[key] ?? { gerente: true, membro: true };
  return s ? (s[role] ?? def[role] ?? true) : (def[role] ?? true);
}

async function renderSettingsPage() {
  if (window.currentRole !== 'admin') {
    document.getElementById('app-content').innerHTML =
      '<div class="page-wrap"><p style="color:var(--text-muted)">Acesso restrito.</p></div>';
    return;
  }

  document.getElementById('main-content').innerHTML =
    '<div class="page-wrap"><div style="display:flex;align-items:center;gap:10px;margin-bottom:24px">' +
    '<div style="width:38px;height:38px;background:var(--accent-soft);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px">⚙️</div>' +
    '<div><div style="font-size:18px;font-weight:700">Configurações</div>' +
    '<div style="font-size:12px;color:var(--text-muted)">Controle o que cada role pode ver no sistema</div></div></div>' +
    '<div id="settings-content"><div style="color:var(--text-muted);font-size:13px">Carregando...</div></div></div>';
  document.getElementById('main-content').style.display = '';

  const settings = window._navSettings || await window.loadNavSettings();
  window._navSettings = settings;

  let html = '<div style="display:flex;flex-direction:column;gap:20px">';

  _SETTINGS_NAV_ITEMS.forEach(group => {
    html += `<div style="background:var(--bg-card);border:1px solid var(--border);border-radius:14px;overflow:hidden">
      <div style="padding:12px 16px;border-bottom:1px solid var(--border);font-size:12px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.06em;background:var(--bg-sidebar)">${group.section}</div>
      <table style="width:100%;border-collapse:collapse">
        <thead>
          <tr>
            <th style="padding:10px 16px;text-align:left;font-size:12px;color:var(--text-muted);font-weight:600;border-bottom:1px solid var(--border)">Página / Seção</th>
            <th style="padding:10px 16px;text-align:center;font-size:12px;color:var(--text-muted);font-weight:600;border-bottom:1px solid var(--border);width:110px">👑 Admin</th>
            <th style="padding:10px 16px;text-align:center;font-size:12px;color:var(--text-muted);font-weight:600;border-bottom:1px solid var(--border);width:110px">⭐ Gerente</th>
            <th style="padding:10px 16px;text-align:center;font-size:12px;color:var(--text-muted);font-weight:600;border-bottom:1px solid var(--border);width:110px">👤 Membro</th>
          </tr>
        </thead>
        <tbody>`;

    group.items.forEach((item, i) => {
      const gerenteOn = _settingsGet(item.key, 'gerente', settings);
      const membroOn  = _settingsGet(item.key, 'membro',  settings);
      const rowBg = i % 2 === 0 ? '' : 'background:rgba(255,255,255,.02)';
      html += `<tr style="${rowBg}">
        <td style="padding:11px 16px;font-size:13px">${item.label}</td>
        <td style="text-align:center;padding:11px 16px">
          <span style="color:var(--green);font-size:16px" title="Admin sempre tem acesso">✓</span>
        </td>
        <td style="text-align:center;padding:11px 16px">
          <label class="settings-toggle">
            <input type="checkbox" data-key="${item.key}" data-role="gerente" ${gerenteOn ? 'checked' : ''}
              onchange="_settingsToggle('${item.key}','gerente',this.checked)">
            <span class="settings-toggle-slider"></span>
          </label>
        </td>
        <td style="text-align:center;padding:11px 16px">
          <label class="settings-toggle">
            <input type="checkbox" data-key="${item.key}" data-role="membro" ${membroOn ? 'checked' : ''}
              onchange="_settingsToggle('${item.key}','membro',this.checked)">
            <span class="settings-toggle-slider"></span>
          </label>
        </td>
      </tr>`;
    });

    html += '</tbody></table></div>';
  });

  html += '</div>';
  html += `<div style="margin-top:20px;padding:14px 16px;background:var(--bg-card);border:1px solid var(--border);border-radius:12px;font-size:12px;color:var(--text-muted)">
    <strong style="color:var(--text)">ℹ️ Como funciona:</strong> Admin sempre tem acesso a tudo.
    As configurações afetam Gerentes e Membros na próxima vez que fizerem login.
    Alterações são salvas automaticamente no servidor.
  </div>`;

  document.getElementById('settings-content').innerHTML = html;
}

let _settingsSaveTimer = null;
function _settingsToggle(key, role, val) {
  if (!window._navSettings) window._navSettings = {};
  if (!window._navSettings[key]) {
    const def = _SETTINGS_DEFAULTS[key] ?? { gerente: true, membro: true };
    window._navSettings[key] = { ...def };
  }
  window._navSettings[key][role] = val;

  clearTimeout(_settingsSaveTimer);
  _settingsSaveTimer = setTimeout(async () => {
    const ok = await window.saveNavSettings(window._navSettings);
    if (ok) addNotif('Configurações salvas!', 'success');
    else addNotif('Erro ao salvar configurações', 'error');
  }, 800);
}


// ═══════════════════════════════════════════════════════════════════════════
// CALENDÁRIO SEMANAL — v2 (multi-participantes, editar, widget flutuante)
// ═══════════════════════════════════════════════════════════════════════════

let _calTasks      = [];
let _calWeekOffset = 0;    // 0 = semana atual, -1 = passada, +1 = próxima
let _calModalState = {};
let _calEditingId  = null; // null = criar | 'id' = editar

const _CAL_DAY_SHORT  = ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];
const _CAL_DAY_FULL   = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'];
const _CAL_MONTHS     = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
const _CAL_MONTHS_ABR = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];

const _CAL_COLORS = [
  // DigitalCreate brand
  '#a760fd','#8f71fd','#6daffd','#65e7f3','#7c22b4','#3a2d94',
  // Extended palette
  '#7c5cfc','#06b6d4','#10b981','#f59e0b','#a855f7','#ef4444',
  '#f97316','#ec4899','#84cc16','#14b8a6','#f43f5e','#0ea5e9',
  '#6b7280','#d97706','#8b5cf6','#22d3ee','#4ade80','#fb923c',
  '#e879f9','#34d399',
];

// ── Helpers ────────────────────────────────────────────────────────────────

function _calDateStr(d) { return d.toISOString().split('T')[0]; }

function _calGetWeekDates(offset) {
  const now = new Date();
  const dow = now.getDay();
  const mon = new Date(now);
  mon.setDate(now.getDate() - (dow === 0 ? 6 : dow - 1) + offset * 7);
  mon.setHours(0, 0, 0, 0);
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(mon); d.setDate(mon.getDate() + i); return d;
  });
}

function _calTasksForDay(d) {
  const ds = _calDateStr(d), dow = d.getDay();
  return _calTasks.filter(t => {
    if (t.recurrence === 'once')   return t.date === ds;
    if (t.recurrence === 'weekly') return (t.days || []).includes(dow);
    return false;
  }).sort((a, b) => (a.time || '99:99').localeCompare(b.time || '99:99'));
}

function _calIsDone(task, dateStr) { return (task.completedDates || []).includes(dateStr); }
function _calIsAdmin() { const r = window._userRole || 'membro'; return r === 'admin' || r === 'gerente'; }

// Normaliza participantes — suporta formato novo (array) e legado (participantName)
function _calGetParticipants(task) {
  if (task.participants && task.participants.length > 0) return task.participants;
  if (task.participantName) return [{ type: task.participantType || 'member', id: task.participantId || '', name: task.participantName }];
  return [];
}

// ── Página principal ───────────────────────────────────────────────────────

async function renderCalendarioPage() {
  const el = document.getElementById('main-content');
  el.innerHTML = '<div style="padding:32px;text-align:center;color:var(--text-muted)">⏳ Carregando calendário...</div>';
  try { _calTasks = await window.loadCalTasks(); } catch(e) { _calTasks = []; }
  _calRender();
  _calUpdateFloating();
}

function _calRender() {
  const el = document.getElementById('main-content');
  if (!el) return;
  const isAdmin  = _calIsAdmin();
  const week     = _calGetWeekDates(_calWeekOffset);
  const today    = new Date(); today.setHours(0, 0, 0, 0);
  const todayStr = _calDateStr(today);
  const curUid   = window._userId || '';

  const ws = week[0], we = week[6];
  const weekLabel = ws.getMonth() === we.getMonth()
    ? `${ws.getDate()} – ${we.getDate()} de ${_CAL_MONTHS[we.getMonth()]} ${we.getFullYear()}`
    : `${ws.getDate()} ${_CAL_MONTHS_ABR[ws.getMonth()]} – ${we.getDate()} ${_CAL_MONTHS_ABR[we.getMonth()]} ${we.getFullYear()}`;

  const todayDayObj = week.find(d => _calDateStr(d) === todayStr);
  const todayTasks  = todayDayObj
    ? _calTasksForDay(todayDayObj).filter(t => t.visibility === 'public' || isAdmin)
    : [];

  const dayCols = week.map(d => {
    const dStr  = _calDateStr(d);
    const isT   = dStr === todayStr;
    const isPast = d < today;
    const tasks = _calTasksForDay(d).filter(t => t.visibility === 'public' || isAdmin);
    return `
      <div style="background:var(--bg-card);border:1.5px solid ${isT ? 'var(--accent)' : 'var(--border)'};border-radius:13px;overflow:hidden;min-height:160px;display:flex;flex-direction:column">
        <div style="padding:9px 10px;text-align:center;background:${isT ? 'var(--accent)' : 'transparent'};border-bottom:1px solid ${isT ? 'transparent' : 'var(--border)'}">
          <div style="font-size:9px;font-weight:700;letter-spacing:.7px;color:${isT ? 'rgba(255,255,255,.8)' : 'var(--text-muted)'};text-transform:uppercase">${_CAL_DAY_SHORT[d.getDay()]}</div>
          <div style="font-size:22px;font-weight:800;line-height:1.1;color:${isT ? '#fff' : isPast ? 'var(--text-muted)' : 'var(--text-primary)'}">${d.getDate()}</div>
        </div>
        <div style="padding:7px;flex:1;display:flex;flex-direction:column;gap:5px">
          ${tasks.map(t => _calCard(t, dStr, isAdmin, curUid)).join('')}
          <button onclick="_calOpenModal('${dStr}')"
            style="margin-top:auto;width:100%;background:transparent;border:1px dashed var(--border);border-radius:7px;padding:4px;cursor:pointer;color:var(--text-muted);font-size:10px;transition:.15s"
            onmouseover="this.style.borderColor='var(--accent)';this.style.color='var(--accent)'"
            onmouseout="this.style.borderColor='var(--border)';this.style.color='var(--text-muted)'">+ add</button>
        </div>
      </div>`;
  }).join('');

  el.innerHTML = `
<div style="padding:20px 22px 60px;max-width:1300px">
  <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-bottom:20px">
    <div style="display:flex;align-items:center;gap:10px">
      <button onclick="_calPrev()" class="btn btn-ghost" style="padding:6px 14px">←</button>
      <span style="font-size:14px;font-weight:700;color:var(--text-primary);min-width:200px;text-align:center">${weekLabel}</span>
      <button onclick="_calNext()" class="btn btn-ghost" style="padding:6px 14px">→</button>
      ${_calWeekOffset !== 0 ? '<button onclick="_calGoToday()" class="btn btn-ghost" style="font-size:11px;color:var(--accent);padding:5px 10px">Hoje</button>' : ''}
    </div>
    <button onclick="_calOpenModal(null)" class="btn btn-primary">+ Nova Tarefa</button>
  </div>

  ${todayDayObj ? `
  <div style="background:var(--bg-card);border:1.5px solid var(--accent);border-radius:14px;padding:16px 20px;margin-bottom:20px">
    <div style="font-size:11px;font-weight:700;color:var(--accent);text-transform:uppercase;letter-spacing:.7px;margin-bottom:10px">
      ☀️ Hoje — ${_CAL_DAY_FULL[todayDayObj.getDay()]}, ${todayDayObj.getDate()} de ${_CAL_MONTHS[todayDayObj.getMonth()]}
    </div>
    ${todayTasks.length === 0
      ? '<span style="color:var(--text-muted);font-size:13px">Sem tarefas para hoje 🎉</span>'
      : '<div style="display:flex;flex-wrap:wrap;gap:8px">' + todayTasks.map(t => _calDayChip(t, todayStr)).join('') + '</div>'}
  </div>` : ''}

  <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:8px">${dayCols}</div>
</div>

<div id="cal-modal" onclick="if(event.target===this)_calCloseModal()"
  style="display:none;position:fixed;inset:0;background:rgba(0,0,0,.65);z-index:2000;align-items:center;justify-content:center;padding:16px">
  <div id="cal-modal-inner" style="background:#16162a;border:1px solid rgba(167,96,253,.35);border-radius:18px;width:100%;max-width:530px;max-height:92vh;overflow-y:auto"></div>
</div>`;
}

// ── Cards ──────────────────────────────────────────────────────────────────

function _calCard(task, dateStr, isAdmin, curUid) {
  const done    = _calIsDone(task, dateStr);
  const color   = task.color || '#a760fd';
  const pts     = _calGetParticipants(task);
  const canEdit = isAdmin || task.createdBy === curUid;

  const ptHtml = pts.length > 0
    ? pts.slice(0, 2).map(p =>
        `<span style="font-size:9px;color:var(--text-muted);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:58px">${p.type === 'client' ? '👥' : '👤'}${p.name.split(' ')[0]}</span>`
      ).join('') + (pts.length > 2 ? `<span style="font-size:9px;color:var(--text-muted)">+${pts.length - 2}</span>` : '')
    : '';

  return `
<div style="background:${done ? 'transparent' : color + '18'};border:1px solid ${done ? 'var(--border)' : color + '55'};border-left:3px solid ${done ? 'var(--border)' : color};border-radius:8px;padding:6px 8px;transition:.15s;opacity:${done ? .5 : 1}">
  <div style="display:flex;align-items:flex-start;gap:4px">
    <span onclick="_calToggle('${task.id}','${dateStr}',${done})" style="font-size:11px;flex-shrink:0;cursor:pointer;margin-top:1px">${done ? '✅' : '⬜'}</span>
    <span onclick="_calToggle('${task.id}','${dateStr}',${done})" style="font-size:11px;font-weight:600;color:var(--text-primary);flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;${done ? 'text-decoration:line-through' : ''}">${task.title}</span>
    <div style="display:flex;gap:2px;flex-shrink:0">
      ${canEdit ? `<span onclick="event.stopPropagation();_calOpenEditModal('${task.id}')" style="font-size:10px;color:var(--accent);cursor:pointer;padding:0 2px;line-height:1.5" title="Editar">✏️</span>` : ''}
      ${isAdmin ? `<span onclick="event.stopPropagation();_calDelete('${task.id}')" style="font-size:11px;color:var(--text-muted);cursor:pointer;padding:0 2px;line-height:1.5" title="Excluir">✕</span>` : ''}
    </div>
  </div>
  <div style="display:flex;flex-wrap:wrap;align-items:center;gap:4px;margin-top:3px">
    ${task.time ? `<span style="font-size:9px;color:var(--text-muted)">🕐${task.time}</span>` : ''}
    ${ptHtml}
    ${(task.links || []).map(l => `<a href="${l.url}" target="_blank" onclick="event.stopPropagation()" style="font-size:9px;color:var(--accent);text-decoration:none">${l.type === 'maps' ? '📍' : l.type === 'meet' ? '📹' : '🔗'}</a>`).join('')}
    ${task.visibility === 'admin' ? '<span style="font-size:8px;background:rgba(239,68,68,.15);color:#ef4444;padding:1px 4px;border-radius:3px;font-weight:700">🔒</span>' : ''}
    ${task.recurrence === 'weekly' ? '<span style="font-size:9px;color:var(--text-muted)">🔁</span>' : ''}
  </div>
</div>`;
}

function _calDayChip(task, dateStr) {
  const done  = _calIsDone(task, dateStr);
  const color = task.color || '#a760fd';
  const pts   = _calGetParticipants(task);
  const ptStr = pts.length > 0
    ? `<span style="font-size:10px;color:var(--text-muted)">· ${pts.map(p => p.name.split(' ')[0]).slice(0, 2).join(', ')}${pts.length > 2 ? '...' : ''}</span>`
    : '';
  return `
<div onclick="_calToggle('${task.id}','${dateStr}',${done})"
  style="display:inline-flex;align-items:center;gap:6px;background:${done ? 'transparent' : color + '18'};border:1px solid ${done ? 'var(--border)' : color + '55'};border-radius:20px;padding:5px 12px;cursor:pointer;opacity:${done ? .5 : 1};transition:.15s">
  <span>${done ? '✅' : '⬜'}</span>
  <span style="font-size:12px;font-weight:600;${done ? 'text-decoration:line-through' : ''}">${task.title}</span>
  ${task.time ? `<span style="font-size:10px;color:var(--text-muted)">· ${task.time}</span>` : ''}
  ${ptStr}
  ${(task.links || []).map(l => `<a href="${l.url}" target="_blank" onclick="event.stopPropagation()" style="font-size:11px;color:var(--accent)">${l.type === 'maps' ? '📍' : l.type === 'meet' ? '📹' : '🔗'}</a>`).join('')}
</div>`;
}

// ── Navegação da semana ────────────────────────────────────────────────────

function _calPrev()    { _calWeekOffset--; _calRender(); }
function _calNext()    { _calWeekOffset++; _calRender(); }
function _calGoToday() { _calWeekOffset = 0; _calRender(); }

// ── Toggle concluída ───────────────────────────────────────────────────────

async function _calToggle(taskId, dateStr, wasDone) {
  const task = _calTasks.find(t => t.id === taskId);
  if (!task) return;
  const dates = wasDone
    ? (task.completedDates || []).filter(d => d !== dateStr)
    : [...(task.completedDates || []), dateStr];
  task.completedDates = dates;
  _calRender();
  _calUpdateFloating();
  try { await window.updateCalTask(taskId, { completedDates: dates }); }
  catch(e) { addNotif('Erro ao atualizar tarefa', 'error'); }
}

// ── Excluir ────────────────────────────────────────────────────────────────

async function _calDelete(id) {
  if (!confirm('Excluir esta tarefa permanentemente?')) return;
  _calTasks = _calTasks.filter(t => t.id !== id);
  _calRender();
  _calUpdateFloating();
  try { await window.deleteCalTask(id); }
  catch(e) { addNotif('Erro ao excluir', 'error'); }
}

// ── Modal: abrir/fechar ────────────────────────────────────────────────────

function _calOpenModal(defaultDate) {
  _calEditingId = null;
  _calModalState = {
    recurrence:   'once',
    participants: [],
    links:        [],
    visibility:   'public',
    color:        _CAL_COLORS[0],
    days:         [],
  };
  _calBuildModal(defaultDate || _calDateStr(new Date()), null);
}

function _calOpenEditModal(taskId) {
  const task = _calTasks.find(t => t.id === taskId);
  if (!task) return;
  _calEditingId = taskId;
  _calModalState = {
    recurrence:   task.recurrence || 'once',
    participants: _calGetParticipants(task).map(p => ({ ...p })),
    links:        (task.links || []).map(l => ({ ...l })),
    visibility:   task.visibility || 'public',
    color:        task.color || _CAL_COLORS[0],
    days:         [...(task.days || [])],
  };
  _calBuildModal(task.date || _calDateStr(new Date()), task);
}

function _calBuildModal(defaultDate, editTask) {
  const isAdmin = _calIsAdmin();
  const isEdit  = !!_calEditingId;
  const st      = _calModalState;

  const colorDots = _CAL_COLORS.map(c => {
    const sel = c === st.color;
    return `<div data-color="${c}" onclick="_calPickColor('${c}',this)" title="${c}"
      style="width:22px;height:22px;border-radius:50%;background:${c};cursor:pointer;border:2.5px solid ${sel ? '#fff' : 'transparent'};transition:.15s;flex-shrink:0"></div>`;
  }).join('');

  // Ensure modal container exists (needed when called from floating widget on non-calendar pages)
  let modalEl = document.getElementById('cal-modal');
  if (!modalEl) {
    modalEl = document.createElement('div');
    modalEl.id = 'cal-modal';
    modalEl.onclick = e => { if (e.target === modalEl) _calCloseModal(); };
    modalEl.style.cssText = 'display:none;position:fixed;inset:0;background:rgba(0,0,0,.65);z-index:2000;align-items:center;justify-content:center;padding:16px';
    const inner = document.createElement('div');
    inner.id = 'cal-modal-inner';
    inner.style.cssText = 'background:#16162a;border:1px solid rgba(167,96,253,.35);border-radius:18px;width:100%;max-width:530px;max-height:92vh;overflow-y:auto';
    modalEl.appendChild(inner);
    document.body.appendChild(modalEl);
  }

  const dayBtns = [['Dom',0],['Seg',1],['Ter',2],['Qua',3],['Qui',4],['Sex',5],['S\xE1b',6]].map(([n,v]) => {
    const sel = st.days.includes(v);
    return `<div onclick="_calToggleDay(${v},this)" data-dow="${v}"
      style="padding:7px 11px;border-radius:8px;border:1px solid ${sel ? 'var(--accent)' : 'var(--border)'};cursor:pointer;font-size:11px;font-weight:700;color:${sel ? '#fff' : 'var(--text-muted)'};background:${sel ? 'var(--accent)' : 'transparent'};transition:.15s;user-select:none">${n}</div>`;
  }).join('');

  const iStyle = 'width:100%;background:rgba(255,255,255,.05);border:1px solid var(--border);border-radius:9px;padding:10px 13px;color:var(--text-primary);font-size:13px;outline:none;font-family:inherit;box-sizing:border-box';

  document.getElementById('cal-modal-inner').innerHTML = `
<div style="padding:18px 22px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between">
  <div style="font-size:15px;font-weight:700">📅 ${isEdit ? 'Editar Tarefa' : 'Nova Tarefa'}</div>
  <button onclick="_calCloseModal()" style="background:transparent;border:none;color:var(--text-muted);font-size:22px;cursor:pointer;line-height:1">\xD7</button>
</div>
<div style="padding:18px 22px;display:flex;flex-direction:column;gap:16px">

  <div>
    <div style="font-size:10px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.6px;margin-bottom:6px">T\xEDtulo *</div>
    <input id="cal-f-title" type="text" value="${isEdit ? (editTask.title || '').replace(/"/g, '&quot;') : ''}"
      placeholder="Ex: Reuni\xE3o com cliente, Post Instagram..."
      style="${iStyle}">
  </div>

  <div>
    <div style="font-size:10px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.6px;margin-bottom:8px">Quando acontece?</div>
    <div style="display:flex;gap:8px;margin-bottom:10px">
      <button id="cal-r-once"   onclick="_calSetRec('once')"   class="${st.recurrence === 'once' ? 'btn btn-primary' : 'btn btn-ghost'}"   style="flex:1;font-size:12px;padding:7px 4px">📅 Data espec\xEDfica</button>
      <button id="cal-r-weekly" onclick="_calSetRec('weekly')" class="${st.recurrence === 'weekly' ? 'btn btn-primary' : 'btn btn-ghost'}" style="flex:1;font-size:12px;padding:7px 4px">🔁 Toda semana</button>
    </div>
    <div id="cal-panel-once" style="${st.recurrence !== 'once' ? 'display:none' : ''}">
      <input id="cal-f-date" type="date" value="${defaultDate}" style="${iStyle}">
    </div>
    <div id="cal-panel-weekly" style="${st.recurrence !== 'weekly' ? 'display:none' : ''}">
      <div style="display:flex;gap:6px;flex-wrap:wrap">${dayBtns}</div>
    </div>
  </div>

  <div>
    <div style="font-size:10px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.6px;margin-bottom:6px">Hor\xE1rio</div>
    <input id="cal-f-time" type="time" value="${isEdit ? (editTask.time || '') : ''}"
      style="background:rgba(255,255,255,.05);border:1px solid var(--border);border-radius:9px;padding:10px 13px;color:var(--text-primary);font-size:13px;outline:none;width:160px">
  </div>

  <div>
    <div style="font-size:10px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.6px;margin-bottom:6px">Com quem? <span style="font-weight:400;text-transform:none;font-size:9px;letter-spacing:0">(selecione v\xE1rios)</span></div>
    <div id="cal-pt-chips" style="display:flex;flex-wrap:wrap;gap:5px;min-height:4px;margin-bottom:8px"></div>
    <input id="cal-pt-search" type="text" placeholder="🔍 Buscar clientes ou membros..." oninput="_calFilterAllPt(this.value)"
      style="${iStyle};margin-bottom:6px">
    <div id="cal-pt-list" style="max-height:150px;overflow-y:auto;border:1px solid rgba(167,96,253,.3);border-radius:8px;padding:4px;background:#0f0d22"></div>
  </div>

  <div>
    <div style="font-size:10px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.6px;margin-bottom:8px">Links de acesso (opcional)</div>
    <div id="cal-links-list" style="display:flex;flex-direction:column;gap:7px;margin-bottom:8px"></div>
    <button onclick="_calAddLink()" class="btn btn-ghost" style="font-size:11px;padding:5px 14px;width:100%;border-style:dashed">+ Adicionar link</button>
  </div>

  <div>
    <div style="font-size:10px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.6px;margin-bottom:8px">Visibilidade</div>
    <div style="display:flex;gap:8px;margin-bottom:6px">
      <button id="cal-vis-public" onclick="_calSetVis('public')" class="${st.visibility === 'public' ? 'btn btn-primary' : 'btn btn-ghost'}" style="flex:1;font-size:12px;padding:7px">👁️ P\xFAblica</button>
      ${isAdmin ? `<button id="cal-vis-admin" onclick="_calSetVis('admin')" class="${st.visibility === 'admin' ? 'btn btn-primary' : 'btn btn-ghost'}" style="flex:1;font-size:12px;padding:7px">🔒 S\xF3 Admins</button>` : ''}
    </div>
    <div id="cal-vis-desc" style="font-size:10px;color:var(--text-muted)">${st.visibility === 'public' ? 'Todos os membros v\xEAem esta tarefa.' : 'Apenas admins e gerentes v\xEAem esta tarefa.'}</div>
  </div>

  <div>
    <div style="font-size:10px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.6px;margin-bottom:8px">Cor da tarefa</div>
    <div style="display:flex;gap:6px;flex-wrap:wrap" id="cal-color-dots">${colorDots}</div>
  </div>

  <div>
    <div style="font-size:10px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.6px;margin-bottom:6px">Observa\xE7\xF5es (opcional)</div>
    <textarea id="cal-f-desc" rows="2" placeholder="Detalhes, notas..."
      style="${iStyle.replace('border-radius:9px', 'border-radius:9px;resize:vertical')}">${isEdit ? (editTask.description || '') : ''}</textarea>
  </div>

</div>
<div style="padding:14px 22px;border-top:1px solid var(--border);display:flex;gap:10px;justify-content:flex-end">
  <button onclick="_calCloseModal()" class="btn btn-ghost">Cancelar</button>
  <button onclick="_calSave()" class="btn btn-primary" id="cal-save-btn">${isEdit ? '✔ Salvar Altera\xE7\xF5es' : '✔ Criar Tarefa'}</button>
</div>`;

  _calBuildPtList('');
  _calRenderPtChips();
  _calRenderLinksList();
  modalEl.style.display = 'flex';
  setTimeout(() => document.getElementById('cal-f-title')?.focus(), 50);
}

function _calCloseModal() {
  const m = document.getElementById('cal-modal');
  if (m) m.style.display = 'none';
}

// ── Participantes multi-select ─────────────────────────────────────────────

function _calBuildPtList(query) {
  const el = document.getElementById('cal-pt-list');
  if (!el) return;

  let items = [];
  (clientsData || []).filter(c => !c.archived && c.nome).forEach(c =>
    items.push({ type: 'client', id: c.id || c.nome, name: c.nome + (c.empresa ? ' — ' + c.empresa : '') })
  );
  (teamMembers || []).forEach(m =>
    items.push({ type: 'member', id: m.uid || m.key || m.label, name: m.label || m.name })
  );
  if (window._allUsers) {
    window._allUsers.forEach(u => {
      if (!items.find(i => i.id === u.uid))
        items.push({ type: 'member', id: u.uid, name: u.name || u.email });
    });
  }

  const q        = query.toLowerCase();
  const filtered = q ? items.filter(it => it.name.toLowerCase().includes(q)) : items;

  if (!filtered.length) {
    el.innerHTML = '<div style="font-size:12px;color:var(--text-muted);padding:8px 10px">Nenhum resultado</div>';
    return;
  }

  el.innerHTML = filtered.map(it => {
    const sel      = _calModalState.participants.some(p => p.id === it.id);
    const safeName = it.name.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
    return `
    <div onclick="_calTogglePt('${it.id}','${safeName}','${it.type}',this)" data-id="${it.id}"
      style="padding:7px 10px;border-radius:6px;cursor:pointer;font-size:12px;display:flex;align-items:center;gap:8px;background:${sel ? 'rgba(167,96,253,.25)' : 'rgba(255,255,255,.03)'};border:1px solid ${sel ? '#a760fd' : 'transparent'};transition:.12s">
      <span style="font-size:13px;flex-shrink:0;width:18px;text-align:center">${sel ? '✅' : it.type === 'client' ? '👥' : '👤'}</span>
      <span style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:${sel ? '#a760fd' : '#ece8ff'}">${it.name}</span>
      <span style="font-size:9px;padding:2px 6px;border-radius:4px;background:${it.type === 'client' ? 'rgba(101,231,243,.1)' : 'rgba(167,96,253,.1)'};color:${it.type === 'client' ? '#65e7f3' : 'var(--accent)'};font-weight:700">${it.type === 'client' ? 'CLIENTE' : 'MEMBRO'}</span>
    </div>`;
  }).join('');
}

function _calFilterAllPt(q) { _calBuildPtList(q); }

function _calTogglePt(id, name, type) {
  const idx = _calModalState.participants.findIndex(p => p.id === id);
  if (idx >= 0) _calModalState.participants.splice(idx, 1);
  else _calModalState.participants.push({ type, id, name });
  _calRenderPtChips();
  _calBuildPtList(document.getElementById('cal-pt-search')?.value || '');
}

function _calRenderPtChips() {
  const el = document.getElementById('cal-pt-chips');
  if (!el) return;
  el.innerHTML = _calModalState.participants.map(p => `
    <div style="display:inline-flex;align-items:center;gap:5px;background:rgba(167,96,253,.15);border:1px solid var(--accent);border-radius:20px;padding:3px 10px;font-size:11px;color:var(--accent)">
      ${p.type === 'client' ? '👥' : '👤'} ${p.name.split(' — ')[0].split(' ').slice(0, 2).join(' ')}
      <span onclick="_calRemovePt('${p.id}')" style="cursor:pointer;font-size:15px;line-height:1;margin-left:2px">\xD7</span>
    </div>`).join('');
}

function _calRemovePt(id) {
  _calModalState.participants = _calModalState.participants.filter(p => p.id !== id);
  _calRenderPtChips();
  _calBuildPtList(document.getElementById('cal-pt-search')?.value || '');
}

// ── Modal controles ────────────────────────────────────────────────────────

function _calSetRec(type) {
  _calModalState.recurrence = type;
  const pO = document.getElementById('cal-panel-once');
  const pW = document.getElementById('cal-panel-weekly');
  const bO = document.getElementById('cal-r-once');
  const bW = document.getElementById('cal-r-weekly');
  if (pO) pO.style.display = type === 'once'   ? '' : 'none';
  if (pW) pW.style.display = type === 'weekly' ? '' : 'none';
  if (bO) bO.className = type === 'once'   ? 'btn btn-primary' : 'btn btn-ghost';
  if (bW) bW.className = type === 'weekly' ? 'btn btn-primary' : 'btn btn-ghost';
}

function _calToggleDay(num, el) {
  const days = _calModalState.days;
  const idx  = days.indexOf(num);
  if (idx >= 0) {
    days.splice(idx, 1);
    el.style.background  = 'transparent';
    el.style.color       = 'var(--text-muted)';
    el.style.borderColor = 'var(--border)';
  } else {
    days.push(num);
    el.style.background  = 'var(--accent)';
    el.style.color       = '#fff';
    el.style.borderColor = 'var(--accent)';
  }
}

function _calSetVis(vis) {
  _calModalState.visibility = vis;
  const bP = document.getElementById('cal-vis-public');
  const bA = document.getElementById('cal-vis-admin');
  const ds = document.getElementById('cal-vis-desc');
  if (bP) bP.className = vis === 'public' ? 'btn btn-primary' : 'btn btn-ghost';
  if (bA) bA.className = vis === 'admin'  ? 'btn btn-primary' : 'btn btn-ghost';
  if (ds) ds.textContent = vis === 'public'
    ? 'Todos os membros v\xEAem esta tarefa.'
    : 'Apenas admins e gerentes v\xEAem esta tarefa.';
}

function _calPickColor(color, el) {
  _calModalState.color = color;
  document.querySelectorAll('#cal-color-dots div').forEach(d => d.style.borderColor = 'transparent');
  el.style.borderColor = '#fff';
}

function _calAddLink() {
  if (!_calModalState.links) _calModalState.links = [];
  _calModalState.links.push({ type: 'meet', url: '' });
  _calRenderLinksList();
}

function _calRemoveLink(idx) {
  _calModalState.links.splice(idx, 1);
  _calRenderLinksList();
}

function _calRenderLinksList() {
  const el = document.getElementById('cal-links-list');
  if (!el) return;
  const links = _calModalState.links || [];
  if (!links.length) { el.innerHTML = ''; return; }
  el.innerHTML = links.map((lk, i) => `
    <div style="display:flex;gap:6px;align-items:center">
      <select onchange="_calModalState.links[${i}].type=this.value"
        style="background:rgba(255,255,255,.05);border:1px solid var(--border);border-radius:8px;padding:8px 10px;color:var(--text-primary);font-size:12px;outline:none;font-family:inherit;flex-shrink:0">
        <option value="meet"  ${lk.type === 'meet'  ? 'selected' : ''}>📹 Meet/Zoom</option>
        <option value="maps"  ${lk.type === 'maps'  ? 'selected' : ''}>📍 Localiza\xE7\xE3o</option>
        <option value="other" ${lk.type === 'other' ? 'selected' : ''}>🔗 Outro</option>
      </select>
      <input type="url" value="${lk.url}" placeholder="https://..."
        oninput="_calModalState.links[${i}].url=this.value"
        style="flex:1;background:rgba(255,255,255,.05);border:1px solid var(--border);border-radius:8px;padding:8px 10px;color:var(--text-primary);font-size:12px;outline:none;font-family:inherit">
      <button onclick="_calRemoveLink(${i})" style="background:transparent;border:none;color:var(--text-muted);cursor:pointer;font-size:17px;padding:4px">\xD7</button>
    </div>`).join('');
}

// Legacy stubs (backward compat)
function _calSetLt() {}
function _calSetPt(type) {}
function _calFilterPt(q) {}
function _calSelectPt(id, name, el) {}

// ── Salvar / Atualizar ─────────────────────────────────────────────────────

async function _calSave() {
  const title = document.getElementById('cal-f-title')?.value.trim();
  if (!title) { addNotif('Digite o t\xEDtulo da tarefa', 'warn'); return; }
  const st = _calModalState;
  if (st.recurrence === 'weekly' && st.days.length === 0) {
    addNotif('Selecione pelo menos um dia da semana', 'warn'); return;
  }
  const btn = document.getElementById('cal-save-btn');
  if (btn) { btn.disabled = true; btn.textContent = 'Salvando...'; }

  const data = {
    title,
    description:     document.getElementById('cal-f-desc')?.value.trim() || '',
    recurrence:      st.recurrence || 'once',
    date:            st.recurrence === 'once' ? (document.getElementById('cal-f-date')?.value || _calDateStr(new Date())) : null,
    days:            st.recurrence === 'weekly' ? [...st.days] : [],
    time:            document.getElementById('cal-f-time')?.value || '',
    participants:    st.participants || [],
    // Legacy compat fields
    participantName: (st.participants || [])[0]?.name || '',
    participantType: (st.participants || [])[0]?.type || 'none',
    participantId:   (st.participants || [])[0]?.id   || '',
    links:           (st.links || []).filter(l => l.url && l.url.trim()),
    visibility:      st.visibility || 'public',
    color:           st.color || _CAL_COLORS[0],
  };

  try {
    if (_calEditingId) {
      await window.updateCalTask(_calEditingId, data);
      const idx = _calTasks.findIndex(t => t.id === _calEditingId);
      if (idx >= 0) _calTasks[idx] = { ..._calTasks[idx], ...data };
      addNotif('Tarefa atualizada!', 'success');
    } else {
      data.completedDates = [];
      data.createdBy      = window._userId || '';
      data.createdByName  = window._userName || '';
      const id = await window.saveCalTask(data);
      data.id = id;
      _calTasks.push(data);
      addNotif('Tarefa criada com sucesso!', 'success');
    }
    _calCloseModal();
    _calRender();
    _calUpdateFloating();
  } catch(e) {
    addNotif('Erro ao salvar: ' + e.message, 'error');
    if (btn) { btn.disabled = false; btn.textContent = _calEditingId ? '✔ Salvar Altera\xE7\xF5es' : '✔ Criar Tarefa'; }
  }
}

// ── Widget flutuante "Hoje" ────────────────────────────────────────────────

function _calInitFloating() {
  if (document.getElementById('cal-float-btn')) return;

  const btn = document.createElement('div');
  btn.id = 'cal-float-btn';
  btn.title = 'Tarefas de hoje';
  btn.style.cssText = 'position:fixed;bottom:24px;right:24px;z-index:1500;width:48px;height:48px;border-radius:50%;background:var(--accent);display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 4px 24px rgba(167,96,253,.55);transition:.2s;user-select:none;font-size:21px';
  btn.innerHTML = '📅<span id="cal-float-badge" style="display:none;position:absolute;top:-3px;right:-3px;background:#ef4444;color:#fff;font-size:9px;font-weight:800;border-radius:50%;min-width:16px;height:16px;padding:0 3px;align-items:center;justify-content:center;line-height:1;border:2px solid #0a0818"></span>';
  btn.onmouseover = () => { btn.style.transform = 'scale(1.12)'; btn.style.boxShadow = '0 6px 32px rgba(167,96,253,.75)'; };
  btn.onmouseout  = () => { btn.style.transform = 'scale(1)';    btn.style.boxShadow = '0 4px 24px rgba(167,96,253,.55)'; };
  btn.onclick     = _calToggleFloating;
  document.body.appendChild(btn);

  const panel = document.createElement('div');
  panel.id = 'cal-float-panel';
  panel.style.cssText = 'display:none;position:fixed;bottom:80px;right:24px;z-index:1499;width:320px;max-height:440px;background:#16162a;border:1px solid rgba(167,96,253,.35);border-radius:16px;overflow:hidden;box-shadow:0 8px 48px rgba(0,0,0,.75);flex-direction:column';
  document.body.appendChild(panel);

  _calUpdateFloating();
}

function _calToggleFloating() {
  const panel = document.getElementById('cal-float-panel');
  if (!panel) return;
  const open = panel.style.display !== 'none';
  panel.style.display = open ? 'none' : 'flex';
  if (!open) _calUpdateFloating();
}

function _calUpdateFloating() {
  const badge = document.getElementById('cal-float-badge');
  const panel = document.getElementById('cal-float-panel');
  if (!badge && !panel) return;

  const isAdmin  = _calIsAdmin();
  const today    = new Date(); today.setHours(0, 0, 0, 0);
  const todayStr = _calDateStr(today);
  const dow      = today.getDay();

  const tasks = _calTasks.filter(t => {
    if (t.visibility === 'admin' && !isAdmin) return false;
    if (t.recurrence === 'once')   return t.date === todayStr;
    if (t.recurrence === 'weekly') return (t.days || []).includes(dow);
    return false;
  }).sort((a, b) => (a.time || '99:99').localeCompare(b.time || '99:99'));

  const pending = tasks.filter(t => !_calIsDone(t, todayStr)).length;
  if (badge) { badge.textContent = pending; badge.style.display = pending > 0 ? 'flex' : 'none'; }

  if (!panel || panel.style.display === 'none') return;

  const dayName = _CAL_DAY_FULL[today.getDay()];
  const mName   = _CAL_MONTHS[today.getMonth()];

  const taskHtml = tasks.length === 0
    ? '<div style="text-align:center;padding:24px 16px;color:var(--text-muted);font-size:13px">Nenhuma tarefa hoje 🎉</div>'
    : tasks.map(t => {
        const done  = _calIsDone(t, todayStr);
        const color = t.color || '#a760fd';
        const pts   = _calGetParticipants(t);
        return `
        <div onclick="_calToggle('${t.id}','${todayStr}',${done})"
          style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;border-radius:8px;border-left:3px solid ${done ? 'var(--border)' : color};background:${done ? 'transparent' : color + '18'};margin-bottom:6px;cursor:pointer;opacity:${done ? .5 : 1};transition:.15s">
          <span style="font-size:13px;flex-shrink:0;margin-top:1px">${done ? '✅' : '⬜'}</span>
          <div style="flex:1;min-width:0">
            <div style="font-size:12px;font-weight:600;color:var(--text-primary);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;${done ? 'text-decoration:line-through' : ''}">${t.title}</div>
            <div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:3px">
              ${t.time ? `<span style="font-size:10px;color:var(--text-muted)">🕐${t.time}</span>` : ''}
              ${pts.slice(0, 2).map(p => `<span style="font-size:10px;color:var(--text-muted)">${p.type === 'client' ? '👥' : '👤'}${p.name.split(' ')[0]}</span>`).join('')}
              ${pts.length > 2 ? `<span style="font-size:10px;color:var(--text-muted)">+${pts.length - 2}</span>` : ''}
            </div>
          </div>
        </div>`;
      }).join('');

  panel.innerHTML = `
    <div style="padding:14px 16px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;background:rgba(167,96,253,.08);flex-shrink:0">
      <div>
        <div style="font-size:10px;font-weight:700;color:var(--accent);text-transform:uppercase;letter-spacing:.6px">☀️ Hoje</div>
        <div style="font-size:12px;color:var(--text-secondary)">${dayName}, ${today.getDate()} de ${mName}</div>
      </div>
      <div style="display:flex;gap:6px;align-items:center">
        <button onclick="_calOpenModal(null)" class="btn btn-primary" style="font-size:11px;padding:5px 10px">+ Nova</button>
        <button onclick="_calToggleFloating()" style="background:transparent;border:none;color:var(--text-muted);cursor:pointer;font-size:19px;line-height:1">\xD7</button>
      </div>
    </div>
    <div style="overflow-y:auto;flex:1;padding:10px">${taskHtml}</div>
    <div style="padding:10px 16px;border-top:1px solid var(--border);text-align:center;flex-shrink:0">
      <span onclick="showPage('calendario');_calToggleFloating()" style="font-size:11px;color:var(--accent);cursor:pointer;text-decoration:underline">Ver calend\xE1rio completo →</span>
    </div>`;
}

// ── Auto-init ao fazer login ───────────────────────────────────────────────

window.addEventListener('firebase-ready', () => {
  _calInitFloating();
  if (window.loadCalTasks) {
    window.loadCalTasks().then(tasks => {
      _calTasks = tasks;
      _calUpdateFloating();
    }).catch(() => {});
  }
});

