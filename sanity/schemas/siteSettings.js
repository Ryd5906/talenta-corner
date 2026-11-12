import { defineType, defineField } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Réglages du site',
  type: 'document',
  fields: [
    defineField({
      name: 'tagline',
      title: 'Accroche',
      type: 'string',
      initialValue: 'Le talent se cultive.',
    }),
    defineField({
      name: 'intro',
      title: 'Introduction',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.max(320),
    }),
    defineField({
      name: 'email',
      title: 'E-mail de contact',
      type: 'string',
      validation: (rule) => rule.required().email(),
    }),
    defineField({
      name: 'pillars',
      title: 'Piliers (approche)',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'pillar',
          fields: [
            defineField({ name: 'title', title: 'Titre', type: 'string' }),
            defineField({ name: 'text', title: 'Texte', type: 'text', rows: 2 }),
          ],
          preview: { select: { title: 'title', subtitle: 'text' } },
        },
      ],
      validation: (rule) => rule.max(3),
    }),
  ],
})
