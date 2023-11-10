<script>
import NavBar from "./components/NavBar.vue";

import { store } from "./store";
import axios from "axios";

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      store,
      apiUrlMovie: "https://api.themoviedb.org/3/search/movie?",
      apiUrlTv: "https://api.themoviedb.org/3/search/tv?",
      apiKey: "d306f972311cd14431a46f101f74adb9",
    };
  },
  methods: {
    fetchData: function (apiUrl, key, query) {
      axios.get(apiUrl, { params: { api_key: key, query: query } }).then((resp) => console.log(resp));
    },
  },
  beforeMount() {
    this.fetchData(this.apiUrlTv, this.apiKey, this.store.query);
  },
};
</script>

<template>
  <span class="bg-red-500">{{ store }}</span>
  <NavBar />
</template>
