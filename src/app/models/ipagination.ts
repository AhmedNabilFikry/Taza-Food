import { Iproduct } from "./iproduct";

export interface Ipagination {
  results: Iproduct[];
  pageindex: number;
  pagesize: number;
  count: number;
}
