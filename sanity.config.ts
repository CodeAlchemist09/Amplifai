import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schema } from './src/sanity/schema';

export default defineConfig({
  basePath: '/studio',
  projectId: 'umdzlb31',
  dataset: 'production',
  title: 'Amplifai Admin',
  schema,
  plugins: [
    structureTool(),
  ],
});
