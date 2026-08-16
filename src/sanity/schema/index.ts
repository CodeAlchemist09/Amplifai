import { type SchemaTypeDefinition } from 'sanity';

import { portfolioType } from './portfolio';
import { testimonialType } from './testimonial';
import { siteSettingsType } from './siteSettings';
import { homePageType } from './homePage';
import { serviceType } from './service';
import { faqType } from './faq';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    siteSettingsType,
    homePageType,
    portfolioType,
    serviceType,
    testimonialType,
    faqType,
  ],
};
