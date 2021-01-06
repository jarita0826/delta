<template>
  <div class="bg-primary">
    <div>
      <div class="text-white p-6 border-b-2 border-text">
        <div class="flex container mx-auto justify-between list-none">
          <ul class="flex font-bold space-x-4">
            <li>
              <div class="dropbtn">
                <nuxt-link to="/BOOK" class="pb-6">BOOK</nuxt-link>
                <!-- Dropdown -->

                <!-- Dropdown -->
              </div>
            </li>
            <li>
              <nuxt-link to="/">CHECK-IN</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">MY TRIPS</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">FLIGHT</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">STATUS</nuxt-link>
            </li>
          </ul>

          <ul class="flex font-medium space-x-4 menu">
            <li>
              <div class="dropbtn">
                <nuxt-link to="/TravelInfo" class="pb-6">Travel Info</nuxt-link>
                <!-- Dropdown -->
                <div class="w-full bg-primary text-white p-4 dropdown-content">
                  <div class="flex container mx-auto">
                    <div class="w-3/12 my-4 pr-4">
                      <img
                        class="img-fluid secondNavImage"
                        src="//content.delta.com/content/www/us/en.damAssetRender.20200619T1448117200400.html/content/dam/delta_homepage_redesign/travelinfo/delta-one-head-rest.png"
                        alt="Delta One®"
                      />
                    </div>
                    <div class="text-white w-3/12 my-4 px-4 font-semibold">
                      <ul class="space-y-2">
                        <li v-for="(item, index2) in menu2" :key="index2">
                          <nuxt-link to="/">{{ item }}</nuxt-link>
                        </li>
                      </ul>
                    </div>
                    <div
                      class="flex w-6/12 text-text space-x-6 border-l-2 border-text px-2 my-4 font-medium"
                    >
                      <ul class="space-y-2 column">
                        <li
                          v-for="(item, index3) in menu3"
                          :key="index3"
                          class="secondary-link"
                        >
                          <nuxt-link to="/">{{ item }}</nuxt-link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!-- Dropdown -->
              </div>
            </li>
            <li>
              <div class="dropbtn">
                <nuxt-link to="/SkyMiles" class="pb-6">SkyMiles</nuxt-link>
                <!-- Dropdown -->
                <div class="w-full bg-primary text-white p-4 dropdown-content">
                  <div class="flex container mx-auto">
                    <div class="w-3/12 my-4 pr-4">
                      <img
                        class="img-fluid secondNavImage"
                        src="//content.delta.com/content/www/us/en.damAssetRender.20200619T1448117200400.html/content/dam/delta_homepage_redesign/travelinfo/delta-one-head-rest.png"
                        alt="Delta One®"
                      />
                    </div>
                    <div class="text-white w-3/12 my-4 px-4 font-semibold">
                      <ul class="space-y-2">
                        <li v-for="(item, index6) in menu6" :key="index6">
                          <nuxt-link to="/">{{ item }}</nuxt-link>
                        </li>
                      </ul>
                    </div>
                    <div
                      class="flex w-6/12 text-text space-x-6 border-l-2 border-text px-2 my-4 font-medium"
                    >
                      <ul class="space-y-2 column">
                        <li v-for="(item, index7) in menu7" :key="index7">
                          <nuxt-link to="/">{{ item }}</nuxt-link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!-- Dropdown -->
              </div>
            </li>
            <li>
              <div class="dropbtn">
                <nuxt-link to="/Help" class="pb-6">Need Help?</nuxt-link>
                <!-- Dropdown -->
                <div class="w-full bg-primary text-white p-4 dropdown-content">
                  <div class="flex container mx-auto">
                    <div class="w-3/12 my-4 pr-4">
                      <img
                        class="img-fluid secondNavImage"
                        src="//content.delta.com/content/www/us/en.damAssetRender.20200619T1448117200400.html/content/dam/delta_homepage_redesign/travelinfo/delta-one-head-rest.png"
                        alt="Delta One®"
                      />
                    </div>
                    <div class="text-white w-3/12 my-4 px-4 font-semibold">
                      <ul class="space-y-2">
                        <li v-for="(item, index4) in menu4" :key="index4">
                          <nuxt-link to="/">{{ item }}</nuxt-link>
                        </li>
                      </ul>
                    </div>
                    <div
                      class="flex w-6/12 text-text space-x-6 border-l-2 border-text px-2 my-4 font-medium"
                    >
                      <ul class="space-y-2 column">
                        <li
                          v-for="(item, index5) in menu5"
                          :key="index5"
                          class="secondary-link"
                        >
                          <nuxt-link to="/">{{ item }}</nuxt-link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!-- Dropdown -->
              </div>
            </li>
          </ul>

          <ul class="flex font-bold space-x-4">
            <li><nuxt-link to="/Sigh">SIGH UP</nuxt-link></li>
            <li>
              <nuxt-link to="/Login" class="bg-red py-1 px-2">LOG IN</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/notice" class="">
                <!-- <fa :icon="['far', 'bell']" /> -->
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/search" class="rounded-full p-2">
                <!-- <fa :icon="['fas', 'search']"/> -->
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container mx-auto justify-between list-none">
      <div class="w-full bg-primary text-white p-4">
        <div class="flex container mx-auto">
          <form action="" class="flex justify-around w-full">
            <div class="flex w-11/12 flx my-4 pr-4">
              <div class="flex w-2/5 space-x-4">
                <!-- 彈跳視窗 -->
                <div>
                  <div v-if="value" class="overlay">
                    <div class="modal px-8 py-6">
                      <div class="flex item-center justify-end">
                        <button @click.prevent="toggleModal">
                          <fa :icon="['fas', 'times']" class="text-text" />
                        </button>
                      </div>

                      <div class="p-3">
                        <ul class="border-b-2 border-text">
                          <li>
                            <button
                              class="w-1/3 text-primary text-center font-bold border-b-2 border-red pb-2"
                            >
                              SEARCH
                            </button>
                          </li>
                        </ul>

                        <div class="mt-6 text-primary">
                          Origin
                        </div>
                        <div class="border-b-2 border-text">
                          <input
                            class="w-4/5 inputText text-black"
                            placeholder="City or Airport"
                            v-model="searchQuery"
                          />
                          <fa
                            :icon="['fas', 'search']"
                            class="w-1/5 text-text"
                          />
                        </div>
                        <div
                          class="overflow-y-auto h-32 text-text"
                          v-if="resources.length"
                        >
                          <ul>
                            <li
                              v-for="item in resultQuery"
                              :key="item"
                              class="border-b-1 border-gray-300 py-2 space-x-4"
                            >
                              <button
                                @click.prevent="resultOrigin"
                                class="w-full flex justify-start"
                              >
                                <span class="w-1/3 text-left">{{
                                  item.shortening
                                }}</span>
                                <span class="w-2/3 text-left">{{
                                  item.origin
                                }}</span>
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- -->

                <button @click.prevent="toggleModal">
                  <div ref="from" class="text-6xl text-center">From</div>

                  <div ref="startOrigin" class="text-sm text-center">
                    Your Origin
                  </div>
                </button>

                <!-- 相反箭頭 -->
                <button class="inputBtn text-red" @click.prevent="exchange">
                  <fa
                    :icon="['fas', 'arrows-alt-h']"
                    class="font-light text-5xl"
                  />
                </button>

                <!-- 彈跳視窗 -->
                <div>
                  <div v-if="trigger" class="overlay">
                    <div class="modal px-8 py-6">
                      <div class="flex item-center justify-end">
                        <button @click.prevent="toggleDestinationModal">
                          <fa :icon="['fas', 'times']" class="text-text" />
                        </button>
                      </div>

                      <div class="p-3">
                        <ul class="border-b-2 border-text">
                          <li>
                            <button
                              class="w-1/3 text-primary text-center font-bold border-b-2 border-red pb-2"
                            >
                              SEARCH
                            </button>
                          </li>
                        </ul>

                        <div class="mt-6 text-primary">
                          Destination
                        </div>
                        <div class="border-b-2 border-text">
                          <input
                            class="w-4/5 inputText text-black"
                            placeholder="City or Airport"
                            v-model="searchQueryDestination"
                          />
                          <fa
                            :icon="['fas', 'search']"
                            class="w-1/5 text-text"
                          />
                        </div>
                        <div
                          class="overflow-y-auto h-32 text-text"
                          v-if="resourcesDestination.length"
                        >
                          <ul>
                            <li
                              v-for="item in resultQueryDestination"
                              :key="item"
                              class="border-b-1 border-gray-300 py-2 space-x-4"
                            >
                              <button
                                @click.prevent="resultDestination"
                                class="w-full flex justify-start"
                              >
                                <span class="w-1/3 text-left">{{
                                  item.shortening
                                }}</span>
                                <span class="w-2/3 text-left">{{
                                  item.origin
                                }}</span>
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <button @click.prevent="toggleDestinationModal">
                  <div ref="to" class="text-6xl text-center">To</div>
                  <div ref="destination" class="text-sm text-center">
                    Your Destination
                  </div>
                </button>
              </div>
              <!-- 下拉式 -->
              <div class="flex w-3/5 space-x-6 relative">
                <div class="h-60">
                  <!-- <span class="absolute right-2"
                    ><fa :icon="['fas', 'chevron-down']"
                  /></span> -->
                  <select
                    class="bg-primary border-b-1 text-2xl border-white p-2 text-red"
                  >
                    <option value="Round Trip">Round Trip</option>
                    <option value="OneWay">One Way</option>
                    <option value="Multi-City">Multi-City</option>
                  </select>
                </div>
                <!-- 日期 -->
                <button
                  @click.prevent="triggerCalendar"
                  class="border-b-1 border-text h-20 text-2xl px-2 py-2"
                >
                  <span>Depart</span>
                  <span class="text-red"> - </span>
                  <span>Return</span>
                  <fa
                    :icon="['far', 'calendar-minus']"
                    class="ml-6 text-text"
                  />
                </button>
                <div
                  v-if="valueCalendar"
                  class="absolute bg-white calendardiv text-base p-4"
                >
                  <div class="flex space-x-4">
                    <button @click.prevent="prevMonth">
                      <fa
                        :icon="['fas', 'chevron-left']"
                        class="ml-6 text-text"
                      />
                    </button>
                    <div class="containerCalendar">
                      <div class="calendar">
                        <div class="month text-calendarMonth" id="month">
                          <div class="date flex space-x-4 my-6">
                            <h1 ref="prevmonth" class="font-bold">January</h1>
                            <p>2021</p>
                            <p class="hidden" ref="monthcount">{{ month }}</p>
                          </div>
                        </div>
                        <div class="weekdays text-text flex">
                          <div class="text-center flex-1">S</div>
                          <div class="text-center flex-1">M</div>
                          <div class="text-center flex-1">T</div>
                          <div class="text-center flex-1">W</div>
                          <div class="text-center flex-1">T</div>
                          <div class="text-center flex-1">F</div>
                          <div class="text-center flex-1">S</div>
                        </div>
                        <div
                          ref="prevmonthDays"
                          class="days text-calendarDate flex"
                        ></div>
                      </div>
                    </div>
                    <div class="containerCalendar">
                      <div class="calendar">
                        <div class="month text-calendarMonth" id="month">
                          <div class="date flex space-x-4 my-6">
                            <h1 ref="nextmonth" class="font-bold">January</h1>
                            <p>2021</p>
                          </div>
                        </div>
                        <div class="weekdays text-text flex">
                          <div class="text-center flex-1">S</div>
                          <div class="text-center flex-1">M</div>
                          <div class="text-center flex-1">T</div>
                          <div class="text-center flex-1">W</div>
                          <div class="text-center flex-1">T</div>
                          <div class="text-center flex-1">F</div>
                          <div class="text-center flex-1">S</div>
                        </div>
                        <div
                          ref="nextmonthDays"
                          class="days text-calendarDate flex"
                        ></div>
                      </div>
                    </div>
                    <button @click.prevent="nextMonth">
                      <fa
                        :icon="['fas', 'chevron-right']"
                        class="ml-6 text-text"
                      />
                    </button>
                  </div>
                  <div class="flex justify-end space-x-4">
                    <button class="text-clear font-bold">Clear</button>
                    <button class="text-white font-bold bg-red px-6 py-2">
                      DONE
                    </button>
                  </div>
                </div>

                <!-- 下拉式 -->
                <div class="h-60">
                  <!-- <span class="absolute right-2"
                    ><fa :icon="['fas', 'chevron-down']"
                  /></span> -->
                  <select
                    class="bg-primary border-b-1 text-2xl border-white p-2 text-red"
                  >
                    <option value="1Passenger">1 Passenger</option>
                    <option value="2Passengers">2 Passengers</option>
                    <option value="3Passengers">3 Passengers</option>
                    <option value="4Passengers">4 Passengers</option>
                    <option value="5Passengers">5 Passengers</option>
                    <option value="6Passengers">6 Passengers</option>
                    <option value="7Passengers">7 Passengers</option>
                    <option value="8Passengers">8 Passengers</option>
                    <option value="9Passengers">9 Passengers</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- 按鈕 -->
            <div class="text-white w-1/12 my-4 px-4 font-semibold">
              <button class="button-leftarrow bg-red rounded-full">
                <fa :icon="['fas', 'arrow-right']" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Nuxt />
    <div class="bg-primary text-white font-semibold">
      <div class="container mx-auto">
        <div class="text-center border-b-2 border-text pb-10 space-y-4">
          <div class="text-5xl"><button>Search for a topic...</button></div>
          <div class="space-x-6">
            <span class="text-text">Popular Topics:</span>
            <span v-for="(item, index8) in menu8" :key="index8">
              <nuxt-link to="/">{{ item }}</nuxt-link>
            </span>
          </div>
        </div>

        <div class="flex justify-around pt-12" id="menu1">
          <div>
            <div class="text-text font-bold mb-6 text-lg">
              ABOUT DELTA
            </div>
            <div class="">
              <ul class="space-y-2">
                <li v-for="(item, index9) in menu9" :key="index9">
                  <nuxt-link to="/search">{{ item }}</nuxt-link>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div class="text-text font-bold mb-6 text-lg">
              CUSTOMER SERVICE
            </div>
            <div class="">
              <ul class="space-y-2">
                <li v-for="(item, index10) in menu10" :key="index10">
                  <nuxt-link to="/">{{ item }}</nuxt-link>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div class="text-text font-bold mb-6 text-lg">
              SITE SUPPORT
            </div>
            <div class="">
              <ul class="space-y-2">
                <li v-for="(item, index11) in menu11" :key="index11">
                  <nuxt-link to="/">{{ item }}</nuxt-link>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div class="text-text font-bold mb-6 text-lg">
              POLICIES
            </div>
            <div class="">
              <ul class="space-y-2">
                <li v-for="(item, index12) in menu12" :key="index12">
                  <nuxt-link to="/">{{ item }} </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!--© 2020 Delta Air Lines-->
        <div class="mt-8">
          <div class="text-sm text-text text-center mb-4">
            © 2020 Delta Air Lines, Inc. | Travel may be on other airlines.
          </div>
          <div class="text-sm text-text text-center">
            Terms and conditions apply to all offers and SkyMiles benefits. See
            specific offer for details, and visit
            <span class="text-sm text-white"
              ><nuxt-link to="/">
                SkyMiles Membership Guide & Program Rules</nuxt-link
              >
            </span>
          </div>
        </div>
        <!--© 2020 Delta Air Lines-->

        <!--Website Feedback-->
        <div class="mt-8">
          <div class="text-center"><a href="">Website Feedback</a></div>

          <div class="flex text-2xl space-x-4 p-4">
            <div class="w-1/2 flex justify-end space-x-4">
              <button
                class="button-leftarrow rounded-full border-1 border-white"
              >
                <fa :icon="['fab', 'facebook-f']" />
              </button>

              <button
                class="button-leftarrow rounded-full border-1 border-white"
              >
                <fa :icon="['fab', 'twitter']" />
              </button>
            </div>

            <div class="w-1/2 border-l-2 pl-4 text-4xl">
              <button class="button-leftarrow rounded-full">
                <fa :icon="['fas', 'globe']" />
                -
              </button>
            </div>
          </div>
        </div>

        <!--Website Feedback-->
      </div>
    </div>
  </div>
