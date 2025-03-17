export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  rating: number;
}

interface Category {
  category: string;
  products: Product[];
}
export const data: Category[] = [
  {
    "category": "Clothing & Fashion",
      "products": [
        {
          "id": "1",
          "name": "Net Shirt",
          "price": 100, 
          "image": "/images/Net cloth.jpg",
          "description": "Soft cotton T-shirt available in multiple colors.",
          "rating": 4.5
        },
        {
          "id": "2",
          "name": "Casual White shirt",
          "price": 22000, 
          "image": "/images/White shirt.jpg",
          "description": "Comfortable sneakers with a modern design.",
          "rating": 4.7
        },
        {
          "id": "3",
          "name": "Sneakers",
          "price": 18000, 
          "image": "/images/shoe.jpg",
          "description": "Comfortable sneakers with a modern design.",
          "rating": 4.3
        },
        {
          "id": "4",
          "name": "Eyeglasses Wear",
          "price": 25000, 
          "image": "/images/eyeglasses wear.jpg",
          "description": "Comfortable sneakers with a modern design.",
          "rating": 4.8
        },
        {
          "id": "5",
          "name": "Brown T-shirt",
          "price": 17000, 
          "image": "/images/cloth.jpg",
          "description": "Comfortable sneakers with a modern design.",
          "rating": 4.4
        },
        {
          "id": "6",
          "name": "Casual Bag",
          "price": 20000, 
          "image": "/images/bag.jpg",
          "description": "Comfortable sneakers with a modern design.",
          "rating": 4.6
        },
        {
          "id": "7",
          "name": "Mini Gown",
          "price": 21000, 
          "image": "/images/Mini Gown.jpg",
          "description": "Comfortable sneakers with a modern design.",
          "rating": 4.2
        },
        {
          "id": "8",
          "name": "Shirt",
          "price": 19500, 
          "image": "/images/shirt.jpg",
          "description": "Comfortable sneakers with a modern design.",
          "rating": 4.6
        },
        {
          "id": "9",
          "name": "Glass",
          "price": 23000, 
          "image": "/images/glass.jpg",
          "description": "Comfortable sneakers with a modern design.",
          "rating": 4.5
        },
        {
          "id": "10",
          "name": "Jacket",
          "price": 28000, 
          "image": "/images/jacket.jpg",
          "description": "Comfortable sneakers with a modern design.",
          "rating": 4.7
        }
      ]
    
    },
    {
      "category": "Electronics",
      "products": [
        {
          "id": "1",
          "name": "Hotplate",
          "price": 159992,
          "image": "/images/RingHead.webp",
          "description": "Electric hotplate for cooking with multiple temperature settings.",
          "rating": 4.5
        },
        {
          "id": "2",
          "name": "iPhone 13pro",
          "price": 719992,
          "image": "/images/Iphone 13pro.jpg",
          "description": "Latest iPhone with enhanced camera and performance.",
          "rating": 4.9
        },
        {
          "id": "3",
          "name": "Wireless EarPods",
          "price": 103992,
          "image": "/images/earpod.jpg",
          "description": "High-quality sound with noise cancellation and easy pairing.",
          "rating": 4.7
        },
        {
          "id": "4",
          "name": "Gas Cylinder",
          "price": 36792,
          "image": "/images/cylinder 3kg.jfif",
          "description": "Portable gas cylinder for cooking with safety features.",
          "rating": 4.3
        },
        {
          "id": "5",
          "name": "Smartwatch Series 7",
          "price": 279992,
          "image": "/images/electrical.jpg",
          "description": "Smartwatch with heart rate monitoring, GPS, and fitness tracking.",
          "rating": 4.8
        },
        {
          "id": "6",
          "name": "Hotplate",
          "price": 159992,
          "image": "/images/Hotplate.webp",
          "description": "Electric hotplate with adjustable temperature settings.",
          "rating": 4.6
        },
        {
          "id": "7",
          "name": "iPhone 6s+",
          "price": 639992,
          "image": "/images/iphone 6x+.jpg",
          "description": "iPhone 12 with OLED display and A14 Bionic chip.",
          "rating": 4.8
        },
        {
          "id": "8",
          "name": "Wireless EarPods Pro",
          "price": 143992,
          "image": "/images/earbud.jpg",
          "description": "Active noise cancellation and immersive sound experience.",
          "rating": 4.9
        },
        {
          "id": "9",
          "name": "Wireless EarPodpro",
          "price": 239992,
          "image": "/images/electronic.jpg",
          "description": "Smartwatch with fitness tracking, heart rate monitor, and more.",
          "rating": 4.7
        }
      ]
    },
    
    {
      "category": "Health & Beauty",
      "products": [
        {
          "id": "5",
          "name": "Moisturizer",
          "price": 14.99,
          "image": "/images/moisturizer.jpg",
          "description": "Hydrating formula for all skin types.",
          "rating": 4.4
        },
        {
          "id": "6",
          "name": "Yoga Mat",
          "price": 29.99,
          "image": "/images/yoga_mat.jpg",
          "description": "Non-slip mat for comfortable workouts.",
          "rating": 4.6
        },
        {
          "id": "7",
          "name": "Facial Cleanser",
          "price": 19.99,
          "image": "/images/facial_cleanser.jpg",
          "description": "Gentle cleanser for sensitive skin.",
          "rating": 4.7
        },
        {
          "id": "8",
          "name": "Anti-aging Serum",
          "price": 39.99,
          "image": "/images/anti-aging_serum.jpg",
          "description": "Reduce fine lines and wrinkles.",
          "rating": 4.8
        },
        {
          "id": "9",
          "name": "Shampoo & Conditioner Set",
          "price": 24.99,
          "image": "/images/shampoo_conditioner.jpg",
          "description": "Nourishing shampoo and conditioner for silky hair.",
          "rating": 4.5
        },
        {
          "id": "10",
          "name": "Nail Care Kit",
          "price": 12.99,
          "image": "/images/nail_care_kit.jpg",
          "description": "Complete set for home nail care.",
          "rating": 4.6
        },
        {
          "id": "11",
          "name": "Sunscreen SPF 50",
          "price": 18.99,
          "image": "/images/sunscreen.jpg",
          "description": "Protect your skin with high SPF sunscreen.",
          "rating": 4.4
        },
        {
          "id": "12",
          "name": "Lip Balm",
          "price": 5.99,
          "image": "/images/lip_balm.jpg",
          "description": "Moisturizing lip balm for dry lips.",
          "rating": 4.7
        },
        {
          "id": "13",
          "name": "Body Scrub",
          "price": 16.99,
          "image": "/images/body_scrub.jpg",
          "description": "Exfoliating scrub for soft skin.",
          "rating": 4.5
        },
        {
          "id": "14",
          "name": "Perfume",
          "price": 49.99,
          "image": "/images/perfume.jpg",
          "description": "Luxury fragrance for daily wear.",
          "rating": 4.9
        }
      ]
    },
    {
      "category": "Books & Stationery",
      "products": [
        {
          "id": "7",
          "name": "Novel - Fiction",
          "price": 12.99,
          "image": "/images/novel.jpg",
          "description": "Bestselling novel by a renowned author.",
          "rating": 4.3
        },
        {
          "id": "8",
          "name": "Notebook Set",
          "price": 9.99,
          "image": "/images/notebook.jpg",
          "description": "Set of 3 spiral notebooks for daily use.",
          "rating": 4.2
        },
        {
          "id": "9",
          "name": "Journal - Leather Bound",
          "price": 19.99,
          "image": "/images/journal.jpg",
          "description": "Elegant leather-bound journal for writing.",
          "rating": 4.6
        },
        {
          "id": "10",
          "name": "Ballpoint Pen Set",
          "price": 7.99,
          "image": "/images/pen_set.jpg",
          "description": "Smooth writing pen set for professionals.",
          "rating": 4.5
        },
        {
          "id": "11",
          "name": "Highlighter Pack",
          "price": 5.99,
          "image": "/images/highlighters.jpg",
          "description": "Pack of 6 vibrant highlighters for study.",
          "rating": 4.4
        },
        {
          "id": "12",
          "name": "Sticky Notes",
          "price": 3.99,
          "image": "/images/sticky_notes.jpg",
          "description": "Colorful sticky notes for reminders.",
          "rating": 4.2
        },
        {
          "id": "13",
          "name": "Desk Organizer",
          "price": 14.99,
          "image": "/images/desk_organizer.jpg",
          "description": "Keep your desk tidy with this organizer.",
          "rating": 4.7
        },
        {
          "id": "14",
          "name": "Reading Lamp",
          "price": 22.99,
          "image": "/images/reading_lamp.jpg",
          "description": "Adjustable reading lamp for the perfect lighting.",
          "rating": 4.6
        },
        {
          "id": "15",
          "name": "Art Supplies Set",
          "price": 29.99,
          "image": "/images/art_supplies.jpg",
          "description": "Complete set for artists and creators.",
          "rating": 4.8
        },
        {
          "id": "16",
          "name": "Cookbook - International Recipes",
          "price": 19.99,
          "image": "/images/cookbook.jpg",
          "description": "Explore international dishes with this cookbook.",
          "rating": 4.7
        }
      ]
    },
    {
      "category": "Food Stuff",
      "products": [
        {
          "id": "9",
          "name": "Organic Apples",
          "price": 4.99,
          "image": "/images/apples.jpg",
          "description": "Fresh and juicy organic apples.",
          "rating": 4.7
        },
        {
          "id": "10",
          "name": "Rice - 5kg",
          "price": 24.99,
          "image": "/images/rice.jpg",
          "description": "High-quality long-grain rice.",
          "rating": 4.5
        },
        {
          "id": "11",
          "name": "Fresh Tomatoes",
          "price": 3.99,
          "image": "/images/tomatoes.jpg",
          "description": "Organic fresh tomatoes for your dishes.",
          "rating": 4.6
        },
        {
          "id": "12",
          "name": "Almonds - 500g",
          "price": 9.99,
          "image": "/images/almonds.jpg",
          "description": "Premium quality almonds, perfect for snacking.",
          "rating": 4.8
        },
        {
          "id": "13",
          "name": "Olive Oil - 1L",
          "price": 11.99,
          "image": "/images/olive_oil.jpg",
          "description": "Cold-pressed extra virgin olive oil.",
          "rating": 4.7
        },
        {
          "id": "14",
          "name": "Organic Honey - 500g",
          "price": 7.99,
          "image": "/images/honey.jpg",
          "description": "Pure organic honey, harvested fresh.",
          "rating": 4.9
        },
        {
          "id": "15",
          "name": "Cereal - Oats",
          "price": 6.99,
          "image": "/images/oats.jpg",
          "description": "High-fiber oats for a healthy breakfast.",
          "rating": 4.5
        },
        {
          "id": "16",
          "name": "Frozen Chicken Breast - 1kg",
          "price": 12.99,
          "image": "/images/chicken_breast.jpg",
          "description": "High-quality, boneless chicken breasts.",
          "rating": 4.6
        },
        {
          "id": "17",
          "name": "Bag of Carrots - 1kg",
          "price": 2.99,
          "image": "/images/carrots.jpg",
          "description": "Fresh, organic carrots for your meals.",
          "rating": 4.7
        },
        {
          "id": "18",
          "name": "Milk - 1L",
          "price": 1.99,
          "image": "/images/milk.jpg",
          "description": "Fresh, whole milk for your family.",
          "rating": 4.4
        }
      ]
    }
    
]
