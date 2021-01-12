<template>
  <div class="border-b-1 border-text">
    <button
      class="w-full px-4 py-2 flex justify-between items-center"
      @click.prevent="connectionModal"
    >
      <span ref="" class="text-text text-3xl">Connection (Optional)</span>
      <fa :icon="['far', 'question-circle']" class="text-text text-3xl" />
    </button>
    <AirportSerachModal
      class="absolute modalSide"
      v-model="OptionalmodalOpen"
      title="Origin"
    />
  </div>
</template>

<script>
import AirportSerachModal from "@/components/AirportSerachModal";
export default {
  data() {
    return {
      OptionalmodalOpen: false,
    };
  },
  components: {
    AirportSerachModal,
  },
  methods: {
    connectionModal() {
      this.OptionalmodalOpen = !this.OptionalmodalOpen;
    },
  },
};
</script>
