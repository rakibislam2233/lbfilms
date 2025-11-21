// Demo Data for LB Films Photography Portfolio

// ============ USERS ============
export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user";
  avatar: string;
  phone: string;
  address: string;
  joinedDate: string;
}

export const users: User[] = [
  {
    id: "user-1",
    name: "Rakib Hassan",
    email: "rakib@example.com",
    role: "user",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    phone: "+880 1712-345678",
    address: "Gulshan, Dhaka, Bangladesh",
    joinedDate: "2024-06-15",
  },
  {
    id: "user-2",
    name: "Fatima Ahmed",
    email: "fatima@example.com",
    role: "user",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    phone: "+880 1812-567890",
    address: "Dhanmondi, Dhaka, Bangladesh",
    joinedDate: "2024-08-22",
  },
  {
    id: "user-3",
    name: "Arif Khan",
    email: "arif@example.com",
    role: "user",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    phone: "+880 1912-234567",
    address: "Uttara, Dhaka, Bangladesh",
    joinedDate: "2024-09-10",
  },
  {
    id: "admin-1",
    name: "LB Films Admin",
    email: "admin@lbfilms.com",
    role: "admin",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150",
    phone: "+880 1234-567890",
    address: "Banani, Dhaka, Bangladesh",
    joinedDate: "2023-01-01",
  },
];

// ============ PROJECTS/GALLERY ============
export interface Project {
  id: string;
  title: string;
  category:
    | "wedding"
    | "event"
    | "corporate"
    | "portrait"
    | "product"
    | "birthday";
  images: string[];
  description: string;
  date: string;
  featured: boolean;
  location: string;
}

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Romantic Garden Wedding",
    category: "wedding",
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800",
    ],
    description:
      "A beautiful garden wedding ceremony with stunning floral arrangements",
    date: "2024-11-15",
    featured: true,
    location: "Radisson Blu, Dhaka",
  },
  {
    id: "proj-2",
    title: "Corporate Annual Gala",
    category: "corporate",
    images: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800",
    ],
    description:
      "Annual corporate gala event photography with executive portraits",
    date: "2024-10-28",
    featured: true,
    location: "Pan Pacific Sonargaon",
  },
  {
    id: "proj-3",
    title: "Elegant Bridal Portrait",
    category: "portrait",
    images: [
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800",
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=800",
    ],
    description: "Stunning bridal portrait session with traditional attire",
    date: "2024-10-20",
    featured: false,
    location: "Studio LB Films",
  },
  {
    id: "proj-4",
    title: "Tech Product Launch",
    category: "product",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
    ],
    description: "Product photography for tech gadget launch campaign",
    date: "2024-10-15",
    featured: false,
    location: "Studio LB Films",
  },
  {
    id: "proj-5",
    title: "Traditional Bengali Wedding",
    category: "wedding",
    images: [
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800",
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800",
    ],
    description: "Complete coverage of traditional Bengali wedding ceremonies",
    date: "2024-09-30",
    featured: true,
    location: "Le Méridien Dhaka",
  },
  {
    id: "proj-6",
    title: "Birthday Celebration",
    category: "birthday",
    images: [
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800",
      "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=800",
    ],
    description: "Colorful birthday party photography with candid moments",
    date: "2024-09-25",
    featured: false,
    location: "Private Residence, Gulshan",
  },
  {
    id: "proj-7",
    title: "Fashion Portrait Series",
    category: "portrait",
    images: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800",
    ],
    description: "High-fashion portrait series for modeling portfolio",
    date: "2024-09-18",
    featured: true,
    location: "Studio LB Films",
  },
  {
    id: "proj-8",
    title: "Music Concert Event",
    category: "event",
    images: [
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800",
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800",
    ],
    description: "Live concert photography with dynamic stage lighting",
    date: "2024-09-10",
    featured: false,
    location: "Army Stadium, Dhaka",
  },
  {
    id: "proj-9",
    title: "E-commerce Product Shoot",
    category: "product",
    images: [
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
    ],
    description: "Professional product photography for online store",
    date: "2024-09-05",
    featured: false,
    location: "Studio LB Films",
  },
  {
    id: "proj-10",
    title: "Engagement Ceremony",
    category: "event",
    images: [
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800",
      "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=800",
    ],
    description: "Intimate engagement ceremony with family and friends",
    date: "2024-08-28",
    featured: false,
    location: "Sheraton Dhaka",
  },
  {
    id: "proj-11",
    title: "Corporate Headshots",
    category: "corporate",
    images: [
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800",
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800",
    ],
    description: "Professional headshots for corporate team",
    date: "2024-08-20",
    featured: false,
    location: "Client Office, Motijheel",
  },
  {
    id: "proj-12",
    title: "Destination Wedding",
    category: "wedding",
    images: [
      "https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?w=800",
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=800",
    ],
    description: "Beach destination wedding in Cox's Bazar",
    date: "2024-08-15",
    featured: true,
    location: "Cox's Bazar",
  },
  {
    id: "proj-13",
    title: "Family Portrait Session",
    category: "portrait",
    images: [
      "https://images.unsplash.com/photo-1606567595334-d39972c85dfd?w=800",
    ],
    description: "Heartwarming family portrait session",
    date: "2024-08-10",
    featured: false,
    location: "Botanical Garden, Dhaka",
  },
  {
    id: "proj-14",
    title: "Award Ceremony",
    category: "corporate",
    images: [
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800",
    ],
    description: "Annual award ceremony and recognition event",
    date: "2024-08-05",
    featured: false,
    location: "Westin Dhaka",
  },
  {
    id: "proj-15",
    title: "First Birthday Party",
    category: "birthday",
    images: [
      "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=800",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800",
    ],
    description: "Magical first birthday celebration",
    date: "2024-07-28",
    featured: false,
    location: "Private Residence, Banani",
  },
];

