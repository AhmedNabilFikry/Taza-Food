export interface Icart {
  id: string;
  cartItems: {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
    quantity: number;
  }[];
}
export interface Icartitem {

      id: 0,
      name: string,
      description: string,
      price: 0,
      category: string,
      imageUrl: string,
      quantity: 0
}
