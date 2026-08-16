import { client } from '@/sanity/lib/client';
import { getPortfolioItemsQuery } from '@/sanity/lib/queries';
import { WorkClient } from './WorkClient';

export const revalidate = 0; // Force dynamic rendering so CMS changes appear instantly

export default async function WorkPage() {
  const publishedItems = await client.fetch(getPortfolioItemsQuery);

  return <WorkClient publishedItems={publishedItems} />;
}
