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
};
</script>

<template>
  <div class="container my-0 mx-auto transition-all duration-300">
    <span v-if="store.query" class="p-1 font-bold text-lg"
      >Ricerca: <span class="text-lg font-normal"> {{ store.query }}</span></span
    >
    <span class="p-1 font-bold text-lg" v-if="store.isPopular && store.query === ''">Popolari ora: </span>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 p-1">
      <Card v-for="film in store.films" @modalHandle="modalStatusSwitcher" :currentData="film" />
      <FilmModal @closeModal="modalStatusSwitcher" v-if="modalStatus" :currentData="modalData" @wheel.prevent @touchmove.prevent @scroll.prevent />
    </div>
  </div>
</template>
