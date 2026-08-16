import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import { HomeClient } from './HomeClient';

export const revalidate = 0; // Force dynamic rendering so CMS changes appear instantly

const getHomePageQuery = groq`*[_type == "homePage"][0]`;
const getServicesQuery = groq`*[_type == "service"] | order(order asc)`;
const getFeaturedPortfolioItemsQuery = groq`
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
const getTestimonialsQuery = groq`
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

export default async function Home() {
  const [homePageData, servicesData, portfolioData, testimonialsData] = await Promise.all([
    client.fetch(getHomePageQuery),
    client.fetch(getServicesQuery),
    client.fetch(getFeaturedPortfolioItemsQuery),
    client.fetch(getTestimonialsQuery),
  ]);

  return (
    <HomeClient 
      homePageData={homePageData}
      servicesData={servicesData}
      portfolioData={portfolioData}
      testimonialsData={testimonialsData}
    />
  );
}
