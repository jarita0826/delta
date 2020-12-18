<template>
  <div>IN DELTA {{ delta.name }}</div>
</template>

<script>
export default {
  data() {
    return {
      deltas: [
        {
          id: "1",
          name: "BOO1",
        },
        {
          id: "2",
          name: "BOO2",
        },
        {
          id: "13",
          name: "BOOK3",
        },
        {
          id: "14",
          name: "BOOK4",
        },
        {
          id: "15",
          name: "BOOK",
        },
      ],
    };
  },
  computed: {
    delta() {
      return this.deltas.find((v) => v.id == this.$route.params.id);
    },
  },
};
</script>

<style></style>
