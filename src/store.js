import { reactive } from "vue";

export const store = reactive({
  query: "",
  isPopular: true,
  films: [],
  tvSries: [],
});
