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
      price: string;
      discount: string;
      discounted_price: string | null;
      image_url: string;
      stock_quantity: number;
      style_name: string;
      sizes: string[];
    
}


export interface productReviewType{
  id?:number;
  product_id:number;
  rating:Float32Array;
  username?:string;
  comment:string;
  user_id:string;
}

  // id: number;
  // name: string;
  // description: string;
  // rating: number;
  // price: number;
  // stock_quantity: number;
  // discount: number;
  // discounted_price: number;
  // category: string;
  // style: string;
  // type: string;
  // sizes: string;
  // shop_co_image: string;
  // image_url: string;

  
    // id:number;
    // name:string;
    // description:string;
    // rating:number;
    // price:number;
    // stock_quantity:number;
    // discount:number;
    // discounted_price:number;
    // category:string;
    // style:string;
    // type:string;
    // size?:{value:string}[];
    // sizes?:{value:string[]};
    // // shop_co_image:string;
    // // shop_co_image:FileList;
    // image_url:string;
    // style_name?:string;