// ============ VIDEOS ============
export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
  category: "wedding" | "event" | "corporate" | "cinematic" | "trailer";
  views: number;
  date: string;
  duration: string;
}

export const videos: Video[] = [
  {
    id: "vid-1",
    title: "Romantic Wedding Film - Rakib & Fatima",
    thumbnail:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "wedding",
    views: 15420,
    date: "2024-11-10",
    duration: "8:45",
  },
  {
    id: "vid-2",
    title: "Corporate Event Highlights 2024",
    thumbnail:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "corporate",
    views: 8750,
    date: "2024-10-25",
    duration: "5:30",
  },
  {
    id: "vid-3",
    title: "Cinematic Pre-Wedding Shoot",
    thumbnail:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "cinematic",
    views: 22300,
    date: "2024-10-15",
    duration: "4:20",
  },
  {
    id: "vid-4",
    title: "Wedding Trailer - Traditional Bengali",
    thumbnail:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "trailer",
    views: 31500,
    date: "2024-10-01",
    duration: "2:45",
  },
  {
    id: "vid-5",
    title: "Concert Event Coverage",
    thumbnail:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "event",
    views: 12800,
    date: "2024-09-20",
    duration: "6:15",
  },
  {
    id: "vid-6",
    title: "Destination Wedding - Cox's Bazar",
    thumbnail:
      "https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?w=800",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "wedding",
    views: 45200,
    date: "2024-09-10",
    duration: "12:30",
  },
  {
    id: "vid-7",
    title: "Brand Commercial - Tech Launch",
    thumbnail:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "corporate",
    views: 9500,
    date: "2024-09-01",
    duration: "1:30",
  },
  {
    id: "vid-8",
    title: "Engagement Ceremony Highlights",
    thumbnail:
      "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=800",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "event",
    views: 7800,
    date: "2024-08-25",
    duration: "3:45",
  },
  {
    id: "vid-9",
    title: "Cinematic Wedding Film - Royal Theme",
    thumbnail:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "cinematic",
    views: 28900,
    date: "2024-08-15",
    duration: "10:20",
  },
  {
    id: "vid-10",
    title: "Wedding Teaser - Modern Love Story",
    thumbnail:
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "trailer",
    views: 18700,
    date: "2024-08-05",
    duration: "1:45",
  },
];

