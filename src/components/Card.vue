<script>
import StarRating from "vue-star-rating";

export default {
  components: {
    StarRating,
  },
  props: {
    currentData: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      modalStatus: false,
    };
  },
  computed: {
    imageLoader: function () {
      return "http://image.tmdb.org/t/p/w500" + this.currentData.poster_path;
    },
    textLoader: function () {
      if (this.currentData.title.length > 30) {
        return this.currentData.title.slice(0, 30) + "...";
      }
      return this.currentData.title;
    },
    voteLoader: function () {
      return this.currentData.vote_average / 2;
    },
  },
};
</script>

<template>
  <div
    class="flex flex-col gap-4 relative p-1"
    v-if="currentData.poster_path && currentData.overview && currentData.backdrop_path && currentData.vote_average !== 0 && currentData.popularity > 5"
  >
    <img
      @click="$emit('modalHandle', currentData)"
      loading="lazy"
      draggable="false"
      class="rounded-md drop-shadow hover:scale-105 transition-all duration-150 cursor-pointer h-full"
      :src="imageLoader"
    />
    <star-rating
      class="absolute bottom-3 left-3 drop-shadow-md"
      :show-rating="false"
      :read-only="true"
      :star-size="20"
      :max-rating="5"
      v-model:rating="voteLoader"
    />
    <!-- <span class="cursor-pointer text-base font-light"> {{ textLoader }}</span> -->
  </div>
</template>
