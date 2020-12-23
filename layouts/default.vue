<template>
  <div class="bg-primary">
    <div class="" id="menu1">
      <div class="text-white p-6 border-b-2 border-text">
        <div class="flex container mx-auto justify-between list-none">
          <div class="flex font-bold space-x-4">
            <li v-for="(item, index) in menu" :key="index">
              <nuxt-link to="/">{{ item }}</nuxt-link>
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
                      <ul class="space-y-2">
                        <li v-for="(item, index3) in menu3" :key="index3">
                          <nuxt-link to="/">{{ item }}</nuxt-link>
                        </li>
                      </ul>
                      <ul class="space-y-2">
                        <li v-for="(item, index4) in menu4" :key="index4">
                          <nuxt-link to="/">{{ item }}</nuxt-link>
                        </li>
                      </ul>
                      <ul class="space-y-2">
                        <li v-for="(item, index5) in menu5" :key="index5">
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
                      <ul class="space-y-2">
                        <li v-for="(item, index7) in menu7" :key="index7">
                          <nuxt-link to="/">{{ item }}</nuxt-link>
                        </li>
                      </ul>

                      <ul class="space-y-2">
                        <li v-for="(item, index8) in menu8" :key="index8">
                          <nuxt-link to="/">{{ item }}</nuxt-link>
                        </li>
                      </ul>

                      <ul class="space-y-2">
                        <li v-for="(item, index9) in menu9" :key="index9">
                          <nuxt-link to="/">{{ item }}</nuxt-link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!-- Dropdown -->
              </div>
            </li>
            <li><nuxt-link to="/Help" class="pb-6">Need Help?</nuxt-link></li>
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
    <div class="bg-primary text-white font-semibold p-8">
      <div class="space-y-10">
        <div class="text-center border-b-2 border-text pb-16 space-y-4 mx-24">
          <div class="text-5xl"><button>Search for a topic...</button></div>
          <div class="space-x-6">
            <span class="text-text">Popular Topics:</span>
            <span><nuxt-link to="/search">Need Help?</nuxt-link></span>
            <span><nuxt-link to="/search">Coronavirus</nuxt-link></span>
            <span><nuxt-link to="/search">eCredits</nuxt-link></span>
          </div>
        </div>

        <div class="flex justify-center space-x-32">
          <div>
            <div class="text-text font-bold mb-6">
              ABOUT DELTA
            </div>
            <div class="space-y-2 text-sm">
              <div><nuxt-link to="/search">About Us</nuxt-link></div>
              <div><nuxt-link to="/search">Careers</nuxt-link></div>
              <div><nuxt-link to="/search">News Hub</nuxt-link></div>
              <div>
                <nuxt-link to="/search">Investor Relations</nuxt-link>
              </div>
              <div><nuxt-link to="/search">Business Travel</nuxt-link></div>
              <div><nuxt-link to="/search">Travel Agents</nuxt-link></div>
              <div><nuxt-link to="/search">Mobile App</nuxt-link></div>
            </div>
          </div>

          <div>
            <div class="text-text font-bold mb-6">
              CUSTOMER SERVICE
            </div>
            <div class="space-y-2 text-sm">
              <div><nuxt-link to="/search">Need Help?</nuxt-link></div>
              <div><nuxt-link to="/search">Tweet Us</nuxt-link></div>
              <div><nuxt-link to="/search">Comment/Complaint</nuxt-link></div>
            </div>
          </div>

          <div>
            <div class="text-text font-bold mb-6">
              SITE SUPPORT
            </div>
            <div class="space-y-2 text-sm">
              <div><nuxt-link to="/search">Login Help</nuxt-link></div>
              <div><nuxt-link to="/search">Site Map</nuxt-link></div>
              <div>
                <nuxt-link to="/search">Browser Compatibility</nuxt-link>
              </div>
              <div><nuxt-link to="/search">Accessibility</nuxt-link></div>
              <div>
                <nuxt-link to="/search">Booking Information</nuxt-link>
              </div>
            </div>
          </div>

          <div>
            <div class="text-text font-bold mb-6">
              POLICIES
            </div>
            <div class="space-y-2 text-sm">
              <div>
                <nuxt-link to="/search">Customer Commitment</nuxt-link>
              </div>
              <div><nuxt-link to="/search">Tarmac Delay Plan</nuxt-link></div>
              <div><nuxt-link to="/search">Legal</nuxt-link></div>
              <div><nuxt-link to="/search">Sustainability</nuxt-link></div>
              <div>
                <nuxt-link to="/search">Contract of Carriage</nuxt-link>
              </div>
              <div>
                <nuxt-link to="/search">Cookies, Privacy & Security</nuxt-link>
              </div>
              <div>
                <nuxt-link to="/search">Human Trafficking Statement</nuxt-link>
              </div>
            </div>
          </div>
        </div>

        <div class="">
          <div class="size text-text text-center mb-4">
            © 2020 Delta Air Lines, Inc. | Travel may be on other airlines.
          </div>
          <div class="size text-text text-center">
            Terms and conditions apply to all offers and SkyMiles benefits. See
            specific offer for details, and visit
            <span class="size text-white"
              >SkyMiles Membership Guide & Program Rules Website Feedback</span
            >
          </div>
        </div>

        <div>
          <div class="text-center"><a href="">Website Feedback</a></div>
        </div>
        <div class="flex">
          <div></div>
          <div></div>
        </div>
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
      ],
      menu4: [
        "Flight Deals",
        "Flight Schedules",
        "Destinations",
        "Onboard Experience",
        "Gift Cards",
        "Aircraft",
      ],
      menu5: [
        "Delta Vacations",
        "Rent A Car",
        "Shop Hotels",
        "In-Flight Wi-Fi",
        "Trip Protection",
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
      ],
      menu8: [
        "SkyMiles Partners",
        "News & Special Offers",
        "SkyMiles Cruises",
        "Book Award Travel",
      ],
      menu9: [
        "Upgrade With Miles",
        "Manage your Account",
        "Certificates & eCredits",
      ],
      menu10: [],
    };
  },

  // name: "menu2",
  // data() {
  //   return {

  //   };
  // },
};
</script>

<style>
.size {
  font-size: 5px;
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

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
