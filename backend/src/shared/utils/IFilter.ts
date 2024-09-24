export interface IFilter {
  orderBy: string;
  order?: string;
  page: number;
  limit: number | undefined;
  populate?: any;
  populate2?: any;
  value?: object;
  select?: Array<string>;
}

export interface PaginatedDTO {
  count: number;
  next: number;
  previous: number;
  resultData: Array<any>;
}
