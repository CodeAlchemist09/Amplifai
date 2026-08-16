import { defineField, defineType } from 'sanity';

export const homePageType = defineType({
  name: 'homePage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'heroEyebrow',
      title: 'Hero Eyebrow (Small text above headline)',
      type: 'string',
    }),
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'text',
    }),
    defineField({
      name: 'heroSubheadline',
      title: 'Hero Subheadline',
      type: 'text',
    }),
    defineField({
      name: 'trustStats',
      title: 'Trust Stats (Row of numbers)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', type: 'string', title: 'Value (e.g. "6+")' },
            { name: 'label', type: 'string', title: 'Label (e.g. "Industries served")' },
          ],
        },
      ],
    }),
    defineField({
      name: 'processSteps',
      title: 'How We Work (Process Steps)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'step', type: 'string', title: 'Step Number (e.g. "01")' },
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'desc', type: 'text', title: 'Description' },
          ],
        },
      ],
    }),
    defineField({
      name: 'whyUs',
      title: 'Why Amplifai Section',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { 
              name: 'icon', 
              title: 'Icon Name (Lucide)', 
              type: 'string',
              description: 'Valid icons: Zap, DollarSign, Palette, BarChart3'
            },
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'desc', type: 'text', title: 'Description' },
          ],
        },
      ],
    }),
  ],
});
