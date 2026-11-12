import { defineType, defineField } from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Témoignage',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      title: 'Citation',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required().max(300),
    }),
    defineField({
      name: 'author',
      title: 'Auteur',
      type: 'string',
      validation: (rule) => rule.required().max(60),
    }),
    defineField({
      name: 'company',
      title: 'Fonction et entreprise',
      type: 'string',
      validation: (rule) => rule.required().max(80),
    }),
    defineField({ name: 'order', title: 'Ordre d’affichage', type: 'number', initialValue: 1 }),
  ],
  orderings: [
    { title: 'Ordre d’affichage', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
})
