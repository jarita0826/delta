<template>
  <div class="text-text flex space-x-8">
    <span>SEARCH OPTIONS</span>
    <div class="flex relative">
      <input
        type="checkbox"
        id="ShopwithMiles"
        value="ShopwithMiles"
        v-model="checkedOption"
        @change.prevent="checked"
      />
      <label class="text-white ml-6" for="Shop with Miles"
        >Shop with Miles{{ checkedOption }}</label
      >
      <button @click="miles" class="ml-2">
        <fa :icon="['far', 'question-circle']" class="text-xl" />
      </button>

      <!-- miles modal -->
      <div class="bg-white absolute mileModal z-10" v-show="value">
        <div class="px-8 py-6">
          <div class="flex item-center justify-between">
            <span class="text-primary text-3xl">Shop with Miles</span>
            <button @click="miles">
              <fa :icon="['fas', 'times']" class="text-text" />
            </button>
          </div>
          <div>
            <p>
              To learn more about booking Award/Mileage tickets please visit our
              FAQs
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="flex relative">
      <input
        type="checkbox"
        id="RefundableFares"
        value="RefundableFares"
        v-model="checkedOption"
        ref="RefundableFares"
      />
      <label class="text-white ml-6" for="Refundable Fares">
        Refundable Fares{{ checkedOption }}
      </label>
      <button @click="fares" class="ml-2">
        <fa :icon="['far', 'question-circle']" class="text-xl" />
      </button>
      <!-- fares modal -->
      <div
        class="bg-white absolute mileModal z-10 text-black"
        v-show="faresvalue"
      >
        <div class="px-8 py-6 space-y-6">
          <div class="flex item-center justify-between">
            <span class="text-primary text-3xl">Refundable Fares</span>
            <button @click="fares">
              <fa :icon="['fas', 'times']" class="text-text" />
            </button>
          </div>
          <div class="farestext space-y-6">
            <div>
              <p>Check the checkbox to search for refundable fares:</p>
              <ul class="px-8 mt-6">
                <li>
                  If your travel plans change, you can view options to cancel or
                  refund flights online.
                </li>
                <li>They are generally offered on every flight, every day.</li>
                <li>
                  You can change or cancel your itinerary without paying a
                  change fee, though you may need to pay the fare difference
                  between the new and the old itineraries.
                </li>
                <li>Refunds are returned to your original form of payment.</li>
              </ul>
            </div>
            <div>
              <p>Check the checkbox to search for refundable fares:</p>
              <ul class="px-8 mt-6">
                <li>
                  Nonrefundable fares (Main Cabin and above) are subject to a
                  $200 - $500 cancellation or change fee. If you change your
                  flight, you may need to pay the fare difference between the
                  new and the old itineraries.
                </li>
                <li>
                  Funds for cancelled tickets or fare differences are provided
                  via eCredit.
                </li>
                <li>
                  With most Basic Economy fares, changes and refunds are not
                  permitted after the Risk-Free Cancellation period. Exceptions
                  may apply when flying out of some countries in Europe..
                </li>
              </ul>
            </div>
            <p>
              View the full change and cancellation policy here.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: false,
      faresvalue: false,
      checkedOption: [],
    };
  },
  methods: {
    miles() {
      this.value = !this.value;
    },
    fares() {
      this.faresvalue = !this.faresvalue;
    },
    checked() {
      this.$refs.RefundableFares.disabled = !this.$refs.RefundableFares
        .disabled;
      console.log();
    },
  },
};
</script>

<style scoped>
input[type="checkbox"] {
  position: relative;
  cursor: pointer;
}
input[type="checkbox"]:before {
  content: "";
  display: block;
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  top: 0;
  left: 0;
  border: 2px solid #7d8388;
  background-color: #11172b;
}
input[type="checkbox"]:checked:after {
  content: "";
  display: block;
  width: 8px;
  height: 13px;
  border: solid #7d8388;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(42deg);
  -ms-transform: rotate(42deg);
  transform: rotate(42deg);
  position: absolute;
  top: 3px;
  left: 8px;
}

.mileModal {
  top: -100px;
  width: 700px;
  box-shadow: 1px 2px 4px rgba(153, 155, 160, 0.12);
  border-radius: 2px;
  background: white;
}

.farestext li {
  list-style-type: disc;
}
</style>
