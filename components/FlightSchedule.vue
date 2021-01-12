<template>
  <!-- FlightSchedule -->

  <div class="relative" ref="flightSchedule">
    <div>
      <span class="multicity-flight-label" id="flightLabel1"
        >Flight<slot
      /></span>
    </div>
    <div class="flex space-x-12 items-center">
      <!-- FlightContent -->
      <div class="w-4/12">
        <FlightContent />
      </div>
      <!-- SingularCalendar -->
      <div class="w-2/12">
        <SingularCalendar />
      </div>
      <!-- Connection (Optional) -->
      <div class="w-4/12">
        <Connection />
      </div>
    </div>

    <div></div>
  </div>
</template>

<script>
import FlightContent from "@/components/FlightContent";
import SingularCalendar from "@/components/SingularCalendar";
import AirportSerachModal from "@/components/AirportSerachModal";
import Connection from "@/components/Connection";

export default {
  data() {
    return {};
  },
  components: {
    FlightContent,
    SingularCalendar,
    AirportSerachModal,
    Connection,
  },
};
</script>

<style scoped>
.modalSide {
  top: -6rem;
  left: 10rem;
}
</style>
