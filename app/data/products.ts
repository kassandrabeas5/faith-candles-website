export interface ProductSize {
  label: string;
  price: number;
}

export interface Product {
  slug: string;
  name: string;
  price: number;
  description: string;
  shortDescription: string;
  category: string;
  rating: number;
  reviewCount: number;
  sizes: ProductSize[];
  colors: string[];
  featured: boolean;
  pickupAvailable: boolean;
  fulfillmentDays: string;
}

export interface Collection {
  slug: string;
  name: string;
  description: string;
  color: string;
  productCount: number;
}

const products: Product[] = [
  {
    slug: 'grace-and-light',
    name: 'Grace & Light',
    price: 28,
    description: 'A warm, grounding blend of amber and sandalwood designed to create a space for reflection and gratitude. Grace & Light fills any room with a soft glow and a gentle reminder that every day holds something worth celebrating.',
    shortDescription: 'Amber and sandalwood blend for reflection and gratitude.',
    category: 'Faith Collection',
    rating: 4.8,
    reviewCount: 124,
    sizes: [
      { label: '8 oz', price: 28 },
      { label: '12 oz', price: 34 },
      { label: '16 oz', price: 40 },
    ],
    colors: ['#B8956A', '#D4C5A0', '#E8DFD0', '#F5F1E8'],
    featured: true,
    pickupAvailable: true,
    fulfillmentDays: '2-4',
  },
  {
    slug: 'peaceful-retreat',
    name: 'Peaceful Retreat',
    price: 32,
    description: 'Infused with lavender and eucalyptus, Peaceful Retreat invites calm into your daily routine. Whether you light it during morning quiet time or an evening wind-down, this candle is a companion for stillness.',
    shortDescription: 'Lavender and eucalyptus for calm and stillness.',
    category: 'Comfort Collection',
    rating: 4.9,
    reviewCount: 98,
    sizes: [
      { label: '8 oz', price: 32 },
      { label: '12 oz', price: 38 },
      { label: '16 oz', price: 44 },
    ],
    colors: ['#5C6B5A', '#7A8B78', '#E8DFD0', '#F5F1E8'],
    featured: true,
    pickupAvailable: true,
    fulfillmentDays: '2-4',
  },
  {
    slug: 'morning-devotion',
    name: 'Morning Devotion',
    price: 26,
    description: 'A bright, uplifting scent of citrus and cedarwood to start your mornings with intention. Morning Devotion is crafted for those early moments of prayer, journaling, or simply being present before the day begins.',
    shortDescription: 'Citrus and cedarwood for intentional mornings.',
    category: 'Faith Collection',
    rating: 4.7,
    reviewCount: 87,
    sizes: [
      { label: '8 oz', price: 26 },
      { label: '12 oz', price: 32 },
      { label: '16 oz', price: 38 },
    ],
    colors: ['#A0755C', '#C49A7C', '#E8DFD0', '#F5F1E8'],
    featured: true,
    pickupAvailable: true,
    fulfillmentDays: '2-4',
  },
  {
    slug: 'still-waters',
    name: 'Still Waters',
    price: 30,
    description: 'Inspired by quiet coastlines, Still Waters blends sea salt and driftwood into a deeply soothing fragrance. This candle brings the peace of the ocean into your home, perfect for moments when you need to breathe deeply and let go.',
    shortDescription: 'Sea salt and driftwood for deep calm.',
    category: 'Comfort Collection',
    rating: 4.6,
    reviewCount: 73,
    sizes: [
      { label: '8 oz', price: 30 },
      { label: '12 oz', price: 36 },
      { label: '16 oz', price: 42 },
    ],
    colors: ['#6B8E9B', '#8AABB5', '#E8DFD0', '#F5F1E8'],
    featured: true,
    pickupAvailable: true,
    fulfillmentDays: '2-4',
  },
  {
    slug: 'golden-hour',
    name: 'Golden Hour',
    price: 28,
    description: 'Warm honey, vanilla, and a hint of clove come together in this seasonal favorite. Golden Hour captures the feeling of late afternoon sunlight streaming through a window — cozy, golden, and full of warmth.',
    shortDescription: 'Honey, vanilla, and clove for cozy warmth.',
    category: 'Seasonal Collection',
    rating: 4.5,
    reviewCount: 56,
    sizes: [
      { label: '8 oz', price: 28 },
      { label: '12 oz', price: 34 },
      { label: '16 oz', price: 40 },
    ],
    colors: ['#B8956A', '#D4A862', '#E8DFD0', '#F5F1E8'],
    featured: false,
    pickupAvailable: true,
    fulfillmentDays: '2-4',
  },
  {
    slug: 'ember-and-glow',
    name: 'Ember & Glow',
    price: 34,
    description: 'Rich notes of smoked birch and cinnamon bark create a bold, grounding candle for the cooler months. Ember & Glow is designed for evenings by the fireplace, filling your space with warmth and depth.',
    shortDescription: 'Smoked birch and cinnamon for bold evenings.',
    category: 'Seasonal Collection',
    rating: 4.8,
    reviewCount: 41,
    sizes: [
      { label: '8 oz', price: 34 },
      { label: '12 oz', price: 40 },
      { label: '16 oz', price: 46 },
    ],
    colors: ['#A0755C', '#3D3632', '#E8DFD0', '#F5F1E8'],
    featured: false,
    pickupAvailable: true,
    fulfillmentDays: '2-4',
  },
  {
    slug: 'restoration',
    name: 'Restoration',
    price: 30,
    description: 'A restorative blend of rosemary and white tea, Restoration is made for moments of renewal. Light it when you need a reset — after a long week, during a quiet prayer, or simply when you want your home to feel like a sanctuary.',
    shortDescription: 'Rosemary and white tea for renewal.',
    category: 'Faith Collection',
    rating: 4.7,
    reviewCount: 65,
    sizes: [
      { label: '8 oz', price: 30 },
      { label: '12 oz', price: 36 },
      { label: '16 oz', price: 42 },
    ],
    colors: ['#5C6B5A', '#4A5948', '#E8DFD0', '#F5F1E8'],
    featured: false,
    pickupAvailable: true,
    fulfillmentDays: '2-4',
  },
  {
    slug: 'haven',
    name: 'Haven',
    price: 26,
    description: 'Soft chamomile and warm cotton create a candle that feels like coming home. Haven is designed for the spaces where you feel safest — your reading nook, your bedside table, your favorite corner of the house.',
    shortDescription: 'Chamomile and cotton for comfort and home.',
    category: 'Comfort Collection',
    rating: 4.9,
    reviewCount: 92,
    sizes: [
      { label: '8 oz', price: 26 },
      { label: '12 oz', price: 32 },
      { label: '16 oz', price: 38 },
    ],
    colors: ['#3D3632', '#5A4E49', '#E8DFD0', '#F5F1E8'],
    featured: false,
    pickupAvailable: true,
    fulfillmentDays: '2-4',
  },
];

const collections: Collection[] = [
  {
    slug: 'faith-collection',
    name: 'Faith Collection',
    description: 'Candles crafted to encourage prayer, reflection, and spiritual connection.',
    color: '#B8956A',
    productCount: 3,
  },
  {
    slug: 'comfort-collection',
    name: 'Comfort Collection',
    description: 'Soothing scents designed to bring peace and warmth to your everyday moments.',
    color: '#5C6B5A',
    productCount: 3,
  },
  {
    slug: 'seasonal-collection',
    name: 'Seasonal Collection',
    description: 'Limited-edition candles inspired by the beauty of each season.',
    color: '#A0755C',
    productCount: 2,
  },
];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getRelatedProducts(currentSlug: string, limit: number = 4): Product[] {
  const current = products.find((p) => p.slug === currentSlug);
  if (!current) return products.slice(0, limit);

  const sameCategory = products.filter(
    (p) => p.category === current.category && p.slug !== currentSlug
  );
  const others = products.filter(
    (p) => p.category !== current.category && p.slug !== currentSlug
  );

  return [...sameCategory, ...others].slice(0, limit);
}

export function getCollections(): Collection[] {
  return collections;
}
