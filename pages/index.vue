<template>
  <div class="text-white">
    <div class="container mx-auto">
      <div id="watch-example">
        <p>
          Ask a yes/no question:
          <input v-model="question" />
        </p>
        <p>{{ answer }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: "Airlin Tickets & Flights: Book Direct With Delta Line",
    meta: [{ hid: "Delta", name: "Delta", content: "Delta" }],
  },

  data() {
    return {};
  },
};
</script>

<style>
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
