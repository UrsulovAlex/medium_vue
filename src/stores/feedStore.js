import { defineStore } from "pinia";
import feedApi from "@/api/feed";

export const feedMediumStore = defineStore("feedMediumStore", {
  state: () => ({
    data: null,
    loading: null,
    error: null,
  }),

  actions: {
    getFeed(apiUrl) {
        this.loading = true, 
        feedApi.getFeed(apiUrl)
            .then((response) => {
                this.data = response.data
                this.loading = false
            })
            .catch( error => this.error = error)
    }
  },
});
