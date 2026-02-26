export interface Service {
  id: string;
  name: string;
  category: 'Bridal' | 'Hair' | 'Skin' | 'Body' | 'Nails' | 'Laser';
  description: string;
  price: string;
  duration: string;
  imageUrl: string;
}

export const services: Service[] = [
  // BRIDAL
  {
    id: 'bridal-1',
    name: 'Full Bridal Package',
    category: 'Bridal',
    description: 'Expert makeup and hair styling for your big day, featuring international premium products.',
    price: 'From PKR 45,000',
    duration: '180 mins',
    imageUrl: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800&q=85',
  },
  {
    id: 'bridal-2',
    name: 'Engagement Makeup',
    category: 'Bridal',
    description: 'Soft, luminous glam perfect for daytime or evening engagement photoshoots.',
    price: 'From PKR 25,000',
    duration: '120 mins',
    imageUrl: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&q=85',
  },
  {
    id: 'bridal-3',
    name: 'Mehndi Party Look',
    category: 'Bridal',
    description: 'Vibrant and long-lasting makeup customized to match your Mehndi attire perfectly.',
    price: 'From PKR 20,000',
    duration: '90 mins',
    imageUrl: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=800&q=85',
  },

  // HAIR
  {
    id: 'hair-1',
    name: 'Balayage & Color',
    category: 'Hair',
    description: 'Seamless balayage blends and rich dimensional color treatments.',
    price: 'From PKR 15,000',
    duration: '150 mins',
    imageUrl: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&q=85',
  },
  {
    id: 'hair-2',
    name: 'Keratin Treatment',
    category: 'Hair',
    description: 'Frizz-free, silky straight hair with our premium keratin infusions.',
    price: 'From PKR 12,000',
    duration: '180 mins',
    imageUrl: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=85',
  },
  {
    id: 'hair-3',
    name: 'Haircut & Style',
    category: 'Hair',
    description: 'Precision haircuts and signature blowouts designed for modern movement.',
    price: 'From PKR 4,500',
    duration: '60 mins',
    imageUrl: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&q=85',
  },

  // SKIN
  {
    id: 'skin-1',
    name: 'HydraFacial Deep Clean',
    category: 'Skin',
    description: 'Multi-step facial to cleanse, exfoliate, and deeply extract skin impurities.',
    price: 'From PKR 8,500',
    duration: '60 mins',
    imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=85',
  },
  {
    id: 'skin-2',
    name: 'Dermaplaning',
    category: 'Skin',
    description: 'Gentle exfoliation technique to remove peach fuzz and dead skin cells.',
    price: 'From PKR 6,000',
    duration: '45 mins',
    imageUrl: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=85',
  },
  {
    id: 'skin-3',
    name: 'Anti-Aging Facial',
    category: 'Skin',
    description: 'Plumping and lifting treatments targeting fine lines and collagen production.',
    price: 'From PKR 10,000',
    duration: '75 mins',
    imageUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=85',
  },

  // BODY
  {
    id: 'body-1',
    name: 'Luxury Body Wax',
    category: 'Body',
    description: 'Painless, premium wax formulations for smooth, hair-free skin.',
    price: 'From PKR 3,500',
    duration: '45 mins',
    imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=85',
  },
  {
    id: 'body-2',
    name: 'Mani & Pedi Combo',
    category: 'Body',
    description: 'Ultimate relaxation for hands and feet ending with a flawless polish application.',
    price: 'From PKR 4,000',
    duration: '90 mins',
    imageUrl: 'https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?w=800&q=85',
  },
  {
    id: 'body-3',
    name: 'Body Spa Ritual',
    category: 'Body',
    description: 'Aromatherapy scrubs and deep tissue massaging for complete rejuvenation.',
    price: 'From PKR 7,500',
    duration: '120 mins',
    imageUrl: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&q=85',
  },

  // NAILS
  {
    id: 'nails-1',
    name: 'Gel Nail Extensions',
    category: 'Nails',
    description: 'Durable, natural-looking extensions tailored to your desired shape.',
    price: 'From PKR 5,500',
    duration: '120 mins',
    imageUrl: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=85',
  },
  {
    id: 'nails-2',
    name: 'Nail Art Design',
    category: 'Nails',
    description: 'Intricate, hand-painted details ranging from minimal chic to bold textures.',
    price: 'From PKR 2,500',
    duration: '45 mins',
    imageUrl: 'https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?w=800&q=85',
  },
  {
    id: 'nails-3',
    name: 'Spa Manicure',
    category: 'Nails',
    description: 'Nourishing cuticle care, exfoliation, and a perfect coat of gel polish.',
    price: 'From PKR 2,000',
    duration: '60 mins',
    imageUrl: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&q=85',
  },

  // LASER
  {
    id: 'laser-1',
    name: 'Full Body Laser',
    category: 'Laser',
    description: 'FDA-approved, painless diode laser technology for permanent hair reduction.',
    price: 'From PKR 35,000',
    duration: '120 mins',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=85',
  },
  {
    id: 'laser-2',
    name: 'Underarm Laser',
    category: 'Laser',
    description: 'Targeted cooling technology for quick and comfortable underarm treatments.',
    price: 'From PKR 4,500',
    duration: '20 mins',
    imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=85',
  },
  {
    id: 'laser-3',
    name: 'Face Laser',
    category: 'Laser',
    description: 'Gentle facial hair removal safe for all skin types and sensitivities.',
    price: 'From PKR 6,000',
    duration: '30 mins',
    imageUrl: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=85',
  },
];
