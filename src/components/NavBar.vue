<script>
import { store } from "../store";

export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <input type="text" @keyup.enter="" v-model="store.query" />
</template>
