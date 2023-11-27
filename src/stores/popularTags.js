import { defineStore } from "pinia"
import tagApi from "@/api/popularTags"

export const tagsMediumStore = defineStore("tagsMediumStore", {
  state: () => ({
    data: null,
    loading: null,
    error: null,
  }),

  actions: {
    getPopularTag() {
        this.loading = true, 
        tagApi.getPopularTags()
            .then((response) => {
                this.data = response.data.tags
                this.loading = false
            })
            .catch( error => this.error = error)
    }
  },
});
