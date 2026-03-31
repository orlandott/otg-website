export interface Product {
  id: string;
  name: string;
  nameEs?: string;
  slug: string;
  shortDescription: string;
  shortDescriptionEs?: string;
  features: string[];
  featuresEs?: string[];
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
