<template>
  <div class="hero-area relative overflow-hidden lg:px-10 md:px-10 sm:px-10 px-5" id="source">
    <div class="container mx-auto">
      <div class="flex flex-wrap">
        <div class="w-full sm:w-full md:w-full lg:w-5/12">
          <div>
            <h2
              class="text-[34px] md:text-[56px] text-[#172A3D] font-bold leading-[68px] mb-[30px] md:mb-[70px] border-t-4 border-[#152b3c] block md:inline-block pt-3"
            >
              We ❤ <br class="hidden md:block" />
              (open) source
            </h2>
          </div>
          <div>
            <p
              class="text-[16px] md:text-[24px] text-[#172A3D] font-medium leading-[36px] mb-[55px]"
            >
              We are open source enthusiasts and love to <br />
              work Laravel ecosystem. Mostly we use Laravel <br />
              backend for the custom web application and <br />
              CRM. Our
              <span
                class="text-[#135b73] transition duration-350 linear hover:text-[#197593] hover:underline"
              >team members</span
              >
              amongst Web <br />
              Developer on GitHub makes us confident.
            </p>
          </div>
          <div class="bg-[#ccdcdf] rounded-lg pl-[25px] pt-[30px] pb-[50px]">
            <h4
              class="text-[20px] text-[#172A3D] font-bold leading-[24px] mb-[40px]"
            >
              LOOK AT THIS
            </h4>
            <a
              href="#"
              class="block text-[16px] md:text-[24px] text-[#172A3D] font-medium leading-[36px] mb-[34px] transition duration-350 linear hover:text-[#197593] hover:underline"
            >
              <svg
                class="inline-block w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              Laravel & Vue Application
            </a>
            <a
              href="#"
              class="block text-[16px] md:text-[24px] text-[#172A3D] font-medium leading-[36px] transition duration-350 linear hover:text-[#197593] hover:underline"
            >
              <svg
                class="inline-block w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              Open source Collection
            </a>
          </div>
        </div>
      </div>
    </div>

    <div
      class="absolute top-[100px] right-[-50px] px-3 pt-3 pb-5 shadow-xl w-[600px] -rotate-[8deg] transition duration-350 linear hover:opacity-75 hidden lg:block"
    >
      <a href="#">
        <img class="w-max" src="~/assets/img/hero-bg-2.jpg" alt="open source section" />
      </a>
    </div>
    <div class="absolute bottom-[180px] right-10 hidden lg:block">
      <p class="flex justify-end text-[16px] font-medium leading-[24px]">
        Check out the
        <span
          class="text-[#197593] ml-1 transition duration-350 linear hover:text-[#0f4759] hover:underline"
        >
            postcards
          </span>
      </p>
      <p class="flex justify-end text-[16px] font-medium leading-[24px]">
        we get from kind users all over the world.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "OpenSource"
}
</script>

<style scoped>

</style>
