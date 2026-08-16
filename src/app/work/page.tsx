import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import { WorkClient } from './WorkClient';

const getPortfolioItemsQuery = groq`
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

export const revalidate = 0; // Force dynamic rendering so CMS changes appear instantly

export default async function WorkPage() {
  const publishedItems = await client.fetch(getPortfolioItemsQuery);

  return <WorkClient publishedItems={publishedItems} />;
}
