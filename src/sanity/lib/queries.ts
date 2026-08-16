import { groq } from 'next-sanity';

// Fetch all portfolio items ordered by 'order' field
export const getPortfolioItemsQuery = groq`
  *[_type == "portfolio" && published == true] | order(order asc) {
    _id,
    "id": _id,
    title,
    "slug": slug.current,
    type,
    clientNameVisible,
    clientName,
    industry,
    country,
    serviceType,
    platform,
    format,
    challenge,
    approach,
    result,
    metrics,
    liveUrl,
    "coverImage": coverImage.asset->url,
    "gallery": gallery[].asset->url,
    videoUrl,
    featured,
    published,
    order
  }
`;

// Fetch featured portfolio items for the homepage
export const getFeaturedPortfolioItemsQuery = groq`
  *[_type == "portfolio" && published == true && featured == true] | order(order asc) {
    _id,
    "id": _id,
    title,
    "slug": slug.current,
    type,
    clientNameVisible,
    clientName,
    industry,
    country,
    serviceType,
    platform,
    format,
    challenge,
    approach,
    result,
    metrics,
    liveUrl,
    "coverImage": coverImage.asset->url,
    "gallery": gallery[].asset->url,
    videoUrl,
    featured,
    published,
    order
  }
`;

// Fetch a single portfolio item by slug
export const getPortfolioItemBySlugQuery = groq`
  *[_type == "portfolio" && slug.current == $slug][0] {
    _id,
    "id": _id,
    title,
    "slug": slug.current,
    type,
    clientNameVisible,
    clientName,
    industry,
    country,
    serviceType,
    platform,
    format,
    challenge,
    approach,
    result,
    metrics,
    liveUrl,
    "coverImage": coverImage.asset->url,
    "gallery": gallery[].asset->url,
    videoUrl,
    featured,
    published,
    order
  }
`;

// Fetch all testimonials
export const getTestimonialsQuery = groq`
  *[_type == "testimonial" && published == true] | order(_createdAt desc) {
    _id,
    "id": _id,
    clientName,
    industry,
    quote,
    rating,
    "relatedPortfolioId": relatedPortfolio->_id,
    published
  }
`;
