import { ProductResponse, ProductStack } from "@/types/product";
import { RestaurantResponse } from "@/types/restaurant";

export const RESTAURANTS: RestaurantResponse[] = [
  {
    id: 1,
    documentId: "1",
    image:
      "https://sunhouse.com.vn/pic/news/nuong-pizza-bang-noi-chien-khong-dau.jpeg",
    name: "The Chef's Table Kin Dubai",
    rating: 4.5,
  },
  {
    id: 2,
    documentId: "2",
    image:
      "https://sunhouse.com.vn/pic/news/nuong-pizza-bang-noi-chien-khong-dau.jpeg",
    name: "The Chef's Table",
    rating: 4.5,
  },
  {
    id: 3,
    documentId: "3",
    image:
      "https://sunhouse.com.vn/pic/news/nuong-pizza-bang-noi-chien-khong-dau.jpeg",
    name: "The Chef's Table",
    rating: 4,
  },
];

export const STACKS_BAG: ProductStack[] = [
  {
    _id: "1",
    name: "Pizza",
    price: 10,
    size: "Large",
    description: "Pizza",
    category: "Food",
    image:
      "https://sunhouse.com.vn/pic/news/nuong-pizza-bang-noi-chien-khong-dau.jpeg",
    __v: 0,
    quantity: 2,
  },
  {
    _id: "2",
    name: "Pizza",
    price: 220,
    size: "Large",
    description: "Pizza",
    category: "Food",
    image:
      "https://sunhouse.com.vn/pic/news/nuong-pizza-bang-noi-chien-khong-dau.jpeg",
    __v: 0,
    quantity: 1,
  },
  {
    _id: "3",
    name: "Pizza",
    price: 220,
    size: "Large",
    description: "Pizza",
    category: "Food",
    image:
      "https://sunhouse.com.vn/pic/news/nuong-pizza-bang-noi-chien-khong-dau.jpeg",
    __v: 0,
    quantity: 1,
  },
  {
    _id: "4",
    name: "Pizza",
    price: 220,
    size: "Large",
    description: "Pizza",
    category: "Food",
    image:
      "https://sunhouse.com.vn/pic/news/nuong-pizza-bang-noi-chien-khong-dau.jpeg",
    __v: 0,
    quantity: 1,
  },
  {
    _id: "5",
    name: "Pizza",
    price: 220,
    size: "Large",
    description: "Pizza",
    category: "Food",
    image:
      "https://sunhouse.com.vn/pic/news/nuong-pizza-bang-noi-chien-khong-dau.jpeg",
    __v: 0,
    quantity: 1,
  },
];
