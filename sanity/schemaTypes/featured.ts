import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'eatured',
  title: 'Featured Menu categories',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Featured Category name',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'short_description',
      title: 'Short descrition',
      type: 'string',
      validation: (Rule) => Rule.max(200)
    }),
    defineField({
      name: 'restaurant',
      title: 'Restaurants',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'restaurant' }]}]
    }),
  ],
})
