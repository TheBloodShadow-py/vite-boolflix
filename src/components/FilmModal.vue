<script>
export default {
  props: {
    currentData: {
      type: Object,
      default: {},
      required: true,
    },
  },
  data() {
    return {
      isImageLoaded: false,
    };
  },
  computed: {
    imageLoader: function () {
      return "http://image.tmdb.org/t/p/w500" + this.currentData.backdrop_path;
    },
    textLoader: function () {
      if (this.currentData.overview.length > 250) {
        return this.currentData.overview.slice(0, 250) + "...";
      }
      return this.currentData.overview;
    },
    langLoader: function () {
      if (this.currentData.original_language === "en") {
        return "https://flagcdn.com/144x108/us.png";
      } else if (this.currentData.original_language === "ja") {
        return "https://flagcdn.com/144x108/jp.png";
      } else {
        return `https://flagcdn.com/144x108/${this.currentData.original_language}.png`;
      }
    },
    titleLoader: function () {
      if (this.currentData.title) {
        return this.currentData.title + " - Film";
      } else {
        return this.currentData.name + " - Serie TV";
      }
    },
  },
  mounted() {
    setTimeout(() => {
      this.isImageLoaded = true;
    }, 300);
  },
};
</script>

<template>
  <div class="fixed top-0 left-0 z-10 w-full h-full bg-[rgba(53,53,53,0.4)]">
    <div
      class="absolute scale-110 md:scale-100 lg:scale-90 flex flex-col gap-4 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#0f0d0df3] rounded-md drop-shadow-lg"
    >
      <div class="relative">
        <button
          v-if="isImageLoaded"
          class="absolute uppercase flex gap-3 right-[10px] bottom-[10px] items-center rounded-lg hover:bg-[#a3363696] transition-colors duration-200 p-2 bg-[#80808059]"
        >
          Play <font-awesome-icon :icon="['fas', 'play']" />
        </button>
        <img :src="langLoader" class="w-[36px] h-[27px] absolute left-[20px] top-4" v-if="isImageLoaded" />
        <button
          v-if="isImageLoaded"
          @click="$emit('closeModal')"
          class="absolute text-red-500 font-semibold text-2xl top-[20px] right-[20px] hover:scale-110 transition-all duration-150"
        >
          X
        </button>
        <img v-show="isImageLoaded" class="rounded-t-md h-full w-full" draggable="false" :src="imageLoader" />
        <div v-if="!isImageLoaded" class="flex items-center justify-center mt-8"><span class="loader"></span></div>
      </div>
      <div class="flex flex-col p-5 gap-1 max-w-[600px]">
        <h3 class="text-lg text-red-500">{{ titleLoader }}</h3>
        <p class="text-sm lg:text-base font-light">{{ textLoader }}</p>
      </div>
    </div>
  </div>
</template>
