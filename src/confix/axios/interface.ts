export interface HttpBaseResponse<T = unknown> {
  code: number;
  message?: string;
  status?: string;
  timestampz?: string;
  result: T[];
}

export interface PaginationResponse<T = unknown> {
  items: T;
  total: number;
  page: number;
  limit: number;
}

export interface IPagination {
  page?: number;
  limit?: number;
  orderby?: string;
  pagination?: boolean;
  enabled?: boolean;
}
