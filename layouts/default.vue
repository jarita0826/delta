<template>
  <div>
    <div class="p-6 bg-primary text-white">
      <div class="flex justify-around">
        <div class="font-bold space-x-4">
          <li><nuxt-link to="/BOOK">BOOK</nuxt-link></li>
          <li><nuxt-link to="/CHECK-IN">CHECK-IN</nuxt-link></li>
          <li><nuxt-link to="/MY TRIPS">MY TRIPS</nuxt-link></li>
          <li><nuxt-link to="/FLIGHT STATUS">FLIGHT STATUS</nuxt-link></li>
        </div>

        <div class="font-medium space-x-4">
          <li><nuxt-link to="/TravelInfo">Travel Info</nuxt-link></li>
          <li><nuxt-link to="/SkyMiles">SkyMiles</nuxt-link></li>
          <li><nuxt-link to="/Help">Need Help?</nuxt-link></li>
        </div>

        <div class="font-bold space-x-4">
          <li><nuxt-link to="/Sigh">SIGH UP</nuxt-link></li>
          <li>
            <nuxt-link to="/Login" class="bg-red py-1 px-2">LOG IN</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/notice"><i></i></nuxt-link>
          </li>
          <li>
            <nuxt-link to="/search"><i></i></nuxt-link>
          </li>
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

<style>
.size {
  font-size: 5px;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
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
