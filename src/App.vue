<script>
import NavBar from "./components/NavBar.vue";
import Cards from "./components/Cards.vue";

import { store } from "./store";
import axios from "axios";

export default {
  components: {
    NavBar,
    Cards,
  },
  data() {
    return {
      store,
      popular: "https://api.themoviedb.org/3/trending/all/week",
      apiLang: "it-IT",
      apiUrlFilm: "https://api.themoviedb.org/3/search/movie?",
      apiUrlTv: "https://api.themoviedb.org/3/search/tv?",
      apiKey: "d306f972311cd14431a46f101f74adb9",
    };
  },
  methods: {
    fetchData: function (apiUrl, key, query, isPopular) {
      if (query !== "") {
        axios.get(apiUrl, { params: { api_key: key, language: this.apiLang, query: query } }).then((resp) => {
          this.store.films = resp.data.results;
          if (!isPopular) {
            this.store.isPopular = false;
          }
        });
      }
    },
  },
  beforeMount() {
    this.fetchData(this.popular, this.apiKey, undefined, true);
  },
};
</script>

<template>
  <NavBar @searchEvent="fetchData(this.apiUrlFilm, this.apiKey, this.store.query)" />
  <Cards />
</template>
