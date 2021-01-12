<template>
  <div class="flex">
    <div class="w-11/12 space-y-8">
      <div class="flex space-x-10">
        <div class="w-1/4"><SelectWrapper /></div>
        <div class="w-1/5"><Passenger /></div>
      </div>

      <div ref="container" class="space-y-8"><FlightSchedule /></div>
      <div class="flex">
        <div class="w-1/2 text-left">
          <button @click.prevent="addFlight" v-if="showaddBtn">
            <i class="fas fa-plus-circle"></i>
            <fa :icon="['fas', 'plus-circle']" class="text-white text-xl" />
            Add Flight
          </button>
        </div>
        <div class="w-1/2 text-right mr-16">
          <button @click.prevent="removeFlight" v-if="showremoveBtn">
            <fa :icon="['fas', 'minus-circle']" class="text-white text-xl" />
            Remove Flight
          </button>
        </div>
      </div>

      <!-- SEARCH OPTIONS -->
      <SearchOption />
    </div>
    <div class="flex items-end text-white w-1/12 my-4 px-4 font-semibold mb-32">
      <FormBtn />
    </div>
  </div>
</template>

<script>
import Passenger from "@/components/Passenger";
import SelectWrapper from "@/components/SelectWrapper";
import FlightSchedule from "@/components/FlightSchedule";
import FormBtn from "@/components/FormBtn";
import SearchOption from "@/components/SearchOption";
import Vue from "vue";

export default {
  data() {
    return { orderlist: 1, showremoveBtn: false, showaddBtn: true };
  },
  components: {
    Passenger,
    SelectWrapper,
    FlightSchedule,
    FormBtn,
    SearchOption,
  },
  methods: {
    addFlight() {
      this.orderlist = this.orderlist + 1;
      console.log(this.orderlist);

      if (this.orderlist === 2) {
        this.showremoveBtn = true;
        console.log(this.showremoveBtn);
      }

      if (this.orderlist === 6) {
        this.showaddBtn = false;
      }

      var ComponentClass = Vue.extend(FlightSchedule);
      var instance = new ComponentClass({
        propsData: { type: "primary" },
      });
      console.log(instance.$slots);
      instance.$slots.default = [this.orderlist];
      instance.$mount(); // pass nothing
      this.$refs.container.appendChild(instance.$el);
    },
    removeFlight() {
      var arr = [].slice.call(this.$refs.container.children);
      arr[arr.length - 1].remove();
      this.orderlist = this.orderlist - 1;
      if (this.orderlist === 1) {
        this.showremoveBtn = false;
      }
      if (this.orderlist < 6) {
        this.showaddBtn = true;
      }
      console.log(this.orderlist);
    },
  },
};
</script>
