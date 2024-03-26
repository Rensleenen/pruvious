import { defineStore } from 'pinia';
import type { Image } from '#pruvious';

export const useUploadsStore = defineStore('uploads', {
  state: () => {
      let storeState = {
          data: null as UploadResponse[] | null,
          isLoading: false,
          error: null as any
      }
      return storeState
  },
  actions: {
      async fetchUploads() {
          if (this.data || this.isLoading) {
              console.log('Retrieving data...')
              return
          }

          this.isLoading = true

          try {
              console.log('Fetching new data...')
              
              const data: any = await $fetch('/api/uploads')
              
              this.data = data
          } catch (error: any) {
              this.error = error
          } finally {
              this.isLoading = false
          }
      }
  }
})

export type UploadResponse = {
  id: number,
  language: string,
  translations: string,
  directory: string,
  filename: string,
  type: string,
  size: number,
  width: number,
  height: number,
  description: string,
  createdAt: Date,
  updatedAt: Date,
}

