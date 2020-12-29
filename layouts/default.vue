<template>
  <div class="bg-primary">
    <div class="" id="menu1">
      <div class="text-white p-6 border-b-2 border-text">
        <div class="flex container mx-auto justify-between list-none">
          <div class="flex font-bold space-x-4">
            <div class="dropbtn">
              <li @click="clearViewModel">
                <nuxt-link to="/">BOOK</nuxt-link>
              </li>
              <div class="w-full bg-primary text-white p-4 dropdown-content">
                <div class="flex container mx-auto">
                  <form action="">
                    <div class="w-11/12 my-4 pr-4">
                      <!-- 彈跳視窗 -->
                      <nuxt-link to="/">From</nuxt-link>
                      <!-- 相反箭頭 -->
                      <!-- 彈跳視窗 -->
                      <nuxt-link to="/">To</nuxt-link>
                      <!-- 下拉式 -->
                      <select>
                        <option value="Round Trip">Round Trip</option>
                        <option value="OneWay">One Way</option>
                        <option value="Multi-City">Multi-City</option>
                      </select>
                      <!-- 日期 -->
                      <!-- 下拉式 -->
                      <select>
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

                      <!-- ---------------- -->

                      <!-- 勾選欄位+彈跳視窗 -->
                      <!-- 勾選欄位+彈跳視窗 -->
                      <!-- 勾選欄位 -->
                    </div>
                    <div class="text-white w-1/12 my-4 px-4 font-semibold">
                      <!-- 按鈕 -->
                    </div>
                  </form>
                </div>
              </div>
            </div>
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
          </div>

          <div class="flex font-medium space-x-4 menu">
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
          </div>

          <div class="flex font-bold space-x-4">
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
          </div>
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
              <nuxt-link to="/" class="rounded-full border-1 px-4 pt-2"
                ><fa :icon="['fab', 'facebook-f']"
              /></nuxt-link>
              <nuxt-link to="/" class="rounded-full border-1 px-3 py-2"
                ><fa :icon="['fab', 'twitter']"
              /></nuxt-link>
            </div>

            <div class="w-1/2 border-l-2 pl-4 text-4xl border-gray-300">
              <nuxt-link to="/">
                <fa :icon="['fas', 'globe']" class="rounded-full border-2" /> -
              </nuxt-link>
            </div>
          </div>
        </div>

        <!--Website Feedback-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "menu1",
  data() {
    return {
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
    clearViewModel() {
      console.log("this");
    },
  },
};
</script>

<style>
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