// ============ PACKAGES ============
export interface Package {
  id: string;
  name: string;
  price: number;
  features: string[];
  description: string;
  popular: boolean;
  category: "wedding" | "event" | "corporate" | "portrait" | "product";
  image: string;
  duration: string;
}

export const packages: Package[] = [
  {
    id: "pkg-1",
    name: "1 Day Wedding Shoot",
    price: 25000,
    features: [
      "1 Senior Photographer",
      "1 Assistant Photographer",
      "Unlimited Clicks",
      "8 Hours Coverage",
      "200 Edited Images",
      "Online Gallery",
    ],
    description:
      "Perfect for intimate wedding ceremonies with full day coverage",
    popular: false,
    category: "wedding",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800",
    duration: "8 Hours",
  },
  {
    id: "pkg-2",
    name: "Premium Wedding Package",
    price: 75000,
    features: [
      "2 Senior Photographers",
      "2 Assistant Photographers",
      "1 Videographer",
      "Unlimited Clicks",
      "2 Days Full Coverage",
      "500+ Edited Images",
      "Cinematic Wedding Film",
      "Drone Coverage",
      "Premium Photo Album",
    ],
    description:
      "Complete wedding coverage with photos, video, and drone shots",
    popular: true,
    category: "wedding",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800",
    duration: "2 Days",
  },
  {
    id: "pkg-3",
    name: "Corporate Event",
    price: 35000,
    features: [
      "1 Senior Photographer",
      "1 Videographer",
      "6 Hours Coverage",
      "150 Edited Images",
      "Event Highlights Video",
      "Same Day Preview",
    ],
    description: "Professional coverage for corporate events and conferences",
    popular: false,
    category: "corporate",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
    duration: "6 Hours",
  },
  {
    id: "pkg-4",
    name: "Portrait Session",
    price: 8000,
    features: [
      "1 Senior Photographer",
      "2 Hours Session",
      "2 Outfit Changes",
      "30 Edited Images",
      "Studio or Outdoor",
      "Digital Delivery",
    ],
    description:
      "Individual or couple portrait session with professional editing",
    popular: false,
    category: "portrait",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
    duration: "2 Hours",
  },
  {
    id: "pkg-5",
    name: "Birthday Celebration",
    price: 15000,
    features: [
      "1 Photographer",
      "1 Videographer",
      "4 Hours Coverage",
      "100 Edited Images",
      "Birthday Highlights Video",
      "Candid Moments",
    ],
    description: "Capture every moment of your special birthday celebration",
    popular: true,
    category: "event",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800",
    duration: "4 Hours",
  },
  {
    id: "pkg-6",
    name: "Product Photography",
    price: 5000,
    features: [
      "1 Senior Photographer",
      "Studio Setup",
      "Up to 20 Products",
      "White Background",
      "Basic Retouching",
      "E-commerce Ready",
    ],
    description:
      "Professional product photography for e-commerce and marketing",
    popular: false,
    category: "product",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
    duration: "3 Hours",
  },
];

// ============ ORDERS ============
export interface Order {
  id: string;
  oderId: string;
  userId: string;
  packageId: string;
  status: "pending" | "confirmed" | "in-progress" | "completed" | "cancelled";
  date: string;
  eventDate: string;
  location: string;
  totalPrice: number;
  notes: string;
  paymentStatus: "pending" | "partial" | "paid";
}

