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
    fetchData: function (apiUrl, key, query, isPopular, isFilm, isTv) {
      if (query !== "") {
        axios.get(apiUrl, { params: { api_key: key, language: this.apiLang, query: query } }).then((resp) => {
          if (!isPopular) {
            this.store.isPopular = false;
            if (isFilm) {
              this.store.films = resp.data.results;
            }
            if (isTv) {
              this.store.tvSeries = resp.data.results;
            }
          }
          if (isPopular) {
            this.store.populars = resp.data.results;
          }
        });
      } else {
        this.store.populars = resp.data.results;
        this.store.films = [];
      }
    },
    fetchPopular: function () {
      this.fetchData(this.popular, this.apiKey, undefined, true, undefined, undefined);
      this.store.query = "";
      this.store.isPopular = true;
    },
    fetchSearch: function () {
      this.store.films = this.fetchData(this.apiUrlFilm, this.apiKey, this.store.query, false, true, false);
      this.store.tvSeries = this.fetchData(this.apiUrlTv, this.apiKey, this.store.query, false, false, true);
    },
  },
  beforeMount() {
    this.fetchPopular();
  },
};
</script>

<template>
  <NavBar @resetPopular="fetchPopular()" @searchEvent="fetchSearch()" />
  <Cards />
</template>
