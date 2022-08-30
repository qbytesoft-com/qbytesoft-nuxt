<template>
  <div class="bottom-area bg-[#393e3a] lg:px-10 md:px-10 sm:px-10 px-5">
    <div class="container mx-auto">
      <div class="flex flex-wrap">
        <div class="w-full pt-20 pb-5">
          <div
            class="main-menu justify-between border-b-4 border-[#CCCCCC] lg:pb-10 pb-5"
          >
            <ul class="menu-list justify-between flex flex-wrap">
              <li
                class="bottom-menu-list-item w-6/12 mb-3 sm:mb-[20px] md:w-6/12 md:mb-[20px] lg:w-auto lg:mb-0"
              >
                <nuxt-link
                  class="text-[16px] md:text-[24px] text-[#F7F7F7] font-bold leading-[36px] transition duration-350 linear hover:text-[#d6d6d6]"
                  :to="{name: 'index'}"
                >Home</nuxt-link
                >
              </li>
              <li
                class="bottom-menu-list-item w-6/12 mb-3 sm:mb-[20px] md:w-6/12 md:mb-[20px] lg:w-auto lg:mb-0"
              >
                <nuxt-link
                  class="text-[16px] md:text-[24px] text-[#F7F7F7] font-bold leading-[36px] transition duration-350 linear hover:text-[#d6d6d6]"
                  :to="{name: 'web-development'}"
                >Web Development</nuxt-link
                >
              </li>
              <li
                class="bottom-menu-list-item w-6/12 mb-3 sm:mb-[20px] md:w-6/12 md:mb-[20px] lg:w-auto lg:mb-0"
              >
                <nuxt-link
                  class="text-[16px] md:text-[24px] text-[#F7F7F7] font-bold leading-[36px] transition duration-350 linear hover:text-[#d6d6d6]"
                  :to="{name: 'laravel'}"
                >Laravel</nuxt-link
                >
              </li>

              <li
                class="bottom-menu-list-item w-6/12 mb-3 sm:mb-[20px] md:w-6/12 md:mb-[20px] lg:w-auto lg:mb-0"
              >
                <nuxt-link
                  class="text-[16px] md:text-[24px] text-[#F7F7F7] font-bold leading-[36px] transition duration-350 linear hover:text-[#d6d6d6]"
                  :to="{name: 'shopify'}"
                >Shopify</nuxt-link
                >
              </li>
              <li
                class="bottom-menu-list-item w-6/12 mb-3 sm:mb-[20px] md:w-6/12 md:mb-[20px] lg:w-auto lg:mb-0"
              >
                <nuxt-link
                  class="text-[16px] md:text-[24px] text-[#F7F7F7] font-bold leading-[36px] transition duration-350 linear hover:text-[#d6d6d6]"
                  :to="{name: 'open-source'}"
                >Open Source</nuxt-link
                >
              </li>
              <li
                class="bottom-menu-list-item w-6/12 mb-3 sm:mb-[20px] md:w-6/12 md:mb-[20px] lg:w-auto lg:mb-0"
              >
                <nuxt-link
                  class="text-[16px] md:text-[24px] text-[#F7F7F7] font-bold leading-[36px] transition duration-350 linear hover:text-[#d6d6d6]"
                  :to="{name: 'contact'}"
                >Contact</nuxt-link>
              </li>
            </ul>
          </div>
          <!-- .................................................................................... -->
          <div class="flex flex-wrap justify-start pt-10">
            <div class="w-full sm:w-full md:w-6/12 lg:w-6/12 mb-[40px]">
              <ul class="menu-list">
                <li
                  class="bottom-menu-list-item mr-[20px] xl:mr-[80px] text-[16px] text-[#F7F7F7] font-medium leading-[24px] transition duration-350 linear hover:text-[#d6d6d6] sm:w-full sm:mb-[20px] md:w-full md:mb-[20px] lg:inline-block lg:w-auto lg:mb-0"
                >
                  <nuxt-link :to="''">Instagram</nuxt-link>
                </li>
                <li
                  class="bottom-menu-list-item mr-[20px] xl:mr-[80px] text-[16px] text-[#F7F7F7] font-medium leading-[24px] transition duration-350 linear hover:text-[#d6d6d6] sm:w-full sm:mb-[20px] md:w-full md:mb-[20px] lg:inline-block lg:w-auto lg:mb-0"
                >
                  <nuxt-link :to="''">Github</nuxt-link>
                </li>
                <li
                  class="bottom-menu-list-item mr-[20px] xl:mr-[80px] text-[16px] text-[#F7F7F7] font-medium leading-[24px] transition duration-350 linear hover:text-[#d6d6d6] sm:w-full sm:mb-[20px] md:w-full md:mb-[20px] lg:inline-block lg:w-auto lg:mb-0"
                >
                  <nuxt-link :to="''">Patreon</nuxt-link>
                </li>
                <li
                  class="bottom-menu-list-item mr-[20px] xl:mr-[80px] text-[16px] text-[#F7F7F7] font-medium leading-[24px] transition duration-350 linear hover:text-[#d6d6d6] sm:w-full md:w-full sm:mb-[20px] md:mb-[20px] lg:inline-block lg:w-auto lg:mb-0"
                >
                  <nuxt-link :to="''">Twitter</nuxt-link>
                </li>
              </ul>
            </div>
            <div
              class="w-full flex flex-wrap justify-start md:justify-end sm:w-full md:w-6/12 lg:w-6/12 sm:justify-start md:justify-end lg:justify-end"
            >
              <div
                class="mr-[90px] sm:mr-[0px] md:mr-0 lg:mr-[30px] sm:w-full md:w-auto lg:w-auto"
              >
                <p
                  class="text-[16px] text-[#F7F7F7] font-medium leading-[24px] transition duration-350 linear hover:text-[#d6d6d6] flex justify-start md:justify-end lg:justify-end"
                >
                  House-06, Road-12/A, Sector-10
                </p>
                <p
                  class="text-[16px] text-[#F7F7F7] font-medium leading-[24px] transition duration-350 linear hover:text-[#d6d6d6] flex justify-start md:justify-end lg:justify-end"
                >
                  <svg
                    class="w-6 h-6 mr-2"
                    fill="none"
                    stroke="white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  Uttara, Dhaka-1230
                </p>
              </div>
              <div
                class="sm:w-full md:w-auto lg:w-auto lg:mt-0 md:mt-0"
              >
                <a
                  href="#"
                  class="text-[16px] text-[#F7F7F7] font-medium leading-[24px] transition duration-350 linear hover:text-[#d6d6d6]"
                >
                  <h4>info@qbytesoft.com</h4>
                </a>
                <a
                  href="#"
                  class="text-[16px] text-[#F7F7F7] font-medium leading-[24px] transition duration-350 linear hover:text-[#d6d6d6]"
                >
                  <h4>+8801611 032464</h4>
                </a>
              </div>
            </div>
            <div class="w-full flex flex-wrap mt-8">
              <a
                href="#"
                class="mr-[20px] text-[16px] text-[#F7F7F7] font-medium leading-[24px] transition duration-350 linear hover:underline"
              >
                <h4>Privacy</h4>
              </a>
              <a
                href="#"
                class="text-[16px] text-[#F7F7F7] font-medium leading-[24px] transition duration-350 linear hover:underline"
              >
                <h4>Disclaimer</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer"
}
</script>

<style scoped>

</style>
