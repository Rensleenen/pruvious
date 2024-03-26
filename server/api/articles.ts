import { query } from '#pruvious/server'

export default defineEventHandler((event) => {
  return query('articles').order('createdAt', 'desc').paginate(1, 9)
})