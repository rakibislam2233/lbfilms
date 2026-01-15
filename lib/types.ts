// Common TypeScript interfaces exported for use across components

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

export interface Review {
  id: string;
  oderId: string;
  userId: string;
  rating: number;
  comment: string;
  date: string;
  published: boolean;
}

// Form data types for admin components
export interface ProjectFormData {
  title: string;
  category: Project['category'] | '';
  description: string;
  location: string;
  date: Date;
  featured: boolean;
  images: string[];
}

export interface VideoFormData {
  title: string;
  category: Video['category'] | '';
  views: number;
  duration: string;
  thumbnail: string;
  videoUrl: string;
  date: Date;
}
