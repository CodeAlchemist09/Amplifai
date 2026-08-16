import { type SchemaTypeDefinition } from 'sanity';

import { portfolioType } from './portfolio';
import { testimonialType } from './testimonial';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [portfolioType, testimonialType],
};
