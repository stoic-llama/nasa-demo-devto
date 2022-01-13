import { createRouter, createWebHistory } from "vue-router";
import Gallery from "../views/Gallery.vue";
import APODDetails from "@/views/APODDetails.vue";

const routes = [
  {
    path: "/",
    name: "Gallery",
    component: Gallery,
  },
  {
    path: "/apod/:date",
    name: "APODDetails",
    props: true,
    component: APODDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
