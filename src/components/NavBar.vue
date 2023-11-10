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
  <header class="p-1 bg-black fixed top-0 left-0 w-full">
    <div class="container my-0 mx-auto transition-all duration-300">
      <div class="flex justify-between">
        <div class="flex items-center gap-6">
          <img src="/logo.png" class="w-[120px]" />
          <ul class="hidden items-center gap-2 2xL:gap-4 lg:flex">
            <li>Home</li>
            <li>Serie Tv</li>
            <li>Film</li>
            <li>Nuovi e popolari</li>
            <li>La mia lista</li>
            <li>Sfoglia per lingua</li>
          </ul>
          <span>Sfoglia</span>
        </div>
        <ul class="flex items-center gap-4">
          <li><input type="text" @keyup.enter="$emit('searchEvent')" v-model="store.query" /></li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
        </ul>
      </div>
    </div>
  </header>
</template>
