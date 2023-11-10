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
      apiUrlFilm: "https://api.themoviedb.org/3/search/movie?",
      apiUrlTv: "https://api.themoviedb.org/3/search/tv?",
      apiKey: "d306f972311cd14431a46f101f74adb9",
    };
  },
  methods: {
    fetchData: function (apiUrl, key, query) {
      axios.get(apiUrl, { params: { api_key: key, language: "it-IT", query: query } }).then((resp) => (this.store.films = resp.data.results));
    },
  },
  beforeMount() {
    // this.fetchData(this.popular, this.apiKey);
  },
};
</script>

<template>
  <NavBar @searchEvent="fetchData(this.apiUrlFilm, this.apiKey, this.store.query)" />
  <Cards />
</template>
