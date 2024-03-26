import { defineStore } from 'pinia';
import type { Image } from '#pruvious';

export const useArticlesStore = defineStore('articles', {
  state: () => {
      let storeState = {
          data: null as ArticleCollectionResponse | null,
          isLoading: false,
          error: null as any
      }
      return storeState
  },
  actions: {
      async fetchArticles() {
          if (this.data || this.isLoading) {
              console.log('Retrieving data...')
              return
          }

          this.isLoading = true

          try {
              console.log('Fetching new data...')
              
              const data: any = await $fetch('/api/articles')
              // const uploads: any = 
              
              this.data = data
          } catch (error: any) {
              this.error = error
          } finally {
              this.isLoading = false
          }
      }
  }
})

export type ArticleCollectionResponse = {
  currentPage: number,
  lastPage: number,
  perPage: number,
  records: Article[],
  total: number
}

export type Article = {
  id: number,
  language: string,
  translations: string,
  path: string,
  public: Boolean,
  title: string,
  description: string,
  visible: Boolean,
  layout: string,
  blocks: Block[],
  featuredImage: { uploadId: number, alt: string, src: any },
  name: string,
  draftToken: string,
  baseTitle: string,
  sharingImage: any,
  metaTags: any[],
  publishDate: Date | number | null,
  createdAt: Date | number | null,
  updatedAt: Date | number | null
}

type Block = {
  name: string,
  fields: {},
  slots: {}
}