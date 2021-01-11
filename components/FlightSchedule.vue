<template>
  <!-- FlightSchedule -->

  <div class="relative">
    <div>
      <span class="multicity-flight-label" id="flightLabel1">Flight 1</span>
    </div>
    <div class="flex space-x-6">
      <!-- FlightContent -->
      <div class="w-4/12">
        <FlightContent />
      </div>
      <!-- SingularCalendar -->
      <div class="w-2/12"></div>
      <!-- Connection (Optional) -->
      <div class="w-4/12"></div>
    </div>
    <div></div>
  </div>
</template>

<script>
import FlightContent from "@/components/FlightContent";
// import SingularCalendar from "@/components/SingularCalendar";
// import Connection from "@/components/Connection";

export default {
  data() {
    return {};
  },
  components: { FlightContent },
};
</script>
