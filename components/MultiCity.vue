<template>
  <div class="flex">
    <div class="w-11/12">
      <div class="flex space-x-6">
        <div><SelectWrapper /></div>
        <div><Passenger /></div>
      </div>
      <div><FlightSchedule /></div>

      <button>Add Flight</button>
      <!-- SEARCH OPTIONS -->
    </div>
    <div class="flex items-center text-white w-1/12 my-4 px-4 font-semibold">
      <FormBtn />
    </div>
  </div>
</template>

<script>
import Passenger from "@/components/Passenger";
import SelectWrapper from "@/components/SelectWrapper";
import FlightSchedule from "@/components/FlightSchedule";
import FormBtn from "@/components/FormBtn";
export default {
  components: {
    Passenger,
    SelectWrapper,
    FlightSchedule,
    FormBtn,
  },
};
</script>
