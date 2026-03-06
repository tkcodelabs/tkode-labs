export interface PropostaCores {
  primaria: string;   // ex: '#3a4e45'
  secundaria: string; // ex: '#be955f'
  textoPrimaria?: string;   // cor do texto sobre primaria (default: white)
  textoSecundaria?: string; // cor do texto sobre secundaria (default: white)
}

export interface Feature {
  text: string;
  bold?: boolean;
}

export interface Plano {
  id: string;
  nome: string;
  subtitulo: string;
  badge?: string;
  featured?: boolean;
  corHeader: string;
  corBadge: string;
  corBadgeText: string;
  corDestaque: string;
  desenvolvimento: string;
  mensalidade: string;
  mensalidadeLabel: string;
  features: Feature[];
  simulator?: {
    precoUnitario: number;
    min: number;
    max: number;
    label: string;
  };
  nota?: string;
}

export interface ComparativoRow {
  recurso: string;
  planos: string[];
}

export interface PassoItem {
  numero: string;
  titulo: string;
  descricao: string;
  cor: string;
}

export interface SistemaArea {
  icone: string;
  titulo: string;
  descricao: string;
  features: string[];
  dark?: boolean;
}

export interface Proposta {
  slug: string;
  cliente: string;
  servico: string;
  descricao: string;
  data: string;
  badgeLabel: string;
  heroTitulo: string;
  heroSubtitulo: string;
  techStack: string[];
  cores?: PropostaCores;
  sistema?: {
    titulo: string;
    subtitulo: string;
    areas: SistemaArea[];
  };
  planos: Plano[];
  comparativo: ComparativoRow[];
  observacoes?: {
    titulo: string;
    intro: string;
    items: string[];
    rodape: string;
  };
  passos: PassoItem[];
  contato: {
    email: string;
    whatsapp?: string;
    mensagem: string;
  };
}
