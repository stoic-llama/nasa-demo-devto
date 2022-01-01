<template>
  <div class="details__wrapper" v-if="apod">
    <div class="details">
      <h1>{{ apod.title }}</h1>
      <p>{{ apod.date }}</p>
      <img v-if="isImg()" :src="apod.url" :alt="apod.title" />
      <iframe v-else allowfullscreen :src="apod.url" :alt="apod.title"></iframe>
      <p>{{ apod.explanation }}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NasaServices from "@/services/NasaServices.js";

export default {
  name: "APODDetails",
  props: {
    date: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      apod: {},
    };
  },
  created() {
    NasaServices.getAPOD(this.date)
      .then((response) => {
        this.apod = response.data;
      })
      .catch((error) => console.log(error));
  },
  methods: {
    isImg() {
      const regex = new RegExp("/image/");
      console.log(this.apod.url);
      console.log("regex.test(this.apod.url)" + regex.test(this.apod.url));
      if (!regex.test(this.apod.url)) {
        return false;
      }
      return true;
    },
  },
};
</script>

<style scoped>
iframe {
  width: 30rem;
  height: 30rem;
}
img {
  width: 30rem;
  height: 30rem;
  object-fit: cover;
}
.details__wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.details {
  max-width: 40rem;
}
</style>
