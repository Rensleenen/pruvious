import { defineCollection } from '#pruvious'

export default defineCollection({
  name: 'admin',
  mode: 'single',
  apiRoutes: { read: 'public' },
  dashboard: {
    fieldLayout: [
      {
        Theme: ['primaryColor', 'textColor'],
      },
    ],
  },
  fields: {
    primaryColor: {
      type: 'text',
      options: {
        required: true,
        placeholder: '#0050da',
      },
    },
    textColor: {
        type: 'text',
        options: {
            required: true,
            placeholder: '#000000',
        },
    },
  },
})