<script>
import Card from "./Card.vue";
import { store } from "../store";

export default {
  components: {
    Card,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <Card :currentData="film" v-for="film in store.films" />
</template>
