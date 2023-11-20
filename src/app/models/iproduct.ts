export interface Iproduct {
  id:number,
  name:string,
  description:string,
  price:number,
  imageUrl:string,
  rate:number,
  favorite:boolean,
  category:string,
  quantity?:number
}
