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
  <header class="bg-black sticky top-0 left-0 w-full drop-shadow-md z-10 mb-10 text-sm 2xl:text-base">
    <div class="container my-0 mx-auto transition-all duration-300 py-1 px-3">
      <div class="flex justify-between">
        <div class="flex items-center gap-6">
          <img draggable="false" src="/logo.png" class="w-[120px]" />
          <ul class="hidden items-center gap-4 2xl:gap-6 lg:flex whitespace-nowrap">
            <li @click="$emit('resetPopular')">Home</li>
            <li>Serie Tv</li>
            <li>Film</li>
            <li @click="$emit('resetPopular')">Nuovi e popolari</li>
            <li>La mia lista</li>
            <li>Sfoglia per lingua</li>
          </ul>
          <span class="lg:hidden">Sfoglia</span>
        </div>
        <ul class="flex items-center gap-4">
          <li>
            <input
              class="p-2 rounded bg-transparent focus-visible:outline-none border-white border"
              type="text"
              placeholder="Film, Serie TV ..."
              @keyup.enter="$emit('searchEvent')"
              v-model="store.query"
            />
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
