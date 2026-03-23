export interface Product {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  features: string[];
  icon: string;
  imagePath: string;
  href: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}
