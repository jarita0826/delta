<template>
  <div>
    <div class="flex justify-between">
      <div class="text-text flex space-x-8">
        <span>SEARCH OPTIONS</span>
        <div
          class="flex relative"
          v-for="label in article[0].labels"
          :key="label.id"
        >
          <CheckBox
            :id="label.id"
            :value="label.value"
            :label="label.label"
            :icon="label.icon"
          />
        </div>
        <div class="flex relative">
          <input
            type="checkbox"
            id="ShopwithMiles"
            value="ShopwithMiles"
            v-model="checkedOption"
            @change.prevent="checked"
          />
          <label class="text-white ml-6" for="Shop with Miles"
            >Shop with Miles</label
          >
          <a @click="miles" class="ml-2 cursor-pointer">
            <fa :icon="['far', 'question-circle']" class="text-xl" />
          </a>

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
                  To learn more about booking Award/Mileage tickets please visit
                  our FAQs
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
          <label
            class="text-white ml-6"
            for="Refundable Fares"
            ref="faresLabel"
          >
            Refundable Fares
          </label>
          <a @click="fares" class="ml-2 cursor-pointer">
            <fa :icon="['far', 'question-circle']" class="text-xl" />
          </a>
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
                      If your travel plans change, you can view options to
                      cancel or refund flights online.
                    </li>
                    <li>
                      They are generally offered on every flight, every day.
                    </li>
                    <li>
                      You can change or cancel your itinerary without paying a
                      change fee, though you may need to pay the fare difference
                      between the new and the old itineraries.
                    </li>
                    <li>
                      Refunds are returned to your original form of payment.
                    </li>
                  </ul>
                </div>
                <div>
                  <p>Check the checkbox to search for refundable fares:</p>
                  <ul class="px-8 mt-6">
                    <li>
                      Nonrefundable fares (Main Cabin and above) are subject to
                      a $200 - $500 cancellation or change fee. If you change
                      your flight, you may need to pay the fare difference
                      between the new and the old itineraries.
                    </li>
                    <li>
                      Funds for cancelled tickets or fare differences are
                      provided via eCredit.
                    </li>
                    <li>
                      With most Basic Economy fares, changes and refunds are not
                      permitted after the Risk-Free Cancellation period.
                      Exceptions may apply when flying out of some countries in
                      Europe..
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

        <div class="flex">
          <input
            type="checkbox"
            id="flexible"
            value="flexible"
            v-model="checkedOption"
            ref="flexible"
          />

          <label
            class="text-white ml-6"
            for=" My dates are flexible"
            ref="flexibleLabel"
          >
            My dates are flexible
          </label>
        </div>
      </div>
      <div>
        <a class="cursor-pointer" @click="advanced">
          <span>Advanced Search</span>
          <fa :icon="['fas', 'caret-down']" class="text-2xl" ref="caretDown" />
          <fa
            :icon="['fas', 'caret-up']"
            class="text-2xl hidden"
            ref="caretUp"
          />
        </a>
      </div>
    </div>
    <div class="flex mt-10 space-x-12 pr-10" v-if="showfares">
      <div class="w-1/4">
        <div>SHOW FARES</div>
        <div class="flex mt-4">
          <input
            type="checkbox"
            value="IncludeNearbyAirports"
            @change.prevent="nearbyChecked"
          />
          <label class="text-white ml-6" for="Include Nearby Airports"
            >Include Nearby Airports</label
          >
        </div>
      </div>
      <div class="w-1/4">
        <div>Best fares for</div>
        <div class="flex mt-2 items-center space-x-2">
          <select
            class="w-full bg-primary border-b-1 text-xl border-white p-2 text-red h-10"
          >
            <option value="Basic Economy">Basic Economy</option>
            <option value="Main Cabin">Main Cabin</option>
            <option value="Delta Comfort+®">Delta Comfort+®</option>
            <option value="First Class">First Class</option>
            <option value="Delta Premium Select">Delta Premium Select</option>
            <option value="Delta One®">Delta One®</option>
          </select>
          <fa :icon="['far', 'question-circle']" class="text-xl text-text" />
        </div>
      </div>
      <div class="w-2/4 border-b-1" ref="meetingCode">
        <div>MEETING EVENT CODE (Optional)</div>
        <div class="flex mt-2 items-center space-x-2">
          <input
            type="text"
            placeholder="Meeting Code (Optional)"
            class="h-10"
          />
          <fa :icon="['far', 'question-circle']" class="text-xl text-text" />
        </div>
      </div>
    </div>
    <div class="flex justify-end mt-10 pr-10" v-if="showfares">
      <button>
        Use Certificates, eCredits, or Delta Gift Cards
        <fa :icon="['fas', 'chevron-right']" class="text-xl text-text" />
      </button>
    </div>
  </div>
</template>

<script>
import CheckBox from "./CheckBox.vue";
export default {
  components: { CheckBox },
  data() {
    return {
      value: false,
      faresvalue: false,
      checkedOption: {},
      showfares: false,
      article: [
        {
          labels: [
            {
              label: "Shop with Miles",
              id: "ShopwithMiles",
              value: "ShopwithMiles",
              icon: "true",
            },
            {
              label: "Refundable Fares",
              id: "RefundableFares",
              value: "RefundableFares",
              icon: "true",
            },
            {
              label: "My dates are flexible",
              id: "flexible",
              value: "flexible",
              icon: !icon,
            },
          ],
        },
      ],
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
      this.$refs.flexible.disabled = !this.$refs.flexible.disabled;

      if (this.$refs.RefundableFares.checked) {
        this.$refs.RefundableFares.checked = false;
      }
      if (!this.$refs.flexible.checked) {
        this.$refs.flexible.checked = true;
      } else {
        this.$refs.flexible.checked = false;
      }
      console.log(this.$refs.faresLabel);

      this.$refs.faresLabel.classList.toggle("text-freeze");
      this.$refs.flexibleLabel.classList.toggle("text-freeze");
    },
    advanced() {
      this.showfares = !this.showfares;
      this.$refs.caretDown.classList.toggle("hidden");
      this.$refs.caretUp.classList.toggle("hidden");
      console.log();
    },
    nearbyChecked() {
      console.log("ddd");
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
