interface DataItem {
    id: number;
    image: string;
    h1: string;
  }
 
 
 export interface DataCategory {
   id: number; // Unique identifier for each category
   image: string; // Path to the image
   h1: string; // Title of the category
   rating: number; // Rating out of 5
 }
 
 
  export const HeroDataBase: DataItem[] = [
    {
      id: 1,
      image: "/Images/heroslide3.jpg", // Make sure these paths are correct
      h1: "Welcome to Our Store",
    },
    {
      id: 2,
      image: "/Images/heroslide1.jpg",
      h1: "Shop the Latest Trends",
    },
    {
      id: 3,
      image: "/Images/heroslide2.jpg",
      h1: "Find What You Love",
    },
  ];
 
  
 
  export const HeroCategory: DataCategory[] = [
    {
      id: 1,
      image: "/Images/clothes.jpg",
      h1: "Clothing & Fashion",
      rating: 4.5,
    },
    {
      id: 2,
      image: "/Images/electronic.jpg",
      h1: "Electronics",
      rating: 3.8,
    },
    {
      id: 3,
      image: "/Images/books.jpg",
      h1: "Books & Stationery",
      rating: 4,
    },
    {
      id: 4,
      image: "/Images/beauty.jpg",
      h1: "Health & Beauty",
      rating: 5,
    },
    {
      id: 5,
      image: "/Images/food.jpg",
      h1: "Food Stuff",
      rating: 3.2,
    },
  ];
  interface HeroProduct {
   id: number;
   name: string;
   ratings: number;
   price: number; // Price in Naira
   image: string; // URL of the product image
   color: string; // Product color
 }
 
 // Array of HeroProduct objects
 export const heroProducts: HeroProduct[] = [
   {
     id: 1,
     name: "Smart Watch",
     ratings: 4,
     price: 250000,
     image: "/Images/smartwatch.jpg",
     color: "Black",
   },
   {
     id: 2,
     name: "Sneakers",
     ratings: 3,
     price: 150000,
     image: "/Images/shoe.jpg",
     color: "White",
   },
   {
     id: 3,
     name: "Glasses",
     ratings: 4.2,
     price: 25000,
     image: "/Images/glass.jpg",
     color: "Blue",
   },
   {
     id: 4,
     name: "Makeup",
     ratings: 3,
     price: 45000,
     image: "/Images/makeup.jpg",
     color: "Pink",
   },
   {
     id: 5,
     name: "Bag",
     ratings: 5,
     price: 120000,
     image: "/Images/bag.jpg",
     color: "Brown",
   },
   {
     id: 6,
     name: "Shirt",
     ratings: 5,
     price: 120000,
     image: "/Images/shirt.jpg",
     color: "White",
   },
   {
     id: 7,
     name: "Gown",
     ratings: 4,
     price: 120000,
     image: "/Images/gown.jpg",
     color: "Red",
   },
   {
     id: 8,
     name: "Hills",
     ratings: 5,
     price: 120000,
     image: "/Images/Hill.jpg",
     color: "Black",
   },
 ];