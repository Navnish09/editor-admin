import { ReactNode } from "react";

export type Column = {
  accessor: string;
  Header: string;
  width?: number;
  grow?: boolean;
  align?: "left" | "center" | "right";
  minWidth?: number;
  maxWidth?: number;
}

export type Info = {
  title: string;
  subtitle: string;
}

export type Configs = {
  title?: string;
  subtitle?: string;
  noDataMessage?: ReactNode;
}

export type TableProps = {
  data: Record<string, any>[];
  columns: Column[];
  templates?: Record<string, Function>;
  configs?: Configs;
  loading?: boolean;
  rowHover?:boolean
}