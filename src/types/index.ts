export interface ProductFAQ {
  q: string;
  a: string;
}

export interface ProductDetail {
  slug: string;
  name: string;
  headline: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  galleryImages: string[];
  features: { title: string; body: string }[];
  specs: string[];
  faqs: ProductFAQ[];
  relatedSlugs: string[];
}

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