</template>

<script>
// import Modal from "@/components/Modal";

export default {
  // name: "menu1",
  data() {
    return {
      month: 1,
      searchQuery: null,
      resources: [
        { shortening: "RMQ", origin: "Taichung" },
        { shortening: "TIF", origin: "Taif, Saudi Arabia" },
        { shortening: "TNN", origin: "Tainan" },
        { shortening: "TPE", origin: "Taipei" },
        { shortening: "TSA", origin: "Taipei" },
        { shortening: "TYN", origin: "Taiyuan" },
        { shortening: "HYN", origin: "Taizhou" },
        { shortening: "KHH", origin: "Kaohsiung" },
      ],
      searchQueryDestination: null,
      resourcesDestination: [
        { shortening: "RMQ", origin: "Taichung" },
        { shortening: "TIF", origin: "Taif, Saudi Arabia" },
        { shortening: "TNN", origin: "Tainan" },
        { shortening: "TPE", origin: "Taipei" },
        { shortening: "TSA", origin: "Taipei" },
        { shortening: "TYN", origin: "Taiyuan" },
        { shortening: "HYN", origin: "Taizhou" },
        { shortening: "KHH", origin: "Kaohsiung" },
      ],
      value: false,
      trigger: false,
      valueCalendar: false,
      menu: ["BOOK", "CHECK-IN", "MY TRIPS", "FLIGHT", "STATUS"],
      menu2: [
        "Delta One®",
        "Delta Premium Select",
        "First Class",
        "Delta Comfort+®",
        "Main Cabin",
      ],
      menu3: [
        "Safer Travel",
        "Airline Partners",
        "Baggage",
        "Check-in & Security",
        "Delta Sky Club®",
        "Airport Maps & Locatios",
        "Flight Deals",
        "Flight Schedules",
        "Destinations",
        "Onboard Experience",
        "Gift Cards",
        "Aircraft",
        "Delta Vacations",
        "Rent A Car",
        "Shop Hotels",
        "In-Flight Wi-Fi",
        "Trip Protection",
      ],
      menu4: [
        "Change/Cancel Help",
        "Refund Help",
        "Seats Help",
        "Baggage Help",
        "Comment/Complaint",
      ],
      menu5: [
        "Coronavirus Updates ",
        "Coronavirus Travel FAQs",
        "Need Help?",
        "Receipts",
        "Certificates & eCredits",
        "Accessible Travel Services",
        "Child&Infant Travel",
        "Pet Travel",
        "Special Circumstances",
        "SkyMiles Help",
        "Mobile",
      ],
      menu6: [
        "My SkyMiles",
        "Get to Know SkyMiles",
        "How to Earn Miles",
        "How to Use Miles",
      ],
      menu7: [
        "Get to know Medallion Status",
        "Program Resources",
        "Buy or Transfer Miles",
        "SkyMiles Credit Cards",
        "SkyMiles Partners",
        "News & Special Offers",
        "SkyMiles Cruises",
        "Book Award Travel",
        "Upgrade With Miles",
        "Manage your Account",
        "Certificates & eCredits",
      ],
      menu8: ["Need Help?", "Coronavirus", "eCredits"],
      menu9: [
        "About Us",
        "Careers",
        "News Hub",
        "Investor",
        "Relations",
        "Business Travel",
        "Travel Agents",
        "Mobile App",
      ],
      menu10: ["Need Help?", "Tweet Us", "Comment/Complaint"],
      menu11: [
        "Login Help",
        "Site Map",
        "Browser Compatibility",
        "Accessibility",
        "Booking Information",
      ],
      menu12: [
        "Customer Commitment",
        "Tarmac Delay Plan",
        "Legal",
        "Sustainability",
        "Contract of Carriage",
        "Cookies,Privacy & Security",
        "Human Trafficking Statement",
      ],
      menu13: [],
      menu14: [],
    };
  },

  methods: {
    toggleModal() {
      this.value = !this.value;
    },
    toggleDestinationModal() {
      this.trigger = !this.trigger;
    },
    triggerCalendar(event) {
      this.valueCalendar = !this.valueCalendar;
      let date = new Date();
      const render = () => {
        date.setDate(1);

        const prevlastDay = new Date(
          date.getFullYear(),
          date.getMonth() + 1,
          0
        ).getDate();

        const prevLastDay = new Date(
          date.getFullYear(),
          date.getMonth(),
          0
        ).getDate();
        console.log(prevLastDay);

        const prevfirstDayIndex = date.getDay();
        console.log(prevfirstDayIndex);
        console.log(date);

        const months = [
          "January",
          "Fabruary",
          "Mrach",
          "April",
          "May",
          "June",
          "July",
          "September",
          "October",
          "November",
          "December",
        ];

        this.$nextTick(function () {
          this.$refs.prevmonth.innerHTML = months[date.getMonth()];
          let prevDays = "";

          for (let x = prevfirstDayIndex; x > 0; x--) {
            prevDays += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
          }

          for (let i = 1; i <= prevlastDay; i++) {
            if (
              i === new Date().getDate() &&
              date.getMonth() === new Date().getMonth()
            ) {
              prevDays += `<div class=" today">${i}</div>`;
            } else {
              prevDays += `<div class="">${i}</div>`;
            }
            this.$refs.prevmonthDays.innerHTML = prevDays;
          }
        });
      };
      render();
    },
    prevMonth(event) {
      let monthcount = parseInt(this.$refs.monthcount.innerHTML); //當月月份
      if (monthcount < 2) {
        monthcount = 12;
        this.$refs.monthcount.innerHTML = monthcount;
      } else {
        monthcount -= 1;
        this.$refs.monthcount.innerHTML = monthcount;
      }
      const months = [
        "January",
        "Fabruary",
        "Mrach",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let date = new Date();
      this.$refs.prevmonth.innerHTML = months[monthcount - 1];

      const prevLastDay = new Date(date.getFullYear(), monthcount, 0).getDate();
      const prevfirstDayIndex = new Date(
        date.getFullYear(),
        monthcount,
        0
      ).getDay();

      date.setDate(1);
      this.$nextTick(function () {
        let prevDays = "";
        console.log(prevfirstDayIndex);
        for (let x = prevfirstDayIndex; x > 0; x--) {
          prevDays += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
        }

        for (let i = 1; i <= prevLastDay; i++) {
          prevDays += `<div>${i}</div>`;
          this.$refs.prevmonthDays.innerHTML = prevDays;
        }
      });
    },
    nextMonth(event) {
      let monthcount = parseInt(this.$refs.monthcount.innerHTML); //當月月份
      if (monthcount > 11) {
        monthcount = 1;
        this.$refs.monthcount.innerHTML = monthcount;
      } else {
        monthcount += 1;
        this.$refs.monthcount.innerHTML = monthcount;
      }
      const months = [
        "January",
        "Fabruary",
        "Mrach",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let date = new Date();
      this.$refs.prevmonth.innerHTML = months[monthcount - 1];

      const prevLastDay = new Date(date.getFullYear(), monthcount, 0).getDate();
      const prevfirstDayIndex = new Date(
        date.getFullYear(),
        monthcount,
        0
      ).getDay();

      date.setDate(1);
      this.$nextTick(function () {
        let prevDays = "";
        console.log(prevfirstDayIndex);
        for (let x = prevfirstDayIndex; x > 0; x--) {
          prevDays += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
        }
        for (let i = 1; i <= prevLastDay; i++) {
          prevDays += `<div>${i}</div>`;
          this.$refs.prevmonthDays.innerHTML = prevDays;
        }
      });
    },

    resultOrigin(event) {
      this.value = !this.value;
      const shortOrigin = event.currentTarget.firstChild.innerHTML;
      const fullOrigin = event.currentTarget.lastChild.innerHTML;
      this.$refs.from.innerHTML = shortOrigin;
      this.$refs.startOrigin.innerHTML = fullOrigin;
    },
    resultDestination(event) {
      this.trigger = !this.trigger;
      const shortDestination = event.currentTarget.firstChild.innerHTML;
      const fullDestination = event.currentTarget.lastChild.innerHTML;
      this.$refs.to.innerHTML = shortDestination;
      this.$refs.destination.innerHTML = fullDestination;
    },
    exchange() {
      const to = this.$refs.to.innerHTML;
      const from = this.$refs.from.innerHTML;
      const origin = this.$refs.startOrigin.innerHTML;
      const destination = this.$refs.destination.innerHTML;
      this.$refs.from.innerHTML = to;
      this.$refs.to.innerHTML = from;
      this.$refs.startOrigin.innerHTML = destination;
      this.$refs.destination.innerHTML = origin;
    },
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.resources.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((v) => item.origin.toLowerCase().includes(v));
        });
      } else {
        return this.resources;
      }
    },
    resultQueryDestination() {
      if (this.searchQueryDestination) {
        return this.resourcesDestination.filter((item) => {
          return this.searchQueryDestination
            .toLowerCase()
            .split(" ")
            .every((v) => item.origin.toLowerCase().includes(v));
        });
      } else {
        return this.resourcesDestination;
      }
    },
  },
};
</script>

