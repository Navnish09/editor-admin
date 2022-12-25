
export type Column = {
  accessor: string;
  Header: string;
  width?: number;
  grow?: boolean;
}

export type Info = {
  title: string;
  subtitle: string;
}

export type Configs = {
  title?: string;
  subtitle?: string;
}

export type Props = {
  data: Record<string, any>[];
  columns: Column[];
  templates?: Record<string, Function>;
  configs?: Configs;
  loading?: boolean;
}