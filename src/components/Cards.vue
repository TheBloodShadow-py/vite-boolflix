<script>
import Card from "./Card.vue";
import FilmModal from "./FilmModal.vue";
import { store } from "../store";

export default {
  components: {
    Card,
    FilmModal,
  },
  data() {
    return {
      store,
      modalStatus: false,
      modalData: {},
    };
  },
  methods: {
    modalStatusSwitcher: function (dataHandle) {
      if (this.modalStatus) {
        this.modalStatus = false;
        this.modalData = {};
      } else {
        this.modalData = dataHandle;
        this.modalStatus = true;
      }
    },
  },
  computed: {
    items: function () {
      return { ...this.store.films, ...this.store.tvSeries };
    },
  },
};
</script>

<template>
  <main class="container my-0 mx-auto transition-all duration-300 mb-48">
    <span v-if="store.query" class="p-1 font-bold text-lg ml-3"
      >Ricerca: <span class="text-lg font-normal"> {{ store.query }}</span></span
    >
    <span class="p-1 font-bold text-lg ml-3" v-if="store.query === ''">Popolari ora: </span>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-2 p-3">
      <Card v-if="!store.isPopular" v-for="item in items" @modalHandle="modalStatusSwitcher" :currentData="item" />
      <Card v-if="store.isPopular" v-for="item in store.populars" @modalHandle="modalStatusSwitcher" :currentData="item" />
      <FilmModal @closeModal="modalStatusSwitcher" v-if="modalStatus" :currentData="modalData" @wheel.prevent @touchmove.prevent @scroll.prevent />
    </div>
  </main>
</template>
