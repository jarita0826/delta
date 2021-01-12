<template>
  <select
    class="w-full bg-primary border-b-1 text-2xl border-white p-2 text-red h-20"
    @change="onchange()"
    v-model="key"
  >
    <option value="Round Trip">Round Trip</option>
    <option value="OneWay">One Way</option>
    <option value="Multi-City">Multi-City</option>
  </select>
</template>

<script>
export default {
  data() {
    return {
      key: "Round Trip",
    };
  },
  methods: {
    onchange() {
      console.log(this.key);
      if (this.key === "OneWay") {
        this.showOneWay = true;
        this.showRoundTrip = false;
      } else if (this.key === "Round Trip") {
        this.showOneWay = false;
        this.showRoundTrip = true;
      }
    },
  },
};
</script>
