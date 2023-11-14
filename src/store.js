import { reactive } from "vue";

export const store = reactive({
  query: "",
  isPopular: true,
  populars: [],
  films: [],
  tvSeries: [],
});
