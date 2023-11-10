<script>
export default {
  props: {
    currentData: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {};
  },
};
</script>

<template>
  <div class="p-5 flex flex-col gap-3">
    {{ currentData.original_title }}
  </div>
</template>
