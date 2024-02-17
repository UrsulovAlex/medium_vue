import { defineStore } from "pinia"
import articleApi from "@/api/articale"

export const articleApiStore = defineStore("articleApiStore", {
  state: () => ({
    data: null,
    loading: null,
    error: null,
  }),

  actions: {
    getArticle(slug) {
    this.loading = true, 
    articleApi.getArticle(slug)
      .then( article => {
        this.data = article.data.article
        this.loading = false
      })
      .catch( error => this.error = error)
   }
  },
});
