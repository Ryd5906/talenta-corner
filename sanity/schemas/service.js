import { defineType, defineField } from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (rule) => rule.required().max(80),
    }),
    defineField({
      name: 'summary',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required().max(260),
    }),
    defineField({
      name: 'points',
      title: 'Points clés',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (rule) => rule.max(4),
    }),
    defineField({
      name: 'order',
      title: 'Ordre d’affichage',
      type: 'number',
      initialValue: 1,
    }),
  ],
  orderings: [
    { title: 'Ordre d’affichage', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
})