export const orders: Order[] = [
  {
    id: "order-1",
    oderId: "LBF-2024-001",
    userId: "user-1",
    packageId: "pkg-2",
    status: "completed",
    date: "2024-10-01",
    eventDate: "2024-11-15",
    location: "Radisson Blu, Dhaka",
    totalPrice: 75000,
    notes: "Traditional Bengali wedding, need drone shots of venue",
    paymentStatus: "paid",
  },
  {
    id: "order-2",
    oderId: "LBF-2024-002",
    userId: "user-2",
    packageId: "pkg-1",
    status: "in-progress",
    date: "2024-10-15",
    eventDate: "2024-12-20",
    location: "Le Méridien Dhaka",
    totalPrice: 25000,
    notes: "Small family wedding, focus on candid moments",
    paymentStatus: "partial",
  },
  {
    id: "order-3",
    oderId: "LBF-2024-003",
    userId: "user-3",
    packageId: "pkg-3",
    status: "confirmed",
    date: "2024-10-20",
    eventDate: "2024-12-05",
    location: "Pan Pacific Sonargaon",
    totalPrice: 35000,
    notes: "Annual company conference, need headshots of speakers",
    paymentStatus: "pending",
  },
  {
    id: "order-4",
    oderId: "LBF-2024-004",
    userId: "user-1",
    packageId: "pkg-4",
    status: "completed",
    date: "2024-09-10",
    eventDate: "2024-09-25",
    location: "Studio LB Films",
    totalPrice: 8000,
    notes: "Professional headshots for LinkedIn",
    paymentStatus: "paid",
  },
  {
    id: "order-5",
    oderId: "LBF-2024-005",
    userId: "user-2",
    packageId: "pkg-5",
    status: "completed",
    date: "2024-08-20",
    eventDate: "2024-09-15",
    location: "Private Residence, Gulshan",
    totalPrice: 15000,
    notes: "First birthday party, unicorn theme",
    paymentStatus: "paid",
  },
  {
    id: "order-6",
    oderId: "LBF-2024-006",
    userId: "user-3",
    packageId: "pkg-6",
    status: "completed",
    date: "2024-08-01",
    eventDate: "2024-08-10",
    location: "Studio LB Films",
    totalPrice: 5000,
    notes: "E-commerce product shoot for clothing brand",
    paymentStatus: "paid",
  },
  {
    id: "order-7",
    oderId: "LBF-2024-007",
    userId: "user-1",
    packageId: "pkg-2",
    status: "pending",
    date: "2024-11-01",
    eventDate: "2025-01-10",
    location: "Cox's Bazar",
    totalPrice: 75000,
    notes: "Destination wedding by the beach",
    paymentStatus: "pending",
  },
  {
    id: "order-8",
    oderId: "LBF-2024-008",
    userId: "user-2",
    packageId: "pkg-3",
    status: "cancelled",
    date: "2024-07-15",
    eventDate: "2024-08-01",
    location: "Westin Dhaka",
    totalPrice: 35000,
    notes: "Event postponed",
    paymentStatus: "pending",
  },
  {
    id: "order-9",
    oderId: "LBF-2024-009",
    userId: "user-3",
    packageId: "pkg-4",
    status: "confirmed",
    date: "2024-11-05",
    eventDate: "2024-11-25",
    location: "Botanical Garden, Dhaka",
    totalPrice: 8000,
    notes: "Outdoor couple portrait session",
    paymentStatus: "partial",
  },
  {
    id: "order-10",
    oderId: "LBF-2024-010",
    userId: "user-1",
    packageId: "pkg-5",
    status: "in-progress",
    date: "2024-11-10",
    eventDate: "2024-12-01",
    location: "Private Residence, Banani",
    totalPrice: 15000,
    notes: "Kid's birthday party with magic show",
    paymentStatus: "paid",
  },
  {
    id: "order-11",
    oderId: "LBF-2024-011",
    userId: "user-2",
    packageId: "pkg-1",
    status: "pending",
    date: "2024-11-12",
    eventDate: "2025-02-14",
    location: "Sheraton Dhaka",
    totalPrice: 25000,
    notes: "Valentine's Day wedding",
    paymentStatus: "pending",
  },
  {
    id: "order-12",
    oderId: "LBF-2024-012",
    userId: "user-3",
    packageId: "pkg-6",
    status: "confirmed",
    date: "2024-11-15",
    eventDate: "2024-11-30",
    location: "Studio LB Films",
    totalPrice: 5000,
    notes: "Jewelry product photography",
    paymentStatus: "partial",
  },
];

// ============ REVIEWS ============
export interface Review {
  id: string;
  oderId: string;
  userId: string;
  rating: number;
  comment: string;
  date: string;
  published: boolean;
}

