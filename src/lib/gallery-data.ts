export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'Bridal' | 'Hair' | 'Skin' | 'Nails' | 'Makeup' | 'Spa';
  aspect: 'tall' | 'wide' | 'square';
}

export const galleryImages: GalleryImage[] = [
  { id: 'g1',  src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80', alt: 'Bridal glam close-up', category: 'Bridal', aspect: 'tall' },
  { id: 'g2',  src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80', alt: 'Blonde balayage waves', category: 'Hair', aspect: 'square' },
  { id: 'g3',  src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80', alt: 'HydraFacial session', category: 'Skin', aspect: 'wide' },
  { id: 'g4',  src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80', alt: 'Gel nail extensions', category: 'Nails', aspect: 'tall' },
  { id: 'g5',  src: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&q=80', alt: 'Engagement makeup look', category: 'Makeup', aspect: 'square' },
  { id: 'g6',  src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80', alt: 'Luxury spa ritual', category: 'Spa', aspect: 'wide' },
  { id: 'g7',  src: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=800&q=80', alt: 'Mehndi bridal look', category: 'Bridal', aspect: 'square' },
  { id: 'g8',  src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80', alt: 'Keratin treatment result', category: 'Hair', aspect: 'tall' },
  { id: 'g9',  src: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80', alt: 'Dermaplaning treatment', category: 'Skin', aspect: 'square' },
  { id: 'g10', src: 'https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?w=800&q=80', alt: 'Intricate nail art', category: 'Nails', aspect: 'wide' },
  { id: 'g11', src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80', alt: 'Anti-aging facial glow', category: 'Skin', aspect: 'tall' },
  { id: 'g12', src: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&q=80', alt: 'Precision haircut style', category: 'Hair', aspect: 'square' },
  { id: 'g13', src: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&q=80', alt: 'Body spa treatment', category: 'Spa', aspect: 'tall' },
  { id: 'g14', src: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=800&q=80', alt: 'Soft glam makeup', category: 'Makeup', aspect: 'square' },
  { id: 'g15', src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80', alt: 'Full bridal editorial', category: 'Bridal', aspect: 'wide' },
  { id: 'g16', src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80', alt: 'Deep clean facial', category: 'Skin', aspect: 'square' },
  { id: 'g17', src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80', alt: 'Spa manicure finish', category: 'Nails', aspect: 'tall' },
  { id: 'g18', src: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&q=80', alt: 'Evening makeup glam', category: 'Makeup', aspect: 'square' },
  { id: 'g19', src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80', alt: 'Color treatment result', category: 'Hair', aspect: 'wide' },
  { id: 'g20', src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80', alt: 'Relaxation spa room', category: 'Spa', aspect: 'tall' },
  { id: 'g21', src: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=800&q=80', alt: 'Bridal walima look', category: 'Bridal', aspect: 'square' },
  { id: 'g22', src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80', alt: 'Blowout styling', category: 'Hair', aspect: 'tall' },
  { id: 'g23', src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80', alt: 'Brightening facial', category: 'Skin', aspect: 'wide' },
  { id: 'g24', src: 'https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?w=800&q=80', alt: 'Custom nail design', category: 'Nails', aspect: 'square' },
];

export const GALLERY_CATEGORIES = ['All', 'Bridal', 'Hair', 'Skin', 'Nails', 'Makeup', 'Spa'] as const;
