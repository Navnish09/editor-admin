
export interface Column {
  accessor: string;
  Header: string;
  width?: number;
  grow?: boolean;
}

export interface Info {
  title: string;
  subtitle: string;
}

export interface Configs {
  title: string;
  subtitle: string;
}

export interface Props {
  data: Record<string, any>[];
  columns: Column[];
  templates?: Record<string, Function>;
  configs?: Configs;
  loading?: boolean;
}