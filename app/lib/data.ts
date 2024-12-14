import { ICategory, IProducts } from "./types";
import atta_rice from "../../public/categories/atta_rice.png";
import baby_care from "../../public/categories/baby_care.png";
import instant_foods from "../../public/categories/instant_foods.png";
import breads_and_eggs from "../../public/categories/breads_and_eggs.png";
import cleaning_essentials from "../../public/categories/cleaning_essentials.png";
import fruits_veggies from "../../public/categories/fruits_veggies.png";
import pineapple from "../../public/fruits_and_veggies/pineapple.png";
import apples from "../../public/fruits_and_veggies/apples.png";
import bananas from "../../public/fruits_and_veggies/bananas.png";
import grapes from "../../public/fruits_and_veggies/grapes.png";
import chocolates_banner from "../../public/banners/banner_3.jpg";
import fruits_banner from "../../public/banners/dairy_products_banner_4.jpg";
import right_banner_1 from "../../public/banners/right_banner_1.jpg";
import right_banner_2 from "../../public/banners/right_banner_2.jpg";

import { StaticImageData } from "next/image";

export const categoriesData: ICategory[] = [
  {
    categoryId: 1,
    categoryName: "Fruits",
    categoryImage: fruits_veggies,
  },

  {
    categoryId: 2,
    categoryName: "Baby Care",
    categoryImage: baby_care,
  },
  {
    categoryId: 3,
    categoryName: "Instant Foods",
    categoryImage: instant_foods,
  },
  {
    categoryId: 4,
    categoryName: "Breads & Eggs",
    categoryImage: breads_and_eggs,
  },
  {
    categoryId: 5,
    categoryName: "Atta Rice",
    categoryImage: atta_rice,
  },
  {
    categoryId: 6,
    categoryName: "Cleaning Essentials",
    categoryImage: cleaning_essentials,
  },
];

export const produtsData: IProducts[] = [
  {
    productId: 1,
    productName: "Pineapple",
    productImage: pineapple,
    categoryId: 1,
    inStock: true,
    cartQty: 0,
    price: 50,
    isSale: true,
  },
  {
    productId: 2,
    productName: "Apple",
    productImage: apples,
    categoryId: 1,
    inStock: true,
    cartQty: 0,
    price: 20,
    isSale: false,
  },
  {
    productId: 3,
    productName: "Bananas",
    productImage: bananas,
    categoryId: 1,
    inStock: true,
    cartQty: 0,
    price: 40,
    isSale: true,
  },
  {
    productId: 4,
    productName: "Grapes",
    productImage: grapes,
    categoryId: 1,
    inStock: true,
    cartQty: 0,
    price: 10,
    isSale: false,
  },
];

export const carouselItems: StaticImageData[] = [
  chocolates_banner,
  fruits_banner,
];

export const rightBannerItems: StaticImageData[] = [
  right_banner_1,
  right_banner_2,
];
