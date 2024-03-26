import { defineCollection } from '#pruvious'
import { pageLikeCollection } from '#pruvious/standard'

const articleCollection = pageLikeCollection({
  name: 'articles',
  pathPrefix: 'article',
  allowedBlocks: ['ArticleImg', 'ArticleParagraph'],
  allowedLayouts: ['article'],
  additionalFields: {
    featuredImage: {
      type: 'image',
      options: {
        required: true,
      },
    },
    articleTitle: {
      type: 'text-area',
      options: {
        required: true,
      },
    },
  },
  additionalPublicPagesFields: ['articleTitle', 'featuredImage']
})

articleCollection.apiRoutes = { read: 'public' }

export default defineCollection(articleCollection)
