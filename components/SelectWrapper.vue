<template>
  <select
    class="w-full bg-primary border-b-1 text-xl border-white p-2 text-red h-14"
    @change="selfUpdate()"
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
    selfUpdate() {
      this.$emit("input", this.key);
    },
  },
};
</script>
