<template>
  <router-link
    :date="apod.date"
    :to="{ name: 'APODDetails', params: { date: apod.date } }"
  >
    <div class="card">
      <h2>{{ apod.title }}</h2>
      <img v-if="isImg()" :src="apod.url" :alt="apod.title" />
      <iframe v-else allowfullscreen :src="apod.url" :alt="apod.title"></iframe>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "APODCard",
  props: {
    apod: {
      type: Object,
      required: true,
    },
  },
  methods: {
    isImg() {
      const regex = new RegExp("/image/");
      // console.log(this.apod.url);
      // console.log("regex.test(this.apod.url)" + regex.test(this.apod.url));
      if (!regex.test(this.apod.url)) {
        return false;
      }
      return true;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
iframe {
  width: 20rem;
  height: 20rem;
}
img {
  width: 20rem;
  height: 20rem;
  object-fit: cover;
}
.card {
  padding: 20px;
  width: 20rem;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.card-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
