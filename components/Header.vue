<template>
  <div class="header-area lg:px-10 md:px-10 sm:px-10 px-5 relative">
    <div class="container mx-auto">
      <div class="flex flex-wrap items-center">
        <div class="w-6/12 md:w-3/12 px-0 md:px-3">
          <a href="/" class="logo inline-block">
            <img src="/img/logo.png" alt="logo"/>
          </a>
        </div>
        <div class="w-6/12 md:w-9/12 px-0 md:px-3 flex flex-wrap justify-end">
          <div class="main-menu text-right hidden lg:block">
            <ul class="menu-list">
              <li class="menu-list-item">
                <nuxt-link :to="{name: 'index'}" class="menu-list-link">Home</nuxt-link>
              </li>
              <li class="menu-list-item">
                <nuxt-link :to="{name: 'web-development'}" class="menu-list-link">Web Development</nuxt-link>
              </li>
              <li class="menu-list-item">
                <nuxt-link :to="{name: 'laravel'}" class="menu-list-link">Laravel</nuxt-link>
              </li>
              <li class="menu-list-item">
                <nuxt-link :to="{name: 'shopify'}" class="menu-list-link">Shopify</nuxt-link>
              </li>
              <li class="menu-list-item">
                <nuxt-link :to="{name: 'pricing'}" class="menu-list-link">Plans & Pricing</nuxt-link>
              </li>

              <li class="menu-list-item">
                <nuxt-link :to="{name: 'about-us'}" class="menu-list-link">About Us</nuxt-link>
              </li>
              <li class="menu-list-item">
                <nuxt-link :to="{name: 'contact'}" class="menu-list-link">Contact</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="menu-bar cursor-pointer inline-block lg:hidden" @click="toggleMenu()">
            <svg
              class="w-[36px] h-[36px] transition ease-linear delay-350 text-2xl fill-gray-900 hover:fill-[#fff] hover:bg-[#37ba93]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="scale-150"
                d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="mobile-menu transition ease-linear delay-350">
      <ul class="menu-list border-t border-stone-200 mt-[10px] pt-[10px]">
        <li class="menu-list-mobile-item">
          <nuxt-link :to="{name: 'index'}" class="menu-list-link">Home</nuxt-link>
        </li>
        <li class="menu-list-mobile-item">
          <nuxt-link :to="{name: 'web-development'}" class="menu-list-link">Web Development</nuxt-link>
        </li>
        <li class="menu-list-mobile-item">
          <nuxt-link :to="{name: 'laravel'}" class="menu-list-link">Laravel</nuxt-link>
        </li>
        <li class="menu-list-mobile-item">
          <nuxt-link :to="{name: 'shopify'}" class="menu-list-link">Shopify</nuxt-link>
        </li>
        <li class="menu-list-mobile-item">
          <nuxt-link :to="{name: 'pricing'}" class="menu-list-link">Plans & Pricing</nuxt-link>
        </li>

        <li class="menu-list-mobile-item">
          <nuxt-link :to="{name: 'about-us'}" class="menu-list-link">About Us</nuxt-link>
        </li>
        <li class="menu-list-mobile-item">
          <nuxt-link :to="{name: 'contact'}" class="menu-list-link">Contact</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  mounted() {

  },
  methods:{
    toggleMenu(){
      const mobileMenu = document.getElementsByClassName("mobile-menu")[0];
      mobileMenu.classList.toggle("active");
    }
  },

}
</script>

<style scoped>

</style>
