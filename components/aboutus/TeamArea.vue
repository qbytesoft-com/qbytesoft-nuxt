<template>
  <div class="team-section relative overflow-hidden pt-20 pb-20 bg-[#f7f5f2] lg:px-10 md:px-10 sm:px-10 px-5">
    <div class="container mx-auto">
      <div class="team-top w-full">
        <div class="flex flex-wrap items-center">
          <div class="w-11/12 md:w-6/12 lg:w-3/12">
            <h3 class="text-[32px] leading-[33px] font-bold">
              Meet the team
            </h3>
          </div>
          <div class="w-1/12 md:w-6/12 lg:w-9/12">
            <div class="h-[4px] bg-[#dddddd]"></div>
          </div>
        </div>

      </div>

      <div class="team-bottom w-full flex flex-wrap mt-[50px] justify-between">
        <div class="w-full md:w-full lg:w-6/12">
          <div class="team-item">
            <div class="team-item-top flex flex-wrap items-center">
              <div class="team-img w-[96px] h-[96px] border-[3px] border-[#b6b6b6]  rounded-full p-[6px]">
                <img class="rounded-full w-full h-full object-cover" src="~/assets/img/auth-1.jpg" alt="">
              </div>
              <div class="flex-1 team-title ml-[20px]">
                <p class="text-[18px] md:text-[20px] leading-[24px] font-bold text-[#152b3c]">
                  MD MORSHADUN NUR
                </p>
                <p class="text-[16px] leading-[20px] font-bold text-[#767575]">
                  FULL STACK DEVELOPER
                </p>
              </div>
            </div>
            <div class="team-item-bottom border-l-[3px] border-[#b6b6b6] pl-[30px] w-full md:w-9/12 mt-[20px]">
              <p class="text-[16px] leading-[24px] font-medium text-[#6C757D] mb-[10px]">
                Morshadun Nur is a full stack developer.He is a passionate PHP developer.Also he is playing
                with Javascript, Laravel, Lumen, Vue.
              </p>
              <a href="#"
                 class="transition duration-350 text-[#197593] linear hover:text-[#87898b] hover:underline ">
                @morshadun
              </a>
              <a href="#"
                 class="transition duration-350 text-[#197593] linear hover:text-[#87898b] hover:underline ">
                morshadunnur.me
              </a>
            </div>

          </div>
        </div>
        <div class="lg:mt-0 mt-[60px] w-full md:w-full lg:w-6/12">
          <div class="team-item">
            <div class="team-item-top flex flex-wrap items-center">
              <div class="team-img w-[96px] h-[96px] border-[3px] border-[#b6b6b6]  rounded-full p-[6px]">
                <img class="rounded-full w-full h-full object-cover" src="~/assets/img/auth-2.jpeg" alt="">
              </div>
              <div class="flex-1 team-title ml-[20px]">
                <p class="text-[18px] md:text-[20px] leading-[24px] font-bold text-[#152b3c]">
                  NABIL AHMED EMON
                </p>
                <p class="text-[16px] leading-[20px] font-bold text-[#767575]">
                  UI DESIGNER
                </p>
              </div>
            </div>
            <div class="team-item-bottom border-l-[3px] border-[#b6b6b6] pl-[30px] w-full md:w-9/12 mt-[20px]">
              <p class="text-[16px] leading-[24px] font-medium text-[#6C757D] mb-[10px]">
                Alex can throw backend code, servers and hardware in the mix. He's famous for winning the
                first Laravel blog contest and struggling with Paypal ever since.
              </p>
              <a href="#"
                 class="transition duration-350 text-[#197593] linear hover:text-[#87898b] hover:underline ">
                @morshadun
              </a>
              <a href="#"
                 class="transition duration-350 text-[#197593] linear hover:text-[#87898b] hover:underline ">
                morshadunnur.me
              </a>
            </div>
          </div>
        </div>
        <div class="mt-[60px] w-full md:w-full lg:w-6/12">
          <div class="team-item">
            <div class="team-item-top flex flex-wrap items-center">
              <div class="team-img w-[96px] h-[96px] border-[3px] border-[#b6b6b6]  rounded-full p-[6px]">
                <img class="rounded-full w-full h-full object-cover" src="~/assets/img/auth-3.jpeg" alt="">
              </div>
              <div class="flex-1 team-title ml-[20px]">
                <p class="text-[18px] md:text-[20px] leading-[24px] font-bold text-[#152b3c]">
                  MD. AHSANUL HAQUE MILLAT
                </p>
                <p class="text-[16px] leading-[20px] font-bold text-[#767575]">
                  BACKEND DEVELOPER
                </p>
              </div>
            </div>
            <div class="team-item-bottom border-l-[3px] border-[#b6b6b6] pl-[30px] w-full md:w-9/12 mt-[20px]">
              <p class="text-[16px] leading-[24px] font-medium text-[#6C757D] mb-[10px]">
                PHP developer with experience in the layout, design and coding of websites, framework, CMS
                specifically in PHP format. Knowledgeable of backend development using PHP programming
                language and MySQL & SQL databases. Possessing considerable knowledge of the frontend
                development.
              </p>
              <a href="#"
                 class="transition duration-350 text-[#197593] linear hover:text-[#87898b] hover:underline ">
                @morshadun
              </a>
              <a href="#"
                 class="transition duration-350 text-[#197593] linear hover:text-[#87898b] hover:underline ">
                morshadunnur.me
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
  name: "TeamArea"
}
</script>

<style scoped>

</style>
