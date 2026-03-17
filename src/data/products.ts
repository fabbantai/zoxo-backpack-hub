import tealBag from '@/assets/products/teal-laptop-bag.jpg';
import greyBag from '@/assets/products/grey-executive-bag.jpg';
import pinkBag from '@/assets/products/pink-princess-kids.jpg';
import unicornBag from '@/assets/products/unicorn-girls-bag.jpg';

export interface Product {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  price: number;
  mrp: number;
  discount: number;
  images: string[];
  category: string[];
  tags: string[];
  capacity: string;
  material: string;
  dimensions: string;
  compartments: number;
  color: string;
  colorHex: string;
  waterproof: boolean;
  laptopSleeve: string | null;
  weight: string;
  ageGroup: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  bestSeller: boolean;
  features: string[];
  specs: Record<string, string>;
  meeshoUrl: string;
}

export const products: Product[] = [
  {
    id: 'zoxo-teal-laptop-35l',
    slug: 'zoxo-35l-teal-laptop-backpack',
    title: 'ZOXO 35L Teal Green Laptop Backpack with Free Bottle – Waterproof School College Bag for Boys & Girls',
    shortTitle: 'ZOXO Teal Laptop Bag',
    description: 'Premium 35L teal green laptop backpack with waterproof coating, dedicated 15.6" laptop sleeve, and free water bottle. Perfect for school, college, and travel with padded shoulder straps for all-day comfort.',
    price: 649,
    mrp: 1499,
    discount: 57,
    images: [tealBag],
    category: ['laptop-backpacks', 'college-backpacks', 'school-bags'],
    tags: ['bestseller', 'free-bottle'],
    capacity: '35L',
    material: 'Polyester with Waterproof Coating',
    dimensions: '48 × 32 × 18 cm',
    compartments: 3,
    color: 'Teal Green',
    colorHex: '#0d9488',
    waterproof: true,
    laptopSleeve: '15.6 inch',
    weight: '650g',
    ageGroup: '12+ years',
    rating: 4.3,
    reviews: 1247,
    inStock: true,
    bestSeller: true,
    features: [
      'Dedicated 15.6" padded laptop compartment',
      'Waterproof polyester material',
      'Free 750ml water bottle included',
      'Padded & adjustable shoulder straps',
      'Side bottle holder pocket',
      'Front organizer pocket for accessories',
      'Reinforced base for durability',
      'Stylish unisex design',
    ],
    specs: {
      'Brand': 'ZOXO',
      'Capacity': '35 Litres',
      'Material': 'Polyester',
      'Waterproof': 'Yes',
      'Laptop Compartment': '15.6 inch',
      'Number of Compartments': '3',
      'Dimensions': '48 × 32 × 18 cm',
      'Weight': '650g',
      'Closure': 'Zipper',
      'Ideal For': 'School, College, Travel',
    },
    meeshoUrl: 'https://www.meesho.com/zoxo-35l-teal-green-laptop-backpack-with-free-bottle-waterproof-school-college-bag-for-boys-girls-156-inch-laptop-bag-stylish-unisex-travel-backpack/p/cqjvy7',
  },
  {
    id: 'zoxo-grey-executive-35l',
    slug: 'zoxo-35l-grey-executive-laptop-backpack',
    title: 'ZOXO 35L Grey Executive Laptop Backpack – School College Travel Office Bag with Free Bottle',
    shortTitle: 'ZOXO Grey Executive',
    description: 'Sophisticated grey melange 35L executive backpack with 3 spacious compartments and padded laptop sleeve. Ideal for professionals, college students, and daily commuters seeking style and functionality.',
    price: 699,
    mrp: 1599,
    discount: 56,
    images: [greyBag],
    category: ['laptop-backpacks', 'college-backpacks'],
    tags: ['free-bottle'],
    capacity: '35L',
    material: 'Grey Melange Polyester',
    dimensions: '50 × 33 × 20 cm',
    compartments: 3,
    color: 'Grey',
    colorHex: '#6b7280',
    waterproof: false,
    laptopSleeve: '15.6 inch',
    weight: '700g',
    ageGroup: '14+ years',
    rating: 4.1,
    reviews: 893,
    inStock: true,
    bestSeller: false,
    features: [
      '3 large compartments for organized storage',
      'Padded 15.6" laptop sleeve',
      'Free 750ml water bottle included',
      'Premium grey melange fabric',
      'Ergonomic padded back panel',
      'Adjustable padded shoulder straps',
      'Front utility pocket',
      'Durable YKK-style zippers',
    ],
    specs: {
      'Brand': 'ZOXO',
      'Capacity': '35 Litres',
      'Material': 'Polyester (Grey Melange)',
      'Waterproof': 'No (Water Resistant)',
      'Laptop Compartment': '15.6 inch',
      'Number of Compartments': '3',
      'Dimensions': '50 × 33 × 20 cm',
      'Weight': '700g',
      'Closure': 'Zipper',
      'Ideal For': 'College, Office, Travel',
    },
    meeshoUrl: 'https://www.meesho.com/zoxo-backpack-school-college-travel-office-bag-35l-laptop-backpack-grey-with-free-bottle/p/bez8fp',
  },
  {
    id: 'zoxo-pink-princess-kids',
    slug: 'zoxo-pink-princess-school-bag-kids',
    title: 'Pink Princess School Bag for Girls – Cute Cartoon Kids Backpack with Free Water Bottle',
    shortTitle: 'Pink Princess Kids',
    description: 'Adorable pink princess cartoon school bag designed for baby, toddler, nursery, LKG & UKG. Lightweight and durable with a free water bottle, perfect for little girls.',
    price: 399,
    mrp: 999,
    discount: 60,
    images: [pinkBag],
    category: ['kids-backpacks', 'school-bags'],
    tags: ['best-value', 'free-bottle'],
    capacity: '12L',
    material: 'Soft Polyester',
    dimensions: '32 × 24 × 12 cm',
    compartments: 2,
    color: 'Pink',
    colorHex: '#ec4899',
    waterproof: false,
    laptopSleeve: null,
    weight: '300g',
    ageGroup: '2-6 years',
    rating: 4.5,
    reviews: 2156,
    inStock: true,
    bestSeller: true,
    features: [
      'Cute princess cartoon design',
      'Lightweight – only 300g',
      'Free water bottle included',
      'Soft padded shoulder straps',
      'Easy-pull zippers for small hands',
      'Spacious main compartment',
      'Side mesh pocket for bottle',
      'Durable and easy to clean',
    ],
    specs: {
      'Brand': 'ZOXO',
      'Capacity': '12 Litres',
      'Material': 'Soft Polyester',
      'Waterproof': 'No',
      'Number of Compartments': '2',
      'Dimensions': '32 × 24 × 12 cm',
      'Weight': '300g',
      'Closure': 'Zipper',
      'Ideal For': 'Nursery, LKG, UKG, Primary School',
      'Age Group': '2-6 years',
    },
  },
  {
    id: 'zoxo-unicorn-girls',
    slug: 'zoxo-unicorn-printed-school-bag-girls',
    title: 'Unicorn Printed School Bag for Girls – 4 Compartment Kids Backpack with Free Water Bottle',
    shortTitle: 'Unicorn Print Girls',
    description: 'Vibrant unicorn printed school bag with 4 compartments for organized storage. Lightweight, water resistant and designed for kids aged 3-10 years. Comes with a free water bottle.',
    price: 449,
    mrp: 1099,
    discount: 59,
    images: [unicornBag],
    category: ['kids-backpacks', 'school-bags'],
    tags: ['free-bottle'],
    capacity: '18L',
    material: 'Water Resistant Polyester',
    dimensions: '38 × 28 × 14 cm',
    compartments: 4,
    color: 'Pink/Purple',
    colorHex: '#a855f7',
    waterproof: true,
    laptopSleeve: null,
    weight: '400g',
    ageGroup: '3-10 years',
    rating: 4.4,
    reviews: 1589,
    inStock: true,
    bestSeller: false,
    features: [
      'Colorful unicorn print design',
      '4 organized compartments',
      'Water resistant material',
      'Free water bottle included',
      'Lightweight – only 400g',
      'Breathable padded back panel',
      'Adjustable shoulder straps',
      'Reflective strip for safety',
    ],
    specs: {
      'Brand': 'ZOXO',
      'Capacity': '18 Litres',
      'Material': 'Water Resistant Polyester',
      'Waterproof': 'Yes (Water Resistant)',
      'Number of Compartments': '4',
      'Dimensions': '38 × 28 × 14 cm',
      'Weight': '400g',
      'Closure': 'Zipper',
      'Ideal For': 'Nursery, LKG, UKG, Primary School',
      'Age Group': '3-10 years',
    },
  },
];

export const categories = [
  { id: 'school-bags', name: 'School Bags', slug: 'school-bags' },
  { id: 'kids-backpacks', name: 'Kids Backpacks', slug: 'kids-backpacks' },
  { id: 'college-backpacks', name: 'College Backpacks', slug: 'college-backpacks' },
  { id: 'laptop-backpacks', name: 'Laptop Backpacks', slug: 'laptop-backpacks' },
];

export const cities = [
  'mumbai', 'delhi', 'bangalore', 'hyderabad', 'chennai', 'kolkata', 'pune', 'ahmedabad',
  'jaipur', 'lucknow', 'surat', 'kanpur', 'nagpur', 'indore', 'bhopal', 'patna',
  'vadodara', 'coimbatore', 'ludhiana', 'agra', 'nashik', 'ranchi', 'meerut', 'odisha',
];

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter(p => p.category.includes(categorySlug));
}

export function getProductsByPrice(maxPrice: number): Product[] {
  return products.filter(p => p.price <= maxPrice);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}
