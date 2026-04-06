// Tabler Imports
import { TablerIcon } from "@tabler/icons-react";

export type ActionColumnIcon = "delete" | "detail" | "edit" | TablerIcon;

export interface ActionColumnItem<T> {
  href?: ((row: T) => string) | string;
  icon: ActionColumnIcon;
  label: string;
  onClick?: (row: T) => void;
  type?: ActionColumnType;
}

export type ActionColumnType = "danger" | "primary";

export interface BaseResponse<T> {
  data: T;
  message: string;
  pagination: PaginationProps;
  status: number;
}

export type Color =
  | "error"
  | "info"
  | "primary"
  | "secondary"
  | "success"
  | "warning";

export interface Column<T> {
  className?: string;
  flex?: number;
  header: string;
  key: keyof T;
  minWidth?: number | string;
  render?: (row: T) => React.ReactNode;
  type?: "number" | "string";
  width?: number | string;
}

export interface DialogProps {
  onClose?: () => void;
  onSubmit?: () => void;
  open: boolean;
}

export type FormActionType = "create" | "edit";

export interface Option {
  label: string;
  value: number | string;
}

export interface PaginationProps {
  page: number;
  pageSize: number;
  total: number;
}

export type ViewType = "grid" | "list";
