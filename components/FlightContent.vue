<template>
  <div class="flex text-text border-b-1 border-text justify-between">
    <!-- From Content -->

    <button class="text-3xl relative" @click.prevent="toggleModal">
      From
    </button>

    <!-- OriginModal -->
    <AirportSerachModal
      class="absolute modalSide"
      v-model="modalOpen"
      title="Origin"
    />
    <!-- exchange -->
    <!-- @click.prevent="exchange" -->
    <button class="inputBtn text-red">
      <fa :icon="['fas', 'arrows-alt-h']" class="font-light text-3xl" />
    </button>

    <!-- To Content -->
    <button class="text-3xl" @click.prevent="toggleDestinationModal">
      To
    </button>

    <!-- Destination Modal -->
    <AirportSerachModal
      class="absolute modalSide"
      v-model="destinationOpen"
      title="Destination"
    />
  </div>
</template>

<script>
import AirportSerachModal from "@/components/AirportSerachModal";
export default {
  data() {
    return {
      modalOpen: false,
      destinationOpen: false,
    };
  },
  components: {
    AirportSerachModal,
  },
  methods: {
    toggleModal() {
      this.modalOpen = !this.modalOpen;
    },
    toggleDestinationModal() {
      this.destinationOpen = !this.destinationOpen;
    },
  },
};
</script>

<style scoped>
.modalSide {
  top: -6rem;
  left: 10rem;
}
</style>
