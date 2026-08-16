export type Industry =
  | 'Salon & Beauty'
  | 'Medical/Wellness'
  | 'Contractor & Home Services'
  | 'Furniture & Retail'
  | 'E-commerce'
  | 'Restaurant/Hospitality'
  | 'Other';

export type ProjectType = 'website' | 'ad_creative';

export interface Metric {
  label: string;
  value: string;
}

export interface PortfolioItem {
  id: string;
  slug: string;
  type: ProjectType;
  title: string;
  clientNameVisible: boolean;
  clientName?: string;
  industry: Industry;
  country: string;
  serviceType: string[];
  platform?: string;
  format?: string;
  aspectRatio?: string;
  challenge: string;
  approach: string;
  result: string;
  metrics: Metric[];
  liveUrl?: string;
  coverImage: string;
  gallery: string[];
  videoUrl?: string;
  featured: boolean;
  published: boolean;
  order: number;
}

export interface Testimonial {
  id: string;
  clientName: string;
  industry: Industry;
  quote: string;
  rating?: number;
  relatedPortfolioId?: string;
  published: boolean;
}

export interface ContactSubmission {
  name: string;
  businessName: string;
  email: string;
  phone?: string;
  country: string;
  industry: Industry | '';
  services: string[];
  budget: string;
  message: string;
  consent: boolean;
}
