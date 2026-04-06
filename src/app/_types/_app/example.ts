export interface Example {
  category: string;
  code: string;
  description: string;
  id: string;
  images: string[];
  isActive: boolean;
  name: string;
  price: number;
  rating: number;
  status: "draft" | "published";
}