export const reviews: Review[] = [
  {
    id: "rev-1",
    oderId: "order-1",
    userId: "user-1",
    rating: 5,
    comment:
      "Absolutely stunning work! LB Films captured every precious moment of our wedding. The team was professional, creative, and made us feel so comfortable. The photos and video exceeded our expectations!",
    date: "2024-11-20",
    published: true,
  },
  {
    id: "rev-2",
    oderId: "order-4",
    userId: "user-1",
    rating: 5,
    comment:
      "Great portrait session! The photographer knew exactly how to capture my best angles. Very happy with the results for my professional profile.",
    date: "2024-10-01",
    published: true,
  },
  {
    id: "rev-3",
    oderId: "order-5",
    userId: "user-2",
    rating: 5,
    comment:
      "They made my daughter's first birthday so special! The candid shots were amazing and the video montage brought tears to our eyes. Highly recommend!",
    date: "2024-09-20",
    published: true,
  },
  {
    id: "rev-4",
    oderId: "order-6",
    userId: "user-3",
    rating: 4,
    comment:
      "Professional product photography for my e-commerce store. Quick turnaround and great quality. Will definitely use again for future shoots.",
    date: "2024-08-15",
    published: true,
  },
  {
    id: "rev-5",
    oderId: "order-1",
    userId: "user-1",
    rating: 5,
    comment:
      "The drone footage of our wedding venue was breathtaking! LB Films went above and beyond to capture unique perspectives.",
    date: "2024-11-18",
    published: true,
  },
  {
    id: "rev-6",
    oderId: "order-3",
    userId: "user-3",
    rating: 4,
    comment:
      "Excellent corporate event coverage. The team was discreet yet captured all the important moments. The same-day preview was a nice touch.",
    date: "2024-12-06",
    published: false,
  },
  {
    id: "rev-7",
    oderId: "order-5",
    userId: "user-2",
    rating: 5,
    comment:
      "The best decision we made was hiring LB Films for our party! Every guest commented on how professional the team was.",
    date: "2024-09-18",
    published: true,
  },
  {
    id: "rev-8",
    oderId: "order-4",
    userId: "user-1",
    rating: 5,
    comment:
      "Second time using LB Films and they never disappoint. Consistent quality and wonderful service.",
    date: "2024-10-05",
    published: true,
  },
  {
    id: "rev-9",
    oderId: "order-6",
    userId: "user-3",
    rating: 5,
    comment:
      "Amazing attention to detail in the product shots. The images look exactly like what I envisioned for my brand.",
    date: "2024-08-20",
    published: true,
  },
  {
    id: "rev-10",
    oderId: "order-2",
    userId: "user-2",
    rating: 4,
    comment:
      "Looking forward to seeing the final results! The preview shots look amazing already.",
    date: "2024-12-22",
    published: false,
  },
];

// ============ HELPER FUNCTIONS ============
export const getUserById = (id: string) => users.find((u) => u.id === id);
export const getPackageById = (id: string) => packages.find((p) => p.id === id);
export const getOrderById = (id: string) => orders.find((o) => o.id === id);
export const getProjectById = (id: string) => projects.find((p) => p.id === id);
export const getVideoById = (id: string) => videos.find((v) => v.id === id);
export const getReviewById = (id: string) => reviews.find((r) => r.id === id);

export const getOrdersByUserId = (userId: string) =>
  orders.filter((o) => o.userId === userId);
export const getReviewsByUserId = (userId: string) =>
  reviews.filter((r) => r.userId === userId);
export const getPublishedReviews = () => reviews.filter((r) => r.published);
export const getFeaturedProjects = () => projects.filter((p) => p.featured);

// Stats for admin dashboard
export const getStats = () => ({
  totalProjects: projects.length,
  totalVideos: videos.length,
  totalOrders: orders.length,
  totalUsers: users.filter((u) => u.role === "user").length,
  completedOrders: orders.filter((o) => o.status === "completed").length,
  pendingOrders: orders.filter((o) => o.status === "pending").length,
  totalRevenue: orders
    .filter((o) => o.paymentStatus === "paid")
    .reduce((acc, o) => acc + o.totalPrice, 0),
  publishedReviews: reviews.filter((r) => r.published).length,
});