<style>
.containerCalendar {
  display: flex;
  justify-content: center;
  align-items: center;
}
.calendar {
  width: 20rem;
  border: 1px solid black;
}

.month {
  width: 100%;
}

.date {
  justify-content: center;
  align-items: center;
}

.weekdays {
  width: 100%;
  padding: 0.04rem;
  display: flex;
  align-items: center;
}

.weekdays div {
  border: 1px solid black;
  font-weight: 400;
  justify-content: center;
  align-items: center;
}
.days {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0.2rem;
}
.days div {
  margin: 0.3rem;
  height: 2rem;
  font-weight: 600;
  width: calc(15.2rem / 7);
  text-align: center;
  align-items: center;
  transition: background-color 0.2s;
}

.days div:hover:not(.today) {
  background-color: rgba(125, 131, 136, 0.1);
  cursor: pointer;
}

.prev-date,
.next-date {
  opacity: 0.5;
}

.today {
  border: 2px solid#0b1453;
  border-radius: 50%;
}

.calendardiv {
  left: -150px;
  width: 800px;
}

.border-b-1 {
  border-bottom-width: 1px;
}
.overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  width: 450px;
  box-shadow: 1px 2px 4px rgba(153, 155, 160, 0.12);
  border-radius: 2px;
  background: white;
}

.inputText:focus {
  border-bottom-width: 2px;
  border-color: #11172b;
  outline: none;
  padding-bottom: 2px;
}

.inputBtn:focus {
  outline-color: #7d8388;
}

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
