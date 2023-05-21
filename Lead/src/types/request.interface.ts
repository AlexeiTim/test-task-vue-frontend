export interface IRequest {
  url: string;
  method: string;
  params?: Object;
  headers?: never;
  data?: never;
}