import { defineField, defineType } from 'sanity';

export const serviceType = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'string',
    }),
    defineField({
      name: 'icon',
      title: 'Icon Name (Lucide)',
      type: 'string',
      description: 'Valid icons: Globe, Play, Layers',
      options: {
        list: ['Globe', 'Play', 'Layers']
      }
    }),
    defineField({
      name: 'body',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'bestFor',
      title: 'Best For (List)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'includes',
      title: 'What\'s Included (List)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'color',
      title: 'Theme Color',
      type: 'string',
      options: {
        list: ['indigo', 'coral', 'lime'],
      }
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'body',
    },
  },
});
