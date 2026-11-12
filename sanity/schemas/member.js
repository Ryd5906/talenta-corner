import { defineType, defineField } from 'sanity'

export const member = defineType({
  name: 'member',
  title: 'Membre de l’équipe',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nom',
      type: 'string',
      validation: (rule) => rule.required().max(60),
    }),
    defineField({
      name: 'role',
      title: 'Rôle',
      type: 'string',
      validation: (rule) => rule.required().max(60),
    }),
    defineField({
      name: 'bio',
      title: 'Courte biographie',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.max(220),
    }),
    defineField({ name: 'order', title: 'Ordre d’affichage', type: 'number', initialValue: 1 }),
  ],
  orderings: [
    { title: 'Ordre d’affichage', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
})
