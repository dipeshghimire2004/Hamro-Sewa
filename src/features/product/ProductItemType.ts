// src/features/product/ProductItemType.ts
export interface ProductListType {
  id: number;
  name: string;
  price: number;
  discounted_price: number;
  description: string;
  image_url: string;
  rating: number;
  discount: number;
}


// src/features/product/ProductItemType.ts
export interface ProductDetailType {
  id: number;
  name: string;
  description: string;
  rating: number;
  price: number;
  stock_quantity: number;
  discount: number;
  discounted_price: number;
  category: string;
  style: string;
  type: string;
  sizes: string;
  shop_co_image: string;
  image_url: string;
}
