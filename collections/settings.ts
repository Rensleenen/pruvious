import { defineCollection } from '#pruvious'

export default defineCollection({
  name: 'settings',
  mode: 'single',
  apiRoutes: { read: 'public' },
  dashboard: {
    fieldLayout: [
      {
        Header: ['websiteLogo','headerMenu'],
        Footer: ['copyrightText', 'socialMedia'],
      },
    ],
  },
  fields: {
    websiteLogo: {
      type: 'image',
      options: {
        required: true,
      },
    },
    headerMenu: {
      type: 'repeater',
      options: {
        addLabel: 'Add menu item',
        subfields: {
          link: { type: 'link', options: { required: true } },
          label: { type: 'text', options: { required: true } },
        },
        fieldLayout: [['link', 'label']],
      },
    },
    copyrightText: {
      type: 'text',
      options: {
        required: true,
      },
    },
    socialMedia: {
      type: 'repeater',
      options: {
        addLabel: 'Add social media link',
        subfields: {
          link: { type: 'link', options: { required: true } },
          icon: { type: 'icon', options: { required: true } },
        },
        fieldLayout: [['link', 'icon']],
      },
    },
  },
})