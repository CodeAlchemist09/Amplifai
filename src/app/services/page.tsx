import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import { ServicesClient } from './ServicesClient';

export const revalidate = 0; // Force dynamic rendering

const getServicesQuery = groq`*[_type == "service"] | order(order asc)`;
const getFaqsQuery = groq`*[_type == "faq"] | order(order asc)`;

export default async function Services() {
  const [servicesData, faqsData] = await Promise.all([
    client.fetch(getServicesQuery),
    client.fetch(getFaqsQuery),
  ]);

  return <ServicesClient servicesData={servicesData} faqsData={faqsData} />;
}
