import { StaticImageData } from "next/image";

export interface IBanner {
  bannerPath: StaticImageData | string;
  bannerId: number;
  isVisible: boolean;
}

export interface ICategory {
  categoryName: string;
  categoryId: number;
  categoryImage: StaticImageData | string;
}

export interface IProducts {
  productId: number;
  productName: string;
  productImage: StaticImageData | string;
  categoryId: number | string;
  inStock: boolean;
  cartQty: number;
  price: number;
  isSale: boolean;
}
